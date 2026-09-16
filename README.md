# Studiesider — NTNU-fag med samme oppsett

Statisk nettsted med én studieside per fag. Samme oppbygging og designsystem som [databaser.dog](https://databaser.dog) (TDT4145). Norsk only.

| Fag | Mappe | Status |
|---|---|---|
| TDT4172 Introduksjon til maskinlæring | `introml/` | Kapittel 1 (1A–1C) ferdig, bygger på forelesningsnotatene datert 16. sept 2026 |
| TDT4120 Algoritmer og datastrukturer | `algdat/` | Under arbeid (stubb fra malen) |

## Struktur

- `index.html` — portal: velg fag
- `style.css`, `glossary.js`, `quiz.js`, `site.js`, `nav-search.js` — felles kode for alle fag
- `<fag>/` — ett fag: `fag.js` (konfigurasjon), `index.html`, `begreper.html` + `begreper.js`, `kapN/index.html` (oversikt) og `kapN/<del>.html` (innhold), `kilder/` (fagstoffet + tekstuttrekk + versjon + dekningskart)
- `_mal/` — mal for et nytt fag
- `NYTT-FAG.md` — oppskrift for å lage et nytt fag (skrevet for en agent)
- `tools/` — PDF-uttrekk, endringsrapport og validering, alle med `--fag`

## Lokal dev

Ren HTML/CSS/JS uten byggesteg. Søket bruker `fetch`, så kjør en liten server fra roten:

```bash
python -m http.server 8000
# åpne http://localhost:8000/
```

Matematikk rendres med KaTeX fra CDN, søk med Fuse.js fra CDN. Deployes som statisk side (Vercel, `vercel.json` ligger klar).

## Når fagstoffet oppdateres (PDF med nummererte seksjoner)

```bash
python tools/sjekk_oppdatering.py --fag introml ~/Downloads/ny_versjon.pdf              # rapport
# oppdater HTML-sidene rapporten peker på
python tools/sjekk_oppdatering.py --fag introml ~/Downloads/ny_versjon.pdf --ta-i-bruk  # ta i bruk
python tools/valider.py --fag introml
```

Krever `pip install pdfplumber`. For fagstoff som ikke er PDF med innholdsfortegnelse (slides, bok, markdown), se `NYTT-FAG.md`.

## Legge til et fag

Se `NYTT-FAG.md`. Kort: kopier `_mal/` til `<slug>/`, fyll `fag.js`, legg fagstoffet i `kilder/`, bygg kapittelsidene etter mønsteret i `introml/kap1/`, legg et kort på portalen, kjør `tools/valider.py`.
