"""Konsistenssjekk av sidene. Kjør fra repo-roten:

    python tools/valider.py                 # alle fag
    python tools/valider.py --fag algdat    # ett fag

Sjekker for hvert fag (mapper med fag.js, unntatt _mal/) at
  * alle data-term-nøkler finnes i <fag>/begreper.js (og lister ubrukte begreper)
  * alle `more`-lenker i begreper.js peker på eksisterende ankre
  * alle interne lenker og ankre peker på noe som finnes
  * HTML-taggene er balansert og KaTeX-avgrensere er balanserte
  * <fag>/kilder/dekning.json dekker alle seksjoner i versjon.json (om den finnes)
  * alle .oppgave-bokser er listet i kapitteloversikten, og omvendt
  * sidene i fag.js finnes
  * eksamensfokus: <fag>/kilder/eksamensanalyse.md og eksamen.json finnes, hver innholdsside har
    <section id="fokus">
Pluss at lenkene på rot-index.html (portalen) finnes.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VOID = {"meta", "link", "br", "hr", "img", "input", "area", "base", "col", "embed", "source", "track", "wbr",
        "path", "circle", "rect", "line", "polyline", "polygon", "use", "stop"}


class Bal(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack, self.errs = [], []

    def handle_starttag(self, tag, attrs):
        if tag not in VOID:
            self.stack.append((tag, self.getpos()[0]))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack:
            self.errs.append(f"linje {self.getpos()[0]}: </{tag}> uten åpning")
            return
        t, ln = self.stack.pop()
        if t != tag:
            self.errs.append(f"linje {self.getpos()[0]}: </{tag}> lukker <{t}> fra linje {ln}")


def sjekk_html(rel: str, h: str, ids: dict[str, set], problems: list[str]) -> None:
    body = re.sub(r"<script.*?</script>", "", h, flags=re.S)
    for href in re.findall(r'href="([^"]+)"', body):
        if href.startswith(("http", "mailto")):
            continue
        target, _, frag = href.partition("#")
        if target in ("", "./", "../", "../../"):
            if frag and target == "" and frag not in ids[rel]:
                problems.append(f"{rel}: anker #{frag} finnes ikke på siden")
            continue
        tp = ((ROOT / rel).parent / target).resolve()
        if tp.is_dir():
            tp = tp / "index.html"
        if not tp.exists():
            problems.append(f"{rel}: lenke til {href} finnes ikke")
            continue
        try:
            r2 = tp.relative_to(ROOT.resolve()).as_posix()
        except ValueError:
            continue
        if r2 in ids and frag and frag not in ids[r2]:
            problems.append(f"{rel}: lenke {href}: anker #{frag} finnes ikke i {r2}")
    b = Bal()
    b.feed(h)
    for e in b.errs[:5]:
        problems.append(f"{rel}: {e}")
    if b.stack:
        problems.append(f"{rel}: ulukkede tagger: {b.stack[-3:]}")
    if body.count("\\(") != body.count("\\)"):
        problems.append(f"{rel}: ubalansert \\( \\)")
    if body.count("\\[") != body.count("\\]"):
        problems.append(f"{rel}: ubalansert \\[ \\]")
    if body.count("$$") % 2:
        problems.append(f"{rel}: oddetall $$")


def sjekk_fag(fag: str, problems: list[str]) -> None:
    fd = ROOT / fag
    pages = sorted(p.relative_to(ROOT).as_posix() for p in list(fd.glob("*.html")) + list(fd.glob("kap*/*.html")) + list(fd.glob("oving/*.html")))
    html = {p: (ROOT / p).read_text(encoding="utf-8") for p in pages}
    ids = {p: set(re.findall(r'\sid="([^"]+)"', h)) for p, h in html.items()}

    gl_path = fd / "begreper.js"
    gl = gl_path.read_text(encoding="utf-8") if gl_path.exists() else ""
    keys = set(re.findall(r"^\s*'([a-z0-9-]+)':\s*\{", gl, flags=re.M))
    used: set[str] = set()
    for p, h in html.items():
        for k in re.findall(r'data-term="([^"]+)"', h):
            used.add(k)
            if k not in keys:
                problems.append(f"{p}: data-term '{k}' mangler i {fag}/begreper.js")
    for var, frag in re.findall(r"more:\s*([A-Z]+)\s*\+\s*'#([a-z0-9-]+)'", gl):
        m = re.search(rf"var {var} = '([^']+)'", gl)
        if not m:
            problems.append(f"{fag}/begreper.js: ukjent sidevariabel {var}")
        elif frag not in ids.get(f"{fag}/{m.group(1)}", set()):
            problems.append(f"{fag}/begreper.js: more -> {m.group(1)}#{frag} finnes ikke")

    for p, h in html.items():
        sjekk_html(p, h, ids, problems)

    fagjs = (fd / "fag.js").read_text(encoding="utf-8")
    for side in re.findall(r"'(kap[^']+\.html)'", fagjs):
        if not (fd / side).exists():
            problems.append(f"{fag}/fag.js: siden {side} finnes ikke")

    kilder = fd / "kilder"
    if (kilder / "versjon.json").exists():
        dek = json.loads((kilder / "dekning.json").read_text(encoding="utf-8")) if (kilder / "dekning.json").exists() else {}
        ver = json.loads((kilder / "versjon.json").read_text(encoding="utf-8"))
        for s in ver.get("seksjoner", []):
            n = s["nummer"]
            if n not in dek:
                problems.append(f"{fag}/kilder/dekning.json mangler seksjon {n}")
            else:
                page, anker = f"{fag}/{dek[n]['side']}", dek[n].get("anker")
                if page not in ids:
                    problems.append(f"{fag}/kilder/dekning.json: side {dek[n]['side']} finnes ikke")
                elif anker and anker not in ids[page]:
                    problems.append(f"{fag}/kilder/dekning.json: {dek[n]['side']}#{anker} finnes ikke")

    # Eksamensfokus: analyse må finnes, og hver innholdsside har #fokus
    if not (kilder / "eksamensanalyse.md").exists():
        problems.append(f"{fag}/kilder/eksamensanalyse.md mangler (steg 0 i NYTT-FAG.md: lag den sammen med brukeren)")
    eks_path = kilder / "eksamen.json"
    if eks_path.exists():
        try:
            eks = json.loads(eks_path.read_text(encoding="utf-8"))
            dek = json.loads((kilder / "dekning.json").read_text(encoding="utf-8")) if (kilder / "dekning.json").exists() else {}
            for n in dek:
                # Underpunkter (1.2.3) arver fra deltemaet (1.2); nøkler uten tall foran (A1.1 = øvinger) sjekkes ikke.
                if n.startswith("_") or "." not in n or not n[0].isdigit():
                    continue
                deltema = ".".join(n.split(".")[:2])
                if deltema not in eks:
                    problems.append(f"{fag}/kilder/eksamen.json mangler deltema {deltema} (prio/type), brukt av {n} i dekning.json")
        except json.JSONDecodeError as e:
            problems.append(f"{fag}/kilder/eksamen.json: ugyldig JSON ({e})")
    else:
        problems.append(f"{fag}/kilder/eksamen.json mangler")
    for p, h in html.items():
        if not re.search(r"/(kap\d+|oving)/(?!index\.html)", "/" + p):
            continue
        if 'id="fokus"' not in h:
            problems.append(f"{p}: mangler <section id=\"fokus\"> (00 · Eksamensfokus)")

    for kap in sorted(fd.glob("kap*/index.html")):
        listed = set(re.findall(r'href="[^"#]+#(oppg-[^"]+)"', kap.read_text(encoding="utf-8")))
        boxes: set[str] = set()
        for sub in kap.parent.glob("*.html"):
            if sub.name != "index.html":
                boxes |= set(re.findall(r'class="oppgave" data-quiz id="([^"]+)"', sub.read_text(encoding="utf-8")))
        for b_ in sorted(boxes - listed):
            problems.append(f"{fag}/{kap.parent.name}: oppgave {b_} mangler i oversikten")
        for l in sorted(listed - boxes):
            problems.append(f"{fag}/{kap.parent.name}: oversikten lenker til {l} som ikke finnes")
        print(f"  {fag}/{kap.parent.name}: {len(boxes)} oppgavebokser, {len(listed)} i oversikten")
    print(f"  {fag}: {len(pages)} sider, {len(keys)} begreper definert, {len(used)} brukt; ubrukte: {sorted(keys - used) or 'ingen'}")


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser()
    ap.add_argument("--fag", help="bare dette faget")
    a = ap.parse_args()
    fag_liste = [a.fag] if a.fag else sorted(p.parent.name for p in ROOT.glob("*/fag.js") if p.parent.name != "_mal")
    problems: list[str] = []
    for fag in fag_liste:
        if not (ROOT / fag / "fag.js").exists():
            print(f"Fant ikke faget {fag}")
            return 1
        print(f"Fag: {fag}")
        sjekk_fag(fag, problems)
    portal = ROOT / "index.html"
    if portal.exists():
        h = portal.read_text(encoding="utf-8")
        sjekk_html("index.html", h, {"index.html": set(re.findall(r'\sid="([^"]+)"', h))}, problems)
    if problems:
        print("\nPROBLEMER:")
        for x in problems:
            print(" -", x)
        return 1
    print("\nINGEN PROBLEMER")
    return 0


if __name__ == "__main__":
    sys.exit(main())
