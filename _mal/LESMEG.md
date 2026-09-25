# _mal/ — mal for et nytt fag

Kopier hele mappen til `<slug>/` i repo-roten og erstatt placeholderne:

| Placeholder | Eksempel |
|---|---|
| `{{KODE}}` | TDT4120 |
| `{{NAVN}}` | Algoritmer og datastrukturer |
| `{{SEMESTER}}` | Høst 2026 |
| `{{SLUG}}` | algdat |

Python-skript som gjør jobben (kjør fra repo-roten):

```python
import pathlib, shutil
slug, kode, navn, sem = "algdat", "TDT4120", "Algoritmer og datastrukturer", "Høst 2026"
for src in pathlib.Path("_mal").rglob("*"):
    if src.is_dir() or src.name == "LESMEG.md": continue
    out = pathlib.Path(slug) / src.relative_to("_mal"); out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(src.read_text(encoding="utf-8").replace("{{KODE}}", kode).replace("{{NAVN}}", navn)
                   .replace("{{SEMESTER}}", sem).replace("{{SLUG}}", slug), encoding="utf-8", newline="\n")
```

Innhold i malen:

- `fag.js` — fagkonfigurasjon (fyll `kilde` og `sider`)
- `index.html` — fagets forside med ett kapittelkort og en «under arbeid»-boks du fjerner når kap 1 er ferdig
- `begreper.html` / `begreper.js` — begrepsliste (HTML-en er ferdig; fyll `begreper.js`)
- `kap1/index.html` — kapitteloversikt med alle seksjonene som skal fylles
- `kap1/del-a.html` — innholdsside som viser hver komponent (seksjon, begrep, oppgave, quiz, widget, formler, page-nav)
- `kilder/dekning.json`, `kilder/versjon.js` — skjema for sporing av kilden
- `kilder/eksamensanalyse.md`, `kilder/eksamen.json` — eksamensanalysen (steg 0 i `NYTT-FAG.md`), fylles ut sammen med brukeren før sidene skrives

Se `NYTT-FAG.md` for hele oppskriften og `introml/` for en ferdig fagside.
