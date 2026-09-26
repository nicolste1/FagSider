# Tekstuttrekk av kilden

Kilde: `TDT4172_forelesningsnotater.pdf` · datert September 22, 2026 · 39 sider · sha256 `87105d7872ea…`

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
å se på plottene i figur 1 får vi allerede en idé om at passasjerer i Pclass=0, kvinnelige passasjerer og
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
et minimum har funnet et globalt minimum. Hvilken retning bør vi bevege oss i? I hvilket rom? Tenk
over dette før du leser videre.
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
enklere notasjon dropper vi vektornotasjonen på x, dvs vi skriver x uten fet skrift heretter. Vi skriver
ut Bayes’ teorem forå få et uttrykk for sannsynligheten vi er ute etter:
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
datapunkter per bin. Hvor mange datapunkter trenger vi da for tre features? Hva er sammenhengen
mellom antall features, antall bins og antall datapunkter? Tenk over dette før du leser videre.
Du kommer nok frem til at dette er en simultanfordeling som beregningsmessig lar seg estimere, siden
vi bare trenger 10,000 datapunkter.

## 1.2.9 Dimensjonsforbannelsen
<!-- side 15 -->

Om vi ønsker å estimere en d-dimensjonal fordeling, er antallet datapunkter som må samles inn
avhengig av d. For å få en intuisjon kan vi tenke oss at vi igjen estimerer fordelingen ved hjelp
av et histogram med 10 bins og der vi er fornøyde med 10 datapunkter per bin. Hvordan skalerer
sammenhengen mellom dimensioner (i vårt tilfelle antall features) og antall datapunkter vi trenger?
Sjekk tabellen under når du tror du har svaret.
Tabell 5 viser antall nødvendige datapunkter for fire ulike verdier av d. Vedien d = 784 er tatt med
fordidetteerdimensjonalitetentildetmyebruktedatasettetMNIST,sombeståravhåndskrevnesifre
i sort-hvitt (gjerne sjekk det ut). Til sammenlikning er det ∼1082 atomer i universet.
Oppgave: Finn ut hvor stor andel av en d-dimensjonal sfære (kule) som ligger i et tynt skall med
tykkelse ϵ. Volumet til en 3-dimensjonal kule er 4πr3, og den D-dimensjonale generaliseringen er
Table 5
Dimensjoner d Bins Datapunkter
1 10 102
3 103 104
10 1010 1011
784 10784 10785
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
(a) (b)
Figure 9: Skisser av (a) et beslutningstre, og (b) en stump.
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
<!-- side 18 -->

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
X_train, X_test, y_train, y_test = train_test_split(X_data, y_data,
test_size=0.3)
clf = tree.DecisionTreeClassifier(max_depth=7, criterion="log_loss")
clf.fit(X_train, y_train)
Ogsåerdetbareåkoseseg. Foråvisualiserebeslutningsflatenslikvisåpåiforelesning,kandubruke
from sklearn.inspection import DecisionBoundaryDisplay.

## 1.4 Regresjon
<!-- side 20 -->



## 1.4.1 Data og tapsfunksjon
<!-- side 20 -->

Se på datasettet i tabell 7, og tilhørende figur 10a. Igjen representerer y targets (“riktig svar”), så vi
holder oss i regimet til veiledet læring. Men da vi gjorde klassifisering hadde vi targets som fordelte
seg i predefinerte kategorier (to kategorier i det binære tilfellet). Disse nye dataene våre tilhører
ikkekategorier,menharkontinuerligeverdier. Viharaltsåikkelengermedenklassifiseringsoppgaveå
gjøre. Prediksjontilkontinuerligeverdierkallesregresjon. Eksemplerpåregresjonsoppgaverinkluderer
å predikere skåren til en film, estimere formuesverdien til en bolig, forutse sykefraværet til en ansatt,
osv. Generelt: estimering av en (eller flere) kontinuerlig(e) verdi(er). Vi starter igjen med det
(a) (b)
Figure 10: (a) Datasett til lineær regresjon, og (b) en lineær regresjonsmodell med høy bias.
enkleste tilfellet, og den enkleste regresjonsmodellen er en lineær modell. Likningen for en lineær
regresjonsmodell er
f(x)=β +β x +β x +...β x . (51)
0 1 1 2 2 n n
Modellen har en parameter β per feature x (kolonne i datasettet), og en parameter β kalt bias.
i i 0
Til sammen har vi (n +1) parametre for n features. Vi kan gjenbruke mesteparten av koden fra
klassifiseringen forå trene denne modellen, altså tilpasse parametrene basert på dataene. Vi må igjen
bruke gradient descent forå optimalisere parametrene.
Oppgave: Hva kan vi ikke gjenbruke fra klassifiseringstilfellet?
Vi trenger en tapsfunksjon som guider læringsalgoritmens justering av modellparametrene, altså et
kvantitativt mål på hvor godt modellprediksjonen passer med target per datainstans. Men regresjons-
modellenvårgjørikkeklassifisering,såvikanikkegjenbruketapsfuksjonenfratidligere. Denvanligste
tapsfunksjonen for regresjon er mean squared error:
N
1 (cid:88)(cid:16) (cid:17)2
MSE(x)= y(i)−f(x(i)) . (52)
2N
i=1
Her er y(i) er target for datapunkt x(i), f er modellen, og summen (hhv gjennomsnittet) går over alle
N instansene (radene) i datasettet. Faktoren 1 er kun for convenience, og det finnes definisjoner av
MSE der den ikke er med. MSE er liten hvis modellens prediksjon f(x) er nærme den sanne verdien
y, og stor hvis de to er ulike.
Hvis vi har et datasett med én feature x , har den lineære regresjonsmodellen to parametre, og kan
skrives som
f(x)=β +β x . (53)
0 1 1
Dennelikningenerpåsammeformsomlikning2,menmedandreparameternavn,valgtkunforåskille
dettetilfellettydeligfralogistiskregresjon. Bias-parameterenβ ilikning53angirhvorregresjonslinjen
krysser y-aksen; det er funksjonsverdien i x = 0. Dette leddet forflytter alle modellens prediksjoner
med en konstant verdi. Tenk på det som en “baseline”-funksjonsverdi uten kjennkap til noen verdier
av featurene, som justeres til modellens prediksjon når featureverdiene tas i betraktning. Da kommer
den andre parameteren, β , i spill. Denne angir stigningstallet til linja.
Den deriverte av tapsfunksjonen med hensyn på de to parametrene er
N
∂L 1 (cid:88) ∂ (cid:16) (cid:17)2
= y(i)−β x(i)−β (54)
∂β 2N ∂β 1 0
0 0
i=1
N
1 (cid:88)(cid:16) (cid:17)
= β x(i)+β −y(i) (55)
N 1 0
i=1
N
∂L 1 (cid:88) (cid:16) (cid:17)
= x(i) β x(i)+β −y(i) . (56)
∂β N 1 0
i=1
Her ser vi nytten av faktoren 1: den oppheves av potensen under derivasjonen. Vi kan kontrollere
at de deriverte gir mening gjennom kontrollspørsmål. Oppgave: Modellen oppfører seg som vist i
figur 10b, altså den overestimerer konsekvent for alle verdier av x . Har modellen for lav eller for høy
verdi av β ? Er verdien til ∂L større eller mindre enn 0? Tenk over dette før du leser videre.
0 ∂β0
Svaret er at β er for stor. En modell med for høy bias har ∂L > 0, som vil si at tapet øker når β
0 ∂β0 0
øker. Oppgave: Hilken tilsvarende sjekk kan vi gjøre for β ?
Fragradiententiltapsfunksjonenfårvifølgendeoppdateringsregeltilparametreneiregresjonsmodellen
vår
N N
1 (cid:88) 1 (cid:88)
β ←β −η (f(x(i))−y(i)) β ←β −η x(i)(f(x(i))−y(i)). (57)
0 0 N 1 1 N
i=1 i=1
Mye av koden fra klassifiseringsoppgaven kan gjenbrukes forå tilpasse modellen i likning 53 til et gitt
datasett.
Table 7: Datasett for regresjon.
Datapunkt x y
1 -10.0 -6.359354964838024
2 -9.5 -4.206219476164554
3 -9.0 -11.127060105339346
4 -8.5 -7.771131386305228
5 -8.0 -8.124549343247278
6 -7.5 -7.182177496316401
7 -7.0 -6.037172478551233
8 -6.5 -2.504149653937351
9 -6.0 -5.026172414497464
10 -5.5 -2.950079094157873
11 -5.0 -1.4507431897248368
12 -4.5 -5.336622551581822
13 -4.0 -4.059330972662908
14 -3.5 -4.327888761967305
15 -3.0 -1.0623486580711823
16 -2.5 -4.409261395640257
17 -2.0 2.9475603563217945
18 -1.5 -1.5395408141822513
19 -1.0 2.4622402587375745
20 -0.5 2.642472707669069
21 0.0 2.31891903693072
22 0.5 3.2425842723044016
23 1.0 3.537834860795493
24 1.5 0.3798562973180845
25 2.0 4.140802310836296
26 2.5 1.9614206593287309
27 3.0 5.162903327838864
28 3.5 3.5197438184133043
29 4.0 6.243395322509395
30 4.5 5.141524420933673
31 5.0 5.370176682456397
32 5.5 10.254373431713347
33 6.0 5.43525345790149
34 6.5 5.159899203707566
35 7.0 8.114723631612268
36 7.5 10.611562465835878
37 8.0 4.08003418246534
38 8.5 12.898017911956575
39 9.0 10.838245427992971
40 9.5 9.886185758809033

## 1.4.2 Polynomisk regresjon og feature engineering
<!-- side 24 -->

Sepådatasettetvistifigur11a. Denoransjelinjenrepresentererdenunderliggendefordelingen, ogde
blå punktene representerer datapunkter generert fra denne fordelingen, med tilfeldig støy trukket fra
en gaussisk fordeling (med forventningsverdi µ=0 og standardavvik σ =0.5) lagt til.
(a) (b)
Figure11: (a)Datasett(blåpunkter)generertavenpolynomisklikningavgradto(oransjelinje)med
gaussisk støy, og (b) en lineær regresjonsmodell tilpasset dette datasettet.
Oppgave: Hvor godt vil lineær regresjon fungere for å lage en modell som predikerer y for nye
datapunkterx? Hvorfor? Prøvåformuleresvaretvedhjelpavantakelsen somliggerilineærregresjon.
Figur 11b viser en lineær modell tilpasset til disse dataene, og denne bekrefter det vi nok forventet:
Lineær regresjon fungerer dårlig forå modellere en parabel.
Oppgave: For akkurat min implementasjon fant jeg at modellens MSE ligger rundt 960. Er dette
et høyt eller lavt tall? Kan vi si generelt hva som er en høy verdi for MSE? For mine data er
gjennomsnittsverdien av targets ca 28.15, og gjennomsnittsverdien av prediksjonene ca 32.07. MSE
står for mean squared error, og vi får den avå kvadrere avvik. 302 = 900, så det kvadrerte avviket
tilsvarer ca størrelsen på targets og prediksjoner. Dette er et forholdsvis stort tap.
Viharfleremuligheterforålageenbedremodell, ogidetaktuelletilfelletkjennervifunksjonsformen
til fordelingen som genererte dataene. At vi kjenner funksjonen som ble brukt tilå generere dataene
vil så godt som aldri være tilfelle, men bare vedå plotte dataene kunne vi se at de fordeler seg som et
annengrads polynom. Basert på er den enkleste løsningenå lage en ny feature, hvor vi transformerer
dataene våre polynomisk. Dette kalles feature engineering.
Siden vi ser at dataene ligger på en parabel, bør vi velge transformasjonen x→x2. Vi kan gjøre dette
for hånd, eller ved hjelp av sklearn sin innebygde PolynomialFeatures, som lar oss angi graden til
polynomet vi ønsker å generere. Da lager og anvender vi transformasjonen på treningsdataene, og
anvender den på testdataene. Det er viktig at vi ikke lager (.fit) transformasjonen på testdataene,
siden hele analysen skal være uavhengig av testdataene, og disse kun skal brukes for endelig testing.
Etter transformasjonen har vi generert en ny feature, og der vi før hadde én feature x, har vi nå to
features {x ,x } = {x,x2}, og har dermed økt dimensjonaliteten til dataene fra én til to. Vi skal
1 2
derfor gjøre en ny lineær regresjon, denne gangen med to features, og modellen som skal tilpasses er
y =β +β x +β x . (58)
0 1 1 2 2
Merk at vi fremdeles gjør lineær regresjon, men nå med en generert feature. Merk også at feature
engineering kan gjøres i alle tilfeller; ikke kun for veiledet læring, og ikke kun for regresjon.
Generelt er feature engineering alle operasjoner vi utfører på datasettet vi bruker til maskinlæring, og
inkluderer:
• Feature selection, altså utvelgelse av features, som da vi valgte å ikke ta med “Name” i
klassifiseringsoppgaven på Titanic-dataene.
• Feature preprocessing, altså preprosessering av features, som da vi skalerte “Age” til inter-
vallet (0,1) for Titanic-dataene.
• Feature extraction, altså utvinning av features, som da vi nettopp laget en feature x2 fra x.
Det er også muligå kombinere flere eksisterende features til nye.
Detfinnesmangemetoderogtriksforfeatureengineering,ogvikommermildtsagtikketilådekkealle
i dette kurset. Dere kan ta i bruk metoder etter eget ønske og fantasi når dere løser øvingsoppgavene,
gitt at dere forstår og kan forklare hva dere har gjort og hvorfor.
For én variabel x kan vi skrive et polynom av grad M som
f(x)=β +β x+β x2+···+β xM. (59)
0 1 2 M
og figur 12 viser data generert fra et polynom av ukjent grad.
Figure 12: Datasett generert fra polynom av ukjent grad, med gaussisk støy
Oppgave: Er det muligå se fra dataene i figuren hvilken grad vi bør generere features til?
(a) (b) (c)
Figure13: (a)Lineærregresjonogregresjonmedgenerertefeaturestilgrad(b)3og(c)15,tildatasettet
representert av de blå punktene.
Figurene 13a, 13b og 13c viser lineær regresjon til dataene i figur 12, med feature transformasjoner
til ulike grader. Her ser vi at en mer kompleks modell (høyere grads polynom) ikke nødvendigvis gir
lavere tap (MSE), men at både for lav og for høy kompleksitet i modellen er problematiske.
Oppgave: Ergradenpåpolynometvitransformererfeaturestilenmodellparameter,enhyperparam-
eter eller en feature?

## 1.4.3 Trening, testing og validering
<!-- side 25 -->

Overtilpasningskjernårmodellenharkapasitettilåtilpassesegsågodttiltreningsdataeneatdetgår
utover generaliseringsevnen på testdataene. Det er viktigå kunne detektere overtilpasning, slik at vi
kan justere hyperparametrene underveis i treningen. Men husk: Testdataene skal ikke brukes til noen
som helst justering. De skal kun brukes som en endelig test når modellen er ferdig. Om vi bruker
testdataforåtilpassehyperparametre,harviikkeusettedataåtestedenendeligemodellenpålenger.
Vi kan heller ikke bruke treningsdataene tilå detektere overtilpasning, siden treningsprosedyren har
sommålatmodellenskaltilpassesbestmuligtilnettoppdisse. Sidenhverkentrenings-ellertestdataene
kan brukes tilå tilpasse hyperparametrene, trenger vi ytterligere data til dette formålet. Standarden
erå dele det opprinnelige datasettet i tre deler (i stedet for to, som vi har gjort hittil). De tre delene
og deres bruksområder er:
• Treningsdata brukes forå tilpasse modellparametrene, altså under trening.
• Testdatabrukesikketilågjørenoensomhelsttilpasningavmodellen,parametre,hyperparame-
tre eller treningsprosedyren: De tas i bruk forå rapportere ytelsen til den endelige modellen.
• Valideringsdata brukes forå monitorere modellen under trening, og på bakgrunn av dette til
å justere hyperparametrene.
Metoden train test split fra sklearn.model selection kan brukes tilå splitte det opprinnelige
datasettet i to, to ganger. Til sammen ender vi da opp med tre uavhengige datasett, hvorav de fleste
datapunktene bør settes av til trening.
Foråtaibrukvalideringsdataene,måtreningsprosedyrenviimplementertetidligere(davisåpåklassi-
fisering), modifiseres. Denbørregneutrelevantemetrikkerpåvalideringsdataeneetgittantallganger
i løpet av treningen, for eksempel etter hver tiende epoke (frekvensen er avhengig av kompleksiteten
til oppgaven og hvor mye lagringsplass vi vil avse). Kode for en mulig treningsloop som gjør dette på
lineær regresjon med stochastic gradient descent fra sklearn er vist under.
model = sklearn.linear_model.SGDRegressor(learning_rate=’constant’, eta0=0.01)
Train_losses, val_losses = [], []
n_epochs = 100
for epoch in range(n_epochs):
model.partial_fit(X_train, y_train)
# Monitor training loss
y_train_pred = model.predict(X_train)
train_loss = sklearn.metrics.mean_squared_error(y_train, y_train_pred)
train_losses.append(train_loss)
# Monitor validation loss
y_val_pred = model.predict(X_val)
val_loss = sklearn.metrics.mean_squared_error(y_val, y_val_pred)
val_losses.append(val_loss)
Denne koden vil gi oss to arrays vi kan plotte enten underveis eller i etterkant av treningen, for å
studere hvordan tapet utvikler seg på henholdsvis trenings- og valideringsdataene.
Studer figur 14a. Her tilpasses en modell av høy kompleksitet til et datasett, og siden tapet på
valideringsdataene flater ut imens tapet på treningsdataene fortsetter å minke, kan vi konkludere
med at modellen overtilpasser, sannsynligvis fordi den har for høy kompleksitet. Overtilpasningen
gjør at modellen ikke klarer å generalisere på de usette datapunktene i valideringsdatasettet. Det
motsatte ser vi i figur 14b. Her er tapet høyt på både trenings- og valideringsdataene, som tyder
på at modellen har for lav kompleksitet forå tilpasse seg til variabiliteten i treningsdataene, men til
gjengjeld generaliserer like godt til valideringsdataene gjennom hele treningsprosedyren. Se til slutt
på figur 14c, hvor tapet minker jevnt på både trenings- og valideringsdataene, men flater ut likt for
begge datasettene. Dette betyr at modellparametrene har oppnådd de mest optimale verdiene vi kan
forvente i denne treningsprosedyren, men uten at disse er overtilpasset til treningsdataene.
Forå oppsummere bør modellens ytelse monitoreres under treningen, gjerne i form av plott som viser
ulike metrikker, inkludert tap, på trenings- og valideringsdataene.
• Hvis tap på treningsdataene synker jevnt, mens loss på valideringsdataene er høyere og/eller
flater ut, overtilpasser modellen.
• Hvis begge kurvene flater ut med høy loss, undertilpasser modellen. Det betyr som oftest at den
ikke har kapasitet eller riktig form tilå tilpasse seg til dataene. Det meståpenbare tegnet på
(a) (b) (c)
Figure 14: Trenings- og valideringstap for tre ulike modeller, se beskrivelse i teksten.
undertilpasning er høy loss på treningsdataene.
• Hvis begge kurvene synker jevnt og flater ut, betyr det at modellen klarerå modellere trenings-
dataene, og samtidig klarerå generalisere til nye data.
Disse metrikkene kan også brukes tilå justere hyperparametre underveis i treningen. For eksempel er
det vanligå minke læringsraten i løpet av treningen. De kan også brukes tilå avgjøre når treningen
bør stanse: det er ikke nødvendigå bestemme på forhånd hvor mange epoker modellen skal trene.
I stedet kan man lage et early stopping criterion som stanser treningen for eksempel når tapet på
valideringsdataene ikke har minket innenfor en toleranse i løpet av de siste n epokene.

## 1.4.4 Kryssvalidering
<!-- side 27 -->

Oppgave: Hvordan velger vi hvilke datapunkter som havner i henholdsvis trenings-, test og valider-
ingsdatasettet, og påvirker dette testresultatet?
Inndelingavdatasettetitrenings-,test-ogvalideringsdata(skal)gjørestilfeldig,mendennesplittenkan
påvirketestresultatet. Vimåaltsåforventenoevarianspåtestresultatet,avhengigavdatasplitt. Dette
erenutfordringvimåhåndtere. Itilleggerdetutfordrendeatvifårfærredatapunkteråtrenepånår
visetteravdeleravdataenetilvalideringogtesting. Genereltgjelderatviønskersåmyetreningsdata
som mulig. En løsning på dette er kryssvalidering. Den enkleste former er såkalt Leave-one-out cross
validation (LOOCV),hvorénobservasjonfjernes fradetopprinneligedatasettet, ogbrukestiltesting.
Det opprinnelige datasettet består av n datapunkter, treningsdatasettet har størrelse n−1, og ett
datapunkt brukes til testing. Valideringssettet lages vedå deretter hente ett eller flere datapunkter
fra treningsdatasettet. Denne prosedyren gjentas nganger: Trening på n−1 datapunkter og testing
på ett datapunkt. Vi står da igjen med n testresultater, hvorav hvert er beregnet på ett datapunkt.
Gjennomsnittet av disse n testresultatene er LOOCV-estimatet av metrikken vi ønsker å beregne.
Siden estimatet har brukt samtlige tilgjengelige datapunkter til sammen, er det det beste estimatet vi
kan lage.
LOOCV er en ressurskrevende prosedyre, da modellen må tilpsses like mange ganger som man har
treningsdatapunkt. Enmerutbredtmetodeerderfork-fold cross validation,medk splitteristedetfor
n. Man velger da en verdi for k, og splitter datasettet i k deler. Hvor hver iterasjon k spiller en annen
del av datasettet rollen som testdata, mens resten brukes til trening, modellen tilpasses k ganger, og
man oppnår k testresulater som brukes tilå beregne det endelige estimatet av testresultatet.
Oppgave: Hva er fordeler og ulemper ved k-fold cross validation sammenliknet med LOOCV?

## 1.4.5 Bias variance tradeoff
<!-- side 27 -->

Når vi velger en læringsalgoritme velger vi en estimator for prediksjonsproblemet vårt. For både
logistisk og lineær regresjon har vi brukt (og for nevrale nettverk kommer vi til å bruke) gradient
descent. Dette er vår algoritme forå optimalisere parametre basert på data, så det er vår estimator.
Vi må forholde oss til at estimatoren vår har både bias og varians.
Vi antar at target-verdiene vi observerer (for både klassifisering og regresjon) følger en eller annen
funksjon som ingen unntatt universet kjenner til, la oss kalle denne F. Basert på observasjoner x
gir denne funksjonen den sanne verdien av y, utover støy som er utenfor vår kontroll (for eksempel
måleapparatet, eksterne faktorer, osv),
y =F(x)+ε. (60)
Dettesåkalteirredusible støyetblirviikkekvitt,menvikanantaatdeternormalfordelt,medforvent-
ningsverdiµ=0ogstandardavvikσ =1. Nårvigjørmaskinlæringsamlerviinntreningsdatasettgjen-
nomå trekke tilfeldige n observasjoner fra virkeligheten; D = {(x ,y ),(x ,y ),...(x ,y )}. Basert
1 1 2 2 n n
på denne trekningen trener vi en modell f(x;D). Det er akkurat disse modellene vi har holdt på med
til nå (logistisk og lineær regresjon samt beslutningstrær) og kalt f. Disse har alltid vært basert på
et datasett, vi har bare ikke skrevet det inn eksplisitt, siden vi har forholdt oss til gitte data. Men
nå skal vi se hvordan estimatoren oppfører seg under ulike trekninger av dataene, og da er det veldig
nyttigå ta med D eksplisitt inni f, slik at vi skjønner når vårt (tilfeldige) utvalg av data har noeå si.
Når vi bruker en læringsalgoritme tilå minimere et tap, i bunn og grunn avviket
(y−f(x;D))2, (61)
ønsker viå ende opp med en modell f som også har lavt tap på nye datapunkter, altså datapunkter
som ikke finnes i D. Det betyr at vi bryr oss om forventningsverdien over mange ulike trekninger av
treningsdatasetet,
(cid:104) (cid:105)
E (y−f(x;D))2 . (62)
D
Det viser seg at uansett hvilken funksjon f vi velger, kan vi dekomponere uttrykket over – altså feilen
vi forventer at den gjør på et nytt datapunkt x – som følger,
(cid:104) (cid:105)
E (y−f(x;D))2 =(Bias [f(x;D])2+Var [f(x;D)]+σ2. (63)
D D D
Dette er opphavet til bias-variance tradeoff, som forteller oss at tapet en læringsalgoritme ikke klarer
å minimere vekkstammerfra tre ulike typerfeil, nemlig bias, variansog irredusibeltstøy. La oss først
se på bias og varians hver for seg, og så se hvordan vi kan utlede denne dekomposisjonen.
Bias til en læringsalgoritme har ingenting med det konstante leddet i lineære modeller å gjøre, og
heter det samme kun forå forvirre studenter. Biasen som representerer det systematiske avviket til
estimatoren beregnes over ulike trekninger av treningsdata,
Bias [f(x;D)]=E [f(x;D)−F(x)] (64)
D D
=E [f(x;D)]−F(x). (65)
D
Dette er altså det forventede avviket mellom modellen tilpasset på et gitt datasett og den faktiske
target-verdien, begge evaluert på datapunktet x. Enkelt sagt: hvor mye vi må forvente at modellen
bommer på nye data. Vi kan tenke på dette som feilen som følger av de innebyggede forenklingene i
modellen.
Oppgave: Hvakommerdenandrelikhetenav,altsåhvorforkanviflytteF(x)utenforforventningsver-
dien? TENK OVER DETTE FØR DU LESER VIDERE. Fordi den sanne sammenhengen, se likning
60, ikke er avhengig av datasettet D, som vi tar forventningsverdien over. F(x) er en konstant når x
er gitt.
Oppgave: For intuisjon kan vi tenke oss en litt rar situasjon: Vi finner ut at den faktiske gjennom-
snittshøyden til norske kvinner er 167 cm. Vi måler egenskapene og høyden til mange ulike tilfeldige
utvalg av norske kvinner, som gir oss flere treningsdatasett. For hvert datasett trener vi en modell (vi
trener altså flere regresjonsmodeller ved bruk av gradient descent) som estimerer kvinnehøyde basert
på de andre egenskapene. Vi finner ut at modellene i gjennomsnitt predikerer at kvinner er 165 cm
høye. Hvor stor bias har læringsalgoritmen?
En læringsalgoritme med liten bias (i absoluttverdi) har typisk tilstrekkelig kompleksitet forå tilpasse
seg til treningsdataene. Høy bias tyder typisk på at læringsalgoritmen ikke klarerå modellere alle
sammenhengene i dataene. Veldig enkelt kan vi tenke på bias som en tendens tilå alltid bomme i
samme retning.
Variansen til en læringsalgoritme over ulike trekninger av data er
(cid:104) (cid:105)
Var [f(x;D)]=E (E [f(x;D)]−f(x;D))2 (66)
D D D
altså hvor mye vi kan forvente at modellen varierer rundt sitt eget gjennomsnitt. En læringsalgoritme
medhøyvariansertypiskforsensitivtilsmåfluktuasjoneritreningsdataene,ogharkanskjemodellert
tilfeldig støy vel så mye som faktiske sammenhenger. Mer komplekse modeller, altså modeller med
mange parametre, har en tendens tilå ende opp med ulike parameterverdier for hver trening, altså for
hvert treningsdatasett. Slike modeller har stor varians i de estimerte parameterverdiene.
Nå som vi kjenner uttrykkene for bias og varians kan vi utlede sammenhengen over, gjennomå bruke
følgende nyttige relasjoner
E[ε]=0 (67)
E[c]=c (68)
E[cX]=cE[X] (69)
E[X+Y]=E[X]+E[Y] (70)
E[XY]= ! E[X]E[Y] for statistisk uavhengige X og Y. (71)
tilå skrive om MSE-tapsfunksjonen. Her er X og Y hvilke som helst tilfeldige variabler, men greier
som har en sannsynlighetsfordeling vi kan gjøre trekninger fra.
Vidropperherkonstanten 1 ogindeksen påforventningsverdienforenenklerenotasjoniutledningen,
2 D
og skriver
(cid:20)(cid:16) (cid:17)2 (cid:21)
MSE=E y−f(x;D) (72)
(cid:20)(cid:16) (cid:17)2 (cid:21)
=E F(x)+ε−f(x;D) (73)
=E (cid:20)(cid:16) F(x)−f(x;D) (cid:17)2 (cid:21) +2E (cid:104)(cid:16) F(x)−f(x;D) (cid:17) ε (cid:105) +E(cid:2) ε2(cid:3) (74)
=E (cid:20)(cid:16) F(x)−E[f(x;D)]+E[f(x;D)]−f(x;D) (cid:17)2 (cid:21) +0+E(cid:2) ε2(cid:3) (75)
(cid:20)(cid:16) (cid:17)2 (cid:21) (cid:20)(cid:16) (cid:17)2 (cid:21)
=E F(x)−E[f(x;D)] +E E[f(x;D)]−f(x;D) (76)
+2E (cid:104)(cid:16) F(x)−E[f(x;D)] (cid:17)(cid:16) E[f(x;D)]−f(x;D) (cid:17)(cid:105) +E(cid:2) ε2(cid:3) (77)
Vi tar for oss hvert ledd for seg. Det første leddet er
(cid:20)(cid:16) (cid:17)2 (cid:21) (cid:104) (cid:105)
E F(x)−E[f(x;D)] =E F(x)2−2(F(x)E[f(x;D)]+E[f(x;D)]2 (78)
=F(x)2−2F(x)E[f(x;D)]+E[f(x;D)]2 (79)
(cid:16) (cid:17)2
= F(x)−E[f(x;D)] (80)
=Bias [f(x;D)]2 , (81)
D
og andre ledd kan vi sammenlikne med likning 66 forå identifisere
(cid:20)(cid:16) (cid:17)2 (cid:21)
E E[f(x;D)]−f(x;D) =Var[f(x;D)]. (82)
Tredje ledd blir
(cid:104)(cid:16) (cid:17)(cid:16) (cid:17)(cid:105)
2E F(x)−E[f(x;D)] E[f(x;D)]−f(x;D) (83)
(cid:104) (cid:105)
=2E F(x)E[f(x;D)]−F(x)f(x;D)−E[f(x;D)]2+E[f(x;D)]f(x;D) (84)
(cid:16) (cid:17)
=2 F(x)E[f(x;D)]−F(x)E[f(x;D)]−E[f(x;D)]2+E[f(x;D)]2 (85)
=0. (86)
Til slutt, se på likning 66 og overbevis deg om at
E[ε2]=Var[ε]=σ2. (87)
Vi samler leddene og ser at vi kan skrive tapet på et datapunkt x som
MSE(x)=Bias [f(x;D)]2+Var[f(x;D)]+σ2. (88)
D
Denne relasjonen forteller oss at tapet assosiert med en læringsalgoritme består av en komponent som
skyldesbias,altsåfeilantakelsermodellenegjørgenerelt,ensomskyldesvarians,altsåspesialtilpasning
modellene gjør til fluktuasjoner i datasettet, og en som representerer irredusibel feil grunnet støy,
altså en tapskomponent som er utenfor vår kontroll. Vi skjønner atå minimere det forventede tapet
representerer en konflikt mellom to ulike kilder som representerer motsatt type feil. Derfor omtales
dette som bias-variance-tradeoff; når den ene minker, øker den andre. Siden
• høyvariansofteindikereratlæringsalgoritmenerioverkantsensitivtilvariasjoneridata,hvilket
tyder på overtiplasning (overfit),
• lav varians ofte indikerer at læringsalgoritmen gir modeller som predikerer for nært gjennom-
snittsprediksjonen, og ikke gjør tilstrekkelig nytte av informasjonen i features, hvilket tyder på
undertilpasning (underfit),
kan vi også tenke på det som et bias-variance-dilemma: Husk at vi alltid ønsker at en modell tilpasset
på treningsdata skal generalisere godt til testdata. Høy bias representerer en feil generalisering på
treningsdataene, som overskygger mer subtile, men faktisk relevante relasjoner mellom features og
targets. Høyvariansrepresentereratmodellenharforhøysensitivitettilvariasjoneritreningsdataene
(inkludert støy), altså har overmodellert sammenhenger i stedet forå generalisere.

## 1.4.6 Regresjonstrær
<!-- side 30 -->

Se på dataene i figur 15a. Her har vi én feature x og et target y med en tydelig fordeling, men som
vi likevel ikke kjenner funksjonsformen til (eller, kanskje du kjenner funksjonsformen, men lat som du
ikke gjør det).
3.0
2.5
2.0
1.5
1.0
0.5
0.0
0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
x1
(a)
y
Predictions
Labels
(b)
Figure 15: (a) Stegvise data, se beskrivelse i teksten, og (b) prediksjoner fra et 5. gradspolynom trent
på disse dataene.
Oppgave: Prøv gjerneå generere disse dataene selv ved bruk av def f(x): return np.floor(x),
og se om du klarerå tilpasse et polynom av valgfri grad til dataene.
Vi innser raskt at y ikke følger et polynom, og at polynomisk regresjon ikke er en god vei til mål. I
stedet kan vi innse vedå studere dataene at de befinner seg i flere regioner. Vi husker kanskje også at
beslutningstrærergodtegnettilåsplittedatatilulikeregioner,gjennomulikesplittkriterier. Tidligere
harvibruktbeslutningstrærtilklassifisering,hvordatasplittesgjennomtreetsnodertilløvnodersom
predikerer klassen til hver datainstans. Den samme modellstrukturen kan brukes i regresjon, siden
hver splitt i treet deler opp datarommet. Beslutningstrær kan brukes til regresjon ved at de splitter
datarommet til flere områder, og predikerer én verdi per område.
Oppgave: Omduskulletilpasseetbeslutningstretildissedataene,hvordypttrorduatdetminimum
bør være? Hvor dypt tror du at det optimale treet vil være (med optimalt menes lavest MSE)?
Koden under kan brukes tilå lage et vilkårlig dypt tre, tilpasse det på en del av dataene og teste det
på de resterende dataene, og plotte resultatet. Finn ut hvilken dybde som er optimal for dataene du
genererer.
def error(mu=0.0, sigma=1.0):
return np.random.normal(loc=mu, scale=sigma)
def f_true(x):
return np.floor(x)
X_data = np.linspace(xmin, xmax, 100)
y_true = [f_true(_x) for _x in X_data]
y_data = [_y + error(0,0.1) for _y in y_true]
X_data = X_data.reshape(-1, 1)
X_train, X_test, y_train, y_test = train_test_split(X_data, y_data)
regressor = tree.DecisionTreeRegressor().fit(X_train, y_train)
y_pred = regressor.predict(X_test)
print("Tree depth:", regressor.get_depth())
print("Number of leaves:", regressor.get_n_leaves())
print("Model MSE:", sklearn.metrics.mean_squared_error(y_test, y_pred))
plt.scatter(X_test, y_pred, label="Predictions")
plt.scatter(X_test, y_test, label="Labels")
plt.xlabel(r"$x_1$")
plt.ylabel(r"$y$")
plt.legend()
plt.show()
tree.plot_tree(regressor)
plt.show()
t = regressor.tree_
thresholds = t.threshold[t.feature >= 0]
grid = np.linspace(-3, 3, 500).reshape(-1, 1)
plt.scatter(X_train.ravel(), np.ravel(y_train), s=15, label="train")
plt.step(grid.ravel(), regressor.predict(grid), where="post",
color="green", label="tree")
plt.plot(grid.ravel(), f_true(grid).ravel(), "k--", label="true")
for thr, d in zip(thresholds, t.compute_node_depths()[t.feature >= 0]):
plt.axvline(thr, color="gray", ls=":", lw=3/d, alpha=0.7)
plt.legend()
plt.show()
I forelesningen ser vi at sklearn gjerne prøverå lage et tre med dybde 12 og dermed 85 noder til
4 train
tree
true
x[0] <= 2.0
1.539
True False
x[0] <= 0.99 x[0] <= 3.071
0. 3 5 7 27 2. 3 5 8 24 0
17 20 19 19 2
0.0 0.976 2.009 3.04
3 2 1 0 1 2 3 4
(a) (b)
Figure 16: (a) Et beslutningstre med dybde 2, tilpasset på de stegvise dataene, og (b) datarommet
der stiplede linjer indikerer regionene dette treet lager.
disse dataene. Vi ser på trær med ulike dybder, og finner ut at den laveste MSEen oppnås for et
tre med dybde 2. Et eksempel på et slikt tre er vist i Figur 16a, og den tilsvarende inndelingen av
datarommetervistiFigur16b. Lagetdatasettselvmedenstøyetetrekningfrafloor-dataene, tilpass
ulikebeslutningstrærtildetogsehvilkendybdesklearnvelgersamthvilkendybdesomgirdeglavest
MSE.
Oppgave: Til slutt, lag en liste over ulikheter mellom beslutningstrær (både for klassifisering og
regresjon) og lineær/logistisk regresjon (med polynomisk feature extraction). Se tabell 8 når du gir
opp.
Table 8: Forskjeller mellom beslutningstrær og regresjonsmodeller.
Trær Regresjon
Feature scaling er ikke nødvendig. Beslut- Features bør ha samme størrelsesorden, helst
ningstrær deler inn dataene i regioner, så det er O(1),såikketilpasningenavmodellparametrene
ikke nødvendigå skalere dem. fører til store gradienter.
Hvis læringsalgoritmen ikke har begrensninger i Funksjonsformenerbestemt. Læringsalgoritmen
tredybde, kan treet bli for dypt og overtilpasse. kan ikke legge til ledd og lage en mer kompleks
modell,ellerfjerneleddommindrekompleksitet
er tilstrekkelig.
Har en overordnet struktur, men den spesifikke Har en gitt likningsform med antall ledd, og
oppbygningen–arkitekturen –bestemmesunder parametrene til hver variabel og variabelkombi-
trening. nasjon tilpasses.
En viktig egenskap som både regresjonsmodeller og beslutningstrær deler er at de er tolkbare: For
regresjonsmodeller vet vi at størrelsen til modellparametrene angir viktigheten til hver variabel (hvis
β , hhv w er stor, har x stor innflytelse på prediksjonen. For beslutningstrær er splittkriteriene
4 4 4
forståelige for mennesker, og vi skjønner at features som splittes tidlig er viktigere enn features som
splittes senere. Det samme gjelder ikke for modelltypen vi skal se på i neste omgang.

## 1.5 Ensemble-modeller
<!-- side 32 -->

Det kan være vanskelig å velge riktig modell for et gitt datasettet og problem. Generelt har alle
modellersineantakelserogsvakheter,foreksempelantarlineærregresjonatforholdetmellomfeatures
og target(s) er lineært, og beslutningstrær antar at datarommet kan separeres ved bruk av vertikale
beslutningsflater (splitter). Tanken bak ensemble learning er at flere modeller kan kombineres, slik at
de kompenserer for hverandres svakheter, og til sammen utgjør en samling, et ensemble, som benytter
seg av hver enkelt modells styrke. Intuitivt kan vi se for oss en gruppe bestående av eksperter, der
gruppensendeligebeslutningtaralleekspertenesvurderingmediberegning,menforkastervurderingen
som ikke deles av majoriteten.
For å lage et ensemble av modeller, kombineres flere modeller. Dette kan gjøres på ulike måter.
Konseptuelt har vi tre ulike måter:
• Parallellt: Fleremodellertrenesuavhengigavhverandre, ogprediksjonenedereskombinerestil
en enkelt prediksjon
• Sekvensielt: Flere modeller kommer etter hverandre, og hver modell opphever feilen begått
av foregående modell. Til sammen kommer rekken av modeller frem til én prediksjon, der hver
modell har minimert feilen gjort av modellen før.
• Hierarkisk: Vi bruker en (eller flere) modell(er) tilå kombinere prediksjonen fra en foregående
parallellkombinasjon av flere modeller.
Nårvibrukerentrentmodelltilågjøreprediksjoner,sierviatvigjørinferens. Skilletmellomtrening
og inferens er viktig, og særlig synlig i ensemble learning.
Vi kan lage et parallellt ensemble på flere måter: Vi kan trene samme type modell (for eksempel
et beslutningstre) med n ulike valg av hyperparametre. Da ender vi opp med n ulike modeller av
samme type. På ett datapunkt gir disse modellene oss n ulike prediksjoner, som vi aggregerer til
en endelig prediksjon. Alternativt kan vi trene n ulike modeller (for eksempel et beslutningstre, en
lineær regresjonsmodell og et nevralt nettverk), som igjen gir oss n ulike prediksjoner vi aggregerer til
ensembletsendeligeprediksjon. Viderekanvi,itilleggtilåbrukeulikemodellerogulikehyerparametre,
trene de ulike modellene i ensemblet på ulike deler av treningsdataene.

## 1.5.1 Bagging
<!-- side 33 -->

Når vi lager et ensemble bestående av ulike modeller trent på ulike deler av de tilgjengelige trenings-
dataene og kombinerer prediksjonene fra disse til én prediksjon, må vi ta stilling til to spørsmål:
1. Hvordan bør vi aggregere de ulike modellenes prediksjoner?
2. Hvordan bør vi velge ut hvilke deler av treningsdataene vi trener hver enkelt modell på?
Aggregering av prediksjoner for regresjon gjøres oftest i form av et gjennomsnitt av alle modellenes
prediksjoner. Forklassifiseringgjøresdetoftestgjennomåpredikereklassensomsvarertilflertalletav
enkeltmodellenes prediksjoner, altså en direkte avstemning, ellerå gjøre en vektet avstemning mellom
modellene.
Når det gjeler utvalg av treningsdata, er bootstrapping et sentralt konsept. Den underliggende tanken
bak bootstrapping er at vi vet at vi ikke kan samle nok data til å representere den underliggende
fordelingen bak et fenomen perfekt, men gitt et stort nok datasett kan vi få til et tilstrekkelig repre-
sentativt utvalg. Likevel vil et representativt utvalg ikke uten videre fortelle oss om usikkerheten
i estimatene vi gjør basert på disse dataene, altså hvor stor spredning det har. Gitt datasettet
vi har samlet kan vi dog lage et estimat av spredning, eller usikkerhet, ved hjelp av teknikken
bootstrapping. Dette går ut på å trekke flere datapunkter fra det samme datasettet med tilbake-
legging (dette er viktig: det samme datapunktet kan finnes flere ganger i resulterende datasett),
og slik ende opp med flere ulike datasett fra det éne datasettet vi startet med. Vi bruker disse
ulike datasettene tilå estimere den samme størrelsen flere ganger, og slik ende opp med en fordel-
ing av estimatene. Denne fordelingen kan vi bruke til å beregne en spredning, eller usikkerhet, i
estimatet vårt. Vi startet altså med ett datasett som vi kunne lage ett estimat fra, men har ved
hjelp av bootstrapping skaffet oss en fordeling – uten å ha fått tilgang til flere datapunkter eller
datasett. Vi har laget mer utenå måtte samle mer data, altså “pulled us up by our own bootstraps”.
Begrepet bagging er satt sammen av b fra bootstrap, og agging fra aggregering.
En enkel type ensemblemodell som bruker bagging er random forest (tilfeldig skog). Denne lages ved
å sette sammen ulike beslutningstrær, eventuelt stumper. For at ensemblemodellen skal bli god, må
de ulike trærne være diverse og uavhengige. Dette oppnår vi gjennomå trene trærne på ulike deler av
dataene (bootstrapp-teknikken), og dessuten ulike utvalg av data-features, slik at trærne modellerer
ulikesammenhenger. Tilsluttaggregesprediksjonenefraalletrærnetilénprediksjon–ogbagging har
skjedd.
Generelt har parallelle ensemblemodeller til felles at de består av modeller som trenes uavhengig av
hverandre. Denendeligeprediksjonenlagesvedatdeindividuelleprediksjoneneaggregeres,gjennomen
type gjennosnitt eller avstemning. De individuelle modellene kan lages vedå bruke ulike modelltyper,
ulike hyperparametre, ulike random seeds av samme læringsalgoritme, ulik feature engineering, ulike
utvalg av treningsdataene, med mer.

## 1.5.2 Boosting
<!-- side 34 -->

Innen maskinlæring refererer begrepet boosting til algoritmer som iterativt trener svake modeller (for
eksempel trestumper) på en datafordeling, og kombinerer disse til en sterk modell (ensemblet). Kon-
septet stammer fra en samling publikasjoner av Kearns og Valiant (1988, 1989), og Schapire (1990),
som undersøkte muligheten for at flere svake modeller, altså modeller hvis prediksjoner er kun svakt
korellertmedtargetidataene,kansettessammentilensterkmodell,altsåenmodellhvisprediksjoner
er vilkårlig sterkt korellert med targets i dataene. Begrepet boosting handler om at feilene begått av
én modell gjør den påfølgende modellen i iterasjonen bedre (“booster” den). I stedet forå kombinere
flere modeller parallelt, organiseres de altså sekvensielt, og hver modell forholder seg til den forrige på
enmåtesomgjørensembletsterkereennhverenkeltmodellerforsegselv. Viskalsepåtoalgoritmer
som gjør dette.
AdaBoost-algoritmen bygger et ensemble av modeller som korrigerer hverandres feil, gjennom en
iterativ treningsprosedyre. I starten av prosedyren har alle punktene i treningsdataene samme vekt,
ogvitrenerénmodellsompredikererpådissedataene. Basertpåtargetsserviforhvilkedatapunkter
modellen har størst tap, og i neste iterasjon økes vektene for disse datapunktene. Deretter trenes en
ny modell, som igjen predikerer på et datasett, før vektene igjen justeres.
Gradient boosting er, til forskjell fra AdaBoost, ikke basert på vekting av observasjoner. I stedet
predikerer hver modell forskjellen mellom targets og den forrige modellens prediksjon, såkalte pseudo-
residuals. Det nye ensemblet lages vedå følge læringsregelen
new_ensemble = previous_ensemble - learning_rate * new_tree
Dette uttrykket bør minne deg om gradient descent, som er opphavet til navnet gradient boosting. Vi
gjør altså ikke gradient descent i rommet over alle mulige parameterverdier, men i rommet over alle
mulige trær ensemblet vårt kan bestå av. Gradienten i dette tilfellet er altså -(label-prediction).
Oppgave: Trebaserteensemblemodellerdubørhahørtom,oghelstbruktpåetdatasett,erCatBoost,
LightGBM, AdaBoost, og XGBoost.
Det er en god regelå alltid bruke en ensemble-modell som referanseverdi for hvor godt en modell kan
gjøre det, når du jobber med et maskinlæringsproblem med tabulære data (altså den typen data vi
bruker i dette kurset).

## 2 Nevrale nettverk
<!-- side 34 -->

Nårvigjørmaskinlæringønskerviåtilpasseenfunksjonf somgirossetestimatbasertpåx,iveiledet
læring et estimat av target y, altså yˆ=f(x). Vi har sett på flere måterå modellere f på:
• Med lineær/logistisk regresjon er funksjonsformen til f gitt, og treningen går ut påå tilpasse
parametrene i funksjonen. Dette er eksempler på parametrisk modellering.
• Med beslutningstrær er ikke formen til f gitt, og treningen går ut på å bygge treet og velge
splittkriterier,forådeleoppdatarommet. Detteereteksempelpåikke-parametrisk modellering.
I en regresjonsmodell multipliseres dataene med parametre og adderes deretter (linearitet). I beslut-
ningstrær flyter dataene gjennom modellen uten å transformeres; hver node splitter dataene, men
transformerer dem ikke. Vårt neste steg innebærerå lage ikke-lineære modeller som transformerer
dataene.

## 2.1 Perceptron
<!-- side 35 -->

Perseptronet er forgjengeren til moderne nevrale nettverk, og ble introdusert av McCulloch og Pitts
(1943). Den første implementasjonen ble bygget, i hardware, av Rosenblatt (1957). Tanken var at
perseptronet skulle være en maskin; ikke et program (denne setningen er verdt å dvele ved). Et
perseptronbeståravénellerflereberegningsenheter, oftekaltnoder, ogidenopprinneligeformulerin-
gen var nodene threshold logic units (TLU). Disse mapper inputen x til en output f(x) som tar en
binær verdi,
f(x)=H(wx+b), (89)
hvorH erHeavisidestegfunksjonen, sefigur18a, ogivårkontekstkallesenaktiveringsfunksjon. Både
x og w er vektorer i det generelle tilfellet. En TLU, beskrevet av likningen over, er enten aktiv, altså
har output = 1, eller ikke aktiv, altså har output = 0. Hvilke data x som gir hvilken aktivering av
noden er avhengig av vektene (w,b). Siden output er binær, gjør denne en klassifiseringsoppgave,
og for at perseptronet skal ha høy treffsikkerhet i klassifiseringen må vektene justeres til riktig verdi.
Dette gjøres gjennom veiledet læring.
Som før sendes instanser fra treningsdataene enkeltvis gjennom modellen, denne gjør en prediksjon
yˆ og tapet beregnes basert på target y. Parametrene i modellen oppdateres forå redusere tapet per
treningsinstans. Dette gjentas for alle instansene i treningsdataene, hvilket utgjør én epoke (epoch),
og hele prosessen gjentas flere ganger (epochs). Vi kan implementere et perseptron vedå gjenbruke
koden fra logistisk regresjon, med likning 89 som modell, altså:
activation = sum(weight_i * x_i) + bias
prediction = 1.0 if activation >= 0.0 else 0.0
Igjen er treningsprosessen en loop over treningsdataene med egnet tapsfunksjon L, og parametrene
oppdateres etter regelen i likning 13, gjentatt under:
∂
θt+1 =θt−η L(f(x;θ),y). (90)
∂θ
Oppgave: Hva er problemet med denne prosedyren? Ikke les videre før du har prøvdå besvare dette
spørsmålet. Hint: Hva skjer hvis du prøverå derivere tapsfunksjonen med f(x) fra likning 89?
Når vi skal derivere tapsfunksjonen, som inneholder prediksjonen, er vi nødt tilå derivere Heaviside-
funksjonen. Denneer0overalt,og∞iettpunkt,ogdermedikkedefinert. Somderegaranterthusker,
må tapsfunksjonen være deriverbar forå finne gradienten til parameteroppdateringen. I den opprin-
nelige formuleringen av perseptronet (Rosenblatt) er leddet med den deriverte utelatt, så følgende
uttrykk kan brukes
w ←w +η(y −yˆ) . (91)
i i i i
I kode er det vanligå utvide x med et første element med verdi 1, og w har et tilsvarende ledd som
representerer b, slik at vi får den mer kompakte operasjonen under.
w = w + learning_rate * (expected - predicted) * x
Sepådataeneifigur17a. Disserepresenterertofeaturesx ogx ,ogfargenangirdetomuligeklassene
1 2
y. De er generert ved hjelp av sklearn.datasets.make blobs, og forå tilpasse et perseptron som
løser klassifiseringsoppgaven de representerer, kan vi bruke sklearn.linear model.Perceptron, se
under.
perceptron = Perceptron().fit(X_train, y_train)
y_pred = perceptron.predict(X_test)
TilinfoerdetteenwrapperrundtSGDClassifiersomviharbrukttidligere,medloss="perceptron"
og learning rate="constant". Vi finner de tilpassede parameterverdiene tilsvarende som for lineær
regresjon:
ws = perceptron.coef_
bs = perceptron.intercept_
Sepådataeneifigur17b. Oppgave: Hvormangefeaturesogklasserhardataene? Hvormangevekter
trenger et perseptron forå tilpasse dem? Det kan være nyttigå tegne en figur.
(a) (b)
Figure 17: Klassifiseringsdatasett med (a) to klasser, generert av sklearn.datasets.make blobs, og
(b) tre klasser, generert av sklearn.datasets.make classification.
Forå gjøre denne klassifiseringsoppgaven, kan vi gjenbruke koden fra tidligere, og treningsprosedyren
forblir den samme. Hvis man har implementert .fit() og .predict() selv, må koden eventuelt
tilpasses forå håndtere en vektmatrise (i stedet for en -vektor), da parameteroppdateringen nå følger:
w ←w +η(y −yˆ )x . (92)
i,j i,j j j i
Her er
• w vekten på forbindelsen mellom input i og node j,
i,j
• η læringsraten,
• yˆ og y henholdsvis output og target for klasse j,
j j
• x feature-verdi i for det aktuelle datapunktet.
i
Vigjenbrukerkodenfratidligere,ogkanfinneuthvormangeklasserogfeaturesvihar(somvistrengt
tatt bør ha kontroll på før vi tilpasser modellen), og hvor mange vekter modellen har, ved hjelp av
følgende kode.
perceptron = Perceptron().fit(X_train, y_train)
ws = perceptron.coef_
bs = perceptron.intercept_
print("Features:", X.shape[1])
print("Classes:", len(list(set(y))))
print("Weights:", ws.shape)
print("Biases:", bs.shape)
Harvitofeaturesogtreklasser, måmodellenhatoinput-nodermedforbindelsertiltreoutput-noder.
Da får vi seks vekter i w og tre bias-verdier i b.
Logiske operasjoner
Perseptronerkanbrukestilågjørelogiskeoperasjoner,medriktigvalgavvekter. Hvisviharénvariabel
x ,kanetperseptrongjøredenlogiskeoperasjonenNOTmed(w1,b)=(−1,0.5). Fortovariablerx ,x
1 1 2
får vi den logiske operasjonen AND med (w ,w ,b)=(1,1,−1.5), og OR med (w ,w ,b)=(1,1,−0.5).
1 2 1 2
Oppgave: Kan kan et perseptron gjøre XOR? Hvordan? Hint: Det holder ikke med én TLU; sett
sammen en kombinasjon av AND, NOT og OR.

## 2.2 Aktiveringsfunksjoner
<!-- side 37 -->

En ulempe ved perseptronet er at en liten endring i input kan føre til en stor endring i output. Dette
skyldes Heaviside-funksjonen, som sender funksjonsverdien til enten 0 eller 1, se figur 18a. Et bedre
alternativhaddeværtåginodenemulighetentilåreturnerekontinuerligeverdier,eventueltiintervallet
[0,1]. OmvierstatterHeaviside-funksjonenmedenfunksjonsomreturnererkontinuerligeverdier, har
vilagetdentypennodevifinnerimodernenevralenettverk. Vanligeaktiveringsfunksjonerersigmoid-
funksjonen (som vi brukte for logistisk regresjon), se figur 18b, softmax, og ReLU, se figur 18c. Disse
aktiveringsfunksjonene brukes til ulike formål: Hvis modellen skal gjøre binær klassifisering, er det
vanlig å ha en sigmoid-aktiveringsfunksjon i noden i nettverkets siste lag, for å sikre at modellens
prediksjon havner i intervallet [0,1]. Sigmoid-funksjonen er den samme som tidligere, men gjentatt
her for enklere sammenlikning med de andre aktiveringsfunksjonene:
σ(x)= . (93)
1+e−x
I en modell som gjør ikke-binær klassifisering er det vanligå bruke en softmax-aktiveringsfunksjon i
output-nodene:
exi
softmax(x) = , (94)
i (cid:80) exj
j
som sikrer at aktiveringene summerer til 1. Da representerer hver av output-nodene datapunktets
predikerte tilhørighet til de respektive klassene, og vi må ha én output-node per klasse.
Modernenevralenettverkharsomregelflerelag,mellominput-ogoutput-lagene,seavsnitt2.3. Slike
modeller kalles multi layer perceptrons (MLP), da de har multiple lag. Vi står relativt fritt tilå velge
aktiveringsfunksjoner til disse lagenes noder, og i dette kurset vil vi holde oss til den såkalte rectified
linear unit (ReLU) aktiveringsfunksjonen:
ReLU(x)=max(0,x). (95)
MLP-modeller som ikke gjør klassifisering men regresjon, må ha output-noder som kan returnere
kontinuerlige tallverdier som ikke er begrenset til et intervall (som [0,1] i klassifisering). Som regel
brukes da en lineær aktiveringsfunksjon i output-laget.
(a) (b) (c)
Figure 18: De tre aktiveringsfunksjonene (a) Heaviside, (b) sigmoid, og (c) ReLU.

## 2.3 Arkitektur
<!-- side 37 -->

Somnevntoverkanvisettesammennoderpåulikemåterforålagenevralenettverk. Hvordannodene
ersattsammenkallesnettverketsarkitektur. Nevralenettverkbeståravlag,somigjenbeståravnoder
stablet i høyden, altså noder som ikke mottar input fra hverandre. Informasjon går kun mellom noder
iulikelag, altsåikkemellomnoderisammelag. Allenevralenettverkbeståravinput-lag, output-lag,
og indre/skjulte lag:
• Input-laget er det første laget i det nevrale nettverket. Dette mottar og sender data inn i
nettverket. Det må derfor ha samme dimensjonalitet, dvs samme antall noder, som dataene har
features.
• Output-lageterdetsistelagetidetnevralenettverket. Detterepresentererdetnevralenettver-
kets prediksjon. I tilfellet veiledet læring må dette laget ha samme dimensjonalitet, dvs samme
antall noder, som targtets i dataene.
Figure 19: Skisse av et nevralt nettverk, som vist i forelesning.
• Indre lag er alle lagene mellom input- og output-lagene. Disse omtales også som skjulte lag.
Akkurat som med valg av aktiveringsfunksjon, står vi fritt tilå sette sammen nevrale nettverk med
arkitekturen vi ønsker. Dette betyr ikke at hvilken som helst arkitektur er egnet forå løse problemet
dataene våre beskriver. Ulike arkitekturer er bedre og dårligere egnet til ulike oppgaver, for eksempel
erdetvanligåbrukekonvolusjonslagtilbildegjenkjenning,ogtransformer-blokkettilsekvensielledata
(somspråk). Viskalikkesepåslikearkitektureridettekurset,menholderosstilarkitekturerderalle
nodeneihvertlagerkoblettilallenodeneidetforegåendeognestelaget. Slikenevralenettverkkalles
som nevnt MLP’er, eller fully connected feed-forward nettverk. Her kommer fully connected nettop av
at alle nodene i nabolag har forbindelser vil hverandre, og feed forward av at informasjon sendes kun
fremover i nettverket, hvor fremover er definert som retningen fra input til output. La oss se nærmere
på hva som skjer med dataene på veien fra input- til output-laget.
Bruk gjerne skissen i figur 19 til hjelp, eller lag din egen. Generelt har vi følgende uttrykk for ak-
tiveringen a til en gitt node med indeks j i lag l av det nevrale nettverket
(cid:32) n (cid:33)
(cid:88)
al =g wl al−1 . (96)
j ij i
i=0
Her er
• l indeks for lag, hvor indeks 0 angir input-laget
• i indeks for node i forrige lag
• j indeks for node i det aktuelle laget
• al−1 aktivering av node i i forrige lag l−1
i
• g aktiveringsfunksjonen i det aktuelle laget.
Forbedreintuisjonkandetværelurtåtaforsegénnodeoggåstegvisgjennomindekseneilikning96.
Oppgave: Se på første (øverste) node i det første laget etter input-laget og skriv ned aktiveringen til
denne noden. Du bør komme frem til følgende uttrykk:
(cid:32) n (cid:33)
a(1) =g (cid:88) w(1)x . (97)
1 i1 i
i=0
Vi tar for oss tilfellet der vi har to input-features, og har bygget et skjult lag bestående av tre noder.
Nettverkets videre arkitektur er uten betydning for den aktuelle diskusjonen. Vi har altså i ∈ {1,2}
og j ∈{1,2,3}. Vi kan skrive aktiveringene i nettverkets første indre lag som
(cid:16) (cid:17)
a =g w(1)x +w(1)x (98)
1 11 1 21 2
(cid:16) (cid:17)
a =g w(1)x +w(1)x (99)
2 12 1 22 2
(cid:16) (cid:17)
a =g w(1)x +w(1)x (100)
3 13 1 23 2
etterå ha skrevet ut summen over input-laget. De tre likningene over kan skrives på matriseform som
følger
    
a(1) w(1) w(1)
1 11 21 (cid:20) x (cid:21)
a(1)=gw(1) w(1) 1  . (101)
 2   12 22  x 
a(1) w(1) w(1) 2
3 13 23
Kontroller at matrisemultiplikasjonen på høyre side skjer mellom to matriser med dimensjoner hen-
holdsvis 3×2 og 2×1, hvilket resulterer i en matrise av dimensjon 3×1, som er det vi har på venstre
side av likhetstegnet.
Genereltbestårdetførstelagetinettverketavnnoder,ogdetførsteindrelagetavmnoder. Overgan-
gen fra input-laget til det første indre laget innebærer altså en transformasjon fra n input features til
mnyeverdier. Dettegjelderforallelageneietnevraltnettverk: Degjørentransformasjonavdataene
demottar, tiletnyttdataromavsammedimensjonsomantallnoderidetaktuellelaget. Pågrunnav
ikke-lineariteten til aktiveringsfunksjonen g, er transformasjonen ikke-lineær. Oppsummert gjør hvert
lag i det nevrale nettverket en egen ikke-lineær transformasjon av dataene. Dette kan vi tolke som en
automatisk feature-transformasjon som utvikles i takt med at det nevrale nettverket lærer fra data.
