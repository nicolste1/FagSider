# Eksamensanalyse — TDT4160 Datamaskiner

**UTKAST, ikke gjennomgått med brukeren.** Bygger foreløpig bare på læringsutbyttebeskrivelsen (26. august 2026),
som nevner to eksamensoppgaver for T1.3. Eksamenssettene er ikke lest. Skal fylles ut sammen med brukeren
(steg 0 i `NYTT-FAG.md`) før kapittel 2 og senere kapitler regnes som ferdige.
Den maskinlesbare varianten ligger i `eksamen.json`.

## Status

- [ ] Eksamenssett samlet (hvilke, hvor de ligger)
- [ ] Gjennomgått med brukeren
- [x] `eksamen.json` fylt ut (foreløpig, fra læringsutbyttebeskrivelsen)
- [ ] Godkjent av brukeren: (dato)

## Eksamensform

Ukjent ennå. Spør brukeren: skriftlig/digital, varighet, hjelpemidler, poengfordeling, oppgaveformer.

## Tilgjengelige eksamenssett

| Sett | Fil / lenke | Løsningsforslag? | Merknad |
|---|---|---|---|
| Ord. 2024 | (mangler) | ? | Læringsutbyttebeskrivelsen nevner oppg. 5.4 (ytelse) |
| Kont 2026 | (mangler) | ? | Læringsutbyttebeskrivelsen nevner oppg. 5.5 (ytelse) |

## Analyse per deltema (foreløpig, fra læringsutbyttebeskrivelsen)

Prio: 1 = kommer nesten alltid, 2 = ofte, 3 = sjelden. Prio-ene under er gjettet ut fra om læringsmålet sier «kan bruke/beregne»
(regn, prio 1) eller «kjenner til» (forklar, prio 2). Må verifiseres mot settene.

| Deltema | Prio | Type | Forekomster (sett · oppgave · poeng) | Typisk formulering |
|---|---|---|---|---|
| 1.1 Datamaskintyper og de 7 store ideene | 2 | forklar | ? | «Nevn og forklar …», match idé til eksempel |
| 1.2 Under overflaten | 2 | forklar, regn | ? | Fem komponenter, lagret program, produksjonssteg; utbytte/kostnad per die |
| 1.3 Ytelse | 1 | regn | Ord. 24 · 5.4, Kont 26 · 5.5 | Iron Law: sammenlikn to maskiner, finn klokke/CPI; dynamisk effekt |
| 1.4 Parallelle datamaskiner | 1 | regn | ? | Amdahls lov med parallell andel og antall kjerner |
| 2.1 Instruksjoner | 1 | kode, forklar | ? | Oversett C til RISC-V og omvendt, instruksjonsformater |
| 2.2 Heltall og logiske operasjoner | 2 | regn | ? | Tokomplement, skift, masker |
| 2.3 Funksjonskall | 1 | kode | ? | Prosedyrekall, stakk, lagrede registre |
| 2.4 Instruksjoner, diverse | 2 | forklar, kode | ? | Adressering, tegn og strenger |

## Tidligere eksamensoppgaver som skal inn som `.oppgave`-bokser

| Sett · oppgave | Deltema | Side · anker | Status |
|---|---|---|---|
| Ord. 2024 · 5.4 | 1.3 | kap1/ytelse.html#ytelseslikningen | mangler tekst (settet ikke i repoet) |
| Kont 2026 · 5.5 | 1.3 | kap1/ytelse.html#ytelseslikningen | mangler tekst (settet ikke i repoet) |

## Hva som bevisst nedprioriteres

Fra kapittel 1 (kuttet 22. september 2026): Intel-historikk og figur 1.16-tabellen, fly-tabellen, SPEC-tabellen og SPECpower,
iPhone-eksempler, LCD og nettverk, figur 1.10 (ytelse per kostnad), DRAM-prisutvikling, «kostnad er ikke pris»,
selvstudiene om DRAM-pris og «Amdahl og brorskap», Check Yourself om prosessorer hjemme og om volum.
