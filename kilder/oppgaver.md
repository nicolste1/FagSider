# Oppgaver («Oppgave:») i notatene

Datert September 2, 2026. Generert av `tools/pdf_til_tekst.py`.

## 1.1 Data
1. (Tenk deg om før du sjekker svaret på oppgaven, på neste side) 1. Hvilke variabler er kategoriske? 2. Hvilke variabler er binære? 3. Hvilke variabler er kontinuerlige?
2. Se på tabell 3 igjen. Hva bør vi gjøre før vi plotter disse dataene?

## 1.2.1 Trening og tapsfunksjon
3. Studer dette uttrykket. Hva er verdien hvis y = 1 og y = 1? Hva med de andre pred kombinasjonene av de mulige verdiene til y og y?

## 1.2.2 Gradient descent
4. Hvilken retning bør vi bevege oss i? I hvilket rom?

## 1.2.4 Evaluering
5. Hva er flere grunner til at vi ikke bør velge samme tapsfunksjon og evalueringsmetrikk?
6. Du skal levere en maskinlæringsmodell til et sykehus som vil finne ut hvilke pasienter som lider av en dødelig sykdom. (I dette scenariet er det veldig alvorlig om modellen får en falsk negativ.) Hvilken metrikk bør modellen skåre høyt på?

## 1.2.5 Klassifiseringsterskel
7. Ønsker vi høy eller lav verdi for henholdsvis FPR og TPR? Hva blir FPR og TPR for klassifiseringsterskel 0? Tilsvarende for 1?
8. Hvordan ser ROC-kurven ut for en modell som kaster mynt?
9. Når er presisjon = recall? Hvilken av disse metrikkene er avhengig av fordelingen mellom klassene?

## 1.2.8 Ikke-uavhengige features
10. Hvilke features er ikke uavhengige? Hint: bruk følgende kode tilå plotte Passenger class vs Sex, som vi gjorde i forelesningen. Hva ser du?
11. Du kan gjøre disse estimatene selv, og det beste erå lage en tabell. Da må du kombinere hververdiavx medhververdiavx ,ogsåigjenmedx (derdukanvelgeselvhvilkenfeaturex ,x ,x 1 2 3 1 2 3 erhenholdsvisSex,AgeogPclass. Detspilleringenrolleforresultatet.) SidenAgeerkontinuerligkan duforeksempeldeledennein…
12. Hvor mange datapunkter trenger vi da for tre features? Hva er sammenhengen mellom antall features, antall bins og antall datapunkter?

## 1.2.9 Dimensjonsforbannelsen
13. Hvordan skalerer sammenhengen mellom dimensioner (i vårt tilfelle antall features) og antall datapunkter vi trenger?
14. Finn ut hvor stor andel av en d-dimensjonal sfære (kule) som ligger i et tynt skall med tykkelse ϵ. Volumet til en 3-dimensjonal kule er 4πr3, og den D-dimensjonale generaliseringen er K rD. Du trenger ikkeå tenke på prefaktoren siden du kun er ute etterå finne ut hvor stor andel D som ligger i et ϵ…

## 1.2.10 Trening på ubalanserte data
15. Hva vil du svare på dette?
16. Vi har et datasett med 100 datapunkter fra den ene klassen, og 1000 fra den andre. Hvor mange datapunkter får vi totalt om vi gjør kun undersampling? Hvor mange får vi totalt om vi gjør kun oversampling, og hvor mange duplikater får vi?

## 1.3.2 Gini Impurity
17. Se på tabell 6. Hvilken splitt bør vi velge, og hvorfor?

## 1.3.3 Entropi
18. Hva er entropien til fordelingen (0.5,0.5), og fordelingen (0.01,0.99)?
19. Vi har en beslutningsnode bestående av p = 9 positive og n = 5 negative datapunkter. VisatI =0.94. Antaderetteratvisplitterdatasettetslikatvifårtonyedatasettmedhenholdsvis før (p = 4,n = 5) og (p = 5,n = 0). Regn ut endringen i entropi (svaret står rett under, men prøv 1 1 2 2 selv). (cid:18) (cid:1…

## 1.3.4 Bygge beslutningstrær
20. Plott Gini impurity og entropi i intervallet [0,1]. Er kurvene like?
21. Sammenliknuttrykkeneforlogloss,entropiogGini-urenhet. Liknernoenavdisse? Hvilken går raskestå evaluere? Utover valg av beslutningskriterier, må vi besvare to ytterligere spørsmål: • Når skal vi slutteå splitte, selv om nederste node har instanser fra begge klassene?
