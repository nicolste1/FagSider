#!/usr/bin/env python3
"""oversikt.py — kompakt oversikt over fagsidene, skrevet for agenter (retrieval-skillen).

Målet er å svare på «hva står på siden» med minst mulig output, uten å lese HTML.

  python tools/oversikt.py                                   # fagene som finnes
  python tools/oversikt.py --fag introml                     # alle innholdssider m/ seksjoner
  python tools/oversikt.py --fag introml --del 1.2 1.3       # seksjonene som dekker notat-/deltema 1.2 og 1.3
  python tools/oversikt.py --fag introml --side kap1/regresjon.html          # én side i detalj
  python tools/oversikt.py --fag introml --tekst kap1/regresjon.html#gini    # ren tekst fra én/flere seksjoner
  python tools/oversikt.py --fag introml --del 1.3 --tekst   # ren tekst fra alle seksjonene --del treffer

Oppslag for --del: 1) kilder/dekning.json (nøkkel = nummer, underseksjoner med prefiks tas med),
2) ellers sider hvis Eksamensfokus-kildenote eller eyebrow nevner nummeret («deltema 1.2», «Notater 1.2»).
Ingen avhengigheter utover standardbiblioteket.
"""
import argparse
import json
import re
import sys
from html import unescape
from pathlib import Path

ROT = Path(__file__).resolve().parent.parent
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


# ---------- hjelpere ----------

def les(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def strip(html: str) -> str:
    """HTML → én linje ren tekst."""
    html = re.sub(r'</span>(?=\w|<(?:strong|b|em)\b)', " ", html)  # «<span class="tag">Forklar</span><strong>Tekst» → «Forklar Tekst»
    html = re.sub(r"<[^>]+>", "", html)
    return re.sub(r"\s+", " ", unescape(html)).strip()


def tekst(html: str) -> str:
    """HTML → ren tekst med linjeskift der det er naturlig. Fjerner script/style/svg."""
    html = re.sub(r"<(script|style|svg)\b[^>]*>.*?</\1>", "", html, flags=re.S | re.I)
    html = re.sub(r"<button[^>]*>.*?</button>", "", html, flags=re.S | re.I)
    html = re.sub(r"<(summary)[^>]*>(.*?)</\1>", r"\n[\2]\n", html, flags=re.S | re.I)
    html = re.sub(r"<(?:br\s*/?|/p|/li|/h[1-6]|/div|/tr|/section)>", "\n", html, flags=re.I)
    html = re.sub(r"<li\b[^>]*>", "\n- ", html, flags=re.I)
    html = re.sub(r"<td\b[^>]*>", " | ", html, flags=re.I)
    html = re.sub(r"<[^>]+>", "", html)
    linjer = [re.sub(r"[ \t]+", " ", l).strip() for l in unescape(html).split("\n")]
    ut, forrige_tom = [], False
    for l in linjer:
        if not l:
            if not forrige_tom and ut:
                ut.append("")
            forrige_tom = True
            continue
        ut.append(l)
        forrige_tom = False
    return "\n".join(ut).strip()


def forste(pattern: str, html: str, flags=re.S) -> str:
    m = re.search(pattern, html, flags)
    return strip(m.group(1)) if m else ""


# ---------- parsing ----------

def fagene():
    return sorted(d.name for d in ROT.iterdir() if d.is_dir() and (d / "fag.js").exists() and not d.name.startswith("_"))


def sider(fag: str):
    """Innholdssider (ikke index) sortert kapittelvis, index-sidene til slutt."""
    alle = sorted((ROT / fag).glob("kap*/*.html"), key=lambda p: (int(re.sub(r"\D", "", p.parent.name) or 0), p.name))
    return [p for p in alle if p.name != "index.html"], [p for p in alle if p.name == "index.html"]


def parse_side(p: Path, fag: str) -> dict:
    html = les(p)
    rel = p.relative_to(ROT / fag).as_posix()
    side = {
        "fil": rel,
        "tittel": forste(r"<title>(.*?)</title>", html),
        "eyebrow": forste(r'class="eyebrow"[^>]*>(.*?)</', html),
        "fokus": [],
        "seksjoner": [],
    }
    for m in re.finditer(r"<section\b([^>]*)>(.*?)</section>", html, re.S):
        attr, body = m.group(1), m.group(2)
        idm = re.search(r'id="([^"]+)"', attr)
        if not idm:
            continue
        sid = idm.group(1)
        s = {
            "id": sid,
            "badge": forste(r'class="section-badge"[^>]*>(.*?)</', body),
            "h2": forste(r"<h2\b[^>]*>(.*?)</h2>", body),
            "kilde": forste(r'class="source-note"[^>]*>(.*?)</div>', body),
            "lm": [strip(x) for x in re.findall(r'class="lm-list"[^>]*>(.*?)</(?:ul|ol)>', body, re.S) for x in re.findall(r"<li\b[^>]*>(.*?)</li>", x, re.S)],
            "oppgaver": re.findall(r'class="oppgave"[^>]*\bid="([^"]+)"', body),
            "quiz": len(re.findall(r'class="quiz\b', body)),
            "widget": len(re.findall(r'class="widget\b', body)),
            "details": len(re.findall(r"<details\b", body)),
            "ord": len(strip(re.sub(r"<(script|style|svg)\b[^>]*>.*?</\1>", "", body, flags=re.S)).split()),
        }
        if sid == "fokus":
            # linjene i callout-boksen (Regn/Forklar/Tegn/Lavere …)
            callout = re.search(r'class="callout[^"]*"[^>]*>(.*?)</div>\s*(?:<div class="source-note"|</div>)', body, re.S)
            kilde_html = callout.group(1) if callout else body
            linjer = [strip(x) for x in re.findall(r"<(?:li|p)\b[^>]*>(.*?)</(?:li|p)>", kilde_html, re.S)]
            side["fokus"] = [l for l in linjer if l]
            side["fokus_kilde"] = s["kilde"]
        side["seksjoner"].append(s)
    return side


def eksamen(fag: str) -> dict:
    p = ROT / fag / "kilder" / "eksamen.json"
    if not p.exists():
        return {}
    try:
        return json.loads(les(p))
    except json.JSONDecodeError:
        return {}


def dekning(fag: str) -> dict:
    p = ROT / fag / "kilder" / "dekning.json"
    if not p.exists():
        return {}
    try:
        return {k: v for k, v in json.loads(les(p)).items() if not k.startswith("_")}
    except json.JSONDecodeError:
        return {}


# ---------- utskrift ----------

def linje_seksjon(s: dict, detaljert=False) -> str:
    ekstra = []
    if s["oppgaver"]:
        ekstra.append(f"{len(s['oppgaver'])} oppg")
    if s["quiz"]:
        ekstra.append(f"{s['quiz']} quiz")
    if s["widget"]:
        ekstra.append("widget")
    if s["details"]:
        ekstra.append(f"{s['details']} utdypning")
    ekstra.append(f"~{s['ord']} ord")
    hode = f"  #{s['id']:<24} {s['badge'] or s['h2']}"
    if s["badge"] and s["h2"] and s["h2"] not in s["badge"]:
        hode += f" — {s['h2']}"
    ut = hode + (f"   [{s['kilde']}]" if s["kilde"] else "") + f"   ({', '.join(ekstra)})"
    if detaljert:
        for lm in s["lm"]:
            ut += f"\n      LM: {lm}"
        if s["oppgaver"]:
            ut += "\n      oppg: " + ", ".join(s["oppgaver"])
    return ut


def skriv_side(side: dict, detaljert=False, kun_ids=None):
    print(f"{side['fil']}  —  {side['tittel']}")
    if side["eyebrow"]:
        print(f"  {side['eyebrow']}")
    if detaljert and side["fokus"]:
        print("  Eksamensfokus:" + (f" ({side.get('fokus_kilde')})" if side.get("fokus_kilde") else ""))
        for l in side["fokus"]:
            print(f"    · {l}")
    for s in side["seksjoner"]:
        if s["id"] == "fokus" and not detaljert:
            continue
        if kun_ids is not None and s["id"] not in kun_ids:
            continue
        if s["id"] == "fokus":
            continue
        print(linje_seksjon(s, detaljert))


def skriv_tekst(fag: str, ref: str, side_cache: dict):
    fil, _, anker = ref.partition("#")
    p = ROT / fag / fil
    if not p.exists():
        print(f"!! finner ikke {fag}/{fil}")
        return
    html = les(p)
    if anker:
        m = re.search(rf'<section\b[^>]*\bid="{re.escape(anker)}"[^>]*>(.*?)</section>', html, re.S)
        if not m:
            print(f"!! finner ikke #{anker} i {fag}/{fil}")
            return
        body = m.group(1)
    else:
        m = re.search(r"<main\b[^>]*>(.*?)</main>", html, re.S)
        body = m.group(1) if m else html
    print(f"\n===== {fag}/{fil}#{anker} =====" if anker else f"\n===== {fag}/{fil} =====")
    print(tekst(body))


def slaa_opp(fag: str, nummer: str, dek: dict, alle_sider: list):
    """→ liste av (fil, sett-av-ankere eller None for hele siden, kilde-tekst)."""
    treff = {}  # fil -> set(anker) | None
    for k, v in dek.items():
        if k == nummer or k.startswith(nummer + "."):
            fil = v.get("side")
            if not fil:
                continue
            ank = v.get("anker")
            if ank is None:
                treff[fil] = None
            elif treff.get(fil, set()) is not None:
                treff.setdefault(fil, set()).add(ank)
    if treff:
        return [(f, a, "dekning.json") for f, a in treff.items()], None
    # fallback: Eksamensfokus-kildenote eller eyebrow nevner nummeret
    mønster = re.compile(rf"(?<![\d.]){re.escape(nummer)}(?![\d])")
    ut = []
    for side in alle_sider:
        if mønster.search(side.get("fokus_kilde", "") or "") or mønster.search(side["eyebrow"] or ""):
            ut.append((side["fil"], None, "Eksamensfokus/eyebrow"))
    return ut, ("ingen treff" if not ut else None)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--fag", help="slug, f.eks. introml")
    ap.add_argument("--del", dest="deler", nargs="*", help="notat-/deltema-numre, f.eks. 1.2 1.3")
    ap.add_argument("--side", help="én side, f.eks. kap1/regresjon.html")
    ap.add_argument("--tekst", nargs="*", help="ren tekst: fil#anker … (tom liste sammen med --del/--side = alle treff)")
    a = ap.parse_args()

    if not a.fag:
        for f in fagene():
            fagjs = les(ROT / f / "fag.js")
            kode = forste(r"kode:\s*'([^']*)'", fagjs, 0)
            navn = forste(r"navn:\s*'([^']*)'", fagjs, 0)
            n_inn, _ = sider(f)
            print(f"{f:<14} {kode:<8} {navn}   ({len(n_inn)} innholdssider)")
        return

    if not (ROT / a.fag).is_dir():
        sys.exit(f"!! ukjent fag: {a.fag}. Finnes: {', '.join(fagene())}")

    innhold, indekser = sider(a.fag)
    parsed = [parse_side(p, a.fag) for p in innhold]
    ved_fil = {s["fil"]: s for s in parsed}
    eks = eksamen(a.fag)

    # --tekst med eksplisitte referanser
    if a.tekst:
        for ref in a.tekst:
            skriv_tekst(a.fag, ref, ved_fil)
        return

    # --side
    if a.side:
        side = ved_fil.get(a.side)
        if not side:
            sys.exit(f"!! finner ikke {a.fag}/{a.side}. Sider: {', '.join(ved_fil)}")
        skriv_side(side, detaljert=True)
        if a.tekst is not None:
            for s in side["seksjoner"]:
                if s["id"] != "fokus":
                    skriv_tekst(a.fag, f"{a.side}#{s['id']}", ved_fil)
        return

    # --del
    if a.deler:
        dek = dekning(a.fag)
        valgte = []  # (fil, ankere|None)
        for nummer in a.deler:
            treff, feil = slaa_opp(a.fag, nummer, dek, parsed)
            e = eks.get(nummer) if isinstance(eks.get(nummer), dict) else None
            eks_txt = f"  eksamen.json: prio {e.get('prio')}, {'/'.join(e.get('type', []))}, {', '.join(e.get('oppgaver', [])) or 'ingen tidl. oppgaver'}" if e else ""
            print(f"## {nummer}{eks_txt}")
            if feil:
                print(f"  !! {feil} i dekning.json eller Eksamensfokus. Sider i faget: {', '.join(ved_fil)}")
                continue
            for fil, ankere, via in treff:
                side = ved_fil.get(fil)
                if not side:
                    print(f"  {fil}  (via {via}; siden finnes ikke / er en index-side)")
                    continue
                print(f"  via {via}:")
                skriv_side(side, detaljert=True, kun_ids=ankere)
                valgte.append((fil, ankere))
            print()
        if a.tekst is not None:
            for fil, ankere in valgte:
                ids = ankere if ankere is not None else [s["id"] for s in ved_fil[fil]["seksjoner"] if s["id"] != "fokus"]
                for sid in ids:
                    skriv_tekst(a.fag, f"{fil}#{sid}", ved_fil)
        return

    # bare --fag: oversikt over alle innholdssider
    print(f"# {a.fag} — {len(parsed)} innholdssider" + (f", eksamen.json {eks.get('status', 'finnes')}" if eks else ", ingen eksamen.json"))
    for side in parsed:
        skriv_side(side)
        print()
    if indekser:
        print("kapitteloversikter: " + ", ".join(p.relative_to(ROT / a.fag).as_posix() for p in indekser))


if __name__ == "__main__":
    main()
