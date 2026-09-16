# Forelesningsnotater TDT4172 — tekstuttrekk

Kilde: `TDT4172_forelesningsnotater.pdf` · datert September 2, 2026 · 20 sider · sha256 `9cba97f4f909…`

> Generert av `tools/pdf_til_tekst.py`. Formler er uleselige her; filen brukes til å diffe versjoner.

## 1 Veiledet læring
<!-- side 2 -->



## 1.1 Data
<!-- side 2 -->

Maskinlæring går ut påå programmere datamaskiner slik at de kan lære fra data. Arthur Samuel
(1959) ga definisjonen
“Machine learning is the field of study that gives computers the ability to learn without
being explicitly programmed.”
Tom Mitchell (1997) ga den mer presise definisjonen
“ A computer program is said to learn from experience E with respect to some task T and
some performance measure P, if its performance on T, as measured by P, improves with
experience E.”
Utgangspunktet er altså experience, representert i form av data, som brukes av et dataprogram hvis
performance,altsåytelse,økerpåentask,altsåoppgave. Dataharviiformavdatasett,sombestårav
datapunkter med ulike egenskaper. Disse egenskapene omtales som variabler innen statistikk, og ofte
brukes det engelske begrepes features i maskinlæringssammenheng. Vi vil bruke disse to begrepene
om hverandre. Variabler, eller features, kan være kvalitative eller kvantitative, se eksempler i tabell 1.
Kvalitativevariabler,ogsåomtaltsomkategoriskefeatures,kanhaettellbartantallverdier,henholdsvis
beskrive et endelig antall kategorier. Disse må ofte enkodes før vi kan bruke dem i maskinlæring (for
eksempel ved bruk av label encoding), for eksempel hvis de er representert som strenger i stedet for
tall. Kvantitative variabler beskriver data som kan måles og sorteres. De har numeriske verdier og
man kan utføre matematiske operasjoner på dem (addisjon, subtraksjon, osv), og de kan være både
diskrete og kontinuerlige. Slike features kan i prinsippet brukes direkte i maskinlæring, men ofte bør
de behandles først, for eksempel gjennom normalisering eller mer avansert feature engineering, som vi
skal se på senere.
Table 1: To typer features for maskinlæringsmodeller.
Kvalitative variabler Kvantitative variabler
Representerer Kategorier Numeriske verdier
Eksempler Sjanger {action, komedie, ...}, Inntekt, alder, antall lyttere,
Aldersgruppe {ung, ..., gam- areal, nedbørsmengde, temper-
mel}, atur
Type frukt {eple, banan, ...}
I et datasett representerer kolonnene ulike features, mens radene inneholder de ulike datapunktene.
Når vi gjør maskinlæring ønsker viå lage en databasert modell som estimerer en funksjonsverdi for
gitte data. Hvis datasettet vi bruker inneholder en kolonne som angir funksjonsverdien for det ak-
tuelle datapunktet, omtaler vi denne kolonnen som target, og vi kan gjøre veiledet læring, fra engelsk
supervised learning.
VikanforeksempelbrukedatasettetTitanic fraKaggle1,hvoravetutvalgervistitabell2. Herrepre-
senterer PassengerId, Pclass, Name, Sex og Age datasettets fem features, mens Survived representerer
target – hvis målet erå lage en modell som beregner sjansen for at en person overlever.
Oppgave: (Tenk deg om før du sjekker svaret på oppgaven, på neste side)
1. Hvilke variabler er kategoriske?
2. Hvilke variabler er binære?
3. Hvilke variabler er kontinuerlige?
1https://www.kaggle.com/c/titanic
Table 2: Titanic-datasettet fra Kaggle.
PassengerId Pclass Name Sex Age Survived
1 3 Braund, Mr. Owen Harris male 22 0
2 1 Cumings, Mrs. John Bradley female 38 1
3 3 Heikkinen, Miss. Laina female 26 1
4 1 Futrelle, Mrs. Jacques Heath female 35 1
5 3 Allen, Mr. William Henry male 35 0
6 3 Moran, Mr. James male 0
7 1 McCarthy, Mr. Timothy J male 54 0
8 3 Palsson, Master. Gosta Leonard male 2 0
9 2 Montvila, Rev. Juozas male 27 1
4. Hvilken variabel bør vi ikke bruke?
Svar på oppgaven:
1. Pclass, Name, Sex, Survived, (PassengerId, om vi anser de ulike Id’ene som hver sin kategori)
2. Sex, Survived
3. Age
4. PassengerId, Name
Grunnen til at vi ikke bør bruker PassengerId, er at denne variabelen ikke inneholder informasjon om
egenskapene til en passasjer, og sannsynligvis er tilfeldig valgt. Name bør kun brukes hvis vi ønskerå
lageenmodellsomforstårspråktilstrekkeliggodttilåkunnefinneenrelasjonmellomtypiskenavnog
for eksempel dyktighet i redningsbåter. For modellene vil skal lage, vil ikke Name inneholde relevant
informasjon.
Førvikanbegynnepåmodelleringen,fjernervivariableneviikkevilbruke,oginnførernyttignotasjon,
setabell3. Hverradidataenerepresentereretdatapunkt,ogvibrukerindeksioppeforåanginummer
Table 3: Titanic-datasettet etter at vi har valgt ut hvilke variable vi vil beholde, og innført notasjon.
x x x y
1 2 3
x(1) 3 male 22 0
x(2) 1 female 38 1
x(3) 3 female 26 1
x(4) 1 female 35 1
x(5) 3 male 35 0
x(6) 3 male 0
x(7) 1 male 54 0
x(8) 3 male 2 0
x(9) 2 male 27 1
i datasettet. Eventuelt kan vi sette en parentes rundt indeksen, forå ikke forvirre indeksen med en
eksponent. Hver kolonne representerer en feature, med indeks i nede. Vi brukes fet x forå angi en
vektor, x(1) =(x(1),x(1),x(1)). Foråbenevnetarget, altsåstørrelsenviønskeråestimere, brukerviy.
1 2 3
Vi kan skrive oppgaven vi ønskerå løse som følger
(Pclass, Sex, Age) → Survived (1)
(cid:124) (cid:123)(cid:122) (cid:125) (cid:124) (cid:123)(cid:122) (cid:125)
featuresx(i)=(x(i),x(i),x(i)) targety(i)
1 2 3
og siden vi har en target per datapunkt, kan vi altså gjøre veiledet læring forå lage en modell som
løser denne oppgaven. Forå oppsummere:
• Vi har features x og targets y
• Vi ønskerå estimere y for nye x, basert på relasjonene representert mellom kjente x og y.
Før vi begynnerå lage en modell bør vi få en oversikt over sammenhenger i dataene. Oppgave: Se
på tabell 3 igjen. Hva bør vi gjøre før vi plotter disse dataene? Svaret lyder:
• Rad 6 mangler en verdi for feature 3; dette vil gi en feilmelding når vi prøverå plotte dataene,
• feature 2 er strenger (strings), altså ikke-numeriske verdier, som en datamaskin ikke kan plotte
uten videre,
• feature3eravenheltannenstørrelsesordenennfeatures1og2,ogkaniverstefallgimisvisende
plott.
Vi kan løse disse problemene ved hjelp av innebygget funksjonalitet i pandas og sklearn. En enkel
måteå bli kvitt rader med manglende verdier er med pandas-metoden dropna(), som fjerner rader
der minimum én verdi mangler. For å gjøre om feature 2 til numeriske verdier, kan vi bruke en
LabelEncoder,sommapperhverfeature-verditiletunikttall. Ivårttilfellekanforeksempel“female”
mappes til 0, og “male” til 1 (eller omvendt). Forå skalere verdiene til feature 3 til intervallet [0,1],
kanvibrukeMinMaxScaler. Sliketeknikker,dervifjernerrader,encoderellerskalererfeature-verdier,
omtales som preprosessering av dataene.
Etteratvierferdigemedåredigeredataene, børviplottedemforåsehvordanulikefeaturesfordeler
seg. Merk at plotting også kan brukes forå få idéer til hvordan dataene bør behandles, så plotting og
dataprosessering kan skje om hverandre. Figur 1 viser fire ulike plott, hvorav figurene 1a og 1b viser
bar-plott,ogfigurene1cog1dviserhistogrammer,overulikefeaturesogfargekodingbasertpåverdien
til target Survived. Et bar-plott viser oss middelverdien per kategori, i dette tilfellet middelverdien
til datapunktene som svarer til Survived=1. Vi bruker altså bar-plott forå sammenlikne variablers
gjennomsnittsverdi på tvers av kategorier. Et histogram viser oss fordelingen av en variabel, i dette
tilfellet innad i hver klasse, altså en fordeling for variabelverdier som svarer til Survived=1 og en
annen for Survived=0. Stolpene representerer intervaller for variabelens verdi, og disse intervallene
omtales som bins. Valg av bin-størrelse påvirker hvordan histogrammet ser ut, og det finnes ingen
almenngyldig regel for hvor store (hhv hvor mange) bins et histogram bør ha, siden dette er avhengig
av dataenes underliggende fordeling. Hvis et histogram ser veldig hakkete ut har man ofte valgt for
mange bins, som følgelig inneholder for få datapunkter, og hvis det er vanskeligå få øye på en form i
fordelingen, har man ofte valgt for få bins, som følgelig inneholder for mange datapunkter. Kun ved
å se på plottene i figur 1 får vi allerede en idé om at passasjerer i Pclass=1, kvinnelige passasjerer og
yngre passasjerer ofte overlever. Dette passer godt med det vi vet fra filmen :).
Når vi er ferdige medå preprosessere dataene og har studert dem gjennom plott, er vi klare for å
begynne med modelleringen, altsåå bygge en modell. For Titanic-dataene ønsker viå lage en modell
f som estimerer sannsynligheten forå overleve, target y, basert på verdiene i features x, altså p(y|x).
En modell som gjør dette gir oss prediksjoner f(x)=y .
pred

## 1.2 Logistisk regresjon
<!-- side 4 -->

Den enkleste modellen vi kan tenke oss er lineær regresjon,
n
(cid:88)
z = w x +b=wx+b, (2)
i i
i=1
hvor vektene w forteller oss hvor viktig hver feature x er for utfallet, altså verdien til z. En nyttig
i i
mental øvelse erå tenke over om z er et tall eller en vektor. Dette kan vi se basert på hvordan w og
x, som begge er vektorer, kombineres i uttrykket.
I likning 2 ser vi at z kan bli et hvilket som helst tall, mens vi er ute etter en sannsynlighet for
overlevelse, altså et tall mellom 0 og 1. En enkel løsning på dette erå bruke den logistiske funksjonen
σ(x), ogsåkaltSigmoid-funksjonenfordidenerformetsomen‘S’,sefigur2. Dennemapperreelletall
til domenet (0,1):
σ(z)= . (3)
1+e−z
(a) (b)
(c) (d)
Figure 1: Bar-plot (a, b) og histogrammer (c, d) fra Titanic-dataene. Se beskrivelse i teksten.
Det kan være lurt å huske denne funksjonen, da vi kommer til å møte den igjen når vi diskuterer
nevrale nettverk, da under navnet aktiveringsfunksjon. Vetå sette uttrykket i likning 2 inn i likning 3
får vi følgende uttrykk, som representerer modellens prediksjon for target y:
y = . (4)
pred 1+e−(cid:80)
i
wixi+b

## 1.2.1 Trening og tapsfunksjon
<!-- side 5 -->

Før en modell kan gi oss gode prediksjoner for x må den tilpasses til dataene våre, og denne prosessen
omtalessomlæring ellertrening innenmaskinlæring. Læringsprosessengårutpåatmodellentilpasses
slik at måloppnåelsen øker på datasettet vi bruker. I maskinlæring omtales data som brukes til dette
somtreningsdata, ogfunksjonensombrukestilåberegnemåloppnåelsesom tapsfunksjon, fraengelske
loss function. Denne funksjonen forteller oss hvor nærme modellens prediksjon er den riktige verdien,
altså target, og vi bruker følgende notasjon
L(y ,y) (5)
pred
forå angi en tapsfunksjon L som tar inn modellprediksjonene y og targets y forå beregne tapet
pred
til modellen på det aktuelle datapunktet.
Neste spørsmål er hvilken tapsfunksjon vi skal velge. Dette er avhengig av oppgaven vi ønsker at
modellenskalløse,ogalternativeneermildtsagtmange. Ivårttilfelleønskerviåmaksimeresannsyn-
ligheten for riktig kategorisering (Survived=0 eller 1) av dataene. Vi kan tenke på dette som en
sannynlighet for at y = 1 hvis y = 1 og for at y = 0 hvis y = 0. Kompakt kan vi skrive dette
pred pred
som
yy (1−y )1−y. (6)
pred pred
Oppgave: Studer dette uttrykket. Hva er verdien hvis y = 1 og y = 1? Hva med de andre
pred
kombinasjonene av de mulige verdiene til y og y?
pred
Figure 2: Sigmoid-funksjonen.
Vi har ikke lyst tilå endre dataene slik at predikert sannsynlighet for overlevelse endrer seg. I stedet
ønsker viå endre modellen slik at den estimerte sannsynligheten for overlevelse passer med den virke-
lige. Vi er altså i den situasjonen at dataene er gitt, mens modellen kan endres (det er det vi gjør
gjennom trening). Husk at modellen vår er parametrisert av w og b, og at y = σ(wx+b). Vi
pred
setter inn dette i likningen over og får
L(w,b|x,y)=σ(wx+b)y(1−σ(wx+b))1−y. (7)
Detteerenlikelihood (deravL-en),ogerensannsynlighetsfordelingovermodellparametre,gittatdata
erobservert. Hvorvidtvisnakkeromlikelihoodellersannsynlighet,eravhengigavhvilkensituasjonvi
er i: Hvis vi har en modell (parametrene er satt), kan vi bruke den tilå estimere sannsynligheten for
observasjoner(dedaikke-observertexogy). Vierderimotidenandresituasjonen;viharobservasjoner
(dataene x og utfallene y), og ønskerå tilpasse en modell til disse. Da trenger vi en fordeling over
parametrene, og som altså kalles en likelihood.
Uttrykket i likning (7) kan bli vanskeligå jobbe med på grunn av eksponentene. Siden vi kun ønsker
å finne et optimum (minimum eller maksimum) i dette uttrykket, kan vi ta logaritmen, som er en
monoton funksjon. Da har vi
lnL(w,b|x,y)=ln
(cid:0) σ(wx+b)y(1−σ(wx+b))1−y(cid:1)
(8)
=ylnσ(wx+b)+(1−y)ln(1−σ(wx+b)), (9)
ofte omtalt som log-likelihood. Likelihood forå estimere riktig klasse bør maksimeres, så vi legger på
et minustegn forå få en tapsfunksjon som skal minimeres. Da ender vi opp med såkalt cross-entropy
loss:
L(y ,y)=−lnL(w,b|x,y) (10)
pred
=−ylnσ(wx+b)−(1−y)ln(1−σ(wx+b)) . (11)
Dette er tapsfunksjonen vi vil bruke forå tilpasse modellen til dataene.
Modellen vår er definert av parametrene w og b, som med kompakt notasjon kan skrives θ = (w,b).
Vi ønskerå finne parametrene som minimerer tapet, i gjennomsnitt over alle datapunktene. Dette
kalles å trene modellen. Mer formelt vil vi velge parametrene θ som maksimerer log-likelihood for
target-verdiene y for hvert datapunkt x. Dette kalles conditional maximum likelihood estimation. For
å trene modellen vår har vi altså følgende optimaliseringsproblem
N
θˆ=argmin 1 (cid:88) L(f(x(i);θ),y(i)). (12)
N
θ
i=1
Forå løse dette optimaliseringsproblemet skal vi bruke gradient descent. Vi skal bruke den samme
metoden senere i kurset når vi trener nevrale nettverk.
(a) (b)
Figure 3: Eksempler på en (a) konveks, og en (b) ikke-konveks funksjon.

## 1.2.2 Gradient descent
<!-- side 7 -->

Gradient descent er en metode forå finne minimumspunktet til en funksjon man ikke kjenner formen
til. Strategien erå finne ut i hvilken retning i rommet definert av parametrene θ funksjonen minker
brattest. Intuitivt kan vi se for oss at vi vandrer rundt på et fjell med bind for øynene, med mål om
å finne det laveste punktet. Hvis man ikke kan se hvor det laveste punktet er, er beste strategiå føle
seg frem til den bratteste nedoverbakken, og følge denne til man kommer ned fra fjellet.
Enpotensiellutfordringeratfunksjonenkanhabådelokaleogglobaleminima. Etlokaltminimumhar
en høyere funksjonsverdi enn et globalt minimum, men funksjonen har kun positive gradienter rundt
minimumspunktet. I bind-for-øynene-analogien svarer dette til at man befinner seg i en fjellkjede,
og kan gå seg vill mellom fjelltopper uten å vite at det finnes en dypere dal bak neste fjelltopp.
Tapsfunksjonenforlogistiskregresjonerkonveks,oghvilketbetyratdenkunharettoptimum. Figur3a
viser et eksempel på en konveks funksjon, mens figur 3b viser en ikke-konveks funksjon, med flere
minima. Så lenge tapsfunksjonen vår er konveks har vi en garanti om at gradient descent som finner
et minimum har funnet et globalt minimum. Oppgave: Hvilken retning bør vi bevege oss i? I hvilket
rom?
Rommet vi beveger oss i er parameterrommet, altså rommet spent ut av θ-verdiene; hvis vi har fire
parametre, er rommet fire-dimensjonalt. Vi bør bevege oss i den retningen der tapet minker. Det vi
trenger er altså et mål på hvordan L endrer seg som funksjon av endring i θ. Vi trenger den deriverte
av L med hensyn på θ, altså gradienten (dette er gradienten i “gradient descent”). Her lærer vi noe
viktig, som du bør huske til senere: Siden gradient descent er veldig utbredt innen maskinlæring, også
til trening av nevrale nettverk, forstår vi at tapsfunksjonen må være deriverbar.
I starten av treningen har alle parametrene en tilfeldig verdi, og vi oppdaterer verdiene iterativt,
gjennom flere steg. Gradienten til tapsfunksjonen peker i retning av økende tap, og siden vi ønsker
å minke tapet må vi bevege oss i motsatt retning. Dette representerer vi gjennom et minustegn, og
regelen for parameteroppdateringen kan skrives som følger
∂
θt+1 =θt−η L(f(x;θ),y). (13)
∂θ
Dennyeverdienθt+1 etterstegterdenforrigeverdienθt korrigertmedgradiententiltapsfunksjonen.
Parameteren η representerer hvor store korrigeringer som skal gjøres til parameterverdien, og omtales
derfor som læringsraten: en høy verdi av η medfører store korrigeringer, mens en liten η medfører små
endringer. Vivetatmodellendefineresavparametreneθ. Læringsratenη erogsåenparametervikan
justere for at treningen skal gå best mulig, men denne er ikke en del av modellen. Det er en såkalt
hyperparameter. Hyperparametre er parametre som definerer læringsprosessen, men ikke modellen.
Det er viktigå forstå forskjellen på (modell)parametre og hyperparametre.
Vi trenger er uttrykk for den deriverte av tapsfunksjonen med hensyn på modellens parametre, altså
hver w , og b. Det er en god øvelseå gjøre dette for hånd, og nyttige relasjoner er
i
∂ 1
lnx= (14)
∂x x
∂
σ(z)=σ(z)(1−σ(z)) (15)
∂z
∂f ∂f ∂u
= . (16)
∂x ∂u∂x
Riktig uttrykk for de deriverte er
∂L ∂
= [−ylnσ(wx+b)−(1−y)ln(1−σ(wx+b))] (17)
∂w ∂w
j j
1 ∂ 1 ∂
=−y σ(wx+b)+(1−y) (1−σ(wx+b)) (18)
σ(·)∂w 1−σ(·)∂w
j j
−y(1−σ(·))+(1−y)σ(·) ∂
= σ(wx+b) (19)
σ(·)(1−σ(·)) ∂w
j
σ(·)−y ∂
= σ(·)(1−σ(·)) (wx+b) (20)
σ(·)(1−σ(·)) ∂w
j
=(σ(wx+b)−y)x (21)
j
=(y −y)x (22)
pred j
∂L
=... (23)
∂b
∂
=(σ(wx+b)−y) (wx+b) (24)
∂b
=(y −y). (25)
pred

## 1.2.3 Trening
<!-- side 8 -->

Viharalleredekommetlangtpåveiforågjøremaskinlæring: Viharenmodell,vivethvilkeparametre
som definerer den, vi har en tapsfunksjon, og vi har et uttrykk forå oppdatere parameterverdiene slik
attapetminker. Nårviharlagetetprogramsomutførerdissestegene,harvilagetenlæringsalgoritme.
En måteå strukturere et slikt program er gjennom følgende klasse og funksjonalitet (dere må skrive
inn koden for funksjonene selv):
class LogisticRegression:
def __init__(self, learning_rate=0.1, epochs=1000):
self.learning_rate = learning_rate
self.epochs = epochs
self.weights, self.bias = None, None
self.losses, self.train_accuracies = [], []
def sigmoid_function(self, x):
def _compute_loss(self, y, y_pred):
def compute_gradients(self, x, y, y_pred):
def update_parameters(self, grad_w, grad_b):
def accuracy(true_values, predictions):
return np.mean(true_values == predictions)
I tillegg trengs to viktige metoder: 1) fit, som tilpasser modellparametrene til treningsdataene. Her
angir parameteren epochs hvor mange ganger gradient descent skal brukes på alle treningsdataene.
2) predict, som returnerer modellens prediksjon på data. Disse to navnene, fit og predict, er så
standard i ulike maskinlæringsbiblioteker at man gjør lurt iå holde seg til dem og ikke dikte opp egne
navn,selvnårmanskriverkodeselvfrabunnen. Metodenekanforeksempelimplementeressomfølger
def fit(self, x, y):
self.weights = np.zeros(x.shape[1]) #x.shape = datapunkter, features
self.bias = 0
# Gradient Descent
for _ in range(self.epochs):
lin_model = np.matmul(self.weights, x.transpose()) + self.bias
y_pred = self._sigmoid(lin_model)
grad_w, grad_b = self.compute_gradients(x, y, y_pred)
self.update_parameters(grad_w, grad_b)
loss = self._compute_loss(y, y_pred)
pred_to_class = [1 if _y > 0.5 else 0 for _y in y_pred]
self.train_accuracies.append(accuracy(y, pred_to_class))
self.losses.append(loss)
def predict(self, x):
lin_model = np.matmul(x, self.weights) + self.bias
y_pred = self._sigmoid(lin_model)
return [1 if _y > 0.5 else 0 for _y in y_pred]
Nårkodenforlæringasalgoritmenerferdigskrevet,ernestestegåtaibrukdataenetilåtrenemodellen.
Dettebørviikke brukeheledatasettettil. Nårvierferdigemedåtrenemodellenharvinemliglysttil
å undersøke hvor godt denne gjør det på data som ikke har blitt brukt tilå tilpasse parametrene. Et
sentralt mål innen maskinlæring erå lage modeller som klarerå generalisere, altså gjøre det godt på
nye data. Derforerdetstandardprosedyreådeleetdatasettiminimumtodeler,hvoravdenenedelen
er størst og utgjør treningsdata. Den andre, mindre delen representerer testdataene. Treningsdataene
brukes til parametertilpasning, mens testdataene ikke røres før modellen er ferdig tilpasset, og brukes
foråevalueremodellenførdennetasibruk. Forådeledatasettetitokanmetodentrain test split
fra biblioteket scikit-learn brukes.
Når læringsalgoritmen er på plass og dataene er splittet i en trenings- og en test-del, bør hele maskin-
læringsprosedyren se ut omtrent som følger.
# Training
train_epochs = 30
# Initialize and train the model
log_reg = LogisticRegression_(learning_rate=0.01, epochs=train_epochs)
log_reg.fit(X_train, y_train)
# Make predictions
predictions = log_reg.predict(X_test)

## 1.2.4 Evaluering
<!-- side 9 -->

Tenk på definisjonen av maskinlæring gitt i starten av kurset: Forå vite at programmet faktisk blir
bedretilåløseoppgavengjennomerfaring(data),trengervienmåteåmåleytelsen. Sometminimum
børvilagretapet(loss)ogtreffsikkerhet(accuracy)iløpetavtreningen,ogplottedisseettertreningen.
Dette kan gjøres med følgende kode, ved hjelp av biblioteket matplotlib,
epoch_list = np.arange(0, train_epochs,1)
plt.plot(epoch_list, log_reg.losses, c=’red’, label="Loss")
plt.plot(epoch_list, log_reg.train_accuracies, c=’blue’, label="Accuracy")
plt.legend()
plt.show()
og et eksempel på resulterende plott fra en vellykket treningsprosedyre er vist i figur 4. På dette
plottet ser vi at tapet er høyt i starten, og minker jevnt før det flater ut. Dette er bra; vi ønsker at
Figure 4: Eksempel på plott som viser tap (rød) og treffsikkerhet (blå) over epokene i en tren-
ingsprosedyre.
Table 4: Et utvalg metrikker vi kan beregne basert på verdiene i confusion matrix.
Betegnelse Uttrykk Alternative navn
True Positive Rate (TPR) TP = TP Sensitivitet, recall, sannsynlighet for deteksjon
P TP+FN
True Negative Rate (TNR) TN = TN Spesifisitet
N TN+FP
False Positive Rate (FPR) FP = FP Sannsynlighet for falsk alarm, (1 - spesifisitet)
N FP+TN
Positive Predictive Value (PPV) TP Precision
TP+FP
tapet skal minke. Treffsikkerheten starter derimot lavt, og øker før den flater ut. Dette er også bra; vi
ønsker økende treffsikkerhet. Til sammen gir disse to kurvene oss et bilde av en modell som lærer av
dataene, og en treningsprosedyre som har foregått lenge nok. Hadde kurvene ikke flatet ut, hadde vi
trengt flere epoker for at modellen skulle lære ferdig. I dette tilfellet kunne vi også stoppet treningen
tidligere, etter rundt 20-25 epoker.
Selv om tap og treffsikkerhet kan fortelle oss om modellen lærer fra dataene, forteller de mildt sagt
kun en liten del av historien, og gir oss ikke et godt bilde på hva modellen er god på eller hvilke typer
datapunkter den typisk gjør feil på. De gir oss ikke en god anledning tilå analysere modellens styrker
ogsvakheter. Videregirikketallsomangirtapogtreffsikkerhetintuitivtmeningformennesker. Vibør
derfor velge en eller flere metrikker forå angi modellens ytelse, og disse metrikkene bør gi mening for
mennesker. I motsetning til tapsfunksjonen trenger ikke metrikken(e) vi velgerå være deriverbar(e).
Oppgave: Hva er flere grunner til at vi ikke bør velge samme tapsfunksjon og evalueringsmetrikk?
Forklassifiseringsmodellerbaseresmangemetrikkerpåconfusionmatrix,hvisinnholdangirhvormange
av datapunktene klassifiseres riktig (true) og feilaktig (false) i de ulike klassene. I vårt tilfelle har vi
to klasser: 0 (negative), og 1 (positive), og vi kan sette opp en confusion matrix etter malen i figur 5.
Her plasseres de sanne prediksjonene (true positive/negative), altså prediksjonene som samsvarer med
target,pådiagonalen,ogdefalskeprediksjonene(falsepositive/negative)utenfordiagonalenimatrisen.
Basertpåverdieneiconfusionmatrixkanviregneutfleremetrikker, foreksempeldeangittitabell4.
Figure 5: Confusion matrix for binær klassifisering.
Oppgave: Du skal levere en maskinlæringsmodell til et sykehus som vil finne ut hvilke pasienter som
lider av en dødelig sykdom. (I dette scenariet er det veldig alvorlig om modellen får en falsk negativ.)
Hvilken metrikk bør modellen skåre høyt på? Senere skal du (du har myeå gjøre, ja) levere en modell
(a) (b)
Figure 6: ROC-kurven, som viser FPR og TPR for ulike klassifiseringsterskler i [0,1].
til klimaaktivister som vil skyte raketter på tomme passasjerfly. (I dette scenariet er det alvorlig om
modellen får en falsk positiv, fordi raketter er dyre.) Hvilken metrikk bør denne modellen skåre lavt
på?

## 1.2.5 Klassifiseringsterskel
<!-- side 11 -->

Modellenvårreturnererettalliintervallet(0,1),ogenenkelmåteågjøredetteomtilenklassifisering
er det vi gjorde i koden for fit og predict, nemlig følgende linje
[1 if _y > 0.5 else 0 for _y in y_pred]
hvor vi tolker en prediksjon som Survived=1 hvis y pred>0.5, og ellers Survived=0. Her er tallet 0.5
klassifiseringsterskelen, og vi kunne i prinsippet valgt et annet tall. Hvis det var viktig for osså være
forsiktig, altså ikke predikere at en person vil overleve med mindre modellen er helt sikker, kunne vi
valgt en terskel på for eksempel 0.7 i stedet. Hvilken terskel som bør velges er avhengig av problemet,
og vi kan studere hvilket utslag ulike terskler har på ulike metrikker.
Det vanligste erå studere FPR og TPR som funksjon av klassifiseringsterskelen. Det gir oss Receiver
Operating Characteristic (ROC)- kurven, se figur 6a. Her beregner vi både FPR og TPR for mange
ulike klassifiseringsterskler fra 1 til 0. Oppgave: Ønsker vi høy eller lav verdi for henholdsvis FPR
og TPR? Hva blir FPR og TPR for klassifiseringsterskel 0? Tilsvarende for 1?
Vi ønsker en høy TPR, altså sann positiv rate, mens vi ønsker at FPR, altså falsk positiv rate, holder
seglav. Hvisklassifiseringsterskelener1,vilnærmestingenprediksjonertolkessompositivklasse,slik
atbådeFPRogTPRerlave. Klassifiseringsterskelpå0tilsieratnærmestalleprediksjonertolkessom
positiv klasse, hvilket vil gi høye verdier for både FPR og TPR. Derfor starter ROC-kurven i (0,0) og
ender i (1,1). Det interessante er hva som skjer mellom disse punktene, særlig om TPR øker raskere
enn FPR, og for hvilke klassifiseringsterskel som gir best trade-off mellom de to. Oppgave: Hvordan
ser ROC-kurven ut for en modell som kaster mynt?
Uansett hvilken oppgave vi løser, ønsker vi en modell som har høy TPR og lav FPR: Des høyere
TPR per FPR, des bedre er modellen, for alle terskler. Tilfeldig gjetning (myntkast) gir diagonalen
(0,0)−(1,1), den stiplede linjen i figur 6b. Forå være bedre enn tilfeldig gjetning må kurven som
representerer modellen derfor ligge over diagonalen, og arealet under kurven (forkortet AUC, fra area
undercurve)værestørreenn0.5. Sidenbeggeaksenegårfra0til1erdetstørstemuligearealetunder
kurven 1. Dette arealet, ROC AUC, representerer sannsynligheten for at modellen vil predikere en
høyere verdi (nærmere 1 enn 0, for binær klassifisering) for et tilfeldig valgt positivt datapunkt enn
for et tilfeldig valgt negativt datapunkt.
Utover ROC-kurven kan vi i prinsippet plotte hvilke som helst metrikker for varierende klassifisering-
stersklerforåstuderemodellensoppførsel. Enannenvanligkurveåstudereerdensomviserprecision
og recall, se figur 7. Presisjon angir andel korrekt predikert positive per predikert positive, altså
TP
Precision= . (26)
TP +FP
Høy presisjon svarer til lavt relativt antall falske alarmer, siden TP da dominerer over FP. Recall
angir andel korrekt predikert positive per totalt positive, altså
TP
Recall= . (27)
TP +FN
Høy recall svarer til lavt antall missed cases, siden TP da dominerer over FN.
Når vi justerer klassifiseringsterskelen ser vi at det finnes en tradeoff mellom precision og recall; når
deneneøker,minkerdenandre. Hvasomerengodbalansemellomdeto,eravhengigavhvamodellen
skal brukes til. Hvis falsk alarm er dyrt (for eksempel fører til en utrykning), er høy presisjon viktig.
Hvis kostnaden medå bomme på en positiv instans er høy (for eksempel diagnostisering av alvorlige
sykdommer), er høy recall viktig. Oppgave: Når er presisjon = recall? Hvilken av disse metrikkene
er avhengig av fordelingen mellom klassene?
Figure 7: Precision-recall-kurven for ulike klassifiseringsterskler i [0,1].

## 1.2.6 Kort om entropi og cross entropy loss
<!-- side 12 -->

I informasjonsteori er entropi (også kalt Shannon entropy) en måte å kvantisere usikkerheten eller
mengden informasjon forbundet med de mulige tilstandene x til en tilfeldig variabel X:
(cid:20) (cid:21)
H(X)=E . (28)
logp(X)
Denne forventningsverdien kan vi beregne som vanlig,
(cid:88)
H(X)=− p(x)logp(x). (29)
x∈X
Vår tilgang til den tilfeldige variabelen X kommer fra fordelingen p som vi gjør trekninger fra, så vi
kan skrive dette som
(cid:88)
H(p)=− p(x )logp(x )). (30)
i i
i
Figure 8: To delvis overlappende mengder A og B.
Altså: observasjonene kommer fra fordelingen p – alltid. I eksempelet med Titanic-dataene represen-
tererpfordelingenavtargets(Survived)idatasettet. Itilleggharvienfordelingq,somrepresenterer
hva vi tror, det vil si hva modellen vår predikerer. Kryss-entropien (cross entropy) representerer da
forskjellen mellom to to ulike sannsynlighetsfordelingene, der p er fordelingen til de faktiske obser-
vasjonene (dataene), mens q er fordelingen av estimatene våre,
(cid:88)
H(p,q)=− p(x )logq(x )). (31)
i i
i
Se igjen på likning 28. Forventningsverdien er over faktiske observasjoner, mens fordelingen i log-
aritmen er det vi tror vi kommer til å observere. Sammenlikn så likning 31 med tapsfunksjonen i
likning 10. Den ene sannsynlighetsfordelingen representerer labels i datasettet, mens den andre rep-
resenterer modellens prediksjoner. Tapsfunksjonen forteller oss altså om forskjellen mellom de to
fordelingene, og siden målet vårt erå lage en klassifiseringsmodell, ønsker vi at forskjellen mellom de
to fordelingene er minst mulig. I tilfellet ikke-binær klassifisering, altså klassifisering til flere enn to
klasser, generaliserer uttrykket i likning 31 til
(cid:88)
L(yˆ,y)=− y log(yˆ), (32)
i i
i
hvor summen går over alle klassene i.

## 1.2.7 Bayes’ teorem
<!-- side 13 -->

Se på de to delvis overlappende mengdene A og B i figur 8. Sannsynligheten forå trekke et element
fra overlappet A∩B er
P(A∩B)=P(A|B)P(B)=P(B|A)P(A). (33)
Vi beholder den siste relasjonen, og omskriver den som følger
P(B|A)P(A)
P(A|B)= . (34)
P(B)
Detteuttrykketholderuansettsansynlighetstolkning(frekventistiskellerBayesiansk),ogkallesBayes’
teorem. Når vi løser en klassifiseringsoppgave, somå beregne sannsynligheten for at en gitt passasjer
overleverTitanic-ulykken,ønskerviåestimerep(C |x),altsåsannsynlighetenforklassek(ivårttilfelle
k
kan k være 0 eller 1), betinget på en ekte observasjon x. Dette kan vi bruke uttrykket over til. For
enklere notasjon dropper vi vektornotasjonen på x, dvs vi skriver x uten fet skrift, i dette delkapitlet.
Vi skriver ut Bayes’ teorem forå få et uttrykk for sannsynligheten vi er ute etter:
p(x|C )p(C )
p(C |x)= k k . (35)
k p(x)
De ulike leddene i denne likningen betyr følgende
• p(C ) er a priori sannsynligheten for klasse, altså fordelingen av klassene i treningsdataene.
k
Denne omtales som prior, fordi det er sannsynligheten for klassetilhørighet vi kan estimere uten
å vite noe om det aktuelle datapunktet (legg merke til at x ikke forekommer i dette leddet).
• p(x) er fordelingen av selve dataene, uavhengig av klasse (legg merke til at C ikke forekommer
k
i dette leddet). Dette er den faktiske sannsynlighetsfordeligen av alle feature-verdiene for alle
dataene, og den har like mange dimensjoner som datasettet har features. Dette leddet omtales
som evidens.
• p(x|C )erdenbetingedesannsynlighetsfordelingenavdataenegittklassen,ogdeterenlikelihood.
k
Det er altså en egen sannsynlighetsfordeling – med like mange dimensjoner som datasettet har
features – for hver klasse, i vårt tilfelle to.
Når vi bruker maskinlæring, eller en hvilken som helst form for dataanalyse, tilå estimere klassen til
et datapunkt, er det nettopp p(C |x) vi prøverå estimere. Gitt likning 35, vet vi at det finnes et
k
analytisk uttrykk for p(C |x). Hvis vi klarerå beregne alle leddene i likning 35 trenger vi derfor ikke
k
å estimere sannsynligheten; vi kan i prinsippet bare beregne den nøyaktig. Hvorfor gjør vi ikke det?
La oss se på leddene i likning 35 for Titanic-dataene. Kan vi beregne alle leddene nøyaktig?
• p(C ) kan beregnes: Det er antallet henholdsvis Survived=0 og Survived=1 per totalt antall
k
datapunter. Hvis 50% av passasjerende overlever, er dette leddet lik 0.5.
• p(x) er problematiskå skrive ned, siden vi trenger informasjon om alle mulige verdier av alle
featurene i datasettet, og det videre ikke er sikkert at vi vil ende opp med en funksjon med et
analytisk uttrykk. Det kan derfor bli vanskeligå finne den faktiske verdien til sannsynligheten
for et gitt datapunkt x. Men: siden dette leddet er uavhengig av klasse, vil det ha samme verdi
for begge klassene. Så lenge vi bare er ute etter sannsynligheten for en klasse gitt data, kan vi
derfor ignorere det, da det bidrar like mye til begge klassene.
Vi dropper p(x), og gjør om sannsynligheten for klasse til følgende proporsjonalitet
p(C |x)∝p(x|C )p(C ). (36)
k k k
Nå gjenstår kun leddet som representerer likelihood for data gitt klasse:
• p(x|C ) er utfordrendeå beregne så lenge features x er avhengige av hverandre, siden vi da må
k
finne et uttrykk for en flerdimensjonal simultanfordeling. Dette er vanskelig (kanskje umulig) på
samme måte som for evidensen p(x).
En løsning som noen ganger fungerer i praksis, erå anta uavhengige features. For eksempel kan en
passasjerværekvinneellermannuavhengigavalder; verdientilfeature“Sex”eruavhengig avfeature
“Age”. Så lenge dette holder for alle features, kan vi skrive om simultanfordelingen til et produkt av
fordelinger over hver enkelt feature, og estimatet vårt forenkles til
n
(cid:89)
p(C |x)∝p(C ) p(x |C ). (37)
k k i k
i=1
Dette kalles Naïv Bayes, fordi det er naïvtå behandle features som uavhengige (selv om det i noen
tilfeller kan stemme), og den tilsvarende sannsynligheten for klassetilhørighet er
n
(cid:89)
yˆ= argmax p(C ) p(x |C ). (38)
k i k
k∈{1,...,n} i=1
Iforelesningenegårviigjennometeksempelhvorviestimerersannsynlighetforoverlevelsefortoulike
tilfeller 0 og 1, og finner ut at denne er mindre for tilfelle 0 enn for tilfelle 1, altså
n n
(cid:89) (cid:89)
p(C ) p(x|C )>p(C ) p(x|C ). (39)
1 1 0 0
i=1 i=1
Konklusjonen blir da at sannsynligheten forå overleve er større enn sannsynligheten forå dø, for det
aktuelle datapunktet. Denne sannsynligheten er ikke kalibrert, så den er ikke en ekte posterior, men
så lenge vi kun er ute etterå finne ut det relative forholdet mellom to sannsynligheter og beregner
begge på samme måte (og antakelsene våre holder!), er vi good.

## 1.2.8 Ikke-uavhengige features
<!-- side 15 -->

Om vi studerer featurene i Titanic-dataene ser vi at enkelte features sannsynligvis ikke er uavhengige.
Oppgave: Hvilke features er ikke uavhengige? Hint: bruk følgende kode tilå plotte Passenger class
vs Sex, som vi gjorde i forelesningen. Hva ser du? (sånn utover at livet er lettere når man lærer segå
bruke panda’s innebygde funksjoner)
p_cond = pd.crosstab(df.Pclass, df.Sex, normalize="index")
p_marg = df.Sex.value_counts(normalize=True)
ax = p_cond.plot.bar(rot=0)
plt.show()
Naïv Bayes er fint så lenge antakelsen om uavhengige features holder, i det minste tilnærmingsvis.
Menhvaomfeaturesikkeeruavhengige? Laossgåtilbaketiluttrykketfralikning35, gjentattunder,
p(x|C )p(C )
p(C |x)= k k . (40)
k p(x)
Vi har fordelingen av klassene fra datasettet, så p(C ) klarer viå estimere. Fordelingen av dataene,
k
p(x)ervanskeligere(ogkanskjeumulig),mensidendeneruavhengigavklasseerdenbareenskalering
av sannsynlighetsestimatet. Om vi kun ønskerå finne ut om en passasjer, representert av x, forventes
å overleve eller ikke, kan vi se på forholdet
p(x|C )p(C )
0 0 . (41)
p(x|C )p(C )
1 1
Det vi trengerå estimere er altså simultanfordelingen av features betinget på hver klasse. Konkret i
vårt lille Titanic-tilfelle altså p(Sex,Age,Pclass|Survived=0) og p(Sex,Age,Pclass|Survived=1).
Oppgave: Du kan gjøre disse estimatene selv, og det beste erå lage en tabell. Da må du kombinere
hververdiavx medhververdiavx ,ogsåigjenmedx (derdukanvelgeselvhvilkenfeaturex ,x ,x
1 2 3 1 2 3
erhenholdsvisSex,AgeogPclass. Detspilleringenrolleforresultatet.) SidenAgeerkontinuerligkan
duforeksempeldeledenneinnitikategoriervedhjelpnumpy.histogram(data[feature], bins=10).
Det du får ut av dette er et bedre estimat av yˆenn vi fikk ved bruk av naïv Bayes, men forskjellen er
ikke veldig stor. Du kan også inspisere tabellen og observere at mange av cellene inneholder svært få
datapunkter. Dette er en miniversjon av dimensjonsforbannelsen, som er neste tema.
La oss anta at vi har tre kontinuerlige features, i stedet for Titanic-tilfellet der både Sex og Pclass er
kategoriske, og at vi har lyst tilå estimere simultanfordelingen til disse tre. Vi klarer ikkeå finne et
analytisk uttrykk for denne simultanfordelingen, men vi prøver oss altså på et estimat. Vi kan lage
en tabell, men det er lettereå se for oss et histogram (som er en slags visualisering av en tabell). La
oss si at vi tenker at 10 bins er stor nok oppløsning per akse (altså per feature), og at vi krever 10
datapunkter per bin.
Oppgave: Hvor mange datapunkter trenger vi da for tre features? Hva er sammenhengen mellom
antall features, antall bins og antall datapunkter?
Du kommer nok frem til at dette er en simultanfordeling som beregningsmessig lar seg estimere, siden
vi bare trenger 10,000 datapunkter.

## 1.2.9 Dimensjonsforbannelsen
<!-- side 15 -->

Om vi ønsker å estimere en d-dimensjonal fordeling, er antallet datapunkter som må samles inn
avhengig av d. For å få en intuisjon kan vi tenke oss at vi igjen estimerer fordelingen ved hjelp
av et histogram med 10 bins og der vi er fornøyde med 10 datapunkter per bin.
Oppgave: Hvordan skalerer sammenhengen mellom dimensioner (i vårt tilfelle antall features) og
antall datapunkter vi trenger?
Tabell 5 viser antall nødvendige datapunkter for fire ulike verdier av d. Vedien d = 784 er tatt med
fordidetteerdimensjonalitetentildetmyebruktedatasettetMNIST,sombeståravhåndskrevnesifre
i sort-hvitt (gjerne sjekk det ut). Til sammenlikning er det ∼1082 atomer i universet.
Table 5
Dimensjoner d Bins Datapunkter
1 10 102
3 103 104
10 1010 1011
784 10784 10785
Oppgave: Finn ut hvor stor andel av en d-dimensjonal sfære (kule) som ligger i et tynt skall med
tykkelse ϵ. Volumet til en 3-dimensjonal kule er 4πr3, og den D-dimensjonale generaliseringen er
K rD. Du trenger ikkeå tenke på prefaktoren siden du kun er ute etterå finne ut hvor stor andel
D
som ligger i et ϵ-skall. Hint: Velg en enhetskube (r =1) og lag et uttrykk for andel volum. Svaret blir
en funksjon av ϵ.

## 1.2.10 Trening på ubalanserte data
<!-- side 16 -->

En masterstudent blir invitert til jobbintervju som ML-utvikler. Under intervjuet får kandidaten
følgende spørsmål: “Vi har et datasett fra det norske helsevesenet, og skal lage en modell som klassi-
fiserer friske og syke personer. Modellen vår får en treffsikkerhet (accuracy) på 99%, men den klarer
nesten ikkeå identifisere syke personer. Hva har skjedd?” Oppgave: Hva vil du svare på dette?
Detteviltypiskskjeomdeneneklassen(foreksempeldensomrepresenterersykepersoner)inneholder
mangefærredatapunkterenndenandre. Førstnevneklasseerdaunderrepresentert,mensklassenmed
flere datapunkter er overrepresentert. Hvis forskjellen mellom antall datapunkter i de to klassene er
veldig stor, vil modellen belønnes om den bare predikerer at alle datapunktene tilhører den overrepre-
senterteklassen. Dettekallesogsåprior probability shift,sidenmodellprediksjonendomineresavp(C )
k
i likning 35, og ikke av leddene som inneholder informasjon om feature-verdiene. Modellen vil slik
oppnå høy treffsikkerhet, men likevel ikke være det minste nyttig. Mens en slik modell vil ha en høy
treffsikkerhetogenhøyROCAUC,vilandremetrikkerværelave. Idettetilfellet,derpositivklasseer
underrepresentert, vil recall vil være oppsiktsvekkende lav. Dette illustrerer at det er viktigå studere
flere ulike metrikker forå forstå modellens svakheter. Videre forteller det oss at vi må gjøre noe mer
forå få en modell tilå bli nyttig når vi har skjevfordeling mellom klassene i (trenings-)datasettet.
Den enkleste tilpasningen vi kan gjøre erå endre klassifiseringsterskel i uttrykket
y_pred = [1 if _y > 0.5 else 0 for _y in y_pred]
fra 0.5 til en verdi som gir modellen høyere verdi på de andre metrikkene. Terskelen kan for eksempel
bestemmes basert på precision-recall-plottet. Ved å senke terskelen kan vi øke andelen predicted
positive,fordialtoverterskelenpredikeressom1. Åmaksimereénmetrikkgårsomoftestpåbekostning
av andre metrikker, og vi må huske atå justere denne terskelen ikke forbedrer modellen: det endrer
kun hvordan vi forholder oss til modellens prediksjoner. Utoverå endre terskelen kan vi også justere
dataene eller tapsfuksjonen.
Resampling
Når vi gjør resampling forå gå fra et skjevfordelt til et jevnt fordelt datasett, har vi to muligheter.
• Undersampling: Her trekker vi like mange datapunkter fra den overrepresenterte klassen som
vi har tilgjengelig i den underrepresenterte klassen. Da ender vi opp med et datasett bestående
av like mange datapunkter fra hver klasse, men potensielt veldig få datapunkter totalt. Dette
kan føre til at modellen som trenes på dataene undertilpasser (underfit).
• Oversampling: Her kopierer vi instanser fra den underrepresenterte klassen, inntil vi har like
mange datapunkter fra den underrepresenterte som fra den overrepresenterte klassen. Da ender
viogsåoppmedlikemangedatapunkterfrahverklasse,menpotensieltmangeduplikaterfraden
underrepresenterte klassen. Dette kan føre til at modellen som trenes på dataene overtilpasser
(overfit).
Dissetoteknikkenekannaturligviskombineres,altsåatmanbådeundersamplerdenoverrepresenterte
klassen og oversampler fra den underrepresenterte klassen, slik at man til sammen har balanserte
klasser i det resulterende datasettet. Oppgave: Vi har et datasett med 100 datapunkter fra den ene
klassen, og 1000 fra den andre. Hvor mange datapunkter får vi totalt om vi gjør kun undersampling?
Hvor mange får vi totalt om vi gjør kun oversampling, og hvor mange duplikater får vi?
Vektet tapsfunksjon
Istedetforåendrehvilkedatamodellenfårtilgangtil, kanvifortellemodellenatenavklassene(ofte
den underrepresenterte) er ekstra viktig. Dette gjør vi gjennomå straffe feilprediksjoner (gi høyere
tap) på den viktigste klassen høyere relativt til de(n) andre klassen(e). Se igjen på tapsfuksjonen
binary cross entropy fra likning 10:
L(y ,y)=−ylny −(1−y)ln(1−y ) (42)
pred pred pred
Hvordan kan vi tilpasse denne slik at klassene vektes ulikt?
Hvis target y = 0 er første ledd null, og bidrar ikke til tapet. Kun andre ledd bidrar til tapet, som
betyr at en vekting av andre ledd i likning 10 vil øke tapet for datapunkter med y = 0. Det samme
gjelder for target y = 1: her er andre ledd null, og bidrar ikke til tapet. Vekting av det første leddet
vil da føre til høyere loss for klassen med label y =1. Den vektede tapsfunksjonen blir derfor
L(y ,y)=−w ylny −w (1−y)ln(1−y ), (43)
pred 1 pred 0 pred
hvor w og w representerer vekter for klasser 0 og 1. Hvis verdien på w er betydelig større enn
0 1 0
verdien på w vil modellen prioritereå predikere riktig verdi for datapunkter med label y =0, og vice
versa.

## 1.3 Beslutningstrær
<!-- side 17 -->



## 1.3.1 Noder
<!-- side 17 -->

Beslutningstrær hjelper osså ta beslutninger for datasett vedå splitte dataene i noder som til sam-
men utgjør en trestruktur, se figur 9a. Rotnoden (root node) er starten på treet, der data med alle
featureskommerinn. Underrotnodenfinnervibeslutningsnoder (decisionnodes). Rotnodenogbeslut-
ningsnodeneharkriterierforåsplittedataene(splittingcriteria). Beslutningsnodererallenoderunder
rotnoden som har ett eller flere splitting criteria. Nederst i treet finner vi løvnoder (leaf nodes), som
ikke splitter dataene. De inneholder predikert verdi for datainstansen som ble sendt gjennom treet.
Beslutningstrær består av trestumper (tree stumps), se figur 9b. En trestump består av én rotnode
og n løvnoder, for n mulige utfall. Vi holder oss til tilfellet n=2, altså at to mulige utfall etter hver
splitt. Hver beslutningsnode splitter dataene på én feature, gjennom et såkalt splitt-kriterium. Det
samme treningsdatasettet og labels kan gi opphav til mange ulike beslutningstrær.
Somellersimaskinlæring,brukervitreningsdataforåbyggemodellen,idettetilfelletbeslutningstreet.
Treningsdataene brukes forå finne ut hvilke trestumper (og tilhørende beslutningskriterier) som bør
settes sammen for å lage treet. Når vi bygger beslutningstrær ønsker vi alltid å velge det splitt-
kriteriet som lar oss ta beslutningen tidligst mulig, altså reduserer usikkerheten mest mulig. Redusert
usikkerhet er endringen iusikkerhetettersammenliknet med før splitt. I hovedsak brukes følgende tre
metrikker forå måle hvor mye et splitt-kriterium (feature og verdi) reduserer usikkerheten:
• Log loss
• Gini impurity
• Entropi
Den første av disse, log loss, kjenner vi fra før, se likning 10 for binær klassifisering og likning 32 for
multiklasse.
(a) (b)
Figure 9: Skisser av (a) et beslutningstre, og (b) en stump.

## 1.3.2 Gini Impurity
<!-- side 18 -->

Gini-urenheten er et tall i [0,0.5] som angir sannsynligheten for at et nytt, tilfeldig datapunkt feilklas-
sifiseres hvis det gis et tilfeldig label i henhold til klassedistribusjonen i datasettet. Gitt et datasett D
bestående av datapunkter fra k klasser, med sannsynlighet p for at en instans tilhører klassen i ved
i
en gitt node, er datasettets Gini-urenhet
k
(cid:88)
Gini(D)=1− p2. (44)
i
i=1
Intuitivt: Du har en pose med kuler i ulike farger, hvor farge representerer klasse. Gini-urenheten
måler hvor sannsynlig det er at du gjetter feil farge på en tilfeldig trukket kule, hvis du gjetter at
kulens farge følger distribusjonen av farger i posen. Lav Gini-urenhet representerer scenariet der de
fleste kulene har samme farge, slik at det er lav sannsynlighet forå gjette feil farge på en tilfeldig
trukketkule. Datasettetregnesdaåhalavurenhet. HøyGini-urenhetrepresenterermotsattscenario,
der klassene er forholdsvis likt representert, og det er høy sannsynlighet forå gjette feil farge på en
tilfeldig trukket kule. Datasettet regnes daå ha høy urenhet.
HvisetdatasetD splittespåfeaturef tiltosubsettD ogD medhenholdsvisn ogn datapunkter,
1 2 1 2
har vi
n n
Gini (D)= 1Gini(D )+ 2Gini(D ). (45)
f n 1 n 2
Table 6: Eksempler på Gini-urenhet for ulike splits.
Antall Sannsynlighet Gini
n n p p 1−p2−p2
1 2 1 2 1 2
Alt A 0 10 0 1 1−02−12 =0
Alt B 3 7 0.3 0.7 1−0.32−0.72 =0.42
Alt C 5 5 0.5 0.5 1−0.52−0.52 =0.5
Oppgave: Se på tabell 6. Hvilken splitt bør vi velge, og hvorfor? Svar: Vi bør velgeå splitte på den
featuren som gir lavest Gini-urenhet.

## 1.3.3 Entropi
<!-- side 19 -->

Gitt en sannsynlighetsfordeling over k klasser, er sannsynligheten for hver klasse p . Entropien til
i
fordelingen er
k
(cid:88)
I(p ,...,p )=− p log (p ). (46)
1 k i 2 i
i=1
Oppgave: Hva er entropien til fordelingen (0.5,0.5), og fordelingen (0.01,0.99)?
Den maksimale entropien til en binær fordeling er 1, som svarer til lik sannsynlighet per klasse. Den
minimale entropien er 0, som svarer til at alle datapunktene tilhører samme klasse.
Før vi splitter på en feature har vi et datasett D med p positive og n negative instanser. Dette svarer
til en binær distribusjon der positiv klasse har sannsynlighet p , og negativ klasse har sannsynlighet
p+n
n , og entropien er
p+n
(cid:18) (cid:19)
p n
I =I(p ,p )=I , . (47)
før positiv negativ p+n p+n
Etter at treet splitter på en feature, har vi to nye datasett, D og D (ett på hver side av splitten).
1 2
Den forventede entropien etter denne splitten er generelt
s (cid:18) (cid:19)
E[I ]=
(cid:88)p
i
+n
iI
p
i ,
n
i . (48)
etter p+n p +n p +n
i i i i
i=1
hvor s angir antall splitt, i vårt tilfelle s = 2, slik at i = 1,2. Vi er interessert i forskjellen i entropi,
altså entropien før og etter en valgt splitt:
(cid:18) (cid:19) s (cid:18) (cid:19)
∆I=I −E[I ]=I
p
,
n
−
(cid:88)p
i
+n
iI
p
i ,
n
i , (49)
før etter p+n p+n p+n p +n p +n
i i i i
i=1
og vi bør velge den splitten som gir størst endring i entropi.
Oppgave: Vi har en beslutningsnode bestående av p = 9 positive og n = 5 negative datapunkter.
VisatI =0.94. Antaderetteratvisplitterdatasettetslikatvifårtonyedatasettmedhenholdsvis
før
(p = 4,n = 5) og (p = 5,n = 0). Regn ut endringen i entropi (svaret står rett under, men prøv
1 1 2 2
selv).
(cid:18) (cid:19) (cid:18) (cid:19) (cid:18) (cid:19)
4+5 4 5 5 5 0 9 4 4 5 5
E[I ]= I , + I , =− log + log +0≈0.64. (50)
etter 9+5 9 9 9+5 5 5 14 9 2 9 9 2 9

## 1.3.4 Bygge beslutningstrær
<!-- side 19 -->

Idettekursettrengerdereikkebyggebeslutningstrærselv, menderebørkunneangipseudokodeforå
byggeetbeslutningstre. Forålagebeslutningstrærbrukervisomoftestbiblioteketsklearn, medden
innebygde DecisionTreeClassifier. Denne lar oss velge mellom de splitt-kriteriene Gini impurity,
entropy og log loss.
Oppgave: Plott Gini impurity og entropi i intervallet [0,1]. Er kurvene like?
Gini impurity og entropi oppfører seg likt, og vil i hovedsak gi opphav til samme feature splits. Hov-
edforskjellen mellom de to ligger i at beregning av entropi krever en ekstra logaritme, som koster mer
å beregne. Gini impurity er derfor mindre beregningstungt, altså raskereå regne ut. Denne er også
default i sklearn.DecisionTreeClassifier.
Oppgave: Sammenliknuttrykkeneforlogloss,entropiogGini-urenhet. Liknernoenavdisse? Hvilken
går raskestå evaluere?
Utover valg av beslutningskriterier, må vi besvare to ytterligere spørsmål:
• Når skal vi slutteå splitte, selv om nederste node har instanser fra begge klassene?
• Hva gjør vi med eventuelle løvnoder som har instanser fra begge klassene?
Tre tilfeller kan oppstå der vi må slutteå splitte: Når
1. det ikke finnes flere features å splitte på. Vi kan havne i en situasjon der vi har splittet på
alle tilgjengelige features, men fremdeles ikke har klartå lage løvnoder som tilordner alle tren-
ingsdatapunktene til riktig klasse. Hvis vi ikke har flere featureså splitte på, kan vi ikke lage
en beslutningsnode: da er inneværende node nødvendigvis en løvnode, selv om den inneholder
datapunkter fra flere klasser,
2. det ikke finnes flere datapunkterå teste. Vi kan havne i en situasjon der alle kombinasjoner av
features som er tilgjengelig i dataene har blitt testet, uten at alle tenkelige kombinasjoner av
features er testet,
3. treet har nådd en predefinert maksimal dybde. Dette er en hyperparameter som velges før man
begynnerå bygge treet.
Etterattreeterbyggetvilvisannsynligvishaløvnodersominneholdertreningsdatapunkterfrabegge
klasser. For å bestemme hvilken beslutning en slik node kan ta har vi flere muligheter, hvorav de
vanligste erå returnere
1. dendominanteklasseninoden,altsålabeltilsvarendedendominanteklassenfratreningsdataene
i løvnoden,
2. et tilfeldig trukket label fra treningsdataene, altså a priori-sannsynligheten.
Vikannåsettesammenaltviharværtgjennomtilenalgoritmesomrekursivtbyggeretbeslutningstre,
se pseudokode under.
def build_decision_tree(data, features, depth):
if (all data in same class):
return class label
elif (no features left to test) or (depth >= max_depth):
return 1 if p/(p+n) > n/(p+n) else 0
elif (no data left to test):
return (dominant class in parent node)
else:
choose best_feature f for split
partition data based on f
for each data partition:
build_decision_tree(data partition, features - best_feature, depth+1)
I forelesningen brukes datasettet Palmer Penguins som eksempel. Dette datasettet er superpopulært
innenformaskinlæring,ogkanbrukestilmyemerennålageetbeslutningstresomfinnerpingvinkjønn
basertpåkroppsektogflipperlength. Hvisduvilreproduserenoenaveksemplene,finnerduen.csv-fil
på internett som inneholder dataene, og kommer i gang med koden under.
df = pd.read_csv("data/penguins_lter.csv")
df = df[["Flipper Length (mm)" , "Body Mass (g)", "Sex"]].dropna()
label_encoder = LabelEncoder()
df["Sex"] = label_encoder.fit_transform(df["Sex"])
X_data = df[["Flipper Length (mm)" , "Body Mass (g)"]].values
y_data = df[’Sex’].values
X_train, X_test, y_train, y_test = train_test_split(X_data, y_data, test_size=0.3)
clf = tree.DecisionTreeClassifier(max_depth=7, criterion="log_loss")
clf.fit(X_train, y_train)
Ogsåerdetbareåkoseseg. Foråvisualiserebeslutningsflatenslikvisåpåiforelesning,kandubruke
from sklearn.inspection import DecisionBoundaryDisplay.
