# NYTT-FAG.md — oppskrift for å lage en ny fagside

Denne fila er skrevet for en agent (Claude Code) som åpnes i et nytt vindu uten annen kontekst, og som skal lage en studieside for et nytt fag i dette repoet. Les hele fila før du starter. Les også `CLAUDE.md` (konvensjonene) og bruk `introml/` som referanseimplementasjon: **alt du lager skal se ut og oppføre seg som `introml/`**, bare med et annet fag.

Brukeren gir deg fagstoffet. Det kan komme i en annen form enn for maskinlæring (der det var én PDF med nummererte avsnitt): slides, kapitler fra en lærebok, forelesningsnotater i markdown, øvingsoppgaver, videoer med transkripsjon, nettsider. Oppskriften under sier hva du gjør i hvert tilfelle.

## 0. Hva sluttresultatet er

En mappe `<slug>/` (f.eks. `algdat/`) som inneholder:

| Fil | Hva |
|---|---|
| `fag.js` | `window.FAG = { slug, kode, navn, semester, kilde, sider: [...] }`. `sider` er lista over alle innholdssider og kapitteloversikter (brukes av søket). |
| `index.html` | Fagets forside: kapittelraster, bannere til oppgaver og begreper, «om emnet» og «pensum». |
| `begreper.html` | Begrepsliste. Genereres i nettleseren fra `begreper.js`; du trenger normalt ikke røre HTML-en. |
| `begreper.js` | `window.GLOSSARY = { nokkel: { term, def, more, alias } }`. Alle fagbegreper som er klikkbare på sidene. |
| `kapN/index.html` | Kapitteloversikt: helhetsbilde, læringssti, deler (kort til innholdssidene), begrepskart (SVG), **liste over ALLE oppgaver i kapittelet**, quiz på tvers. |
| `kapN/<del>.html` | Innholdssider (1A, 1B, …), 30–60 min lesing hver, med seksjoner, formler, figurer, widgeter, oppgaver og quiz. |
| `kilder/` | Fagstoffet siden bygger på (PDF/markdown/…), `notater.md` (tekstuttrekk per seksjon), `versjon.js` + `versjon.json` (hvilken versjon siden bygger på), `dekning.json` (seksjon → side#anker). |

Pluss et kort på portalen (`index.html` i repo-roten).

Felles kode ligger i roten og skal **ikke** kopieres eller endres for ett fag: `style.css`, `glossary.js` (popover), `quiz.js`, `site.js` (MLPlot, KaTeX, versjon i bunntekst), `nav-search.js`.

## 1. Opprett faget fra malen

```bash
# fra repo-roten (Windows: bruk PowerShell-ekvivalenter eller et lite Python-skript)
cp -r _mal algdat
```

Erstatt placeholderne i alle filene under `algdat/`: `{{KODE}}` (f.eks. TDT4120), `{{NAVN}}` (Algoritmer og datastrukturer), `{{SEMESTER}}` (Høst 2026), `{{SLUG}}` (algdat). Et Python-one-liner-skript for dette finnes nederst i `_mal/LESMEG.md`. Fyll så inn `fag.js` (særlig `kilde`, en setning om hva fagstoffet er).

Hvis mappen allerede finnes som stubb (portalen lenker til `algdat/` med status «Under arbeid»), jobb videre i den.

## 2. Legg fagstoffet i `kilder/` og lag tekstuttrekket

Målet med `kilder/` er to ting: (a) at sidene kan spore hver seksjon tilbake til kilden (`source-note` og `dekning.json`), og (b) at siden kan **oppdateres** når kilden endrer seg, ved å diffe et tekstuttrekk.

**Tilfelle A — én PDF med innholdsfortegnelse og nummererte avsnitt (som maskinlæring):**

```bash
python tools/pdf_til_tekst.py --fag algdat kilder-fila.pdf
```

Det lager `notater.md`, `oppgaver.md`, `versjon.json` og `versjon.js` automatisk. Senere oppdateringer går med `python tools/sjekk_oppdatering.py --fag algdat ny.pdf` (rapport) og `--ta-i-bruk`.

**Tilfelle B — slides, bok-kapitler, flere PDF-er, markdown, nettsider:**

Verktøyene forutsetter nummererte overskrifter, så du lager filene selv:

1. Legg originalfilene i `kilder/` (eller lenker i `kilder/KILDER.md` hvis de ikke kan ligge i repoet, f.eks. en lærebok med opphavsrett).
2. Skriv `kilder/notater.md` med **én `## <nummer> <tittel>`-overskrift per enhet** du vil kunne spore endringer i: én per forelesning, per kapittel i boka, eller per tema. Nummerer dem selv (`1`, `1.1`, `1.2`, `2`, …) og hold nummereringen stabil over tid. Under hver overskrift: teksten fra kilden (ren tekst er nok; formler og figurer kan beskrives med ord). Har du PDF-er, kan du hente tekst med `pdfplumber` (`page.extract_text()`) i et lite skript.
3. Skriv `kilder/versjon.js` for hånd etter dette formatet (leses av bunnteksten på alle sider):
   ```js
   window.NOTATER_VERSJON = {
     "tekst": "",                                  // valgfritt: hele bunntekst-linja; overstyrer feltene under
     "kilde_navn": "slidene fra forelesningene",   // "Bygger på <kilde_navn> datert <dato_norsk>"
     "pdf": "Forelesning 1–6 (slides) + boka kap. 1–4",
     "dato_i_pdf": "",
     "dato_norsk": "20. september 2026",
     "sider": 0,
     "ekstrahert": "2026-09-20",
     "antall_oppgaver": 0
   };
   ```
   Bunnteksten viser «Bygger på <kilde_navn> datert <dato_norsk>». Sett `kilde_navn` (f.eks. «slidene fra forelesningene») eller skriv hele linja selv i feltet `tekst`, som overstyrer alt annet. Ikke endre `site.js`.
4. Skriv `kilder/dekning.json`: `{ "1.1": { "side": "kap1/del-a.html", "anker": "seksjons-id" }, … }` for hver enhet i `notater.md`. Da vet neste agent (og `valider.py`) hvor hver del av kilden er dekket.

Uansett tilfelle: **Formler og figurer i kilden gjenskapes på sidene**, ikke kopieres som bilder. Formler i KaTeX med `\tag{n}` der kilden nummererer dem; figurer som SVG (statisk eller tegnet med `MLPlot`).

## 3. Planlegg kapitler og sider

- Ett `kapN/` per hovedbolk i pensum (for algdat typisk: 1 grunnlag og kompleksitet, 2 sortering, 3 datastrukturer, 4 grafer, …). Følg kildens egen inndeling der den finnes.
- Én innholdsside per del som kan leses på 30–60 minutter. `introml/kap1/` har tre: 1A (1.1–1.2, den lengste), 1B (1.3), 1C (1.4).
- Hver innholdsside: `header.hero` med `nav.toc`, 5–13 `section[id]`, `nav.page-nav` (forrige/neste) nederst. Kopier skjelettet fra `_mal/kap1/del-a.html` og fyll inn; se `introml/kap1/beslutningstraer.html` for en komplett, ferdig side i moderat størrelse.
- Kapitteloversikten `kapN/index.html` lages **etter** innholdssidene, slik at læringssti, deler og oppgavelista kan lenke til ferdige ankre. Kopier `_mal/kap1/index.html`.
- Lag `kap1` ferdig først. Legg til `kap2` når brukeren gir deg stoffet, eller når det er naturlig.

## 4. Innholdet på en side

Per seksjon:

1. `.section-badge` («03 · Tema»), `h2` med ett ord i `<em>`, `.source-note` («Slides forelesning 2 · 14–31» / «Boka kap. 3.2 · s. 88–95» / «Notatene · avsnitt 1.2.4 · s. 9–11»).
2. Brødtekst som **forklarer**, ikke bare gjengir. Første avsnitt i en seksjon kan ha `class="dropcap"`. Bruk kildens ordvalg for fagbegreper. Norsk bokmål, uformell «vi»-stil.
3. Klikkbare begreper: `<span class="term" data-term="nokkel">tekst</span>`, første gang begrepet dukker opp i seksjonen. Nøkkelen må finnes i `begreper.js`.
4. Formler i KaTeX. Kode og pseudokode i `<pre><code>` (escape `<` som `&lt;`). For algdat: pseudokode slik kilden skriver den (f.eks. CLRS-stil), kompleksitet i KaTeX: `\(\mathcal{O}(n \log n)\)`.
5. Figurer: SVG. Trestrukturer kan bruke `.tree-svg`-stilen fra `introml/kap1/beslutningstraer.html` (kopier CSS-en inn i sidens `<style>`). Kurver og punkter med `MLPlot`.
6. **Widgeter** der det gir læringsutbytte: én til to per side. Vanilla JS, én IIFE per widget nederst på siden. Gode widgeter for algoritmer: stegvis kjøring av en algoritme på et lite eksempel (array som tegnes om for hvert steg, «Ett steg»/«Kjør»/«Nullstill»), sammenlikning av kjøretid mot \(n\) for to algoritmer (MLPlot), en interaktiv datastruktur (legg inn/fjern i en heap eller et BST og se treet), rekursjonstre. Hold dem små og deterministiske (seedet tilfeldighet, se `rng()` i `introml/kap1/regresjon.html`).
7. **Oppgaver fra kilden**: alt som er spørsmål, øvelser eller «tenk over» i fagstoffet skal inn som `.oppgave`-bokser, på det stedet i teksten der de hører hjemme. Svar fra kilden merkes «Svar fra <kilden>»; egne svar merkes `class="answer forslag"` med «Forslag til svar · ikke fasit fra <kilden>». For algdat: regneoppgaver («kjør merge sort på [5, 2, 8, 1]», «hva er kjøretiden til …») passer perfekt, skriv ut mellomregningen i svaret. Har kilden **ingen** oppgaver, lag egne `.quiz`-spørsmål i stedet (minst ett per seksjon), men da uten «fra kilden»-merking.
8. Én `.quiz[data-quiz]` «Sjekk forståelsen» per seksjon i tillegg, og 4–5 «Test deg selv» i oppsummeringen.
9. Oppsummering nederst: `.recap-grid` med én `.recap-pill` per hovedpoeng.

Per side i tillegg: `.callout` (nøkkelpoeng), `.callout-warn` (vanlige feil), `.callout-good`, `.def-box` (definisjoner), `.compare-grid` (to ting side om side), `.fact-grid`, `.steps` (nummererte steg). Alle finnes i `style.css`; se hvordan `introml/` bruker dem.

## 5. Begreper

`begreper.js`: ett objekt per fagbegrep, 1–3 setninger, `more` peker til seksjonen der begrepet forklares (`'kap1/del-a.html#seksjon'`, relativ til fagets rot; bruk variabler per side slik `introml/begreper.js` gjør). Alle nøkler som brukes i `data-term` må finnes, og alle definerte begreper bør brukes minst ett sted (`valider.py` sier fra). 60–120 begreper per kapittel er normalt.

## 6. Forside, portal, søk

- `<slug>/index.html`: kapittelkort med lenke til `kapN/`, tekst i «Om emnet» og «Pensum» (kilde og hvordan siden oppdateres).
- `<slug>/fag.js`: legg alle sider i `sider` (søket indekserer bare disse).
- Portalen `index.html` i repo-roten: oppdater fagets kort (fjern `soon`-klassen, sett `.fc-status` til f.eks. «Kapittel 1 ferdig»).

## 7. Kvalitetssjekk (obligatorisk)

```bash
python tools/valider.py --fag algdat        # begrepsnøkler, ankre, HTML-balanse, KaTeX, dekning, oppgavelista, fag.js
python -m http.server 8000                  # fra repo-roten, så http://localhost:8000/algdat/
```

Visuell kontroll uten å åpne nettleseren (Windows, Edge):

```bash
"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --no-first-run --user-data-dir=<tmp> --hide-scrollbars --virtual-time-budget=10000 --window-size=1280,3000 --screenshot=<fil.png> http://127.0.0.1:8000/algdat/kap1/del-a.html
```

Les PNG-en med Read-verktøyet. Ta gjerne skjermbilder av én seksjon om gangen ved å lage en midlertidig kopi av siden med `<style>section:not(#id){display:none}</style>` injisert (slett kopien etterpå). Sjekk at formler rendrer, at SVG-kurver ikke er svarte flater (klassen `mlplot` settes automatisk av `MLPlot.make`), at popover åpnes ved klikk på et begrep, og at «Se svar» virker.

Sjekkliste før du sier deg ferdig:

- [ ] Alle oppgaver/spørsmål i kildestoffet finnes som `.oppgave`-boks, og alle står i `kapN/index.html` sin oppgaveliste med riktig status.
- [ ] Hver `h2` har `source-note` som peker til kilden.
- [ ] `dekning.json` dekker hele `notater.md`.
- [ ] `fag.js` lister alle sider; portalkortet er oppdatert.
- [ ] `valider.py` uten problemer; ingen JS-feil i headless render (dump-dom viser `class="katex"` og widget-utdata).
- [ ] Ingen commit/push uten at brukeren ber om det (når de gjør det: `git add -A && git commit` med beskrivende melding, `git push`).

## 8. Anbefalt startprompt for agenten

> Les `NYTT-FAG.md` og `CLAUDE.md` i dette repoet. Jeg vil ha en studieside for TDT4120 Algoritmer og datastrukturer i `algdat/`, med nøyaktig samme oppsett som `introml/`. Fagstoffet ligger i `<mappe/filer>` og består av `<beskriv: slides per forelesning / bokkapitler / notater / øvinger>`. Start med kapittel 1 (`<hvilke temaer>`). Ta med alle oppgaver og spørsmål fra stoffet som «Se svar»-bokser, lag klikkbare begreper og minst én interaktiv widget per side. Kjør `tools/valider.py` og ta skjermbilder før du sier deg ferdig. Ikke commit før jeg sier fra.
