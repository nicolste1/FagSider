# TDT4172 — Introduksjon til maskinlæring · studieside

Statisk studieside for TDT4172 *Introduksjon til maskinlæring* ved NTNU, bygget på Inga Strümkes forelesningsnotater. Samme oppbygging og designsystem som [databaser.dog](https://databaser.dog) (TDT4145). Norsk only.

## Struktur

- `index.html` — forside med søk og kapittelraster
- `begreper.html` — full begrepsliste (genereres fra `glossary.js`)
- `kap1/index.html` — oversikt over kapittel 1 (helhetsbilde, læringssti, begrepskart, alle oppgaver, quiz)
- `kap1/logistisk-regresjon.html` — 1A: notatenes avsnitt 1.1–1.2 (data, logistisk regresjon, gradient descent, evaluering, entropi, Bayes, dimensjonsforbannelsen, ubalanserte data)
- `kap1/beslutningstraer.html` — 1B: notatenes avsnitt 1.3 (beslutningstrær, Gini, entropi, pseudokode)
- `kap1/regresjon.html` — 1C: notatenes avsnitt 1.4 (lineær og polynomisk regresjon, validering, kryssvalidering, bias–varians, regresjonstrær)
- `style.css` — felles stilark (parchment-bakgrunn, teal aksent)
- `glossary.js` — alle fagbegreper + popover-UI for klikkbare begreper
- `quiz.js` — «Se svar»-knapp på quiz- og oppgavebokser, flervalg
- `site.js` — notat-versjon i bunntekst, SVG-plottehjelper for widgetene, KaTeX-oppstart
- `nav-search.js` — Fuse.js-basert søk i alle sider + begreper
- `kilder/` — PDF-en siden bygger på, tekstuttrekk (`notater.md`, `oppgaver.md`), versjonsinfo og dekningskart
- `tools/` — verktøy for å hente ut tekst fra PDF-en, sjekke hva som er endret i en ny versjon, og validere sidene (`valider.py`)

## Lokal dev

Siden er ren HTML/CSS/JS uten byggesteg. Søket bruker `fetch`, så kjør en liten server:

```bash
python -m http.server 8000
# åpne http://localhost:8000/
```

Matematikk rendres med KaTeX fra CDN, søk med Fuse.js fra CDN.

## Når notatene oppdateres

Notatene utvikles gjennom semesteret. Arbeidsflyten for å oppdatere siden:

```bash
# 1. Se hva som er endret (ingenting skrives til kilder/ ennå)
python tools/sjekk_oppdatering.py ~/Downloads/ny_versjon.pdf

# 2. Oppdater HTML-sidene rapporten peker på (nye seksjoner, endrede avsnitt, nye «Oppgave:»)
#    - nye seksjoner: ny <section id> på riktig side + oppføring i kilder/dekning.json
#    - nye begreper: glossary.js
#    - nye sider: PAGES i nav-search.js + kort på index.html

# 3. Ta den nye PDF-en i bruk som kilde (regenererer kilder/notater.md, oppgaver.md, versjon.json, versjon.js)
python tools/sjekk_oppdatering.py ~/Downloads/ny_versjon.pdf --ta-i-bruk
```

Rapporten sier per seksjon om den er ny, fjernet eller endret (med likhetsgrad og en kort setningsdiff), hvilke «Oppgave:»-avsnitt som er kommet til, og hvilken side/anker som dekker seksjonen. Bunnteksten på alle sider viser automatisk hvilken versjon av notatene siden bygger på (fra `kilder/versjon.js`).

Krever `pip install pdfplumber`.

## Konvensjoner i HTML-en

- **Klikkbart begrep:** `<span class="term" data-term="sigmoid">Sigmoid-funksjonen</span>`. Nøkkelen må finnes i `glossary.js`.
- **Oppgave fra notatene:** `<div class="oppgave" data-quiz id="oppg-…">` med `.o-label` (ref til avsnitt og side), `.o-text` og `.answer`. Svar merkes `<span class="answer-src">Svar fra notatene</span>` eller, for egne svar, `class="answer forslag"` + `Forslag til svar · ikke fasit fra notatene`.
- **Kildehenvisning:** hver `<h2>` følges av `<div class="source-note">Notatene · avsnitt 1.2.4 · s. 9–11</div>`.
- **Formler:** KaTeX, `\( … \)` inline og `\[ … \]` display, med `\tag{n}` som matcher likningsnummeret i notatene.
- **Widgeter:** `.widget` med inline JS nederst på siden; bruk `MLPlot.make(svg, {...})` fra `site.js` for kurver.

## Kilder

- `kilder/TDT4172_forelesningsnotater.pdf` — forelesningsnotatene (Inga Strümke), versjonen siden bygger på
- `kilder/notater.md` — tekstuttrekk per seksjon, brukes til diff mot nye versjoner
