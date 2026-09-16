"""Hent ut tekst fra et fags kilde-PDF og lagre den seksjonsvis i <fag>/kilder/.

Kjør fra repo-roten:
    python tools/pdf_til_tekst.py --fag introml                   # bruker den ene PDF-en i introml/kilder/
    python tools/pdf_til_tekst.py --fag introml sti/til/annen.pdf

Skriver til <fag>/kilder/:
    notater.md    - teksten, én ## -overskrift per seksjon (1.1, 1.2.1, ...)
    oppgaver.md   - alle "Oppgave:"-avsnitt, gruppert per seksjon
    versjon.json  - dato i PDF-en, antall sider, sha256, seksjonsliste
    versjon.js    - samme info som JS (leses av site.js og vises i bunnteksten)

Forutsetter en PDF med innholdsfortegnelse på side 1 og nummererte overskrifter
(1.1, 1.2.3, ...), slik forelesningsnotatene i TDT4172 er. For annet fagstoff
(slides, bok-kapitler, markdown) skrives notater.md og versjon.js for hånd,
se NYTT-FAG.md.

Formler blir uleselige i ren tekst (det er forventet); poenget med filene er
å kunne *diffe* to versjoner av kilden og se hvilke seksjoner som er endret.
Se tools/sjekk_oppdatering.py.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from datetime import date
from pathlib import Path

try:
    import pdfplumber
except ImportError:  # pragma: no cover
    sys.exit("Mangler pdfplumber. Installer med:  pip install pdfplumber")

REPO_ROOT = Path(__file__).resolve().parents[1]

# LaTeX-PDF-er legger aksenten som eget tegn foran bokstaven ("˚a" i stedet for "å").
ACCENT_FIX = [
    ("˚" + "a", "å"), ("˚" + "A", "Å"),
    ("¨" + "u", "ü"), ("¨" + "U", "Ü"),
    ("¨" + "o", "ö"), ("¨" + "O", "Ö"),
    ("¨" + "a", "ä"), ("¨" + "A", "Ä"),
    ("¨" + "ı", "ï"), ("¨" + "i", "ï"),
    ("´" + "e", "é"), ("´" + "E", "É"),
    ("`" + "e", "è"), ("`" + "a", "à"),
    ("ﬁ", "fi"), ("ﬂ", "fl"),
]

MONTHS = {
    "january": "januar", "february": "februar", "march": "mars", "april": "april",
    "may": "mai", "june": "juni", "july": "juli", "august": "august",
    "september": "september", "october": "oktober", "november": "november", "december": "desember",
}

HEADING_RE = re.compile(r"^(\d+(?:\.\d+)*)\s+(\S.*?)\s*$")
TOC_LINE_RE = re.compile(r"^(\d+(?:\.\d+)*)\s+(.+?)\s*(?:\.\s*){2,}\s*\d+\s*$")
PAGE_NUMBER_RE = re.compile(r"^\d{1,3}$")
DATE_RE = re.compile(r"\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})\b")


def kilder_for(fag: str) -> Path:
    """Mappen <fag>/kilder/. Krever at faget finnes (har fag.js)."""
    if not (REPO_ROOT / fag / "fag.js").exists():
        sys.exit(f"Fant ikke faget «{fag}» (mangler {fag}/fag.js). Fag som finnes: "
                 + ", ".join(sorted(p.parent.name for p in REPO_ROOT.glob("*/fag.js") if p.parent.name != "_mal")))
    k = REPO_ROOT / fag / "kilder"
    k.mkdir(exist_ok=True)
    return k


def standard_pdf(kilder: Path) -> Path | None:
    """Den ene PDF-en i kilder/, om det finnes nøyaktig én."""
    pdfs = sorted(kilder.glob("*.pdf"))
    return pdfs[0] if len(pdfs) == 1 else None


def normaliser(tekst: str) -> str:
    for a, b in ACCENT_FIX:
        tekst = tekst.replace(a, b)
    tekst = tekst.replace("˚", "").replace("¨", "")
    return tekst


def les_pdf(sti: Path) -> tuple[list[str], str]:
    """Returnerer (tekst per side, sha256)."""
    data = sti.read_bytes()
    sha = hashlib.sha256(data).hexdigest()
    sider: list[str] = []
    with pdfplumber.open(str(sti)) as pdf:
        for page in pdf.pages:
            sider.append(normaliser(page.extract_text() or ""))
    return sider, sha


def finn_dato(forside: str) -> tuple[str, str]:
    """Returnerer (engelsk dato slik den står i PDF-en, norsk dato)."""
    m = DATE_RE.search(forside)
    if not m:
        return "", ""
    mnd, dag, aar = m.group(1), int(m.group(2)), m.group(3)
    return f"{mnd} {dag}, {aar}", f"{dag}. {MONTHS[mnd.lower()]} {aar}"


def finn_toc(sider: list[str]) -> list[tuple[str, str]]:
    """Leser innholdsfortegnelsen (første side) -> [(nummer, tittel), ...]."""
    toc: list[tuple[str, str]] = []
    for linje in sider[0].splitlines():
        m = TOC_LINE_RE.match(linje.strip())
        if m:
            toc.append((m.group(1), m.group(2).strip()))
    for linje in sider[0].splitlines():
        m = re.match(r"^(\d+)\s+([A-Za-zÆØÅæøå].+?)\s+\d+$", linje.strip())
        if m and not any(n == m.group(1) for n, _ in toc):
            toc.insert(0, (m.group(1), m.group(2).strip()))
    toc.sort(key=lambda t: [int(x) for x in t[0].split(".")])
    return toc


def splitt_seksjoner(sider: list[str], toc: list[tuple[str, str]]) -> list[dict]:
    """Deler brødteksten (side 2 og utover) i seksjoner basert på TOC-overskriftene."""
    kjente = {nummer: tittel for nummer, tittel in toc}
    seksjoner: list[dict] = []
    gjeldende = {"nummer": "0", "tittel": "Forside", "side": 1, "linjer": []}

    for sidenr, tekst in enumerate(sider, start=1):
        if sidenr == 1:
            continue
        for linje in tekst.splitlines():
            s = linje.strip()
            if PAGE_NUMBER_RE.match(s):
                continue
            m = HEADING_RE.match(s)
            if m and m.group(1) in kjente:
                if _norm(m.group(2)) == _norm(kjente[m.group(1)]):
                    seksjoner.append(gjeldende)
                    gjeldende = {"nummer": m.group(1), "tittel": kjente[m.group(1)], "side": sidenr, "linjer": []}
                    continue
            gjeldende["linjer"].append(s)
    seksjoner.append(gjeldende)

    ut = []
    for sek in seksjoner:
        if sek["nummer"] == "0":
            continue
        tekst = "\n".join(sek["linjer"]).strip()
        ut.append({"nummer": sek["nummer"], "tittel": sek["tittel"], "side": sek["side"],
                   "tekst": tekst, "oppgaver": finn_oppgaver(tekst)})
    return ut


def _norm(s: str) -> str:
    return re.sub(r"[\s.]+", "", s).lower()


def finn_oppgaver(tekst: str) -> list[str]:
    """Finner avsnitt som starter med 'Oppgave:' og returnerer selve spørsmålet."""
    ut = []
    flat = tekst.replace("\n", " ")
    for m in re.finditer(r"Oppgave:\s*(.+?)(?=(?:Oppgave:|Svar på oppgaven:|Svaret lyder:|Svar:|$))", flat):
        frag = m.group(1).strip()
        kutt = frag.rfind("?", 0, 320)
        if kutt > 0:
            frag = frag[: kutt + 1]
        elif len(frag) > 300:
            frag = frag[:300] + "…"
        ut.append(re.sub(r"\s+", " ", frag))
    return ut


def skriv_filer(kilder: Path, pdf: Path, sider: list[str], sha: str, seksjoner: list[dict]) -> None:
    dato_en, dato_no = finn_dato(sider[0])

    md = ["# Tekstuttrekk av kilden", "",
          f"Kilde: `{pdf.name}` · datert {dato_en or 'ukjent'} · {len(sider)} sider · sha256 `{sha[:12]}…`", "",
          "> Generert av `tools/pdf_til_tekst.py`. Formler er uleselige her; filen brukes til å diffe versjoner.", ""]
    for sek in seksjoner:
        md += [f"## {sek['nummer']} {sek['tittel']}", f"<!-- side {sek['side']} -->", "", sek["tekst"], ""]
    (kilder / "notater.md").write_text("\n".join(md), encoding="utf-8", newline="\n")

    opp = ["# Oppgaver («Oppgave:») i kilden", "", f"Datert {dato_en or 'ukjent'}. Generert av `tools/pdf_til_tekst.py`.", ""]
    teller = 0
    for sek in seksjoner:
        if not sek["oppgaver"]:
            continue
        opp.append(f"## {sek['nummer']} {sek['tittel']}")
        for o in sek["oppgaver"]:
            teller += 1
            opp.append(f"{teller}. {o}")
        opp.append("")
    (kilder / "oppgaver.md").write_text("\n".join(opp), encoding="utf-8", newline="\n")

    versjon = {
        "pdf": pdf.name,
        "dato_i_pdf": dato_en,
        "dato_norsk": dato_no,
        "sider": len(sider),
        "sha256": sha,
        "ekstrahert": date.today().isoformat(),
        "antall_oppgaver": teller,
        "seksjoner": [{"nummer": s["nummer"], "tittel": s["tittel"], "side": s["side"], "tegn": len(s["tekst"]), "oppgaver": len(s["oppgaver"])} for s in seksjoner],
    }
    (kilder / "versjon.json").write_text(json.dumps(versjon, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    js_versjon = {k: versjon[k] for k in ("pdf", "dato_i_pdf", "dato_norsk", "sider", "ekstrahert", "antall_oppgaver")}
    (kilder / "versjon.js").write_text(
        "/* Generert av tools/pdf_til_tekst.py — ikke rediger for hånd. */\n"
        "window.NOTATER_VERSJON = " + json.dumps(js_versjon, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8", newline="\n")


def ekstraher(pdf: Path) -> dict:
    """Brukes også av sjekk_oppdatering.py."""
    sider, sha = les_pdf(pdf)
    toc = finn_toc(sider)
    seksjoner = splitt_seksjoner(sider, toc)
    dato_en, dato_no = finn_dato(sider[0])
    return {"pdf": pdf, "sider": sider, "sha": sha, "toc": toc, "seksjoner": seksjoner, "dato": dato_en, "dato_norsk": dato_no}


def main(argv: list[str]) -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("pdf", nargs="?", help="PDF å lese (standard: den ene PDF-en i <fag>/kilder/)")
    ap.add_argument("--fag", default="introml", help="fagets mappenavn (standard: introml)")
    a = ap.parse_args(argv[1:])
    kilder = kilder_for(a.fag)
    pdf = Path(a.pdf) if a.pdf else standard_pdf(kilder)
    if not pdf or not pdf.exists():
        sys.exit(f"Fant ingen PDF. Oppgi sti, eller legg nøyaktig én PDF i {kilder}")
    r = ekstraher(pdf)
    skriv_filer(kilder, pdf, r["sider"], r["sha"], r["seksjoner"])
    print(f"OK  {a.fag}: {pdf.name}: {len(r['sider'])} sider, datert {r['dato'] or 'ukjent'}, {len(r['seksjoner'])} seksjoner")
    for s in r["seksjoner"]:
        print(f"    {s['nummer']:<7} {s['tittel']:<40} s.{s['side']:<3} {len(s['tekst']):>6} tegn  {len(s['oppgaver'])} oppg.")
    print(f"Skrev {kilder.relative_to(REPO_ROOT)}/notater.md, oppgaver.md, versjon.json, versjon.js")


if __name__ == "__main__":
    main(sys.argv)
