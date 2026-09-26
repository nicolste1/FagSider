# Oppgaver («Oppgave:») i kilden

Datert September 22, 2026. Generert av `tools/pdf_til_tekst.py`.

## 1.1 Data
1. (Tenk deg om før du sjekker svaret på oppgaven, på neste side) 1. Hvilke variabler er kategoriske? 2. Hvilke variabler er binære? 3. Hvilke variabler er kontinuerlige?
2. Se på tabell 3 igjen. Hva bør vi gjøre før vi plotter disse dataene?

## 1.2.1 Trening og tapsfunksjon
3. Studer dette uttrykket. Hva er verdien hvis y = 1 og y = 1? Hva med de andre pred kombinasjonene av de mulige verdiene til y og y?

## 1.2.4 Evaluering
4. Hva er flere grunner til at vi ikke bør velge samme tapsfunksjon og evalueringsmetrikk?
5. Du skal levere en maskinlæringsmodell til et sykehus som vil finne ut hvilke pasienter som lider av en dødelig sykdom. (I dette scenariet er det veldig alvorlig om modellen får en falsk negativ.) Hvilken metrikk bør modellen skåre høyt på?

## 1.2.5 Klassifiseringsterskel
6. Ønsker vi høy eller lav verdi for henholdsvis FPR og TPR? Hva blir FPR og TPR for klassifiseringsterskel 0? Tilsvarende for 1?
7. Hvordan ser ROC-kurven ut for en modell som kaster mynt?
8. Når er presisjon = recall? Hvilken av disse metrikkene er avhengig av fordelingen mellom klassene?

## 1.2.8 Ikke-uavhengige features
9. Hvilke features er ikke uavhengige? Hint: bruk følgende kode tilå plotte Passenger class vs Sex, som vi gjorde i forelesningen. Hva ser du?
10. Du kan gjøre disse estimatene selv, og det beste erå lage en tabell. Da må du kombinere hververdiavx medhververdiavx ,ogsåigjenmedx (derdukanvelgeselvhvilkenfeaturex ,x ,x 1 2 3 1 2 3 erhenholdsvisSex,AgeogPclass. Detspilleringenrolleforresultatet.) SidenAgeerkontinuerligkan duforeksempeldeledennein…

## 1.2.9 Dimensjonsforbannelsen
11. Finn ut hvor stor andel av en d-dimensjonal sfære (kule) som ligger i et tynt skall med tykkelse ϵ. Volumet til en 3-dimensjonal kule er 4πr3, og den D-dimensjonale generaliseringen er Table 5 Dimensjoner d Bins Datapunkter 1 10 102 3 103 104 10 1010 1011 784 10784 10785 K rD. Du trenger ikkeå tenke…

## 1.2.10 Trening på ubalanserte data
12. Hva vil du svare på dette?
13. Vi har et datasett med 100 datapunkter fra den ene klassen, og 1000 fra den andre. Hvor mange datapunkter får vi totalt om vi gjør kun undersampling? Hvor mange får vi totalt om vi gjør kun oversampling, og hvor mange duplikater får vi?

## 1.3.2 Gini Impurity
14. Se på tabell 6. Hvilken splitt bør vi velge, og hvorfor?

## 1.3.3 Entropi
15. Hva er entropien til fordelingen (0.5,0.5), og fordelingen (0.01,0.99)?
16. Vi har en beslutningsnode bestående av p = 9 positive og n = 5 negative datapunkter. VisatI =0.94. Antaderetteratvisplitterdatasettetslikatvifårtonyedatasettmedhenholdsvis før (p = 4,n = 5) og (p = 5,n = 0). Regn ut endringen i entropi (svaret står rett under, men prøv 1 1 2 2 selv). (cid:18) (cid:1…

## 1.3.4 Bygge beslutningstrær
17. Plott Gini impurity og entropi i intervallet [0,1]. Er kurvene like?
18. Sammenliknuttrykkeneforlogloss,entropiogGini-urenhet. Liknernoenavdisse? Hvilken går raskestå evaluere? Utover valg av beslutningskriterier, må vi besvare to ytterligere spørsmål: • Når skal vi slutteå splitte, selv om nederste node har instanser fra begge klassene?

## 1.4.1 Data og tapsfunksjon
19. Hva kan vi ikke gjenbruke fra klassifiseringstilfellet?
20. Modellen oppfører seg som vist i figur 10b, altså den overestimerer konsekvent for alle verdier av x . Har modellen for lav eller for høy verdi av β ? Er verdien til ∂L større eller mindre enn 0?
21. Hilken tilsvarende sjekk kan vi gjøre for β ?

## 1.4.2 Polynomisk regresjon og feature engineering
22. Hvor godt vil lineær regresjon fungere for å lage en modell som predikerer y for nye datapunkterx? Hvorfor?
23. For akkurat min implementasjon fant jeg at modellens MSE ligger rundt 960. Er dette et høyt eller lavt tall? Kan vi si generelt hva som er en høy verdi for MSE?
24. Er det muligå se fra dataene i figuren hvilken grad vi bør generere features til?
25. Ergradenpåpolynometvitransformererfeaturestilenmodellparameter,enhyperparam- eter eller en feature?

## 1.4.4 Kryssvalidering
26. Hvordan velger vi hvilke datapunkter som havner i henholdsvis trenings-, test og valider- ingsdatasettet, og påvirker dette testresultatet?
27. Hva er fordeler og ulemper ved k-fold cross validation sammenliknet med LOOCV?

## 1.4.5 Bias variance tradeoff
28. Hvakommerdenandrelikhetenav,altsåhvorforkanviflytteF(x)utenforforventningsver- dien?
29. For intuisjon kan vi tenke oss en litt rar situasjon: Vi finner ut at den faktiske gjennom- snittshøyden til norske kvinner er 167 cm. Vi måler egenskapene og høyden til mange ulike tilfeldige utvalg av norske kvinner, som gir oss flere treningsdatasett. For hvert datasett trener vi en modell (vi tr…

## 1.4.6 Regresjonstrær
30. Prøv gjerneå generere disse dataene selv ved bruk av def f(x): return np.floor(x), og se om du klarerå tilpasse et polynom av valgfri grad til dataene. Vi innser raskt at y ikke følger et polynom, og at polynomisk regresjon ikke er en god vei til mål. I stedet kan vi innse vedå studere dataene at de…
31. Omduskulletilpasseetbeslutningstretildissedataene,hvordypttrorduatdetminimum bør være? Hvor dypt tror du at det optimale treet vil være (med optimalt menes lavest MSE)?
32. Til slutt, lag en liste over ulikheter mellom beslutningstrær (både for klassifisering og regresjon) og lineær/logistisk regresjon (med polynomisk feature extraction). Se tabell 8 når du gir opp. Table 8: Forskjeller mellom beslutningstrær og regresjonsmodeller. Trær Regresjon Feature scaling er ikk…

## 1.5.2 Boosting
33. Trebaserteensemblemodellerdubørhahørtom,oghelstbruktpåetdatasett,erCatBoost, LightGBM, AdaBoost, og XGBoost. Det er en god regelå alltid bruke en ensemble-modell som referanseverdi for hvor godt en modell kan gjøre det, når du jobber med et maskinlæringsproblem med tabulære data (altså den typen dat…

## 2.1 Perceptron
34. Hva er problemet med denne prosedyren? Ikke les videre før du har prøvdå besvare dette spørsmålet. Hint: Hva skjer hvis du prøverå derivere tapsfunksjonen med f(x) fra likning 89?
35. Hvormangefeaturesogklasserhardataene? Hvormangevekter trenger et perseptron forå tilpasse dem?
36. Kan kan et perseptron gjøre XOR? Hvordan?

## 2.3 Arkitektur
37. Se på første (øverste) node i det første laget etter input-laget og skriv ned aktiveringen til denne noden. Du bør komme frem til følgende uttrykk: (cid:32) n (cid:33) a(1) =g (cid:88) w(1)x . (97) 1 i1 i i=0 Vi tar for oss tilfellet der vi har to input-features, og har bygget et skjult lag beståend…
