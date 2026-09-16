# CLAUDE.md — TDT4172-studieside

Statisk studieside (ren HTML/CSS/JS, ingen byggesteg) for TDT4172 *Introduksjon til maskinlæring*, bygget på Inga Strümkes forelesningsnotater. Kopi av oppbyggingen til databaser.dog (TDT4145). Alt innhold er på norsk bokmål.

## Hovedoppgaven: holde siden i takt med notatene

Notatene (PDF) oppdateres gjennom semesteret. Når brukeren gir deg en ny PDF:

1. `python tools/sjekk_oppdatering.py <ny.pdf>` — les rapporten (skrives også til `kilder/oppdatering_rapport.md`). Den lister nye/fjernede/endrede seksjoner, nye «Oppgave:»-avsnitt, og hvilken side + anker som dekker hver seksjon (fra `kilder/dekning.json`).
2. Les de berørte seksjonene i PDF-en (Read-verktøyet kan lese PDF) og oppdater HTML-sidene. Ikke skriv om upåvirkede seksjoner.
3. Nye seksjoner/underkapitler: legg til `<section id>` på riktig side, eller ny side i `kapN/` etter mønsteret i `kap1/`. Oppdater `kilder/dekning.json`, `PAGES` i `nav-search.js`, kortene på `index.html`, og oversikten på `kapN/index.html` (læringssti, deler, oppgaveliste).
4. Nye fagbegreper → `glossary.js`. Nye «Oppgave:» → `.oppgave`-boks (se konvensjoner).
5. `python tools/sjekk_oppdatering.py <ny.pdf> --ta-i-bruk` — kopierer PDF-en inn som `kilder/TDT4172_forelesningsnotater.pdf` og regenererer `kilder/notater.md`, `oppgaver.md`, `versjon.json`, `versjon.js`. Bunnteksten på sidene oppdateres automatisk fra `versjon.js`.

Krever `pip install pdfplumber`. På Windows: sett `PYTHONIOENCODING=utf-8` om konsollen klager på tegn.

## Struktur

```
index.html              forside (kapittelraster, bannere)
begreper.html           begrepsliste, genereres i nettleseren fra glossary.js
kap1/index.html         kapitteloversikt: helhetsbilde, læringssti, deler, begrepskart, ALLE oppgaver, quiz
kap1/logistisk-regresjon.html   1A = notatene 1.1–1.2
kap1/beslutningstraer.html      1B = notatene 1.3
kap1/regresjon.html             1C = notatene 1.4
style.css               felles stilark. Variabler: --accent (teal), --warm (rust), --green, --ochre, --red
glossary.js             window.GLOSSARY = { nokkel: { term, def (HTML), more (rotrelativ url#anker), alias } } + popover
quiz.js                 [data-quiz] → «Se svar»; .quiz.mcq flervalg
site.js                 fyller [data-notater-versjon]; window.MLPlot (SVG-plott); starter KaTeX auto-render
nav-search.js           PAGES-liste + Fuse.js; indekserer <section id> og alle begreper
kilder/                 PDF, notater.md, oppgaver.md, versjon.json, versjon.js, dekning.json
tools/pdf_til_tekst.py  PDF → kilder/*.md + versjon
tools/sjekk_oppdatering.py   diff ny PDF mot kilder/notater.md, rapport, --ta-i-bruk
```

## Konvensjoner (følg dem nøyaktig)

- **Sider** har: `nav.site-nav` (brand TDT4172, tilbake-lenke, søk) → `main[data-chapter]` → `header.hero` (eyebrow med notat-avsnitt og sidetall, `h1` med `<em>`, `.lede`, `nav.toc`) → `section[id]` med `.container`, `.section-badge`, `h2` med `<em>`, `.source-note` → `nav.page-nav` → `footer` med `[data-notater-versjon]` → skript i rekkefølgen `kilder/versjon.js`, KaTeX (katex.min.js + auto-render), `glossary.js`, `quiz.js`, `site.js`, `nav-search.js`, deretter sidens egen inline-JS.
- **Klikkbart begrep:** `<span class="term" data-term="nokkel">tekst</span>`. Nøkkelen MÅ finnes i `glossary.js`, ellers vises «mangler forklaring». Bruk begrepet som klikkbart første gang det opptrer i en seksjon, ikke hver gang. Aldri inni matematikk.
- **Oppgave fra notatene** (alle «Oppgave:» i notatene skal finnes på siden, dette er et krav fra brukeren):
  ```html
  <div class="oppgave" data-quiz id="oppg-kort-navn">
    <div class="o-label"><span>Oppgave fra notatene</span><span class="o-ref">1.2.4 · s. 10</span></div>
    <div class="o-text"><p>Spørsmålet slik det står i notatene.</p></div>
    <div class="quiz-reveal">
      <button class="reveal-btn">Se svar</button>
      <div class="answer"><span class="answer-src">Svar fra notatene</span>…</div>
    </div>
  </div>
  ```
  Gir notatene ikke svar, bruk `class="answer forslag"` og `<span class="answer-src">Forslag til svar · ikke fasit fra notatene</span>`. Hver oppgave skal også stå i oppgavelista på `kapN/index.html` med status «Fra notatene»/«Forslag».
- **Egne quiz-spørsmål:** `.quiz[data-quiz]` med `.q-label` («Sjekk forståelsen · Lett/Middels/Vanskelig» underveis, «Spørsmål n · …» i oppsummeringen).
- **Formler:** KaTeX. Inline `\( \)`, display `\[ \]` med `\tag{n}` = likningsnummer i notatene (flere: `\tag{8–9}`). Skriv `&amp;` i `aligned`, `\lt`/`\gt` for ulikheter.
- **Kildehenvisning:** `<div class="source-note">Notatene · avsnitt X · s. Y</div>` rett under hver `h2`.
- **Widgeter:** `.widget` > `.widget-label` + `.widget-intro` + `<svg viewBox data-w data-h>` + `.w-row` med `.w-ctl` + `.w-out`. All JS i én IIFE per widget nederst på siden; bruk `MLPlot.make(svg, {x, y, xLabel, yLabel, xTicks, yTicks})` som gir `curve(fn, cls)`, `polyline`, `point`, `vline`, `hline`, `label`, `clearData`, `clearOverlay`. Ingen eksterne biblioteker utover KaTeX og Fuse.
- **Språk og tone:** norsk bokmål, samme stil som notatene (uformell, «vi»). Hold notatenes ordvalg for fagbegreper (f.eks. «treffsikkerhet (accuracy)», «tapsfunksjon», «løvnode»). Ikke finn på fakta som ikke står i notatene uten å merke det som forslag/egen tolkning.
- **Ingen commit/push** uten at brukeren ber om det.

## Sjekk før du er ferdig

- Kjør `python tools/valider.py` (sjekker begrepsnøkler, ankre, HTML-balanse, KaTeX-avgrensere, dekning.json og oppgavelista).
- Alle `data-term`-nøkler finnes i `glossary.js` (grep).
- Alle `href="#…"` og `more`-ankre peker på eksisterende `id`.
- Sidene rendrer uten JS-feil på `python -m http.server 8000`.
- `kilder/dekning.json` dekker alle seksjonsnumre i `kilder/versjon.json`.
