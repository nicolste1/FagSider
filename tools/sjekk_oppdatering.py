"""Sammenlikn en ny versjon av forelesningsnotatene med den siden bygger på.

Kjør fra repo-roten:
    python tools/sjekk_oppdatering.py sti/til/ny_versjon.pdf
    python tools/sjekk_oppdatering.py sti/til/ny_versjon.pdf --ta-i-bruk

Uten --ta-i-bruk endres ingenting; du får en rapport (skrives også til
kilder/oppdatering_rapport.md) som sier:

  * hvilke seksjoner som er NYE, FJERNET eller ENDRET (med likhetsgrad)
  * hvilke «Oppgave:»-avsnitt som er kommet til eller forsvunnet
  * hvilken HTML-side/anker som dekker hver berørt seksjon (fra kilder/dekning.json)

Med --ta-i-bruk kopieres den nye PDF-en inn som kilder/TDT4172_forelesningsnotater.pdf
og kilder/notater.md, oppgaver.md, versjon.json og versjon.js regenereres.
Deretter må HTML-sidene oppdateres for hånd (eller av Claude) i tråd med rapporten.
"""

from __future__ import annotations

import difflib
import json
import re
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import pdf_til_tekst as p2t  # noqa: E402

REPO_ROOT = p2t.REPO_ROOT
KILDER = p2t.KILDER


def les_gamle_seksjoner() -> dict[str, dict]:
    """Leser kilder/notater.md tilbake til {nummer: {tittel, tekst, oppgaver}}."""
    sti = KILDER / "notater.md"
    if not sti.exists():
        return {}
    tekst = sti.read_text(encoding="utf-8")
    ut: dict[str, dict] = {}
    deler = re.split(r"^## (\d+(?:\.\d+)*) (.+)$", tekst, flags=re.M)
    # deler = [innledning, nummer, tittel, kropp, nummer, tittel, kropp, ...]
    for i in range(1, len(deler) - 2, 3):
        nummer, tittel, kropp = deler[i], deler[i + 1].strip(), deler[i + 2]
        kropp = re.sub(r"^<!-- side \d+ -->\n?", "", kropp.strip())
        ut[nummer] = {"tittel": tittel, "tekst": kropp.strip(), "oppgaver": p2t.finn_oppgaver(kropp)}
    return ut


def les_dekning() -> dict[str, dict]:
    sti = KILDER / "dekning.json"
    if not sti.exists():
        return {}
    return json.loads(sti.read_text(encoding="utf-8"))


def dekning_for(nummer: str, dekning: dict[str, dict]) -> str:
    """Finner beste treff i dekning.json: eksakt seksjonsnummer, ellers nærmeste forelder."""
    kandidat = nummer
    while kandidat:
        if kandidat in dekning:
            d = dekning[kandidat]
            side = d.get("side", "?")
            anker = d.get("anker")
            return f"{side}#{anker}" if anker else side
        kandidat = kandidat.rsplit(".", 1)[0] if "." in kandidat else ""
    return "(ingen side dekker denne ennå — må lages)"


def likhet(a: str, b: str) -> float:
    return difflib.SequenceMatcher(None, a, b, autojunk=False).ratio()


def ordnivaa_diff(gammel: str, ny: str, maks_linjer: int = 12) -> list[str]:
    """Kort, lesbar diff på setningsnivå."""
    g = re.split(r"(?<=[.?!])\s+", gammel)
    n = re.split(r"(?<=[.?!])\s+", ny)
    ut = []
    for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, g, n, autojunk=False).get_opcodes():
        if tag == "equal":
            continue
        for s in g[i1:i2]:
            ut.append(f"  - {s.strip()[:160]}")
        for s in n[j1:j2]:
            ut.append(f"  + {s.strip()[:160]}")
        if len(ut) >= maks_linjer:
            ut.append("  … (flere endringer)")
            break
    return ut


def lag_rapport(ny_pdf: Path) -> tuple[str, dict]:
    ny = p2t.ekstraher(ny_pdf)
    gamle = les_gamle_seksjoner()
    dekning = les_dekning()
    gammel_versjon = {}
    if (KILDER / "versjon.json").exists():
        gammel_versjon = json.loads((KILDER / "versjon.json").read_text(encoding="utf-8"))

    nye_map = {s["nummer"]: s for s in ny["seksjoner"]}
    linjer: list[str] = []
    L = linjer.append

    L("# Oppdateringsrapport — forelesningsnotater TDT4172")
    L("")
    L(f"| | Siden bygger på | Ny PDF |")
    L(f"|---|---|---|")
    L(f"| Fil | `{gammel_versjon.get('pdf', '?')}` | `{ny_pdf.name}` |")
    L(f"| Datert | {gammel_versjon.get('dato_i_pdf', '?')} | {ny['dato'] or 'ukjent'} |")
    L(f"| Sider | {gammel_versjon.get('sider', '?')} | {len(ny['sider'])} |")
    L(f"| Seksjoner | {len(gamle)} | {len(nye_map)} |")
    L(f"| sha256 | `{str(gammel_versjon.get('sha256', '?'))[:12]}…` | `{ny['sha'][:12]}…` |")
    L("")

    if gammel_versjon.get("sha256") == ny["sha"]:
        L("**Identisk PDF — ingenting å oppdatere.**")
        return "\n".join(linjer), {"identisk": True}

    nye_nr = [n for n in nye_map if n not in gamle]
    fjernet_nr = [n for n in gamle if n not in nye_map]
    endret: list[tuple[str, float]] = []
    uendret: list[str] = []
    for n, s in nye_map.items():
        if n in gamle:
            r = likhet(gamle[n]["tekst"], s["tekst"])
            if r < 0.985:
                endret.append((n, r))
            else:
                uendret.append(n)

    L("## Nye seksjoner")
    if not nye_nr:
        L("_Ingen._")
    for n in nye_nr:
        s = nye_map[n]
        L(f"- **{n} {s['tittel']}** (side {s['side']}, {len(s['tekst'])} tegn, {len(s['oppgaver'])} oppgaver) → dekkes av: {dekning_for(n, dekning)}")
    L("")

    L("## Fjernede seksjoner")
    if not fjernet_nr:
        L("_Ingen._")
    for n in fjernet_nr:
        L(f"- **{n} {gamle[n]['tittel']}** → var dekket av: {dekning_for(n, dekning)}")
    L("")

    L("## Endrede seksjoner")
    if not endret:
        L("_Ingen._")
    for n, r in sorted(endret, key=lambda t: t[1]):
        s = nye_map[n]
        L(f"### {n} {s['tittel']} — {round(r * 100)} % likt → {dekning_for(n, dekning)}")
        for d in ordnivaa_diff(gamle[n]["tekst"], s["tekst"]):
            L(d)
        L("")

    L("## Oppgaver («Oppgave:»)")
    gamle_opp = {o for s in gamle.values() for o in s["oppgaver"]}
    nye_opp = {o for s in nye_map.values() for o in s["oppgaver"]}
    kom_til = [o for o in nye_opp if o not in gamle_opp]
    forsvant = [o for o in gamle_opp if o not in nye_opp]
    L(f"Før: {len(gamle_opp)} · Nå: {len(nye_opp)}")
    if kom_til:
        L("")
        L("Nye / endrede oppgaver (sjekk at de finnes som `.oppgave`-boks på siden):")
        for o in kom_til:
            L(f"- {o[:200]}")
    if forsvant:
        L("")
        L("Oppgaver som ikke lenger finnes i samme form:")
        for o in forsvant:
            L(f"- {o[:200]}")
    L("")

    L("## Uendrede seksjoner")
    L(", ".join(uendret) if uendret else "_Ingen._")
    L("")

    L("## Neste steg")
    L("1. Oppdater HTML-sidene som er listet over (nye seksjoner trenger nye `<section id>` + oppføring i `kilder/dekning.json`).")
    L("2. Legg nye fagbegreper i `glossary.js` og nye «Oppgave:»-avsnitt som `.oppgave`-bokser.")
    L(f"3. Kjør `python tools/sjekk_oppdatering.py {ny_pdf} --ta-i-bruk` for å ta den nye PDF-en i bruk som kilde.")
    L("4. Legg nye sider i `PAGES` i `nav-search.js` og på forsiden.")

    return "\n".join(linjer), {"identisk": False, "nye": nye_nr, "fjernet": fjernet_nr, "endret": endret}


def main(argv: list[str]) -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    args = [a for a in argv[1:] if not a.startswith("--")]
    flagg = {a for a in argv[1:] if a.startswith("--")}
    if not args:
        sys.exit(__doc__)
    ny_pdf = Path(args[0])
    if not ny_pdf.exists():
        sys.exit(f"Fant ikke {ny_pdf}")

    rapport, info = lag_rapport(ny_pdf)
    print(rapport)
    (KILDER / "oppdatering_rapport.md").write_text(rapport + "\n", encoding="utf-8", newline="\n")
    print(f"\n(Rapporten er også lagret i kilder/oppdatering_rapport.md)")

    if "--ta-i-bruk" in flagg:
        if info.get("identisk"):
            print("Identisk PDF, ingenting tatt i bruk.")
            return
        mål = p2t.STANDARD_PDF
        if ny_pdf.resolve() != mål.resolve():
            shutil.copy(ny_pdf, mål)
        r = p2t.ekstraher(mål)
        p2t.skriv_filer(mål, r["sider"], r["sha"], r["toc"], r["seksjoner"])
        print(f"\nTatt i bruk: {mål.name} ({len(r['sider'])} sider, datert {r['dato'] or 'ukjent'}). kilder/ er regenerert.")
        print("Husk å oppdatere HTML-sidene i tråd med rapporten.")


if __name__ == "__main__":
    main(sys.argv)
