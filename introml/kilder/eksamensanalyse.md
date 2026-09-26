# Eksamensanalyse — TDT4172 Introduksjon til maskinlæring

Skrevet 26. september 2026 ut fra løsningsforslagene til Ord. 2024 og Ord. 2025 (begge i `kilder/`) og notatene
datert 22. september 2026 (avsnitt 1.1–2.3). **Ikke gjennomgått med brukeren ennå**: prioritetene under er et
forslag som skal godkjennes. Den maskinlesbare varianten ligger i `eksamen.json`.

## Status

- [x] Eksamenssett samlet: Ord. 2024 (`kilder/2024_LF.pdf`) og Ord. 2025 (`kilder/2025_LF.pdf`), begge med fasit
- [ ] Gjennomgått med brukeren
- [x] `eksamen.json` fylt ut
- [ ] Godkjent av brukeren: (dato)
- [ ] Konteeksamener og eldre sett: mangler

## Eksamensform

Begge settene er **rene flervalgseksamener** i Inspera, 4 timer, hjelpemiddelkode D (enkel kalkulator, ingen
notater). Ingen håndtegninger. Det betyr: ingen utledninger skal skrives, men tallene i regneoppgavene må
kunne regnes for hånd med kalkulator (gradient descent-steg, confusion matrix → TPR/FPR, resampling-antall,
iterasjoner per epoke, Shapley-verdier).

| Sett | Form | Poeng | Merknad |
|---|---|---|---|
| Ord. 2024 (Strümke) | 39 spørsmål, ett eller flere riktige alternativer | ikke oppgitt per spørsmål | Fagstaben satte A ≥ 92 %, B ≥ 82 % (strengere enn NTNU-normen) |
| Ord. 2025 (Ruocco) | 10 deler × 4 spørsmål, ett riktig alternativ | 2,5 p per riktig, **−0,83 p per feil**, 0 for blankt, null-grense per del | Et valgt alternativ kan ikke velges bort igjen |

**Strategi for 2025-formatet:** forventet poeng ved ren gjetting blant fire er
\(0{,}25 \cdot 2{,}5 - 0{,}75 \cdot 0{,}83 \approx 0\). Gjett bare når minst ett alternativ kan utelukkes.

## Hva settene dekker, og hva notatene dekker så langt

Settene dekker hele kurset. Notatene (22. sept.) dekker bare veiledet læring (kap. 1) og starten på nevrale
nettverk (2.1–2.3). Resten av eksamensstoffet kommer i senere versjoner av notatene, og analysen må utvides da.

| Tema | Ord. 2024 (spm.) | Ord. 2025 (del.spm.) | I notatene? |
|---|---|---|---|
| Data, preprosessering, skalering | 4 | 1.1, 1.4, 10.1 | 1.1 (ja) |
| Logistisk regresjon, sigmoid, læringsrate, epoker | 12, 13, 14, 20 | 1.2, 1.3, 10.2, 10.3 | 1.2 (ja) |
| Evaluering: confusion matrix, ROC, AUC, precision/recall | 5, 6, 7 | – | 1.2.4–1.2.5 (ja) |
| Cross-entropy (kode), vektet tap, ubalanse, resampling | 8, 9, 10, 11 | 2.3 | 1.2.1, 1.2.10 (ja) |
| Bayes, naïv Bayes | – | 2.1, 2.2 | 1.2.7 (ja) |
| Beslutningstrær, Gini | 15 | 2.4 | 1.3 (ja) |
| Lineær regresjon, MSE, GD-steg, bias–varians, over/underfit | 1, 2, 3 | 4.1, 4.2, 4.3 | 1.4 (ja) |
| Regresjonstrær | – | 4.4 | 1.4.6 (ja) |
| Ensemble: bagging, random forest, boosting, bootstrap vs CV | 16, 17, 18 | 3.1, 3.2, 3.3, 3.4 | 1.5 (ja, nytt 22. sept.) |
| Perceptron, Heaviside, XOR, sigmoid, backpropagation | 19 | 5.1, 5.2, 5.3, 5.4 | 2.1–2.3 (ja); backprop kommer |
| Klynging: k-means, DBSCAN | 22, 27, 29, 30 | 6.1–6.4 | nei, kommer |
| Dimensjonsreduksjon: PCA, t-SNE, KL | 24, 25, 26, 28 | 7.1, 7.2, 7.3 | nei, kommer |
| Anomalideteksjon, Isolation Forest | 21, 23 | 7.4 | nei, kommer |
| Reinforcement learning, Q-learning, DQN | 31, 32, 33 | 8.1–8.4, 9.1–9.4, 10.4 | nei, kommer |
| Forklarbarhet: LIME, SHAP, Shapley-verdier | 34, 35, 36 | – | nei, kommer |
| Etikk, AI Act | 37, 38, 39 | – | nei, kommer |

Omtrent halvparten av hvert sett ligger i det notatene dekker nå.

## Tilgjengelige eksamenssett

| Sett | Fil / lenke | Løsningsforslag? | Merknad |
|---|---|---|---|
| Ord. 2024 | `kilder/2024_LF.pdf` | Ja (riktige alternativer avkrysset) | Ingen forklaringer i fasiten; forklaringene på sidene er skrevet ut fra notatene |
| Ord. 2025 | `kilder/2025_LF.pdf` | Ja (avkrysset) + sensurmerknad | 6.4 og 7.4 fikk ekstra godkjente alternativer |

## Analyse per deltema

Prio: 1 = kommer nesten alltid (flere spørsmål per sett), 2 = ett spørsmål per sett, 3 = sjelden/aldri.
Type: flervalg er formen for alt; «regn» betyr at spørsmålet krever utregning, «kode» at det viser Python.

| Deltema | Prio | Type | Forekomster | Typisk formulering |
|---|---|---|---|---|
| 1.1 Data og preprosessering | 1 | flervalg, kode | O24 · 4; O25 · 1.1, 1.4, 10.1 | «Hvilket preprosesseringssteg er nødvendig?» (enkode kategoriske), «Hvordan skalere test-data?» (fit på trening, transform på test) |
| 1.2 Logistisk regresjon: modell, sigmoid | 1 | flervalg, kode | O25 · 1.2, 10.2 | «Hva er output ŷ = σ(wᵀx + b)?» (verdi i (0,1), tolkes som sannsynlighet) |
| 1.2.2 Gradient descent, læringsrate, konveksitet | 1 | flervalg | O24 · 12, 20; O25 · 1.3 | «Loss oscillerer, årsak?» (for høy læringsrate), «Læringsraten er hva slags parameter?» (hyper), «Når finner GD globalt minimum?» (konveks) |
| 1.2.3 Trening, epoker, batch size, train/test-split | 1 | regn, kode | O24 · 13, 14; O25 · 10.3 | «10 000 punkter, batch 500: iterasjoner per epoke?» (20); «Hva angir batch size?»; «Hvilken funksjon splitter?» (`train_test_split`) |
| 1.2.4 Evaluering: confusion matrix, metrikker | 1 | regn, flervalg | O24 · 5, 7 | Gitt confusion matrix ved to terskler: regn TPR/FPR og finn punktet på ROC-kurven; «falske negative er alvorlig → recall», «falske positive dyrt → precision» |
| 1.2.5 Terskel, ROC, AUC, precision/recall | 1 | regn, flervalg | O24 · 5, 6 | «Hva betyr ROC AUC = 0.9?» (sannsynlighet for å rangere positivt over negativt), «Hvilket punkt har lavest terskel?» |
| 1.2.6 Entropi og kryssentropi | 2 | kode | O24 · 9 | «Hvilken kodelinje er binary cross entropy?» |
| 1.2.7 Bayes’ teorem, naïv Bayes | 1 | flervalg | O25 · 2.1, 2.2 | «Hva er hensikten med p(x)?» (normalisering), «Hva antar naïv Bayes?» (betinget uavhengighet selv om det ikke stemmer) |
| 1.2.8 Ikke-uavhengige features | 3 | – | ingen | Bakgrunn for 2.2 |
| 1.2.9 Dimensjonsforbannelsen | 3 | – | ingen | Ikke spurt i noen av settene |
| 1.2.10 Ubalanserte data, resampling, vektet tap | 1 | regn, kode | O24 · 7 (del 2), 8, 10, 11; O25 · 2.3 | «2000 punkter, 90/10: hvor mange beholdes ved undersampling / legges til ved oversampling?»; «vektet CE-kode»; «w_A, w_B for 9000/1000?»; «oversampling → overfit» |
| 1.3 Beslutningstrær: noder, splitt, Gini, entropi | 2 | flervalg, regn | O24 · 15; O25 · 2.4 | «Hvordan velger treet feature?» (størst reduksjon i usikkerhet); «Gini etter splitt 0.28/0.41/0.07: velg?» (lavest) |
| 1.4.1 Lineær regresjon, MSE, gradient | 1 | regn, flervalg | O24 · 1, 2; O25 · 4.1 | «Antakelse i y = w₁x₁ + w₂x₂ + b?» (ingen vekselvirkninger); **regn ett GD-steg** (f = wx + b, L = ½(y − f)², x = 2, y = 4, w = 1, b = 0, α = 0.1); «Hvorfor MSE?» (maks likelihood under gaussisk støy) |
| 1.4.2 Polynomisk regresjon, feature engineering | 2 | flervalg | O25 · 4.3 (tabellen bruker polynomgrad) | Grad som hyperparameter; skalering tilpasses bare på treningsdata (O25 · 1.4) |
| 1.4.3 Trening/test/validering, over- og undertilpasning | 1 | flervalg | O25 · 4.3 | Tabell med trenings- og validerings-MSE: «hvilken modell overtilpasser?» (lav trening, høy validering) |
| 1.4.4 Kryssvalidering | 2 | flervalg | O24 · 18 | «Forskjell på kryssvalidering og bootstrapping?» (ikke-overlappende delsett vs. trekning med tilbakelegging) |
| 1.4.5 Bias–varians | 1 | flervalg | O24 · 3; O25 · 4.2 | «Liten treningsfeil, valideringsfeil øker, prediksjoner endrer seg med datasplitt → høy varians»; «Hva er induktivt bias?» |
| 1.4.6 Regresjonstrær | 2 | flervalg | O25 · 4.4 | «Varians etter splitt 2.4 vs 0.9: hvilken velges?» (lavest) |
| 1.5 Ensemble, bagging, random forest, boosting | 1 | flervalg | O24 · 16, 17, 18; O25 · 3.1, 3.2, 3.3, 3.4 | «Effekt av bootstrap-samples?» (variabilitet mellom modellene), «Hvorfor to typer tilfeldighet i RF?» (redusere korrelasjon), «Hvilke punkter får økt vekt i AdaBoost?» (feilklassifiserte), «Hvorfor tilpasse pseudo-residualer?» (modellere gjenværende feil) |
| 2.1 Perceptron, Heaviside, XOR | 1 | flervalg | O25 · 5.1, 5.2 | «Hvorfor er Heaviside uegnet for gradient?» (ikke deriverbar, derivert 0 nesten overalt), «Hvorfor kan ikke ett perceptron lære XOR?» (ikke lineært separerbart) |
| 2.2 Aktiveringsfunksjoner | 2 | flervalg | O25 · 5.3 | «Konsekvens av sigmoid i stedet for step?» (deriverbar, kan trenes med GD) |
| 2.3 Arkitektur, backpropagation | 2 | flervalg | O24 · 19; O25 · 5.4 | «Hovedformålet med backpropagation?» (beregne hvordan hver vekt påvirker tapet via kjerneregelen; justere vektene). Backprop er ikke i notatene ennå |

## Tidligere eksamensoppgaver som skal inn som `.oppgave`-bokser

Label på siden: «Eksamen Ord. 2025 · del 2 · spm. 4». Fasiten gir bare riktig alternativ, så svarboksen viser
riktig bokstav merket «Svar fra løsningsforslaget» og en begrunnelse skrevet ut fra notatene.

| Sett · oppgave | Deltema | Side · anker | Status |
|---|---|---|---|
| O25 · 1.1 preprosessering av kategoriske variabler | 1.1 | kap1/logistisk-regresjon.html#data | ferdig |
| O25 · 1.4 min–maks-skalering, fit på trening | 1.1 | kap1/logistisk-regresjon.html#data | ferdig |
| O24 · 4 Scaler.transform(x_test) | 1.1 | kap1/logistisk-regresjon.html#data | ferdig |
| O25 · 10.1 scaler.transform(X_test) | 1.1 | kap1/logistisk-regresjon.html#data | ferdig |
| O25 · 1.2 hva er output ŷ | 1.2 | kap1/logistisk-regresjon.html#modell | ferdig |
| O25 · 10.2 y_pred etter sigmoid i NumPy | 1.2 | kap1/logistisk-regresjon.html#modell | ferdig |
| O24 · 9 binary cross entropy-kode | 1.2.1 | kap1/logistisk-regresjon.html#tap | ferdig |
| O25 · 1.3 loss oscillerer | 1.2.2 | kap1/logistisk-regresjon.html#gradient-descent | ferdig |
| O24 · 12 læringsraten er en hyperparameter | 1.2.2 | kap1/logistisk-regresjon.html#gradient-descent | ferdig |
| O24 · 20 globalt minimum for konvekse funksjoner | 1.2.2 | kap1/logistisk-regresjon.html#gradient-descent | ferdig |
| O24 · 13 batch size | 1.2.3 | kap1/logistisk-regresjon.html#trening | ferdig |
| O24 · 14 iterasjoner per epoke | 1.2.3 | kap1/logistisk-regresjon.html#trening | ferdig |
| O25 · 10.3 train_test_split | 1.2.3 | kap1/logistisk-regresjon.html#trening | ferdig |
| O24 · 7 (1 og 3) recall for sykehus, precision for politiet | 1.2.4 | kap1/logistisk-regresjon.html#evaluering | ferdig |
| O24 · 5 confusion matrix → punkt på ROC-kurven | 1.2.5 | kap1/logistisk-regresjon.html#terskel | ferdig |
| O24 · 6 ROC AUC = 0.9 | 1.2.5 | kap1/logistisk-regresjon.html#terskel | ferdig |
| O25 · 2.1 hensikten med p(x) | 1.2.7 | kap1/logistisk-regresjon.html#bayes | ferdig |
| O25 · 2.2 naïv Bayes-antakelsen | 1.2.7 | kap1/logistisk-regresjon.html#bayes | ferdig |
| O24 · 7 (2) høy accuracy, ubalanserte klasser | 1.2.10 | kap1/logistisk-regresjon.html#ubalanserte-data | ferdig |
| O24 · 8 under- og oversampling (2000, 90/10) | 1.2.10 | kap1/logistisk-regresjon.html#ubalanserte-data | ferdig |
| O25 · 2.3 oversampling → overtilpasning | 1.2.10 | kap1/logistisk-regresjon.html#ubalanserte-data | ferdig |
| O24 · 10 vektet cross entropy-kode | 1.2.10 | kap1/logistisk-regresjon.html#ubalanserte-data | ferdig |
| O24 · 11 vekter for 9000/1000 | 1.2.10 | kap1/logistisk-regresjon.html#ubalanserte-data | ferdig |
| O24 · 15 hvordan treet velger feature | 1.3 | kap1/beslutningstraer.html#noder | ferdig |
| O25 · 2.4 velg feature etter Gini | 1.3 | kap1/beslutningstraer.html#gini | ferdig |
| O24 · 1 antakelse i lineær modell | 1.4.1 | kap1/regresjon.html#data-tap | ferdig |
| O24 · 2 ett gradient descent-steg | 1.4.1 | kap1/regresjon.html#data-tap | ferdig |
| O25 · 4.1 hvorfor MSE | 1.4.1 | kap1/regresjon.html#data-tap | ferdig |
| O25 · 4.3 hvilken modell overtilpasser | 1.4.3 | kap1/regresjon.html#validering | ferdig |
| O25 · 4.2 høy varians | 1.4.5 | kap1/regresjon.html#bias-varians | ferdig |
| O24 · 3 induktivt bias | 1.4.5 | kap1/regresjon.html#bias-varians | ferdig |
| O25 · 4.4 regresjonstre velger lavest varians | 1.4.6 | kap1/regresjon.html#regresjonstraer | ferdig |
| O25 · 3.1 effekt av bootstrap-samples | 1.5.1 | kap1/ensemble.html#bagging | ferdig |
| O24 · 18 kryssvalidering vs bootstrapping | 1.5.1 | kap1/ensemble.html#bagging | ferdig |
| O24 · 16 god random forest | 1.5.1 | kap1/ensemble.html#random-forest | ferdig |
| O25 · 3.2 to typer tilfeldighet i random forest | 1.5.1 | kap1/ensemble.html#random-forest | ferdig |
| O25 · 3.3 AdaBoost-vekter | 1.5.2 | kap1/ensemble.html#boosting | ferdig |
| O24 · 17 gradient boosting | 1.5.2 | kap1/ensemble.html#boosting | ferdig |
| O25 · 3.4 pseudo-residualer | 1.5.2 | kap1/ensemble.html#boosting | ferdig |
| O25 · 5.1 Heaviside og gradient | 2.1 | kap2/perceptron.html#perceptron | ferdig |
| O25 · 5.2 XOR | 2.1 | kap2/perceptron.html#logikk | ferdig |
| O25 · 5.3 sigmoid i stedet for step | 2.2 | kap2/perceptron.html#aktivering | ferdig |
| O24 · 19 formålet med backpropagation | 2.3 | kap2/perceptron.html#arkitektur | ferdig |
| O25 · 5.4 backpropagation og kjerneregelen | 2.3 | kap2/perceptron.html#arkitektur | ferdig |
| O24 · 21–39, O25 · 6–9, 10.4 (klynging, PCA, t-SNE, anomali, RL, XAI, etikk) | senere kap. | – | venter på notatene |

## Hva som bevisst nedprioriteres

Ikke spurt i noen av settene, og lagt under «Lavere» i Eksamensfokus-boksene:

- 1.1: Mitchell/Samuel-definisjonene, bar-plott vs. histogram, valg av bin-størrelse.
- 1.2.1–1.2.2: utledningen av de deriverte (17)–(25). Bare resultatet \((y_{\text{pred}} - y)x_j\) trengs.
- 1.2.6: forventningsverdi-formen av entropi (28)–(30). Kun kryssentropi som tapsfunksjon og koden for den.
- 1.2.8–1.2.9: tabellestimat av simultanfordelingen, kule-skall-oppgaven, MNIST-tallene.
- 1.3.4: pseudokoden for å bygge tre og Palmer Penguins-koden (notatene sier selv at dere ikke skal bygge trær).
- 1.4.5: den fulle utledningen (72)–(88) av bias–varians-dekomposisjonen. Definisjonene av bias, varians og tolkningen (høy varians = overfit) er det som spørres.
- 1.4.6: sklearn-koden for regresjonstrær.
- 2.1: historikk (McCulloch–Pitts, Rosenblatt), sklearn-Perceptron-koden.

Eksisterende sider (1A–1C) er skrevet før analysen og inneholder fortsatt alt dette. De er ikke kuttet ned;
Eksamensfokus-boksen sier hva som kan hoppes over.
