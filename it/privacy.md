---
title: "Informativa sulla Privacy"
description: "Scopri come Jynx protegge la tua privacy e gestisce i tuoi dati. La nostra informativa sulla privacy trasparente delinea le nostre pratiche e i tuoi diritti."
canonical: "https://jynx.app/it/privacy.html"
locale: "it"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Informativa sulla Privacy

Ultimo aggiornamento: 17 novembre 2026

Version: 1.13

### Changes in Version 1.13 (November 17, 2026)

- Adds §5.11 (Location and Match Distance): discloses the optional approximate-location feature that displays the distance between you and other players ("~N km") on the match queue and can optionally order that queue by proximity. The section states that only approximate location is processed (the operating system's coarse / reduced-accuracy permission; coordinates snapped on our servers to a grid of about 0.02°, roughly 2.2 km, giving a derived cell of about 11 km; raw GPS coordinates are never stored); that nothing is collected without both the operating-system permission and the in-app toggle; that location is never processed in the background, never shared with ad platforms, and never included in analytics (no coordinates, no city names, no cell identifiers); that the location record is automatically deleted after 45 days without an update, the profile-card copy being activity-bounded; and that turning the in-app toggle off deletes the stored coordinates while revoking the operating-system permission stops collection. §7.6 (withdraw consent) and §13 (legal bases) gain the matching entries. No other clause changes.

### Changes in Version 1.12 (November 14, 2026)

- Adds §5.10 (Emails and Communications) with the two-regime email disclosure validated by counsel on 2026-11-14: account-activity notification emails (unread message, new match, like) are service notifications sent on our legitimate interest, with a per-type off switch in Settings > Privacy > Communications or via the "Manage these notifications" link in each email, plus the separate GDPR Art. 21 objection channel (privacy@jynx.app); re-engagement (winback), news, and offers emails are commercial prospecting sent only with your prior consent, given via a separate unchecked box and withdrawable at any time; and usernames and profile pictures shown in activity-notification emails are generated at send time and never retained in our email logs (identifier and counts only). Pairs with Terms of Service v1.9 (§5.6). No other clause changes.

### Changes in Version 1.11 (November 11, 2026)

- Adds a transparency paragraph to the §9 LGPD guarantees: the information required by Article 17, §2 of ANPD Resolution CD/ANPD nº 19/2024 (form, duration, and specific purpose of each transfer; destination countries; controller identification and contact; shared use of the data; responsibilities of the processing agents and security measures; your rights, the channel, and the right to petition the ANPD) is consolidated in this Policy with section references, and the full text of the contractual clauses used for these international transfers is made available upon request to dpo@jynx.app, answered within 15 days. No transfer, recipient, or legal basis changes.

### Changes in Version 1.10 (November 11, 2026)

- Rewords the §9 Meta transfer entry: international transfers of personal data made in connection with Meta's tools are subject to the applicable contractual safeguards and international transfer mechanisms, and Jynx is verifying their compliance with the requirements of Article 33 of the LGPD and with ANPD regulations. Pending that verification, the Policy no longer presents the contractual guarantees in Meta's Business Tools terms as sufficient on their own for the Brazilian transfer leg. Nothing else changes — the data shared (§4.9, §5.9) and every other clause are unchanged.

### Changes in Version 1.9 (November 10, 2026)

- Extends §4.9 (Meta) with ad measurement: conversion events shared with Meta now include sign-up, onboarding completed, and purchases with their amount and currency; consent-only hashed contact identifiers; the self-declared gender field on the registration event; Meta's Business Tools retention; and the never-sold commitment.
- Adds §5.9 Advertising Measurement: the legal bases (your consent everywhere; on Android, alternatively our legitimate interest with a visible off switch in the first-launch sheet and in Settings > Privacy > Ad measurement), the minors safeguard, withdrawal, and the Apple SKAdNetwork disclosure (anonymous, aggregated attribution; applies even when tracking or ad measurement is declined).
- Updates §3.3, §7.6 (withdraw consent), §9 (Meta transfer leg under LGPD Art. 33) and §13 (legal bases) accordingly.

### Changes in Version 1.8 (October 24, 2026)

- Adds §4.9 (advertising attribution: Meta App Events SDK, Apple App Tracking Transparency / IDFA, Google Play Install Referrer) with the matching identifiers in §3.
- Adds §4.10 (creator/partner program: CPF/CNPJ identification; PayPal, Wise, and Pix payout rails) and §4.11 (AI features: avatar generation on Cloudflare Workers AI — inputs are quiz answers and play-style preferences only, never photos; companion messages enriched by Google Gemini with AI labeling).
- Names Talsec (freeRASP) in §5.7 as the on-device library behind our device-integrity signals; findings reach us through our own monitoring, not a Talsec service.
- Updates §3.1: adds a Discord-account-connection disclosure (integration, not a sign-in method) and describes guest browsing for when it becomes available; §10 adds a screen-sharing (when available) paragraph.
- Rewrites the §9 LiveKit entry: LiveKit Cloud routes media globally under its Data Processing Addendum, which incorporates the EU standard contractual clauses; the general EU/EEA and Brazilian transfer guarantees now apply to LiveKit.
- Rewrites the §8 breach-notification wording (GDPR Art. 33/34; LGPD Art. 48, including the 3-business-day deadline of ANPD Resolution CD/ANPD nº 15/2024).
- Adds the LCEN publication details in §1 (directeur de la publication; hébergeur).
- Ships French and Portuguese translations of every clause above and of previously untranslated paragraphs.

### Changes in Version 1.5 (September 2026)

- Adds a child-safety disclosure (§5.8, §3.5, §4.7, §4.8): images shared in direct messages are analyzed by automated systems that compare irreversible hashes against databases of known child sexual abuse material; for this analysis the images themselves are never transmitted to third parties — only hashes are. Adds images shared in direct messages to §3.5, a category of specialized child-safety technology providers to §4.7, and the cloud image-moderation processing of profile pictures (machine-learning analysis by AWS) to §4.8.
- Updates §10 (Cookies): the Jynx website now uses Google Analytics 4 with Consent Mode v2; analytics storage is denied by default and only enabled if you accept the cookie banner (your choice is stored locally on your device).

### Changes in Version 1.6 (September 2026)

- Adds a website disclosure (§10): when you open an invitation link (jynx.app/invite/…) and tap the App Store download button, the site writes the invitation link into your clipboard so the app can attribute your install to the person who invited you. The website never reads your clipboard; the app reads it only once, after asking for your explicit consent at first launch.

### Changes in Version 1.7 (September 2026)

- Extends the §10 referrals disclosure (new "Referrals and creator campaigns" paragraph): an invitation code may also credit a creator attribution campaign, and payout records for creator campaigns are kept in pseudonymous form. Nothing changes for invitees — the same data is collected as before, on the same legal basis.

## 1. Introduzione

Jynx ("noi", "nostro", "l'applicazione") è una piattaforma di gaming sociale che permette ai giocatori di connettersi, formare squadre e giocare insieme.

### Informazioni Legali:

- **Entità Legale:** Jynx Group (Société par Actions Simplifiée, SIREN 991443896, registrata a Nantes, Francia)
- **Contatto Responsabile Privacy:** dpo@jynx.app
- **Giurisdizione UE / SEE:** Francia, Unione Europea — questa Informativa sulla Privacy è conforme al Regolamento (UE) 2016/679 (GDPR) e alla Direttiva 2002/58/CE (ePrivacy), come recepiti in Francia.
- **Giurisdizione brasiliana:** Questa Informativa sulla Privacy è conforme inoltre alla legge brasiliana nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), che si applica al trattamento dei dati personali degli interessati situati in Brasile da parte di Jynx ai sensi dell'art. 3 della LGPD, indipendentemente dal fatto che Jynx non abbia una sede in Brasile.
- **Pubblicazione (LCEN):** Directeur de la publication: Antoine Haie. Questo sito (jynx.app) è ospitato da GitHub Pages e distribuito tramite la rete CDN di Cloudflare.

Ai fini della LGPD, Jynx Group è il titolare (controlador) dei tuoi dati personali. Il nostro Responsabile della Protezione dei Dati agisce come encarregado (DPO) e può essere contattato all'indirizzo dpo@jynx.app per qualsiasi richiesta relativa alla LGPD. Sebbene Jynx rientri nella figura di pequeno agente de tratamento de dados pessoais (agente di trattamento di piccole dimensioni) ai sensi della Risoluzione CD/ANPD nº 2/2022, che esonera Jynx dalla nomina obbligatoria di un encarregado, Jynx mantiene volontariamente questo canale di comunicazione pubblicato.

Questa informativa sulla privacy descrive come raccogliamo, utilizziamo, condividiamo e proteggiamo i tuoi dati personali quando utilizzi la nostra applicazione.

## 2. Età Minima e Verifica

La nostra applicazione è riservata agli utenti di 18 anni o più.

Al momento della creazione del tuo account, ti chiediamo di fornire la tua data di nascita. Se hai meno di 18 anni, non potrai creare un account o utilizzare i nostri servizi.

Marketing ai minorenni. Jynx è riservato agli utenti di età pari o superiore a 18 anni e applica un controllo dell'età automatizzato. Se in seguito identifichiamo che un utente ha meno di 18 anni (art. 14 LGPD; art. 8 GDPR), termineremo immediatamente l'account, escluderemo l'utente da tutte le comunicazioni di marketing, riattivazione e sondaggi, e cancelleremo i dati di marketing associati. Non raccogliamo mai consapevolmente il consenso al marketing da un minorenne.

## 3. Dati Raccolti

### 3.1. Dati di Registrazione e Profilo

Raccogliamo le seguenti informazioni quando crei e gestisci il tuo account:

#### Informazioni di Autenticazione:

- Email (per account email/password)
- Nome utente/nickname
- Foto profilo (opzionale)
- Identificativi di accesso social (Google, Apple) se usi questi metodi
- Identificativi Discord (il tuo ID utente Discord) se scegli di collegare il tuo account Discord per l'integrazione Discord — la connessione usa l'OAuth di Discord solo per l'identificazione e non è un metodo di accesso; puoi scollegarlo in qualsiasi momento
- Navigazione come ospite (quando disponibile): puoi esplorare le parti pubbliche di Jynx senza creare un account; in modalità ospite trattiamo solo un identificativo ospite memorizzato localmente e i dati tecnici della §3.3 necessari per erogare l'app — nessun profilo viene creato e nessun dato dell'account viene conservato. Per abbinarti, chattare o unirti alle community devi creare un account

#### Informazioni del Profilo:

- Data di nascita (per verifica dell'età)
- Paese e fuso orario
- Lingue parlate
- Biografia (opzionale)
- Preferenze di gaming e disponibilità
- Identificatore unico (generato automaticamente per la scoperta privata degli amici)

### 3.2. Dati di Gaming

Per aiutarti a trovare compagni compatibili, raccogliamo:

#### Profili di Gioco:

- Giochi che giochi
- Livelli, rank e statistiche di gioco
- Campioni/personaggi preferiti
- Stile di gioco

#### Integrazione con Riot Games API:

Recuperiamo dalla Riot Games API (con il tuo consenso):

- Nome evocatore e Riot ID
- Rank e cronologia partite (League of Legends, Valorant, ecc.)
- Statistiche campioni
- Cronologia partite recente

**Motivo della Raccolta:** Visualizzare il tuo profilo giocatore e migliorare l'abbinamento con altri giocatori.

### 3.3. Dati di Utilizzo e Tecnici

Raccogliamo automaticamente alcuni dati tecnici:

#### Analytics e Performance:

- **Firebase Performance Monitoring:** Tempo di avvio dell'app, fluidità dell'interfaccia
- **Sentry:** Report di errori e performance (con anonimizzazione dei dati personali)
- **Firebase Crashlytics:** Report di crash

#### Informazioni del Dispositivo:

- Tipo e modello di dispositivo
- Versione del sistema operativo
- Versione dell'applicazione
- Identificatori del dispositivo e segnali di integrità del dispositivo (vedi §5.7)

#### Comportamento Utente:

- Schermate visitate e funzionalità utilizzate
- Tempo trascorso nell'applicazione
- Interazioni con l'interfaccia

Puoi disabilitare la raccolta dati analytics in Impostazioni > Privacy > "Abilita Analytics".

La misurazione pubblicitaria con Meta è separata dagli analytics e ha un interruttore dedicato: vedi §5.9.

### 3.4. Dati di Comunicazione

- **Messaggi:** Messaggi in chat di community, messaggi privati tra utenti, cronologia conversazioni
- **Notifiche:** Token FCM (Firebase Cloud Messaging) per notifiche push

### 3.5. Contenuti Generati dall'Utente

- Foto caricate (immagini profilo, foto aggiuntive) and images shared in direct messages
- Report di sicurezza e moderazione
- Preferenze cosmetiche (avatar, badge)

### 3.6. Dati audio delle stanze vocali

Jynx offre stanze vocali in tempo reale che ti permettono di parlare con gli altri partecipanti mentre giochi. L'audio della stanza vocale viene acquisito dal tuo microfono solo dopo che hai concesso l'autorizzazione del microfono del sistema operativo e sei entrato esplicitamente in una stanza; nessun audio viene acquisito prima di entrambi questi passaggi.

Jynx non attiva le funzioni di registrazione, trascrizione, Agent Insights o Egress di LiveKit. L'audio delle stanze vocali viene instradato in tempo reale dalla SFU (Selective Forwarding Unit) di LiveKit e non viene registrato, memorizzato né conservato da Jynx né da LiveKit.

Quando parli in una stanza vocale, il tuo audio viene trasmesso in tempo reale agli altri partecipanti di quella stanza, in modo simile al funzionamento della voce nelle altre app di chat vocale.

L'audio delle stanze vocali è trattato con il tuo consenso: concedi l'autorizzazione del microfono ed entri esplicitamente in una stanza prima che venga acquisito qualsiasi audio. Puoi revocare il consenso in qualsiasi momento uscendo dalla stanza o revocando l'autorizzazione del microfono nelle impostazioni del tuo dispositivo.

## 4. Servizi di Terze Parti e Condivisione Dati

### 4.1. Servizi Firebase (Google)

Utilizziamo i seguenti servizi Firebase, tutti conformi al GDPR:

- **Firebase Authentication:** Gestione sicura degli account utente
- **Cloud Firestore:** Archiviazione del tuo profilo e dati di gioco
- **Firebase Storage:** Hosting delle tue immagini profilo
- **Cloud Functions:** Esecuzione sicura della logica backend
- **Firebase Cloud Messaging:** Notifiche push
- **Firebase App Check:** Protezione contro abusi e bot
- **Firebase Performance Monitoring:** Monitoraggio performance dell'app
- **Firebase Crashlytics:** Report di crash

**Informativa Privacy Firebase:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Monitoraggio Errori)

Utilizziamo Sentry per il tracciamento errori e performance. I dati raccolti includono:

- Tracce di errori
- Contesto tecnico (OS, versione app)

**Informativa Privacy Sentry:** https://sentry.io/privacy/

### 4.3. API di Riot Games

Quando colleghi il tuo account Riot Games, recuperiamo le tue statistiche di gioco tramite l'API ufficiale di Riot Games. Questi dati sono utilizzati solo per visualizzare il tuo profilo e migliorare l'abbinamento.

**Informativa Privacy Riot Games:** https://www.riotgames.com/en/privacy-notice

### 4.4. Fornitore di Servizi Email (Comunicazioni di Marketing e Sondaggi)

Per inviare le email di marketing, riattivazione e sondaggi di disinstallazione/churn descritte nella §5.6, Jynx usa un fornitore di servizi email terzo (ESP) che agisce come responsabile del trattamento (art. 28 GDPR; art. 39 LGPD — operador). L'ESP tratta il tuo indirizzo email e dati minimi di consegna (es. stato di invio/bounce) esclusivamente su istruzioni documentate di Jynx, in forza di un Accordo di Trattamento Dati firmato.

- **Identità, ruolo e sede dell'ESP:** Brevo (Brevo SAS, Parigi, Francia) — nostro fornitore di servizi email e responsabile del trattamento in forza di un Accordo di Trattamento Dati firmato. Informativa sulla privacy di Brevo: https://www.brevo.com/legal/privacypolicy/
- **Sotto-responsabili:** L'elenco attuale dei sotto-responsabili di Brevo è pubblicato nel suo Accordo di Trattamento Dati (Termini di Utilizzo): https://www.brevo.com/legal/termsofuse/
- **Base dei trasferimenti internazionali:** Vedi §9. Brevo ha la sede principale in Francia (UE). I trasferimenti verso Brevo beneficiano quindi del regime di protezione UE ai sensi del GDPR e, per gli utenti brasiliani, della decisione di adeguatezza dell'ANPD riguardante l'UE (Risoluzione nº 32/2026) — non sono richieste SCC né meccanismi aggiuntivi.

Non vendiamo i tuoi dati personali. Nessun pixel di tracciamento o analytics nascosto è incorporato nelle email di marketing senza una separata base giuridica divulgata nella §5.6.

### 4.5. LiveKit Cloud (voce in tempo reale)

Jynx utilizza LiveKit Cloud come responsabile del trattamento (GDPR art. 28; LGPD art. 39 — operador) nell'ambito di un accordo di trattamento dei dati firmato, per gestire l'infrastruttura multimediale in tempo reale che instrada l'audio delle stanze vocali tra i partecipanti. LiveKit gestisce la SFU (Selective Forwarding Unit) che inoltra il flusso audio di ciascun partecipante agli altri in tempo reale.

Jynx non attiva le funzioni di registrazione, trascrizione, Agent Insights o Egress di LiveKit. L'audio delle stanze vocali viene instradato in tempo reale dalla SFU (Selective Forwarding Unit) di LiveKit e non viene registrato, memorizzato né conservato da Jynx né da LiveKit.

LiveKit conserva tuttavia metadati operativi di sessione — come identità dei partecipanti, identificatori delle stanze, orari di connessione e metriche di qualità — per finalità di fatturazione, prevenzione degli abusi e gestione operativa, ai sensi del suo Data Processing Addendum. Tali metadati non vengono utilizzati per identificarti al di fuori della piattaforma o per finalità pubblicitarie.

### 4.6. App Store / Google Play (Acquisti In-App e Abbonamenti)

Gli abbonamenti Jynx+ e i Founder Pack sono venduti in-app tramite l'App Store di Apple e Google Play, che agiscono come esercenti registrati (merchant of record) per questi acquisti (vedi i Termini di Servizio, Sezione 8). I dati dello strumento di pagamento (es. dati della carta) sono raccolti e trattati esclusivamente da Apple/Google secondo le rispettive informative sulla privacy; Jynx non raccoglie, riceve o conserva alcun dato dello strumento di pagamento.

Tramite il nostro fornitore di fatturazione RevenueCat (un responsabile del trattamento che agisce in forza di un Accordo di Trattamento Dati firmato; art. 28 GDPR; art. 39 LGPD — operador), Jynx riceve solo le informazioni necessarie a consegnarti ciò che hai acquistato: lo stato del tuo abbonamento e dei tuoi entitlement (es. se Jynx+ è attivo e la sua data di rinnovo), il tier del Founder Pack acquistato e gli identificativi di transazione. Questi dati sono conservati per il tempo necessario a erogare il Servizio e a rispettare gli obblighi contabili e di archiviazione (§6), e sono usati esclusivamente per concedere e mantenere i tuoi entitlement e per prevenire le frodi. RevenueCat è stabilito negli Stati Uniti; i trasferimenti di dati personali a RevenueCat si basano sull'EU-US Data Privacy Framework (per le entità RevenueCat autocertificate sotto il DPF) o su clausole contrattuali standard dove il DPF non si applica. Il meccanismo di trasferimento applicabile ai dati degli utenti brasiliani è confermato nei nostri Registri delle Attività di Trattamento (vedi §9).

- Informativa sulla privacy di Apple: https://www.apple.com/legal/privacy/
- Informativa sulla privacy di Google: https://policies.google.com/privacy
- Informativa sulla privacy di RevenueCat: https://www.revenuecat.com/privacy

### 4.7. Fornitori Specializzati di Tecnologie per la Sicurezza dei Minori

Per contribuire a rilevare materiale noto di abuso sessuale su minori (vedi §5.8), Jynx collabora con fornitori specializzati di tecnologie per la sicurezza dei minori che agiscono come responsabili del trattamento (art. 28 GDPR; art. 39 LGPD — operador). Questi fornitori ricevono solo hash irreversibili derivati dalle immagini — mai le immagini stesse — ed eseguono il confronto degli hash nell'area UE, esclusivamente per il rilevamento ai fini della sicurezza dei minori e su istruzioni documentate di Jynx. La derivazione dell'hash dall'immagine avviene nell'infrastruttura Google Cloud di Jynx (vedi §9).

### 4.8. Fornitore di Moderazione delle Immagini su Cloud (AWS)

Per mantenere la piattaforma sicura, le immagini del profilo e le foto della galleria vengono esaminate da un servizio automatizzato di classificazione delle immagini — Amazon Rekognition, fornito da Amazon Web Services (AWS), che agisce come responsabile del trattamento (art. 28 GDPR; art. 39 LGPD — operador). A questo scopo l'immagine viene trasmessa ad AWS e analizzata con machine learning alla ricerca di contenuti inappropriati (per esempio nudità o materiale esplicito); l'esito è un'etichetta generata automaticamente con un punteggio di confidenza, gestita secondo il nostro processo di moderazione (vedi la Politica sulla Sicurezza dei Minori). Questo trattamento è usato esclusivamente per la moderazione dei contenuti e la sicurezza — mai per profilazione, pubblicità o qualsiasi altro scopo. AWS tratta questi dati nella regione AWS configurata per il servizio (attualmente San Paolo, Brasile); si applicano le garanzie per i trasferimenti della §9. Come per il resto del Servizio, l'immagine è gestita dall'infrastruttura Google Cloud di Jynx prima di essere inoltrata ad AWS (vedi §9).

### 4.9. Attribuzione Pubblicitaria (Meta, Apple ATT, Google Play Install Referrer)

Per misurare se le installazioni della nostra app derivano dal marketing, usiamo tecnologie pubblicitarie e di attribuzione, previo tuo consenso ove richiesto: l'SDK Meta (Facebook) App Events (Meta Platforms Ireland) e l'API Google Play Install Referrer. Sui dispositivi Apple l'SDK Meta viene inizializzato solo dopo che hai concesso l'autorizzazione App Tracking Transparency (ATT); senza tale concessione nessun identificativo pubblicitario (IDFA) viene raccolto e l'SDK non viene inizializzato. Su Android, l'API Google Play Install Referrer ci dice se la tua installazione proviene da una scheda dello store o da un link di campagna, e l'identificativo pubblicitario (GAID) è usato in conformità con le impostazioni dell'ID pubblicitario del tuo dispositivo. Gli eventi inviati a Meta sono limitati all'attivazione dell'app e ai metadati degli eventi dell'app (incluso, se hai effettuato l'accesso, il tuo identificativo utente nell'app, che viene rimosso dall'SDK al logout), trattati su istruzioni di Jynx per l'attribuzione e la misurazione delle campagne.

Meta Platforms Ireland tratta questi dati come nostro responsabile per la finalità di attribuzione sopra descritta; Meta Platforms, Inc. può inoltre agire come titolare indipendente per le proprie legittime finalità secondo i propri termini (i Termini di Trattamento Dati di Meta e la sua informativa sulla privacy su https://www.facebook.com/privacy/policy). I trasferimenti verso gli Stati Uniti si basano sull'EU-US Data Privacy Framework per le entità Meta autocertificate o su clausole contrattuali standard (§9). Puoi rifiutare o revocare l'autorizzazione ATT o reimpostare il tuo ID pubblicitario in qualsiasi momento nelle impostazioni del dispositivo; il rifiuto non condiziona l'uso di Jynx.

**Misurazione pubblicitaria.** Oltre all'attribuzione delle installazioni, misuriamo anche le conversioni: gli eventi condivisi con Meta includono l'iscrizione (registrazione), l'onboarding completato e gli acquisti — con importo e valuta dell'acquisto. Dove hai dato il consenso, può anche essere condiviso un indirizzo email o numero di telefono sottoposto ad hash (offuscato in modo irreversibile) per migliorare la qualità degli abbinamenti; questo non accade mai per gli utenti trattati sulla base del nostro legittimo interesse (sotto). L'evento di iscrizione (registrazione) può includere anche il genere da te dichiarato. Nulla altro è condiviso — nessun messaggio, campo del profilo, gioco, community, contatto, posizione o foto — e i tuoi dati non vengono mai venduti. Le basi giuridiche, le tue scelte e l'informativa Apple SKAdNetwork sono descritte nella §5.9.

Conservazione: Jynx non conserva una copia separata degli eventi condivisi con Meta. Gli eventi già condivisi restano soggetti ai processi di conservazione e cancellazione dei Business Tools di Meta, che si applicano dal momento della condivisione.

### 4.10. Programma Creator (Partner) — KYC e Pagamenti

Se aderisci al programma Creator (partner) di Jynx, trattiamo le informazioni di identità, fiscali e di pagamento richieste dal programma: il tuo CPF o CNPJ (validato in-app), il canale di pagamento che scegli — PayPal (identificato dall'email), bonifico bancario Wise (Brasile) o una chiave Pix — e i registri delle prestazioni delle tue campagne (iscrizioni attribuite; vedi §10 referenze). I registri dei pagamenti sono conservati in forma pseudonimizzata (§10). Il programma è disciplinato dai Creator Referral Terms e dal Self-Billing Mandate versionati che accetti all'iscrizione (vedi i Termini di Servizio §15).

I pagamenti sono eseguiti tramite l'istituto di pagamento che gestisce il canale scelto: PayPal o Wise ricevono le istruzioni di trasferimento e i dati necessari per verificare la tua identità, prevenire le frodi e adempiere ai propri obblighi regolatori, agendo secondo i propri termini come istituti di pagamento indipendenti (le loro informative sulla privacy sono pubblicate sui loro siti); un pagamento Pix è un trasferimento avviato da Jynx Group verso la chiave Pix che hai fornito. Le garanzie applicabili per i trasferimenti internazionali sono descritte nella §9.

### 4.11. Funzionalità IA

**Generazione degli avatar.** Il quiz degli avatar può generare proposte di avatar stilizzati per il tuo profilo. La generazione attualmente gira su Cloudflare Workers AI (Cloudflare, Inc., responsabile del trattamento) su istruzioni documentate di Jynx; se il motore sottostante cambia, questa sezione verrà aggiornata prima o insieme alla modifica. Gli input sono le tue risposte al quiz e le preferenze di stile di gioco — mai le tue foto — insieme al tuo identificativo utente; le proposte vengono restituite all'app come immagini PNG o WebP e sono conservate fino a 30 giorni perché tu possa recuperarli, dopodiché vengono eliminate. Le immagini generate sono sintetiche — non sono fotografie di te — e sono soggette alla stessa moderazione delle altre immagini (§4.8).

**Messaggi del companion (Quimera).** Alcuni messaggi dell'app companion sono composti o arricchiti da un sistema di IA generativa (Google Gemini, responsabile del trattamento). Quando un messaggio è generato da IA, è etichettato come tale; sei sempre informato quando interagisci con un elemento generato da IA, in conformità all'art. 50(1) dell'EU AI Act.

## 5. Utilizzo dei Dati

Utilizziamo i tuoi dati per:

### 1. Fornire i Nostri Servizi:

- Creare e gestire il tuo account
- Permetterti di connetterti con altri giocatori
- Facilitare la creazione di squadre e l'organizzazione di sessioni di gioco

### 2. Personalizzazione:

- Raccomandare compagni compatibili (abbinamento basato su gioco, rank, stile)
- Visualizzare contenuti rilevanti

### 3. Comunicazione:

- Inviarti notifiche di servizio importanti (abbinamenti trovati, messaggi ricevuti, avvisi di sicurezza dell'account e avvisi di modifica delle policy ai sensi della §11)

Le email di marketing, riattivazione e sondaggi di disinstallazione/churn sono descritte separatamente nella §5.6 Comunicazioni di Marketing e non rientrano in questa categoria transazionale.

### 4. Miglioramento del Servizio:

- Analizzare l'utilizzo per migliorare le funzionalità
- Identificare e correggere bug
- Ottimizzare le performance
- Generare proposte di avatar e bozze di messaggi del companion usando responsabili del trattamento IA (§4.11)

### 5. Sicurezza e Conformità:

- Prevenire frodi e abusi
- Far rispettare i nostri termini di utilizzo
- Conformarsi agli obblighi legali

Potremmo pubblicare statistiche anonimizzate e aggregate derivate dall'uso dell'app (per esempio, come i giocatori formano i duo). Queste statistiche non identificano mai singoli utenti.

### 5.6. Comunicazioni di Marketing

Oltre alle notifiche operative descritte nella §5.3, potremmo inviarti comunicazioni di marketing e riattivazione via email, tra cui: aggiornamenti sul prodotto e annunci di funzionalità riguardanti l'app Jynx; newsletter; messaggi di riattivazione che ti invitano a tornare nell'app; e brevi sondaggi di feedback su disinstallazione o churn (es. "Perché hai smesso di usare Jynx?"). Queste comunicazioni sono distinte dalle notifiche transazionali/di servizio.

**Base giuridica — utenti UE / SEE (GDPR + ePrivacy).** Le email di marketing e riattivazione verso gli utenti UE/SEE sono inviate sulla base del tuo consenso esplicito preventivo tramite opt-in (art. 13(1) della Direttiva ePrivacy, recepito in Francia dall'articolo L. 34-5 del Code des postes et des communications électroniques; artt. 6(1)(a) e 7 GDPR). A seguito del lancio degli abbonamenti a pagamento (Jynx+) e degli acquisti una tantum in-app (Founder Pack), il Servizio è ora un servizio remunerato, e tali acquisti costituiscono una "vendita" ai sensi della sentenza CGUE C-654/23 (13 nov 2025). L'eccezione del "soft opt-in" dell'art. 13(2) ePrivacy è quindi in linea di principio disponibile per noi per prodotti e servizi simili verso clienti esistenti. In un'ottica prudenziale, tuttavia, continuiamo a fondarci sul tuo consenso esplicito preventivo tramite opt-in; inizieremo a fondarci sulla base del soft opt-in solo dopo una rivalutazione documentata registrata nei nostri Registri delle Attività di Trattamento e un aggiornamento dell'informativa a te rivolta.

**Base giuridica — utenti brasiliani (LGPD).** Per gli utenti brasiliani, le comunicazioni di marketing e riattivazione si fondano su due basi giuridiche alternative:

1. **Consenso (art. 7, I e art. 8 LGPD)** — raccolto come opt-in separato, non pre-selezionato e specifico per la finalità, all'iscrizione o in-app, registrato con data, versione del modulo e lingua; puoi revocarlo in qualsiasi momento, gratuitamente, senza perdere l'accesso al Servizio (art. 8 §5). Il consenso è la base usata per qualsiasi comunicazione a prospect, prospezione a freddo o offerte di cross-sell/partner oltre all'app Jynx principale.
2. **Legittimo interesse (art. 7, IX LGPD, come specificato dall'art. 10)** — usato solo per utenti esistenti o da poco inattivi che ricevono messaggi di riattivazione, aggiornamenti sul prodotto riguardanti la stessa app Jynx, o un unico breve sondaggio di feedback su churn/disinstallazione. Prima di fondarci su questa base, Jynx conduce e documenta una Valutazione degli Interessi Legittimi (LIA) secondo il test in tre fasi della Guida al Legittimo Interesse dell'ANPD (2 feb 2024): (i) finalità, (ii) necessità e (iii) bilanciamento e garanzie. La LIA registra la relazione pregressa, le ragionevoli aspettative dell'utente, la finalità, i mezzi meno invasivi scelti e il canale di opt-out. Il legittimo interesse non è usato per email a freddo/non richieste, cross-sell non correlato, liste acquistate o messaggi insistiti verso utenti che hanno lasciato dopo la chiara conclusione della relazione.

**Diritto di opposizione / opt-out.** Gli utenti brasiliani possono in qualsiasi momento opporsi a questo trattamento e disattivarlo tramite i meccanismi delle §7.5 e §7.6 (cancellazione con un clic in ogni email, oppure l'interruttore delle preferenze di comunicazione in-app), senza costi e senza terminare l'account. Onoriamo le richieste di opt-out in tempo reale. Il Codice di Difesa del Consumatore brasiliano (CDC, Legge 8.078/90, in particolare art. 39 III) vieta la messaggistica commerciale non richiesta o abusiva; rispettiamo quindi rigorosamente gli opt-out e applichiamo limiti di frequenza, poiché l'invio insistito o dopo opt-out ignorato può essere considerato pratica abusiva.

**Sondaggi di disinstallazione / churn.** Ove operativamente fattibile, facciamo le domande di disinstallazione/churn in-app al momento della disinstallazione (nessuna conservazione dell'email richiesta). Quando viene inviato un sondaggio via email, il sondaggio non contiene contenuti promozionali o di riattivazione; inviamo al massimo un (1) sondaggio per utente entro circa 60 giorni dalla cancellazione dell'account o dalla disinstallazione; l'indirizzo email viene quindi cancellato o anonimizzato in conformità alla §6; e gli utenti che hanno presentato una richiesta di cancellazione / diritto all'oblio (§7.3) non vengono mai ricontattati e sono inseriti in una lista di soppressione permanente (vedi §6 e i Termini di Servizio §7.2).

**Tracciamento delle email.** Le email di marketing non incorporano pixel di tracciamento o analytics nascosti che trattino dati personali senza una separata base giuridica. Qualora venga introdotto qualsiasi tracciamento di aperture/clic, sarà divulgato qui e fondato sul consenso (art. 8 LGPD; art. 5(3) ePrivacy), in coerenza con le indicazioni dell'ANPD sulle tecnologie di tracciamento (18 ott 2022).

**Frequenza.** Le email di marketing sono soggette a limiti interni di frequenza; puoi ridurle o disattivarle in qualsiasi momento tramite l'interruttore delle preferenze di comunicazione in-app o cliccando su cancella iscrizione in qualsiasi messaggio.

### 5.7. Sicurezza della community ed evasione dei divieti

Per contribuire a proteggere la nostra community dagli abusi, utilizziamo identificatori del dispositivo e segnali di integrità del dispositivo per rilevare e prevenire i tentativi di eludere una sospensione o un ban. Se associamo un dispositivo a un account bannato, tale dispositivo può essere impedito di creare nuovi account o di accedere. Se ritieni che ciò sia avvenuto per errore, puoi presentare un ricorso contattando support@jynx.app.

I segnali di integrità del dispositivo sono raccolti e valutati con l'assistenza di Talsec freeRASP, una libreria anti-manomissione e di integrità del dispositivo incorporata nell'app. freeRASP opera sul tuo dispositivo: rileva localmente minacce come dispositivi con root, hooking a runtime e bootloader sbloccati, e ci riporta i risultati tramite il nostro fornitore di monitoraggio degli errori (Sentry, §4.2) per la prevenzione degli abusi; non invia i tuoi dati a alcun servizio gestito da Talsec.

### 5.8. Analisi delle Immagini per la Sicurezza dei Minori

Per contribuire a proteggere i minori e adempiere ai nostri doveri di segnalazione legali, Jynx usa sistemi automatizzati per analizzare le immagini condivise nei messaggi diretti, confrontando gli hash derivati da tali immagini con database di materiale noto di abuso sessuale su minori. Per questa analisi, le immagini stesse non vengono trasmesse a terzi — vengono trasmessi solo hash irreversibili (vedi §4.7). Le immagini del profilo sono esaminate separatamente, dal trattamento di moderazione delle immagini descritto nella §4.8. Questa analisi esiste esclusivamente per il rilevamento ai fini della sicurezza dei minori e per i nostri doveri di segnalazione legali; non è usata per profilazione, pubblicità o qualsiasi altro scopo. Le corrispondenze sono gestite come descritto nella nostra [Politica sulla Sicurezza dei Minori](/child-safety.html).

### 5.9. Misurazione Pubblicitaria

Se accetti, condividiamo anche eventi limitati (come iscrizioni e acquisti, con il relativo importo) con Meta per misurare e migliorare la nostra pubblicità. I tuoi dati non vengono mai venduti, e puoi cambiare la tua scelta in qualsiasi momento nelle impostazioni Privacy. Cosa viene condiviso, e con chi, è elencato nella §4.9.

Come viene attivata. Su iPhone e iPad, la misurazione pubblicitaria usa i tuoi dati solo con il tuo consenso (art. 6(1)(a) GDPR; art. 7, I LGPD), prestato nella scheda privacy al primo avvio o più tardi in Impostazioni > Privacy > Misurazione pubblicitaria, e richiede inoltre l'autorizzazione App Tracking Transparency di Apple (vedi §4.9). Su Android, la misurazione pubblicitaria si fonda sullo stesso consenso oppure, per gli utenti a cui l'interruttore della misurazione pubblicitaria è mostrato attivo per impostazione predefinita nella scheda del primo avvio, sul nostro legittimo interesse a misurare la nostra pubblicità (art. 7, IX e art. 10 LGPD), valutato in una Valutazione degli Interessi Legittimi documentata. In quel caso è attiva per impostazione predefinita, e puoi disattivarla nella stessa scheda o in qualsiasi momento in Impostazioni > Privacy > Misurazione pubblicitaria — opporsi è facile quanto lasciarla attiva, è gratuito e non richiede mai di cancellare il tuo account (art. 18, §2 LGPD).

Garanzie. Gli utenti che sappiamo avere meno di 18 anni e i profili la cui età non è accertata non sono mai trattati sulla base del legittimo interesse. Revocare il consenso o opporsi interrompe la condivisione successiva dal prossimo avvio dell'app; gli eventi lecitamente condivisi prima restano presso Meta secondo i termini di conservazione della §4.9, e la revoca non condiziona la liceità di quanto fatto prima (art. 7(3) GDPR; art. 8 §5 LGPD).

**Apple SKAdNetwork (iOS).** Separatamente da quanto sopra, e per ogni utente di iPhone e iPad indipendentemente da qualsiasi scelta o impostazione — incluso quando il tracciamento o la misurazione pubblicitaria sono rifiutati — lo SKAdNetwork di Apple riporta alla rete pubblicitaria che ti ha mostrato un annuncio informazioni di conversione anonime e aggregate (per esempio, che si è verificata una registrazione o un acquisto entro un certo intervallo di valore). Nessun identificativo di Jynx e nessun dato personale lascia il tuo dispositivo per questo: è il meccanismo di attribuzione standard di Apple, e non possiamo identificarti attraverso di esso.

### 5.10. Email e Comunicazioni

**Email di notifica attività dell'account (servizio).** Quando ti perdi attività dell'account nell'app (un messaggio non letto, un nuovo abbinamento o like), Jynx può inviartela via email. Sono notifiche di servizio fondate sul nostro legittimo interesse a gestire la piattaforma social (tenerti informato delle tue interazioni in corso) e non contengono contenuti promozionali. Puoi disattivare ogni tipo di notifica (messaggi, abbinamenti, like) in qualsiasi momento in Impostazioni > Privacy > Comunicazioni, oppure tramite il link "Gestisci queste notifiche" in ogni email. Puoi anche opporti a questo trattamento in qualsiasi momento (art. 21 GDPR) all'indirizzo privacy@jynx.app.

**Email di riattivazione e marketing (winback).** Le email volte a riportarti su Jynx dopo un periodo di inattività, e le nostre comunicazioni di notizie e offerte, sono prospezione commerciale. Vengono inviate solo con il tuo consenso preventivo, specifico, liberamente prestato e revocabile, raccolto tramite una casella opzionale separata non pre-selezionata — mai come condizione per accettare i nostri Termini. Puoi revocarlo in qualsiasi momento in Impostazioni > Privacy > Comunicazioni o tramite il link di cancellazione dell'iscrizione in ogni email.

**Visualizzazione del tuo nome utente e della tua immagine del profilo nelle email di notifica.** Se hai interagito con un altro membro (like, abbinamento, messaggio), il tuo nome utente e la tua immagine del profilo possono comparire nelle email di notifica attività dell'account indirizzate a lui quando è inattivo. Questi elementi sono generati al momento dell'invio e non sono conservati nei nostri log delle email (solo identificativo e conteggi).

### 5.11. Posizione e Distanza degli Abbinamenti

**Cosa trattiamo.** Se scegli di condividere la tua posizione, Jynx la usa per un solo scopo: mostrare la distanza approssimativa tra te e altri giocatori ("~12 km") nella coda degli abbinamenti e, se attivi l'ordinamento per prossimità, ordinare quella coda per distanza. Trattiamo solo posizione approssimativa: il permesso che richiediamo è la posizione approssimativa / a ridotta precisione del sistema operativo, e prima che qualcosa venga memorizzato le tue coordinate vengono agganciate sui nostri server a una griglia di circa 0,02° (circa 2,2 km); la cella di posizione derivata è larga circa 11 km. Le coordinate GPS grezze non vengono mai memorizzate.

**Facoltativa e basata sul consenso.** È una funzionalità facoltativa: nulla viene raccolto a meno che tu non conceda il permesso di posizione del sistema operativo E l'interruttore della posizione in-app sia attivo. La posizione non è mai trattata in background — è usata solo mentre usi l'app. La tua posizione non è mai mostrata ad altri utenti come posizione su una mappa, mai usata per pubblicità e mai condivisa con piattaforme pubblicitarie (vedi §4.9: nessun dato di posizione è incluso in ciò che viene condiviso per attribuzione o misurazione pubblicitaria). I nostri eventi analytics non contengono coordinate, nomi di città o identificativi di cella di posizione — solo segnali anonimi di adozione e scelta di ordinamento. Il prompt di permesso del sistema operativo è il modo in cui il tuo consenso viene raccolto, e l'interruttore in-app è il modo in cui lo revochi (§7.6).

**Per quanto tempo la conserviamo.** Il record di posizione che manteniamo per il tuo account viene cancellato automaticamente dopo 45 giorni senza aggiornamenti, e viene rinfrescato ogni volta che usi la funzionalità con la condivisione attiva. La distanza approssimativa mostrata sulla tua scheda profilo è limitata all'attività: persiste solo finché la tua scheda profilo, ed è considerata assente dopo 45 giorni senza aggiornamenti.

**Il tuo controllo.** Puoi interrompere la condivisione in qualsiasi momento: spegnere l'interruttore della posizione in-app cancella immediatamente le coordinate memorizzate (il record è conservato ma svuotato delle coordinate), e revocare il permesso di posizione nelle impostazioni del dispositivo interrompe la raccolta alla fonte. Cancellare il tuo account (§7.3) cancella anche i tuoi dati di posizione.

## 6. Conservazione dei Dati

### 6.1. Periodi di Conservazione

- **Dati del Profilo:** Conservati finché il tuo account è attivo
- **Log e Analytics:** Firebase Analytics: 14 mesi (politica Firebase)
- **Indirizzi email di marketing (basati sul consenso):** Conservati finché non effettui l'opt-out o cancelli il tuo account, più un record con hash nella lista di soppressione (vedi sotto) per garantire che non ti ricontattiamo
- **Indirizzi email dei sondaggi di disinstallazione / churn:** Conservati per un massimo di 60 giorni dopo l'invio del sondaggio (o, se nessun sondaggio viene inviato, 60 giorni dopo disinstallazione/cancellazione), dopodiché l'indirizzo viene cancellato o anonimizzato in modo irreversibile. Non viene inviato più di una (1) email di sondaggio per utente
- **Riattivazione di account da poco inattivi (base del legittimo interesse LGPD, solo utenti brasiliani):** In coerenza con le indicazioni della CNIL e il test delle ragionevoli aspettative, Jynx può usare l'indirizzo email di un account da poco inattivo (senza richiesta di cancellazione) per la riattivazione fino a 3 anni dall'ultima interazione significativa, dopodiché viene cancellato o anonimizzato

### 6.2. Eliminazione dei Dati

Puoi richiedere l'eliminazione del tuo account in qualsiasi momento (vedi Sezione 7).

**Conservazione Legale:** Alcuni dati possono essere conservati più a lungo per conformarci ai nostri obblighi legali (es: report di sicurezza, transazioni finanziarie).

Quando cancelli il tuo account, eliminiamo il tuo indirizzo email dal nostro CRM di marketing e dal fornitore di servizi email. Se eserciti il diritto alla cancellazione (§7.3 / art. 17 GDPR / art. 18(VI) LGPD per i dati basati sul consenso), il tuo indirizzo email viene aggiunto a una lista di soppressione permanente con hash, così che non sia mai riutilizzato per marketing, riattivazione o sondaggi — inclusa la protezione dal reimporto tramite qualsiasi lista di terzi o acquistata. Nota: ai sensi della LGPD, la cancellazione ex art. 18(VI) si applica ai dati trattati sulla base del consenso; i dati trattati sulla base del legittimo interesse (art. 7 IX) sono invece disciplinati dal principio di limitazione delle finalità (art. 6 II e §2) e dal tuo diritto di richiedere la cessazione del trattamento (art. 18 §2).

## 7. I Tuoi Diritti (GDPR e LGPD)

A seconda di dove ti trovi, hai diritti ai sensi del GDPR (UE/SEE) e/o della LGPD brasiliana (Lei Geral de Proteção de Dados, Legge 13.709/2018).

### 7.1. Diritto di Accesso

Puoi richiedere una copia di tutti i dati che abbiamo su di te.

**Come esercitare questo diritto:** Impostazioni > Privacy > "Esporta i Miei Dati"

Il processo genera un file JSON contenente tutti i tuoi dati (profilo, messaggi, statistiche, ecc.). Il link di download è valido per 7 giorni.

### 7.2. Diritto di Rettifica

Puoi modificare le informazioni del tuo profilo in qualsiasi momento dall'applicazione (nome utente, biografia, preferenze, ecc.).

### 7.3. Diritto all'Oblio ("Diritto di Essere Dimenticato")

Puoi richiedere l'eliminazione del tuo account.

**Come esercitare questo diritto:** Impostazioni > Zona Pericolosa > "Elimina il Mio Account"

#### Processo di Eliminazione Automatizzato:

1. Conferma in due passaggi per prevenire eliminazioni accidentali
2. Anonimizzazione immediata dei tuoi dati personali (Firestore)
3. Eliminazione del tuo account Firebase Authentication (revoca automaticamente tutti i token OAuth)
4. Viene fornito un ID anonimizzato come riferimento
5. Opzione per eliminare i tuoi messaggi e contenuti generati

**Importante:** L'eliminazione è irreversibile. Alcuni dati anonimizzati possono essere conservati per scopi statistici (conforme al GDPR).

**Richieste di Eliminazione Manuale:** Per richieste di eliminazione di dati specifici (es: eliminare solo messaggi di una community specifica, eliminare immagini dallo Storage, o altri casi speciali), contatta il nostro Responsabile della Protezione dei Dati a dpo@jynx.app. Elaboreremo le richieste manuali entro 30 giorni come richiesto dal GDPR.

### 7.4. Diritto alla Portabilità dei Dati

L'esportazione dei dati (Sezione 7.1) ti permette di recuperare i tuoi dati in un formato strutturato e leggibile da macchina (JSON).

### 7.5. Diritto di Opposizione

Puoi opporti in qualsiasi momento al trattamento dei tuoi dati per finalità di marketing diretto, gratuitamente e senza doverne esporre le ragioni. Ai sensi dell'art. 21(2) GDPR questo diritto è assoluto per gli utenti UE/SEE: cesseremo tutto il trattamento di marketing al ricevimento della tua opposizione. Per gli utenti brasiliani, puoi opporti al trattamento di marketing tramite i meccanismi di opt-out indicati di seguito (art. 8 §5; art. 18 §2 LGPD).

- **Cancellazione con un clic:** ogni email di marketing include un link di cancellazione dell'iscrizione con un clic (RFC 8058 List-Unsubscribe-Post) onorato in tempo reale
- **Interruttore in-app:** Impostazioni > Privacy > Preferenze di Comunicazione
- **Email:** dpo@jynx.app

### 7.6. Diritto di Revocare il Consenso

Puoi revocare il tuo consenso per:

- **Analytics:** Impostazioni > Privacy > Disabilita "Abilita Analytics"
- **Misurazione pubblicitaria:** Impostazioni > Privacy > Misurazione pubblicitaria (vedi §5.9)
- **Posizione (distanza degli abbinamenti):** Spegni l'interruttore della posizione in-app — questo cancella le coordinate memorizzate — oppure revoca il permesso di posizione nelle impostazioni del dispositivo (vedi §5.11)
- **Notifiche Push:** Impostazioni del dispositivo
- **Comunicazioni di Marketing:** Newsletter, aggiornamenti sul prodotto, riattivazione e sondaggi di disinstallazione/churn — revocabili tramite cancellazione con un clic, l'interruttore delle preferenze di comunicazione in-app, oppure dpo@jynx.app, senza terminare il tuo account

**Nota:** I token OAuth (Google, Apple) vengono automaticamente revocati quando elimini il tuo account (Sezione 7.3).

La revoca non condiziona la liceità del trattamento effettuato prima della revoca (art. 7(3) GDPR; art. 8 §5 LGPD), e revocare il consenso non richiede mai di cancellare il tuo account.

### 7.7. Ulteriori Diritti LGPD (Utenti Brasiliani)

Oltre ai diritti sopra elencati, gli interessati situati in Brasile hanno i seguenti diritti ai sensi dell'art. 18 LGPD: conferma dell'esistenza del trattamento; accesso ai dati; correzione dei dati incompleti, inesatti o non aggiornati; anonimizzazione, blocco o cancellazione dei dati non necessari o eccessivi (l'art. 18(VI) si applica ai dati trattati sulla base del consenso); portabilità verso un altro fornitore di servizi o prodotti, su richiesta; cancellazione dei dati personali trattati con consenso; e informazioni sulla possibilità di negare il consenso e sulle conseguenze di tale rifiuto.

Puoi esercitare questi diritti tramite Impostazioni > Privacy o contattando l'encarregado all'indirizzo dpo@jynx.app. Puoi inoltre presentare reclamo all'autorità brasiliana per la protezione dei dati — l'Autoridade Nacional de Proteção de Dados (ANPD) — su https://www.gov.br/anpd.

## 8. Sicurezza dei Dati

Implementiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati:

- **Crittografia:** Comunicazione sicura via HTTPS
- **Regole di Sicurezza Firebase:** Controllo accessi rigoroso ai dati Firestore
- **Autenticazione:** Gestione sessione sicura via Firebase Auth
- **Validazione Input:** Prevenzione iniezione XSS via SecureTextInput
- **Limitazione Frequenza:** Protezione contro abusi (messaggi spam, azioni automatizzate)
- **Moderazione:** Sistema di segnalazione contenuti e moderazione
- **Voce in tempo reale:** I media delle stanze vocali sono cifrati in transito con WebRTC DTLS-SRTP, lo stesso standard usato dalle principali app vocali; la segnalazione tra l'app e i nostri server avviene su HTTPS/TLS.

Nessun sistema è sicuro al 100%. In caso di violazione di dati personali, notificheremo all'autorità di controllo competente senza indebito ritardo e, ove fattibile, entro 72 ore dal momento in cui veniamo a conoscenza di una violazione suscettibile di presentare un rischio per i tuoi diritti (art. 33 GDPR), e comunicheremo la violazione agli utenti coinvolti senza indebito ritardo quando sia suscettibile di presentare un rischio elevato per te (art. 34 GDPR). Per gli interessati in Brasile, comunicheremo inoltre gli incidenti di sicurezza rilevanti all'ANPD e a te entro il termine stabilito dall'autorità (art. 48 LGPD; attualmente 3 giorni lavorativi ai sensi della Risoluzione CD/ANPD nº 15/2024).

## 9. Trasferimenti Internazionali di Dati

I tuoi dati possono essere trasferiti e archiviati su server situati fuori dall'Unione Europea, inclusi:

- **Google Cloud / Firebase:** Infrastruttura globale (incluso Google Analytics sul sito, vedi §10), ai sensi delle clausole contrattuali standard GDPR e di garanzie equivalenti
- **Amazon Web Services (moderazione delle immagini):** Il trattamento di moderazione delle immagini descritto nella §4.8 gira nella regione di San Paolo di AWS (Brasile); i trasferimenti dall'UE/SEE si basano sull'accordo di trattamento dati di AWS che incorpora le clausole contrattuali standard della Commissione Europea, insieme alle garanzie generali seguenti. L'immagine è inoltrata ad AWS attraverso l'infrastruttura Google Cloud di Jynx (il segmento Google Cloud / Firebase sopra descritto)
- **Sentry:** Server negli Stati Uniti; i trasferimenti dall'UE/SEE si basano sull'EU-US Data Privacy Framework (in vigore da luglio 2023, subentrato al Privacy Shield disattivato) per le entità Sentry autocertificate sotto il DPF, oppure su clausole contrattuali standard dove il DPF non si applica
- **Fornitore di Servizi Email (ESP):** Usato per inviare le comunicazioni di marketing, riattivazione e sondaggi descritte nella §5.6. L'ESP è indicato nella §4.4 e agisce come responsabile del trattamento in forza di un Accordo di Trattamento Dati firmato
- **LiveKit (voce in tempo reale, e condivisione dello schermo quando disponibile):** LiveKit Cloud è il nostro responsabile del trattamento per i media vocali in tempo reale (e, quando la funzionalità è disponibile, per la condivisione dello schermo) in forza di un Accordo di Trattamento Dati firmato (§4.5). LiveKit Cloud instrada i media a livello globale: le sessioni sono servite dall'infrastruttura globale di LiveKit senza ancoraggio a una regione specifica. L'audio delle stanze vocali (e il video della condivisione dello schermo quando disponibile) è instradato in tempo reale e non è registrato, memorizzato o persistito da Jynx né da LiveKit; LiveKit conserva solo i metadati operativi di sessione descritti nella §4.5. I trasferimenti di dati personali verso LiveKit si basano sul Data Processing Addendum di LiveKit, che incorpora i termini GDPR e le clausole contrattuali standard della Commissione Europea per i trasferimenti transfrontalieri, insieme alle garanzie generali seguenti, che si applicano a LiveKit come ai nostri altri responsabili del trattamento.
- **Meta (attribuzione pubblicitaria e misurazione pubblicitaria):** La condivisione descritta nella §4.9 e §5.9 raggiunge Meta Platforms Ireland Ltd. o Meta Platforms, Inc., che la tratta negli Stati Uniti e in altri paesi. I trasferimenti internazionali di dati personali effettuati in relazione agli strumenti di Meta sono soggetti alle garanzie contrattuali e ai meccanismi di trasferimento internazionale applicabili. Jynx sta verificando la loro conformità ai requisiti dell'articolo 33 della LGPD e ai regolamenti dell'ANPD.

**Garanzie (GDPR, UE/SEE).** Tutti i trasferimenti dall'UE/SEE sono coperti da una decisione di adeguatezza, dall'EU-US Data Privacy Framework o da clausole contrattuali standard, insieme a misure supplementari ove richiesto.

**Garanzie (LGPD, Brasile).** I trasferimenti dei dati personali degli utenti brasiliani sono disciplinati dall'art. 33 LGPD:

- **Verso Jynx Group in Francia (titolare):** Lecito ai sensi dell'art. 33(I) LGPD in virtù della Risoluzione CD/ANPD nº 32/2026 (in vigore dal 26 gennaio 2026), che riconosce che l'Unione Europea — inclusa la Francia — garantisce un livello adeguato di protezione. Nessun ulteriore meccanismo di trasferimento è richiesto per questo segmento. (Questa decisione di adeguatezza è soggetta a rivalutazione da parte dell'ANPD entro quattro anni; se sospesa, Jynx implementerà un meccanismo alternativo ex art. 33, come le clausole contrattuali standard dell'ANPD.)
- **Verso Brevo in Francia (ESP email, responsabile):** Lecito ai sensi dell'art. 33(I) LGPD in virtù della stessa Risoluzione CD/ANPD nº 32/2026 (in vigore dal 26 gennaio 2026), che riconosce che l'Unione Europea — inclusa la Francia — garantisce un livello adeguato di protezione. Nessun ulteriore meccanismo di trasferimento è richiesto per questo segmento. (Soggetto alla stessa rivalutazione ANPD descritta sopra; se la decisione di adeguatezza è sospesa, Jynx implementerà un meccanismo alternativo ex art. 33, come le clausole contrattuali standard dell'ANPD con Brevo.)
- **Verso i fornitori di tecnologie per la sicurezza dei minori nell'UE (confronto degli hash, responsabili):** Coperto dalla stessa decisione di adeguatezza UE della Risoluzione CD/ANPD nº 32/2026 dei segmenti sopra descritti — i fornitori ricevono solo hash irreversibili ed eseguono il confronto nell'area UE (§4.7)
- **Verso AWS in Brasile (moderazione delle immagini, responsabile):** Il passaggio AWS Rekognition resta nel paese — gira nella regione di San Paolo di AWS (§4.8). L'immagine è prima inoltrata attraverso l'infrastruttura Google Cloud di Jynx, che è coperta dai termini generali di trasferimento Google Cloud / Firebase sopra descritti

**Trasparenza (Risoluzione CD/ANPD nº 19/2024).** Le informazioni richieste dall'articolo 17, §2 della Risoluzione CD/ANPD nº 19/2024 sono consolidate in questa Informativa: la forma, la durata e la finalità specifica di ogni trasferimento internazionale e i paesi di destinazione (questa sezione e le sezioni che cita); l'identificazione e i dati di contatto del titolare (§1); l'uso condiviso dei dati e la sua finalità (§4); le responsabilità degli agenti di trattamento e le misure di sicurezza adottate (§4 e §8); e i tuoi diritti e i mezzi per esercitarli, inclusi un canale facilmente accessibile e il diritto di petizione all'ANPD (§7 e §12). Il testo integrale delle clausole contrattuali usate per effettuare questi trasferimenti internazionali è messo a tua disposizione, su richiesta, dal nostro responsabile della protezione dei dati (dpo@jynx.app), entro 15 giorni.

Nota storica: il periodo di grazia di un anno per adeguare i contratti esistenti alle SCC dell'ANPD è terminato il 23 agosto 2025; le nuove relazioni con responsabili del trattamento, come l'ESP, eseguono le SCC all'onboarding.

## 10. Cookie e Tecnologie Simili

La nostra applicazione mobile non utilizza cookie nel senso tradizionale, ma utilizza:

- **Token di Autenticazione:** Archiviati localmente in modo sicuro
- **Cache Locale:** Per migliorare le performance (dati profilo, messaggi recenti)

**Sito web.** Il sito di Jynx (jynx.app) usa Google Analytics 4 (fornito da Google) con Consent Mode v2 per capire come viene usato il sito. L'archiviazione degli analytics è negata per impostazione predefinita: finché non accetti il banner dei cookie, Google Analytics gira senza cookie o archiviazione locale e Google riceve solo segnali senza cookie e senza identificativi; se accetti, la misurazione completa viene attivata. La tua scelta — accetta o rifiuta — è memorizzata localmente sul tuo dispositivo (localStorage del browser, chiave "jynx-analytics-consent"). Cancellare l'archiviazione del browser per jynx.app fa riapparire il banner, così puoi cambiare la tua scelta. Google agisce come destinatario dei dati analytics risultanti (vedi §9); vedi §4 per i nostri altri responsabili del trattamento e §7 per i tuoi diritti.

**Link di invito.** Quando apri un link di invito (jynx.app/invite/…) nel browser e tocchi il pulsante di download dell'App Store, il sito scrive quel link di invito negli appunti del tuo dispositivo, sostituendone il contenuto precedente. È una tecnica standard per attribuire le installazioni dell'app su iOS (che non ha un meccanismo di install referrer): permette all'app Jynx, al primo avvio, di proporre di entrare con l'invito della persona che ti ha mandato il link. Il sito non legge mai i tuoi appunti — vi scrive solo questo link — e l'app lo legge una sola volta, dopo aver chiesto il tuo consenso esplicito. Nessun altro contenuto degli appunti viene accesso o raccolto. Se preferisci non condividerlo, basta rifiutare il prompt di incolla ed entrare senza invito.

**Referenze e campagne creator.** Quando entri su Jynx con un codice invito — da un link, un codice QR o inserito manualmente — registriamo quel codice insieme al tuo account, così possiamo attribuire l'invito alla persona o alla campagna che l'ha condiviso, applicare i benefici associati e rilevare le iscrizioni fraudolente. Questo trattamento si fonda sui nostri interessi legittimi (vedi §13) ed è soggetto ai nostri controlli anti-frode; nulla cambia per te, perché gli stessi dati vengono raccolti qualunque tipo di codice invito tu usi. Alcuni codici invito appartengono anche a campagne di attribuzione creator: se il codice che hai usato fa parte di una campagna di questo tipo, può inoltre accreditare quella campagna. I registri dei pagamenti delle campagne creator sono conservati in forma pseudonimizzata.

**Condivisione dello schermo (quando disponibile).** Quando la funzionalità è disponibile, puoi condividere lo schermo del tuo dispositivo in una stanza vocale. La condivisione inizia solo dopo che il permesso di acquisizione dello schermo del sistema operativo è stato concesso ed è stata data una conferma esplicita in-app. Tutto ciò che è visibile sul tuo schermo — notifiche incluse — viene trasmesso in diretta agli altri partecipanti della stanza, e sei tu il responsabile di ciò che condividi. Il video condiviso è una traccia media in diretta instradata come l'audio vocale attraverso la SFU di LiveKit (§4.5, §9): non è registrato o memorizzato da Jynx né da LiveKit, e si interrompe quando termini la condivisione.

## 11. Modifiche a Questa Informativa

Potremmo aggiornare questa informativa sulla privacy. In caso di modifiche importanti, ti notificheremo:

- Tramite notifica nell'applicazione
- Via email all'indirizzo associato al tuo account

## 12. Contattaci

Per qualsiasi domanda su questa informativa sulla privacy o per esercitare i tuoi diritti:

- **Email:** dpo@jynx.app

**Autorità di Vigilanza:** Se ritieni che i tuoi diritti non siano stati rispettati, puoi presentare reclamo:

- **Utenti UE/SEE:** presso la CNIL (Commission Nationale de l'Informatique et des Libertés), Francia — https://www.cnil.fr
- **Utenti brasiliani:** presso l'ANPD (Autoridade Nacional de Proteção de Dados), Brasile — https://www.gov.br/anpd

Presentare reclamo presso un'autorità di controllo non pregiudica il tuo diritto di ricorrere agli altri rimedi giudiziari a tua disposizione, incluse le tutele dei consumatori imperative applicabili nella tua giurisdizione (es. il Codice di Difesa del Consumatore brasiliano, Legge 8.078/90).

## 13. Consenso

Trattiamo i tuoi dati personali solo quando abbiamo una base giuridica. Le basi giuridiche su cui ci fondiamo, e dove ciascuna è descritta in questa Informativa, sono:

- Esecuzione di un contratto / fornitura del Servizio (art. 6(1)(b) GDPR; art. 7, V LGPD) — account, abbinamenti e messaggistica (§5.1–5.3)
- Interessi legittimi (art. 6(1)(f) GDPR; art. 7, IX e art. 10 LGPD) — sicurezza, prevenzione delle frodi, miglioramento del servizio e (per gli utenti brasiliani) comunicazioni di marketing/riattivazione/sondaggi verso utenti esistenti o da poco inattivi come descritto nella §5.6, ciascuna supportata da una valutazione di bilanciamento documentata
- Obbligo legale (art. 6(1)(c) GDPR; art. 7, II LGPD) — conservazione per finalità legali (§6)
- Obbligo legale e interessi legittimi (artt. 6(1)(c) e 6(1)(f) GDPR; art. 7, II e IX LGPD) — rilevamento di contenuti illegali e in violazione delle policy, inclusa l'analisi delle immagini per la sicurezza dei minori descritta nella §5.8 e il trattamento di moderazione delle immagini della §4.8, prevenzione di abusi ed elusione dei ban (§5.7), e adempiamento ai doveri di segnalazione legali. Per l'analisi delle immagini condivise nei messaggi diretti, Jynx si fonda inoltre sul rilevamento volontario dell'abuso sessuale su minori online consentito dal Regolamento (UE) 2021/1232 (la deroga ePrivacy, attualmente in vigore).
- Consenso (art. 6(1)(a) GDPR; art. 7, I e art. 8 LGPD) — analytics se li hai attivati, notifiche push e (per gli utenti UE/SEE e per le prospezioni/invii a freddo/cross-sell brasiliani) comunicazioni di marketing come da §5.6
- Misurazione pubblicitaria (§5.9): il tuo consenso (art. 6(1)(a) GDPR; art. 7, I e art. 8 LGPD) se l'hai attivata; su Android, in alternativa il nostro legittimo interesse (art. 7, IX e art. 10 LGPD) per gli utenti a cui l'interruttore è mostrato attivo per impostazione predefinita, con il tuo diritto di opposizione in qualsiasi momento
- Posizione approssimativa per la funzionalità di distanza degli abbinamenti (§5.11): il tuo consenso (art. 6(1)(a) GDPR; art. 7, I e art. 8 LGPD), raccolto tramite il permesso di posizione del sistema operativo insieme all'interruttore della posizione in-app; puoi revocarlo in qualsiasi momento (§7.6) — spegnere l'interruttore cancella le coordinate memorizzate
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Il consenso deve essere specifico e informato.** Quando ci fondiamo sul tuo consenso, questo è prestato con un atto positivo chiaro, riferito a finalità specifiche, ed è raccolto separatamente dall'accettazione di questi termini (art. 8 §1 LGPD — cláusula destacada). Le autorizzazioni generiche o aggregate sono nulle ai sensi dell'art. 8 §4 LGPD e invalide ai sensi dell'art. 4(11) e dell'art. 7 GDPR. Usare Jynx non costituisce di per sé consenso al marketing. L'onere della prova di un consenso valido grava su Jynx (art. 8 §2 LGPD; art. 7(1) GDPR); registriamo quindi data, versione del modulo, lingua e ambito di ogni consenso raccolto.

**Revoca.** Puoi revocare qualsiasi consenso in qualsiasi momento, con una procedura semplice quanto quella per darlo e che non richiede di cancellare il tuo account (art. 8 §5 LGPD; art. 7(3) GDPR) — vedi §7.5 e §7.6. La revoca non condiziona la liceità del trattamento effettuato prima della revoca. Cancellare il tuo account (§7.3) resta disponibile in qualsiasi momento, ma non è il meccanismo per revocare un consenso specifico.
