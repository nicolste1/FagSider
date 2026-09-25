# Eksamensanalyse — TDT4136 Introduksjon til kunstig intelligens

**Godkjent av brukeren 25. september 2026** (prioriteter og kapittelinndeling). Bygger på løsningsforslagene til Ord. 2022 og
Ord. 2023 (begge i `kilder/`), pensumlista for 2026 (fra brukeren), og assignment-forelesning 1 og 2 der
læringsassistenten sier hva som «pleier å komme». Forelesning 1–6 er lest for å se hva som er dekket så langt.
Den maskinlesbare varianten ligger i `eksamen.json`.

## Status

- [x] Eksamenssett samlet: Ord. 2022 og Ord. 2023 med løsningsforslag (`kilder/exam2022ord_solution.pdf`, `kilder/exam2023ord_solution.pdf`)
- [ ] Flere sett (2024, 2025, konter) — mangler
- [x] Gjennomgått med brukeren
- [x] `eksamen.json` fylt ut
- [x] Godkjent av brukeren: 25. september 2026
- [ ] Ord. 2024 og 2025: brukeren finner dem ikke (25. sept 2026)

## Eksamensform

Faglærer (sitert av brukeren): «Are previous exams representative of the current syllabus? Mostly, but some topics such
as the GraphPlan algorithm are no longer in the current syllabus. The exam will only cover topics within the current syllabus.»

Fra settene: skriftlig, engelsk, 100 poeng. Ord. 2023 hadde denne fordelingen:

| Del | Poeng | Form |
|---|---|---|
| 1 Korte spørsmål (10 stk) | ~20 | Forklar, 1–3 setninger |
| 2 Søk (algoritmer + A*-konsistens) | 20 | Regn: kjør BFS/DFS/UCS/greedy/A* for hånd, ulikheter for h(B) |
| 3 Logikk (PL + FOL) | 20 | Formaliser, inferensregler med navn, resolusjonsbevis |
| 4 CSP | 15 | Skriv constraints, AC-3, backtracking med MRV/LCV |
| 5 Spillteori | 10 | Dominans, IESDS, Nash, sosial velferd |
| 6 Adversarialt søk | 5 | Expectiminimax i gitt tre |
| 7 Delvis observerbart miljø | 5 | Belief states i labyrint |
| 8 Planlegging | 5 | PDDL + bakoversøk, 3 steg |

Ord. 2022 hadde samme mønster: 10 korte teorispørsmål, PEAS/agenttype, søk (tilstandsgraf, IDS, heuristikk), CSP
(constraint graph, backtracking MRV/LCV), PL (formalisering, sannhetstabell, resolusjon), planlegging (PDDL, regresjon).

Eksamen 2026 (fra brukeren, 25. sept): **4 timer skriftlig, ingen hjelpemidler utenom kalkulator.** Alt må kunne gjøres for hånd: algoritmer steg for steg, sannhetstabeller, CNF-konvertering, PDDL-notasjon.

## Tilgjengelige eksamenssett

| Sett | Fil / lenke | Løsningsforslag? | Merknad |
|---|---|---|---|
| Ord. 2022 | `kilder/exam2022ord_solution.pdf` | Ja (oppgave og svar i samme fil) | 2 sider, tett; oppgave 6/7 (planlegging) har nummerfeil i originalen |
| Ord. 2023 | `kilder/exam2023ord_solution.pdf` | Ja (oppgave og svar i samme fil) | Figurer for 2.1, 2.2, 6.1 og 7.1 finnes bare som bilder i PDF-en |
| Ord. 2024 | mangler | ? | Be brukeren skaffe |
| Ord. 2025 | mangler | ? | Assignment-forelesning 2 sier 2025 hadde topologisk sortering (tre-CSP, kap. 5.5) — **5.5 er ute av pensum i 2026** |

## Pensum 2026 og hva forelesningene har dekket (per 25. september)

Russell & Norvig 4. utg. kap. 1–11, deler av 24–25, kap. 28, og støttestoff 17.2.1–17.2.3 (spillteori).
Unntatt: 5.3.3, 5.3.4, 5.5, 7.7, 9.4.2–9.4.5, 9.5.4, 10.2.3, 10.4, 10.6, 11.1.2, 11.1.3, 11.2.3, 11.2.4, 11.3.1, 11.3.2,
11.4.3, 11.6, 24.2.1, 24.3.1, 24.3.2, 24.4, 24.5, 28.3.5, 28.3.6.

| Forelesning | Tema | Bok |
|---|---|---|
| L1 del 3 | Intelligente agenter (PEAS, miljøegenskaper, agenttyper) | kap. 2 |
| L2 | Problemløsning ved søk: formulering, BFS, DFS, DLS/IDS, UCS, greedy, A* | kap. 3 |
| L3 | A*-optimalitet, admissibilitet, konsistens, dominans, lokalt søk, GA, ikke-determinisme, belief states | kap. 3–4 |
| L4 | CSP: formulering, AC-3, forward checking, backtracking, MRV/LCV, min-conflicts | kap. 5 (6 i eldre utg.) |
| L5 | Proposisjonell logikk: modeller, entailment, inferensregler, Horn, chaining, CNF, resolusjon | kap. 7 |
| L6 | Førsteordens logikk: syntaks, kvantorer, modeller, oversettelse | kap. 8 |
| Kommer | FOL-inferens (unifikasjon, resolusjon), kunnskapsrepresentasjon, planlegging, adversarialt søk, spillteori, NLP, persepsjon, etikk | kap. 9–11, 6, 17.2, 24–25, 28 |

Assignment 1 = søkealgoritmer for hånd (Doom-graf) + admissibilitet/konsistens. Assignment 2 = AC-3 og backtracking i
Python på Sudoku. Læringsassistenten sier begge temaer «pleier å komme mye på eksamen».

## Analyse per deltema

Prio: 1 = kommer nesten alltid og gir mange poeng, 2 = kommer ofte eller som kort spørsmål, 3 = sjelden/lite.
Type: regn / forklar / tegn / kode. Nøklene brukes i `eksamen.json` og `dekning.json`.

| Deltema | Prio | Type | Forekomster (sett · oppgave · poeng) | Typisk formulering |
|---|---|---|---|---|
| 1.1 Agenter, rasjonalitet, PEAS | 1 | forklar | O22 · 2.1 (PEAS for butikkrobot); O22 · 1.2 (modell i modellbasert agent) | «Spesifiser PEAS, forklar hvorfor ytelsesmålet passer» |
| 1.2 Miljøegenskaper | 1 | forklar | O22 · 2.1; O23 · 1 (episodisk/sekvensiell HR-system; stokastisk vs ikke-deterministisk) | «Klassifiser miljøet og begrunn per egenskap» |
| 1.3 Agenttyper | 1 | forklar, tegn | O22 · 2.2 (tegn modellbasert agent); O23 · 1 (hva trengs i delvis observerbart miljø) | «Hvilken agenttype passer? Tegn komponentene» |
| 2.1 Problemformulering, tilstandsrom | 1 | forklar, tegn | O22 · 3.1 (ulv/geit/kål-graf); O23 · 1 (tilstand for robot m/ bokser); O22 · 1.1 (faktorisert vs atomisk) | «Tegn tilstandsgrafen, forklar noder/kanter, formuler tilstanden som tuppel» |
| 2.2 Uinformert søk: BFS, DFS, DLS, IDS, UCS | 1 | regn | O23 · 2.1 (10 p, ekspansjonsrekkefølge, sti, kostnad for fem algoritmer); O22 · 3.2 (IDS med grense 3) | «Kjør algoritmen på grafen, gi ekspansjonsrekkefølge, sti og kostnad. Tie-break venstre→høyre/alfabetisk» |
| 2.3 Informert søk: greedy, A* | 1 | regn | O23 · 2.1 | Samme som 2.2; NB «tree-like search» = ingen sjekk av besøkte noder |
| 2.4 Heuristikker: admissibel, konsistent, dominans | 1 | regn, forklar | O23 · 2.2 (10 p, hvilke h(B) gir konsistens / rekkefølge ACB / suboptimal sti); O22 · 1.3; O22 · 3.3 (lag admissibel heuristikk); O23 · 1 (snitt av to admissible) | «Hvilke verdier av h(B) …», «Forklar hvorfor konsistens er ønskelig», «Design en admissibel heuristikk» |
| 3.1 Lokalt søk: hill climbing, SA, GA | 2 | forklar | O23 · 1 (platå/lokalt maks, random restart); O22 · 1.5 (mutasjon i GA); O22 · 1.4 (inkrementelt vs lokalt) | Korte forklaringsspørsmål |
| 3.2 Ikke-deterministiske miljøer, AND-OR-søk | 3 | forklar | ingen | Nevnes i L3, ikke sett i settene |
| 3.3 Delvis observerbare miljøer, belief states | 2 | regn | O23 · 7 (5 p, belief state i labyrint etter persept og handling) | «Gi belief state S1 etter persept P1, så S2 etter handling» |
| 4.1 CSP-formulering, constraint graph | 1 | forklar, tegn | O22 · 4.1 (X, D, C, graf, unære constraints); O23 · 4.1 (skriv constraints, 2 p) | «Formuler som CSP, tegn constraint graph, forklar noder/kanter» |
| 4.2 AC-3, forward checking | 1 | regn | O23 · 4.2 (6 p, er startilstanden arc-consistent, kjør AC-3, gi domenene) | «Kjør AC-3 og skriv ned reduserte domener» |
| 4.3 Backtracking med MRV og LCV | 1 | regn | O22 · 4.2; O23 · 4.3 (7 p) | «Løs med backtracking, MRV for variabel, LCV for verdi, vis hvert steg med domener» |
| 4.4 Lokalt søk for CSP (min-conflicts), tre-strukturerte CSP | 3 | forklar | O25 skal ha hatt topologisk sortering (5.5), men 5.5 er ute i 2026 | Én linje |
| 5.1 Minimax, alfa-beta | 2 | regn, forklar | O22 · 1.6 (minimax for 3 spillere) | Ikke direkte regnet i O22/O23, men klassisk; forvent «kjør alfa-beta, hvilke grener klippes» |
| 5.2 Expectiminimax | 1 | regn | O23 · 6 (5 p, forhandlingstre med sjansenoder) | «Fyll inn verdier, regn expectiminimax for alle noder, ta beslutning» |
| 5.3 Monte Carlo-tresøk | 2 | forklar | O22 · 1.7 (hvorfor mindre følsom for evalueringsfeil) | Kort spørsmål |
| 5.4 Spillteori: dominans, IESDS, Nash, sosial velferd | 1 | regn | O23 · 5 (10 p, 3×3-matrise); O23 · 1 (hvorfor randomisert atferd er rasjonelt) | «Finnes dominant strategi? Iterert eliminering, Nash-likevekt, hvilken maksimerer sosial velferd» |
| 6.1 PL: syntaks, modeller, entailment, sannhetstabell | 1 | regn, forklar | O22 · 5.1–5.2 (formaliser gullkasse-puslespill, sannhetstabell); O22 · 1.9 (hva er entailment) | «Formaliser utsagnene, lag sannhetstabell, slutt hvem som har gullet» |
| 6.2 PL: inferensregler, Horn, forward/backward chaining | 1 | regn | O23 · 3.1 (10 p, bok-gåte med MP, MT, disjunktiv syllogisme); O23 · 1 (Horn + modus ponens); O22 · 1.9 | «Oversett hintene, utled med navngitte regler, må bruke modus tollens» |
| 6.3 PL: CNF og resolusjon | 1 | regn, forklar | O22 · 5.3 (KB og spørring for resolusjonsrefutasjon) | «Hvordan defineres KB og α, hva må oppnås for å vise KB ⊨ α» |
| 7.1 FOL: syntaks, kvantorer, oversettelse fra naturlig språk | 1 | regn | O23 · 3.2a; O22 · 1.10 (fire nye elementer i FOL) | «Representer informasjonen som FOL-setninger» |
| 7.2 FOL: unifikasjon, forward/backward chaining | 2 | regn | ingen direkte | Forvent lite regning, men begreper |
| 7.3 FOL: CNF, skolemisering, resolusjon | 1 | regn | O23 · 3.2b (10 p, Fido/Snowy: konverter til CNF, resolusjonsrefutasjon med substitusjoner) | «Nummerer CNF-setningene, vis konverteringen, utfør resolusjon med substitusjoner» |
| 8.1 Kunnskapsrepresentasjon (ontologier, kategorier, hendelser) | 3 | forklar | ingen | Kap. 10, ikke forelest ennå; kanskje kort spørsmål |
| 9.1 Planlegging: PDDL (init, goal, action schemas) | 1 | regn | O22 · 7.1 (apekatt og bananer); O23 · 8.1 (julegave, 2 p) | «Spesifiser problemet i PDDL med init, goal og action schemas» |
| 9.2 Planlegging: forover/bakoversøk, heuristikker | 1 | regn, forklar | O22 · 7.2 (regresjon, 3 steg); O23 · 8.2 (3 p); O22 · 1.8 (ignore-delete-list admissibel) | «Løs med bakoversøk, vis første 3 steg med handlinger og tilstander» |
| 9.3 Hierarkisk planlegging (HTN) | 3 | forklar | ingen | Kap. 11.4, GraphPlan er ute |
| 10.1 NLP (kap. 24, delene som er igjen) | 3 | forklar | ingen | Grammatikk/parsing-basics; sjekk når slides kommer |
| 10.2 Persepsjon / datasyn (kap. 25) | 3 | forklar | ingen | Sjekk når slides kommer |
| 11.1 Etikk og AI-sikkerhet (kap. 28) | 2 | forklar | O23 · 1 (individuell rettferdighet, metoder for å realisere den) | Kort spørsmål, 2 p |
| 12.1 AI-historie og filosofi (kap. 1) | 3 | forklar | O23 · 1 (Newell og Simon, General Problem Solver) | Kort faktaspørsmål; lav uttelling |

## Tidligere eksamensoppgaver som skal inn som `.oppgave`-bokser

Label på siden: «Eksamen Ord. 2023 · oppg. 2.1». Svar fra løsningsforslag merkes «Svar fra løsningsforslaget».
Oppgaver med figur (merket *) må få figuren gjenskapt som SVG på siden.

| Sett · oppgave | Deltema | Side · anker (plan) | Status |
|---|---|---|---|
| O22 · 1.1 faktorisert vs atomisk | 2.1 | kap2/sok-formulering.html | ferdig |
| O22 · 1.2 modell i modellbasert agent | 1.3 | kap1/agenter.html | ferdig |
| O22 · 2.1–2.2 PEAS + agenttype for butikkrobot | 1.1–1.3 | kap1/agenter.html | ferdig |
| O23 · 1 episodisk/sekvensiell HR-system | 1.2 | kap1/agenter.html | ferdig |
| O23 · 1 stokastisk vs ikke-deterministisk | 1.2 | kap1/agenter.html | ferdig |
| O23 · 1 delvis observerbart vs enkel refleksagent | 1.3 | kap1/agenter.html | ferdig |
| O23 · 1 tilstand for robot med bokser | 2.1 | kap2/sok-formulering.html | ferdig |
| O22 · 3.1–3.3 ulv, geit og kål (graf, IDS, heuristikk) | 2.1, 2.2, 2.4 | kap2/uinformert-sok.html | ferdig |
| O23 · 2.1 fem algoritmer på graf * | 2.2, 2.3 | kap2/informert-sok.html | ferdig |
| O23 · 2.2 A*-konsistens, verdier av h(B) * | 2.4 | kap2/heuristikker.html | ferdig |
| O22 · 1.3 hvorfor konsistens | 2.4 | kap2/heuristikker.html | ferdig |
| O23 · 1 snitt av to admissible heuristikker | 2.4 | kap2/heuristikker.html | ferdig |
| O23 · 1 hill climbing fast, hva kan tilstanden være | 3.1 | kap3/lokalt-sok.html | ferdig |
| O22 · 1.4 inkrementelt vs lokalt søk | 3.1 | kap3/lokalt-sok.html | ferdig |
| O22 · 1.5 mutasjon i GA | 3.1 | kap3/lokalt-sok.html | ferdig |
| O23 · 7 belief states i labyrint * | 3.3 | kap3/delvis-observerbart.html | ferdig |
| O22 · 4.1–4.2 firesifret tall (CSP, graf, backtracking) | 4.1, 4.3 | kap4/csp-formulering.html + backtracking.html | ferdig |
| O23 · 4 gartnere (constraints, AC-3, backtracking) | 4.1–4.3 | kap4/csp-formulering.html + backtracking.html | ferdig |
| O22 · 1.6 minimax for 3 spillere | 5.1 | kap5/ (kommer) | planlagt |
| O22 · 1.7 MCTS vs alfa-beta | 5.3 | kap5/ (kommer) | planlagt |
| O23 · 6 expectiminimax lønnsforhandling * | 5.2 | kap5/ (kommer) | planlagt |
| O23 · 5 spillteori US/Kina AGI | 5.4 | kap5/ (kommer) | planlagt |
| O23 · 1 randomisert atferd i multiagent | 5.4 | kap5/ (kommer) | planlagt |
| O22 · 5.1–5.2 gullkasser (PL, sannhetstabell) | 6.1 | kap6/pl-grunnlag.html | ferdig |
| O22 · 5.3 gullkasser, resolusjonsrefutasjon | 6.3 | kap6/resolusjon.html | ferdig |
| O22 · 1.9 hva er entailment, hvilke regler | 6.1, 6.2 | kap6/pl-grunnlag.html | ferdig |
| O23 · 3.1 bok-gåte med inferensregler | 6.2 | kap6/pl-grunnlag.html | ferdig |
| O23 · 1 Horn-klausuler og modus ponens | 6.2 | kap6/pl-grunnlag.html | ferdig |
| O22 · 1.10 ulempe med PL, fire nye elementer i FOL | 7.1 | kap7/fol.html | ferdig |
| O23 · 3.2 Fido/Snowy FOL + resolusjon | 7.1, 7.3 | kap7/fol.html (7.3 kommer) | ferdig |
| O22 · 1.8 ignore-delete-list admissibel | 9.2 | kap9/ (kommer) | planlagt |
| O22 · 7.1–7.2 apekatt og bananer (PDDL, regresjon) | 9.1, 9.2 | kap9/ (kommer) | planlagt |
| O23 · 8 julegave (PDDL, bakoversøk) | 9.1, 9.2 | kap9/ (kommer) | planlagt |
| O23 · 1 individuell rettferdighet | 11.1 | kap11/ (kommer) | planlagt |
| O23 · 1 Newell og Simon, GPS | 12.1 | kap1/index.html (ekstra) | ferdig (i details) |

## Plan for kapitler (forslag, følger bokas rekkefølge)

| Kap | Tema | Bok | Slides | Status |
|---|---|---|---|---|
| 1 | Intelligente agenter | 2 (+1 kort) | L1 del 3 | ferdig 25. sept 2026: kap1/agenter.html |
| 2 | Problemløsning ved søk | 3 | L2, L3 | ferdig: sok-formulering, uinformert-sok, informert-sok, heuristikker |
| 3 | Søk i komplekse miljøer | 4 | L3 | ferdig: lokalt-sok, delvis-observerbart |
| 4 | CSP | 5 | L4 | ferdig: csp-formulering, backtracking |
| 5 | Adversarialt søk og spillteori | 6, 17.2 | venter | vent på slides |
| 6 | Proposisjonell logikk | 7 | L5 | ferdig: pl-grunnlag, resolusjon |
| 7 | Førsteordens logikk og inferens | 8, 9 | L6 (+ kommer) | 7.1 ferdig: fol.html; 7.2–7.3 når slides kommer |
| 8 | Kunnskapsrepresentasjon | 10 | venter | vent |
| 9 | Planlegging | 11 | venter | vent |
| 10 | NLP og persepsjon | 24, 25 | venter | vent |
| 11 | Etikk | 28 | venter | vent |
| Øvinger | Én kort side per assignment (1: søk, 2: CSP, …) | | AssignmentLecture 1–2 | ferdig: oving/assignment1, assignment2 |

Kap. 5 er nummerert etter boka selv om forelesningen kommer senere; slidene til den avgjør endelig innhold.

## Hva som bevisst nedprioriteres

- Alt i unntakslista over (spesielt 5.5 tre-CSP/topologisk sortering, 7.7 PL-agenter, 9.4.2–9.4.5 Prolog, 11.2.3 SAT-planlegging, GraphPlan).
- Slides merket «not curriculum»: BusTUC-demo, Prolog- og Z3-eksempler, SMT, Alive2, CSP-programvare.
- Historikk (kap. 1) utover ett kort faktaspørsmål: Turing-test, AI-vintre osv. legges i `<details>`.
- Kompleksitetsbevis for søkealgoritmene: tabellen med b, d, m holdes, utledningene kuttes.
- Assignment-koden (Sudoku i Python): øvingssidene beskriver hva som skal gjøres og hva man skal kunne, ikke løsningen.

## Avvik funnet i løsningsforslagene (merket på sidene)

- O22 4.2: løsningsforslaget ender på 1245, men LCV slik boka definerer den gir 1345. Siden viser 1345 og forklarer avviket.
- O22 5.3: løsningsforslaget kaller S1 og S3 CNF; de er DNF. Siden gir riktig CNF.
- O23 2.2: B→C-ulikheten er feilregnet i løsningsforslaget (7 skulle vært 6), svaret 4 ≤ h(B) ≤ 6 er likevel riktig; h(B) = 11 fungerer også i del 2 med alfabetisk tie-break.
- O23 kort om hill climbing: «local minimum» skulle vært lokalt maksimum. «Herbert and Simon» skulle vært Newell og Simon.
- O22 2.2: løsningsforslaget kaller agenten modellbasert, men beskriver målbasert valg.
- Assignment-forelesning 1, slide 18: konklusjonen stemmer, begrunnelsen for inkonsistens er feil.
- Slide 165 (Romania): h(Fagaras)=178 og h(Pitesti)=98 i tabellen, men 176/100 i gjennomgangen.
