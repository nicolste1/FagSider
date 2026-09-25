# NYTT-FAG.md — oppskrift for å lage en ny fagside

Denne fila er skrevet for en agent (Claude Code) som åpnes i et nytt vindu uten annen kontekst, og som skal lage en studieside for et nytt fag i dette repoet. Les hele fila før du starter. Les også `CLAUDE.md` (konvensjonene) og bruk `introml/` som referanseimplementasjon: **alt du lager skal se ut og oppføre seg som `introml/`**, bare med et annet fag.

Brukeren gir deg fagstoffet. Det kan komme i en annen form enn for maskinlæring (der det var én PDF med nummererte avsnitt): slides, kapitler fra en lærebok, forelesningsnotater i markdown, øvingsoppgaver, videoer med transkripsjon, nettsider. Oppskriften under sier hva du gjør i hvert tilfelle.

**Sidene skal være eksamensrettede, ikke komplette.** Målet er at brukeren gjør det bra på eksamen på kortest mulig lesetid. Det betyr: steg 0 (eksamensanalyse) kommer før alt annet, hver innholdsside åpner med en «Eksamensfokus»-boks, stoff som ikke gir uttelling på eksamen kuttes eller legges i `<details>`, og en innholdsside skal være så kort som stoffet tillater. Det er ingen fast ordgrense; lengden vurderes per kapittel.

## Steg 0. Eksamensanalyse, sammen med brukeren (før noe annet)

Ikke skriv en eneste innholdsside før dette er gjort og godkjent.

1. Spør brukeren: hvilke tidligere eksamenssett finnes, hvor ligger de (PDF, lenker), finnes løsningsforslag, og hva har faglærer sagt om eksamensform og vekting? Har faget en læringsutbyttebeskrivelse eller emnebeskrivelse med læringsmål, be om den også; den er rettesnoren når eksamenssett mangler.
2. Les settene (Read-verktøyet leser PDF). Noter per deltema i pensum: hvor ofte det kommer, oppgavetype (regn / forklar / tegn / kode / flervalg), poeng, og typisk formulering.
3. Fyll ut `<slug>/kilder/eksamensanalyse.md` (mal i `_mal/kilder/`) og `<slug>/kilder/eksamen.json` (prio 1–3 og type per deltema, samme nøkler som `dekning.json`). Liste over tidligere eksamensoppgaver som skal inn som `.oppgave`-bokser.
4. Gå gjennom analysen med brukeren og få den godkjent (kryss av i «Status» øverst i fila). Uenighet om prioritet avgjøres av brukeren.
5. Gjenta per kapittel senere: les analysen for temaet før du skriver kapittelet, og oppdater den når nye sett kommer.

Finnes det ingen eksamenssett ennå (nytt fag), skriv analysen ut fra læringsmålene og merk den «foreløpig, uten eksamenssett». Eksamensfokus-boksen på sidene skal da si det.

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
| `kilder/` | Fagstoffet siden bygger på (PDF/markdown/…), `notater.md` (tekstuttrekk per seksjon), `versjon.js` + `versjon.json` (hvilken versjon siden bygger på), `dekning.json` (seksjon → side#anker), **`eksamensanalyse.md` + `eksamen.json`** (hva som kommer på eksamen, prio per deltema; lages i steg 0). |

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
- Bruk `eksamen.json` til å bestemme dybde: deltemaer med prio 1 får full behandling med regneeksempler og widget; prio 2 får kort forklaring og oppgavene; prio 3 får et avsnitt eller bare en linje i Eksamensfokus-boksen under «Lavere».
- Én innholdsside per del. Ingen fast ordgrense, men del opp når en side blir uoversiktlig. `introml/kap1/` har tre: 1A (1.1–1.2, den lengste), 1B (1.3), 1C (1.4).
- Hver innholdsside: `header.hero` med `nav.toc`, 5–13 `section[id]`, `nav.page-nav` (forrige/neste) nederst. Kopier skjelettet fra `_mal/kap1/del-a.html` og fyll inn; se `introml/kap1/beslutningstraer.html` for en komplett, ferdig side i moderat størrelse.
- Kapitteloversikten `kapN/index.html` lages **etter** innholdssidene, slik at læringssti, deler og oppgavelista kan lenke til ferdige ankre. Kopier `_mal/kap1/index.html`.
- Lag `kap1` ferdig først. Legg til `kap2` når brukeren gir deg stoffet, eller når det er naturlig.

## 4. Innholdet på en side

Først på siden, rett etter `header.hero`: **seksjon `00 · Eksamensfokus`** (`<section id="fokus">`, se `_mal/kap1/del-a.html`). En `.callout callout-warm` med én linje per punkt, merket `Regn` / `Forklar` / `Lavere`, med oppgavenumre og tidligere eksamensoppgaver fra `eksamen.json`. `source-note` sier hvilken versjon av eksamensanalysen den bygger på, eller at analysen ikke er laget ennå.

Per seksjon:

1. `.section-badge` («03 · Tema»), `h2` med ett ord i `<em>`, `.source-note` («Slides forelesning 2 · 14–31» / «Boka kap. 3.2 · s. 88–95» / «Notatene · avsnitt 1.2.4 · s. 9–11»), så læringsmålet ordrett i `.lm-pill` + `.lm-list` om faget har læringsmål.
2. Brødtekst som **forklarer**, ikke bare gjengir, og som er kort: maks tre avsnitt før første formel, figur eller oppgave. Historikk, anekdoter, produkteksempler og tall som ikke inngår i noen oppgave kuttes, eller legges i `<details><summary>Utdypning · lavere prioritet</summary>…</details>` om de kan bli spurt om. Første avsnitt i en seksjon kan ha `class="dropcap"`. Bruk kildens ordvalg for fagbegreper. Norsk bokmål, uformell «vi»-stil.
3. Klikkbare begreper: `<span class="term" data-term="nokkel">tekst</span>`, første gang begrepet dukker opp i seksjonen. Nøkkelen må finnes i `begreper.js`.
4. Formler i KaTeX. Kode og pseudokode i `<pre><code>` (escape `<` som `&lt;`). For algdat: pseudokode slik kilden skriver den (f.eks. CLRS-stil), kompleksitet i KaTeX: `\(\mathcal{O}(n \log n)\)`.
5. Figurer: SVG. Trestrukturer kan bruke `.tree-svg`-stilen fra `introml/kap1/beslutningstraer.html` (kopier CSS-en inn i sidens `<style>`). Kurver og punkter med `MLPlot`.
6. **Widgeter** der det gir læringsutbytte: én til to per side. Vanilla JS, én IIFE per widget nederst på siden. Gode widgeter for algoritmer: stegvis kjøring av en algoritme på et lite eksempel (array som tegnes om for hvert steg, «Ett steg»/«Kjør»/«Nullstill»), sammenlikning av kjøretid mot \(n\) for to algoritmer (MLPlot), en interaktiv datastruktur (legg inn/fjern i en heap eller et BST og se treet), rekursjonstre. Hold dem små og deterministiske (seedet tilfeldighet, se `rng()` i `introml/kap1/regresjon.html`).
7. **Oppgaver**, som `.oppgave`-bokser på det stedet i teksten der de hører hjemme, i denne prioriteringen: (a) tidligere eksamensoppgaver fra `eksamensanalyse.md`, label «Eksamen Ord. 2024 · oppg. 5.4», svar merket «Svar fra løsningsforslaget» eller `answer forslag`; (b) oppgavene læringsmålene/emnebeskrivelsen peker på; (c) kildens regneeksempler og oppgaver av samme type som eksamensoppgavene. Svar fra kilden merkes «Svar fra <kilden>»; egne svar merkes `class="answer forslag"` med «Forslag til svar · ikke fasit fra <kilden>». Skriv ut mellomregningen. Diskusjonsoppgaver uten regning og «tenk over»-spørsmål tas bare med om analysen viser at slike kommer på eksamen; ellers listes de i kapitteloversikten under «Ekstra, ikke på siden» så de ikke går tapt. Har kilden **ingen** oppgaver, lag egne `.quiz`-spørsmål i stedet (minst ett per prio 1-seksjon), uten «fra kilden»-merking.
8. Én `.quiz[data-quiz]` «Sjekk forståelsen» per seksjon der den likner en eksamensoppgave (ikke for pynt), og 3 «Test deg selv» i oppsummeringen.
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

- [ ] `kilder/eksamensanalyse.md` og `eksamen.json` finnes og er godkjent av brukeren; hver innholdsside har seksjon `00 · Eksamensfokus` som stemmer med dem.
- [ ] Alle tidligere eksamensoppgaver i analysen og alle oppgaver læringsmålene peker på finnes som `.oppgave`-boks, og alle bokser står i `kapN/index.html` sin oppgaveliste med riktig status. Utelatte oppgaver fra kilden er listet under «Ekstra».
- [ ] Hver `h2` har `source-note` som peker til kilden.
- [ ] `dekning.json` dekker hele `notater.md`.
- [ ] `fag.js` lister alle sider; portalkortet er oppdatert.
- [ ] `valider.py` uten problemer; ingen JS-feil i headless render (dump-dom viser `class="katex"` og widget-utdata).
- [ ] Ingen commit/push uten at brukeren ber om det (når de gjør det: `git add -A && git commit` med beskrivende melding, `git push`).

## 8. Anbefalt startprompt for agenten

> Les `NYTT-FAG.md` og `CLAUDE.md` i dette repoet. Jeg vil ha en studieside for TDT4120 Algoritmer og datastrukturer i `algdat/`, med nøyaktig samme oppsett som `introml/`. Fagstoffet ligger i `<mappe/filer>` og består av `<beskriv: slides per forelesning / bokkapitler / notater / øvinger>`. Tidligere eksamenssett ligger i `<mappe>`. Start med steg 0, eksamensanalysen, og gå gjennom den med meg før du skriver sider. Så kapittel 1 (`<hvilke temaer>`), eksamensrettet og kort: Eksamensfokus-boks øverst, tidligere eksamensoppgaver og kildens regneoppgaver som «Se svar»-bokser, klikkbare begreper og én widget per side. Kjør `tools/valider.py` og ta skjermbilder før du sier deg ferdig. Ikke commit før jeg sier fra.
