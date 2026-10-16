# Notater — TDT4136 (tekstuttrekk/sammendrag av slidene per deltema)

Én `## <nummer> <tittel>` per deltema, samme nummerering som `eksamensanalyse.md` og `dekning.json`. Brukes til å spore endringer når nye slides kommer.

## 1 Intelligente agenter

Kilde: Lecture1-Fall2026_Part3_Massimiliano (1).pdf, «Chap 2 - Intelligent Agents», Massimiliano Ruocco, 37 slides.
Hovedreferanse: Russell & Norvig, AIMA 4. utg. (2021), kap. 2. Side = slide-nummer i PDF-uttrekket.
Dekket på kap1/agenter.html (1A). Kapitteloversikt i kap1/index.html.

## 1.1 Agenter, rasjonalitet, PEAS

Slide 4–8: En agent er alt som kan sees på som noe som oppfatter miljøet gjennom sensorer og virker på det gjennom
aktuatorer (menneske, robot, softbot). Miljøet = den delen av universet som påvirker perseptene og påvirkes av handlingene;
miljøet definerer problemet, agenten gir løsningen. Persept = innholdet sensorene oppfatter i et øyeblikk; perseptsekvens =
hele historien. Valget kan avhenge av innebygd kunnskap og hele perseptsekvensen, ikke av noe ikke oppfattet ennå.
Agentfunksjon = matematisk avbildning fra perseptsekvenser til handlinger (ekstern, abstrakt). Agentprogram = konkret
implementasjon på arkitekturen. agent = arkitektur + program. Tabulering av agentfunksjonen blir astronomisk stor.
Slide 9–10: Støvsugerverdenen, to ruter A og B, persept [rute, skitt], handlinger Right, Left, Suck, NoOp; start i A.
Delvis tabell: [A,Clean]→Right, [A,Dirty]→Suck, [B,Clean]→Left, [B,Dirty]→Suck, [A,Clean],[A,Clean]→Right, [A,Clean],[A,Dirty]→Suck.
Slide 11–13: Rasjonell agent «gjør det riktige»; konsekvensialisme; ytelsesmål = objektiv funksjon over sekvenser av
miljøtilstander, ligger hos designeren. Støvsuger målt på mengde skitt → suger, dumper, suger igjen.
Slide 14: Rasjonalitet avhenger av (1) ytelsesmålet, (2) forkunnskap om miljøet, (3) handlingene, (4) perseptsekvensen.
Slide 15: Definisjon: for hver mulig perseptsekvens velg handling som forventes å maksimere ytelsesmålet, gitt evidensen
i perseptsekvensen og innebygd kunnskap.
Slide 16: Antakelser (1 poeng per ren rute per steg over 1000 steg, geografi kjent, skitt/start ukjent, rent forblir rent,
Suck renser, Right/Left flytter eller står ved kant, sensorer korrekte) → den enkle agenten er rasjonell.
Slide 17–18: Rasjonalitet ≠ perfeksjon; allvitende agent umulig; flydør-eksempelet. Læring; autonomi; møkkbillen.
Slide 19: PEAS taxi: P trygg, rask, lovlig, komfortabel, maks profitt, minimer påvirkning på andre; E veier, trafikk,
politi, fotgjengere, kunder, vær; A ratt, gass, brems, blinklys, horn, skjerm, tale; S kameraer, radar/lidar, speedometer,
GPS, motorsensorer, akselerometer, mikrofoner, berøringsskjerm.
Slide 20: Flere PEAS: satellittbildeanalyse, deleplukkende robot, raffinerikontroller, interaktiv engelsklærer
(ikke gjengitt på siden; listet under «Ekstra» i kapitteloversikten).

## 1.2 Miljøegenskaper

Slide 21: Sju dimensjoner: fullt/delvis (eller u-)observerbart; én/fler agenter; deterministisk/ikke-deterministisk;
episodisk/sekvensiell; statisk/dynamisk; diskret/kontinuerlig; kjent/ukjent.
Slide 22: Fullt observerbart = sensorene gir hele (relevante) tilstanden; sjakk, bildeanalyse. Delvis: poker, taxi,
medisinsk diagnose. Ingen sensorer: uobserverbart.
Slide 23: Én agent: kryssord. Fler: sjakk. Test: oppfører B seg best beskrevet som å maksimere et ytelsesmål som avhenger
av As atferd? Konkurrerende (sjakk), blandet (taxi: kollisjon samarbeid, parkering konkurranse).
Slide 24: Deterministisk = neste tilstand helt bestemt av tilstand + handling. Delvis observerbart kan se
ikke-deterministisk ut. Stokastisk = utfallene eksplisitt kvantifisert med sannsynligheter. Sjakk det.; taxi, poker ikke.
Slide 25: Episodisk (defekte deler på samlebånd) vs sekvensiell (sjakk, taxi). Episodisk er enklere, ingen planlegging.
Slide 26: Statisk (kryssord), dynamisk (taxi; å ikke bestemme seg = gjøre ingenting), semidynamisk (sjakk med klokke).
Slide 27: Diskret/kontinuerlig gjelder tilstand, tid, persepter og handlinger. Sjakk diskret; taxi kontinuerlig.
Slide 28: Kjent/ukjent handler om kunnskap om reglene. Kabal: kjent men delvis observerbart. Nytt dataspill: ukjent men
fullt observerbart.
Eksempelklassifiseringer i widgeten er fra boka fig. 2.6 (ikke i slidene); kjent/ukjent stort sett egen tolkning.

## 1.3 Agenttyper

Slide 29: Agentprogram implementerer agentfunksjonen på en arkitektur; arkitekturen må passe programmet.
Slide 30: Tabelldrevet agent: slår opp hele perseptsekvensen. Taxi ~10^600 000 000 000 rader for én time, sjakk ≥ 10^150,
atomer i universet ≈ 10^80.
Slide 31: Enkel refleksagent: bare nåværende persept, betingelse–handling-regler. REFLEX-VACUUM-AGENT([location, status]):
if Dirty then Suck, else if A then Right, else if B then Left. Virker bare hvis fullt observerbart.
Slide 32: Delvis observerbarhet → uendelige løkker (uten lokasjonssensor). Randomisering: myntkast, i snitt 2 steg.
Sjelden optimalt i enkeltagentmiljø.
Slide 33: Modellbasert refleksagent: intern tilstand; overgangsmodell (egne handlinger + hvordan verden endrer seg) og
sensormodell (hvordan tilstanden viser seg i persepter) + regler. Tilstanden er en beste gjetning.
Slide 34: Målbasert: mål = eksplisitt info om ønskede situasjoner; modell + mål; vurderer framtiden; fleksibel.
Søk (kap. 3, 4, 6) og planlegging (kap. 11).
Slide 35: Nyttebasert: nyttefunksjon avbilder tilstand(er) til reelt tall, internalisering av ytelsesmålet; maksimer
forventet nytte. Håndterer konflikterende mål og usikker måloppnåelse.
Slide 36: Lærende agent: ytelseselement, kritiker (fast ytre ytelsesstandard), læringselement, problemgenerator.
Slide 37: Oppsummering: tabell → enkel refleks → modellbasert → målbasert → nyttebasert, alle kan være lærende.
Pseudokode for MODEL-BASED-REFLEX-AGENT og figuren av modellbasert agent er etter boka fig. 2.11–2.12.

## 2.1 Problemformulering og tilstandsrom

Forelesning 2, PDF-side 1–83. Dekkes av kap2/sok-formulering.html.

## 2.1.1 Problemløsende agent og fire faser

L2 s. 3–18. Når riktig handling ikke er åpenbar, planlegger agenten: vurderer sekvenser av handlinger som danner en sti
til en måltilstand. Kalles problem-solving agent; prosessen heter search. Romania: agenten i Arad med billett fra
Bucharest i morgen; tre veier ut (Sibiu, Timisoara, Zerind). Vi antar agenten har et kart.
Fire faser: goal formulation, problem formulation, search (sekvensen er løsningen), execution.

## 2.1.2 Formell formulering

L2 s. 19–30. State space S (alle steder), initial state s0 = Arad, goal state sg = Bucharest, actions (Go from Arad to
Sibiu ...), transition model Result: S×A→S, Result(Arad, ToSibiu) = Sibiu, action cost c: S×A×S→R.
Tilstander + overganger = state space graph (noder = tilstander, rettede kanter = handlinger).
Standardised problems (grid world, sliding-tile) vs real-world problems (route-finding, robot navigation, VLSI).

## 2.1.3 Standardproblemer og anvendelser

L2 s. 36–58. Grid world: 2D-rutenett, flytt til hindringsfri naborute, objekter kan plukkes/dyttes, vegger.
Vacuum world (bok s. 85): initial state any, goal no dirt, actions Suck/Left/Right (eller Forward/Backward/TurnLeft/
TurnRight), Suck renser ruten, cost 1. Route-finding: nettsider, bilnavigasjon; komplikasjoner varierende kostnad og
omkjøring. TSP (leveringstjenester, tidsvinduer), assembly problems (rekkefølge, minimum kostnad).
8-puzzle-formuleringen er ikke i slidene (boka 3.2.1); tatt med på siden og merket.

## 2.1.4 Atomisk vs faktorisert representasjon

Ikke eget punkt i slidene (boka 2.4.7). Eksamen O22 1.1 (faktorisert vs atomisk) og O23 kort spørsmål (robot med
bokser: tilstand (agent, R1..R4, Truck), start (Truck, 3, 1, 5, 2, 0)).

## 2.1.5 Søketre, node, frontier og reached

L2 s. 59–83. Search tree over state space graph; rot = initial state. Ikke mulig å bygge hele grafen; genererer
etterfølgere av utforskede tilstander. Søkeprosedyre: sjekk mål (avhenger av algoritmen), ekspander, legg etterfølgere
i frontier, velg neste etter f. Arad → Sibiu → Arad = syklus. Node = state, parent, action, path cost («not a state,
but a step in the search»). Frontier ⊂ Reached, Frontier ∪ Expanded = Reached. Notasjon node.STATE, Pop, Top, Add.

## 2.1.6 Ulv, geit og kål (eksamen O22 3.1)

Ikke i slidene. Løsningsforslagets notasjon: tre biter (ulv, geit, kål), 1 = på startsiden, pluss i/o for bondens side.
Start 111-i, mål 000-o. Grafen gjenskapt fra IDS-listingen i løsningsforslaget; ulovlige tilstander som blindveier.

## 2.2 Uinformert søk

L2 s. 84–161, L3 s. 4–10, Assignment-forelesning 1 s. 2–7. Dekkes av kap2/uinformert-sok.html.

## 2.2.1 Best-first search, køer og ytelsesmål

L2 s. 84–98 og 202. Frontier i kø: priority (min f), FIFO, LIFO. Eksempel: etter Arad er frontier Sibiu, Timisoara,
Zerind; FIFO popper Sibiu, LIFO Zerind, prioritet (75 mi) Zerind. «All the strategies are really the same algorithm:
Best-First-Search» med f: Node → R. Cheatsheet: DFS f = −depth, UCS f = g, GBFS f = h, A* f = g + h; BFS egen algoritme.
Ytelse: completeness, cost optimality, time complexity, space complexity.

## 2.2.2 Fallgruver: tree-like, måltest, tie-break

L2 s. 112–115 og 201, L3 s. 5–10, AL1 s. 2–7. Graph search (redundante stier) vs tree-like search; tidlig måltest
(ved generering) vs sen (ved ekspansjon); lagre reached vs rekonstruere sti fra foreldre. «Read the book!»
AL1: BFS = boka s. 95 («biggest gotcha: checks for the goal immediately when discovering a new node»); alle andre =
Best-First-Search s. 91 med passende f. Behandle noder alfabetisk; ved likt f, alfabetisk. Svarformat:
Order of expansion: S, A, B, (G) / Found path: SBG / Path cost: 4.

## 2.2.3 BFS

L2 s. 116–129. FIFO. Eksempelgraf A→B 5, A→C 7, B→D 8, B→E 3, D→F 4, F→G 6, E→G 17. Frontier ⟨B,C⟩, ⟨C,D,E⟩, ⟨D,E⟩,
⟨E,F⟩; E ekspandert: G generert, sjekket tidlig, stopp. Sti fra foreldrekjeden. Ikke kostnadsoptimal med ulike
kostnader, fullstendig i endelig rom, O(b^d).

## 2.2.4 DFS

L2 s. 130–142. LIFO, etterfølgere i omvendt rekkefølge. Frontier ⟨B,C⟩, ⟨D,E,C⟩, ⟨F,E,C⟩, ⟨G,E,C⟩; G ekspandert: mål.
A→B→D→F→G, kostnad 23. Ikke alltid optimal, ikke fullstendig (uendelige rom, løkker, fordi tree-like).
Tid O(b^m), plass O(bm). Graph search-versjon: eksponentiell plass.

## 2.2.5 Depth-limited og iterative deepening

L2 s. 143–145. Begge tree-like. DLS: grense ℓ, noder på dybde ℓ uten etterfølgere. IDS: ℓ = 0, 1, 2, ...; returnerer
løsning, failure eller cutoff. Fullstendig i endelig rom, ikke optimal med ulike kostnader, tid O(b^d), plass O(bd).
Pseudokode fra boka (fig. 3.12, DEPTH(node) > ℓ gir cutoff) er tatt med og merket. Eksamen O22 3.2 (IDS grense 3).

## 2.2.6 UCS

L2 s. 146–159. f = g, prioritetskø, sen måltest. Frontier {B:5,C:7} → {C:7,D:13,E:8} → {D:13,E:8} → {D:13,G:25} →
{F:17,G:25} → {G:23}; G poppes, mål. Kostnadsoptimal (23 mot BFS 25), fullstendig om kostnader > ε > 0,
tid og plass O(b^(1+⌊C*/ε⌋)).

## 2.2.7 Egenskapstabellen

L3 s. 10. BFS Ja¹/Ja³/O(b^d)/O(b^d); UCS Ja¹²/Ja/O(b^(1+⌊C*/ε⌋)) begge; DFS Nei/Nei/O(b^m)/O(bm); DLS Nei/Nei/O(b^ℓ)/O(bℓ);
IDS Ja¹/Ja³/O(b^d)/O(bd). ¹ b endelig, ² kostnader ≥ ε > 0, ³ like kostnader. Gotchas: BFS tidlig måltest;
g summerer hele stien, h bare i n.

## 2.2.8 Eksamen 2023 oppg. 2.1 a–c

Graf S→A 4, S→B 7, A→A 13, A→C 4, C→G 4, B→G 10; h(A)=h(B)=h(C)=3, h(G)=0. Tree-like, venstre til høyre.
BFS: S, A, B, (G); SBG; 17. DFS: S, A, A, A, ...; ingen. UCS: S, A, B, C, (G); SACG; 12. Samme graf som L2 s. 177–200.

## 2.3 Informert søk

L2 s. 162–202, L3 s. 35–46, AL1 s. 9–15. Dekkes av kap2/informert-sok.html.

## 2.3.1 Heuristikk

L2 s. 99–105 og 162–165. Uninformed vs informed; heuristic h: S → R, gjett på gjenværende kostnad. Romania med
rettlinjet avstand (tabell s. 165: Arad 366, Sibiu 253, Fagaras 178 [gjennomgang bruker 176], Pitesti 98 [bruker 100],
R. Vilcea 193, Timisoara 329, Zerind 374, Oradea 380, Bucharest 0 ...).

## 2.3.2 Greedy best-first

L2 s. 166–181. f = h. Romania: Arad; {Sibiu 253, Timisoara 329, Zerind 374}; Sibiu; Fagaras 176; Bucharest 0 → mål.
Arad → Sibiu → Fagaras → Bucharest, 450 mi; ikke optimal (via R. Vilcea og Pitesti 418, 32 mi kortere).
S/A/B/C/G-graf med løkke: A, B, C alle h = 3, alfabetisk; tree-like går i løkke i A. Komplett i endelige rom uten løkker.

## 2.3.3 A*

L2 s. 182–202, L3 s. 35–46. f = g + h. Romania: Sibiu 393, R.Vilcea 413, Fagaras 415, Pitesti 417, Bucharest 450
generert men ikke billigst, Pitesti gir 418, mål. Arad → Sibiu → R.Vilcea → Pitesti → Bucharest, 418.
Løkkegraf: {A:7, B:10} → {B:10, C:11, A:20} → {C:11, G:17, A:20} → {G:12, A:20}; mål. Komplett ved positive kostnader,
endelig rom, eksisterende løsning; optimal under betingelser. Generalisert f = g + w·h: w = 0 UCS, w = ∞ greedy,
w = 1 A*, w > 1 vektet A*.

## 2.3.4 Eksamen 2023 oppg. 2.1 d–e og assignment-eksempelet

O23: greedy S, A, A, A, ...; ingen sti. A*: S, A, B, C, (G); SACG; 12.
AL1 s. 11–15: urettet graf A–B 3, A–C 2, C–D 3, D–E 3, B–E 4; h B 3, C 7, D 2, E 5; start A, mål E.
BFS A, B, (E); DFS A, B, (E); UCS A, C, B, D, (E); GBFS A, B, (E); A* A, B, C, D, (E); alle A B E, kostnad 7.

## 2.4 Heuristikker og A*-optimalitet

L3 s. 11–53, AL1 s. 16–18. Dekkes av kap2/heuristikker.html.

## 2.4.1 Admissibilitet

L3 s. 11–20. A* kostnadsoptimal hvis positive kantkostnader, løsning finnes, h admissibel: h(n) ≤ h*(n). Optimistisk.
Alle h = 0: A* = UCS. Bevisidé: A–B–C–G med kostnad 1 per kant og A–C 999; h(A)=3, h(B)=1000, h(C)=1, h(G)=0; A* velger
ikke optimal sti fordi h(B) overestimerer. Negative heuristikker (s. 19–20): tre spørsmål med svar.

## 2.4.2 Konsistens

L3 s. 21–29, AL1 s. 17. h(n) ≤ c(n,a,n') + h(n') for alle etterfølgere; trekantulikhet. Konsistent ⇒ admissibel (ikke
omvendt), dermed kostnadsoptimal. «A popular version of A* requires consistency» (bonusoppgave Assignment 1).
Konsistent h gir f monotont ikke-avtakende langs enhver sti. Eksamen O22 1.3 (hvorfor konsistens).

## 2.4.3 Optimalitet, effektivitet og minne

L3 s. 30–34. A* optimalt effektiv med konsistent h. Minne: reference count, beam search, IDA*, RBFS («thrashing»).
Bevisskissen for optimalitet (boka 3.5.2) er ikke i slidene; tatt med og merket.

## 2.4.4 Eksamen 2023 oppg. 2.2 og assignment-eksempelet

O23 2.2: graf A→B 1, A→C 4, B→C 2, B→D 3, C→E 5, D→F 2, D→G 4, F→G 1, E→G 3; h A 5, C 4, D 3, E 3, F 1, G 0.
1) konsistens 4 ≤ h(B) ≤ 6 (LF skriver B→C-kravet som ≤ 7, en slurv). 2) A, C, B: 7 < h(B) < 11 (LF; ≤ 11 med alfabetisk
tie-break). 3) suboptimal: h(B) > 11. AL1 s. 18: «ikke admissibel fordi (D,E) = 3 mens h(e) = 5; ikke konsistent»;
begrunnelsen på sliden er upresis (2 ≤ 3 + 5 er sann). Riktige brudd: h(E) = 5 > 0, h(C) = 7 > 6; kant C→D 7 > 3 + 2.

## 2.4.5 Dominans

L3 s. 50–53. Admissibel h2 dominerer h1 hvis h2(n) ≥ h1(n) for alle n; A* ekspanderer færre noder. h_best = max(h_a, h_b,
...). Glidebrikkespill: h2 dominerer h1 fordi den bare fjerner én restriksjon; tabell i boka s. 117.
Eksamen O23 kort: snitt av to admissible er admissibelt.

## 2.4.6 Lage heuristikker

L3 s. 47–49. Glidebrikkespill (15-puzzle-bilde): h1 = antall feilplasserte, h2 = total Manhattan-avstand. Begge
relakseringer: flytt X→Y hvis X nabo til Y og Y tom; h2 fjerner «tom», h1 fjerner begge. Delproblemer (få 1–4 på plass),
lagre i database, kombiner. 8-puzzle-tallene (h1 = 8, h2 = 18, løsning 26) er fra boka fig. 3.25.
Eksamen O22 3.3 (admissibel heuristikk for ulv/geit/kål).

## 3.1 Lokalt søk (Slides forelesning 3 · 54–63)

Kap. 4 i boka, «Search in complex environments». Uinformerte og informerte søk utforsker rommet systematisk,
holder stier i minnet og husker hvilke alternativer som er prøvd; stien til målet er løsningen. I mange
virkelige problemer er stien irrelevant (eksempel: hvilke primtall som ganges til et stort tall).
«If we only care about finding a solution, then there are better ways to search the space!»
Lokalt søk: bruker én current-node og flytter til naboer; gir opp fullstendighet og optimalitet for bedre
tids- og minnebruk; bruker lite (ofte konstant) minne; finner ofte rimelige løsninger i svært store eller
uendelige rom. Skill mellom kontinuerlige og diskrete optimeringsproblemer.
Eksamen: O22 1.4 (inkrementelt vs lokalt søk).

## 3.1.1 Søkelandskapet og nabolag (slides 64–66)

Tilstandsrommet kalles søkerommet og kan visualiseres (Griewank-funksjonen: f(x) = Σ x_i²/4000 − Π cos(x_i/√i) + 1,
«What is the minimum of this function?»). Hvert punkt er en tilstand med «elevation». Objektfunksjon: finn høyeste
topp (maksimum). Kostnadsfunksjon: finn laveste dal. Figur: global maximum, local maximum, «flat» local maximum,
shoulder, current state. Nabolag: A er nabo til S, C og seg selv fordi de kan nås fra A; nabolaget til A er {A, C, S}.
Viktig for lokalt søk: vi bestemmer neste trekk ved å se rundt oss.

## 3.1.2 Hill climbing (slides 68–70)

«Idea: Go to the best spot you see now.» Maksimering: klatre til høyeste topp = hill-climbing. Figur med
global optimum, local optimum, plateau; generer naboer av bitstrenger (1011…, 0011…). Minimerer vi, heter
prosedyren gradient descent (gå dit forskjellen i «høyde» er størst). Pseudokode fra boka fig. 4.2.
Varianter (boka 4.1.1, ikke i slidene): sidelengs trekk, stokastisk, first-choice, random-restart (1/p forsøk).
Eksamen: O23 kort spørsmål (hill climbing fast: lokalt maksimum/platå; random restart).

## 3.1.3 Stokastisk lokalt søk og simulated annealing (slides 71–74)

«Both hill-climbing and gradient descent get stuck in local optima. How do we get out of this mess?»
Idé 1: ta ikke-så-gode valg innimellom = stokastisk lokalt søk. Idé 2: senk gradvis hvor ofte vi tar «dårlige»
valg = simulated annealing; atomer beveger seg mye når det er varmt og legger seg når det kjøles;
P(accept) = e^(−ΔE/T); kjøles det langsomt nok, går sannsynligheten for å finne globalt minimum mot 1.
Proteiner gjør noe lignende. Idé 3: søk flere stier i batcher = populasjonsbasert optimering.
Forskningsfeltet kalles metaheuristikker.

## 3.1.4 Local beam search (boka 4.1.3, ikke egne slides)

Holder k tilstander, genererer alle etterfølgere, beholder de k beste. Stochastic beam search velger
etterfølgere tilfeldig med sannsynlighet etter verdi. Nevnes i slidene bare som «Idea 3: search multiple paths in batches».

## 3.1.5 Genetiske algoritmer (slides 79–88)

Kjent metaheuristikk i familien populasjonsbaserte optimerere. «If you have no signal on where to go, this can be very powerful.»
1. Start med en populasjon av k tilfeldig genererte tilstander. 2. Velg tilfeldig to foreldre vektet etter fitness
(objektfunksjonen). 3. Lag barn ved å kombinere foreldrene tilfeldig. 4. Legg barna til populasjonen.
5. Erstatt den gamle populasjonen med den nye. Gjentas til løsning funnet eller nok generasjoner.
(IT3708 Bio-Inspired AI nevnes.) 8-queens (slide 87): plasser 8 dronninger så ingen sjakker hverandre; figur
med (a) begrensninger, (b) konflikter, (c) mulig løsning; lenke til EvoLP.jl-tutorial.
Slide 88: naturen gjorde dette med overlevelse som fitness.
Eksamen: O22 1.5 (hvorfor mutasjon).

## 3.1.6 Gradient descent og maskinlæring (slides 75–78, 89–90)

Milliard-parameter-funksjon (nevralt nett), tapsfunksjon over treningsdata → milliard-dimensjonalt landskap.
f′(x) / ∇f(x) peker dit funksjonen vokser mest; gå i retning −∇_θ f(x) = gradient descent (lokalt søk);
hopp litt rundt for å ikke sette seg fast. Stien til bunnen er irrelevant. Slide 78: hva om treningsdata er sabotert
(misvisende landskap)? Wake up problem (89–90): minimum av sin(x) — gradient descent eller GA raskest?
Weierstrass-funksjonen W(x) = Σ a^n cos(b^n π x) — hva er raskest nå?

## 3.2 Ikke-deterministiske miljøer og AND-OR-søk (slides 91–102)

Så langt: handlinger er deterministiske. I virkeligheten går ting ikke alltid som forventet; vi trenger en
betinget plan (contingency plan) i stedet for én sti. Erratic vacuum world: Suck renser noen ganger ruta, noen
ganger begge; på ren rute legger den noen ganger skitt. Suck(s1) = {s5, s7}; Suck(s7) = {s3, s7}.
Ikke-determinisme også for moveRight (slippery vacuum world i boka).
AND-OR-søketrær: sammensatte noder av mulige tilstander etter en handling; OR-noder = handlinger (rektangler),
AND-noder = utfall (sirkler); søk i treet = AND-OR-søk; rekursivt med basistilfelle feil eller tom plan.
Figur: tre fra tilstand 1 med Suck/Right, GOAL og LOOP-løvnoder.

## 3.3 Delvis observerbare miljøer og belief states (slides 103, 110–112)

Så langt: agenten vet nøyaktig tilstanden. I virkeligheten får den delvise (og kanskje støyete) observasjoner,
så tilstanden kan bare estimeres gjennom en «belief». Slide 110–111: sammensatte noder med flere utfall; kan
være både ikke-deterministisk og delvis observerbart. Slide 112: i et deterministisk miljø kan vi bruke en vanlig
søkealgoritme i belief-rommet.
Eksamen: O23 oppg. 7 (belief states i labyrint, 5 p).

## 3.3.1 Sensorless deterministisk støvsugerverden (slides 104–109)

Result({1,2,3,4,5,6,7,8}, moveRight) = {2,4,6,8}: moveRight på enhver s ∈ S gir resultat i {2,4,6,8}.
Result({2,4,6,8}, Suck) = {4,8}. Result({4,8}, Left) = {3,7}. Result({3,7}, Suck) = {7}.
«Think of 5D-chess: you solve the problem on multiple paths at the same time!»

## 3.3.2 Med sensorer: predict og update (slides 113–116)

Med sensorer: agenten vet hvor den er og ser skitten (om noen) på sin rute. Overgangsmodellen blir en funksjon
av en belief state, en handling og en annen belief state. Ved ikke-determinisme løser vi problemet for hver
mulighet. Med sensorer i en ikke-deterministisk verden: AND-OR-tre, nodene er belief states, løsningen er en
betinget plan. Formlene PREDICT/UPDATE er fra boka 4.4.2 og 4.4.4.

## 3.3.3 Labyrint (eksamen Ord. 2023 oppg. 7)

Robot i labyrint (4 rader r0–r3 nedenfra, 12 kolonner c0–c11) ser vegger N/S/V/Ø, ikke posisjon.
P1 = {North, South, West, NoEast} → S1 = {(r0,c0), (r3,c0), (r0,c7)}. Right + P2 = {North, South, NoWest, NoEast}
→ S2 = {(r3,c1)}. Right som går mot venstre fra S1: står mot vegg, S = S1; alternativt fra (r2,c3):
S = {(r1,c8), (r2,c2)}. Gjenskapt rutenett (# = vegg), rad 3 øverst:
r3 ....#.....#.   r2 ##..#.##.#.#   r1 #...#.##....   r0 ..#...#....#

## 3.3.4 Online søk (slide 117)

Algoritmene så langt er offline: regner ut løsningen fra en graf før de flytter seg. Online-algoritmer må faktisk
bevege seg for å oppdage grafen. Eksempel: learning real-time A* (LRTA*), figur (a)–(e) med oppdaterte h-verdier.

## 4.1 CSP-formulering og constraint graph

Kilde: Lecture4-CSP-Fall2026 (Ole C. Eidheim, 9. sept. 2026), slides 2–12, 38–41. Boka kap. 5.1.
- Slide 2: motivasjon, zebra-puslespillet (fem hus, nasjonalitet, jobb, farge, dyr, drikke; 14 hint; «Who owns a zebra? Whose favorite drink is water?»).
- Slide 4: søkeproblemer (problemspesifikke tilstander, handlinger, kostnader, heuristikker) vs CSP (problemspesifikke variabler, domener, constraints; problemuavhengig søk, inferens og heuristikker). Sudoku: variabler = cellene, domene {1..9}, constraints = ulike verdier i rad, kolonne og 3x3-blokk.
- Slide 5: definisjoner. Variabler X1..Xn, domener D1..Dn (Xi ∈ Di), constraints C1..Cm med Cj(...) ∈ {true, false}. Boknotasjon C1: ⟨(X1, X2), X1 ≠ X2⟩ eller C1: X1 ≠ X2. Mål: komplett tildeling som oppfyller alle constraints.
- Slides 6–8: kartfarging Australia (rød/grønn/blå, naboer ulik farge), forenklet til X1=WA, X2=NT, X3=SA, X4=Q (NSW, V, T ignorert). C = {X1≠X2, X1≠X3, X2≠X3, X2≠X4, X3≠X4}. Constraint graph med domener.
- Slide 9: samme constraints som tupler av lovlige verdipar.
- Slide 10: enklere problem D1={1..5}, D2={1,2}, X1+X2=4 ⇔ ⟨(X1,X2), {(2,2),(3,1)}⟩.
- Slide 11: globale constraints, alldiff(X1,X2,X3) = {X1≠X2, X1≠X3, X2≠X3}.
- Slide 38: kryptaritmetikk TWO+TWO=FOUR, ulike sifre, T≠0, F≠0; eksempelløsning 765+765=1530.
- Slide 40–41: 8-dronninger, «What can the CSP variables and domains be?»
- Slide 45: z3-eksempel (not curriculum).
- Assignment-forelesning 2, slide 3–5: CSP pleier å komme på eksamen; 2025 hadde topologisk sortering (5.5, ute i 2026). Eksempel: seating med X={seat1..seat7}, domener = personer, constraints som «ikke ved siden av».
- Eksamen: O22 4.1 (firesifret tall: X, D, C, graf, unære constraints), O23 4.1 (gartnere: skriv constraints).

## 4.2 Inferens: node/arc consistency, AC-3, forward checking

Kilde: slides 13–30. Boka kap. 5.2 (fig. 5.3 for AC-3-pseudokode, kompleksitet O(cd³) står ikke i slidene).
- Slides 14–15: motivasjon, søketre uten og med inferens (alle løsninger vist).
- Slide 16: forward checking. Etter tildeling: gå gjennom domenene til utildelte naboer og fjern verdier som ville bryte en constraint. Naboer = variabler som deler constraint. Domenet til den tildelte settes til verdien. Eksempel X1 = red ⇒ D2 ← D2\{red}, D3 ← D3\{red}.
- Slides 17–22: arc consistency. Xi er arc-consistent med Xj hvis for hver verdi i Di finnes en verdi i Dj som ikke bryter noen constraint. Bare binære constraints. Eksempel X1=red, X2=green, D3={blue}, D4={red,blue}: (X3,X4) ja; (X4,X3) nei; gjøres consistent ved D4 ← D4\{blue}.
- Slides 23–24: gjør (Xi,Xj) arc-consistent ved å fjerne verdier fra Di. AC-3: start med kø av buer; mens køen ikke er tom: pop en bue og gjør den arc-consistent; hvis domenet ble redusert, legg til buer fra dens utildelte naboer til variabelen.
- Slides 25–28: AC-3 etter tildeling X2 = green, startkø (X3,X2), (X4,X2). D3\{green} via (X3,X2) ⇒ legg til (X4,X3); D4\{green} via (X4,X2) ⇒ legg til (X3,X4); D4\{blue} via (X4,X3).
- Slides 29–30: AC-3 én gang før søket med buer til og fra alle naboer (boka fig. 5.3). Løser enkle 4x4-Sudoku uten søk (gitt D12={4}, D14={1}, D21={3}, D34={4}; resultat alle domener entydige).
- Assignment-forelesning 2, slide 23: kjede A–B–C med {B,G,R}; A blå ⇒ etter AC-3 blir B {G,R}.
- Eksamen: O23 4.2 (er starttilstanden arc-consistent? kjør AC-3, gi domenene; 6 p).

## 4.3 Backtracking search med MRV, degree og LCV

Kilde: slides 12, 31–37, 40 (fig. 5.6 forward checking). Boka kap. 5.3.1–5.3.2 (degree-heuristikken og MAC står ikke i slidene; 5.3.3–5.3.4 ute av pensum).
- Slide 12/33: BACKTRACKING-SEARCH / BACKTRACK-pseudokode med SELECT-UNASSIGNED-VARIABLE, ORDER-DOMAIN-VALUES og INFERENCE (valgfritt arc-, path- eller k-consistency).
- Slide 32: motivasjon, raskere søk ved å fokusere på sannsynlig gode valg.
- Slides 34–35: velg mest begrensede variabel = utildelt variabel med minst gjenværende domene (MRV). Eksempel: X3 ({blue}) framfor X4 ({red,blue}).
- Slides 36–37: velg minst begrensende verdi først = verdien som gir minst reduksjon i de utildelte domenene ved forward checking (LCV). Eksempel: X4 velger red, ikke blue.
- Slide 40: forward checking på Australia, WA=red, Q=green, V=blue ⇒ SA uten lovlige verdier.
- Assignment-forelesning 2, slide 13: SELECT-UNASSIGNED-VARIABLE (kan prøve MRV), ORDER-DOMAIN-VALUES (kan prøve LCV), INFERENCE (forward checking, kan hoppes over i assignment).
- Assignment-forelesning 2, slides 14–15: kjede A–B–C, MRV+LCV med alfabetisk tie-break gir garantert 1 feil; tilfeldige valg gir (4·2/3 + 2·7/9)/6 ≈ 0,704 forventede feil.
- Assignment-forelesning 2, slide 23: etter AC-3 med A blå, er MRV+LCV bedre enn tilfeldig nå? (ikke besvart i slidene).
- Eksamen: O22 4.2 (MRV + LCV på firesifret tall, vis domener), O23 4.3 (backtracking uten FC på redusert gartnerproblem, MRV tie numerisk, LCV tie alfanumerisk; 7 p).

## 4.4 Lokalt søk for CSP og tre-strukturerte CSP

Kilde: slides 39–43. Boka kap. 5.4 (5.5 ute av pensum 2026).
- Slide 42: MIN-CONFLICTS(csp, max_steps): start med komplett tildeling; for i = 1..max_steps: returner hvis løsning; velg tilfeldig en variabel i konflikt; sett verdien som minimerer CONFLICTS. Løser millioner-dronninger på ca. 50 steg i snitt. Fig. 6.8: to-stegs løsning for 8-dronninger.
- Slide 42–43 (tekstuttrekket): TREE-CSP-SOLVER med topologisk sortering (fig. 6.10–6.11) vises i bakgrunnen; boka 5.5 er ute av pensum 2026.
- Prio 3: én linje på siden.

## 5.1 Minimax og alfa-beta (Slides forelesning 8, Ole C. Eidheim, 8. okt. 2026, s. 1–20; boka kap. 6.1–6.3)

Outline: expectimax · minimax og alpha-beta · heuristisk minimax · MCTS · expectiminimax · delvis observerbare spill.
Spilltyper (s. 2): deterministisk/perfekt: sjakk, go; sjanse/perfekt: backgammon, monopol; deterministisk/imperfekt:
senke slagskip, stein-saks-papir; sjanse/imperfekt: poker, scrabble.
Minimax (s. 11): minimax(s) = utility(s, MAX) hvis isTerminal(s); max over actions hvis toMove(s) er MAX; min hvis MIN.
Initielt kalles argmax_a minimax(result(s, a)).
Bøttespillet med minimax (s. 12): MIN-noder −50, 1, −5; roten 1 (B).

## 5.1.1 Turbaserte spill med perfekt informasjon og bøttespillet (s. 4–6, 10)

Definisjoner: initialState (inkl. hvem som skal trekke), toMove(s), actions(s), result(s, a), isTerminal(s), utility(s, p).
Mål: finn spiller p sine handlinger fra initialState til en terminaltilstand s som maksimerer utility(s, p).
Bøttespillet: spiller 1 velger bøtte A, B eller C; spiller 2 velger et tall fra bøtta; spiller 1 vil maksimere tallet.
A = {−50, 50}, B = {3, 1}, C = {−5, 15}. Spilltreet har MAX i roten, tre MIN-noder og seks blader.

## 5.1.2 Alpha-beta pruning (s. 13–14)

alphaBeta(s, α, β) = utility(s, MAX) hvis terminal; maxValue(s, α, β) hvis MAX; minValue(s, α, β) hvis MIN.
α: beste verdi for en max-node så langt; β: beste verdi for en min-node.
maxValue: v ← −∞; for hver a: v ← max(v, alphaBeta(result(s,a), α, β)); α ← max(α, v); if v ≥ β return v. return v.
minValue: v ← ∞; for hver a: v ← min(v, alphaBeta(...)); β ← min(β, v); if v ≤ α return v. return v.
Initielt maxValue(s, −∞, ∞); handlingen som gir høyest v returneres.
Bøttespillet (s. 14, verdier etter at noden er ferdig): rot α=1, β=inf, verdi 1 (B);
A: α=−inf, β=−50, verdi −50; B: α=−50, β=1, verdi 1; C: α=1, β=−5, verdi −5; bladet 15 klippes.

## 5.1.3 Halveringsspillet (s. 15–17)

Start med N; spillerne bytter på å trekke fra 1 (--) eller erstatte N med ⌊N/2⌋ (/2); den som sitter igjen med 0 vinner.
N = 5 uten alpha-beta (s. 16): rot (5, 1); MIN (4, 1) og (2, −1); MAX (3, 1), (2, 1), (1, −1), (1, −1);
MIN (2, −1), (1, 1), (1, 1), (1, 1); MAX (1, −1), (1, −1). 14 blader. Optimal sti: -- fra 5.
Med alpha-beta (s. 17): rot α=1, β=inf; MIN(4) α=−inf, β=1; MIN(2) høyre α=1, β=−1; MAX(3) α=1, β=inf;
MAX(2) α=1, β=1; MAX(1) høyre α=1, β=inf; MIN(2) α=−inf, β=−1; MIN(1) α=−1, β=1; MIN(1) α=−inf, β=1;
MAX(1) α=−1, β=inf; MAX(1) α=−1, β=−1. Klippet: andre blad under andre MAX(1), andre MIN(1) under MAX(2),
andre MAX(1) under høyre MIN(2). 9 av 14 blader evalueres.

## 5.1.4 Heuristisk minimax (s. 19–20)

hMinimax(s, d) = utility hvis terminal; eval(s, MAX) hvis isCutoff(s, d); max/min av hMinimax(result(s, a), d + 1).
Initielt argmax_a hMinimax(result(s, a), 1). eval(s, MAX) estimerer minimax(s).
Sjakk: eval(s) = W1 material(s) + W2 mobility(s) + W3 kingSafety(s) + W4 centerControl(s);
material(s) = 16(Q_MAX − Q_MIN) + 8(R_MAX − R_MIN) + 5(B_MAX − B_MIN + N_MAX − N_MIN) + P_MAX − P_MIN;
mobility(s) = numLegalMoves_MAX − numLegalMoves_MIN.
s. 20: «Search versus lookup: Should we perform search on the first chess move in a new game?»

## 5.2 Expectiminimax (s. 33–38)

Stokastiske spill: ytre tilfeldighet som terningkast.
Modifisert bøttespill (s. 35): MAX velger bøtte, så kastes en mynt; ved kron flyttes valget én bøtte til venstre
(med omslag); så velger MIN et tall. expectiminimax(s) = utility hvis terminal; max hvis MAX; min hvis MIN;
Σ P(a) expectiminimax(result(s, a)) hvis CHANCE. Initielt argmax.
Treet (s. 37): sjansenoder A: 0.5 A / 0.5 C → −27.5; B: 0.5 B / 0.5 A → −24.5; C: 0.5 C / 0.5 B → −2.0.
MIN-noder −50, −5, 1, −50, −5, 1. Roten −2.0, valg C.
Backgammon (s. 38): bokfigur; svart har slått 6–5 og har fire lovlige trekk. For mer avanserte spill brukes MCTS
der hver playout har terningkast.

## 5.2.1 Expectimax (s. 6–8)

expectimax(s) = utility hvis terminal; max hvis MAX; Σ_a P(a) expectimax(result(s, a)) hvis CHANCE. Initielt argmax.
Bøttespillet der spiller 2 velger tilfeldig (0.5 hver): A 0.0, B 2.0, C 5.0; roten 5.0 (C).

## 5.2.2 Eksamen Ord. 2023 oppg. 6 (lønnsforhandling)

Fagforening (MAX, A) ber om 6 % (strategi 1) eller 10 % (strategi 2). Sjansenode B: 0.5 → D (3 % eller 4 %),
0.5 → E (5 % eller 6 %). Sjansenode C: 0.25 → F (2 % eller 4 %), 0.75 → G (8 % eller 10 %). Bedriften er MIN.
LF: D = 3, E = 5, F = 2, G = 8; B = 0.5·3 + 0.5·5 = 4; C = 0.25·2 + 0.75·8 = 6.5; A = 6.5 → strategi 2.

## 5.3 Monte Carlo-tresøk (s. 21–32)

Monte Carlo-metoder: gjentatt tilfeldig trekking for numeriske svar (Wikipedia-sitat s. 22).
Figur (s. 23, boka fig. 5.10): én iterasjon etter 100 iterasjoner. Svart i trekket (roten svart); svarte noder viser hvits
seire, hvite noder svarts seire; roten 37/100. (a) Selection 37/100 → 60/79 → 16/53 → 27/35. (b) Expansion 0/0 og
simulation: svart vinner. (c) Backpropagation: 0/1, 28/36, 16/54, 61/80, 37/101.
Pseudokode (s. 24): tree ← NODE(state); mens tid: leaf ← SELECT(tree); child ← EXPAND(leaf); result ← SIMULATE(child);
BACK-PROPAGATE(result, child); returner trekket i ACTIONS(state) med flest playouts.
Tic-tac-toe (s. 25–26): rot −316/1000; barna 18/80, 4/44, 32/108, 12/64, 138/312 (midten), 15/73, 57/159, 0/36, 40/124.
Svar: sett x i midten. s. 29: en tic-tac-toe-agent er ganske god etter 1000 iterasjoner.
AlphaZero (s. 30–32): verdinett i stedet for playouts, policynett forbedrer seleksjonspolicyen, trent ved selvspill.
O22 1.7: MCTS mindre følsom for feil i evalueringsfunksjon enn alpha-beta (LF: simuleringer i stedet for eval).

## 5.3.1 Seleksjonspolicy og UCB1 (s. 27–28)

Exploration: utforsk tilstander med få playouts. Exploitation: utnytt tilstander som har gjort det godt.
UCB1(n) = U(n)/N(n) + C √(ln N(parent(n)) / N(n)); noden med høyest UCB1 velges.
U(n): total utility for playouts gjennom n; N(n): antall playouts; C balanserer, høy C gir mer utforsking; vanlig C = √2.

## 5.5 Delvis observerbare spill og regret-minimering (s. 39–50)

Tilstander ikke fullt observerbare eller samtidige trekk; minimax og lignende kan ikke brukes.
Stein-saks-papir (s. 41): ⅓ på alt gir verdi 0 (Nash-likevekt, neste forelesning). P2 papir 0.5 (s. 42): P2-noder
−0.25, 0, 0.25. P1 utnytter ved å spille saks oftere (s. 43): P1 (0.25, 0.25, 0.5) gir 0.062.
Regret (s. 44): utilities handlingene ville fått minus utility faktisk fått; summeres over spill; mulig algoritme:
velg handlingen med høyest summert regret. Eksempel (s. 45): regrets ← (0,0,0); P1 stein, P2 papir: utility −1,
regret = (−1, 0, 1) − (−1); etter første runde regrets = (0, 1, 2).
s. 46–47: regrets til sannsynligheter, negative satt til 0: (−1, 1, 2) → (0, 1, 2) → (0, 1/3, 2/3).
s. 48: gjennomsnittlige sannsynligheter konvergerer mot Nash-likevekten når iterasjonene går mot uendelig.
Pluribus (2019, s. 49): regret-minimering, MCTS, selvspill; slo proffer i 6-spiller no-limit Hold'em.
AlphaStar (2019, s. 50): som AlphaZero, men imiterte først menneskelige toppspillere, ingen MCTS; grandmesternivå.

## 6 Proposisjonell logikk

Slides forelesning 5 (Lecture5-PL-Fall2026.pdf, Ole C. Eidheim, 17. september 2026, 76 PDF-sider / 37 slides). Boka kap. 7; 7.7 er ute av pensum.
Disposisjon: Introduction, Propositional logic, Inference rules, Horn and definite clauses, Resolution, Example application.
Kuttet som «not curriculum»: BusTUC-demo (s. 5–6), Lean-bevis (s. 17, 20), Z3-eksempler (s. 21, 72–76), Prolog (s. 41).
Naturlig språk er vanskelig å tolke (s. 7–8: «A penny is better than nothing …»). LLM-er kan noe Modus Ponens (s. 29).

## 6.1 PL: syntaks, modeller, entailment, sannhetstabell

## 6.1.1 Konnektiver og definisjoner

S. 10: sannhetstabell for ¬P, P ∧ Q, P ∨ Q, P ⇒ Q, P ⇔ Q. Eksempel ⇒: polygon er kvadrat ⇒ polygon er rektangel. ⇔: rektangel ⇔ fire kanter og fire like vinkler. P ⇔ Q er det samme som (P ⇒ Q) ∧ (Q ⇒ P).
S. 11: proposition symbol (sann/usann, stor forbokstav), sentence (greske bokstaver), model (symboltilordning), knowledge base (mengde setninger som representerer sannheter), KB = {Rain, Rain ⇒ Wet}.
S. 12: KB brukt som setning = konjunksjonen av setningene. KB ∨ Wind = (Rain ∧ (Rain ⇒ Wet) ∧ (Wet ⇒ Slippery)) ∨ Wind.

## 6.1.2 Modeller, entailment, modellsjekking, reductio

S. 13–16: satisfaction (m tilfredsstiller α hvis α er sann i m). M(α) = mengden modeller som tilfredsstiller α. M(Rain), M(Rain ∨ Wind).
α ⊨ β hvis og bare hvis M(α) ⊆ M(β). (α ⊨ β) ⇔ (α ⇒ β sann i alle modeller). Rain ⊨ Rain ∨ Wind.
Model checking: sjekk alle modeller (infeasible in practice).
S. 18–20: proof by contradiction: (α ⊨ β) ⇔ (M(α ∧ ¬β) = ∅) ⇔ (α ∧ ¬β usann i alle modeller). (α ≡ β) ⇔ (α ⇔ β sann i alle modeller).
S. 22: knowledge-based agents: ask(KB, α) = yes / no / I don't know; tell(KB, α) = I already know / that can't be / I'll add to KB. Eksempler med KB = {Rain}.
Gyldig/tilfredsstillbar: fra boka 7.5.1 (slidene nevner tautologi og kontradiksjon på s. 24).

## 6.1.3 Eksamensoppgave: gullkassene (Ord. 2022 oppg. 5.1–5.2)

Tre kasser, én med gull. Påskrifter: 1 «not here», 2 «not here», 3 «in Box 2». Nøyaktig én påskrift sann.
S1 = nøyaktig én B_i; S2 = nøyaktig én M_i med M1 = ¬B1, M2 = ¬B2, M3 = B2; forenklet S3 = (B1 ∧ ¬B2) ∨ (B1 ∧ B2) ≡ B1.
Sannhetstabell: bare B1 = T, B2 = F, B3 = F gjør S1 ∧ S3 sann. Gullet er i kasse 1.

## 6.1.4 Logiske ekvivalenser

S. 24: ≡ vs ⇔; (α ≡ β) ⇔ (α ⊨ β) ∧ (β ⊨ α). α ≡ α ∧ α ≡ α ∨ α; α ∧ ¬α ≡ False; α ∨ ¬α ≡ True; True/False er symboler som alltid er sanne/usanne.
S. 25: kommutativitet, assosiativitet, double-negation elimination, contraposition, implication elimination, biconditional elimination, De Morgan (to), distributivitet (to). Presedens: ¬, ∧, ∨, ⇒, ⇔, ≡.

## 6.2 PL: inferensregler, Horn, forward/backward chaining

## 6.2.1 Inferensregler, sunnhet og fullstendighet

S. 26: inferens som å dele på 2 i 2x = 4. KB = {Rain, Rain ⇒ Wet} → legg til Wet. Alle ekvivalensene kan brukes som inferensregler.
S. 27: and-elimination, eksempel KB = {Rain ∧ Wet}.
S. 28: Modus Ponens, eksempel KB = {Rain ⇒ Wet, Wet ⇒ Slippery, Rain} → Wet, Slippery.
S. 30–32: KB ⊢_i α (derivation). Sound: KB ⊢ α ⇒ KB ⊨ α. Complete: KB ⊨ α ⇒ KB ⊢ α. MPA er sunn, men ikke fullstendig: {α, α ∨ β ⇒ γ} ⊨ γ men ⊬_MPA γ.
Modus Tollens og Disjunctive Syllogism er ikke i slidene; brukt i Ord. 2023 oppg. 3.1 (bok-gåten, løsning MP, MT, DS; boka under blomsterpotta).

## 6.2.2 Horn- og definite clauses

S. 34–36: Horn clause = definite clause P1 ∧ … ∧ Pn ⇒ Q, fact Q (n = 0), goal clause P1 ∧ … ∧ Pn ⇒ False.
KB med bare definite clauses: gjentatt Modus Ponens er sunn og fullstendig for fakta Q, og KB ⊨ Q avgjøres i lineær tid.

## 6.2.3 Forward og backward chaining

S. 37–40: eksempel KB = {Rain, Weekday, Rain ⇒ Wet, Wet ∧ Weekday ⇒ Traffic, Traffic ∧ Careless ⇒ Accident}; KB ⊨ Traffic? MP gir Wet, så Traffic. Svar: ja.
S. 42: forward chaining utleder nye fakta til Q er utledet (boka fig. 7.15). Backward chaining arbeider bakover fra Q og prøver å utlede premissene. Alle utledninger med Modus Ponens.
Ord. 2023 kort spørsmål: Horn clauses og modus ponens.

## 6.3 PL: CNF og resolusjon

## 6.3.1 Resolusjonsregelen

S. 44–45: resolusjonsalgoritmen (RA) er sunn og fullstendig for all PL, men eksponentiell i størrelsen på KB.
S. 46–48: literal (symbol eller negert symbol), clause (disjunksjon av literaler), resolusjonsregelen a1 ∨ … ∨ c, ¬c ∨ b1 ∨ … ⊢ a1 ∨ … ∨ b1 ∨ …; Rain ∨ Snow, ¬Snow ∨ Traffic ⊢ Rain ∨ Traffic. Modus Ponens er et spesialtilfelle.

## 6.3.2 CNF-konvertering

S. 49–51: CNF = konjunksjon av klausuler. Alle PL-setninger kan konverteres. 1 eliminer ⇔, 2 eliminer ⇒, 3 flytt ¬ inn og fjern dobbel negasjon, 4 distribuer ∨ over ∧.

## 6.3.3 Resolusjonsrefutasjon

S. 52: 1 legg ¬α til KB og konverter til CNF, 2 del opp i klausuler, 3 resolver til tom klausul (KB ⊨ α), ellers satisfiable (KB ⊭ α).
S. 53–63: KB = {P, P ∨ Q ⇒ R}, KB ⊨ R? → {P, ¬P ∨ R, ¬Q ∨ R, ¬R} → R, ¬Q → tom klausul.
S. 64–70: heuristikk. Uten: R, ¬Q, så □. Med unit preference (boka s. 326): R, så □.
Ord. 2022 oppg. 5.3: KB = S1 og S3, α = B1 (B2, B3), legg til ¬α og resolver til selvmotsigelse.

## 6.3.4 CSP løst med resolusjon

S. 72–76: fargelegging, 4 regioner, farger r/g/b. X_ir = region i har farge r. Hver region nøyaktig én farge; naboer (1–2, 1–3, 2–3, 2–4, 3–4) ikke lik farge.
M(KB ∪ {X1r}) = ∅? nei: legg til X1r, ¬X1g, ¬X1b, ¬X2r, ¬X3r. M(KB ∪ {X2g}) = ∅? nei: ¬X2b, ¬X3g, X3b, X4r, ¬X4g, ¬X4b. Z3-løsningen er not curriculum.

## 7.1 Førsteordens logikk (Slides forelesning 6, Ole C. Eidheim, 24. sept. 2026, slide 1–48; boka kap. 8)

Outline: Introduction · First-order logic · Models · Example "by hand" proof and counterexample (not curriculum) ·
Asking for variables · Example applications (not curriculum: Prolog, Z3, SMT, Alive2, slide 49–59).

## 7.1.1 Begrensninger ved proposisjonell logikk (slide 3–6)

"Alice and Bob are students, and all students know arithmetic."
PL: KB = {AliceIsStudent, BobIsStudent, AliceIsStudent ⇒ AliceKnowsArithmetic, BobIsStudent ⇒ BobKnowsArithmetic}; KB ⊨ AliceKnowsArithmetic.
FOL: KB = {Student(Alice), Student(Bob), ∀x Student(x) ⇒ Knows(x, Arithmetic)}; KB ⊨ Knows(Alice, Arithmetic).
Slide 6: PL-eksempelet {Rain, Rain ⇒ Wet, Wet ⇒ Slippery} som FOL: {Is(Rain), Is(Rain) ⇒ Is(Wet), Is(Wet) ⇒ Is(Slippery)}.
Slide 5 (Prolog) og 7 (naturlig-språk-demo med FOL-agent) er not curriculum.
Eksamen: O22 1.10 (ulempe med PL, fire nye elementer: variabler, kvantorer, predikater, funksjoner).

## 7.1.2 Syntaks: termer, predikater, setninger, funksjoner (slide 9–11)

Term: Constant (specific object: Alice, Bob, Arithmetic); Variable (unspecified object, x ∈ {Alice, Bob, Arithmetic});
Function (mapping to an object, Mother(Alice) refers to Carrie).
Equality: two terms refer to the same object (Bob = Bobby). Predicate: relation or property of terms (Knows, Student).
Sentence: atomic sentence = predicate or equality applied to terms, true or false; complex sentence = connective or quantifier applied to sentences.
Slide 11 Functions: without functions KB = {Mother(Alice, Carrie), Mother(Bob, Denise), ∀x∀y Mother(x, y) ⇒ Loves(y, x)};
with Mother function KB = {Mother(Alice) = Carrie, Mother(Bob) = Denise, ∀x Loves(Mother(x), x)}.

## 7.1.3 Kvantorer, nestede kvantorer, De Morgan (slide 9–14)

∀x Knows(Alice, x) ≡ Knows(Alice, Arithmetic) ∧ Knows(Alice, English) ∧ … ("Alice knows everything").
∃x Knows(Alice, x) ≡ Knows(Alice, Arithmetic) ∨ Knows(Alice, English) ∨ … ("Alice knows something").
Nested: ∀x, y Brother(x, y) ⇒ Sibling(x, y) (all brothers are siblings). ∀x ∃y Loves(x, y) ≢ ∃y ∀x Loves(x, y)
(everyone loves someone ≢ there exists someone who is loved by everyone).
De Morgan: ¬∀x P(x) ≡ ∃x ¬P(x); ¬∃x P(x) ≡ ∀x ¬P(x); ∀x P(x) ≡ ¬∃x ¬P(x); ∃x P(x) ≡ ¬∀x ¬P(x), side om side med
¬(P(A) ∧ P(B)) ≡ ¬P(A) ∨ ¬P(B) osv. Eksempel: ∀x Likes(x, IceCream) ≡ ¬∃x ¬Likes(x, IceCream).

## 7.1.4 Oversettelse fra naturlig språk (slide 15–28)

Slide 15–20 bygger opp stegvis med feil først: Every student knows arithmetic: ∀x Student(x) ∧ Knows(…) (feil) → ∀x Student(x) ⇒ Knows(x, Arithmetic).
Some students know arithmetic: ∃x Student(x) ⇒ Knows(…) (feil) → ∃x Student(x) ∧ Knows(x, Arithmetic).
Slide 21–26: There is some course that every student takes: ∃y Course(y) ∧ (∀x Student(x) ⇒ Takes(x, y)).
Goldbach: ∀x Even(x) ∧ Greater(x, 2) ⇒ (∃y, z Equals(x, Sum(y, z)) ∧ Prime(y) ∧ Prime(z)).
∀x, y, z Student(x) ∧ Course(y) ∧ Concept(z) ∧ Takes(x, y) ∧ Covers(y, z) ⇒ Knows(x, z).
Slide 27–28 (equality): Bob has at least two brothers: ∃x, y Brother(Bob, x) ∧ Brother(Bob, y) ∧ ¬(x = y).
Eksamen: O23 3.2a (Fido/Snowy som FOL). 3.2b (resolusjon) hører til 7.3.

## 7.1.5 Modeller og entailment i FOL (slide 30–39)

PL-modell: symboltilordninger. FOL, database semantics: predicate assignments, f.eks.
{Student = {Alice = true, else = false}, Knows = {(Alice, Arithmetic) = true, else = false}}; oppfyller
KB = {Student(Alice), ¬Student(Bob), ∀x Student(x) ⇒ Knows(x, Arithmetic)}. Notasjonen er inspirert av Z3.
Standard semantics (slide 33–34): objekter separat; to konstanter kan tilordnes samme objekt ({Bob = B, Bobby = B}),
og det kan finnes objekter uten konstant ({Bob = A, Bobby = B}, Student = {C = false, else = true}); begge oppfyller {Student(Bob), Student(Bobby)}.
Slide 35–36: overraskende modell {Alice = A, Carrie = A, Denise = A}, Mother = Loves = {else = true} oppfyller
KB = {Mother(Alice, Carrie), Mother(Carrie, Denise), ∀x, y Mother(x, y) ⇒ Loves(y, x)}. Likevel: KB ⊨ Loves(Carrie, Alice),
KB ⊭ Loves(Alice, Carrie), KB ⊨ Loves(Denise, Carrie), KB ⊭ Loves(Carrie, Denise).
Slide 37–38: funksjonstilordninger, Mother = {A = C, else = D}; samme entailments med funksjonsvarianten.
Slide 39: Peano-aksiomer (NatNum, Successor), uendelig modell. Axiom: sentence taken to be true without being derived.
Slide 41–45 (not curriculum): by-hand-bevis av ∀x P(x) ∧ Q(x) ≡ (∀x P(x)) ∧ (∀x Q(x)) (ja) og moteksempel for ∨ (nei).

## 7.1.6 Spørringer med variabler (slide 47–48)

KB = {Student(Alice), Student(Bob), ∀x Student(x) ⇒ Knows(x, Arithmetic)}. Who knows arithmetic, i.e. which values of x
satisfy KB ⊨ Knows(x, Arithmetic)? Answer: Alice and Bob. Siden skriver svaret som substitusjoner {x/Alice}, {x/Bob}
(bokas notasjon, ikke i slidene). Slide 49–50 (Prolog, Z3) not curriculum.

## 7.2 FOL-inferens: propositionalisering, instansiering, unifikasjon, GMP (Slides forelesning 7, Ole C. Eidheim, 1. okt. 2026, s. 1–38; boka kap. 9.1–9.3)

Outline: Introduction · Propositionalization · Generalized Modus Ponens · Resolution.
Boka 9.4.2–9.4.5 og 9.5.4 er ute av pensum. Slide 20 (Z3) er not curriculum.

## 7.2.1 Semidecidability (s. 3–6)

Peano-delen KB = {NatNum(0), ∀x NatNum(x) ⇒ NatNum(Successor(x)), ∀x ¬(Successor(x) = 0),
∀x, y ¬(x = y) ⇒ ¬(Successor(x) = Successor(y))}.
KB ⊨ NatNum(Successor(Successor(0))) kan vises på endelig tid ved å sjekke mellom funksjonstilordninger av økende dybde
(Successor = {0 = 1}, så {0 = 1, 1 = 2}, …). KB ⊭ ¬NatNum(Successor(Successor(0))) kan ikke vises med motsigelsesbevis:
KB ∪ {¬¬NatNum(…)} har ingen motsigelse og alle modellene er uendelige.
Entailment i FOL er generelt semidecidable: bare setninger som følger, kan bevises med sikkerhet på endelig tid.
Decidable for KB med bare definite clauses og ingen funksjoner.

## 7.2.2 Propositionalisering (s. 8–10, 23–24)

1. Erstatt alle variabler med konstanter eller funksjoner. 2. Erstatt gjenværende atomer med proposisjonssymboler.
Eksempel: {Student(Alice), Student(Bob), ∀x Student(x) ⇒ Knows(x, Arithmetic)} gir Student(Alice) ⇒ Knows(Alice, Arithmetic),
Student(Bob) ⇒ …, Student(Arithmetic) ⇒ Knows(Arithmetic, Arithmetic), og så AliceIsStudent ⇒ AliceKnowsArithmetic osv.
Ulempe: mange unødvendige avledninger fra ∀-setninger (Student(Arithmetic) ⇒ … trengs ikke for KB ⊨ Knows(Alice, Arithmetic)).
PL-inferensalgoritmene kan i stedet utvides til FOL.

## 7.2.3 Substitusjon, universell og eksistensiell instansiering, Skolem (s. 11–22)

Substitusjon avbilder variabler til termer. Subst(θ, α): bruk θ på α. Subst({x/Alice}, Knows(x, Arithmetic)) = Knows(Alice, Arithmetic);
{x/y} og {x/Mother(Alice)} tilsvarende.
UI: ∀v α ⊢ Subst({v/g}, α) for grunnterm g (konstant eller funksjon). Eksempel {x/Alice} og {x/English} på Student(x) ⇒ Knows(x, English).
EI: ∃v α ⊢ Subst({v/k}, α), k ny Skolem-konstant. ∃x Student(x) ∧ Knows(x, Norwegian) gir Student(C1) ∧ Knows(C1, Norwegian).
Gjør KB alt ∃-setningen sann, trengs ingen Skolem-konstant.
Skolem-konstant er ikke nok i ∀x ∃y Loves(x, y) («alle elsker noen» ≠ ∀x Loves(x, C1) «alle elsker C1»);
bruk Skolem-funksjon: ∀x Loves(x, F(x)).

## 7.2.4 Unifikasjon (s. 26–29)

Unify(α, β) finner den mest generelle θ slik at Subst(θ, α) = Subst(θ, β).
Unify(Loves(x, Arithmetic), Loves(Alice, Arithmetic)) = {x/Alice}; Unify(Loves(x, y), Loves(Alice, z)) = {x/Alice, y/z};
Unify(Loves(Bob, y), Loves(Alice, z)) = failure; Unify(Loves(Bob, y), Loves(x, Mother(x))) = {x/Bob, y/Mother(Bob)}.
Boka fig. 9.1 har algoritmen (occur check). Det finnes algoritmer med lineær tid i størrelsen på uttrykkene.

## 7.2.5 Generalisert Modus Ponens (s. 30–38)

Uten kvantorer: p1, …, pn, p1 ∧ … ∧ pn ⇒ q ⊢ q. Med kvantorer: p1′, …, pn′, ∀x1, x2, … p1 ∧ … ∧ pn ⇒ q ⊢ Subst(θ, q),
θ = Unify(p1′ ∧ … ∧ pn′, p1 ∧ … ∧ pn).
Eksempel: {Takes(Alice, TDT4136), Covers(TDT4136, Logic), ∀x, y, z Takes(x, y) ∧ Covers(y, z) ⇒ Knows(x, z)},
θ = {x/Alice, y/TDT4136, z/Logic} gir KB ⊢GMP Knows(Alice, Logic), altså KB ⊨ Knows(Alice, Logic).
Definite clause i FOL: ∀x1, … p1 ∧ … ∧ pn ⇒ q; faktum = definite clause med n = 0 uten variabler.
Bare definite clauses: gjentatt GMP er sunn og fullstendig for fakta q (KB ⊨ q ⇔ KB ⊢GMP q). I tillegg ingen funksjoner: polynomisk tid.

## 7.3 FOL-inferens: CNF, skolemisering, resolusjon (Slides forelesning 7, s. 39–78; boka kap. 9.5)

Eksamen: O23 3.2b (Fido/Snowy, 10 p sammen med a): konverter til CNF, nummerer, resolusjonsrefutasjon med substitusjoner.

## 7.3.1 Literal, klausul, CNF og CNF-algoritmen (s. 40–56)

Literal: atomær eller negert atomær setning, ¬Loves(x, F(x)). Klausul: disjunksjon av literaler. CNF: konjunksjon av klausuler.
Algoritme: 1 fjern ⇔, 2 fjern ⇒, 3 flytt ¬ inn og fjern dobbel negasjon, 4 standardiser variabler,
5 erstatt ∃-variabler med Skolem-konstanter/-funksjoner, 6 dropp ∀, 7 distribuer ∨ over ∧.
Hvorfor ∀ kan droppes (s. 44–46): KB {∀x A, ∀x B} = (∀x A) ∧ (∀x B) ≡ ∀x (A ∧ B), så ∀ kan stå implisitt.
Eksempel «Everyone who loves all animals is loved by someone»: ∀x (∀y Animal(y) ⇒ Loves(x, y)) ⇒ (∃y Loves(y, x))
→ … → (Animal(F(x)) ∨ Loves(G(x), x)) ∧ (¬Loves(x, F(x)) ∨ Loves(G(x), x)).

## 7.3.2 Resolusjonsregelen og -algoritmen i FOL (s. 57–59)

a1 ∨ a2 ∨ … ∨ c, ¬c′ ∨ b1 ∨ b2 ∨ … ⊢ Subst(θ, a1 ∨ … ∨ b1 ∨ …), θ = Unify(c, c′).
Eksempel: Animal(F(x)) ∨ Loves(G(x), x) og ¬Animal(F(Jack)) ∨ Loves(G(Jack), Jack) med {x/Jack} gir Loves(G(Jack), Jack).
Algoritme: 1 legg ¬α til KB og konverter til CNF, 2 del i klausuler, 3 resolver gjentatt; tom klausul ⇒ unsatisfiable (KB ⊨ α),
ellers satisfiable (KB ⊭ α).

## 7.3.3 Curiosity-eksempelet (s. 60–70)

KB: alle som elsker alle dyr, elskes av noen; den som dreper et dyr, elskes av ingen; Jack elsker alle dyr;
Kills(Jack, Tuna) ∨ Kills(Curiosity, Tuna); Cat(Tuna); ∀x Cat(x) ⇒ Animal(x). Spørsmål: Kills(Curiosity, Tuna)?
CNF av KB ∪ {¬Kills(Curiosity, Tuna)} og resolusjonstre: Cat + ¬Cat∨Animal {x/Tuna} → Animal(Tuna);
Kills∨Kills + ¬Kills(Curiosity, Tuna) {} → Kills(Jack, Tuna); ¬Loves(x, F(x)) ∨ Loves(G(x), x) + ¬Animal(u) ∨ Loves(Jack, u)
{x/Jack, u/F(Jack)} → ¬Animal(F(Jack)) ∨ Loves(G(Jack), Jack); + Animal(F(x)) ∨ Loves(G(x), x) {x/Jack} → Loves(G(Jack), Jack);
¬Loves(y, x) ∨ ¬Animal(z) ∨ ¬Kills(x, z) + Animal(Tuna) {z/Tuna} → ¬Loves(y, x) ∨ ¬Kills(x, Tuna); + Kills(Jack, Tuna) {x/Jack}
→ ¬Loves(y, Jack); + Loves(G(Jack), Jack) {y/G(Jack)} → □. Svar: ja, Curiosity drepte katten.
Merk (s. 65): variabler i ulike klausuler kan omdøpes, ∀x ¬Animal(x) ∨ Loves(Jack, x) ≡ ∀u ¬Animal(u) ∨ Loves(Jack, u).

## 7.3.4 Strategier og likhet (s. 71–78)

Strategier: unit preference (korte klausuler), set of support (f.eks. negert mål), input resolution (klausuler fra KB/mål),
subsumption (ikke utled P(A) når ∀x P(x) finnes), læring (ML-modell trent på tidligere bevis).
Likhet: aksiomatiser (refleksiv, symmetrisk, transitiv, bytte like med like i predikater og funksjoner);
demodulation og paramodulation (Birthdate(PaternalGrandfather(Bella), 1926)); equational unification (Add(1, 2) og Add(2, 1)).

## 10 Naturlig språkbehandling og persepsjon

Forelesning 9 (Massimiliano Ruocco, høst 2026), boka kap. 24, unntatt 24.2.1 (leksikonet til E₀), 24.3.1 (dependency parsing),
24.3.2 (lære parser fra eksempler), 24.4 (augmenterte grammatikker), 24.5 (komplikasjoner). Persepsjon (kap. 25) kommer.
Oppsummering (s. 60): språkmodeller → ordrepresentasjoner → grammatikk → parsing → anvendelser.

## 10.1 NLP: språkmodeller, n-gram, glatting, POS-tagging, PCFG, parsing

NLP = AI-delen som lar datamaskiner forstå, generere og samhandle med menneskelig språk (s. 3–5).
En språkmodell er en sannsynlighetsfordeling over strenger (s. 8). Seks deler: bag-of-words, n-gram, glatting,
ordrepresentasjon og POS-tagging (HMM, logistisk regresjon), grammatikk (PCFG, E₀), parsing (CYK), NLP-oppgaver.
Ingen eksamensoppgaver om NLP i Ord. 2022/2023 (prio 2).

## 10.1.1 Hvorfor språk er vanskelig

Slides s. 6: flertydig («He saw her duck», «I saw the man with the telescope»), vagt («It's kind of cold»),
kontekstavhengig («I'm here today»), i endring («tweet», «cloud»), vurderinger varierer («Not to be invited is sad»
vs «To be not invited is sad»), ingen fast referanse (to «Richard»).

## 10.1.2 Bag-of-words og naiv Bayes

Slides s. 8–11 (boka 24.1, 24.1.1). Setning = uordnet samling ord; naiv Bayes: hvert ord uavhengig gitt klassen.
P(Class | w_{1:N}) ∝ P(Class) ∏_j P(w_j | Class). Generativ historie: velg pose, trekk ord med tilbakelegging til punktum.
Feil (ordene er ikke uavhengige) men god for klassifisering. Trening ved telling:
3 000 tekster, 300 business → P(business) = 0.1; 100 000 ord i business, 700 «stocks» → P(stocks | business) = 0.007.
Sjeldne ord → glatting; tokenisering («aren't»).

## 10.1.3 n-gram-modeller

Slides s. 12–17, 22–23 (boka 24.1.2–24.1.3, 24.1.7). Rekkefølge betyr noe («first quarter earnings» vs «fourth quarter touchdown»).
Kjederegel P(w_{1:N}) = ∏ P(w_j | w_{1:j-1}): ~10^200 parametre for 100 000 ord og 40-ords setninger.
Markov-antakelse: P(w_j | w_{1:j-1}) ≈ P(w_j | w_{j-n+1:j-1}). Unigram P(w_j), bigram P(w_j | w_{j-1}), trigram P(w_j | w_{j-2}, w_{j-1}).
Høyere n mer realistisk men glisne data. Bruk: avisseksjoner, spam, sentiment, forfatter.
Tegnmodeller: P(c_j | c_{j-n+1:j-1}), ukjente ord, språkidentifikasjon >99 % (svensk/norsk ≈ 95 %).
Skip-gram: «je ne comprends pas» → «je comprends», «ne pas». Utvalg fra 1–4-gram av læreboka; GPT-2 flytende men usammenhengende.

## 10.1.4 Glatting

Slides s. 18–21 (boka 24.1.4). Usett n-gram → P = 0 for hele setningen. Problem 1: ukjente ord → <UNK> (behold f.eks. topp 50 000),
typede token <NUM>, <EMAIL>, <URL>, <S>. Problem 2: usette n-gram av kjente ord («colorless aquamarine ideas»).
Laplace (add-one): P(w_i | w_{i-1}) = (c(w_{i-1} w_i) + 1) / (c(w_{i-1}) + V), V = vokabularstørrelse; summerer til 1,
for mye masse til det usette (V = 100 000). Opphav: vil sola stå opp i morgen (N ≈ 2 mill. dager).
Backoff: trigram hvis tellingen er høy nok, ellers bigram, ellers unigram.
Lineær interpolasjon: P̂(w_i | w_{i-2:i-1}) = λ3 P(w_i | w_{i-2:i-1}) + λ2 P(w_i | w_{i-1}) + λ1 P(w_i), λ3 + λ2 + λ1 = 1
(faste, lært med EM eller avhengige av tellingene).

## 10.1.5 Ordrepresentasjon og POS-tagging

Slides s. 25–31 (boka 24.1.5–24.1.6). n-gram er atomiske: «a black cat» sett, «cat black a» aldri; kan ikke generalisere til
«the fulvous kitten». Mennesker bruker morfologi (-ous), syntaks (a/the), semantikk (kitten ~ cat).
Strukturerte modeller: WordNet (IS-A/hypernym, PART-OF, antonym; kitten → young_mammal → mammal → animal; kategorier, ikke detaljer),
POS-tagger, lærte embeddinger (25.1). POS-tagging = gi hvert ord ordklasse; første steg for QA, oversettelse, tekst-til-tale («record»).
Penn Treebank: 45 tagger, >3 mill. ord. «From the start , it took a person with great qualities to succeed» =
IN DT NN , PRP VBD DT NN IN JJ NNS TO VB. Flertydighet: can (NN/MD), flies (NNS/VBZ), record (NN/VB), cut (NN/VBD/VBP).
Taggeren må velge hele sekvensen.

## 10.1.6 HMM-tagger og Viterbi

Slides s. 32–35. Skjulte tilstander = tagger C_{1:N}, evidens = ord W_{1:N}. Overgangsmodell P(C_t | C_{t-1}),
sensormodell P(W_t | C_t). P(C_{1:N}, W_{1:N}) = P(C_1) ∏_{t=2}^N P(C_t | C_{t-1}) ∏_{t=1}^N P(W_t | C_t).
Trening ved telling: P(VB | MD) = 10 471 / 13 124 ≈ 0.80; P(would | MD) = 0.1.
Viterbi (14.2.3): dynamisk programmering, beste sti per (ord, tagg)-celle, bakoverpekere; Ĉ = argmax P(C_{1:N}, W_{1:N}).
≈ 97 % nøyaktighet. Begrensning: bare nåværende ord og forrige tagg; vanskelig å legge inn kunnskap («-ous» → adjektiv).

## 10.1.7 Logistisk regresjon og generativ vs diskriminativ

Slides s. 36–38. Diskriminativ, lærer P(C | W); én klassifikator per tagg (45), gradient descent; P(tag | x) = σ(w · x);
trekk: nabo-ord, suffiks/prefiks, forrige tagg, store bokstaver, sifre. Dekoding: grådig (c_i = argmax P(c' | w_{1:N}, c_{1:i-1}),
rask men kan ikke angre), Viterbi (tregere, kan ombestemme seg), beam search (b beste).
Tabell: generativ (naiv Bayes, HMM) lærer P(W, C), kan generere, begrensede trekk, høyere feilrate, konvergerer raskere;
diskriminativ (logistisk regresjon) lærer P(C | W), kan ikke generere, vilkårlige trekk, lavere feilrate, konvergerer saktere.

## 10.1.8 Grammatikk, PCFG og E₀

Slides s. 40–45 (boka 24.2, fig. 24.2). Grammatikk = regler for trestruktur; språk = setningene som følger reglene.
Naturlig språk: uskarp grense, flere parser. «Stocks rallied on Monday»: NP (subjekt) + VP (predikat), PP modifiserer VP.
PCFG: regler med sannsynlighet, kontekstfrie. Adjs → Adjective [0.80] | Adjective Adjs [0.20].
E₀-regler: S → NP VP 0.90 | S Conj S 0.10; NP → Pronoun 0.25 | Name 0.10 | Noun 0.10 | Article Noun 0.25 |
Article Adjs Noun 0.05 | Digit Digit 0.05 | NP PP 0.10 | NP RelClause 0.05 | NP Conj NP 0.05;
VP → Verb 0.40 | VP NP 0.35 | VP Adjective 0.05 | VP PP 0.10 | VP Adverb 0.10; Adjs → Adjective 0.80 | Adjective Adjs 0.20;
PP → Prep NP 1.00; RelClause → RelPro VP 1.00. Overgenerering («Me go I»), undergenerering («I think the wumpus is smelly»).

## 10.1.9 Parsing og CYK

Slides s. 46–51 (boka 24.3, fig. 24.4–24.6). Parsing = søk etter parsetre med ordene som blader; top-down og bottom-up.
Fig. 24.4: «the wumpus is dead» via S → NP VP, VP → VP Adjective, VP → Verb, Adjective → dead, Verb → is, NP → Article Noun,
Noun → wumpus, Article → the. Chart parsing: «Have the students in section 2 of Computer Science 101 take/taken the exam» —
lagre fraser og gjenbruk. CYK: bottom-up probabilistisk chart-parser, Chomsky normalform (X → word, X → Y Z),
P[X, i, k] = max over j og regel av P[Y, i, j] · P[Z, j+1, k] · p; tid O(n³m), plass O(n²m).
Fig. 24.6: «every wumpus smells» = 0.90 · 0.25 · 0.05 · 0.15 · 0.40 · 0.10 = 0.0000675.
Raskere: A* (admissibel heuristikk → første parse mest sannsynlig), beam search (O(n)), shift-reduce (beam med b = 1).

## 10.1.10 NLP-oppgaver

Slides s. 53–59 (boka 24.6). Talegjenkjenning (lyd → tekst, ordfeil 3–5 %, ~30 % lavere feil med dype nett 2011, RNN + HMM),
tekst-til-tale (uttale, pauser, stemmer; ⅔ foretrakk WaveNet 2016), maskinoversettelse (parallelle tekster;
n-gram 2000-tallet → seq2seq 2014 → transformere 2017), informasjonsekstraksjon (tekst → strukturerte fakta; regex, TEXTRUNNER,
HMM, NELL, nevrale nett), informasjonsgjenfinning (spørring → rangerte dokumenter), spørsmålsbesvarelse (svar, ikke dokumenter;
1960-tallet parsing, START 1997, ASKMSR 2002 med søkemønstre «[* founded the U.S. Coast Guard]», TREC, AI2 ARC).

## 10.2 Persepsjon / datasyn

Boka kap. 25. Ikke forelest ennå; «kommer»-kort på kap10/index.html. Prio 3.

## 12.1 AI-historie og definisjoner

Slide 3: Ingen enighet om definisjon; to akser (tenke/handle, menneskelig/rasjonell). Tenke menneskelig = kognitiv
modellering; tenke rasjonelt = tankens lover; handle menneskelig = Turing-testen; handle rasjonelt = rasjonell agent
(kursets tilnærming). Problemer med å tenke rasjonelt; to fordeler med å handle rasjonelt. McCarthy (1955).
Newell og Simon / General Problem Solver (Ord. 2023, kort spørsmål) er fra boka kap. 1, ikke i slidene.

# Kapittel 2 · Problemløsning ved søk — sporingsuttrekk

Kilder: Lecture2-Fall2026 (3).pdf (Ruocco, 27. aug 2026, 202 PDF-sider / 86 slides), Lecture3-Fall2026 (1).pdf
PDF-side 1–53 (Jekic, 3. sept 2026, slides 1–24), AssignmentLecture1-Fall2026.pdf (Jekic). Sidetall = PDF-sider.

## A1 Assignment 1 · Søk
Assignment-forelesning 1 (Aleksandra Jekic; slidene sier TDT4137, faget er TDT4136). Bygger på forelesning 2–3 og boka kap. 3.
Slide 3: «If you look at the old exams, there is usually a lot on this topic.» Algoritmene må kunne gjøres for hånd.
Slide 4–7: BFS = boka s. 95, målsjekk ved generering (største «gotcha»). Alle andre = best-first search s. 91 med passende f.
Naboer alfabetisk; lik f -> alfabetisk.
Slide 9: Doom-graf (Phobos Anomaly). A start, F mål, grå sirkler = h. Linje koster 1, trapp +1, heis +2 (A–G = 4).
Oppgave: (1) kostnad for alle kanter, (2) BFS, DFS, UCS, GBFS, A* for hånd: ekspansjonsrekkefølge, sti, kostnad («S, A, B, (G)»),
(3) admissibel/konsistent. Bonus frivillig (slide 19).

## A1.1 Algoritmevarianter
BFS s. 95 (goal ved generering), BEST-FIRST-SEARCH s. 91 (goal ved pop, reached med PATH-COST-test). Pseudokode vist på slide 11–15.

## A1.2 Eksempelgraf (slides 11–15)
Kanter A–B 3, A–C 2, C–D 3, D–E 3, B–E 4. h: B 3, C 7, D 2, E 5 (E er mål). Start A.
BFS: A, B, (E); ABE; 7. DFS: A, B, (E); ABE; 7. UCS: A, C, B, D, (E); ABE; 7.
GBFS: A, B, (E); ABE; 7. A*: A, B, C, D, (E); ABE; 7.

## A1.3 Admissibel og konsistent (slides 16–18)
Admissibel: overestimerer aldri. Konsistent: h(n) <= c(n,a,n') + h(n').
Slide 18: ikke admissibel «fordi (D,E) = 3 mens h(e) = 5»; ikke konsistent fordi alle konsistente er admissible,
«eller h(d) <= c(d,a,e) + h(e) gir 2 <= 3 + 5, motsigelse». Sidens merknad: 2 <= 8 er sant; bruddet er C -> D: 7 > 3 + 2.

## A2 Assignment 2 · CSP
Assignment-forelesning 2. Bygger på forelesning 4 (10.09.26) og boka kap. 5.
Slide 3: «Historically, there has usually been a problem covering this in exams.» Assignment er bare programmering, ulikt eksamen.
2025 hadde topologisk sortering (kun i boka); kap. 5.5 er ute av pensum 2026.
Slide 5: X, D, C; intuisjon: AC-3, backtracking, forward checking.
Slide 7–8: kjør AC-3 (s. 171) og backtracking (s. 176) på Sudoku-brett; csp.py, map_coloring.py, sudoku.py; bare ac_3() og backtracking_search() mangler.
Slide 9–12: kartfarging Australia, 9 kanter, eksempelutskrift {'WA': 'red', 'NT': 'green', 'Q': 'red', 'NSW': 'green', 'V': 'red', 'SA': 'blue', 'T': 'red'}.
Slide 13: SELECT-UNASSIGNED-VARIABLE fritt (MRV), ORDER-DOMAIN-VALUES fritt (LCV), INFERENCE hoppes over.
Slide 16–18: Sudoku: variabler X11..X99, domener {1..9} eller {gitt}, alldiff per rad/kolonne/boks -> binære kanter.
Slide 22: leveranse: løsninger, domener etter AC-3, antall backtrack-kall og failures, kjøretider, diskusjon.

## A2.1 MRV/LCV-eksempel (slides 14–15)
A -> B -> C, domener {B, G, R}, MRV + LCV, alfabetisk. Heuristikkene gir garantert 1 feil.
Tilfeldig: 4/6 rekkefølger gir 2/3, 2/6 gir 7/9; snitt (4(2/3) + 2(7/9))/6 ≈ 0,704.

## A2.2 AC-3 etter A = blå (slide 23)
B sitt domene blir {G, R}. Spørsmål: er MRV + LCV bedre enn tilfeldig nå? (ikke besvart på slidene)

## A2.3 GA eller CSP for 8-dronninger (slide 6)
«Would genetic algorithms or a CSP solver be more efficient? Why?» (ikke besvart på slidene)

