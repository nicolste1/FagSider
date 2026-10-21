# Eksamensanalyse — TDT4172 Introduksjon til maskinlæring

Skrevet 26. september 2026 ut fra løsningsforslagene til Ord. 2024 og Ord. 2025 (begge i `kilder/`) og notatene
datert 22. september 2026 (avsnitt 1.1–2.3). **Godkjent av brukeren 26. september 2026.** Den maskinlesbare
varianten ligger i `eksamen.json`.

**Utvidet 8. oktober 2026** med deltemaene 2.4 (backpropagation), 2.5 (bygge og trene i Keras) og 3.1 (clustering),
etter notatene datert 7. oktober 2026 (47 sider, avsnitt 1.1–3.1.4). **Utvidelsen er et forslag og venter på
godkjenning fra brukeren.**

**Utvidet 21. oktober 2026** med 2.5 (stochastic gradient descent; Keras-avsnittet heter nå 2.6), 3.2 (PCA og t-SNE),
3.3 (anomalideteksjon) og kapittel 4 (reinforcement learning), etter notatene datert 19. oktober 2026 (62 sider).
**Også denne utvidelsen er et forslag som venter på godkjenning.** Gjenstår som «senere»: forklarbarhet (LIME, SHAP)
og etikk (Ord. 2024 spm. 34–39). Merk: i 19. oktober-versjonen er nesten alle «Oppgave:»-avsnittene i kapittel 1–3.1
fjernet fra notatene; boksene på sidene er beholdt fordi de er eksamensrelevante, og likningsnumrene er renummerert
(gammel 51–96 → n−1, 98–104 → n−2).

## Status

- [x] Eksamenssett samlet: Ord. 2024 (`kilder/2024_LF.pdf`) og Ord. 2025 (`kilder/2025_LF.pdf`), begge med fasit
- [x] Gjennomgått med brukeren
- [x] `eksamen.json` fylt ut
- [x] Godkjent av brukeren: 26. september 2026
- [ ] Utvidelse 8. oktober 2026 (2.4, 2.5, 3.1): forslag, ikke godkjent
- [ ] Utvidelse 21. oktober 2026 (2.5 SGD, 2.6, 3.2, 3.3, 4): forslag, ikke godkjent
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

Settene dekker hele kurset. Notatene (19. okt.) dekker veiledet læring (kap. 1), nevrale nettverk (kap. 2, med
backpropagation, SGD og Keras), uveiledet læring (kap. 3: clustering, PCA/t-SNE, anomalideteksjon) og reinforcement
learning (kap. 4, uten DQN). Bare forklarbarhet og etikk gjenstår.

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
| Perceptron, Heaviside, XOR, sigmoid, backpropagation | 19 | 5.1, 5.2, 5.3, 5.4 | 2.1–2.4 (ja; backprop nytt 7. okt.) |
| Klynging: k-means, DBSCAN | 22, 27, 29, 30 | 6.1–6.4 | 3.1 (ja, nytt 7. okt.) |
| Dimensjonsreduksjon: PCA, t-SNE, KL | 24, 25, 26, 28 | 7.1, 7.2, 7.3 | 3.2 (ja, nytt 19. okt.) |
| Anomalideteksjon, Isolation Forest | 21, 23 | 7.4 | 3.3 (ja, nytt 19. okt.) |
| Reinforcement learning, Q-learning, DQN | 31, 32, 33 | 8.1–8.4, 9.1–9.4, 10.4 | 4 (ja, nytt 19. okt.); DQN (9.1–9.3, 10.4) er ikke i notatene |
| Forklarbarhet: LIME, SHAP, Shapley-verdier | 34, 35, 36 | – | nei, kommer |
| Etikk, AI Act | 37, 38, 39 | – | nei, kommer |

Hele Ord. 2025 og 33 av 39 spørsmål i Ord. 2024 ligger nå i det notatene dekker (unntaket er LIME/SHAP og etikk).

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
| 2.3 Arkitektur | 2 | flervalg | (ingen direkte; telle noder/vekter er bakgrunn for 5.x) | Antall noder i input/output-lag, matriseformen (101), hvert lag er en ikke-lineær transformasjon |
| 2.4 Backpropagation | 2 | flervalg | O24 · 19; O25 · 5.4 | «Hovedformålet med backpropagation?» (beregne hvordan hver vekt påvirker tapet via kjerneregelen bakover; justere vektene). Nytt i notatene 7. okt.: intuisjonen med ønskede endringer lag for lag |
| 2.5 Stochastic gradient descent | 1 | regn, flervalg | O24 · 13, 14 (står som bokser under 1.2.3) | «Hva angir batch size?», «10 000 punkter, batch 500: iterasjoner per epoke?» (N/B = 20). Full-batch GD 1 oppdatering per epoke, SGD N, mini-batch N/B; batch size er en hyperparameter; støyete gradient → lavere læringsrate |
| 2.6 Bygge, trene og predikere (Keras) | 3 | kode | ingen | Øvingsstoff: `Sequential`, `Dense`, `compile`/`fit`/`predict`/`evaluate`, `batch_size`, `epochs`, early stopping på `val_loss`. Knyttes til 1.2.3 (batch/epoke) og 1.4.3 (early stopping) |
| 3.1.1 k-means: algoritmen, initialisering, k-means++, valg av k, metrikker | 1 | flervalg | O24 · 22 (del 1), 29; O25 · 6.1, 6.2, 6.3 | «Hva minimerer k-means?» (sum av kvadrerte avstander punkt–sentroide, inertia); «Hvorfor k-means++ framfor lengst-unna?» (sprer sentroidene med tilfeldighet, havner nær midten av klyngene); «Hvorfor er k vanskelig?» (ulike metrikker foreslår ulike k); «Når bruke k-means?» (avstand innad < avstand mellom klynger); «Hvilken kategori?» (sentroidebasert) |
| 3.1.2 DBSCAN: kjernepunkt, ε, min_samples, outliers | 1 | flervalg, lese plott | O24 · 22 (del 2), 27, 30; O25 · 6.4 | «Hva gjør DBSCAN robust?» (identifiserer outliers, putter dem ikke i klynger); «Samme klynge når?» (kjede av punkter med steg ≤ ε; identiske vektorer også godkjent); «Smiley splittet i mange små klynger: hvilken parameterfeil?» (for lav ε); «Hvilken kategori?» (tetthetsbasert) |
| 3.1.3 Hovedkategorier | 2 | flervalg | O24 · 22 | Sentroide-, tetthets-, fordelings- og hierarkibasert; de to siste bare som navn |
| 3.1.4 Dimensjonsforbannelsen igjen | 3 | – | ingen | Concentration of distances; forklarer hvorfor både k-means og DBSCAN sliter i høye dimensjoner. Én linje under «Lavere» |
| 3.2.1 PCA | 1 | flervalg, regn | O24 · 24, 25; O25 · 7.1 | «Fordelen ved PCA?» (ukorrelerte komponenter, færre dimensjoner, mest mulig varians bevart); «Hva er prinsipalkomponentene?» (egenvektorene til kovariansmatrisen); «Hvorfor ortogonale?» (hver komponent forklarer ulik del av variansen uten overlapp). Regn: kovariansmatrise og egenverdier for 2×2 |
| 3.2.2 SNE / t-SNE, KL-divergens | 1 | flervalg | O24 · 26, 28; O25 · 7.2, 7.3 | «Vanlig bruk av t-SNE?» (visualisering); «Rollen til KL i t-SNE?» (måler forskjell mellom P i høy og Q i lav dimensjon); «Hensikten med å minimere KL?» (bevare nabolag); «Hvorfor ikke på nye data?» (optimaliserer posisjonene direkte, ingen transformasjon) |
| 3.3 Anomalideteksjon: k-means, DBSCAN, Isolation Forest | 1 | flervalg | O24 · 21, 23; O25 · 7.4 | «Mange falske positive?» (normale punkter stemplet som anomalier); «Hva brukes Isolation Forest til?» (isolere punkter ved å dele dataene gjennom beslutningstrær); «Hvorfor høyere score for anomalier?» (isoleres tidlig, kortere sti; lav tetthet også godkjent) |
| 4.1 MDP, Markov-egenskapen, policy | 1 | flervalg | O24 · 31; O25 · 8.1, 8.2 | «Hva er en policy?» (strategi/tabell/funksjon som gir handling for hver tilstand); «Markov-egenskapen?» (neste tilstand avhenger bare av nåværende tilstand og handling) |
| 4.2 Q-verdier, Bellman-likningen, α og γ | 1 | flervalg, regn | O24 · 32; O25 · 8.4 | «Høy γ medfører?» (læringen domineres av estimatet av fremtidige tilstander); «Rollen til γ?» (hvor sterkt fremtidige belønninger påvirker Q). Regn ett Bellman-steg for hånd |
| 4.3 Environments | 3 | – | ingen | reset/step, tre-på-rad-miljøet. Øvingsstoff |
| 4.4 Agenter: ε-greedy, exploration/exploitation, reward hacking | 1 | flervalg | O25 · 8.3, 9.4 | «Hensikten med ε?» (av og til tilfeldig handling for å utforske); «Agent finner uventet høy belønning?» (utnytter svakheter i belønningsdefinisjonen; ikke i notatene, forslag) |
| 4.5 Q-tabell, loss vs reward, DQN | 1 | flervalg, kode | O24 · 33; O25 · 9.1, 9.2, 9.3, 10.4 | «Loss og reward?» (ingen nødvendig sammenheng); DQN: target network (stabile treningsmål), replay buffer (mindre korrelerte eksempler), vektdeling (én oppdatering endrer mange Q-verdier), `random.sample(buffer, k=32)`. DQN er ikke i notatene; svarene er merket forslag |

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
| O24 · 19 formålet med backpropagation | 2.4 | kap2/perceptron.html#backpropagation | ferdig (flyttet 8. okt.) |
| O25 · 5.4 backpropagation og kjerneregelen | 2.4 | kap2/perceptron.html#backpropagation | ferdig (flyttet 8. okt.) |
| O25 · 6.1 hva k-means minimerer | 3.1.1 | kap3/clustering.html#kmeans | ferdig |
| O24 · 29 når bruke k-means | 3.1.1 | kap3/clustering.html#kmeans | ferdig |
| O25 · 6.2 k-means++ framfor lengst unna | 3.1.1 | kap3/clustering.html#kmeans | ferdig |
| O25 · 6.3 hvorfor k er vanskelig å velge | 3.1.1 | kap3/clustering.html#kvalitet | ferdig |
| O25 · 6.4 samme klynge i DBSCAN | 3.1.2 | kap3/clustering.html#dbscan | ferdig |
| O24 · 27 hva gjør DBSCAN robust | 3.1.2 | kap3/clustering.html#dbscan | ferdig |
| O24 · 30 DBSCAN smiley, for lav ε | 3.1.2 | kap3/clustering.html#dbscan | ferdig |
| O24 · 22 kategori for k-means og DBSCAN | 3.1.3 | kap3/clustering.html#kategorier | ferdig |
| O24 · 24 fordelen ved PCA | 3.2.1 | kap3/dimensjonsreduksjon.html#pca | ferdig |
| O24 · 25 prinsipalkomponentene | 3.2.1 | kap3/dimensjonsreduksjon.html#pca | ferdig |
| O25 · 7.1 hvorfor ortogonale | 3.2.1 | kap3/dimensjonsreduksjon.html#pca | ferdig |
| O24 · 26 bruk av t-SNE | 3.2.2 | kap3/dimensjonsreduksjon.html#tsne | ferdig |
| O24 · 28 KL-divergens i t-SNE | 3.2.2 | kap3/dimensjonsreduksjon.html#tsne | ferdig |
| O25 · 7.3 hensikten med KL-minimering | 3.2.2 | kap3/dimensjonsreduksjon.html#tsne | ferdig |
| O25 · 7.2 t-SNE på nye data | 3.2.2 | kap3/dimensjonsreduksjon.html#sammenlikning | ferdig |
| O24 · 21 mange falske positive | 3.3 | kap3/anomali.html#intro | ferdig |
| O24 · 23 Isolation Forest | 3.3.3 | kap3/anomali.html#isolation-forest | ferdig |
| O25 · 7.4 hvorfor anomalier får høyere score | 3.3.3 | kap3/anomali.html#isolation-forest | ferdig |
| O24 · 31 policy | 4.1 | kap4/rl.html#mdp | ferdig |
| O25 · 8.2 policy | 4.1 | kap4/rl.html#mdp | ferdig |
| O25 · 8.1 Markov-egenskapen | 4.1 | kap4/rl.html#mdp | ferdig |
| O24 · 32 Bellman, høy γ | 4.2 | kap4/rl.html#q-verdier | ferdig |
| O25 · 8.4 rollen til γ | 4.2 | kap4/rl.html#q-verdier | ferdig |
| O25 · 8.3 ε-greedy | 4.4 | kap4/rl.html#agenter | ferdig |
| O24 · 33 loss og reward | 4.5 | kap4/rl.html#q-tabell | ferdig |
| O25 · 9.1 target network | DQN | kap4/rl.html#dqn | ferdig (forslag) |
| O25 · 9.2 replay buffer | DQN | kap4/rl.html#dqn | ferdig (forslag) |
| O25 · 9.3 nettverk vs tabell | DQN | kap4/rl.html#dqn | ferdig (forslag) |
| O25 · 9.4 reward hacking | 4.4 | kap4/rl.html#dqn | ferdig (forslag) |
| O25 · 10.4 random.sample for minibatch | DQN | kap4/koding.html#oppg-o25-10-4 | ferdig |
| O24 · 34–39 (LIME, SHAP, Shapley, etikk, AI Act) | senere kap. | – | venter på notatene |

## Hva som bevisst nedprioriteres

Ikke spurt i noen av settene, og lagt under «Lavere» i Eksamensfokus-boksene:

- 1.1: Mitchell/Samuel-definisjonene, bar-plott vs. histogram, valg av bin-størrelse.
- 1.2.1–1.2.2: utledningen av de deriverte (17)–(25). Bare resultatet \((y_{\text{pred}} - y)x_j\) trengs.
- 1.2.6: forventningsverdi-formen av entropi (28)–(30). Kun kryssentropi som tapsfunksjon og koden for den.
- 1.2.8–1.2.9: tabellestimat av simultanfordelingen, kule-skall-oppgaven, MNIST-tallene.
- 1.3.4: pseudokoden for å bygge tre og Palmer Penguins-koden (notatene sier selv at dere ikke skal bygge trær).
- 1.4.5: den fulle utledningen (72)–(88) av bias–varians-dekomposisjonen. Definisjonene av bias, varians og tolkningen (høy varians = overfit) er det som spørres.
- 1.4.6: sklearn-koden for regresjonstrær.
- 2.1: historikk (McCulloch–Pitts 1943, Rosenblatt 1957), sklearn-Perceptron-koden.
- 2.5: all Keras-koden (ligger på kap2/koding.html som øvingsstoff). Bare begrepene batch size, epoker og early stopping overlapper med eksamen, og de spørres under 1.2.3 og 1.4.3.
- 3.1.1: Stirling-utledningen (103)–(104) av sannsynligheten k!/kᵏ for god tilfeldig initialisering; bare konklusjonen (avtar eksponensielt med k, derfor k-means++) trengs. `MiniBatchKMeans`-koden.
- 3.1.2: historikken (Ester m.fl. 1996).
- 3.1.4: koden som simulerer avstander i enhetskuben; bare konklusjonen (avstandene vokser, spredningen krymper, klynger kan ikke være kompakte) trengs.
- 2.5: Robbins og Monro (1951), «dyplæringsfolk».
- 3.2.1: Pearson 1901, S-kurve- og MNIST-koden (ligger på 3D), perplexity-detaljer.
- 3.3: percentile-detaljer og contamination-verdien.
- 4: AlphaZero, Gym-miljøene, render-funksjonen, gitlab-lenken, heatmap-plottene av Q-verdier utover tomt brett.

Eksisterende sider (1A–1C) er skrevet før analysen og inneholder fortsatt alt dette. De er ikke kuttet ned;
Eksamensfokus-boksen sier hva som kan hoppes over.
