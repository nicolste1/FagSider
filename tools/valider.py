"""Enkel konsistenssjekk av sidene. Kjør fra repo-roten:  python tools/valider.py

Sjekker at
  * alle data-term-nøkler finnes i glossary.js (og lister ubrukte begreper)
  * alle interne lenker og ankre peker på noe som finnes
  * HTML-taggene er balansert
  * KaTeX-avgrensere er balansert
  * kilder/dekning.json dekker alle seksjoner i kilder/versjon.json
  * alle .oppgave-bokser er listet i kapitteloversikten, og omvendt
"""

from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = sorted(str(p.relative_to(ROOT)).replace("\\", "/") for p in list(ROOT.glob("*.html")) + list(ROOT.glob("kap*/*.html")))
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


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    problems: list[str] = []
    html = {p: (ROOT / p).read_text(encoding="utf-8") for p in PAGES}
    ids = {p: set(re.findall(r'\sid="([^"]+)"', h)) for p, h in html.items()}

    gl = (ROOT / "glossary.js").read_text(encoding="utf-8")
    keys = set(re.findall(r"^\s*'([a-z0-9-]+)':\s*\{", gl, flags=re.M))
    used: set[str] = set()
    for p, h in html.items():
        for k in re.findall(r'data-term="([^"]+)"', h):
            used.add(k)
            if k not in keys:
                problems.append(f"{p}: data-term '{k}' mangler i glossary.js")
    for var, frag in re.findall(r"more:\s*([A-Z]+)\s*\+\s*'#([a-z0-9-]+)'", gl):
        page = re.search(rf"var {var} = '([^']+)'", gl)
        if not page:
            problems.append(f"glossary.js: ukjent sidevariabel {var}")
        elif frag not in ids.get(page.group(1), set()):
            problems.append(f"glossary.js: more -> {page.group(1)}#{frag} finnes ikke")

    for p, h in html.items():
        body = re.sub(r"<script.*?</script>", "", h, flags=re.S)
        for href in re.findall(r'href="([^"]+)"', body):
            if href.startswith(("http", "mailto")):
                continue
            target, _, frag = href.partition("#")
            if target in ("", "./", "../"):
                if frag and target == "" and frag not in ids[p]:
                    problems.append(f"{p}: anker #{frag} finnes ikke på siden")
                continue
            tp = ((ROOT / p).parent / target).resolve()
            if tp.is_dir():
                tp = tp / "index.html"
            rel = tp.relative_to(ROOT.resolve()).as_posix() if tp.exists() else None
            if rel is None:
                problems.append(f"{p}: lenke til {href} finnes ikke")
            elif rel in ids and frag and frag not in ids[rel]:
                problems.append(f"{p}: lenke {href}: anker #{frag} finnes ikke i {rel}")

        b = Bal()
        b.feed(h)
        for e in b.errs[:5]:
            problems.append(f"{p}: {e}")
        if b.stack:
            problems.append(f"{p}: ulukkede tagger: {b.stack[-3:]}")

        if body.count("\\(") != body.count("\\)"):
            problems.append(f"{p}: ubalansert \\( \\)")
        if body.count("\\[") != body.count("\\]"):
            problems.append(f"{p}: ubalansert \\[ \\]")
        if body.count("$$") % 2:
            problems.append(f"{p}: oddetall $$")

    dek = json.loads((ROOT / "kilder/dekning.json").read_text(encoding="utf-8"))
    ver = json.loads((ROOT / "kilder/versjon.json").read_text(encoding="utf-8"))
    for s in ver["seksjoner"]:
        n = s["nummer"]
        if n not in dek:
            problems.append(f"dekning.json mangler seksjon {n}")
        else:
            page, anker = dek[n]["side"], dek[n].get("anker")
            if page not in ids:
                problems.append(f"dekning.json: side {page} finnes ikke")
            elif anker and anker not in ids[page]:
                problems.append(f"dekning.json: {page}#{anker} finnes ikke")

    for kap in sorted(ROOT.glob("kap*/index.html")):
        kaphtml = kaphtml_ = kap.read_text(encoding="utf-8")
        listed = set(re.findall(r'href="[^"#]+#(oppg-[^"]+)"', kaphtml))
        boxes: set[str] = set()
        for sub in kap.parent.glob("*.html"):
            if sub.name == "index.html":
                continue
            boxes |= set(re.findall(r'class="oppgave" data-quiz id="([^"]+)"', sub.read_text(encoding="utf-8")))
        for b_ in sorted(boxes - listed):
            problems.append(f"{kap.parent.name}: oppgave {b_} mangler i oversikten")
        for l in sorted(listed - boxes):
            problems.append(f"{kap.parent.name}: oversikten lenker til {l} som ikke finnes")
        print(f"{kap.parent.name}: {len(boxes)} oppgavebokser, {len(listed)} i oversikten")

    print(f"begreper: {len(keys)} definert, {len(used)} brukt; ubrukte: {sorted(keys - used) or 'ingen'}")
    print(f"sider sjekket: {', '.join(PAGES)}")
    if problems:
        print("\nPROBLEMER:")
        for x in problems:
            print(" -", x)
        return 1
    print("\nINGEN PROBLEMER")
    return 0


if __name__ == "__main__":
    sys.exit(main())
