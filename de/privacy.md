---
title: "Datenschutzerklärung"
description: "Erfahre, wie Jynx deine Privatsphäre schützt und deine Daten handhabt. Unsere transparente Datenschutzerklärung beschreibt unsere Praktiken und deine Rechte."
canonical: "https://jynx.app/de/privacy.html"
locale: "de"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Datenschutzerklärung

Zuletzt aktualisiert: 17. November 2026

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

## 1. Einleitung

Jynx ("wir", "unser", "die Anwendung") ist eine Social-Gaming-Plattform, die es Spielern ermöglicht, sich zu verbinden, Teams zu bilden und zusammen zu spielen.

### Rechtliche Informationen:

- **Juristische Person:** Jynx Group (Société par Actions Simplifiée, SIREN 991443896, eingetragen in Nantes, Frankreich)
- **Datenschutzbeauftragter / Encarregado:** dpo@jynx.app
- **Rechtsprechung EU / EWR:** Frankreich, Europäische Union — diese Datenschutzerklärung entspricht der Verordnung (EU) 2016/679 (DSGVO) und der Richtlinie 2002/58/EG (ePrivacy), wie sie in Frankreich umgesetzt sind.
- **Brasilianische Rechtsprechung:** Diese Datenschutzerklärung entspricht außerdem dem brasilianischen Gesetz nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), das gemäß Art. 3 der LGPD auf die Verarbeitung personenbezogener Daten von Betroffenen mit Sitz in Brasilien durch Jynx anwendbar ist, unabhängig davon, dass Jynx keinen Standort in Brasilien hat.
- **Veröffentlichung (LCEN):** Directeur de la publication: Antoine Haie. Diese Website (jynx.app) wird von GitHub Pages gehostet und über das Cloudflare Content-Delivery-Netzwerk ausgeliefert.

Im Sinne der LGPD ist Jynx Group der Verantwortliche (controlador) für deine personenbezogenen Daten. Unser Data Protection Officer fungiert als encarregado (DPO) und ist unter dpo@jynx.app für jede Anfrage im Zusammenhang mit der LGPD erreichbar. Obwohl Jynx gemäß der ANPD-Resolution CD/ANPD nº 2/2022 als pequeno agente de tratamento de dados pessoais (kleiner Verarbeitungsagent) eingestuft wird — was Jynx von der verpflichtenden Benennung eines encarregado befreit — unterhält Jynx diesen veröffentlichten Kommunikationskanal freiwillig.

Diese Datenschutzerklärung beschreibt, wie wir deine personenbezogenen Daten erheben, verwenden, teilen und schützen, wenn du unsere Anwendung nutzt.

## 2. Mindestalter und Verifizierung

Unsere Anwendung ist Nutzern ab 18 Jahren vorbehalten.

Bei der Erstellung deines Kontos bitten wir dich, dein Geburtsdatum anzugeben. Wenn du unter 18 bist, kannst du kein Konto erstellen oder unsere Dienste nutzen.

Kein Marketing an Minderjährige. Jynx ist auf Nutzer ab 18 Jahren beschränkt und setzt ein automatisches Alters-Gate ein. Identifizieren wir nachträglich, dass ein Nutzer unter 18 ist (LGPD Art. 14; DSGVO Art. 8), beenden wir das Konto sofort, schließen den Nutzer von allen Marketing-, Re-Engagement- und Umfrage-Kommunikationen aus und löschen die zugehörigen Marketingdaten. Wir erheben niemals wissentlich eine Marketing-Einwilligung von einer minderjährigen Person.

## 3. Erhobene Daten

### 3.1. Registrierungs- und Profildaten

Wir erheben die folgenden Informationen bei der Erstellung und Verwaltung deines Kontos:

#### Authentifizierungsinformationen:

- E-Mail (für E-Mail/Passwort-Konten)
- Benutzername/Nickname
- Profilbild (optional)
- Social-Login-Identifikatoren (Google, Apple), sofern du diese Methoden nutzt
- Discord-Identifikatoren (deine Discord-Nutzer-ID), wenn du dein Discord-Konto für die Discord-Integration verbindest — die Verbindung nutzt Discords Identify-only-OAuth und ist keine Anmeldemethode; du kannst sie jederzeit trennen
- Gast-Browsing (sofern verfügbar): Du kannst die öffentlichen Bereiche von Jynx erkunden, ohne ein Konto zu erstellen; im Gastmodus verarbeiten wir nur eine lokal gespeicherte Gast-Kennung und die technischen Daten aus §3.3, die für den Betrieb der App nötig sind — es wird kein Profil erstellt und keine Kontodaten gespeichert. Um zu matchen, zu chatten oder Communities beizutreten, musst du ein Konto erstellen

#### Profilinformationen:

- Geburtsdatum (für Altersverifizierung)
- Land und Zeitzone
- Gesprochene Sprachen
- Biografie (optional)
- Gaming-Präferenzen und Verfügbarkeit
- Einzigartiger Handle (automatisch generiert für private Freundessuche)

### 3.2. Gaming-Daten

Um dir zu helfen, kompatible Teamkollegen zu finden, erheben wir:

#### Spielprofile:

- Spiele, die du spielst
- Level, Ränge und Spielstatistiken
- Lieblingschampions/-charaktere
- Spielstil

#### Riot-Games-API-Integration:

Wir rufen von der Riot Games API ab (mit deiner Zustimmung):

- Beschwörername und Riot ID
- Rang und Match-Verlauf (League of Legends, Valorant, etc.)
- Champion-Statistiken
- Kürzlicher Match-Verlauf

**Erhebungsgrund:** Anzeige deines Spielerprofils und Verbesserung des Matchings mit anderen Spielern.

### 3.3. Nutzungs- und technische Daten

Wir erheben automatisch bestimmte technische Daten:

#### Analytics und Performance:

- **Firebase Performance Monitoring:** App-Startzeit, Interface-Flüssigkeit
- **Sentry:** Fehler- und Performance-Berichte (mit Anonymisierung persönlicher Daten)
- **Firebase Crashlytics:** Absturzberichte

#### Geräteinformationen:

- Gerätetyp und Modell
- Betriebssystemversion
- Anwendungsversion
- Gerätekennungen und Signale zur Geräteintegrität (siehe §5.7)

#### Nutzerverhalten:

- Besuchte Bildschirme und verwendete Funktionen
- In der Anwendung verbrachte Zeit
- Interface-Interaktionen

Du kannst die Analytics-Datenerhebung in Einstellungen > Datenschutz > "Analytics aktivieren" deaktivieren.

Die Werbemessung mit Meta ist von Analytics getrennt und hat einen eigenen Schalter: siehe §5.9.

### 3.4. Kommunikationsdaten

- **Nachrichten:** Nachrichten in Community-Chats, private Nachrichten zwischen Nutzern, Gesprächsverlauf
- **Benachrichtigungen:** FCM-Token (Firebase Cloud Messaging) für Push-Benachrichtigungen

### 3.5. Nutzergenerierte Inhalte

- Hochgeladene Fotos (Profilbilder, zusätzliche Fotos) und in Direktnachrichten geteilte Bilder
- Sicherheits- und Moderationsberichte
- Kosmetische Präferenzen (Avatare, Abzeichen)

### 3.6. Audiodaten der Sprachräume

Jynx bietet Sprachräume in Echtzeit, in denen du mit den anderen Teilnehmern sprechen kannst, während du spielst. Audiodaten des Sprachraums werden erst über dein Mikrofon erfasst, nachdem du die Mikrofonberechtigung des Betriebssystems erteilt und explizit einem Raum beigetreten bist; vor beiden dieser Schritte werden keine Audiodaten erfasst.

Jynx aktiviert die Funktionen für Aufzeichnung, Transkription, Agent Insights und Egress von LiveKit nicht. Audiodaten des Sprachraums werden in Echtzeit über die SFU (Selective Forwarding Unit) von LiveKit weitergeleitet und von Jynx oder LiveKit weder aufgezeichnet noch gespeichert oder vorgehalten.

Wenn du in einem Sprachraum sprichst, werden deine Audiodaten in Echtzeit an die anderen Teilnehmer dieses Raums übertragen — ähnlich wie die Sprachfunktion in anderen Sprachchat-Apps.

Die Audiodaten des Sprachraums werden mit deiner Einwilligung verarbeitet: Du erteilst die Mikrofonberechtigung und trittst explizit einem Raum bei, bevor Audiodaten erfasst werden. Du kannst deine Einwilligung jederzeit widerrufen, indem du den Raum verlässt oder die Mikrofonberechtigung in den Einstellungen deines Geräts entziehst.

## 4. Drittanbieter-Dienste und Datenaustausch

### 4.1. Firebase-Dienste (Google)

Wir verwenden die folgenden Firebase-Dienste, alle DSGVO-konform:

- **Firebase Authentication:** Sichere Benutzerkontenverwaltung
- **Cloud Firestore:** Speicherung deiner Profil- und Spieldaten
- **Firebase Storage:** Hosting deiner Profilbilder
- **Cloud Functions:** Sichere Backend-Logik-Ausführung
- **Firebase Cloud Messaging:** Push-Benachrichtigungen
- **Firebase App Check:** Schutz vor Missbrauch und Bots
- **Firebase Performance Monitoring:** App-Performance-Überwachung
- **Firebase Crashlytics:** Absturzberichte

**Firebase Datenschutzerklärung:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Fehlerüberwachung)

Wir verwenden Sentry für Fehler- und Performance-Tracking. Erhobene Daten umfassen:

- Fehler-Traces
- Technischer Kontext (OS, App-Version)

**Sentry Datenschutzerklärung:** https://sentry.io/privacy/

### 4.3. Riot Games API

Wenn du dein Riot Games-Konto verknüpfst, rufen wir deine Spielstatistiken über die offizielle Riot Games API ab. Diese Daten werden nur verwendet, um dein Profil anzuzeigen und das Matching zu verbessern.

**Riot Games Datenschutzerklärung:** https://www.riotgames.com/en/privacy-notice

### 4.4. E-Mail-Serviceanbieter (Marketing- und Umfrage-Kommunikation)

Für den Versand der in §5.6 beschriebenen Marketing-, Re-Engagement- und Deinstallations-/Churn-Umfrage-E-Mails nutzt Jynx einen dritten E-Mail-Serviceanbieter (ESP), der als Auftragsverarbeiter agiert (DSGVO Art. 28; LGPD Art. 39 — operador). Der ESP verarbeitet deine E-Mail-Adresse und minimale Zustelldaten (z. B. Sende-/Bounce-Status) ausschließlich auf Grundlage der dokumentierten Weisungen von Jynx und unter einem unterzeichneten Auftragsverarbeitungsvertrag.

- **Identität, Rolle und Standort des ESP:** Brevo (Brevo SAS, Paris, Frankreich) — unser E-Mail-Serviceanbieter und Auftragsverarbeiter auf Grundlage eines unterzeichneten Auftragsverarbeitungsvertrags. Brevo-Datenschutzerklärung: https://www.brevo.com/legal/privacypolicy/
- **Subauftragsverarbeiter:** Brevos aktuelle Liste der Subauftragsverarbeiter ist in seinem Auftragsverarbeitungsvertrag (Nutzungsbedingungen) veröffentlicht: https://www.brevo.com/legal/termsofuse/
- **Grundlage für internationale Übermittlungen:** Siehe §9. Brevo hat seinen Hauptsitz in Frankreich (EU). Übermittlungen an Brevo profitieren daher vom EU-Schutzregime gemäß DSGVO und, für brasilianische Nutzer, vom ANPD-Angemessenheitsbeschluss für die EU (Resolution nº 32/2026) — keine SCCs oder zusätzlichen Mechanismen erforderlich.

Wir verkaufen deine personenbezogenen Daten nicht. Tracking-Pixel oder versteckte Analytics sind ohne eine separate, in §5.6 offengelegte Rechtsgrundlage nicht in Marketing-E-Mails eingebettet.

### 4.5. LiveKit Cloud (Echtzeit-Sprache)

Jynx nutzt LiveKit Cloud als Auftragsverarbeiter (DSGVO Art. 28; LGPD Art. 39 — operador) auf Grundlage einer unterzeichneten Vereinbarung zur Auftragsverarbeitung, um die Echtzeit-Medieninfrastruktur zu betreiben, die die Audiodaten des Sprachraums zwischen den Teilnehmern weiterleitet. LiveKit betreibt die SFU (Selective Forwarding Unit), die den Audiostream jedes Teilnehmers in Echtzeit an die anderen weiterleitet.

Jynx aktiviert die Funktionen für Aufzeichnung, Transkription, Agent Insights und Egress von LiveKit nicht. Audiodaten des Sprachraums werden in Echtzeit über die SFU (Selective Forwarding Unit) von LiveKit weitergeleitet und von Jynx oder LiveKit weder aufgezeichnet noch gespeichert oder vorgehalten.

LiveKit speichert jedoch betriebliche Sitzungsmetadaten — etwa Teilnehmeridentitäten, Raumkennungen, Verbindungszeiten und Qualitätsmetriken — zu Abrechnungs-, Missbrauchspräventions- und Betriebszwecken gemäß seiner Datenverarbeitungs-Zusatzvereinbarung. Diese Metadaten werden nicht verwendet, um dich außerhalb der Plattform zu identifizieren oder für Werbung.

### 4.6. App Store / Google Play (In-App-Käufe und Abonnements)

Jynx+-Abonnements und Founder Packs werden in der App über Apples App Store und Google Play verkauft, die als merchant of record für diese Käufe auftreten (siehe die Nutzungsbedingungen, Abschnitt 8). Zahlungsinstrumentdaten (z. B. Kartendaten) werden ausschließlich von Apple/Google unter deren jeweiligen Datenschutzrichtlinien erhoben und verarbeitet; Jynx erhebt, empfängt oder speichert keinerlei Zahlungsinstrumentdaten.

Über unseren Abrechnungsanbieter RevenueCat (einen Auftragsverarbeiter auf Grundlage eines unterzeichneten Auftragsverarbeitungsvertrags; DSGVO Art. 28; LGPD Art. 39 — operador) erhält Jynx nur die Informationen, die nötig sind, um zu liefern, was du gekauft hast: deinen Abo- und Berechtigungsstatus (z. B. ob Jynx+ aktiv ist und welches Verlängerungsdatum es hat), das gekaufte Founder-Pack-Level und Transaktionskennungen. Diese Daten werden so lange aufbewahrt, wie es zur Bereitstellung des Dienstes und zur Erfüllung von Buchhaltungs- und Dokumentationspflichten nötig ist (§6), und ausschließlich verwendet, um deine Berechtigungen zu gewähren und aufrechtzuerhalten sowie Betrug zu verhindern. RevenueCat ist in den Vereinigten Staaten ansässig; Übermittlungen personenbezogener Daten an RevenueCat stützen sich auf das EU-US Data Privacy Framework (für RevenueCat-Entitäten, die sich unter dem DPF zertifiziert haben) oder auf Standardvertragsklauseln, wo das DPF nicht anwendbar ist. Der anwendbare Übermittlungsmechanismus für Daten brasilianischer Nutzer wird in unserem Verarbeitungsverzeichnis bestätigt (siehe §9).

- Apple-Datenschutzerklärung: https://www.apple.com/legal/privacy/
- Google-Datenschutzerklärung: https://policies.google.com/privacy
- RevenueCat-Datenschutzerklärung: https://www.revenuecat.com/privacy

### 4.7. Spezialisierte Anbieter von Kinderschutz-Technologie

Zur Unterstützung der Erkennung bekannten sexuellen Kindesmissbrauchsmaterials (siehe §5.8) arbeitet Jynx mit spezialisierten Anbietern von Kinderschutz-Technologie zusammen, die als Auftragsverarbeiter auftreten (DSGVO Art. 28; LGPD Art. 39 — operador). Diese Anbieter erhalten ausschließlich irreversible Hashes, die aus Bildern abgeleitet werden — niemals die Bilder selbst — und führen den Hash-Abgleich in der EU-Region durch, allein zur Kinderschutz-Erkennung auf Grundlage der dokumentierten Weisungen von Jynx. Die Ableitung des Hashs aus dem Bild erfolgt innerhalb der eigenen Google-Cloud-Infrastruktur von Jynx (siehe §9).

### 4.8. Cloud-Anbieter für Bildmoderation (AWS)

Um die Plattform sicher zu halten, werden Profilbilder und Galeriefotos von einem automatisierten Bildklassifizierungsdienst geprüft — Amazon Rekognition, bereitgestellt von Amazon Web Services (AWS), als Auftragsverarbeiter (DSGVO Art. 28; LGPD Art. 39 — operador). Zu diesem Zweck wird das Bild an AWS übertragen und per Machine Learning auf unangemessene Inhalte analysiert (zum Beispiel Nacktheit oder explizites Material); das Ergebnis ist ein maschinell erzeugtes Label mit Konfidenzwert, das in unserem Moderationsprozess verarbeitet wird (siehe die Child-Safety-Policy). Diese Verarbeitung dient ausschließlich der Inhaltsmoderation und Sicherheit — niemals der Profilbildung, Werbung oder einem anderen Zweck. AWS verarbeitet diese Daten in der für den Dienst konfigurierten AWS-Region (derzeit São Paulo, Brasilien); die Übermittlungsgarantien aus §9 gelten. Wie beim übrigen Dienst wird das Bild vor der Weiterleitung an AWS innerhalb der eigenen Google-Cloud-Infrastruktur von Jynx verarbeitet (siehe §9).

### 4.9. Werbe-Attribution (Meta, Apple ATT, Google Play Install Referrer)

Um zu messen, ob unsere App-Installationen aus Marketing resultieren, nutzen wir Werbe- und Attributions-Technologien, wo erforderlich an deine Einwilligung gebunden: das Meta-(Facebook-)App-Events-SDK (Meta Platforms Ireland) und die Google Play Install Referrer API. Auf Apple-Geräten wird das Meta-SDK erst initialisiert, nachdem du die App-Tracking-Transparenz-Berechtigung (ATT) erteilt hast; ohne diese Erteilung wird keine Werbe-Kennung (IDFA) erhoben und das SDK nicht initialisiert. Auf Android verrät uns die Google Play Install Referrer API, ob deine Installation aus einem Store-Eintrag oder einem Kampagnen-Link stammt, und die Werbe-Kennung (GAID) wird gemäß den Werbe-ID-Einstellungen deines Geräts verwendet. Die an Meta gesendeten Events beschränken sich auf App-Aktivierung und App-Event-Metadaten (einschließlich, sofern du angemeldet bist, deiner App-Nutzerkennung, die beim Logout aus dem SDK gelöscht wird), verarbeitet nach Weisung von Jynx für Attribution und Kampagnenmessung.

Meta Platforms Ireland verarbeitet diese Daten als unser Auftragsverarbeiter für den oben genannten Attributionszweck; Meta Platforms, Inc. kann zusätzlich als eigenständiger Verantwortlicher für seine eigenen legitimen Zwecke nach seinen eigenen Bedingungen handeln (Metas Datenverarbeitungsbedingungen und seine Datenschutzerklärung unter https://www.facebook.com/privacy/policy). Übermittlungen in die Vereinigten Staaten stützen sich auf das EU-US Data Privacy Framework für selbst zertifizierte Meta-Entitäten oder auf Standardvertragsklauseln (§9). Du kannst die ATT-Berechtigung ablehnen oder widerrufen oder deine Werbe-ID jederzeit in den Geräteeinstellungen zurücksetzen; eine Ablehnung beeinflusst deine Nutzung von Jynx nicht.

**Werbemessung.** Über die Installations-Attribution hinaus messen wir auch Conversions: Die mit Meta geteilten Events umfassen Registrierung (Sign-up), abgeschlossenes Onboarding und Käufe — mit Kaufbetrag und Währung. Wo du eingewilligt hast, kann zusätzlich eine gehashte (unumkehrbar verschlüsselte) E-Mail-Adresse oder Telefonnummer geteilt werden, um die Match-Qualität zu verbessern; bei Nutzern, die auf unser berechtigtes Interesse (unten) gemessen werden, passiert das nie. Das Registrierungs-Event kann außerdem dein selbst angegebenes Geschlecht enthalten. Nichts anderes wird geteilt — keine Nachrichten, Profilfelder, Spiele, Communities, Kontakte, Standortdaten oder Fotos — und deine Daten werden niemals verkauft. Die Rechtsgrundlagen, deine Wahlmöglichkeiten und die Apple-SKAdNetwork-Offenlegung sind in §5.9 beschrieben.

Aufbewahrung: Jynx behält keine separate Kopie der mit Meta geteilten Events. Bereits geteilte Events unterliegen den Aufbewahrungs- und Löschprozessen von Metas Business Tools, die ab dem Zeitpunkt des Teilens gelten.

### 4.10. Creator-(Partner-)Programm — KYC und Auszahlungen

Wenn du dem Jynx-Creator-(Partner-)Programm beitrittst, verarbeiten wir die Identitäts-, Steuer- und Auszahlungsinformationen, die das Programm verlangt: deinen CPF oder CNPJ (in der App validiert), die von dir gewählte Auszahlungsrail — PayPal (per E-Mail identifiziert), Wise-Banküberweisung (Brasilien) oder einen Pix-Schlüssel — und deine Kampagnen-Leistungsdaten (attribuierte Registrierungen; siehe §10 Empfehlungen). Auszahlungsdaten werden in pseudonymer Form geführt (§10). Das Programm unterliegt den versionierten Creator Referral Terms und dem Self-Billing Mandate, die du bei der Anmeldung akzeptierst (siehe die Nutzungsbedingungen §15).

Auszahlungen werden über die Zahlungsinstitution abgewickelt, die die von dir gewählte Rail betreibt: PayPal oder Wise erhalten die Überweisungsanweisungen und die Daten, die sie zur Prüfung deiner Identität, zur Betrugsprävention und zur Erfüllung ihrer regulatorischen Pflichten benötigen, und handeln nach ihren eigenen Bedingungen als unabhängige Zahlungsinstitutionen (ihre Datenschutzrichtlinien sind auf ihren Websites veröffentlicht); eine Pix-Auszahlung ist eine Überweisung, die Jynx Group an den von dir angegebenen Pix-Schlüssel veranlasst. Die anwendbaren internationalen Übermittlungsgarantien sind in §9 beschrieben.

### 4.11. KI-Funktionen

**Avatar-Generierung.** Das Avatar-Quiz kann stilisierte Avatar-Vorschläge für dein Profil generieren. Die Generierung läuft derzeit auf Cloudflare Workers AI (Cloudflare, Inc., Auftragsverarbeiter) nach den dokumentierten Weisungen von Jynx; ändert sich die zugrunde liegende Engine, wird dieser Abschnitt vor oder mit der Änderung aktualisiert. Die Eingaben sind deine Quiz-Antworten und Spielstil-Präferenzen — niemals deine Fotos — zusammen mit deiner Nutzerkennung; die Vorschläge kommen als PNG- oder WebP-Bilder in die App und werden bis zu 30 Tage aufbewahrt, damit du sie abrufen kannst, danach werden sie gelöscht. Generierte Bilder sind synthetisch — es sind keine Fotografien von dir — und unterliegen derselben Moderation wie andere Bilder (§4.8).

**Companion-Nachrichten (Quimera).** Einige Companion-App-Nachrichten werden von einem generativen KI-System (Google Gemini, Auftragsverarbeiter) verfasst oder angereichert. Ist eine Nachricht KI-generiert, ist sie als solche gekennzeichnet; du wirst stets informiert, wenn du mit einem KI-generierten Element interagierst, gemäß EU AI Act Art. 50(1).

## 5. Datennutzung

Wir verwenden deine Daten, um:

### 1. Unsere Dienste bereitzustellen:

- Dein Konto zu erstellen und zu verwalten
- Dir zu ermöglichen, dich mit anderen Spielern zu verbinden
- Team-Erstellung und Gaming-Session-Organisation zu erleichtern

### 2. Personalisierung:

- Kompatible Teamkollegen zu empfehlen (spielbasiertes, rang-, stil-basiertes Matching)
- Relevante Inhalte anzuzeigen

### 3. Kommunikation (operativ / transaktional):

- Dir wichtige Service-Benachrichtigungen zu senden (gefundene Matches, erhaltene Nachrichten, Kontosicherheits-Warnungen und Hinweise zu Richtlinienänderungen nach §11)

Marketing-, Re-Engagement- und Deinstallations-/Churn-Umfrage-E-Mails sind separat in §5.6 Marketing-Kommunikation beschrieben und fallen nicht unter diese transaktionale Kategorie.

### 4. Service-Verbesserung:

- Nutzung zu analysieren, um Funktionen zu verbessern
- Bugs zu identifizieren und zu beheben
- Performance zu optimieren
- Avatar-Vorschläge und Companion-Nachrichtenentwürfe mit KI-Auftragsverarbeitern generieren (§4.11)

### 5. Sicherheit und Compliance:

- Betrug und Missbrauch zu verhindern
- Unsere Nutzungsbedingungen durchzusetzen
- Gesetzlichen Verpflichtungen nachzukommen

Wir dürfen anonymisierte, aggregierte Statistiken veröffentlichen, die aus der App-Nutzung abgeleitet sind (zum Beispiel, wie Spieler Duos bilden). Diese Statistiken identifizieren niemals einzelne Nutzer.

### 5.6. Marketing-Kommunikation

Zusätzlich zu den in §5.3 beschriebenen operativen Benachrichtigungen dürfen wir dir Marketing- und Re-Engagement-Kommunikation per E-Mail senden, einschließlich: Produktupdates und Feature-Ankündigungen zur Jynx-App; Newsletter; Re-Engagement-Nachrichten, die dich zurück in die App einladen; und kurze Deinstallations- oder Churn-Feedback-Umfragen (z. B. "Warum hast du aufgehört, Jynx zu nutzen?"). Diese Kommunikation ist von transaktionalen/Service-Benachrichtigungen verschieden.

**Rechtsgrundlage — Nutzer in der EU/dem EWR (DSGVO + ePrivacy).** Marketing- und Re-Engagement-E-Mails an Nutzer in der EU/dem EWR werden auf Grundlage deiner vorherigen ausdrücklichen Opt-in-Einwilligung gesendet (ePrivacy-Richtlinie Art. 13(1), in Frankreich umgesetzt durch Artikel L. 34-5 des Code des postes et des communications électroniques; DSGVO Art. 6(1)(a) und Art. 7). Nach dem Start bezahlter Abonnements (Jynx+) und einmaliger In-App-Käufe (Founder Packs) ist der Dienst nun ein entgeltlicher Dienst, und diese Käufe stellen einen "Verkauf" im Sinne des EuGH-Urteils C-654/23 (13. November 2025) dar. Die "Soft-Opt-in"-Ausnahme der ePrivacy-Richtlinie Art. 13(2) ist uns daher grundsätzlich für ähnliche Produkte und Dienstleistungen an bestehende Kunden verfügbar. Aus konservativer Haltung stützen wir uns jedoch weiterhin auf deine vorherige ausdrückliche Opt-in-Einwilligung; auf die Soft-Opt-in-Grundlage gehen wir erst nach einer dokumentierten Neubewertung, festgehalten in unserem Verarbeitungsverzeichnis, und einer aktualisierten Information an dich über.

**Rechtsgrundlage — brasilianische Nutzer (LGPD).** Für brasilianische Nutzer stützen sich Marketing- und Re-Engagement-Kommunikation auf zwei alternative Rechtsgrundlagen:

1. **Einwilligung (LGPD Art. 7, I und Art. 8)** — erfasst als separates, nicht vorgekreuztes, zweckgebundenes Opt-in bei der Anmeldung oder in der App, dokumentiert mit Datum, Formularversion und Sprache; du kannst sie jederzeit kostenlos widerrufen, ohne den Zugriff auf den Dienst zu verlieren (Art. 8 §5). Die Einwilligung ist die Grundlage für jede Kommunikation an Interessenten, Kaltakquise oder Cross-Sell/Partner-Angebote jenseits der Jynx-App.
2. **Berechtigtes Interesse (LGPD Art. 7, IX, konkretisiert durch Art. 10)** — wird nur für bestehende oder zuletzt verlorene Nutzer verwendet, die Re-Engagement-Nachrichten, Produktupdates zur selben Jynx-App oder eine einzige kurze Churn-/Deinstallations-Feedback-Umfrage erhalten. Bevor wir uns auf diese Grundlage stützen, führt und dokumentiert Jynx eine Prüfung berechtigter Interessen (LIA) nach dem Dreiphasentest des ANPD-Leitfadens zum berechtigten Interesse (2. Februar 2024): (i) Zweck, (ii) Erforderlichkeit und (iii) Abwägung und Schutzmaßnahmen. Die LIA hält die Vorbeziehung, die berechtigten Erwartungen des Nutzers, den Zweck, das gewählte am wenigsten invasive Mittel und den Opt-out-Kanal fest. Berechtigtes Interesse wird nicht für Kalt-/unaufgeforderte E-Mails, nicht verwandtes Cross-Sell, gekaufte Listen oder dauerhaftes Messaging an abgewanderte Nutzer nach klar beendetem Verhältnis verwendet.

**Widerspruchsrecht / Opt-out.** Brasilianische Nutzer können dieser Verarbeitung jederzeit widersprechen und sich über die Mechanismen in §7.5 und §7.6 abmelden (One-Click-Abmeldung in jeder E-Mail oder der In-App-Schalter für Kommunikationseinstellungen), ohne Kosten und ohne Kündigung des Kontos. Wir beachten Opt-out-Anfragen in Echtzeit. Der brasilianische Verbraucherschutzkodex (CDC, Gesetz 8.078/90, insbesondere Art. 39 III) verbietet unaufgeforderte oder missbräuchliche Werbenachrichten; wir respektieren Opt-outs daher strikt und wenden Frequenzlimits an, da beharrlicher Versand oder ignorierte Opt-Outs als missbräuchliche Praxis gelten können.

**Deinstallations-/Churn-Umfragen.** Wo betrieblich möglich stellen wir Deinstallations-/Churn-Fragen in der App im Moment der Deinstallation (keine E-Mail-Aufbewahrung nötig). Wird eine E-Mail-Umfrage versendet, enthält sie keine Werbe- oder Re-Engagement-Inhalte; wir senden maximal eine (1) Umfrage pro Nutzer innerhalb von etwa 60 Tagen nach Kontolöschung oder Deinstallation; die E-Mail-Adresse wird anschließend gemäß §6 gelöscht oder anonymisiert; und Nutzer, die einen Löschungs-/Right-to-be-forgotten-Antrag gestellt haben (§7.3), werden nie erneut kontaktiert und stehen auf einer permanenten Sperrliste (siehe §6 und die Nutzungsbedingungen §7.2).

**E-Mail-Tracking.** Marketing-E-Mails enthalten keine Tracking-Pixel oder versteckten Analytics, die personenbezogene Daten ohne separate Rechtsgrundlage verarbeiten. Sollte Open-/Click-Tracking eingeführt werden, wird es hier offengelegt und auf Einwilligung gestützt (LGPD Art. 8; ePrivacy Art. 5(3)), im Einklang mit den ANPD-Hinweisen zu Tracking-Technologien (18. Oktober 2022).

**Frequenz.** Marketing-E-Mails unterliegen internen Frequenzlimits; du kannst sie jederzeit über den In-App-Schalter für Kommunikationseinstellungen reduzieren oder deaktivieren oder in jeder Nachricht auf Abmelden klicken.

### 5.7. Community-Sicherheit und Umgehung von Sperren

Um unsere Community vor Missbrauch zu schützen, verwenden wir Gerätekennungen und Signale zur Geräteintegrität, um Versuche zu erkennen und zu verhindern, eine Suspendierung oder einen Ausschluss zu umgehen. Wenn wir ein Gerät einem ausgeschlossenen Konto zuordnen, kann dieses Gerät daran gehindert werden, neue Konten zu erstellen oder sich anzumelden. Wenn du der Meinung bist, dass dies zu Unrecht geschehen ist, kannst du Widerspruch einlegen, indem du dich an support@jynx.app wendest.

Geräteintegritätssignale werden mit Unterstützung von Talsec freeRASP erhoben und ausgewertet, einer Anti-Tampering- und Geräteintegritäts-Bibliothek, die in die App eingebettet ist. freeRASP arbeitet auf deinem Gerät: Es erkennt lokal Bedrohungen wie gerootete Geräte, Runtime-Hooking und entsperrte Bootloader und meldet seine Erkenntnisse zur Missbrauchsprävention über unseren eigenen Fehlerüberwachungsanbieter an uns (Sentry, §4.2); es sendet deine Daten nicht an einen von Talsec betriebenen Dienst.

### 5.8. Kinderschutz-Bildanalyse

Zum Schutz von Kindern und zur Erfüllung unserer Meldepflichten analysiert Jynx Bilder aus Direktnachrichten mit automatisierten Systemen, indem Hashes aus diesen Bildern mit Datenbanken bekannten sexuellen Kindesmissbrauchsmaterials abgeglichen werden. Für diese Analyse werden die Bilder selbst nicht an Dritte übertragen — nur irreversible Hashes (siehe §4.7). Profilbilder werden separat geprüft, durch die in §4.8 beschriebene Bildmoderations-Verarbeitung. Diese Analyse existiert ausschließlich zur Kinderschutz-Erkennung und für unsere Meldepflichten; sie wird nicht für Profilbildung, Werbung oder einen anderen Zweck verwendet. Treffer werden behandelt, wie in unserer [Child-Safety-Policy](/child-safety.html) beschrieben.

### 5.9. Werbemessung

Wenn du akzeptierst, teilen wir auch begrenzte Events (etwa Registrierung und Käufe, mit deren Betrag) mit Meta, um unsere Werbung zu messen und zu verbessern. Deine Daten werden niemals verkauft, und du kannst deine Wahl jederzeit in den Privatsphäre-Einstellungen ändern. Was geteilt wird und mit wem, steht in §4.9.

Wie sie aktiviert wird. Auf iPhone und iPad nutzt die Werbemessung deine Daten nur mit deiner Einwilligung (DSGVO Art. 6(1)(a); LGPD Art. 7, I), erteilt im Privatsphäre-Blatt beim ersten Start oder später unter Einstellungen > Datenschutz > Werbemessung, und sie erfordert zusätzlich Apples App-Tracking-Transparenz-Autorisierung (siehe §4.9). Auf Android basiert die Werbemessung entweder auf derselben Einwilligung oder, für Nutzer, denen der Werbemessungs-Schalter im Blatt beim ersten Start standardmäßig aktiviert angezeigt wird, auf unserem berechtigten Interesse an der Messung unserer Werbung (LGPD Art. 7, IX und Art. 10), geprüft in einer dokumentierten Prüfung berechtigter Interessen. In diesem Fall ist sie standardmäßig aktiviert, und du kannst sie im selben Blatt oder jederzeit unter Einstellungen > Datenschutz > Werbemessung deaktivieren — Widerspruch ist so einfach wie Aktiviert-Lassen, kostenlos, und erfordert niemals die Löschung deines Kontos (LGPD Art. 18, §2).

Schutzmaßnahmen. Nutzer, von denen wir wissen, dass sie unter 18 sind, und Profile ohne festgestelltes Alter werden niemals auf der Grundlage des berechtigten Interesses gemessen. Widerruf der Einwilligung oder Widerspruch stoppt das weitere Teilen ab deinem nächsten App-Start; zuvor rechtmäßig geteilte Events bleiben bei Meta unter den Aufbewahrungsbedingungen aus §4.9, und der Widerruf berührt nicht die Rechtmäßigkeit zuvor durchgeführter Verarbeitung (DSGVO Art. 7(3); LGPD Art. 8 §5).

**Apple SKAdNetwork (iOS).** Unabhängig vom oben Genannten meldet Apples SKAdNetwork für jeden iPhone- und iPad-Nutzer — ungeachtet jeder Wahl oder Einstellung, auch wenn Tracking oder Werbemessung abgelehnt wurde — anonyme, aggregierte Conversion-Informationen an das Werbenetzwerk, das dir eine Werbung gezeigt hat (zum Beispiel, dass eine Registrierung oder ein Kauf in einem bestimmten Wertbereich stattfand). Dabei verlässt keine Kennung von Jynx und keine personenbezogenen Daten dein Gerät: Es ist Apples Standard-Attributionsmechanismus, und wir können dich daran nicht identifizieren.

### 5.10. E-Mails und Kommunikation

**Kontoaktivitäts-Benachrichtigungs-E-Mails (Service).** Wenn du Kontoaktivität in der App verpasst (eine ungelesene Nachricht, ein neues Match oder Like), kann Jynx dir dazu eine E-Mail senden. Dies sind Service-Benachrichtigungen auf Grundlage unseres berechtigten Interesses am Betrieb der sozialen Plattform (dich über deine laufenden Interaktionen auf dem Laufenden zu halten) und enthalten keine Werbeinhalte. Jede Benachrichtigungsart (Nachrichten, Matches, Likes) kannst du jederzeit unter Einstellungen > Datenschutz > Kommunikation deaktivieren oder über den Link "Diese Benachrichtigungen verwalten" in jeder E-Mail. Dieser Verarbeitung kannst du auch jederzeit widersprechen (DSGVO Art. 21), unter privacy@jynx.app.

**Re-Engagement- und Marketing-E-Mails (Winback).** E-Mails, die dich nach einer Phase der Inaktivität zurück zu Jynx bringen sollen, und unsere News- und Angebots-Kommunikation sind gewerbliche Werbung. Sie werden nur mit deiner vorherigen, spezifischen, freiwillig erteilten und widerruflichen Einwilligung gesendet, erhoben über ein separates, optionales, nicht vorgekreuztes Kästchen — niemals als Bedingung für die Annahme unserer Nutzungsbedingungen. Du kannst sie jederzeit unter Einstellungen > Datenschutz > Kommunikation oder über den Abmeldelink in jeder E-Mail widerrufen.

**Anzeige deines Benutzernamens und Profilbilds in Benachrichtigungs-E-Mails.** Wenn du mit einem anderen Mitglied interagiert hast (Like, Match, Nachricht), können dein Benutzername und dein Profilbild in den Kontoaktivitäts-Benachrichtigungs-E-Mails an dieses Mitglied erscheinen, wenn es inaktiv ist. Diese Elemente werden beim Senden erzeugt und nicht in unseren E-Mail-Protokollen gespeichert (nur Kennung und Zähler).

### 5.11. Standort und Match-Entfernung

**Was wir verarbeiten.** Wenn du dich entscheidest, deinen Standort zu teilen, nutzt Jynx ihn nur für einen Zweck: die Anzeige der ungefähren Entfernung zwischen dir und anderen Spielern ("~12 km") in der Match-Warteschlange und, wenn du die Entfernungs-Sortierung aktivierst, die Sortierung dieser Warteschlange nach Entfernung. Wir verarbeiten nur den ungefähren Standort: Die angeforderte Berechtigung ist die grobe / standortgenauigkeitsreduzierte Standortberechtigung des Betriebssystems, und bevor etwas gespeichert wird, werden deine Koordinaten auf unseren Servern auf ein Raster von etwa 0,02° (rund 2,2 km) gerastet; die abgeleitete Standortzelle ist etwa 11 km breit. Rohe GPS-Koordinaten werden nie gespeichert.

**Optional und einwilligungsbasiert.** Dies ist eine optionale Funktion: Nichts wird erhoben, sofern du nicht die Standortberechtigung des Betriebssystems erteilst UND der In-App-Standort-Schalter aktiviert ist. Der Standort wird nie im Hintergrund verarbeitet — er wird nur genutzt, während du die App verwendest. Dein Standort wird anderen Nutzern nie als Position auf einer Karte gezeigt, nie für Werbung verwendet und nie mit Werbeplattformen geteilt (siehe §4.9: In nichts, das für Werbe-Attribution oder -messung geteilt wird, sind Standortdaten enthalten). Unsere Analytics-Events enthalten keine Koordinaten, keine Städtenamen und keine Standortzellen-Kennungen — nur anonyme Adoptions- und Sortier-Signale. Die Berechtigungsabfrage des Betriebssystems ist der Weg, wie deine Einwilligung erfasst wird, und der In-App-Schalter ist der Weg, wie du sie widerrufst (§7.6).

**Wie lange wir ihn aufbewahren.** Der Standortdatensatz, den wir für dein Konto führen, wird automatisch nach 45 Tagen ohne Aktualisierung gelöscht und bei jeder Nutzung der Funktion aktualisiert, solange das Teilen aktiviert ist. Die ungefähre Entfernung auf deiner Profilkarte ist an die Aktivität gebunden: Sie besteht nur, solange deine Profilkarte besteht, und gilt nach 45 Tagen ohne Aktualisierung als nicht vorhanden.

**Deine Kontrolle.** Du kannst das Teilen jederzeit beenden: Das Deaktivieren des In-App-Standort-Schalters löscht die gespeicherten Koordinaten sofort (der Datensatz bleibt, wird aber von den Koordinaten geleert), und der Widerruf der Standortberechtigung in den Geräteeinstellungen stoppt die Erhebung an der Quelle. Die Löschung deines Kontos (§7.3) beseitigt ebenfalls deine Standortdaten.

## 6. Datenspeicherung

### 6.1. Aufbewahrungsfristen

- **Profildaten:** Gespeichert, solange dein Konto aktiv ist
- **Logs und Analytics:** Firebase Analytics: 14 Monate (Firebase-Richtlinie)
- **Marketing-E-Mail-Adressen (einwilligungsbasiert):** Aufbewahrt, solange du dich nicht abgemeldet oder dein Konto gelöscht hast, plus ein gehashter Eintrag auf der Sperrliste (siehe unten), damit wir dich nicht erneut kontaktieren
- **E-Mail-Adressen aus Deinstallations-/Churn-Umfragen:** Aufbewahrt für maximal 60 Tage nach Versand der Umfrage (oder, falls keine Umfrage versendet wurde, 60 Tage nach Deinstallation/Löschung), danach wird die Adresse gelöscht oder unumkehrbar anonymisiert. Pro Nutzer wird höchstens eine (1) Umfrage-E-Mail versendet
- **Re-Engagement zuletzt verlorener Konten (LGPD-Grundlage berechtigtes Interesse, nur brasilianische Nutzer):** Im Einklang mit den CNIL-Leitlinien und dem Test berechtigter Erwartungen darf Jynx die E-Mail-Adresse eines zuletzt verlorenen (nicht gelöschten) Kontos bis zu 3 Jahre nach der letzten sinnvollen Interaktion für Re-Engagement verwenden, danach wird sie gelöscht oder anonymisiert

### 6.2. Datenlöschung

Du kannst jederzeit die Löschung deines Kontos beantragen (siehe Abschnitt 7).

**Gesetzliche Aufbewahrung:** Einige Daten können länger aufbewahrt werden, um unseren gesetzlichen Verpflichtungen nachzukommen (z.B. Sicherheitsberichte, Finanztransaktionen).

Wenn du dein Konto löschst, entfernen wir deine E-Mail-Adresse aus unserem Marketing-CRM und unserem E-Mail-Serviceanbieter. Wenn du das Recht auf Löschung ausübst (§7.3 / DSGVO Art. 17 / LGPD Art. 18(VI) für einwilligungsbasierte Daten), wird deine E-Mail-Adresse auf eine permanente gehashte Sperrliste gesetzt, damit sie nie wieder für Marketing, Re-Engagement oder Umfragen verwendet wird — einschließlich Schutz vor Re-Import über beliebige Dritt- oder gekaufte Listen. Hinweis: Nach der LGPD gilt die Löschung nach Art. 18(VI) für Daten, die auf Grundlage einer Einwilligung verarbeitet werden; Daten, die auf berechtigtem Interesse beruhen (Art. 7 IX), unterliegen stattdessen dem Grundsatz der Zweckbindung (Art. 6 II und §2) und deinem Recht, die Einstellung der Verarbeitung zu verlangen (Art. 18 §2).

## 7. Deine Rechte (DSGVO und LGPD)

Je nachdem, wo du dich befindest, hast du Rechte nach der DSGVO (EU/EWR) und/oder der brasilianischen LGPD (Lei Geral de Proteção de Dados, Gesetz 13.709/2018).

### 7.1. Auskunftsrecht

Du kannst eine Kopie aller Daten anfordern, die wir über dich haben.

**So übst du dieses Recht aus:** Einstellungen > Datenschutz > "Meine Daten exportieren"

Der Prozess generiert eine JSON-Datei mit allen deinen Daten (Profil, Nachrichten, Statistiken usw.). Der Download-Link ist 7 Tage gültig.

### 7.2. Berichtigungsrecht

Du kannst deine Profilinformationen jederzeit von der Anwendung aus ändern (Benutzername, Biografie, Präferenzen usw.).

### 7.3. Recht auf Löschung ("Recht auf Vergessenwerden")

Du kannst die Löschung deines Kontos beantragen.

**So übst du dieses Recht aus:** Einstellungen > Gefahrenzone > "Mein Konto löschen"

#### Automatisierter Löschprozess:

1. Zweistufige Bestätigung zur Verhinderung versehentlicher Löschungen
2. Sofortige Anonymisierung deiner personenbezogenen Daten (Firestore)
3. Löschung deines Firebase Authentication-Kontos (widerruft automatisch alle OAuth-Token)
4. Eine anonymisierte ID wird als Referenz bereitgestellt
5. Option zum Löschen deiner Nachrichten und generierten Inhalte

**Wichtig:** Die Löschung ist irreversibel. Einige anonymisierte Daten können für statistische Zwecke aufbewahrt werden (DSGVO-konform).

**Manuelle Löschanfragen:** Für spezifische Datenlöschanfragen (z.B. nur Nachrichten aus einer bestimmten Community löschen, Storage-Bilder löschen oder andere Sonderfälle) kontaktiere bitte unseren Datenschutzbeauftragten unter dpo@jynx.app. Wir bearbeiten manuelle Anfragen innerhalb von 30 Tagen gemäß DSGVO.

### 7.4. Recht auf Datenübertragbarkeit

Der Datenexport (Abschnitt 7.1) ermöglicht es dir, deine Daten in einem strukturierten, maschinenlesbaren Format (JSON) abzurufen.

### 7.5. Widerspruchsrecht

Du kannst der Verarbeitung deiner Daten für Direktmarketing-Zwecke jederzeit kostenlos und ohne Angabe von Gründen widersprechen. Nach DSGVO Art. 21(2) ist dieses Recht für Nutzer in der EU/dem EWR absolut: Wir stellen jede Marketing-Verarbeitung ein, sobald dein Widerspruch eingeht. Für brasilianische Nutzer kannst du der Marketing-Verarbeitung über die unten genannten Opt-out-Mechanismen widersprechen (LGPD Art. 8 §5; Art. 18 §2).

- **One-Click-Abmeldung:** jede Marketing-E-Mail enthält einen One-Click-Abmeldelink (RFC 8058 List-Unsubscribe-Post), der in Echtzeit beachtet wird
- **In-App-Schalter:** Einstellungen > Datenschutz > Kommunikationseinstellungen
- **E-Mail:** dpo@jynx.app

### 7.6. Recht auf Widerruf der Einwilligung

Du kannst deine Einwilligung widerrufen für:

- **Analytics:** Einstellungen > Datenschutz > "Analytics aktivieren" deaktivieren
- **Werbemessung:** Einstellungen > Datenschutz > Werbemessung (siehe §5.9)
- **Standort (Match-Entfernung):** Deaktiviere den In-App-Standort-Schalter — dies löscht die gespeicherten Koordinaten — oder entziehe die Standortberechtigung in den Geräteeinstellungen (siehe §5.11)
- **Push-Benachrichtigungen:** Geräteeinstellungen
- **Marketing-Kommunikation:** Newsletter, Produktupdates, Re-Engagement und Deinstallations-/Churn-Umfragen — widerrufbar über die One-Click-Abmeldung, den In-App-Schalter für Kommunikationseinstellungen oder dpo@jynx.app, ohne dein Konto zu kündigen

**Hinweis:** OAuth-Token (Google, Apple) werden automatisch widerrufen, wenn du dein Konto löschst (Abschnitt 7.3).

Der Widerruf berührt nicht die Rechtmäßigkeit der vor dem Widerruf erfolgten Verarbeitung (DSGVO Art. 7(3); LGPD Art. 8 §5), und der Widerruf einer Einwilligung erfordert niemals die Löschung deines Kontos.

### 7.7. Zusätzliche LGPD-Rechte (brasilianische Nutzer)

Zusätzlich zu den oben genannten Rechten haben Betroffene mit Sitz in Brasilien folgende Rechte nach LGPD Art. 18: Bestätigung der Existenz der Verarbeitung; Zugriff auf die Daten; Berichtigung unvollständiger, ungenauer oder veralteter Daten; Anonymisierung, Sperrung oder Löschung unnötiger oder übermäßiger Daten (Art. 18(VI) gilt für Daten, die auf Grundlage einer Einwilligung verarbeitet werden); Portabilität zu einem anderen Dienst- oder Produktenbieter auf Anfrage; Löschung mit Einwilligung verarbeiteter personenbezogener Daten; und Information über die Möglichkeit, die Einwilligung zu verweigern, und die Folgen davon.

Du kannst diese Rechte über Einstellungen > Datenschutz ausüben oder den encarregado unter dpo@jynx.app kontaktieren. Du kannst dich auch bei der brasilianischen Datenschutzbehörde — der Autoridade Nacional de Proteção de Dados (ANPD) — unter https://www.gov.br/anpd beschweren.

## 8. Datensicherheit

Wir implementieren technische und organisatorische Sicherheitsmaßnahmen zum Schutz deiner Daten:

- **Verschlüsselung:** Sichere Kommunikation über HTTPS
- **Firebase Security Rules:** Strikte Zugriffskontrolle auf Firestore-Daten
- **Authentifizierung:** Sichere Sitzungsverwaltung über Firebase Auth
- **Eingabe-Validierung:** XSS-Injection-Prävention über SecureTextInput
- **Rate-Limiting:** Schutz vor Missbrauch (Spam-Nachrichten, automatisierte Aktionen)
- **Moderation:** Inhaltsmeldesystem und Moderationssystem
- **Echtzeit-Sprache:** Sprachraum-Medien werden bei der Übertragung mit WebRTC DTLS-SRTP verschlüsselt, demselben Standard, den gängige Sprach-Apps verwenden; die Signalisierung zwischen App und unseren Servern läuft über HTTPS/TLS.

Kein System ist zu 100 % sicher. Im Falle einer Verletzung des Schutzes personenbezogener Daten werden wir die zuständige Aufsichtsbehörde ohne unangemessene Verzögerung und, wo möglich, innerhalb von 72 Stunden nach Bekanntwerden einer Verletzung, die voraussichtlich ein Risiko für deine Rechte birgt, benachrichtigen (DSGVO Art. 33), und die Verletzung den betroffenen Nutzern ohne unangemessene Verzögerung mitteilen, wo voraussichtlich ein hohes Risiko für dich besteht (DSGVO Art. 34). Für Betroffene in Brasilien teilen wir relevante Sicherheitsvorfälle auch der ANPD und dir innerhalb der von der Behörde gesetzten Frist mit (LGPD Art. 48; derzeit 3 Werktage gemäß ANPD-Resolution CD/ANPD nº 15/2024).

## 9. Internationale Datenübertragungen

Deine Daten können auf Server außerhalb deines Hoheitsgebiets übertragen und gespeichert werden, einschließlich:

- **Google Cloud / Firebase:** Globale Infrastruktur (einschließlich Google Analytics auf der Website, siehe §10), unter DSGVO-Standardvertragsklauseln und gleichwertigen Garantien
- **Amazon Web Services (Bildmoderation):** Die in §4.8 beschriebene Bildmoderations-Verarbeitung läuft in der Region São Paulo von AWS (Brasilien); Übermittlungen aus der EU/dem EWR stützen sich auf den Auftragsverarbeitungsvertrag von AWS mit den Standardvertragsklauseln der Europäischen Kommission, zusammen mit den allgemeinen Garantien unten. Das Bild wird über die Google-Cloud-Infrastruktur von Jynx an AWS weitergeleitet (der Google-Cloud-/Firebase-Weg oben)
- **Sentry:** Server in den USA; Übermittlungen aus der EU/dem EWR stützen sich auf das EU-US Data Privacy Framework (in Kraft seit Juli 2023, ersetzt den für ungültig erklärten Privacy Shield) für Sentry-Entitäten, die sich unter dem DPF zertifiziert haben, oder auf Standardvertragsklauseln, wo das DPF nicht anwendbar ist
- **E-Mail-Serviceanbieter (ESP):** Wird für die in §5.6 beschriebene Marketing-, Re-Engagement- und Umfrage-Kommunikation verwendet. Der ESP ist in §4.4 benannt und agiert als Auftragsverarbeiter unter einem unterzeichneten Auftragsverarbeitungsvertrag
- **LiveKit (Echtzeit-Sprache, und Bildschirmfreigabe, wenn verfügbar):** LiveKit Cloud ist unser Auftragsverarbeiter für Echtzeit-Sprach- (und, wenn die Funktion verfügbar ist, Bildschirmfreigabe-)Medien unter einem unterzeichneten Auftragsverarbeitungsvertrag (§4.5). LiveKit Cloud leitet Medien global weiter: Sitzungen werden über die globale Infrastruktur von LiveKit bedient, ohne an eine bestimmte Region gebunden zu sein. Sprachraum-Audio (und Bildschirmfreigabe-Video, wenn verfügbar) wird in Echtzeit geroutet und weder von Jynx noch von LiveKit aufgezeichnet, gespeichert oder vorgehalten; LiveKit behält nur die in §4.5 beschriebenen operativen Sitzungsmetadaten. Übermittlungen personenbezogener Daten an LiveKit stützen sich auf die Datenverarbeitungs-Zusatzvereinbarung von LiveKit, die DSGVO-Bedingungen und die Standardvertragsklauseln der Europäischen Kommission für grenzüberschreitende Übermittlungen enthält, zusammen mit den allgemeinen Garantien unten, die für LiveKit gelten wie für unsere anderen Auftragsverarbeiter.
- **Meta (Werbe-Attribution und Werbemessung):** Das in §4.9 und §5.9 beschriebene Teilen erreicht Meta Platforms Ireland Ltd. oder Meta Platforms, Inc., die es in den Vereinigten Staaten und anderen Ländern verarbeitet. Internationale Übermittlungen personenbezogener Daten im Zusammenhang mit den Tools von Meta unterliegen den anwendbaren vertraglichen Garantien und internationalen Übermittlungsmechanismen. Jynx prüft deren Konformität mit den Anforderungen des Artikels 33 der LGPD und mit den ANPD-Vorschriften.

**Garantien (DSGVO, EU/EWR).** Alle Übermittlungen aus der EU/dem EWR sind durch einen Angemessenheitsbeschluss, das EU-US Data Privacy Framework oder Standardvertragsklauseln abgedeckt, zusammen mit ergänzenden Schutzmaßnahmen, wo erforderlich.

**Garantien (LGPD, Brasilien).** Übermittlungen personenbezogener Daten brasilianischer Nutzer richten sich nach LGPD Art. 33:

- **An Jynx Group in Frankreich (Verantwortlicher):** Rechtmäßig nach LGPD Art. 33(I) kraft der ANPD-Resolution CD/ANPD nº 32/2026 (in Kraft seit 26. Januar 2026), die die Europäische Union — einschließlich Frankreichs — als mit angemessenem Schutzniveau anerkennt. Für diesen Übermittlungsweg ist kein zusätzlicher Mechanismus erforderlich. (Dieser Angemessenheitsbeschluss unterliegt innerhalb von vier Jahren der Neubewertung durch die ANPD; wird er ausgesetzt, implementiert Jynx einen alternativen Art.-33-Mechanismus wie die ANPD-Standardvertragsklauseln.)
- **An Brevo in Frankreich (E-Mail-ESP, Auftragsverarbeiter):** Rechtmäßig nach LGPD Art. 33(I) kraft derselben ANPD-Resolution CD/ANPD nº 32/2026 (in Kraft seit 26. Januar 2026), die die Europäische Union — einschließlich Frankreichs — als mit angemessenem Schutzniveau anerkennt. Für diesen Übermittlungsweg ist kein zusätzlicher Mechanismus erforderlich. (Unterliegt derselben oben beschriebenen ANPD-Neubewertung; wird der Angemessenheitsbeschluss ausgesetzt, implementiert Jynx einen alternativen Art.-33-Mechanismus wie die ANPD-Standardvertragsklauseln mit Brevo.)
- **An Anbieter von Kinderschutz-Technologie in der EU (Hash-Abgleich, Auftragsverarbeiter):** Vom selben EU-Angemessenheitsbeschluss der ANPD-Resolution CD/ANPD nº 32/2026 abgedeckt wie die Wege oben — die Anbieter erhalten nur irreversible Hashes und führen den Abgleich in der EU-Region durch (§4.7)
- **An AWS in Brasilien (Bildmoderation, Auftragsverarbeiter):** Der AWS-Rekognition-Schritt bleibt im Land — er läuft in der Region São Paulo von AWS (§4.8). Das Bild wird zuvor durch die Google-Cloud-Infrastruktur von Jynx geleitet, die von den allgemeinen Google-Cloud-/Firebase-Übermittlungsbedingungen oben abgedeckt ist

**Transparenz (ANPD-Resolution CD/ANPD nº 19/2024).** Die von Artikel 17, §2 der ANPD-Resolution CD/ANPD nº 19/2024 geforderten Informationen sind in dieser Richtlinie zusammengefasst: Form, Dauer und spezifischer Zweck jeder internationalen Übermittlung sowie die Zielländer (dieser Abschnitt und die von ihm zitierten Abschnitte); Identifizierung und Kontaktdaten des Verantwortlichen (§1); gemeinsame Nutzung der Daten und ihr Zweck (§4); die Verantwortlichkeiten der Verarbeitungsagenten und die ergriffenen Sicherheitsmaßnahmen (§4 und §8); sowie deine Rechte und ihre Ausübungswege, einschließlich eines leicht zugänglichen Kanals und des Rechts, sich an die ANPD zu wenden (§7 und §12). Den vollständigen Wortlaut der zur Durchführung dieser internationalen Übermittlungen verwendeten Vertragsklauseln stellt dir unser Datenschutzbeauftragter (dpo@jynx.app) auf Anfrage innerhalb von 15 Tagen zur Verfügung.

Historische Anmerkung: Die einjährige Übergangsfrist zur Anpassung bestehender Verträge an die ANPD-SCCs endete am 23. August 2025; neue Auftragsverarbeiter-Beziehungen wie der ESP schließen die SCCs beim Onboarding ab.

## 10. Cookies und ähnliche Technologien

Unsere mobile Anwendung verwendet keine Cookies im traditionellen Sinne, sondern verwendet:

- **Authentifizierungs-Token:** Lokal auf sichere Weise gespeichert
- **Lokaler Cache:** Zur Verbesserung der Performance (Profildaten, kürzliche Nachrichten)

**Website.** Die Jynx-Website (jynx.app) verwendet Google Analytics 4 (bereitgestellt von Google) mit Consent Mode v2, um zu verstehen, wie die Website genutzt wird. Analytics-Speicherung ist standardmäßig abgelehnt: Bis du das Cookie-Banner akzeptierst, läuft Google Analytics ohne Cookies oder lokalen Speicher, und Google erhält nur cookieless Signale ohne Kennungen; bei Annahme wird die volle Messung aktiviert. Deine Wahl — annehmen oder ablehnen — wird lokal auf deinem Gerät gespeichert (Browser-LocalStorage, Schlüssel "jynx-analytics-consent"). Löscht du den Browser-Speicher für jynx.app, erscheint das Banner erneut, und du kannst deine Wahl ändern. Google ist Empfänger der entstehenden Analytics-Daten (siehe §9); siehe §4 für unsere anderen Auftragsverarbeiter und §7 für deine Rechte.

**Einladungslinks.** Wenn du einen Einladungslink (jynx.app/invite/…) im Browser öffnest und auf den App-Store-Download-Button tippst, schreibt die Website diesen Einladungslink in die Zwischenablage deines Geräts und ersetzt deren vorherigen Inhalt. Dies ist eine Standardtechnik zur Attribution von App-Installationen unter iOS (das keinen Install-Referrer-Mechanismus hat): Sie ermöglicht der Jynx-App beim ersten Start vorzuschlagen, mit der Einladung der Person beizutreten, die dir den Link geschickt hat. Die Website liest deine Zwischenablage nie — sie schreibt nur diesen Link — und die App liest ihn nur einmal, nach dem Einholen deiner ausdrücklichen Zustimmung. Auf keinen anderen Zwischenablage-Inhalt wird zugegriffen oder erhoben. Wenn du ihn nicht teilen möchtest, lehne die Einfügen-Aufforderung einfach ab und tritt ohne Einladung bei.

**Empfehlungen und Creator-Kampagnen.** Wenn du Jynx mit einem Einladungscode beitrittst — aus einem Link, einem QR-Code oder manuell eingegeben — erfassen wir diesen Code mit deinem Konto, damit wir die Einladung der Person oder Kampagne zuordnen können, die sie geteilt hat, die zugehörigen Vorteile anwenden und betrügerische Registrierungen erkennen können. Diese Verarbeitung stützt sich auf unsere berechtigten Interessen (siehe §13) und unterliegt unseren Anti-Betrugs-Prüfungen; auf deiner Seite ändert sich nichts, da dieselben Daten erhoben werden, ganz gleich, welche Art von Einladungscode du verwendest. Manche Einladungscodes gehören auch zu Creator-Attributions-Kampagnen: Ist der von dir verwendete Code Teil einer solchen Kampagne, kann diese zusätzlich gutgeschrieben werden. Auszahlungsdaten für Creator-Kampagnen werden in pseudonymer Form geführt.

**Bildschirmfreigabe (wenn verfügbar).** Wenn die Funktion verfügbar ist, kannst du deinen Gerätebildschirm in einem Sprachraum teilen. Das Teilen beginnt erst, nachdem die Bildschirmaufnahme-Berechtigung des Betriebssystems erteilt und eine ausdrückliche Bestätigung in der App gegeben wurde. Alles, was auf deinem Bildschirm sichtbar ist — einschließlich Benachrichtigungen — wird live an die anderen Teilnehmer im Raum gestreamt, und du bist für das verantwortlich, was du teilst. Das geteilte Video ist ein Live-Medientrack, der wie Sprachaudio über die LiveKit-SFU geroutet wird (§4.5, §9): Er wird weder von Jynx noch von LiveKit aufgezeichnet oder gespeichert und endet, wenn du das Teilen beendest.

## 11. Änderungen dieser Richtlinie

Wir können diese Datenschutzerklärung aktualisieren. Bei wesentlichen Änderungen werden wir dich benachrichtigen:

- Über eine In-App-Benachrichtigung
- Per E-Mail an die mit deinem Konto verknüpfte Adresse

## 12. Kontaktiere uns

Bei Fragen zu dieser Datenschutzerklärung oder zur Ausübung deiner Rechte:

- **E-Mail:** dpo@jynx.app

**Aufsichtsbehörden:** Wenn du der Meinung bist, dass deine Rechte nicht respektiert wurden, kannst du eine Beschwerde einreichen:

- **Nutzer in der EU/dem EWR:** bei der CNIL (Commission Nationale de l'Informatique et des Libertés), Frankreich — https://www.cnil.fr
- **Brasilianische Nutzer:** bei der ANPD (Autoridade Nacional de Proteção de Dados), Brasilien — https://www.gov.br/anpd

Die Einreichung einer Beschwerde bei einer Aufsichtsbehörde berührt nicht dein Recht, andere verfügbare gerichtliche Rechtsbehelfe einzulegen, einschließlich der in deiner Rechtsordnung geltenden zwingenden Verbraucherschutzbestimmungen (z. B. dem brasilianischen Verbraucherschutzkodex, Gesetz 8.078/90).

## 13. Rechtsgrundlagen und Einwilligung

Wir verarbeiten deine personenbezogenen Daten nur, wo wir eine Rechtsgrundlage haben. Die Rechtsgrundlagen, auf die wir uns stützen, und wo jede einzelne in dieser Richtlinie beschrieben ist:

- Vertragserfüllung / Bereitstellung des Dienstes (DSGVO Art. 6(1)(b); LGPD Art. 7, V) — Konto, Matching und Messaging (§5.1–5.3)
- Berechtigte Interessen (DSGVO Art. 6(1)(f); LGPD Art. 7, IX und Art. 10) — Sicherheit, Betrugsprävention, Serviceverbesserung und (für brasilianische Nutzer) Marketing-/Re-Engagement-/Umfrage-Kommunikation an bestehende oder zuletzt verlorene Nutzer, wie in §5.6 beschrieben, jeweils gestützt auf eine dokumentierte Abwägungsprüfung
- Rechtliche Verpflichtung (DSGVO Art. 6(1)(c); LGPD Art. 7, II) — Aufbewahrung zu rechtlichen Zwecken (§6)
- Rechtliche Verpflichtung und berechtigte Interessen (DSGVO Art. 6(1)(c) und 6(1)(f); LGPD Art. 7, II und IX) — Erkennung illegaler und richtlinienwidriger Inhalte, einschließlich der in §5.8 beschriebenen Kinderschutz-Bildanalyse und der in §4.8 beschriebenen Bildmoderations-Verarbeitung, Prävention von Missbrauch und Sperren-Umgehung (§5.7) und Erfüllung gesetzlicher Meldepflichten. Für die Analyse von Bildern aus Direktnachrichten stützt sich Jynx außerdem auf die freiwillige Erkennung online sexuellen Kindesmissbrauchs, die die Verordnung (EU) 2021/1232 (die ePrivacy-Ausnahme, in derzeit geltender Fassung) erlaubt.
- Einwilligung (DSGVO Art. 6(1)(a); LGPD Art. 7, I und Art. 8) — Analytics, sofern du sie aktiviert hast, Push-Benachrichtigungen und (für EU/EWR-Nutzer sowie für brasilianische Interessenten/Kaltakquise-/Cross-Sell-Sends) Marketing-Kommunikation gemäß §5.6
- Werbemessung (§5.9): deine Einwilligung (DSGVO Art. 6(1)(a); LGPD Art. 7, I und Art. 8), sofern du sie aktiviert hast; auf Android alternativ unser berechtigtes Interesse (LGPD Art. 7, IX und Art. 10) für Nutzer, denen der Werbemessungs-Schalter standardmäßig aktiviert angezeigt wird, mit deinem jederzeitigen Widerspruchsrecht
- Ungefährer Standort für die Match-Entfernungs-Funktion (§5.11): deine Einwilligung (DSGVO Art. 6(1)(a); LGPD Art. 7, I und Art. 8), erfasst durch die Standortberechtigung des Betriebssystems zusammen mit dem In-App-Standort-Schalter; du kannst sie jederzeit widerrufen (§7.6) — das Deaktivieren des Schalters löscht die gespeicherten Koordinaten
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Einwilligung muss spezifisch und informiert sein.** Wo wir uns auf deine Einwilligung stützen, wird sie durch einen klaren bestätigenden Akt erteilt, bezieht sich auf bestimmte Zwecke und wird getrennt von der Annahme dieser Bedingungen erfasst (LGPD Art. 8 §1 — cláusula destacada). Generische oder gebündelte Autorisierungen sind nach LGPD Art. 8 §4 nichtig und nach DSGVO Art. 4(11) und Art. 7 ungültig. Die Nutzung von Jynx stellt für sich genommen keine Einwilligung in Marketing dar. Die Beweislast für eine gültige Einwilligung liegt bei Jynx (LGPD Art. 8 §2; DSGVO Art. 7(1)); wir dokumentieren daher Datum, Formularversion, Sprache und Umfang jeder von uns erhobenen Einwilligung.

**Widerruf.** Du kannst jede Einwilligung jederzeit widerrufen, über ein Verfahren, das so einfach ist wie ihre Erteilung und das nicht die Löschung deines Kontos erfordert (LGPD Art. 8 §5; DSGVO Art. 7(3)) — siehe §7.5 und §7.6. Der Widerruf berührt nicht die Rechtmäßigkeit der vor dem Widerruf erfolgten Verarbeitung. Die Löschung deines Kontos (§7.3) bleibt jederzeit verfügbar, ist aber nicht der Mechanismus zum Widerruf einer bestimmten Einwilligung.
