# CLAUDE.md — Studiesider (flere fag, samme oppsett)

Statisk nettsted (ren HTML/CSS/JS, ingen byggesteg) med én studieside per NTNU-fag, alle med identisk oppsett: kapitler etter pensum, eksamensrettet utvalg av stoffet, oppgaver som «Se svar»-bokser, klikkbare fagbegreper, interaktive widgeter og søk. Designsystemet er kopiert fra databaser.dog (TDT4145). Alt innhold er på norsk bokmål.

**Formålet er eksamen, ikke fullstendighet.** Sidene skal gi best mulig eksamensresultat på kortest mulig lesetid. Før et fag (og før hvert kapittel) skal det finnes en eksamensanalyse laget sammen med brukeren: `<slug>/kilder/eksamensanalyse.md` + `eksamen.json`. Ikke skriv innholdssider uten den. Hver innholdsside åpner med seksjon `00 · Eksamensfokus` og kutter stoff som ikke gir uttelling (eller legger det i `<details>`).

**Skal du lage et nytt fag?** Les `NYTT-FAG.md`. Den er skrevet for en agent som starter uten annen kontekst. Steg 0 der er eksamensanalysen.

## Struktur

```
index.html              PORTAL: velg fag (kort per fag, håndskrevet)
style.css               felles stilark. Variabler: --accent (teal), --warm (rust), --green, --ochre, --red
glossary.js             felles popover-UI for klikkbare begreper (leser window.GLOSSARY fra fagets begreper.js)
quiz.js                 [data-quiz] → «Se svar»; .quiz.mcq flervalg
site.js                 fyller [data-notater-versjon]; window.MLPlot (SVG-plott); starter KaTeX auto-render
nav-search.js           Fuse.js-søk; indekserer sidene i fagets fag.js + alle begreper
tools/pdf_til_tekst.py        PDF → <fag>/kilder/*.md + versjon (--fag)
tools/sjekk_oppdatering.py    diff ny PDF mot <fag>/kilder/notater.md, rapport, --ta-i-bruk (--fag)
tools/valider.py              konsistenssjekk av alle fag (eller --fag)
_mal/                   MAL for et nytt fag (kopieres til <slug>/, placeholders {{KODE}} {{NAVN}} {{SEMESTER}} {{SLUG}})
NYTT-FAG.md             oppskrift for å lage et nytt fag

<slug>/                 ETT FAG (introml = TDT4172, algdat = TDT4120 under arbeid)
  fag.js                  window.FAG = { slug, kode, navn, semester, kilde, sider: [...] }
  index.html              fagets forside (kapittelraster, bannere)
  begreper.html           begrepsliste, genereres i nettleseren fra begreper.js
  begreper.js             window.GLOSSARY = { nokkel: { term, def (HTML), more (relativ til fagets rot), alias } }
  kap1/index.html         kapitteloversikt: helhetsbilde, læringssti, deler, begrepskart, ALLE oppgaver, quiz
  kap1/<del>.html         innholdssider (1A, 1B, …)
  kilder/                 fagstoffet siden bygger på + notater.md, versjon.js/json, dekning.json,
                          eksamensanalyse.md + eksamen.json (prio 1–3 og oppgavetype per deltema, tidligere eksamensoppgaver)
```

Stier fra en side: fagets rot bruker `../style.css`, `../glossary.js`, `../site.js`, `../quiz.js`, `../nav-search.js` og `fag.js`, `begreper.js`, `kilder/versjon.js`. Kapittelsider bruker `../../` til felles filer og `../fag.js`, `../begreper.js`, `../kilder/versjon.js`.

## Holde et fag i takt med kilden (PDF med nummererte seksjoner)

1. `python tools/sjekk_oppdatering.py --fag <slug> <ny.pdf>` — les rapporten (skrives også til `<slug>/kilder/oppdatering_rapport.md`): nye/fjernede/endrede seksjoner, små endringer, nye «Oppgave:»-avsnitt, og hvilken side + anker som dekker hver seksjon (fra `dekning.json`).
2. Les de berørte seksjonene i PDF-en (Read-verktøyet kan lese PDF) og oppdater HTML-sidene. Ikke skriv om upåvirkede seksjoner.
3. Nye seksjoner: ny `<section id>` på riktig side, eller ny side etter mønsteret i `introml/kap1/`. Oppdater `dekning.json`, `sider` i `fag.js`, kortene på fagets `index.html`, og `kapN/index.html` (læringssti, deler, oppgaveliste).
4. Nye fagbegreper → `begreper.js`. Nye «Oppgave:» → `.oppgave`-boks.
5. `python tools/sjekk_oppdatering.py --fag <slug> <ny.pdf> --ta-i-bruk` — regenererer `kilder/`. Bunnteksten oppdateres automatisk fra `versjon.js`.
6. `python tools/valider.py --fag <slug>`.

Krever `pip install pdfplumber`. På Windows: sett `PYTHONIOENCODING=utf-8` om konsollen klager på tegn. Store patcher: skriv et Python-skript til scratchpad og kjør det; lange bash-heredocs feiler på quoting.

## Konvensjoner (følg dem nøyaktig, i alle fag)

- **Sider** har: `nav.site-nav` (brand = fagkode, tilbake-lenke, søk) → `main[data-chapter]` → `header.hero` (eyebrow med kildehenvisning og anslått lesetid, `h1` med `<em>`, `.lede`, `nav.toc`) → `section#fokus` («00 · Eksamensfokus»: `.callout callout-warm` med linjer merket `Regn`/`Forklar`/`Lavere`, oppgavenumre og tidligere eksamensoppgaver fra `eksamen.json`; `source-note` sier hvilken analyse den bygger på, eller at analyse mangler) → `section[id]` med `.container`, `.section-badge`, `h2` med `<em>`, `.source-note`, læringsmålet ordrett i `.lm-pill` + `.lm-list` → `nav.page-nav` → `footer` med `[data-notater-versjon]` → skript i rekkefølgen `kilder/versjon.js`, KaTeX (katex.min.js + auto-render), `fag.js`, `begreper.js`, `glossary.js`, `quiz.js`, `site.js`, `nav-search.js`, deretter sidens egen inline-JS.
- **Kort tekst:** maks tre avsnitt før første formel, figur eller oppgave i en seksjon. Historikk, anekdoter, produkteksempler og tall som ikke inngår i noen oppgave kuttes, eller legges i `<details><summary>Utdypning · lavere prioritet</summary>…</details>`. Ingen fast ordgrense: lengden er en vurderingssak per kapittel, men alt som står der skal gi uttelling. Dybde etter `eksamen.json`: prio 1 full behandling med regneeksempler og widget, prio 2 kort, prio 3 én linje under «Lavere».
- **Klikkbart begrep:** `<span class="term" data-term="nokkel">tekst</span>`. Nøkkelen MÅ finnes i fagets `begreper.js`. Bruk begrepet som klikkbart første gang det opptrer i en seksjon, ikke hver gang. Aldri inni matematikk.
- **Oppgaver**, i prioritert rekkefølge: (a) tidligere eksamensoppgaver fra `eksamensanalyse.md`, label «Eksamen Ord. 2024 · oppg. 5.4», svar «Svar fra løsningsforslaget» eller `answer forslag`; (b) oppgavene læringsmålene/emnebeskrivelsen peker på; (c) kildens regneeksempler og oppgaver av samme type som eksamensoppgavene. Diskusjonsoppgaver uten regning tas bare med om analysen viser at slike kommer; ellers listes de i kapitteloversikten under «Ekstra, ikke på siden». Skriv alltid mellomregningen. Boksen ser slik ut:
  ```html
  <div class="oppgave" data-quiz id="oppg-kort-navn">
    <div class="o-label"><span>Oppgave fra notatene</span><span class="o-ref">1.2.4 · s. 10</span></div>
    <div class="o-text"><p>Spørsmålet slik det står i kilden.</p></div>
    <div class="quiz-reveal">
      <button class="reveal-btn">Se svar</button>
      <div class="answer"><span class="answer-src">Svar fra notatene</span>…</div>
    </div>
  </div>
  ```
  Gir kilden ikke svar, bruk `class="answer forslag"` og `<span class="answer-src">Forslag til svar · ikke fasit fra notatene</span>`. Spørsmål kilden stiller uten oppgave-merke («tenk over dette») får label «Tenk over · fra notatene». Hver oppgave skal også stå i oppgavelista på `kapN/index.html` med status «Fra notatene»/«Forslag». (Bytt «notatene» med det kilden heter: «slidene», «boka».)
- **Egne quiz-spørsmål:** `.quiz[data-quiz]` med `.q-label` («Sjekk forståelsen · Lett/Middels/Vanskelig» underveis, «Spørsmål n · …» i oppsummeringen). Én per seksjon der den likner en eksamensoppgave, tre i oppsummeringen; ikke for pynt.
- **Formler:** KaTeX. Inline `\( \)`, display `\[ \]` med `\tag{n}` = likningsnummer i kilden. Skriv `&amp;` i `aligned`, `\lt`/`\gt` for ulikheter.
- **Kildehenvisning:** `<div class="source-note">Notatene · avsnitt X · s. Y</div>` rett under hver `h2` (eller «Slides forelesning 3 · 12–20», «Boka kap. 4.2»).
- **Widgeter:** `.widget` > `.widget-label` + `.widget-intro` + `<svg viewBox data-w data-h>` + `.w-row` med `.w-ctl` + `.w-out`/`.metric-grid`. All JS i én IIFE per widget nederst på siden; bruk `MLPlot.make(svg, {x, y, xLabel, yLabel, xTicks, yTicks})` som gir `curve(fn, cls)`, `polyline`, `point`, `vline`, `hline`, `label`, `clearData`, `clearOverlay`, `layers`, `sx`, `sy`. Ingen eksterne biblioteker utover KaTeX og Fuse.
- **Språk og tone:** norsk bokmål, samme stil som kilden. Hold kildens ordvalg for fagbegreper. Ikke finn på fakta som ikke står i kilden uten å merke det som forslag/egen tolkning.
- **Ingen commit/push** uten at brukeren ber om det.

## Sjekk før du er ferdig

- `python tools/valider.py --fag <slug>` uten problemer (sjekker også at `eksamensanalyse.md`/`eksamen.json` finnes, og at hver innholdsside har `#fokus`).
- Eksamensfokus-boksene stemmer med `eksamen.json`; tidligere eksamensoppgaver i analysen finnes som bokser.
- Sidene rendrer uten JS-feil på `python -m http.server 8000` (rot). Visuell kontroll: `msedge --headless=new --screenshot=<fil.png> --window-size=1280,3000 http://127.0.0.1:8000/<slug>/kap1/<side>.html`.
- Fagets kort på portalen (`index.html` i roten) har riktig status.
