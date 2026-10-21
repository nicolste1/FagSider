# Tekstuttrekk av kilden

Kilde: `2026___TDT4172_Lecture_notes_and_equations 19.10.pdf` · datert October 19, 2026 · 62 sider · sha256 `26e628aa433a…`

> Generert av `tools/pdf_til_tekst.py`. Formler er uleselige her; filen brukes til å diffe versjoner.

## 1 Veiledet læring
<!-- side 3 -->



## 1.1 Data
<!-- side 3 -->

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
Grunnen til at vi ikke bør bruker PassengerId, er at denne variabelen ikke inneholder informasjon om
egenskapene til en passasjer, og sannsynligvis er tilfeldig valgt. Name bør kun brukes hvis vi ønskerå
lageenmodellsomforstårspråktilstrekkeliggodttilåkunnefinneenrelasjonmellomtypiskenavnog
for eksempel dyktighet i redningsbåter. For modellene vil skal lage, vil ikke Name inneholde relevant
informasjon.
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
Før vi begynnerå lage en modell bør vi få en oversikt over sammenhenger i dataene.
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
(a) (b)
(c) (d)
Figure 1: Bar-plot (a, b) og histogrammer (c, d) fra Titanic-dataene. Se beskrivelse i teksten.
å se på plottene i figur 1 får vi allerede en idé om at passasjerer i Pclass=0, kvinnelige passasjerer og
yngre passasjerer ofte overlever. Dette passer godt med det vi vet fra filmen :).
Når vi er ferdige medå preprosessere dataene og har studert dem gjennom plott, er vi klare for å
begynne med modelleringen, altsåå bygge en modell. For Titanic-dataene ønsker viå lage en modell
f som estimerer sannsynligheten forå overleve, target y, basert på verdiene i features x, altså p(y|x).
En modell som gjør dette gir oss prediksjoner f(x)=y .
pred

## 1.2 Logistisk regresjon
<!-- side 5 -->

Den enkleste modellen vi kan tenke oss er lineær regresjon,
n
(cid:88)
z = w x +b=wx+b, (2)
i i
i=1
hvor vektene w forteller oss hvor viktig hver feature x er for utfallet, altså verdien til z. En nyttig
i i
mental øvelse erå tenke over om z er et tall eller en vektor. Dette kan vi se basert på hvordan w og
Figure 2: Sigmoid-funksjonen.
x, som begge er vektorer, kombineres i uttrykket.
I likning 2 ser vi at z kan bli et hvilket som helst tall, mens vi er ute etter en sannsynlighet for
overlevelse, altså et tall mellom 0 og 1. En enkel løsning på dette erå bruke den logistiske funksjonen
σ(x), ogsåkaltSigmoid-funksjonenfordidenerformetsomen‘S’,sefigur2. Dennemapperreelletall
til domenet (0,1):
σ(z)= . (3)
1+e−z
Det kan være lurt å huske denne funksjonen, da vi kommer til å møte den igjen når vi diskuterer
nevrale nettverk, da under navnet aktiveringsfunksjon. Vetå sette uttrykket i likning 2 inn i likning 3
får vi følgende uttrykk, som representerer modellens prediksjon for target y:
y = . (4)
pred 1+e−(cid:80)
i
wixi+b

## 1.2.1 Trening og tapsfunksjon
<!-- side 6 -->

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
(a) (b)
Figure 3: Eksempler på en (a) konveks, og en (b) ikke-konveks funksjon.
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
<!-- side 9 -->

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
<!-- side 10 -->

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
tapet skal minke. Treffsikkerheten starter derimot lavt, og øker før den flater ut. Dette er også bra; vi
ønsker økende treffsikkerhet. Til sammen gir disse to kurvene oss et bilde av en modell som lærer av
dataene, og en treningsprosedyre som har foregått lenge nok. Hadde kurvene ikke flatet ut, hadde vi
trengt flere epoker for at modellen skulle lære ferdig. I dette tilfellet kunne vi også stoppet treningen
tidligere, etter rundt 20-25 epoker.
Selv om tap og treffsikkerhet kan fortelle oss om modellen lærer fra dataene, forteller de mildt sagt
kun en liten del av historien, og gir oss ikke et godt bilde på hva modellen er god på eller hvilke typer
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
datapunkter den typisk gjør feil på. De gir oss ikke en god anledning tilå analysere modellens styrker
ogsvakheter. Videregirikketallsomangirtapogtreffsikkerhetintuitivtmeningformennesker. Vibør
derfor velge en eller flere metrikker forå angi modellens ytelse, og disse metrikkene bør gi mening for
mennesker. I motsetning til tapsfunksjonen trenger ikke metrikken(e) vi velgerå være deriverbar(e).
Forklassifiseringsmodellerbaseresmangemetrikkerpåconfusionmatrix,hvisinnholdangirhvormange
av datapunktene klassifiseres riktig (true) og feilaktig (false) i de ulike klassene. I vårt tilfelle har vi
to klasser: 0 (negative), og 1 (positive), og vi kan sette opp en confusion matrix etter malen i figur 5.
Her plasseres de sanne prediksjonene (true positive/negative), altså prediksjonene som samsvarer med
target,pådiagonalen,ogdefalskeprediksjonene(falsepositive/negative)utenfordiagonalenimatrisen.
Basertpåverdieneiconfusionmatrixkanviregneutfleremetrikker, foreksempeldeangittitabell4.
Figure 5: Confusion matrix for binær klassifisering.

## 1.2.5 Klassifiseringsterskel
<!-- side 11 -->

Modellenvårreturnererettalliintervallet(0,1),ogenenkelmåteågjøredetteomtilenklassifisering
er det vi gjorde i koden for fit og predict, nemlig følgende linje
[1 if _y > 0.5 else 0 for _y in y_pred]
hvor vi tolker en prediksjon som Survived=1 hvis y pred>0.5, og ellers Survived=0. Her er tallet 0.5
klassifiseringsterskelen, og vi kunne i prinsippet valgt et annet tall. Hvis det var viktig for osså være
forsiktig, altså ikke predikere at en person vil overleve med mindre modellen er helt sikker, kunne vi
(a) (b)
Figure 6: ROC-kurven, som viser FPR og TPR for ulike klassifiseringsterskler i [0,1].
valgt en terskel på for eksempel 0.7 i stedet. Hvilken terskel som bør velges er avhengig av problemet,
og vi kan studere hvilket utslag ulike terskler har på ulike metrikker.
Det vanligste erå studere FPR og TPR som funksjon av klassifiseringsterskelen. Det gir oss Receiver
Operating Characteristic (ROC)- kurven, se figur 6a. Her beregner vi både FPR og TPR for mange
ulike klassifiseringsterskler fra 1 til 0.
Vi ønsker en høy TPR, altså sann positiv rate, mens vi ønsker at FPR, altså falsk positiv rate, holder
seglav. Hvisklassifiseringsterskelener1,vilnærmestingenprediksjonertolkessompositivklasse,slik
atbådeFPRogTPRerlave. Klassifiseringsterskelpå0tilsieratnærmestalleprediksjonertolkessom
positiv klasse, hvilket vil gi høye verdier for både FPR og TPR. Derfor starter ROC-kurven i (0,0) og
ender i (1,1). Det interessante er hva som skjer mellom disse punktene, særlig om TPR øker raskere
enn FPR, og for hvilke klassifiseringsterskel som gir best trade-off mellom de to.
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
sykdommer), er høy recall viktig.
Figure 7: Precision-recall-kurven for ulike klassifiseringsterskler i [0,1].

## 1.2.6 Kort om entropi og cross entropy loss
<!-- side 13 -->

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
Figure 8: To delvis overlappende mengder A og B.

## 1.2.7 Bayes’ teorem
<!-- side 14 -->

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
<!-- side 16 -->

Om vi ønsker å estimere en d-dimensjonal fordeling, er antallet datapunkter som må samles inn
avhengig av d. For å få en intuisjon kan vi tenke oss at vi igjen estimerer fordelingen ved hjelp
av et histogram med 10 bins og der vi er fornøyde med 10 datapunkter per bin. Hvordan skalerer
sammenhengen mellom dimensioner (i vårt tilfelle antall features) og antall datapunkter vi trenger?
Sjekk tabellen under når du tror du har svaret.
Tabell 5 viser antall nødvendige datapunkter for fire ulike verdier av d. Vedien d = 784 er tatt med
fordidetteerdimensjonalitetentildetmyebruktedatasettetMNIST,sombeståravhåndskrevnesifre
i sort-hvitt (gjerne sjekk det ut). Til sammenlikning er det ∼1082 atomer i universet.
Table 5
Dimensjoner d Bins Datapunkter
1 10 102
3 103 104
10 1010 1011
784 10784 10785

## 1.2.10 Trening på ubalanserte data
<!-- side 17 -->

En masterstudent blir invitert til jobbintervju som ML-utvikler. Under intervjuet får kandidaten
følgende spørsmål: “Vi har et datasett fra det norske helsevesenet, og skal lage en modell som klassi-
fiserer friske og syke personer. Modellen vår får en treffsikkerhet (accuracy) på 99%, men den klarer
nesten ikkeå identifisere syke personer. Hva har skjedd?”
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
klasser i det resulterende datasettet.
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
<!-- side 18 -->



## 1.3.1 Noder
<!-- side 18 -->

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
<!-- side 19 -->

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

## 1.3.4 Bygge beslutningstrær
<!-- side 20 -->

Idettekursettrengerdereikkebyggebeslutningstrærselv, menderebørkunneangipseudokodeforå
byggeetbeslutningstre. Forålagebeslutningstrærbrukervisomoftestbiblioteketsklearn, medden
innebygde DecisionTreeClassifier. Denne lar oss velge mellom de splitt-kriteriene Gini impurity,
entropy og log loss.
Gini impurity og entropi oppfører seg likt, og vil i hovedsak gi opphav til samme feature splits. Hov-
edforskjellen mellom de to ligger i at beregning av entropi krever en ekstra logaritme, som koster mer
å beregne. Gini impurity er derfor mindre beregningstungt, altså raskereå regne ut. Denne er også
default i sklearn.DecisionTreeClassifier.
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

## 1.4 Regresjon
<!-- side 21 -->



## 1.4.1 Data og tapsfunksjon
<!-- side 21 -->

Se på datasettet i tabell 7, og tilhørende figur 10a. Igjen representerer y targets (“riktig svar”), så vi
holder oss i regimet til veiledet læring. Men da vi gjorde klassifisering hadde vi targets som fordelte
seg i predefinerte kategorier (to kategorier i det binære tilfellet). Disse nye dataene våre tilhører
ikkekategorier,menharkontinuerligeverdier. Viharaltsåikkelengermedenklassifiseringsoppgaveå
gjøre. Prediksjontilkontinuerligeverdierkallesregresjon. Eksemplerpåregresjonsoppgaverinkluderer
å predikere skåren til en film, estimere formuesverdien til en bolig, forutse sykefraværet til en ansatt,
osv. Generelt: estimering av en (eller flere) kontinuerlig(e) verdi(er). Vi starter igjen med det
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
enkleste tilfellet, og den enkleste regresjonsmodellen er en lineær modell. Likningen for en lineær
(a) (b)
Figure 10: (a) Datasett til lineær regresjon, og (b) en lineær regresjonsmodell med høy bias.
regresjonsmodell er
f(x)=β +β x +β x +...β x . (50)
0 1 1 2 2 n n
Modellen har en parameter β per feature x (kolonne i datasettet), og en parameter β kalt bias.
i i 0
Til sammen har vi (n +1) parametre for n features. Vi kan gjenbruke mesteparten av koden fra
klassifiseringen forå trene denne modellen, altså tilpasse parametrene basert på dataene. Vi må igjen
bruke gradient descent forå optimalisere parametrene.
Vi trenger en tapsfunksjon som guider læringsalgoritmens justering av modellparametrene, altså et
kvantitativt mål på hvor godt modellprediksjonen passer med target per datainstans. Men regresjons-
modellenvårgjørikkeklassifisering,såvikanikkegjenbruketapsfuksjonenfratidligere. Denvanligste
tapsfunksjonen for regresjon er mean squared error:
N
1 (cid:88)(cid:16) (cid:17)2
MSE(x)= y(i)−f(x(i)) . (51)
2N
i=1
Her er y(i) er target for datapunkt x(i), f er modellen, og summen (hhv gjennomsnittet) går over alle
N instansene (radene) i datasettet. Faktoren 1 er kun for convenience, og det finnes definisjoner av
MSE der den ikke er med. MSE er liten hvis modellens prediksjon f(x) er nærme den sanne verdien
y, og stor hvis de to er ulike.
Hvis vi har et datasett med én feature x , har den lineære regresjonsmodellen to parametre, og kan
skrives som
f(x)=β +β x . (52)
0 1 1
Dennelikningenerpåsammeformsomlikning2,menmedandreparameternavn,valgtkunforåskille
dettetilfellettydeligfralogistiskregresjon. Bias-parameterenβ ilikning52angirhvorregresjonslinjen
krysser y-aksen; det er funksjonsverdien i x = 0. Dette leddet forflytter alle modellens prediksjoner
med en konstant verdi. Tenk på det som en “baseline”-funksjonsverdi uten kjennkap til noen verdier
av featurene, som justeres til modellens prediksjon når featureverdiene tas i betraktning. Da kommer
den andre parameteren, β , i spill. Denne angir stigningstallet til linja.
Den deriverte av tapsfunksjonen med hensyn på de to parametrene er
N
∂L 1 (cid:88) ∂ (cid:16) (cid:17)2
= y(i)−β x(i)−β (53)
∂β 2N ∂β 1 0
0 0
i=1
N
1 (cid:88)(cid:16) (cid:17)
= β x(i)+β −y(i) (54)
N 1 0
i=1
N
∂L 1 (cid:88) (cid:16) (cid:17)
= x(i) β x(i)+β −y(i) . (55)
∂β N 1 0
i=1
Her ser vi nytten av faktoren 1: den oppheves av potensen under derivasjonen.
Fragradiententiltapsfunksjonenfårvifølgendeoppdateringsregeltilparametreneiregresjonsmodellen
vår
N N
1 (cid:88) 1 (cid:88)
β ←β −η (f(x(i))−y(i)) β ←β −η x(i)(f(x(i))−y(i)). (56)
0 0 N 1 1 N
i=1 i=1
Mye av koden fra klassifiseringsoppgaven kan gjenbrukes forå tilpasse modellen i likning 52 til et gitt
datasett.

## 1.4.2 Polynomisk regresjon og feature engineering
<!-- side 23 -->

Sepådatasettetvistifigur11a. Denoransjelinjenrepresentererdenunderliggendefordelingen, ogde
blå punktene representerer datapunkter generert fra denne fordelingen, med tilfeldig støy trukket fra
en gaussisk fordeling (med forventningsverdi µ=0 og standardavvik σ =0.5) lagt til.
(a) (b)
Figure11: (a)Datasett(blåpunkter)generertavenpolynomisklikningavgradto(oransjelinje)med
gaussisk støy, og (b) en lineær regresjonsmodell tilpasset dette datasettet.
Figur 11b viser en lineær modell tilpasset til disse dataene, og denne bekrefter det vi nok forventet:
Lineær regresjon fungerer dårlig forå modellere en parabel.
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
y =β +β x +β x . (57)
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
f(x)=β +β x+β x2+···+β xM. (58)
0 1 2 M
og figur 12 viser data generert fra et polynom av ukjent grad.
Figure 12: Datasett generert fra polynom av ukjent grad, med gaussisk støy
(a) (b) (c)
Figure13: (a)Lineærregresjonogregresjonmedgenerertefeaturestilgrad(b)3og(c)15,tildatasettet
representert av de blå punktene.
Figurene 13a, 13b og 13c viser lineær regresjon til dataene i figur 12, med feature transformasjoner
til ulike grader. Her ser vi at en mer kompleks modell (høyere grads polynom) ikke nødvendigvis gir
lavere tap (MSE), men at både for lav og for høy kompleksitet i modellen er problematiske.

## 1.4.3 Trening, testing og validering
<!-- side 24 -->

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
undertilpasning er høy loss på treningsdataene.
(a) (b) (c)
Figure 14: Trenings- og valideringstap for tre ulike modeller, se beskrivelse i teksten.
• Hvis begge kurvene synker jevnt og flater ut, betyr det at modellen klarerå modellere trenings-
dataene, og samtidig klarerå generalisere til nye data.
Disse metrikkene kan også brukes tilå justere hyperparametre underveis i treningen. For eksempel er
det vanligå minke læringsraten i løpet av treningen. De kan også brukes tilå avgjøre når treningen
bør stanse: det er ikke nødvendigå bestemme på forhånd hvor mange epoker modellen skal trene.
I stedet kan man lage et early stopping criterion som stanser treningen for eksempel når tapet på
valideringsdataene ikke har minket innenfor en toleranse i løpet av de siste n epokene.

## 1.4.4 Kryssvalidering
<!-- side 26 -->

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

## 1.4.5 Bias variance tradeoff
<!-- side 26 -->

Når vi velger en læringsalgoritme velger vi en estimator for prediksjonsproblemet vårt. For både
logistisk og lineær regresjon har vi brukt (og for nevrale nettverk kommer vi til å bruke) gradient
descent. Dette er vår algoritme forå optimalisere parametre basert på data, så det er vår estimator.
Vi må forholde oss til at estimatoren vår har både bias og varians.
Vi antar at target-verdiene vi observerer (for både klassifisering og regresjon) følger en eller annen
funksjon som ingen unntatt universet kjenner til, la oss kalle denne F. Basert på observasjoner x
gir denne funksjonen den sanne verdien av y, utover støy som er utenfor vår kontroll (for eksempel
måleapparatet, eksterne faktorer, osv),
y =F(x)+ε. (59)
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
(y−f(x;D))2, (60)
ønsker viå ende opp med en modell f som også har lavt tap på nye datapunkter, altså datapunkter
som ikke finnes i D. Det betyr at vi bryr oss om forventningsverdien over mange ulike trekninger av
treningsdatasetet,
(cid:104) (cid:105)
E (y−f(x;D))2 . (61)
D
Det viser seg at uansett hvilken funksjon f vi velger, kan vi dekomponere uttrykket over – altså feilen
vi forventer at den gjør på et nytt datapunkt x – som følger,
(cid:104) (cid:105)
E (y−f(x;D))2 =(Bias [f(x;D])2+Var [f(x;D)]+σ2. (62)
D D D
Dette er opphavet til bias-variance tradeoff, som forteller oss at tapet en læringsalgoritme ikke klarer
å minimere vekkstammerfra tre ulike typerfeil, nemlig bias, variansog irredusibeltstøy. La oss først
se på bias og varians hver for seg, og så se hvordan vi kan utlede denne dekomposisjonen.
Bias til en læringsalgoritme har ingenting med det konstante leddet i lineære modeller å gjøre, og
heter det samme kun forå forvirre studenter. Biasen som representerer det systematiske avviket til
estimatoren beregnes over ulike trekninger av treningsdata,
Bias [f(x;D)]=E [f(x;D)−F(x)] (63)
D D
=E [f(x;D)]−F(x). (64)
D
Dette er altså det forventede avviket mellom modellen tilpasset på et gitt datasett og den faktiske
target-verdien, begge evaluert på datapunktet x. Enkelt sagt: hvor mye vi må forvente at modellen
bommer på nye data. Vi kan tenke på dette som feilen som følger av de innebyggede forenklingene i
modellen.
En læringsalgoritme med liten bias (i absoluttverdi) har typisk tilstrekkelig kompleksitet forå tilpasse
seg til treningsdataene. Høy bias tyder typisk på at læringsalgoritmen ikke klarerå modellere alle
sammenhengene i dataene. Veldig enkelt kan vi tenke på bias som en tendens tilå alltid bomme i
samme retning.
Variansen til en læringsalgoritme over ulike trekninger av data er
(cid:104) (cid:105)
Var [f(x;D)]=E (E [f(x;D)]−f(x;D))2 (65)
D D D
altså hvor mye vi kan forvente at modellen varierer rundt sitt eget gjennomsnitt. En læringsalgoritme
medhøyvariansertypiskforsensitivtilsmåfluktuasjoneritreningsdataene,ogharkanskjemodellert
tilfeldig støy vel så mye som faktiske sammenhenger. Mer komplekse modeller, altså modeller med
mange parametre, har en tendens tilå ende opp med ulike parameterverdier for hver trening, altså for
hvert treningsdatasett. Slike modeller har stor varians i de estimerte parameterverdiene.
Nå som vi kjenner uttrykkene for bias og varians kan vi utlede sammenhengen over, gjennomå bruke
følgende nyttige relasjoner
E[ε]=0 (66)
E[c]=c (67)
E[cX]=cE[X] (68)
E[X+Y]=E[X]+E[Y] (69)
E[XY]= ! E[X]E[Y] for statistisk uavhengige X og Y. (70)
tilå skrive om MSE-tapsfunksjonen. Her er X og Y hvilke som helst tilfeldige variabler, men greier
som har en sannsynlighetsfordeling vi kan gjøre trekninger fra.
Vidropperherkonstanten 1 ogindeksen påforventningsverdienforenenklerenotasjoniutledningen,
2 D
og skriver
(cid:20)(cid:16) (cid:17)2 (cid:21)
MSE=E y−f(x;D) (71)
(cid:20)(cid:16) (cid:17)2 (cid:21)
=E F(x)+ε−f(x;D) (72)
=E (cid:20)(cid:16) F(x)−f(x;D) (cid:17)2 (cid:21) +2E (cid:104)(cid:16) F(x)−f(x;D) (cid:17) ε (cid:105) +E(cid:2) ε2(cid:3) (73)
=E (cid:20)(cid:16) F(x)−E[f(x;D)]+E[f(x;D)]−f(x;D) (cid:17)2 (cid:21) +0+E(cid:2) ε2(cid:3) (74)
(cid:20)(cid:16) (cid:17)2 (cid:21) (cid:20)(cid:16) (cid:17)2 (cid:21)
=E F(x)−E[f(x;D)] +E E[f(x;D)]−f(x;D) (75)
+2E (cid:104)(cid:16) F(x)−E[f(x;D)] (cid:17)(cid:16) E[f(x;D)]−f(x;D) (cid:17)(cid:105) +E(cid:2) ε2(cid:3) (76)
Vi tar for oss hvert ledd for seg. Det første leddet er
(cid:20)(cid:16) (cid:17)2 (cid:21) (cid:104) (cid:105)
E F(x)−E[f(x;D)] =E F(x)2−2(F(x)E[f(x;D)]+E[f(x;D)]2 (77)
=F(x)2−2F(x)E[f(x;D)]+E[f(x;D)]2 (78)
(cid:16) (cid:17)2
= F(x)−E[f(x;D)] (79)
=Bias [f(x;D)]2 , (80)
D
og andre ledd kan vi sammenlikne med likning 65 forå identifisere
(cid:20)(cid:16) (cid:17)2 (cid:21)
E E[f(x;D)]−f(x;D) =Var[f(x;D)]. (81)
Tredje ledd blir
(cid:104)(cid:16) (cid:17)(cid:16) (cid:17)(cid:105)
2E F(x)−E[f(x;D)] E[f(x;D)]−f(x;D) (82)
(cid:104) (cid:105)
=2E F(x)E[f(x;D)]−F(x)f(x;D)−E[f(x;D)]2+E[f(x;D)]f(x;D) (83)
(cid:16) (cid:17)
=2 F(x)E[f(x;D)]−F(x)E[f(x;D)]−E[f(x;D)]2+E[f(x;D)]2 (84)
=0. (85)
Til slutt, se på likning 65 og overbevis deg om at
E[ε2]=Var[ε]=σ2. (86)
Vi samler leddene og ser at vi kan skrive tapet på et datapunkt x som
MSE(x)=Bias [f(x;D)]2+Var[f(x;D)]+σ2. (87)
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
<!-- side 29 -->

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
I forelesningen ser vi at sklearn gjerne prøverå lage et tre med dybde 12 og dermed 85 noder til
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
<!-- side 31 -->

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
<!-- side 32 -->

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
<!-- side 32 -->

Innen maskinlæring refererer begrepet boosting til algoritmer som iterativt trener svake modeller (for
eksempel trestumper) på en datafordeling, og kombinerer disse til en sterk modell (ensemblet). Kon-
septet stammer fra en samling publikasjoner av Kearns og Valiant (1988, 1989), og Schapire (1990),
som undersøkte muligheten for at flere svake modeller, altså modeller hvis prediksjoner er kun svakt
korellertmedtargetidataene,kansettessammentilensterkmodell,altsåenmodellhvisprediksjoner
er vilkårlig sterkt korellert med targets i dataene. Begrepet boosting handler om at feilene begått av
Trenings data slebaL
Test data
lgoritme Modell
Trening Inferens
nojskiderP
Trenings data slebaL
Test data
lgoritme 1 Modell 1
lgoritme 2 Modell 2
lgoritme 3 Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
3M
M
M gjennomsnitt 3M
2M
Test sampl
M
M
, 1, , alse, emale, ,
n
ppiget
M M M M
3M 2M gjennomsnitt 3M
M M
M
3M
2M M
tvalge n 2M gjennomsnittspris M
n
2M M
gjennomsnitt 3M M M
2M M
n
slebaL
slebaL
av data slebaL
av data slebaL
1 lgoritme 1 Modell 1
lgoritme 2 Modell 2 Me a t t a a
Meta
eatres ata
featres lgoritme 3 Modell 3
Meta
ata
Meta ata
Meta
ata
Meta 1 ata
lgoritme 1 Modell 1
eatres
lgoritme 2 Modell 2 Me a t t a a
eatres featres lgoritme 3 Modell 3
Trening
slebaL Metaalgoritme Metamodell
slebaL
slebaL
Trenings data slebaL
Test data
s T b re s n e i t n 1 g lgoritme Modell 1
s T b re s n e i t n 2 g lgoritme Modell 2
s T b re s n et in 3 g lgoritme Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
Trenings data slebaL
Test data
s T b re s n e i t n 1 g lgoritme 1 Modell 1
s T b re s n e i t n 2 g lgoritme 2 Modell 2
s T b re s n et in 3 g lgoritme 3 Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg nojskiderp
etsiS
Trenings data slebaL
Test data
s T b re s n e i t n 1 g lgoritme 1 Modell 1
s T b re s n e i t n 2 g lgoritme 2 Modell 2
s T b re s n et in 3 g lgoritme 3 Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
nojskiderP
nojskiderP
gniregergg
nojskiderp
etsiS
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
Trenings data slebaL
Test data
lgoritme Modell 1
lgoritme Modell 2
lgoritme Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg nojskiderp etsiS
Trenings data
tilpass datavektene
Trenings data
tilpass datavektene
Trenings data
slebaL
slebaL
slebaL
Test data
α1 Modell 1
α2 Modell 2
α3 Modell 3
Trening
n
ojskiderP
n
ojskiderP
n
ojskiderP
Inferens
ttinsmonnejg
tetkeV 3α ,2α ,1α
nojskiderp
etsiS
Trenings data
endre target
Trenings data endre target
Trenings data
slebaL
slebaL
slebaL
Test data
α1 Modell 1
α2 Modell 2
α3 Modell 3
Trening
n
ojskiderP
n
ojskiderP
n
ojskiderP
Inferens
ttinsmonnejg
tetkeV 3α ,2α ,1α
nojskiderp
etsiS
Trening
sbset 1
Trenings
data
slebaL
eatres
Trening
sbset 2
Trening
sbset 3
renojsavresb
eatres
Trekkin
med tilbakelegging
eatres
renojsavresb
eatres
eatres
Trekkin
med tilbakelegging
renojsavresb
eatres
Trekkin
med tilbakelegging
eatres
renojsavresb
Prediksjon Prediksjon Prediksjon
12 1
Siste prediksjon

eatres
Trekkin
med tilbakelegging
eatres
renojsavresb
Trenings
data
Figure 17: Enkel illustrasjon av AdaBoost.
eatres
Trekkin
med tilbakelegging
2 alse
slebaL
Test data
lgoritme Modell
Trening Inferens
nojskiderP
Trenings data slebaL
Test data
lgoritme 1 Modell 1
lgoritme 2 Modell 2
lgoritme 3 Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
3M
M
M gjennomsnitt 3M
2M
Test sampl
M
M
, 1, , alse, emale, ,
n
ppiget
M M
M M
3M 2M gjennomsnitt 3M
M M M 3M
2M M
2M M talge n gjennomsnittspris
n
2M M
gjennomsnitt 3M M M
2M M
n
slebaL
slebaL
a data slebaL
a data slebaL
1 lgoritme 1 Modell 1
Meta- lgoritme 2 Modell 2 ata
Meta-
eatres ata
featres lgoritme 3 Modell 3
Meta- ata
Meta- ata
Meta-
ata
Meta- 1 ata
lgoritme 1 Modell 1
eatres
Meta- lgoritme 2 Modell 2 ata
eatres
featres lgoritme 3 Modell 3 Trening
slebaL
=
=
Meta-algoritme Meta-modell
slebaL
slebaL
Trenings data slebaL
Test data
Trening lgoritme Modell 1 sbset 1
Trening lgoritme Modell 2 sbset 2
Trening sbset 3 lgoritme Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
Trenings
data
slebaL
Test data
Trening lgoritme 1 Modell 1 sbset 1
Trening
lgoritme 2 Modell 2 sbset 2
Trening
sbset 3 lgoritme 3 Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
Trenings data slebaL
Test data
Trening lgoritme 1 Modell 1 sbset 1
Trening lgoritme 2 Modell 2 sbset 2
Trening
sbset 3 lgoritme 3 Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
-
-
nojskiderP
nojskiderP
Trenings data slebaL
Test data
lgoritme Modell 1
lgoritme Modell 2
lgoritme Modell 3
Trening Inferens
n
ojskiderP
n
ojskiderP
n
ojskiderP
gniregergg
nojskiderp
etsiS
Trenings data
tilpass dataektene
Trenings data
tilpass dataektene
Trenings
data
slebaL
slebaL
slebaL
Test data
α1 Modell 1
α2
Modell 2
α3
Modell 3
Trening
n
ojskiderP
n
ojskiderP
n
ojskiderP
Inferens
ttinsmonnejg
tetkeV
3α
,2α
,1α
nojskiderp
etsiS
Trenings data
endre target
Trenings data
endre target
Trenings data
slebaL
slebaL
slebaL
Test data
α1 Modell 1
α2 Modell 2
α3 Modell 3
Trening
n
ojskiderP
n
ojskiderP
n
ojskiderP
Inferens
ttinsmonnejg
tetkeV
3α ,2α
,1α
nojskiderp
etsiS
Trening
sbset 1
Trenings
data
slebaL
eatres
Trening
sbset 2
Trening
sbset 3
renojsaresb
eatres
Trekkin
med tilbakelegging
eatres
renojsaresb
eatres
eatres
Trekkin
med tilbakelegging
renojsaresb
eatres
Trekkin
med tilbakelegging
eatres
renojsaresb
Prediksjon Prediksjon Prediksjon
12 1
Siste prediksjon

eatres
Trekkin
med tilbakelegging
eatres
renojsaresb
Figure 18: Enkel illustrasjon av Gradient Boosting.
de forrige modellene gjør den påfølgende modellen i iterasjonen bedre (“booster” den)2. I stedet forå
kombinere flere modeller parallelt, organiseres de altså sekvensielt, og hver modell forholder seg til de
forrige på en måte som gjør ensemblet sterkere enn hver enkelt modell er for seg selv. Vi skal se på to
algoritmer som gjør dette.
AdaBoost-algoritmen bygger et ensemble av modeller som korrigerer hverandres feil, gjennom en
iterativtreningsprosedyre(seFigur17forenkelillustrasjon). Istartenavprosedyrenharallepunktene
i treningsdataene samme vekt, og vi trener én modell som predikerer på disse dataene. Basert på
targetsserviforhvilkedatapunktermodellenharstørsttap,oginesteiterasjonøkesvektenefordisse
datapunktene. Deretter trenes en ny modell, som igjen predikerer på et datasett, før vektene igjen
justeres.
Gradient boostinger,tilforskjellfraAdaBoost,ikkebasertpåvektingavobservasjoner(seFigur18
for en enkel illustrasjon). I stedet predikerer hver modell forskjellen mellom targets og den forrige
modellens prediksjon, såkalte pseudo-residuals. Det nye ensemblet lages vedå følge læringsregelen
new_ensemble = previous_ensemble - learning_rate * new_tree
Dette uttrykket bør minne deg om gradient descent, som er opphavet til navnet gradient boosting. Vi
gjør altså ikke gradient descent i rommet over alle mulige parameterverdier, men i rommet over alle
mulige trær ensemblet vårt kan bestå av. Gradienten i dette tilfellet er altså -(label-prediction).
Det er en god regelå alltid bruke en ensemble-modell som referanseverdi for hvor godt en modell kan
gjøre det, når du jobber med et maskinlæringsproblem med tabulære data (altså den typen data vi
bruker i dette kurset).
2AdaBoosttarhensyntilalletidligeremodeller,mensGradientBoostserpåprediksjonsfeilentildenforrigemodellen.
eatres
Trekkin
med tilbakelegging
2 alse

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
<!-- side 34 -->

Perseptronet er forgjengeren til moderne nevrale nettverk, og ble introdusert av McCulloch og Pitts
(1943). Den første implementasjonen ble bygget, i hardware, av Rosenblatt (1957). Tanken var at
perseptronet skulle være en maskin; ikke et program (denne setningen er verdt å dvele ved). Et
perseptronbeståravénellerflereberegningsenheter, oftekaltnoder, ogidenopprinneligeformulerin-
gen var nodene threshold logic units (TLU). Disse mapper inputen x til en output f(x) som tar en
binær verdi,
f(x)=H(wx+b), (88)
hvorH erHeavisidestegfunksjonen, sefigur20a, ogivårkontekstkallesenaktiveringsfunksjon. Både
x og w er vektorer i det generelle tilfellet. En TLU, beskrevet av likningen over, er enten aktiv, altså
har output = 1, eller ikke aktiv, altså har output = 0. Hvilke data x som gir hvilken aktivering av
noden er avhengig av vektene (w,b). Siden output er binær, gjør denne en klassifiseringsoppgave,
og for at perseptronet skal ha høy treffsikkerhet i klassifiseringen må vektene justeres til riktig verdi.
Dette gjøres gjennom veiledet læring.
Som før sendes instanser fra treningsdataene enkeltvis gjennom modellen, denne gjør en prediksjon
yˆ og tapet beregnes basert på target y. Parametrene i modellen oppdateres forå redusere tapet per
treningsinstans. Dette gjentas for alle instansene i treningsdataene, hvilket utgjør én epoke (epoch),
og hele prosessen gjentas flere ganger (epochs). Vi kan implementere et perseptron vedå gjenbruke
koden fra logistisk regresjon, med likning 88 som modell, altså:
activation = sum(weight_i * x_i) + bias
prediction = 1.0 if activation >= 0.0 else 0.0
Igjen er treningsprosessen en loop over treningsdataene med egnet tapsfunksjon L, og parametrene
oppdateres etter regelen i likning 13, gjentatt under:
∂
θt+1 =θt−η L(f(x;θ),y). (89)
∂θ
Når vi skal derivere tapsfunksjonen, som inneholder prediksjonen, er vi nødt tilå derivere Heaviside-
funksjonen. Denneer0overalt,og∞iettpunkt,ogdermedikkedefinert. Somderegaranterthusker,
må tapsfunksjonen være deriverbar forå finne gradienten til parameteroppdateringen. I den opprin-
nelige formuleringen av perseptronet (Rosenblatt) er leddet med den deriverte utelatt, så følgende
uttrykk kan brukes
w ←w +η(y −yˆ) . (90)
i i i i
I kode er det vanligå utvide x med et første element med verdi 1, og w har et tilsvarende ledd som
representerer b, slik at vi får den mer kompakte operasjonen under.
w = w + learning_rate * (expected - predicted) * x
Sepådataeneifigur19a. Disserepresenterertofeaturesx ogx ,ogfargenangirdetomuligeklassene
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
Se på dataene i figur 19b.
(a) (b)
Figure 19: Klassifiseringsdatasett med (a) to klasser, generert av sklearn.datasets.make blobs, og
(b) tre klasser, generert av sklearn.datasets.make classification.
Forå gjøre denne klassifiseringsoppgaven, kan vi gjenbruke koden fra tidligere, og treningsprosedyren
forblir den samme. Hvis man har implementert .fit() og .predict() selv, må koden eventuelt
tilpasses forå håndtere en vektmatrise (i stedet for en -vektor), da parameteroppdateringen nå følger:
w ←w +η(y −yˆ )x . (91)
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

## 2.2 Aktiveringsfunksjoner
<!-- side 36 -->

En ulempe ved perseptronet er at en liten endring i input kan føre til en stor endring i output. Dette
skyldes Heaviside-funksjonen, som sender funksjonsverdien til enten 0 eller 1, se figur 20a. Et bedre
alternativhaddeværtåginodenemulighetentilåreturnerekontinuerligeverdier,eventueltiintervallet
[0,1]. OmvierstatterHeaviside-funksjonenmedenfunksjonsomreturnererkontinuerligeverdier, har
vilagetdentypennodevifinnerimodernenevralenettverk. Vanligeaktiveringsfunksjonerersigmoid-
funksjonen (som vi brukte for logistisk regresjon), se figur 20b, softmax, og ReLU, se figur 20c. Disse
aktiveringsfunksjonene brukes til ulike formål: Hvis modellen skal gjøre binær klassifisering, er det
vanlig å ha en sigmoid-aktiveringsfunksjon i noden i nettverkets siste lag, for å sikre at modellens
prediksjon havner i intervallet [0,1]. Sigmoid-funksjonen er den samme som tidligere, men gjentatt
her for enklere sammenlikning med de andre aktiveringsfunksjonene:
σ(x)= . (92)
1+e−x
I en modell som gjør ikke-binær klassifisering er det vanligå bruke en softmax-aktiveringsfunksjon i
output-nodene:
exi
softmax(x) = , (93)
i (cid:80) exj
j
som sikrer at aktiveringene summerer til 1. Da representerer hver av output-nodene datapunktets
predikerte tilhørighet til de respektive klassene, og vi må ha én output-node per klasse.
Modernenevralenettverkharsomregelflerelag,mellominput-ogoutput-lagene,seavsnitt2.3. Slike
modeller kalles multi layer perceptrons (MLP), da de har multiple lag. Vi står relativt fritt tilå velge
aktiveringsfunksjoner til disse lagenes noder, og i dette kurset vil vi holde oss til den såkalte rectified
linear unit (ReLU) aktiveringsfunksjonen:
ReLU(x)=max(0,x). (94)
MLP-modeller som ikke gjør klassifisering men regresjon, må ha output-noder som kan returnere
kontinuerlige tallverdier som ikke er begrenset til et intervall (som [0,1] i klassifisering). Som regel
brukes da en ingen aktiveringsfunksjon (tilsvarende en lineær aktiveringsfunksjon) i output-laget.
(a) (b) (c)
Figure 20: De tre aktiveringsfunksjonene (a) Heaviside, (b) sigmoid, og (c) ReLU.

## 2.3 Arkitektur
<!-- side 36 -->

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
Bruk gjerne skissen i figur 21 til hjelp, eller lag din egen. Generelt har vi følgende uttrykk for ak-
tiveringen a til en gitt node med indeks j i lag l av det nevrale nettverket
(cid:32) n (cid:33)
(cid:88)
al =g wl al−1+bl . (95)
j ij i j
i=0
Her er
• l indeks for lag, hvor indeks 0 angir input-laget
• i indeks for node i forrige lag
• j indeks for node i det aktuelle laget
• al−1 aktivering av node i i forrige lag l−1
i
• g aktiveringsfunksjonen i det aktuelle laget.
Forbedreintuisjonkandetværelurtåtaforsegénnodeoggåstegvisgjennomindekseneilikning95.
Vi tar for oss tilfellet der vi har to input-features, og har bygget et skjult lag bestående av tre noder.
Nettverkets videre arkitektur er uten betydning for den aktuelle diskusjonen. Vi har altså (i = 1,2),
og (j =1,2,3). Vi kan skrive aktiveringene i nettverkets første indre lag som
(cid:16) (cid:17)
a(1) =g w(1)x +w(1)x +b(1) (96)
1 11 1 21 2 1
(cid:16) (cid:17)
a(1) =g w(1)x +w(1)x +b(1) (97)
2 12 1 22 2 2
(cid:16) (cid:17)
a(1) =g w(1)x +w(1)x +b(1) (98)
3 13 1 23 2 3
etterå ha skrevet ut summen over input-laget. De tre likningene over kan skrives på matriseform som
følger
     
a(1) w(1) w(1) b(1)
1 11 21 (cid:20) x (cid:21) 1
a(1)=gw(1) w(1) 1 +b(1) . (99)
 2   12 22  x  2 
a(1) w(1) w(1) 2 b(1)
3 13 23 3
Kontroller at matrisemultiplikasjonen på høyre side skjer mellom to matriser med dimensjoner hen-
holdsvis 3×2 og 2×1, hvilket resulterer i en matrise av dimensjon 3×1, som er det vi har på venstre
side av likhetstegnet.
Genereltbestårdetførstelagetinettverketavnnoder,ogdetførsteindrelagetavmnoder. Overgan-
gen fra input-laget til det første indre laget innebærer altså en transformasjon fra n input features til
Figure21: Skisseavetnevraltnettverk,somvistiforelesning. Herrepresentererf aktiveringsfunksjo-
nen (g i teksten).
mnyeverdier. Dettegjelderforallelageneietnevraltnettverk: Degjørentransformasjonavdataene
demottar, tiletnyttdataromavsammedimensjonsomantallnoderidetaktuellelaget. Pågrunnav
ikke-lineariteten til aktiveringsfunksjonen g, er transformasjonen ikke-lineær. Oppsummert gjør hvert
lag i det nevrale nettverket en egen ikke-lineær transformasjon av dataene. Dette kan vi tolke som en
automatisk feature-transformasjon som utvikles i takt med at det nevrale nettverket lærer fra data.

## 2.4 Backpropagation
<!-- side 38 -->

Nårnevralenettverkgjørenprediksjon, altsåprodusererenoutput, sierviatdegjørenforward pass:
de går fra data (input) til prediksjon (output) vedå transformere dataene gjennom de ulike lagene.
Hvis vektene i nodene, som svarer til det nevrale nettverkets modellparametre, har riktige verdier, er
detsmåavvikmellomoutputogtargetsidataene. Tenkoverhvordandisseparametrenekantilpasses,
spesifikt: tenk over hvordan vi kan gjøre gradient descent for parametrene i et nevralt nettverk.
Som tidligere bør vi bevege oss i parameterrommet, i den retningen der tapet mellom prediksjon
og targets minker, altså langs gradienten til tapsfunksjonen. Denne gradienten er en vektor med
like mange elementer som vi har parametre i nettverket. Formelt svarer dette til gradient descent
for lineær regresjon, og igjen forteller størrelsen til hvert element i gradientvektoren oss hvor følsom
tapsfunksjonenerfordentilsvarendeparameteren. Forskjellenfralineærregresjonliggeriatetnevralt
nettverk bestående av mange lag, altså har mange noder der vi ikke kjenner den “riktige verdien”.
Dette gjelder alle nodene i indre/skjulte lag, da disse ikke er direkte forbundet med både dataene og
targets. Likevel finnes det en metode for å beregne gradienten til tapsfunksjonen som funksjon av
parametrene. Dette kalles backpropagation, eller tilbakepropagering, og i dette kurset forventes det at
dere utvikler en intuisjon for hvordan backpropagation fungerer.
Vibrukereteksempelforåfåenintuitivforståelse,ogigjenanbefalesdetatdutegnerenfigur,gjerne
inspirertavslidesbruktiforelesningen. Antaatviharetnevraltnettverkmedtoinput-noder,toindre
lag med henholdsvis fire noder, og et output-lag med tre noder. Anta videre at det nevrale nettverket
har gjort en prediksjon yˆ= (0.1,0.1,0.8) på et datapunkt med target y = (1,0,0). Vi ser at både yˆ
ogyˆ harstoreavvikfratarget-verdienesine, mensyˆ haretliteavvikfrasintilsvarendetarget-verdi.
3 2
Vi bruker indeks l=0 for input-laget, l=1,2 for de to indre lagene, og l=3 for output-laget. Vi ser
på aktiveringen til det første (øverste) nevronet i output-laget
(cid:16) (cid:17)
yˆ =a(3) =g w(3)a(2)+w(3)a(2)+w(3)a(2)+w(3)a(2)+b . (100)
1 1 11 1 21 2 31 3 41 4
Her går altså indeks i i likning 95 over i = (1,2,3,4), mens j = 1, siden vi ser på den første noden,
og l = 3, siden vi ser på det siste laget. I likningen over er det flere ting vi kan endre forå minke
tapet: vi kan endre på parametrene b og w(3) direkte, og aktiveringene av nodene i det tidligere laget,
i1
a(2), indirekte. Legg merke til at om vi endrer parametrene w(3), må disse endres proporsjonalt med
i i1
aktiveringenea(2). Viønskeråøkeoutputa(3),sombetyratvimåstyrkekoblingentilaktivenevroner
i 1
i lag 2, dvs nevroner med stor a(2). Enkelt sagt: Jo større a-ene er, jo større effekt har w-ene. Vi kan
i
gjøreentilsvarendeanalysefora(2),foromallea(2) sommultipliseresmedenpositivw(3) blesterkere,
i i i1
og alle a(2) som multipliseres med en negativ w(3) ble svakere, hadde a(3) blitt større, som er det vi
i i1 1
ønskerå oppnå. Enkelt sagt: Jo større w-ene er, jo større effekt har a-ene. Utfordringen er at vi ikke
kan endre aktiveringene til indre lag direkte; vi kan kun endre dem indirekte gjennom parametrene
deres. Vi må derfor endre på parametrene w(2) tilhørende alle nodene i lag l=2.
ij
Førvitardettestegetbakoverinettverketerdetlurtåzoomeut,oghuskepåatvikunharsettpåén
avverdieneiyˆ-vektoren: bådeyˆ ogyˆ harsineegnepreferanserforhvordanvekteneogaktiveringene
2 3
i de foregående lagene bør endres for at disse to delene av prediksjonen skal komme nærmere targets.
Det er ikke gitt at yˆ ,yˆ og yˆ er enige om hvilke endringer som bør gjøres, men vi samler uansett de
1 2 3
ønskedeendringeneilagl=2ienliste,førviflytterossetstegbakoverinettverket. Listeninneholder
blant annet ønskede endringer for aktiveringene a(2), på samme måte som vi tidligere visste i hvilken
retning vi ønsketå endre de ulike verdiene i yˆ, og basert på disse kan vi utføre samme analyse som
vi gjorde under likning 100. Når vi har gjort dette for alle nodene i lag l = 2, lager vi en liste over
ønskede endringer i lag l=1, før vi tar et ytterligere steg tilbake i nettverket.
På dette tidspunktet har vi kommet til input-laget; det gir ikke meningå lage en liste over ønskede
endringer i lag l = 0, siden dette er input-laget og aktiveringene svarer til verdiene i datasettet. Vi
har derfor kommet til veis ende, vedå jobbe oss stegvis bakover i nettverket fra output, gjennom alle
lagene,tilinput. Merformeltharvipropagert feileniprediksjonentilbake tilinput,oggjennomdenne
prosessenfunnetenlisteoverhvordannettverketsparametrebørendreseg,altsågradienten vitrenger
til parameteroppdateringen. Dette er essensen i backpropagation. Til slutt er det verdtå merke seg
atdettemågjøresforalledatapunkteneitreningsdatasettet; vierikkeuteetteratmodellenskallære
segå predikere at y = (1,0,0), men tilpasse prediksjonen til input-dataene. Akkurat som for lineær
regresjon må vi altså sende alle treningsdataene (én epoch) gjennom nettverket, gjerne flere ganger
(flere epochs).

## 2.5 Stochastic gradient descent
<!-- side 39 -->

Man kan tenke seg gradient descent som en strategi for å gå ned fra en fjelltopp, dette tilsvarer
å minimere tapsfunksjonen. Man planlegger ikke hele reisen, men tar i stedet et skritt om gangen.
Gradientdescent(GD)sieratdetnesteskrittetviskaltaerretningenderdetermaksimalnedstigning.
Denneretningeniparameterrommetangisavdennegativegradienten. Gittgradientenkanvitaetlite
skritt, hvor lengden er gitt av læringsraten, og alle parametrene blir oppdatert. Denne prosessen med
åberegneengradient, etterfulgtavåbrukedentilparameteroppdatering, kantalangtid. Forågjøre
treningenkjappereerdetvanligåbrukevariantenStochasticgradientdescent(SGD).Imotsetningtil
GD så er det et stokastisk (tilfeldig) element her. I stedet forå bruke alle datapunktene tilå beregne
gradienten, bruker vi bare et tilfeldig utvalg. Ideen er at vi ikke trenger en perfekt gradient: Så lenge
man tar skritt som er nesten optimale, vil man også komme frem til målet. Forskjellen ligger altså i
størrelsen på batchen med datapunkter man bruker forå estimere gradienten.
Gradient descent: Underforståttmenesfull-batch,altsåatgradientenberegnesfradetgjennomsnit-
tlige tapet over hele treningsdatasettet, så parametrene oppdateres én gang per gjennomgang av hele
treningsdatasettet. Dette er den klassiske varianten. Full-batch gjør at gradienten blir nøyaktig og vi
kanforventenoenfærreiterasjonertotalt. Mensidenhveriterasjonkreveråkjørebackpropagationpå
hele treningsdatasettet, kan det ta lang tid.
Stochastic gradient descent: Gradienten beregnes på et enkelt, tilfeldig valgt treningsdatapunkt,
såparametreneoppdateresengangperdatapunkt. Dettetilsvareretstøyetemenunbiasedestimatav
den fulle gradienten. Denne metoden har opphav i (Robbins and Monro, 1951). Her vil iterasjonene
gå veldig raskt, men totalt forventer vi mange flere iterasjoner fordi gradienten er støyete.
Mini-batch SGD:Gradientenberegnesigjennomsnittoverenlitentilfeldigtrekningavdatapunkter
fra treningsdataene (dette er en ”mini-batch”), så parametrene oppdateres én gang per mini-batch.
Det er dette dyplæringsfolk mener når de sier “SGD”. Det er mindre støyete enn SGD på ett enkelt
datapunkt, men beregningsmessig langt billigere enn full GD. Her må man derfor spesifisere en batch
size (ofte en toerpotens, e.g. 32,64 eller 128), med mål omå balansere gradientpresisjon og backprop-
agation hastighet. Batch size er dermed en hyperparameter. Det kan også være verdtå gruble på
hvordan batch size bør påvirke valget av læringsrate. Burde en støyete gradient ha en høy eller lav
læringsrate?
Epoke: En epoke (epoch) er alltid en hel runde gjennom alle treningsdatapunktene, som betyr at alle
datapunktene har bidratt til gradienten én gang. Antall oppdateringer per epoke er derfor avhengig
av hvilken variant som brukes. Med N treningsdatapunkter: Gradient descent (full-batch) gjør én
oppdatering per epoke. SGD (ett datapunkt) gjør N oppdateringer per epoke. Mini-batch SGD gjør
N/B oppdateringer per epoke, der B batch size.

## 2.6 Bygge, trene og predikere
<!-- side 40 -->

DetfinnesflerePython-bibliotekervikanbrukeforålagenevralenettverk, ogidettekursetanbefales
keras og tensorflow. De grunnleggende byggesteinene i tensorflow er keras-operasjoner. For
eksperimenteringkanviforeksempellageen(10,3)-dimensjonaltensorxfyltmedettall,medfølgende
kode.
from keras import ops
x = ops.ones((10,3))
Videre kan vi lage et enkelt nevralt nettverk, se figur i slides fra forelesningene, med to indre lag
bestående av henholdsvis 6 og 7 noder, samt et output-lag bestående av 2 noder, som følger
from tensorflow.keras.models import Sequential()
model = Sequential()
model.add(Dense(6, activation="relu", name="layer1"))
model.add(Dense(7, activation="relu", name="layer2"))
model.add(Dense(2, activation="softmax", name="output"))
model(x)
Denne modellen heter Sequential fordi lagene kommer i en lineær sekvens, slik at dataene flyter
sekvensielt fra input- til output-laget. Lagene heter Dense fordi alle nodene har koplinger til alle
nodene i forrige og neste lag. Koplingen er så tett (dense) som den kan være. Alle disse lagene
initialiseres med tilfeldige verdier. Hvis vi derfor kaller denne modellen på tensoren x som vi laget
tidligere, får vi derfor en (10,2)-dimensjonal tensor med to ulike, men i utgangspunktet meningsløse,
verdier gjentatt 10 ganger.
Ved bruk av koden over lager vi en Sequential-modell, og bruker operasjonen add forå legge til lag
til modellen. Vi kunne tilsvarende gjort
model = Sequential(
Dense(6, activation="relu", name="layer1"),
Dense(7, activation="relu", name="layer2"),
Dense(2, activation="softmax", name="output"),
)
model(x)
Her lager vi hele modellen direkte, vedå gi den en liste bestående av lag som argument. Vi kunne
også gjort følgende
layer1 = Dense(6, activation="relu", name="layer1")
layer2 = Dense(7, activation="relu", name="layer2")
layer3 = Dense(2, activation="softmax", name="output")
layer3(layer2(layer1(x)))
Her lager vi sekvensen eksplisitt, utenå bruke Sequential. Siste lag evalueres rekursivt med input
fra andre lag som argument, der input fra andre lag har input fra første lag som argument, og første
lag har input x som argument. Merk at vi her ikke får et modell-objekt. Det viktigeå huske her er at
lag oppfører seg som elementer i en liste. Kommandoen model.layers kan brukes forå få tilgang til
listen over lag den aktuelle modellen model består av. Et enkelt mentalt bilde av et nevralt nettverk
i python er lag stablet oppå hverandre, eller lstacked layers.
Merkatomvikunlagermodellenvedåstablelagene,menikkeevaluererden(foreksempelpåtensoren
vår x), har den ingen vekter. Om vi kaller
model.weights
model.summary()
på en modell vi har bygget, men aldri evaluert, får vi ut en tom liste [] for vektene, og en tabell som
viser Output shape=? for oppsummering av modellen. Modellparametrene finnes altså ikke.
Legg merke til at vi har kjørt modellen(e) vi laget over, på en tensor av shape (10,3), selv om ingen
av modellens lag består av 3 noder. Grunnen er at modellens input er et objekt, ikke av typen
keras.layers, så input vises ikke som et lag. For at modellen skal kjenne input-dimensjonen, og
følgelig hvor mange parametre den består av, må vi enten evaluere den på en input-tensor, eller vi må
spesifisere modellens input-shape. Dette kan gjøres som følger
model = keras.Sequential()
model.add(keras.Input(shape=(3,)))
model.add(Dense(6, activation="relu", name="layer1"))
Om vi kaller model.summary() på denne, vil vi se at den har output-shape 6, og 24 parametre. Vi
kan også evaluere denne modellen på vår tensor x og sjekke shape ved hjelp av følgende kode
model(x).shape
DennekodenreturnererTensorShape([10,6)],dainput-tensorenvårbestårav10instanser,ogmod-
ellens nåværende output-lag består av 6 noder. Merk at dette følger vanlig matrisemultiplikasjon, og
tegn gjerne opp tensordimensjonene om du er usikker. Vi kan fortsetteå legge til lag helt til vi er
fornøyde med modellen – eller bare bygge en modell med antallet lag og noder vi ønsker, fra starten.
Merk at shape på modellens output alltid svarer til antall noder i modellens siste lag.
Når modellen er bygget, kan vi kompilere og trene den. Når modellen kompileres velger vi hvilken
metode som skal brukes for å optimalisere parametrene under trening, hvilken tapsfunksjon som
skal brukes, eventuelle metrikker som skal beregnes underveis, med mer. I dette kurset bruker vi
operimizer=keras.optimizers.SGD(), og tapsfunksjonen må passe til oppgaven og dataene. Mod-
ellen kan tilpasses som følger
history = model.fit(x_train, y_train, batch_size=64,
epochs=10, validation_data=(x_val, y_val))
Her lagres beregnede metrikker i en history-variabel, hvert steg i SGD bruker 64 datapunkter, mod-
ellen trenes i 10 epoker, og den evalueres på valideringsdata underveis. Vi kan for eksempel studere
hvordan tapet utvikler seg på trenings- og valideringsdataene ved bruk av følgende kode
train_losses = history.history["loss"]
val_losses = history.history["val_loss"]
epohcs = np.arange(1, len(losses)+1)
plt.plot(epochs, train_losses, label="Train loss")
plt.plot(epochs, val_losses, label="Validation loss")
plt.xlabel("Epochs")
plt.ylabel("Loss")
plt.legend()
plt.show()
Som før er det lurtå stanse treningen når både trenings- og valideringstapet flater ut, men før tap
på treningsdataene blir mye mindre enn tapet på valideringsdataene, siden dette er et typisk tegn
på overtilpasning. keras gir muligheten for et early stopping-kriterium, hvor vi må angi hvilket
kriterium som skal monitoreres, vanligst monitor="val loss", og hvor tålmodig læringsalgoritmen
skal være før treningsprosessen stoppes.
Prinsipieltjobbervimednevralenettverksommedandremaskinlæringsmodeller,menviharenstørre
frihetivalgavarkitekturogantallparametre. Detkrevertreningålæreseghvilkearkitekturersomer
egnet for hvilke læringsoppgaver og datastrukturer. Oppsummert koker treningsprosessen av nevrale
nettverk ned til følgende steg:
• Modellen bygges, og kompileres med valg av optimizer, tapsfunksjon, early stopping, med mer.
model.compile()
• Når modellen er bygget kan vi trene den.
model.fit()
• Deretter kan vi bruke den tilå predikere, altså gjøre inferens.
model.predict()
• Når modellen er trent, evaluerer vi den på egnet metrikk.
model.evaluate()
• Når vi går hjem for dagen kan vi lagre modellen med
model.save(’sted/for/lagring/navn.keras’)
• ...og laste den opp igjen neste morgen.
model = keras.models.load model(sted/for/lagring/navn.keras).

## 3 Uveiledet læring
<!-- side 43 -->

Vi har fremdeles som målå lage databaserte modeller ved hjelp av maskinlæring, men går nå over til
tilfelletderviikkehardatasomfortellerosshvasomerriktigsvar imodelleringsoppgaven. Dasnakker
vi om unlabeled data, altså data uten targets. Uveiledet læring – unsupervised learning – handler om
å gjøre maskinlæring med læringsalgoritmer som finner mønstre i data uten targets. Vi skal se på tre
kategorier uveiledet læring:
• Clustering / klynging
• Dimensionality reduction / dimensjonsreduksjon
• Outlier detection / anomalideteksjon

## 3.1 Clustering
<!-- side 43 -->

Clustering,altsåålageklynger,kantolkessomenformfor“klassifiseringutenlabels”,ogformåleterå
finneegnedegrupperingeravlikedatapunkterietdatasett. Viharfleremuligevalgavlikhetsmetrikk,
for eksempel avstand mellom datapunktene. For å kunne gjøre en optimaliseringsprosess, som er
grunnleggende i maskinlæring, trenger vi et læringssignal, altså et tapå minimere. I forelesningene
ser vi på to ulike algoritmer: k-means, hvor likhet defineres som avstand, og DBSCAN, hvor likhet
defineres som tetthet.

## 3.1.1 k-means
<!-- side 43 -->

Den uveiledede læringsalgoritmen k-means deler datasettet bestående av n datapunkter, inn i k klyn-
ger. Hvert datapunkt tilordnes klyngen hvis klyngesentrum er nærmest datapunktet. Stegvis gjør
denne algoritmen følgende
1. Velg et tall k, som representerer antall klynger.
2. Velgk tilfeldigeklyngesentroider. Ensentroideermidtenavenklyngen, altsåikkeetdatapunkt
(selv om den kan sammenfalle med et faktisk datapunkt).
3. Tildel hvert datapunkt en tilfeldig klynge.
4. Beregn den Euklidske avstanden mellom hvert datapunkt og alle sentroidene.
d2(p,q)=(p −q )2+(p −q )2+···+(p −q )2
1 1 2 2 n n
5. Tildel hvert datapunkt den nærmeste sentroiden fra steg 4.
6. Velg nye sentroider vedå regne ut middelverdien (np.mean) for hver klynge.
7. Gjenta steg 4, 5 og 6 inntil klyngene ikke endrer seg.
Utfordringen med denne algoritmen er at sannsynligheten forå velge tilfeldige sentroider (i steg 2) på
uegnedesteder,altsåpåenslikmåteatalgoritmenikkeklarerådannegodeklynger,økereksponensielt
medk. Underdetoantakelseneatvi1)velgerriktigverdifork, og2)athversanneklyngeharetlikt
antall datapunkter, kan vi anslå sannsynligheten for at de k sentroidene initialiseres i unike klynger,
altså slik at hver sanne klynge har bare én sentroide. Vi husker at antallet måterå sortere k ulike
elementer er k!, mens antallet måterå trekke k elementer fra en mengde på k elementer er kk. Da går
sannsynligheten for at hver sentroide tilhører en unik klynge som
k! 1·2·3...k 1 2 3 k
= = · · ... . (101)
kk k·k·k...k k k k k
Intuitivt: Vi har k valg per tilfeldig plassering, altså kk like sannsynlige sekvenser av sentrioder.
Sekvensene vi er ute etter er de hvor alle k sentroidene svarer til ulike labels, altså én sentroide per
klynge. Dette er bare ulike ordninger av k klynger, og vi har til sammen k! av disse. Antall gunstige
over mulige er derfor k!/kk.
Enda mer intuitivt: Tenk at du trekker én sentroide av gangen.
• Den første kan havne hvor som helst, så sannsynligheten er 1.
• Den andre må unngå klyngen som allerede er tatt, så sannsynligheten er (k−1)/k.
• Den tredje må unngå de to klyngene som allerede er tatt, så sannsynligheten er (k−2)/k.
• Dette fortsetter til den siste sentroiden, som kun har én ledig klynge tilgjengelig, så sannsyn-
ligheten er 1/k.
• Multipliser alle disse sannynlighetene sammen og du får k·(k−1)·(k−2)...1/kk.
Stirling’s approksimasjon lar oss skrive om fakultetet som
√
k!≈ 2πke−kkk. (102)
Innsatt i likningen over får vi at sannsynligheten forå initialisere k sentroider i unike klynger går som
√
ke−k, altså eksponensielt avtakende med k.
Enmermoderneløsningpåinitialiseringenerderforåplasseredenførstesentroidentilfeldig,ogplassere
neste sentroide på datapunktet som er lengst borte fra den første, gjentatt til alle de k sentroidene
er plassert. Generelt: sentroide j initialiseres på datapunktet der minste avstand fra den nærmeste
sentroiden er størst.
Tilsluttskalvisepåkmeans++,sombrukerenmeravansertmåteåvelgeplasseringenetilsentroidene.
Istedetforåvelgesentroidejpådatapunktetlengstbortefradeforrigesentroidene,velgesdatapunktet
medenvisssannsynlighet,dersannsynlighetenerproporsjonalmedkvadrertavstandfradennærmeste
initialiserte sentroiden. Grunnen til at dette er lurt, er at strategien der datapunktet lengst borte fra
forrige sentroide velges som sentroide j, er at det som oftest vil plassere sentroiden i utkanten av en
klynge. Med sannsynlighetstilnærmingen velges fremdeles et datapunkt som er langt borte fra forrige
klynge – proporsjonal med kvadrert avstand – men med en viss tilfeldighet. Denne tilfeldigheten øker
sannsynligheten for å havne nær midten av den faktiske klyngen. Det finnes et bevis på at denne
fremgangsmåten for plassering av sentroider er forventetå være suboptimal med maksimalt en faktor
log(k).
Vi kan enkelt lage en k-means-modell ved hjelp av python-biblioteker som keras. Jeg abefalerå bruke
keras.cluster.MiniBatchKmeans, særlig for store datasett. I stedet forå bruke hele datasettet hver
iterasjon, bruker en den liten tilfeldig trekning (en mini batch). Vi kan angi k gjennom argumentet
n clusters, og velge initialiseringsmetode for klyngesentrene gjennom argumentet init. Hvis vi ikke
oppgir en verdi for k, vil algoritmen selv prøveå velge en optimal verdi for k. Dette kan fungere godt,
men vil vel så ofte fungere mindre godt. Valg av k er blant de store utfordringene innen clustering, og
detfinnesfleremetrikkerforåmålekvalitetenpåclusteringen. Biblioteketsklearn.metrics.cluster
har flere metrikker innebygget, og dere bør ha hørt om tre av dem:
• Inertia: Sum av kvadrert avstand mellom punkter og sentroide. Lav verdi betyr kompakte
klynger, som er bra. Svakheten ved denne metoden er at den letteste måten å oppnå en lav
verdi, er vedå plassere en sentroide på hvert datapunkt, altså ha størst mulig k.
• Silhouette Coefficient: b−a , hvor a angir midlere avstand innad i klyngen, såkalt mean
max(a,b)
intra-clusterdistance,ogbangirmidlereavstandtilnærmesteklynge,såkaltmeannearest-cluster
distance. Denmåleraltsåhvornærtetdatapunktertilsinegenklynge,sammenliknetmedandre
klynger. Den beste verdien til denne metrikken er 1, som betyr at punktet er nærmere sin egen
enn andre klynger, 0 betyr at klyngene overlapper eller at punktet er på randen mellom to
klynger, og den dårligeste verdien er −1, som representerer at datapunktet er i feil klynge.
• Calinski Harabasz score: Ratio mellom sum av kvadrert avstand mellom klynger, hvor en
høy verdi er bra, og sum av kvadrert avstand mellom punkter i samme klynge, hvor en lav verdi
er bra. Den måler altså hvor langt det er mellom klynger normalisert til hvor store klyngene er.
En høy verdi av denne metrikken representerer tette klynger med god separasjon.
Med utgangspunkt i et datasett uten labels og hvor vi ikke klarerå se hvilken verdi av k vi bør velge,
kan det være nyttig å tilpasse flere k-means-modeller med ulike hyperparametre, og regne ut flere
metrikker forå se om vi klarerå identifisere optimale verdier.
Som vi ser eksempler på i forelesningene, finnes det tilfeller der k-means ikke klarer å identifisere
klynger selv om vi oppgir korrekt verdi av k. Dette skjer typisk når avstanden innad i klyngen er
større enn mellom naboklynger. Dette er en konsekvens av at k-means bruker avstand som et mål
på likhet mellom punkter. Dette peker på en viktig detalj, som gjelder i all maskinlæring: Alle
læringsalgoritmer har implisitte antakelser om problemet de skal løse.
Generelt har k-means følgende ulemper
• følsom for antall sentroider valgt, automatisk valg fungerer ofte dårlig, og manuelt valg er kun
så godt som utvalgsmetoden,
• svak med outliers, siden disse kan trekke sentroidene vekk fra de faktiske klyngene,
• fungererdårligihøydimensjonaleromfordidenbaserersegpåEuklidskavstand,somkonvergerer
til en konstant for store d,
og følgende fordeler
• lettå forstå og implementere,
• fungerer godt på store datasett (store n).

## 3.1.2 DBSCAN
<!-- side 45 -->

DBSCAN ble utviklet av Martin Ester, Hans-Peter Kriegel, Jörg Sander og Xiaowei Xu i 1996, og er
en uveiledet maskinlæringsalgoritme. Den baserer seg påå identifisere tre typer punkter i dataene:
• Kjernepunkter: datapunkter som ligger nært midten av en klynge.
• Ikke-kjernepunkter: datapunkter som tilhører klyngen, men ligger i utkanten.
• Outliers: datapunkter som ikke tilhører noen klynger. En en hovedstyrke ved metoden at den
ikke prøverå putte disse punktene i klynger.
Relevante hyperparametre for DBSCAN er ϵ, som angir maksimal avstand mellom to nabopunkter
som kan tilhøre samme klynge, og min samples, som angir minimum antall naboer et punkt må ha
forå telle som et kjernepunkt. DBSCAN-algoritmen bruker følgende prosedyre:
1. Identifiser kjernepunkter vedå telle antall naboer innenfor en avstand ϵ. Hvis dette antallet er
større enn min samples, er datapunktene kjernepunkter.
2. Gå gjennom kjernepunktene og spre klyngen til datapunkter i nærheten. Hvis punktet er et
kjernepunkt, bruk det tilå utvide klyngen. Hvis ikke er datapunktet et ikke-kjernepunkt.
3. Identifiser alle punkter som ikke tilordnes en klynge, som outliers.
Vi vet altså om et datapunkt er et kjernepunkt basert på hyperparametrene, allerede i steg 1. Etter
denne prosedyren vet vi også forskjellen mellom outliers og ikke-kjernepunkt. Ikke-kjernepunkter har
færreennmin samplesnaboerinnenforenavstandϵ,mendeerinnenforenavstandϵavetkjernepunkt.
Disse punktene er del av klyngen, men de bidrar ikke tilå utvide klyngen.
Fordeler ved DBSCAN er at vi ikke trengerå spesifisere antall klynger, at algoritmen heller ikke gjør
en antakelse om dette antallet, og at algoritmen har en metode forå identifisere outliers og dermed er
robustforoutliers. Ulempeneerfølsomhetforvalgavϵogmin samples,ogdessutenatdisseerglobale
variabler: det kan hende at vi får datasett der klyngene har ulik tetthet for ulike datapunkter. Siden
vi bare kan velge én verdi av henholdsvis ϵ og min samples, er DBSCAN mindre egnet i tilfeller der
klyngetettheten varierer. DBSCAN er også tregere for store datasett (stor n), fordi den må beregne
avstander mellom samtlige punkter forå finne naboer og identifisere klyngepunkter, og er svakere i
høydimensjonaledata,fordidenbaserersegpåetmålavavstand,somerutfordrendeihøydimensjonale
rom, på grunn av dimensjonsforbannelsen.
I forelesningen går vi stegvis igjennom to eksempler der DBSCAN identifiserer klynger.

## 3.1.3 Hovedkategorier
<!-- side 45 -->

Vi kan dele clustering-algoritmer inn i følgende fire hovedkategorier:
• Sentroidebasert: Startermedsentroider,assosiererdatapunktermeddisseogtilpasserfremtil
konvergens.
• Tetthetsbasert: Klynger defineres basert på tettheten til datapunkter. Punkter som ligger
nærme hverandre defineres som klynger, mens isolerte punkter defineres som outliers.
• Fordelingsbasert. Gjør antakelsen at hver klynge består av punkter fra en sannsynlighets-
fordeling, vanligvis en Gauss. Målet erå finne parametrene til denne fordelingen.
• Hierarkibasert. Lager et hierarki av klynger. I starten er alle datapunktene en egen klynge,
ogpåsluttentilhøreralledatapunktenesammeklynge. Klyngenesomdannesunderveissorteres
i et hierarki, og man velger ut de genererte klyngene fra et steg i hierarkiet.

## 3.1.4 Dimensjonsforbannelsen igjen
<!-- side 46 -->

For intuisjon ser vi for oss at vi sampler tilfeldige punkter fra enhentskuben, altså generelt fra [0,1]d i
d dimensjoner. Slik kan vi fylle opp d-dimensjonale arrays som angir koordinater i det d-dimensjonale
rommet, hvor vi havner i intervallet [0,1] langs alle d akser. Vi gjentar dette to ganger, slik at vi får
koordinater til to punkter i det d-dimensjonale rommet, og så beregner vi den Euklidske avstanden
mellom punktene. Dette kan vi gjøre for flere ulike valg av d, og så ofte vi orker. Koden nedenfor
gjentar prosedyren 1000 ganger for seks ulike verdier av d, og resultatet er vist i figur 22.
def get_cube_dist(dim):
dims = range(dim)
P1 = np.array([np.random.uniform() for _ in dims])
P2 = np.array([np.random.uniform() for _ in dims])
dist = np.linalg.norm(P1-P2)
return dist
n_iter = 1000
grid = [2, 3]
dims = [2, 3, 10, 100, 1000, 10000]
fig, axs = plt.subplots(grid[0],grid[1])
_i = 0
for _x in range(grid[0]):
for _y in range(grid[1]):
dim = dims[_i]
_i += 1
dists = [get_cube_dist(dim) for _ in range(n_iter)]
axs[_x,_y].hist(dists, label=f"d={dim}")
axs[_x,_y].legend()
axs[_x,_y].set_xlim(left=0)
plt.show()
Det finnes flere liknende øvelser vi kan gjøre forå få intuisjon. I slides fra forelesningen vises hvor stor
andel av en d-dimensjonal enhetskube eller -kule som ligger i et tynt ytre skall av tykkelse ϵ. Basert
på disse enkle øvelsene forstår vi at avstander skalerer eksponensielt med d. Dette gir opphav til
detsåkalteConcentration of Distances-fenomenet,hvisdirektekonsekvenseratrelative avstanderblir
mindreihøyedimensjoner. Avstandeneisegselvblirveldigstore,slikatderelativeforskjellene mellom
avstanderblirmindre. Dettevisestydeligifigur22:fordelingenesmiddelverdierblirstoremedøkende
d,mensspredningeneblirsmåsammenliknetmedmiddelverdiene. Tidligere,idiskusjonenomveiledet
læring, forstod vi at dette betyr at mesteparten av datarommet er tomt når vi samler inn data med
flere features enn ∼O(10). I den nåværende diskusjonen forstår vi at dette har konsekvenser også for
klyngerihøydimensjonalerom: datapunkterisammeklyngebørværenærmerehverandreennpunkter
i andre klynger. Siden datapunkter i høydimensjonale rom havner i ∼ samme avstand fra hverandre
(Concentration of distances), klarer clustering-algoritmer generelt ikkeå tildele datapunkter til riktig
klynge. Merk at å same flere datapunkter ikke løser dette, siden problemet har opphav i hvordan
avstander oppfører seg i høydimensjonale rom; ikke størrelse på datasett. Forå hanskes med dette
Figure 22: Fordelingen av Euklidske distanser mellom to punkter i en d-dimensjonal enhetskube.
problemet vil vi derfor i neste omgang se på teknikker vi kan bruke forå redusere dimensjonaliteten
i data, fortrinnsvis gjennom å beholde kun retninger (dimensjoner) som representerer strukturen i
dataene våre.

## 3.2 Dimensjonsreduksjon
<!-- side 47 -->

Dimensjonsreduksjon kan være både en preprosesseringsteknikk (for eksempel for clustering), og en
dataanalysemetode i seg selv. Å redusere dimensjonaliteten i data kan være lurt av flere grunner:
• Datavisualisering: Vi kan ikke plotte høydimensjonale data, så alt over 2-3 dimensjoner er
utfordrendeå visualisere. Videre er mønstre som klynger, anomalier etc ofte ikke synlige i høye
dimensjoner (på grunn av dimensjonsforbannelsen).
• Støyfjerning: Å hente ut extracted features som representerer variansen eller strukturen i
dataene best, kan fungere som støyfiltrering. Dette kan gi mer robuste (og tolkbare) modeller.
• Featurediscovery: Metodersomoppdagerstruktureridatasombevaresnårdimensjonaliteten
reduseres, kan gi datasett med færre, sammensatte features som representerer den viktigste
informasjonen fra de opprinnelige dataene. Dette hjelper ikke bare forå forstå dataene bedre,
men gjør dem billigereå lagre og enklereå analysere.
Vi kan bruke uveiledet læring tilå redusere dimensjonaliteten i data, altsåå gå fra at dataene har
et antall features n, til at de har et mindre antall features n′. Formålet erå bevare mest mulig av
informasjonenfradenhøydimensjonaleidenlaveredimensjonaleversjonenavdataene. Iforelesningene
servipåtoetablertemetoder: PCAog(t-)SNE.Utoverdetfinnesdet,somellers,mangefleremetoder
og biblioteker dere kan bruke, så lenge dere forstår hva de gjør.

## 3.2.1 Principal component analysis (PCA)
<!-- side 47 -->

Metoden principal component analysis (PCA) ble utviklet av Karl Pearson i 1901, altså lenge før
kunstig intelligens var etablert som fagfelt. Metoden går ut påå identifisere aksene som maksimerer
variansen i et datasett. Disse aksene er hovedkomponentene, altså the principal components (PC),
i dataene. De er lineære kombinasjoner av de opprinnelige featurene i dataene, og representerer
uavhengige (ortogonale) akser.
Intuitivt kan vi se for oss at vi har et datasett med tre features: høyde, vekt og alder til en gruppe
mennesker. Disse egenskapene vil ha noen korrelasjoner (som at høye mennesker veier mer, veldig
unge mennesker veier mindre og er lavere, osv). PCA finner aksene, altså hovedkomponentende,
tilsvarende de uavhengige retningene der dataene varierer mest. Den første hovedkomponenten, PC1,
er retningen hvor dataene varierer mest, altså inneholder mesteparten av informasjonen. Den neste
hovedkomponenten, PC2, inneholdernestmestinformasjon, ogdenerortogonaltilPC1, foråsikreat
deninneholderny, uavhengiginformasjon. Dennestehovedkomponenten, PC3, vilrepresentereresten
av dataenes varians, og denne er ortogonal til både PC1 og PC2. At komponenter er ortogonale gir
en garanti for at de inneholder ulik informasjon. Enkelt fortalt er PCA en metode som finner nye
akserfordataene,hvorhverakse(PC)fangerulikeaspekteravvariansenidataene,utenågjentaeller
overlappe med de andre aksene (PC’ene).
Mer formelt er PC’ene egenvektorene til dataenes kovariansmatrise. Oppgave: Skriv ned denne
setningen for hånd og prøvå forklare til deg selv hva den betyr.
Setningen er lettereå forstå om man gjør en beregning for hånd. Kovariansen mellom to variabler er
N
1 (cid:88)
cov(x ,x )= (x −x¯ )(x −x¯ ) , (103)
i j N −1 i,k i j,k j
k=1
og kovariansmatrien består av
(cid:20) (cid:21)
cov(x ,x ) cov(x ,x )
S = 1 1 1 2 . (104)
cov(x ,x ) cov(x ,x )
2 1 2 2
Merk at kovariansen mellom den samme variabelen strengt tatt bare er variabelens varians, så de
diagonale elementene i denne matrisen er bare varianser og representerer spredningen til hver og en
variabel. De ikke-diagonale elementene representerer hvor mye to og to variabler samvarierer, altså
deres kovarians.
Hvisduharkontrollpåkovariansogdiagonaliseringavmatriserkanduhoppetilavsnittetoverlikning
113. Hvis ikke kan du følge følgende forenklede eksempel. Anta at vi har
(cid:2) (cid:3) (cid:2) (cid:3)
x = 1 2 3 , x = 2 1 0 , (105)
1 2
ogstartmedåleggemerketilatbeggevariablenevariererendel,ogatdevariererimotsattretning(når
det ene øker, minker den andre). Første steg i følge likning 103 erå trekke ifra gjennomsnittsverdien
for hver av matrisene. Vi finner ut at x¯ =2 og x¯ =1, og får
1 2
(cid:2) (cid:3) (cid:2) (cid:3)
x −x¯ = −1 0 1 , x −x¯ = 1 0 −1 . (106)
1 1 2 2
Nå må vi regne ut produktet mellom alle mulige kombinasjoner av disse for hver indeks, og dele på
N −1. Vi får
N
1 (cid:88) 1(cid:2) (cid:3) (cid:2) (cid:3) 1
cov(x ,x )= (x −x¯ )(x −x¯ )= −1 0 1 · −1 0 1 = (1+0+1)=1
1 1 N −1 1,k 1 1,k 1 2 2
k=1
Oppgave: Finn tilsvarende verdi for cov(x ,x ). Til slutt
2 2
N
1 (cid:88) 1(cid:2) (cid:3) (cid:2) (cid:3) 1
cov(x ,x )= (x −x¯ )(x −x¯ )= −1 0 1 · 1 0 −1 = (−1+0−1)=−1,
1 2 N −1 1,k 1 2,k 2 2 2
k=1
(cid:20) (cid:21)
1 −1
ogvikanfylleinnhelekovariansmatrisen,S = . Hvisduikkeharværtbortidiagonalisering
−1 1
av matriser og ikke vet hva egenverdier- og vektorer er, bør du finne frem en bok om lineær algebra
og gjøre et lite selvstudium. Hvis du bare trenger en oppfriskning, kommer det en her. Vi finner
egenverdiene til kovariansmatrisen gjennomå løse
(cid:12) (cid:12)
(cid:12)1−λ −1 (cid:12)
det(S−λI)=(cid:12) (cid:12)=0, (107)
(cid:12) −1 1−λ(cid:12)
Figure 23: Dataene beskrevet i det enkle eksempelet og de tilsvarende prinsipalkomponentene, altså
egenverdiene til kovariansmatrisen.
altså likningen
(1−λ2)−1=0 (108)
⇒1+λ2−2λ−1=0 (109)
⇒λ2−2λ=0. (110)
Egenverdiene er altså λ =0 og λ =2. Vi finner de tilsvarende egenvektorene gjennom
1 2
(cid:20) (cid:21)(cid:20) (cid:21) (cid:20) (cid:21)
1 −1 v v
1 =0 1 (111)
−1 1 v v
2 2
som gir oss v
=v
, altså egenvektoren e
= √1 (cid:2) 1 1 (cid:3) for den første egenverdien, og
(cid:20) (cid:21)(cid:20) (cid:21) (cid:20) (cid:21)
1 −1 v v
1 =2 1 (112)
−1 1 v v
2 2
som gir oss v
=−v
, altså egenvektoren e
= √1 (cid:2) 1 −1 (cid:3) for den andre egenverdien. Prefaktorene er
der fordi egenvektorer er enhetsvektorer, altså har lengdeén. Disse vektorene er våre prinsipalkompo-
nenter. Det er flere ting vi kan studere ved disse, og jeg anbefaler deg på det varmesteå lage et plott
du kan leke med, se gjerne figur 23 for inspirasjon. Først, egenverdien på 0 forteller oss at én prinsi-
palkomponentertilstrekkeligforårepresentereallvariansenidataene. Detgirmening,siden1+2(de
første to datapunktene), 2+1 (de andre to datapunktene) og 3+0 (de siste to datapunktene) alle er
3. Det er ingen varians utover denne ene dimensjonen. Vi trenger altså kun egenvektoren tilsvarende
den eneste egenverdien vår som er ulik null, tilå representere all variansen. De to egenvektorene har
origo i (2,1), som tilsvarer gjennomsnittsverdiene x¯ og x¯ .
1 2
Laossnåsepåtabell9,somvisertofeaturesogN =5datapunkter. Gjennomsnittsverdieneerx¯ =3
og x¯ =5.82. Vi kan beregne kovariansen mellom de fire parene (x ,x ), (x ,x ), (x ,x ) og (x ,x )
2 1 1 1 2 2 1 2 2
Table 9: Enkelt eksempeldatasett brukt i PCA-diskusjonen.
x x
1 2
1 1.6
2 4.2
3 5.7
4 8.4
5 9.2
Figure 24: Datasettet fra tabellen (se hovedtekst) representert av originale features x og x , og
1 2
hovedkomponentene PC1 og PC2.
ved bruk av samme formel som før, og får (sjekk dette selv!)
(cid:20) (cid:21) (cid:20) (cid:21)
cov(x ,x ) cov(x ,x ) 2.5 4.85
S = 1 1 1 2 = . (113)
cov(x ,x ) cov(x ,x ) 4.85 9.63
2 1 2 2
Vi finner egenverdiene til denne matrisen ved å løse likningen det(S −λI) = 0, og de tilsvarende
egenvektorene e vedå løse Se =λe , for i=1,2.
1,2 i i
Oppgave: Do it.
Dataene er plottet til venstre i figur 24, og vi ser enkelt at mesteparten av variansen i dataene kan
beskrives av en rett linje fra origo, mens det vil være litt varians i dataene rundt denne linjen (dette
er vist tydeligere i figuren i slides fra forelesning). Vi kan altså lage to nye, ortogonale akser, dvs hov-
edkomponenter, som bevarer denne variansen, og transformere dataene til det nye koordinatsystemet
beskrevet av disse, se figur 24. Disse nye aksene er nettopp egenvektorene du akkurat beregnet.
I stedet forå gjøre PCA-analysen for hånd, kan vi bruke sklearn. Koden under bruker dataene fra
tabell 9, finner to hovedkomponenter, og plotter de opprinnelige samt transformerte dataene.
from sklearn.decomposition import PCA
x1 = np.array([1,2,3,4,5])
x2 = np.array([1.6,4.2,5.7,8.4,9.2])
pca = PCA(n_components=2)
X = np.vstack((x1, x2)).T
X_pca = pca.fit_transform(X)
PC1 = X_pca[:,0]
PC2 = X_pca[:,1]
plt.scatter(x1, x2, color=’blue’, label=’Original Data’, marker=’*’)
plt.scatter(PC1, PC2, color=’red’, label=’PCA Transformed Data’)
plt.legend()
plt.show()
PCA er altså en transformasjon av de opprinnelige aksene til hovedkomponenter som beskriver vari-
ansenidataeneuavhengigavhverandre. EtterdennetransformasjonenkanPC’enesorteresisynkende
rekkefølge, slik at de første bevarer mest av variansen. Ved dimensjonsreduksjon fra d til d′ dimen-
sjonerbeholdervikundeførsted′ aksene. Resultateteratdataeneprojiserestiletlaveredimensjonalt
rom mens mest mulig av variansen til dataene bevares.
Figure 25: PCA av dataene i tabell 9 til én hovedkomponent.
IkodenoverharvitransformertdataenetilrommetspentutavaksenePC1ogPC2,altsåikkeredusert
dimensjonaliteten. Forå gå fra to til én dimensjon, beholder vi kun den første hovedkomponenten,
PC1. Alternativt kan vi direkte gjøre PCA til én dimensjon, vedå modifisere to linjer i koden over:
pca = PCA(n_components=1)
plt.scatter(X_pca, np.zeros_like(X_pca), color=’red’, label=’PCA Transformed Data’)
Dette gir oss plottet i figur 25. Merk at dette plottet strengt tatt ikke har en y-akse, da dataene er
éndimensjonale. Vi har altså laget én feature fra to features. I dette eksemplet, som kun er ment
forå gi en følelse av hva PCA gjør, har vi brukt hele datasettet tilå tilpasse modellen, i X pca =
pca.fit transform(X). Vi kunne altså ikke brukt dette resultatet tilå evaluere modellen.
Det er ikke overraskende at PCA fungerer godt tilå transformere dataene i tabell 9 til én dimensjon,
da de ligger nærmest på en rett linje. La oss se på et nytt eksempel, nemlig de S-formede dataene
i figur 26a. Ved hjelp av følgende kode genererer vi dataene, og gjør en PCA-transformasjon fra de
opprinnelige tre til to dimensjoner. Resultatet vises i figur 26b. I koden under holder vi oss til god
maskinlæringspraksis, og kjører .fit på treningsdataene, mens vi gjør .transform på testdata.
S_points, S_color = sklearn.datasets.make_s_curve(n_samples=1000)
x, y, z = S_points.T
pca = sklearn.decomposition.PCA(n_components=2)
X_train, X_test, y_train, y_test = train_test_split(S_points, S_color)
pca.fit(X_train)
S_pca = pca.transform(X_test)
plt.scatter(S_pca[:,0], S_pca[:,1], c=y_test)
plt.show()
Resultatet viser at PCA kan fungere på ikke-lineære data, så lenge variansen kan representeres langs
uavhengige akser eller lineærkombinasjoner av disse – altså lineært. Ved å studere de S-formede
dataene i figur 26a ser vi at dataene i dybderetningen har liten eller ingen varians, og det bør derfor
ikke overraske oss at de kan representeres godt i to dimensjoner.
Førvifortsetterskalvianalysereettdatasetttil,nemligMNIST-dataenesomrepresentererhåndskrevne
tall fra 0 til 9, som vi så på tidligere i konteksten nevrale nettverk, se eksempler på datapunktene fra
dette datasettet i figur 27a. Vi kan kjøre en PCA-analyse på disse dataene ved bruk av koden under,
og resultatet vises i figur 27b. Her svarer fargene til labels y test.
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train = x_train.reshape(60000, 784).astype("float32") / 255
x_test = x_test.reshape(10000, 784).astype("float32") / 255
y_train = y_train.astype("float32")
y_test = y_test.astype("float32")
(a) (b)
Figure 26: (a) S-formede data i tre dimensjoner, og (b) hovedkomponenter PC1 og PC2 beregnet ved
hjelp av PCA.
(a) (b)
Figure 27: (a) Eksempler på datapunkter fra MNIST-datasettet, og (b) PCA-transformasjon av
MNIST-dataene fra 728 dimensjoner til to hovedkomponenter
pca = sklearn.decomposition.PCA(n_components=2)
pca.fit(x_train)
X_pca = pca.fit_transform(x_test)
Som vi ser i figur 27b, er PCA-dekomposisjonen av MNIST-dataene fra 728 til to dimensjoner ikke
egnet tilå representere variansen i dataene særlig godt.

## 3.2.2 Stochastic Neighbor Embedding (SNE)
<!-- side 52 -->

Den andre dimensjonsreduksjonsalgoritmen vi skal se på gjør stochastic neighbor embedding. Første
steg i denne algoritmen erå tilpasse en sannsynlighetsfordeling som beskriver hvor like nabopunkter
er (det er greia med stochastic og neighbor). Likhet betyr i dette tilfellet altså i følge en betinget
sannsynlighetsfordeling. For to datapunkter x og x kan vi beregne den betingede sannsynligheten
i j
p for at x ville valgt x som nabo. For å beregne denne sannsynligheten bruker vi en Gaussisk
j|i j i
fordeling P(x), sentrert over datapunkt x , altså med forventningsverdi lik koordinatene til x . Da er
i i
detkunénparameterigjenidengaussiskefordelingen,nemligvariansen. DetførsteSNEmågjøreerå
tilpassesannsynlighetsfordelingene,slikatpunktersomliggernærmehverandreharhøysannsynlighet
for å være naboer, mens punkter som ligger langt fra hverandre har lav sannsynlighet for å være
naboer. Dette gjøres i det opprinnelige datarommet, og når det er gjort, kan dimensjonsreduksjonen
Figure 28: Resultatet av en t-SNE transformasjon av MNIST-datasettet.
begynne. Det består av følgende to steg:
1. Alle punktene plasseres tilfeldig i et rom av lavere dimensjon.
2. Punktene flyttes slik at sannsynligheten Q(x) mellom nabopunkter i den lavere dimensjonen
matcher best mulig den tilsvarende sannsynligheten P(x) i den høye dimensjonen.
Del 2 gjøres stegvis ved bruk av gradient descent, med tapsfunksjonen Kullback-Leibler (KL) diver-
gence,
(cid:88) P(x)
D (P||Q)= P(x)log . (114)
KL Q(x)
x∈X
KL-divergensen, også kjent som relativ entropi, måler likheten mellom en referansesannsynlighets-
fordeling P og en annen sannsynlighetsfordeling Q. Merk at den ikke er symmetrisk i P og Q, og at
denerstrengtikke-negativ. Legggjernemerketilatdenrepresentererforventningsverdienavdenlog-
aritmiske forskjellen mellom fordelingene P og Q, hvor selve forventningsverdien (summen) beregnes
med datapunkter trukket fra P.
En intuitiv tolkning av KL-divergensen er at den sier hvor overraskende resultater man vil få om man
bruker sannsynlighetsfordeligen Q i stedet for P, når dataene man jobber med faktisk stammer fra P.
Fordelingen P måler i hvor stor grad punkter er naboer i det høydimensjonale rommet, mens Q måler
det samme i det laveredimensjonale rommet. SNE minimerer KL-divergensen mellom fordelingene P
og Q, altså: Sannsynligheten mellom nabopunkter i den høye dimensjonen, P(x), matcher best mulig
den tilsvarende sannsynligheten i den nye dimensjonen, Q(x). Denne overføringen fra en høy- til en
lavdimensjonal plassering av datapunkter kalles en embedding.
Til sammen beskriver dette prosedyren bak SNE. Denne ble imidlertid forbedret i 2008 av Laurens
van der Maaten og Geoffrey Hinton, ved hjelp av en liten modifisering: i stedet forå bruke en Gauss i
både den høye og lave dimensjonen, brukes en Gauss i den høye dimensjonen, og en t-fordeling i den
lave. t-fordelingen likner på den gaussiske, men den faller litt raskere og har en lengre hale, hvilket
minker sjansen for at nabopunkter får for like sannsynligheter. SNE som bruker t-fordelingen i den
lavere dimensjonen, her fordelingen Q, kalles t-SNE. Denne er tilgjengelig i sklearn, og vi kan bruke
den i stedet for PCA på MNIST-dataene ved bruk av følgende kommandoer.
tsne = TSNE(n_components=2, learning_rate=’auto’, init=’random’, perplexity=3)
X_embedded = tsne.fit_transform(X)
Resultatet vises i figur 28. Her har vi valgt verdien til en parameter perplexity. Denne er viktig for
tilpasningen av variansen til Gaussen in det høydimensjonale rommet: perpleksiteten angir entropien
til den betingede gaussiske fordelingen, og algoritmen tilpasser variansen forå matche denne. Denne
er direkte relatert til antallet nære naboer vi forventer rundt et punkt. Intuitivt kan vi tenkte at
perplexity angir effektivt antall naboer hvert punkt’s gausskurve bryr seg om.
I denne kodesnutten både tilpasses og brukes modellen tsne på de samme dataene. Dette er ikke i
tråd med god maskinlæringspraksis. Likevel har vi ikke noe valg, fordi TSNE er en ikke-parametrisk
algoritme: den lager ikke en parametrisk modell vi kan ta med oss og bruke på nye data etter at den
har blitt tilpasset.
TSNEoptimalisererposisjonentildatapunkteridetlavdimensjonalerommet, basertpåparviseforhold
i datasettet, altså sannsynligheter for naboskap med de andre punktene. Den lavdimensjonale embed-
dingen er avhengig av de relative avstandene mellom alle punktene i datasettet. Om vi legger til nye
punkter, vil de relative avstandene og forholdene mellom punktene i datasettet endre seg. Da måtte
hele embeddingen blitt beregnet på nytt for datasettet med de nye punktene.
PCA og t-SNE sammenliknet
• Mål: PCABevarervariansenidataene;t-SNEminimererdivergensenmellomtosannsynlighets-
fordelinger av dataene.
• Gjenbrukbarhet: PCA lager nye basisvektorer, og kan derfor brukes igjen etter .fit; t-SNE
er ikke-parametrisk, må tilpasses og brukes samtidig, og kan derfor ikke gjenbrukes.
• Feature-generering: PCAkanbrukestilålagenyefeatures, tilsvarendeellerbasertpåhoved-
komponentene; t-SNEkanikkebrukestilålagenyefeatures,sidendenikkelagerenmatematisk
funksjon som kan brukes på nye datapunkter.
• Linearitet: PCA trenger lineært separerbare data; t-SNE har ingen antakelse om linearitet.
• Compute: PCA er rask og lite beregningstung, mens t-SNE må tilpasse mange sannsynlighets-
fordelinger og derfor er treg på store datasett.
Oppgave: Hvilken av metodene tror du fungerer best på outliers, og hvorfor?

## 3.3 Anomalideteksjon
<!-- side 54 -->

Når vi gjør anomalideteksjon, kjent som outlier detection eller anomaly detection, finner vi data-
punktene som ikke likner majoriteten av datapunkter. Dette er relevant i mange sammenhenger, for
eksempel antihvitvasking, kredittkortmisbuk, serverangrep, generelt tilfeller hvor vi vet hvordan nor-
male datapunkt ser ut, men ikke nøyaktig hvordan avviket vil se ut. Vi har altså mange eksempler
på normale datapunkter, men få eller ingen eksempler på anomalier. Dette kan tolkes som et klassi-
fiseringsproblem uten labels og med ekstrem skjevfordeling mellom klassene. Siden vi oftest ikke vet
hvordan den underrepresenterte klassen ser ut, er det vanligstå behandle anomalideteksjon som en
uveiledet maskinlæringsoppgave.
Iforelesningeneservinærmerepåtremetoder,mensomalltidkanderebrukeandremetoderiøvingene
så lenge dere skjønner hvordan de fungerer. Av de tre metodene vi vil studere kjenner vi allerede til
to, nemlig k-means og DBSCAN, mens den siste, isolation forest, er ny.

## 3.3.1 k-means
<!-- side 54 -->

Vi starter medå tilpasse en kmeans-modell som for clustering, på et treningsdatasett, med passende
valg av antall sentroider k. Deretter beregner vi avstanden mellom testdatapunktene og nærmeste
klyngesenter ved hjelp av
distances = kmeans.transform(X_test).min(axis=1)
Derettermåvivelgehvilkedatavivilsepåsomanomalier,ogenmuligheteråsammenliknederelative
avstandenedatapunktenehartilnærmesteklyngesentrumvedhjelpavprosentiler (percentiles). Dette
erverdienenvissprosentandelavdatapunkterermindreennellerlik;den95.prosentilenrepresenterer
for eksempel datapunktene som har avstandsverdier større enn 95% av dataene. Om vi velger dette
som terskel, kan vi filtrere ut datapunktene som har større avstand til nærmeste sentroide enn 95% av
dataene som følger.
threshold = np.percentile(distances, 95)
outliers = distances > threshold
Denne koden returnerer et array med True eller False per datapunkt, hvor True representerer dat-
apunktene som har distance-verdi større enn 95% av dataene. Avhengig av dataene kan den 95.
persentileninneholdeformangeellerforfådatapunkter, sådetergodtmuligatterskelenmåjusteres.
Det finnes ingen sann verdi for hvilken terskel som fungerer generelt.

## 3.3.2 DBSCAN
<!-- side 55 -->

Vi starter medå tilpasse en DBSCAN-modell tilsvarende som for clustering. Her kan vi imidlertid ikke
lage separate trenings- og testdata for .fit og .transform, siden DBSCAN er en ikke-parametrisk
metode. Vi trenger altså tilgang til alle dataene påén gang. Dessuten må vi velge verdier for parame-
trene ϵ og min samples, før vi kan hente ut outliers direkte ved hjelp av følgende kommando.
outliers = dbscan.labels_ == -1
Vi slipper altsåå lage en regel for hvilke data vi vil regne som outliers, fordi DBSCAN er laget forå
identifisere outliers, og gir disse label −1.

## 3.3.3 Isolation Forest
<!-- side 55 -->

En isolation forest er en skog, det vil si en samling besutningstrær, som identifiserer isolerte data-
punkter, altså datapunkter uten mange naboer. Det sentrale i denne læringsalgoritmen er hvordan
den trener beslutningstrær utenå ha tilgang til labels.
Prosedyren består av følgende to steg: Først trenes flere isolasjonstrær – av isolation tree, forkortet
itree – på et subsett av treningsdataene, trukket tilfeldig og uten tilbakelegging. Et isolasjonstre
bygges vedå splitte på tilfeldige features og verdier av disse, inntil hvert datapunkt havner i en egen
løvnode. Vifåraltsåénløvnodeperdatapunkt. Sidenanomaliererfåogulikehavnerdissesomoftest
i en node nærmere rotnoden, og har dermed kortere avstand fra rotnoden enn normale datapunkter.
Dette gjentas for for mange isolasjonstrær, som gir en skog. Neste steg erå kombinere avstandene til
rotnoden for hvert datapunkt. Denne kombinerte avstanden gir en god indikasjon på om et punkt er
en anomali. Det er i prinsippet muligå bygge kun ett isolasjonstre, men den tilfeldige trekningen av
data for hvert isolasjonstre i skogen gir den samlede modellen robusthet til tross for tilfeldigheten i
splittkriteriene.
Vi kan bygge en isolation forest på treningsdata og bruke den tilå finne outliers i testdata ved bruk
av følgende kode.
iso_forest = IsolationForest(n_estimators=100, contamination=0.05)
iso_forest.fit(X_train)
outliers = iso_forest.predict(X_test) == -1
Modellprediksjonene med verdi −1 representerer anomalier, eller outliers. Som for alle metoder må vi
tilpasse verdiene på hyperparametrene forå gå en god modell, og i koden over har vi valgtå bruke
n estimators=100isolasjonstrær, oganslåttatdataasettetinneholderenandelcontamination=0.05
anomale datapunkter.
Oppsummering anomalideteksjon
Vi kan oppsummere fremgangsmåten for anomalideteksjon med de tre metodene som følger:
• k-means: Lager k klynger av dataene, basert på avstand mellom klyngesentrum og datapunk-
tene. Anomalier er datapunkter som ligger langt unna alle klyngesentrene.
• DBSCAN: Lager klynger av punkter med høy tetthet, og identifiserer anomalier som isolerte
punkter, altså outliers. DBSCAN finner outliers som en del av modelleringen.
• Isolation Forest: Bygger trær der alle punktene havner i en egen løvnode. Anomalier er
punkter som har kort gjennomsnittlig avstand fra rotnoden, altså er lettereå isolere enn resten
av datapunktene.
Figure 29: Reinforcement learning loop.

## 4 Reinforcement learning
<!-- side 56 -->

Teorien bak reinforcement learning, forkortet RL, er stor og rikholdig, og i dette faget vil vi kun se på
en del av den. Det finnes mange læringsregimer, og vivil studere ett av dem, nemlig Q-learning. Dere
får nok informasjon tilå kunne trene en modell i et miljø dere får tilgang til i øving 3, men husk atå
bli god i RL krever langt mer tid og fordypning enn vi har mulighet tilå investere i dette kurset.

## 4.1 Markov Decision Processes
<!-- side 56 -->

I følgende avsnitt innføres begrepet “agent” i konteksten reinforcement learning. Merk at dette begrepet
ble etablert lenge før dagens AI-agenter i forbrukerteknologi (som begynteå fungere rundt 2025) ble
utbredt, og ikke betyr det samme. AI-agenter som dere finner feks i Copilot er i bunn og grunn en
språkmodell som kjører i en loop. Det er ikke det vi ser på i dette emnet. I reinforcement learning er
en agent hva som helst som tar inn en tilstand og returnerer en handling, se forklaring under.
Reinforcement learning (RL) er en type maskinlæring hvor en agent lærerå ta beslutninger i et miljø,
omtalt som environment, ved å utføre handlinger, omtalt som actions, for å maksimere forventet
belønning, omtalt som expected reward. Denne prosessen går i en loop, se figur 29, som viser den
såkalte RL-loopen. Her ser vi at environment (miljøet) gir agenten en state (tilstand) S ved steg t.
t
Basert på state velger agenten en action (handling) A , som fører til en reward (belønning) R fra
t t+1
miljøet, og setter miljøet i en ny tilstand, state S . Basert på S velger agenten en ny action, og
t+1 t+1
så videre i en loop.
AgentenvelgeractionbasertkunpåS , ogfårikkeinformasjonomtidligerestates. Dettesvarertilen
t
antakelse om at den fremtidige tilstanden til environmentet kun er avhengig av inneværende tilstand
og valgt action; ikke tidligere states eller actions. En slik prosess har Markov-egenskapen, som betyr
at den er uavhengighet av historien (hvordan agent og environment havnet i den aktuelle tilstanden).
Slike prosesser kalles også memoryless. Kort sagt er Markov-prosesser slik at fremtiden er uavhengig
av fortiden gitt nåtiden.
En verdenskjent maskinlæringsmodell som er trent på denne måten er AlphaZero, hvor ‘zero’ sikter
til at modellen har lært kun gjennomå spille mot seg selv, uten tilgang til yttreligere informasjon.
AlphaZero er et nevralt nettverk som får spillbrettets tilstand som input state, og predikerer actions
tilsvarende hvilke trekk som bør undersøkes nærmere i spilltreet. Spillets utfall til slutt gir reward på
enten 1 om agenten vinner, -1 om den taper eller 0 for remis (uavgjort).
EnbeslutningsprosesssomharMarkov-egenskapen,kallesenMarkov decision process (MDP).Formelt
er en MDP en 4-tuple (S,A,P ,R ), der
A A
• S er set av states (state space),
• A er set av actions (action space). Alternativt: A er settet av actions tilgjengelige fra state S,
S
• P (S ,S )=P(S |S ,A )ersannsynlighetenforatactionA istateS vilføretilstateS ,
A t t+1 t+1 t t t t t+1
• R (S ,S )erdenumiddelbarerewardenforåtransisjonerefrastateS tilstateS ,gjennom
A t t+1 t t+1
action A .
t
Oppsummertharvienagentsomskaltabeslutningerietmiljø. Problemetbeskrivesavstates,actions,
sannsynlighet for transisjon, og rewards. I dette kurset skal vi ikke se på transisjonssannsynligheter,
som vil si at vi holder oss til deterministiske miljøer. Basert på en læringsprosess i miljøet som gir
agenten states og rewards, skal agenten finne måte å velge ut beste action basert på en gitt state.
Denne måten kalles en policy, og vi bruker notasjonen π(A |S ) forå angi en policy forå velge action
t t
basert på state. Målet til en RL-agent er (som regel)å finne en optimal policy, som maksimerer den
totale rewarden, omtalt som kumulativ reward, fra miljøet.
Agenten kan være mye forskjellig, og vi skal først se på en tabell og deretter et nevralt nettverk som
agent. For at denne skal kunne lære en optimal policy, må den trenes påå velge action som gir høy
reward, og vi må ha en måteå beregne kumulativ reward. Dette gjør vi gjennom en utility eller value
function, som angir hvor verdifull en tilstand og action er på lang sikt, under en viss policy. Denne
verdifunksjonen kvantiserer altså forventet verdi av å være i en gitt tilstand, utføre en gitt action,
følge en gitt policy, og fortsetteå følge denne policyen fremover. Agenten trenger verdifunksjonen for
å kvantisere de langsiktige konsekvensene av en action og policy, i stedet forå bruke kun umiddelbar
reward. Oppgave: Les de siste to setningene minimum tre ganger. Ikke les videre før du klarerå
forklare det du har lest så langt til deg selv. Dette er kompakt og det går helt fint om du trenger
noen gjennomlesinger for at det skal gi mening. Jeg anbefalerå starte medå tegne opp RL-loopen og
fylle inn hva som skjer, formulere for deg selv hvilke antakelser som gjelder, beskrive hvordan agenten
velger hva den skal gjøre, og si eksplisitt hvordan RL-loopen representerer et maskinlæringsregime.

## 4.2 Q-verdier
<!-- side 57 -->

Det finnes flere ulike verdifunksjoner, og i dette kurset studerer vi Q-funksjonen. Denne, hvor Q
forkorter quality, angir verdien (kvaliteten) til en state–action kombinasjon, som Q : S×A → R. Vi
beregner den ved bruk av Bellman-likningen:
(cid:16) (cid:17)
Qnew(S ,A )←(1−α)·Q(S ,A )+α· R +γmaxQ(S ,A) . (115)
t t t t t+1 t+1
A
Dette forteller oss at vi må beregne Q-verdien til et state-action-par iterativt, og prosessen føyer seg
inn i stegene i RL-loopen som følger
1. Q initialiseres.
2. For hvert steg t har miljøet en tilstand S , agenten velger en action A , observerer en reward
t t
R , og får en ny tilstand S .
t+1 t+1
3. Q oppdateres basert på disse verdiene, og punkt 2-3 gjentas inntil RL-loopen terminerer.
Vi ser på leddene i likningen over hver for seg:
• Qnew(S ,A ) representerer den oppdaterte verdien avå være i S og gjøre A .
t t t t
• Q(S ,A ) er den gamle verdien av å være i S og gjøre A . Hvis man har en tabell for Q-
t t t t
verdieneerdennesomoftestinitialiserttil0. Hvismanbrukeretnevraltnettverktilåpredikere
Q-verdiene har dette tilfeldige vekter i starten.
• R er reward mottatt forå være i S og gjøre A ,
t+1 t t
• max Q(S ,A) er maksimal verdi av state S , for alle tilgjengelige actions.
A t+1 t+1
I tillegg har vi to parametre i likningen. Den ene, α, angir læringsraten, altså hvor mye av den gamle
verdien av Q som beholdes, og hvor mye den nye verdien påvirkes av uttrykket i den siste parentesen.
Den andre parameteren, γ, kalles discount factor, og gjør at rewards mottatt tidligere vektes ulikt fra
rewards mottatt senere.
Forskjellen mellom verdi og reward er subtil, men viktig. Agenten får reward fra environmentet som
en tilbakemelding på agentens actions i ulike states. Verdifunksjonen, i vårt tilfelle Q-verdiene, angir
verdien av en state og action: den representerer den forventede verdien avå gjøre A i tilstand S ,
t t
inkludert fremtidig verdi, under en gitt policy. Utover at reward og verdi representerer ulike ting, er
det en springende forskjell at vi får reward fra environmentet, mens Q må læres.
Før vi ser på læring av Q-verdiene må vi forstå environments, og hvordan disse kodes og brukes.

## 4.3 Environments
<!-- side 58 -->

Det er fult muligå lage egne miljøer for reinforcement learning; alt de må kunne erå ha en tilstand,
ta imot en action, transisjonere til en ny tilstand og returnere reward. Likevel er det vanligste, særlig
når man lærer RL for første gang, å bruke tilgjengelige treningsmiljøer. Blant de mest brukte er
OpenAI’s Gym, og det er vanligå starte med klassiske kontrollproblemer, som cartpole, mountaincar
og pendulum. Gym-APIet har også gitt opphav til det nærmeste vi kommer en standardfunksjonalitet
for environments brukt i RL. Spesifikt er det vanligå ha en funksjon som returnerer environmentet til
en starttilstand, og som returnerer denne tilstanden samt eventuell ekstra info:
env.reset() → Tuple[initial_state, info]
Forå lage RL-loopen trengs i utgangspunktet kun én ytterligere funksjon, nemlig
env.step(action) → Tuple[state, reward, done, info]
Funksjonen .step tar altså en action som argument, hvorpå environmentet havner i en ny tilstand,
somreturneressammenmedeventuellrewardmottattfordenneaction,enbooleandonesomangirom
environmentet har terminert, og eventuell ekstra info. Basert på de to kommandoene over kan man
kode en RL-loop. Først settes environment i starttilstanden, og deretter lages enten en for-loop som
iterererovermaksantallstegogterminerernårmaksantallstegernåddellernårdone==True,elleren
while-loop som terminerer når done==True. I denne loopen interagerer agenten med environmentet
gjennomå sende inn actions, motta ny state og reward, og velge nye actions.
Som intuitivt eksempel kan vi se for oss spillet tre-på-rad. Starttilstanden initial state er et brett
med ni tomme ruter. Første spiller (menneske eller agent) plasserer en ‘X’ på brettet, altså utfører
en action. Dette gjør at environmentet inntar en ny state, medén rute okkupert av en ‘X’. Basert på
denne staten plasserer den andre spilleren (menneske eller agent) en ‘O’ på brettet, og environmentet
inntar en ny state basert på denne. Slik fortsetter de to spillerne annenhver gang, frem til enten en
av spillerne har fått tre av sine markører på rad (vertikalt, horisontalt eller diagonalt), eller til brettet
ikkeharfleretommeruterigjen. Ibeggedissetilfellenesettesdone=True. Spillerensomfårtrepårad
vinner, og får reward>0. Hvis ingen får tre pårad er spillet uavgjort, og begge spillerne får reward=0.
Om vi vil skrive koden som lager dette environmentet, trenger vi minimum følgende funksjoner:
• init : Lager initial state, altså et tomt brett. Det kan for eksempel representeres som
‘012345678’. Setter winner=None, setter en variabel player turn=‘X’. Kan eventuelt initialis-
ere variabler som teller hvor ofte de ulike spillerne har vunnet, og andre ting som er nyttigeå ta
vare på.
• reset: Setter environmentet tilbake til initial state, winner=None og player turn=‘X’, reini-
tialiserer eventuelle tellevariabler. Returnerer initial state og eventuelt en info-dictionary.
• step: Tarenactionsomargumentoglagerennystatefraaction,foreksempelstate=‘0123X5678’
hvis spiller X setter et kryss i midten. Sjekker om noen har vunnet, bytter på spillers tur (X hvis
O, og omvendt). Returnerer ny state, reward, done og eventuelt info-dictionary.
• check winner: Leteretterhorisontale,vertikaleellerdiagonalelinjeravXXXellerOOO.Returnerer
True hvis det finnes en vinner, ellers False.
• render: Ikke nødvendig, men veldig nyttig om man vil se på environmentet under trening, eller
når den ferdig trente agenten spiller. Lager en visuell representasjon av spillets tilstand.
Med et environment på plass – enten et vi har laget selv, eller et vi har importert fra et bibliotek –
kan vi lage agenten som skal læreå løse en oppgave i environmentet.

## 4.4 Agenter: exploration, exploitation og læring
<!-- side 58 -->

Oppgaventilenagenteråobserverestatesogvelgeactionsbasertpådisse. Viholderosstileksempelet
med tre-på-rad, og ønskerå lage en agent som bruker Q-verdier tilå velge actions basert på states.
Da gjør vi såkalt Q-learning, og dette kan gjøres på flere måter. Vi vil først lage en enkel agent som
har en tabell (dictionary) med Q-verdier, før vi ser på et nevralt nettverk som agent senere. Når vi
initialiserer agenten må denne vite hvilken tag den har i spillet, altså ‘X’ eller ‘O’, og den må ha et
stedå lagre Q-verdier. Til dette bruker vi typisk en dictionary med state som key.
Seigjenpålikning115. Foratagentenvårskalkunnelære,altsåoppdatereQ-verdienesine,måvivelge
verdier for α og γ. Måten agenten vår får tilgang til treningsdata, er gjennomå utføre ulike actions
i ulike states. Forå sikre at agenten utforsker de tilgjengelige mulighetene i tilstrekkelig grad, brukes
en hyperparameter vi ikke har vært borti før, og som kun gir mening i konteksten av reinforcement
learning, nemlig exploration factor, ofte angitt med symbolet epsilon ϵ. Denne styrer hvor mye
agenten utforsker, på engelsk: explore, miljøet sitt. Den enkleste måtenå få agenten tilå utforske,
er vedå velge tilfeldige actions med en viss sannsynlighet. Formelt velger vi en exploration factor
ϵ∈[0,1],somrepresenterersannsynlighetenforatagentengjørentilfeldighandling. Ifunksjonensom
velger action for agenten, skal denne velge action tilsvarende høyest Q-verdi, med sannsynlighet 1−ϵ,
og ellers en action tilfeldig samplet fra environmentets action space. Oppgave: Hva representerer
henholdsvis en høy og en lav verdi av ϵ? Når i løpet av treningen er det lurtå velge tilfeldige actions?
Bør agenten slutteå gjøre tilfeldige actions på et tidspunkt?
Hvis agenten utforsker (explore) miljøet, som svarer til en høy verdi av ϵ, finner den kanskje kombi-
nasjoner av states og actions som fører til store belønninger. På den annen side kan agenten utnytte
(exploit) det den vet om miljøet, som svarer til en lav verdi av ϵ, og unngå risikoen forå gjøre actions
somførertilstoretap. UlempeneratdendakanskjegårglippavbelønningerdensaktuelleQ-verdier
ikke vet om, fordi tilsvarende state-action-kombinasjon ikke har blitt besøkt før. Valget mellom ut-
forsking og utnytting – som rommer faktumet at den ene går på bekostning av den andre, da de to
svarer til henholdsvis høye og lave verdi av ϵ – kalles exploration exploitation tradeoff, og det finnes
ingenuniversellløsningsomgirengodtradeoff: Explorationhandleromåtaactionsmedukjentutfall,
mensexploitationhandleromåtaactionsmedkjentutfall. Foråvelgedenoptimalebalansenmellom
deto,måttevikjentutfallettilactionsmedukjentutfall. Dissevilledaperdefinisjonhattkjentutfall,
som er en selvmotsigelse. En mye brukt og ofte god strategi er epsilon greedy, med avtagende verdier
av ϵ, såkalt epsilon decay. Da starter man med en høy verdi av ϵ tidlig i treningen, og reduserer denne
stegvis. Dette fører til at agenten (nesten) slutterå gjøre tilfeldige actions sent i treningen, når den
har lært seg mange av Q-verdiene. Når dette bør skje er avhengig av størrelsen på state-action-space,
altså av environment og problemet som skal løses. Agenten slutter bare nestenå ta tilfeldige actions
fordidetoftefungererbedreåbeholdeϵpåenlitenverdi, istedetforåsettedennetilnøyaktig0, selv
etterattreningeneravsluttet. Grunnentildetersimpelthenatselvengodttrentagentkankjøreseg
fast, og trenge et tilfeldig dytt forå komme seg videre.
Nå som vi har kontroll på de relevante parametrene, kan vi lage en klasse Player, hvor agenten er et
objekt. Instanser av denne klassen som lærerå spille tre-på-rad må minimum ha følgende egenskaper
• tag ← ‘X’ eller ‘O’
• Q-tabell ← en dictionary, inneholder alle Q-verdiene agenten kjenner, og må læres.
• α,γ,ϵ ← agentens parametre. I tillegg kommer eventuelle læringsspesifikke parametre.
I forelesningene bruker vi tre-på-rad eksempelet forå lage agenter som lærer segå spille optimalt for
henholdsvis X og O. Koden samt ferdig trente agenter finnes på gitlab.com/Strumke/ntnu-lectures/-
/tree/main/Tictactoe%20Q-learning.
I tillegg må agenten ha metoder for å velge action, lære, og oppdatere ϵ. Vi kan bruke følgende
kodesnutt forå velge action.
def choose_action(self, state):
available_actions = [_i for _i, _s in enumerate(state) if _s.isnumeric()]
# If only one move available, make that one
if len(available_actions) == 0:
return None
elif len(available_actions) == 1:
action = available_actions[0]
return action
else:
qvalues = []
for _action in available_actions:
potential_state = state[:_action] + self.tag + state[_action+1:]
qvalues.append(self.model.predict(self.state_to_array(potential_state),
verbose=0)[0][0])
max_index = np.argmax(qvalues)
best_action = available_actions[max_index]
return best_action
Denne funksjonen gjør flere ting: 1) Får oversikt over mulige trekk. state er en string bestående av
indeksene til mulige trekk og eksisterende plasseringer, for eksempel 0123XO678. Mulige trekk er alle
delene av denne stringen som er numeriske verdier. Hvis det ikke finnes tilgjengelige trekk, returnerer
funksjonen None, og hvis det kun finnes ett tilgjengelig trekk, returneres dette. 2) Sjekker om state
finnes i Q-tabellen. Hvis ikke settes staten inn med default Q-verdi 0. 3) Trekker et tilfeldig tall
mellom 0 og 1. Hvis dette er mindre enn ϵ, returneres en tilfeldig action. 4) Hvis det tilfeldige tallet
er større enn ϵ, returneres action tilsvarende høyeste Q-verdi for aktuelle state, i følge Q-tabellen.

## 4.5 Q-tabell
<!-- side 60 -->

Q-læring handler omå oppdatere Q-verdiene etter hvert som agenten får erfaring fra environmentet, i
vårttilfellevedåfylledeminniQ-tabellengjennomlæring. Istartenavlæringenvetagenteningenting,
og Q-tabellen er enten tom eller fylt av 0-er for alle states og actions. Som oftest programmeres en
Q-tabell som en (nøstet) dictionary med states som keys. Dette kan nøstes slik at hver state igjen
er en dictionary med actions som keys, slik at hver state har én entry per action, som igjen har en
tilsvarende Q-verdi for det aktuelle state-action-paret. I starten av læringen spiller agenten som en
komplett idiot, og gjør nærmest kun tilfeldige trekk. I slutten av hvert spill får agenten en reward, og
denne brukes i læringsprosessen forå fylle inn stadig mer treffsikre verdier i Q-tabellen. Dette gjøres
ved bruk av likning 115, gjentatt under for tilgjengelighet,
(cid:16) (cid:17)
Qnew(S ,A )←(1−α)·Q(S ,A )+α· R +γmaxQ(S ,A) ,
t t t t t+1 t+1
A
for eksempel som i koden under.
def learn(self, state, action, reward, new_state, done):
v_s = self.calc_value(state)[0]
if done:
v_s_next = 0
else:
v_s_next = self.calc_value(new_state)[0]
td_target = reward + (0 if done else self.gamma*v_s_next)
td_delta = td_target - v_s
new_qvalue = v_s + self.alpha*td_delta
y_train = new_qvalue
model_input = self.state_to_array(state).reshape(1,-1)
self.train_model(model_input, y_train, self.train_steps)
return
Første linje i denne koden henter ut den gamle Q-verdien fra dictionariet. Deretter hentes den maksi-
male fremtidige verdien ut, med mindre den ikke eksisterer, i hvilket tilfelle den settes til 0. Deretter
brukesdissetostørrelsenesamtparametrenemedverdienevisatteistartenavtreningen,tilåberegne
den nye Q-verdien, som erstatter den gamle i dictionarien. Fuksjonen returnerer ingenting. Merk at
læringenskjerforhverttrekk,ogatfunksjonentrengeråvitehvilkenstateagenteneri,hvilkenaction
somblevalgt,hvilkenstateagentenhavneti,oghvormyerewardagentenmottokfortrekket. Itilfellet
tre-på-rad er reward=0 med mindre spillet er over. Hvis spillet er over er maksimal mulig fremtidig
verdi som regel 0 (ikke bare for tre-på-rad). Vi skjønner at Q-læring går ut påå oppdatere Q-verdier
gjennom erfaring.
Til slutt trenger vi en funksjon som minker verdien av ϵ i løpet av treningen. Dette kan for eksempel
løses ved hjelp av følgende funksjon.
def update_exp_factor(self):
if self.exp_factor > self.exp_min:
self.exp_factor *= self.epsilon_decay
Oppgave: Hva skjer her? Lag gjerne et plott av exp factor over flere steg med ulike verdier av
epsilon decay. Det er en grei regel når man gjør RL at en agent som ikke har rukketå lære seg
noe i løpet av perioden der exp factor>exp min, sannsynligvis ikke kommer tilå lære noe vettugt
om den trener videre. Da er det ofte mer hensiktsmessigå endre andre deler av koden, for eksempel
tapsfunksjonen.
Koden som brukes i forelesningene – og finnes på github under lenken over – inneholder funksjonalitet
forå plotte Q-verdiene for ulike states og actions underveis i spillet. En slik visualisering kan være
nyttig forå forsikre seg om at verdiene gir mening. Det gir oss riktignok den samme informasjonen
som om vi leser av Q-verdiene for actions gitt en state direkte, men gode visualiseringer kan likevel
gjøredetenklereåtainformasjoneninnoverseg. SomeksempelkanvilasteinnQ-verdienetilenagent
som har lært segå spille tre-på-rad optimalt, og lese ut verdiene for tilstanden state=‘012345678’,
altså det tomme brettet. Den aktuelle agenten (her vil numeriske variasjoner absolutt forekomme, så
ikke se på de nøyaktige tallverdiene men heller størrelsesforholdene) har følgende Q-verdier.
In[4]: agent_x.values[‘012345678’]
Out[4]:
{0: 1.9331107015552194,
1: 1.5491666935002169,
2: 1.5605398816666645,
3: 2.139988821719487,
4: 2.4760838915510397,
5: 0.6561000000000463,
6: 1.0237994971966147,
7: 1.394265348233807,
8: 1.6669174601240253}
Oppgave: Hva forteller disse Q-verdiene oss om hvor agenten vil plassere den første X-en på det
tomme brettet?
I stedet forå lese av Q-verdiene numerisk, kan vi plotte dem på en grid tilsvarende spillbrettet. Merk:
I det følgende eksempelet kan det være lurt å tegne opp et brett for å enklere kunne følge spillets
utvikling. Vi starter med et tomt brett, og for det tomme brettet med state=‘012345678’ vises
agentens Q-verdier i figur 30a. Det er tydelig at agenten foretrekker å sette et kryss i midten av
brettet, hvilket svarer til optimalt spill. Om vi setter en O slik at vi får neste state=‘0123XO678’,
kan vi lese ut Q-verdiene vist i figur 30b. Ut ifra disse skjønner vi at agenten vil sette neste kryss
på ruten nederst i midten. Forå forhindre at agenten deretter får tre kryss på rad i midten, bør vi
sette en O øverst i midten, slik at spillet ender opp i state=‘0O23XO6X8’. For denne tilstanden er
agentens Q-verdier som vist i figur 30c. Vi skjønner at agenten vil sette et kryss neders i venstre
hjørne, som gjør at vi må sette en O øverst i høyre hjørne forå forhindre at agenten får tre kryss på
diagonalen. Dette setter spillet i state=‘0OO3XOXX8’, som igjen gir agenten Q-verdiene vist i figur
30d. Viseratagentenharskjøntatdenfårtrekrysspåradvedåsetteetkryssnederstihøyrehjørne,
og dermed vinner spillet. Gjennom denne analysen av Q-verdier får vi en intuisjon for hva de betyr:
Agenten får ikke reward før spillet er over, men gjennom Q-verdiene kan vi forstå agentens forventede
fremtidige reward. Sagt mer presist representerer Q-verdiene forventet kumulativ fremtidig reward av
å gjøre action A i state S og følge policyen deretter.
(a) (b)
(c) (d)
Figure 30: Q-verdier fra en agent med tag=‘X’ som har lært å spille optimalt, for (a) et tomt
brett, dvs state=‘012345678’, (b) brettet tilsvarende state=‘0123XO678’, (c) brettet tilsvarende
state=‘0O23XO6X8’, og (d) brettet tilsvarende state=‘0OO3XOXX8’.
