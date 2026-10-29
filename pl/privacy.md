---
title: "Polityka Prywatności"
description: "Dowiedz się, jak Jynx chroni twoją prywatność i zarządza twoimi danymi. Nasza przejrzysta polityka prywatności przedstawia nasze praktyki i twoje prawa."
canonical: "https://jynx.app/pl/privacy.html"
locale: "pl"
dateModified: "2026-10-24"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Polityka Prywatności

Ostatnia aktualizacja: październik 2026

Version: 1.8

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

## 1. Wprowadzenie

Jynx ("my", "nasze", "aplikacja") to społecznościowa platforma gaming, która pozwala graczom łączyć się, tworzyć zespoły i grać razem.

### Informacje Prawne:

- **Podmiot Prawny:** Jynx Group
- **Kontakt do Inspektora Ochrony Danych:** dpo@jynx.app
- **EU / EEA jurisdiction:** France, European Union — this Privacy Policy complies with Regulation (EU) 2016/679 (GDPR) and Directive 2002/58/EC (ePrivacy), as transposed in France.
- **Brazilian jurisdiction:** This Privacy Policy also complies with Brazilian Law nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), which applies to Jynx's processing of personal data of data subjects located in Brazil under Art. 3 of the LGPD, regardless of Jynx having no establishment in Brazil.
- **Publication (LCEN):** Directeur de la publication: Antoine Haie. This website (jynx.app) is hosted by GitHub Pages and delivered through the Cloudflare content-delivery network.

For the purposes of the LGPD, Jynx Group is the controller (controlador) of your personal data. Our Data Protection Officer acts as the encarregado (DPO) and may be reached at dpo@jynx.app for any request relating to the LGPD. Although Jynx qualifies as a pequeno agente de tratamento de dados pessoais (small-scale agent) under ANPD Resolution CD/ANPD nº 2/2022, which exempts Jynx from the obligatory appointment of an encarregado, Jynx voluntarily maintains this published communication channel.

Niniejsza polityka prywatności opisuje, w jaki sposób gromadzimy, wykorzystujemy, udostępniamy i chronimy twoje dane osobowe podczas korzystania z naszej aplikacji.

## 2. Minimalny Wiek i Weryfikacja

Nasza aplikacja jest przeznaczona dla użytkowników w wieku 18 lat i starszych.

Podczas tworzenia konta prosimy o podanie daty urodzenia. Jeśli masz poniżej 18 lat, nie będziesz mógł utworzyć konta ani korzystać z naszych usług.

Marketing to minors. Jynx is restricted to users aged 18 and over and applies an automated age gate. If we subsequently identify that a user is under 18 (LGPD Art. 14; GDPR Art. 8), we will immediately terminate the account, exclude the user from all marketing, re-engagement, and survey communications, and delete the associated marketing data. We never knowingly collect marketing consent from a minor.

## 3. Gromadzone Dane

### 3.1. Dane Rejestracyjne i Profilowe

Podczas tworzenia i zarządzania kontem gromadzimy następujące informacje:

#### Informacje Uwierzytelniające:

- Adres e-mail (dla kont e-mail/hasło)
- Nazwa użytkownika/pseudonim
- Zdjęcie profilowe (opcjonalne)
- Social login identifiers (Google, Apple) if you use these methods
- Discord identifiers (your Discord user ID) if you choose to connect your Discord account for the Discord integration — the connection uses Discord's identify-only OAuth and is not a sign-in method; you can disconnect it at any time
- Guest browsing (when available): you may explore the public parts of Jynx without creating an account; in guest mode we process only a locally-stored guest identifier and the technical data in §3.3 needed to serve the app — no profile is created and no account data is retained. To match, chat, or join communities you must create an account

#### Informacje Profilowe:

- Data urodzenia (do weryfikacji wieku)
- Kraj i strefa czasowa
- Języki, którymi mówisz
- Biografia (opcjonalna)
- Preferencje gaming i dostępność
- Unikalny identyfikator (automatycznie generowany do prywatnego odkrywania znajomych)

### 3.2. Dane Gaming

Aby pomóc ci znaleźć kompatybilnych kolegów, gromadzimy:

#### Profile Gaming:

- Gry, w które grasz
- Poziomy, rangi i statystyki gry
- Ulubieni bohaterowie/postacie
- Styl gry

#### Integracja z API Riot Games:

Pobieramy z API Riot Games (za twoją zgodą):

- Nazwę przywoływacza i Riot ID
- Rangę i historię meczów (League of Legends, Valorant, itp.)
- Statystyki bohaterów
- Ostatnią historię meczów

**Powód Gromadzenia:** Wyświetlanie twojego profilu gracza i poprawa dopasowywania z innymi graczami.

### 3.3. Dane Użytkowania i Techniczne

Automatycznie gromadzimy pewne dane techniczne:

#### Analityka i Wydajność:

- **Firebase Performance Monitoring:** Czas uruchamiania aplikacji, płynność interfejsu
- **Sentry:** Raporty błędów i wydajności (z anonimizacją danych osobowych)
- **Firebase Crashlytics:** Raporty awarii

#### Informacje o Urządzeniu:

- Typ i model urządzenia
- Wersja systemu operacyjnego
- Wersja aplikacji
- Identyfikatory urządzenia i sygnały integralności urządzenia (patrz §5.7)

#### Zachowanie Użytkownika:

- Odwiedzane ekrany i używane funkcje
- Czas spędzony w aplikacji
- Interakcje z interfejsem

Możesz wyłączyć zbieranie danych analitycznych w Ustawieniach > Prywatność > "Włącz Analitykę".

### 3.4. Dane Komunikacyjne

- **Wiadomości:** Wiadomości w czatach społeczności, wiadomości prywatne między użytkownikami, historia rozmów
- **Powiadomienia:** Tokeny FCM (Firebase Cloud Messaging) do powiadomień push

### 3.5. Treści Generowane przez Użytkowników

- Przesłane zdjęcia (zdjęcia profilowe, dodatkowe zdjęcia) and images shared in direct messages
- Zgłoszenia bezpieczeństwa i moderacji
- Preferencje kosmetyczne (awatary, odznaki)

### 3.6. Dane audio pokoi głosowych

Jynx oferuje pokoje głosowe w czasie rzeczywistym, umożliwiające rozmowę z innymi uczestnikami podczas gry. Dźwięk pokoju głosowego jest przechwytywany z Twojego mikrofonu dopiero po udzieleniu zgody systemowej na dostęp do mikrofonu i jawnym dołączeniu do pokoju; przed wykonaniem obu tych kroków żadne audio nie jest przechwytywane.

Jynx nie włącza funkcji nagrywania, transkrypcji, Agent Insights ani Egress w LiveKit. Dźwięk pokoi głosowych jest przekierowywany w czasie rzeczywistym przez SFU (Selective Forwarding Unit) LiveKit i nie jest nagrywany, przechowywany ani utrwalany ani przez Jynx, ani przez LiveKit.

Gdy mówisz w pokoju głosowym, Twój dźwięk jest przekazywany w czasie rzeczywistym pozostałym uczestnikom tego pokoju — podobnie jak działa głos w innych aplikacjach czatu głosowego.

Dźwięk pokoi głosowych jest przetwarzany za Twoją zgodą: udzielasz zgody na mikrofon i jawnie dołączasz do pokoju przed przechwyceniem jakiegokolwiek audio. Zgodę możesz wycofać w dowolnym momencie, opuszczając pokój lub cofając zgodę na mikrofon w ustawieniach urządzenia.

## 4. Usługi Zewnętrzne i Udostępnianie Danych

### 4.1. Usługi Firebase (Google)

Korzystamy z następujących usług Firebase, wszystkie zgodne z RODO:

- **Firebase Authentication:** Bezpieczne zarządzanie kontami użytkowników
- **Cloud Firestore:** Przechowywanie twoich danych profilowych i gaming
- **Firebase Storage:** Hostowanie zdjęć profilowych
- **Cloud Functions:** Bezpieczne wykonywanie logiki backendowej
- **Firebase Cloud Messaging:** Powiadomienia push
- **Firebase App Check:** Ochrona przed nadużyciami i botami
- **Firebase Performance Monitoring:** Monitorowanie wydajności aplikacji
- **Firebase Crashlytics:** Raporty awarii

**Polityka Prywatności Firebase:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Monitorowanie Błędów)

Korzystamy z Sentry do śledzenia błędów i wydajności. Gromadzone dane obejmują:

- Ślady błędów
- Kontekst techniczny (system operacyjny, wersja aplikacji)

**Polityka Prywatności Sentry:** https://sentry.io/privacy/

### 4.3. API Riot Games

Gdy łączysz swoje konto Riot Games, pobieramy twoje statystyki gry przez oficjalne API Riot Games. Te dane są wykorzystywane wyłącznie do wyświetlania twojego profilu i poprawy dopasowywania.

**Polityka Prywatności Riot Games:** https://www.riotgames.com/en/privacy-notice

### 4.4. Email Service Provider (Marketing & Survey Communications)

To deliver the marketing, re-engagement, and uninstall/churn-survey emails described in §5.6, Jynx uses a third-party email service provider (ESP) acting as a processor (GDPR Art. 28; LGPD Art. 39 — operador). The ESP processes your email address and minimal delivery data (e.g., send/bounce status) solely on Jynx's documented instructions, under a signed Data Processing Agreement.

- **ESP identity, role, and location:** Brevo (Brevo SAS, Paris, France) — our Email Service Provider and data processor under a signed Data Processing Agreement. Brevo Privacy Policy: https://www.brevo.com/legal/privacypolicy/
- **Sub-processors:** Brevo's current list of sub-processors is published in its Data Processing Agreement (Terms of Use): https://www.brevo.com/legal/termsofuse/
- **International transfer basis:** See §9. Brevo is headquartered in France (EU). Transfers to Brevo therefore benefit from the EU's protection regime under GDPR and, for Brazilian users, the ANPD adequacy decision for the EU (Resolution nº 32/2026) — no SCCs or additional mechanism are required.

We do not sell your personal data. No tracking pixels or hidden analytics are embedded in marketing emails without a separate legal basis disclosed in §5.6.

### 4.5. LiveKit Cloud (mowa w czasie rzeczywistym)

Jynx korzysta z LiveKit Cloud jako podmiotu przetwarzającego (RODO art. 28; LGPD art. 39 — operador) na podstawie podpisanej umowy powierzenia przetwarzania danych, w celu obsługi infrastruktury medialnej czasu rzeczywistego, która przekierowuje dźwięk pokoi głosowych między uczestnikami. LiveKit obsługuje SFU (Selective Forwarding Unit), która przekazuje strumień audio każdego uczestnika pozostałym w czasie rzeczywistym.

Jynx nie włącza funkcji nagrywania, transkrypcji, Agent Insights ani Egress w LiveKit. Dźwięk pokoi głosowych jest przekierowywany w czasie rzeczywistym przez SFU (Selective Forwarding Unit) LiveKit i nie jest nagrywany, przechowywany ani utrwalany ani przez Jynx, ani przez LiveKit.

LiveKit zachowuje jednak operacyjne metadane sesji — takie jak tożsamości uczestników, identyfikatory pokoi, czasy połączeń i metryki jakości — na potrzeby rozliczeń, zapobiegania nadużyciom i operacyjne, zgodnie ze swoim aneksem do umowy o przetwarzaniu danych. Metadane te nie są wykorzystywane do identyfikacji użytkownika poza platformą ani do celów reklamowych.

### 4.6. App Store / Google Play (In-App Purchases and Subscriptions)

Jynx+ subscriptions and Founder Packs are sold in-app through Apple's App Store and Google Play, which act as the merchant of record for these purchases (see the Terms of Service, Section 8). Payment instrument data (e.g., card details) is collected and processed solely by Apple/Google under their respective privacy policies; Jynx does not collect, receive, or store any payment instrument data.

Via our billing provider RevenueCat (a processor acting under a signed Data Processing Agreement; GDPR Art. 28; LGPD Art. 39 — operador), Jynx receives only the information necessary to deliver what you purchased: your subscription and entitlement status (e.g., whether Jynx+ is active and its renewal date), the Founder Pack tier purchased, and transaction identifiers. This data is retained for as long as necessary to provide the Service and to meet accounting and record-keeping obligations (§6), and is used solely to grant and maintain your entitlements and to prevent fraud. RevenueCat is established in the United States; transfers of personal data to RevenueCat rely on the EU-US Data Privacy Framework (for RevenueCat entities self-certified under the DPF) or on standard contractual clauses where the DPF does not apply. The applicable transfer mechanism for Brazilian users' data is confirmed in our Records of Processing Activities (see §9).

- Apple Privacy Policy: https://www.apple.com/legal/privacy/
- Google Privacy Policy: https://policies.google.com/privacy
- RevenueCat Privacy Policy: https://www.revenuecat.com/privacy

### 4.7. Specialized Child-Safety Technology Providers

To help detect known child sexual abuse material (see §5.8), Jynx works with specialized child-safety technology providers acting as processors (GDPR Art. 28; LGPD Art. 39 — operador). These providers receive only irreversible hashes derived from images — never the images themselves — and perform the hash matching in the EU region, solely for child-safety detection on Jynx's documented instructions. Deriving the hash from the image happens inside Jynx's own Google Cloud infrastructure (see §9).

### 4.8. Cloud Image-Moderation Provider (AWS)

To keep the platform safe, profile pictures and gallery photos are screened by an automated image-classification service — Amazon Rekognition, provided by Amazon Web Services (AWS), acting as a processor (GDPR Art. 28; LGPD Art. 39 — operador). For this purpose the image is transmitted to AWS and analyzed by machine learning for inappropriate content (for example nudity or explicit material); the outcome is a machine-generated label and confidence score handled under our moderation process (see the Child Safety Policy). This processing is used solely for content moderation and safety — never for profiling, advertising, or any other purpose. AWS processes this data in the AWS region configured for the service (currently São Paulo, Brazil); the transfer safeguards in §9 apply. As with the rest of the Service, the image is handled by Jynx's own Google Cloud infrastructure before being relayed to AWS (see §9).

### 4.9. Advertising Attribution (Meta, Apple ATT, Google Play Install Referrer)

To measure whether our app installs result from marketing, we use advertising- and attribution technologies, subject to your consent where required: the Meta (Facebook) App Events SDK (Meta Platforms Ireland) and the Google Play Install Referrer API. On Apple devices the Meta SDK is initialized only after you grant App Tracking Transparency (ATT) permission; without that grant no advertising identifier (IDFA) is collected and the SDK is not initialized. On Android, the Google Play Install Referrer API tells us whether your install originated from a store listing or campaign link, and the advertising identifier (GAID) is used in accordance with your device's advertising-ID settings. The events sent to Meta are limited to app activation and app-event metadata (including, where you are signed in, your app user identifier, which is cleared from the SDK when you log out), processed on Jynx's instructions for attribution and campaign measurement.

Meta Platforms Ireland processes this data as our processor for the attribution purpose above; Meta Platforms, Inc. may additionally act as an independent controller for its own legitimate purposes under its own terms (Meta's Data Processing Terms and its privacy policy at https://www.facebook.com/privacy/policy). Transfers to the United States rely on the EU-US Data Privacy Framework for self-certified Meta entities or on standard contractual clauses (§9). You can refuse or revoke ATT permission or reset your advertising ID at any time in your device settings; refusal does not affect your use of Jynx.

### 4.10. Creator (Partner) Program — KYC and Payouts

If you join the Jynx Creator (partner) program, we process the identity, tax, and payout information the program requires: your CPF or CNPJ (validated in-app), the payout rail you choose — PayPal (identified by email), Wise bank transfer (Brazil), or a Pix key — and your campaign performance records (attributed sign-ups; see §10 referrals). Payout records are kept in pseudonymous form (§10). The program is governed by the versioned Creator Referral Terms and Self-Billing Mandate you accept at enrollment (see the Terms of Service §15).

Payouts are executed through the payment institution operating the rail you chose: PayPal or Wise receive the transfer instructions and the data they need to verify your identity, prevent fraud, and meet their regulatory obligations, acting under their own terms as independent payment institutions (their privacy policies are published on their websites); a Pix payout is a transfer initiated by Jynx Group to the Pix key you provided. The applicable international-transfer safeguards are described in §9.

### 4.11. AI Features

**Avatar generation.** The avatar quiz can generate stylized avatar proposals for your profile. Generation currently runs on Cloudflare Workers AI (Cloudflare, Inc., processor) on Jynx's documented instructions; if the underlying engine changes, this section will be updated before or with the change. The inputs are your quiz answers and play-style preferences — never your photos — together with your user identifier; proposals are returned to the app as PNG or WebP images and are retained for up to 30 days so you can retrieve them, after which they are deleted. Generated images are synthetic — they are not photographs of you — and are subject to the same moderation as other images (§4.8).

**Companion messages (Quimera).** Some companion-app messages are composed or enriched by a generative AI system (Google Gemini, processor). Where a message is AI-generated, it is labeled as such; you are always informed when you are interacting with an AI-generated element, in accordance with EU AI Act Art. 50(1).

## 5. Wykorzystanie Danych

Wykorzystujemy twoje dane do:

### 1. Świadczenia Naszych Usług:

- Tworzenia i zarządzania twoim kontem
- Umożliwienia połączenia z innymi graczami
- Ułatwienia tworzenia zespołów i organizacji sesji gaming

### 2. Personalizacji:

- Rekomendacji kompatybilnych kolegów (dopasowanie na podstawie gry, rangi, stylu)
- Wyświetlania odpowiednich treści

### 3. Komunikacji:

- Wysyłania ważnych powiadomień (znalezione dopasowania, otrzymane wiadomości)

Marketing, re-engagement, and uninstall/churn-survey emails are described separately in §5.6 Marketing Communications and are not covered by this transactional category.

### 4. Usprawniania Usługi:

- Analizy wykorzystania w celu poprawy funkcji
- Identyfikacji i naprawiania błędów
- Optymalizacji wydajności
- Generate avatar proposals and companion-message drafts using AI processors (§4.11)

### 5. Bezpieczeństwa i Zgodności:

- Zapobiegania oszustwom i nadużyciom
- Egzekwowania naszych warunków użytkowania
- Przestrzegania zobowiązań prawnych

We may publish anonymized, aggregated statistics derived from app usage (for example, how players form duos). These statistics never identify individual users.

### 5.6. Marketing Communications

In addition to the operational notifications described in §5.3, we may send you marketing and re-engagement communications by email, including: product updates and feature announcements about the Jynx app; newsletters; re-engagement messages inviting you back to the app; and short uninstall or churn feedback surveys (e.g., "Why did you stop using Jynx?"). These communications are distinct from transactional/service notifications.

**Legal basis — European Union / EEA users (GDPR + ePrivacy).** Marketing and re-engagement emails to EU/EEA users are sent on the basis of your prior explicit opt-in consent (ePrivacy Directive Art. 13(1), transposed in France by Article L. 34-5 of the Code des postes et des communications électroniques; GDPR Art. 6(1)(a) and Art. 7). Following the launch of paid subscriptions (Jynx+) and one-time in-app purchases (Founder Packs), the Service is now a remunerated service, and those purchases constitute a "sale" within the meaning of the CJEU judgment C-654/23 (13 Nov 2025). The "soft opt-in" exception of ePrivacy Art. 13(2) is therefore in principle available to us for similar products and services to existing customers. As a conservative posture, however, we continue to rely on your prior explicit opt-in consent; we will only begin to rely on the soft-opt-in basis following a documented reassessment recorded in our Records of Processing Activities and an updated notice to you.

**Legal basis — Brazilian users (LGPD).** For Brazilian users, marketing and re-engagement communications rely on two alternative legal bases:

1. **Consent (LGPD Art. 7, I and Art. 8)** — captured as a separate, un-ticked, purpose-specific opt-in at signup or in-app, recorded with date, form version, and language; you may withdraw it at any time, free of charge, without losing access to the Service (Art. 8 §5). Consent is the basis used for any communication to prospects, cold outreach, or cross-sell/partner offers beyond the core Jynx app.
2. **Legitimate interest (LGPD Art. 7, IX, elaborated by Art. 10)** — used only for existing or recently-lapsed users receiving re-engagement messages, product updates about the same Jynx app, or a single short churn/uninstall feedback survey. Before relying on this basis, Jynx conducts and documents a Legitimate Interests Assessment (LIA) following the three-phase test of the ANPD Legitimate Interest Guide (2 Feb 2024): (i) purpose, (ii) necessity, and (iii) balancing and safeguards. The LIA records the prior relationship, the user's reasonable expectations, the purpose, the least-intrusive means chosen, and the opt-out channel. Legitimate interest is not used for cold/unsolicited email, unrelated cross-sell, purchased lists, or persistent messaging to departed users after the relationship has clearly ended.

**Right to object / opt-out.** Brazilian users may at any time oppose this processing and opt out via the mechanisms in §7.5 and §7.6 (one-click unsubscribe in every email, or the in-app communications-preferences toggle), without cost and without terminating the account. We honor opt-out requests in real time. The Brazilian Consumer Defense Code (CDC, Law 8.078/90, in particular Art. 39 III) prohibits unsolicited or abusive commercial messaging; we therefore strictly respect opt-outs and apply frequency caps, since persistent or ignored-opt-out sending may be treated as an abusive practice.

**Uninstall / churn surveys.** Wherever operationally feasible we ask uninstall/churn questions in-app at the uninstall moment (no email retention required). Where an email survey is sent, the survey contains no promotional or re-engagement content; we send a maximum of one (1) survey per user within approximately 60 days of account deletion or uninstall; the email address is then deleted or anonymized in accordance with §6; and users who have submitted an erasure / right-to-be-forgotten request (§7.3) are never re-contacted and are placed on a permanent suppression list (see §6 and the Terms of Service §7.2).

**Email tracking.** Marketing emails do not embed tracking pixels or hidden analytics that process personal data without a separate legal basis. Where any open/click tracking is introduced, it will be disclosed here and based on consent (LGPD Art. 8; ePrivacy Art. 5(3)), consistent with the ANPD guidance on tracking technologies (18 Oct 2022).

**Frequency.** Marketing emails are subject to internal frequency caps; you can reduce or turn them off at any time via the in-app communications-preferences toggle or by clicking unsubscribe in any message.

### 5.7. Bezpieczeństwo społeczności i omijanie banów

Aby chronić naszą społeczność przed nadużyciami, używamy identyfikatorów urządzenia i sygnałów integralności urządzenia do wykrywania i zapobiegania próbom obejścia zawieszenia lub bana. Jeśli powiążemy urządzenie z zablokowanym kontem, urządzenie to może zostać pozbawione możliwości tworzenia nowych kont lub logowania się. Jeśli uważasz, że stało się to omyłkowo, możesz odwołać się, kontaktując się z support@jynx.app.

Device-integrity signals are collected and evaluated with the assistance of Talsec freeRASP, an anti-tampering and device-integrity library embedded in the app. freeRASP operates on your device: it detects locally threats such as rooted devices, runtime hooking, and unlocked bootloaders, and reports its findings to us through our own error-monitoring provider (Sentry, §4.2) for abuse prevention; it does not send your data to any Talsec-operated service.

### 5.8. Child-Safety Image Analysis

To help protect children and meet our legal-reporting duties, Jynx uses automated systems to analyze images shared in direct messages by comparing hashes derived from those images against databases of known child sexual abuse material. For this analysis, the images themselves are not transmitted to third parties — only irreversible hashes are (see §4.7). Profile pictures are screened separately, by the image-moderation processing described in §4.8. This analysis exists solely for child-safety detection and our legal-reporting duties; it is not used for profiling, advertising, or any other purpose. Matches are handled as described in our [Child Safety Policy](/child-safety.html).

## 6. Przechowywanie Danych

### 6.1. Okresy Przechowywania

- **Dane Profilowe:** Przechowywane tak długo, jak twoje konto jest aktywne
- **Logi i Analityka:** Firebase Analytics: 14 miesięcy (polityka Firebase)
- **Marketing email addresses (consent-based):** Retained for as long as you have not opted out or deleted your account, plus a hashed record on the suppression list (see below) to ensure we do not re-contact you
- **Uninstall / churn survey email addresses:** Retained for a maximum of 60 days after the survey is sent (or, if no survey is sent, 60 days after uninstall/deletion), after which the address is deleted or irreversibly anonymized. No more than one (1) survey email is sent per user
- **Re-engagement of recently-lapsed accounts (LGPD legitimate-interest basis, Brazilian users only):** Consistent with CNIL guidance and the reasonable-expectations test, Jynx may use the email address of a recently-lapsed (non-erasure) account for re-engagement for up to 3 years after the last meaningful interaction, after which it is deleted or anonymized

### 6.2. Usuwanie Danych

Możesz w każdej chwili poprosić o usunięcie swojego konta (patrz Sekcja 7).

**Przechowywanie Prawne:** Niektóre dane mogą być przechowywane dłużej w celu wypełnienia naszych zobowiązań prawnych (np. zgłoszenia bezpieczeństwa, transakcje finansowe).

When you delete your account, we purge your email address from our marketing CRM and email service provider. If you exercise the right to erasure (§7.3 / GDPR Art. 17 / LGPD Art. 18(VI) for consent-based data), your email address is added to a permanent hashed suppression list so that it is never re-used for marketing, re-engagement, or surveys — including protection against re-import via any third-party or purchased list. Note: under the LGPD, Art. 18(VI) deletion applies to data processed on the basis of consent; data processed on the basis of legitimate interest (Art. 7 IX) is instead governed by the purpose-limitation principle (Art. 6 II and §2) and your right to request cessation of processing (Art. 18 §2).

## 7. Twoje Prawa (RODO)

Zgodnie z RODO, masz następujące prawa:

### 7.1. Prawo Dostępu

Możesz poprosić o kopię wszystkich danych, które o tobie posiadamy.

**Jak skorzystać z tego prawa:** Ustawienia > Prywatność > "Eksportuj Moje Dane"

Proces generuje plik JSON zawierający wszystkie twoje dane (profil, wiadomości, statystyki, itp.). Link do pobrania jest ważny przez 7 dni.

### 7.2. Prawo do Sprostowania

Możesz w każdej chwili modyfikować informacje w swoim profilu z poziomu aplikacji (nazwa użytkownika, biografia, preferencje, itp.).

### 7.3. Prawo do Usunięcia ("Prawo do Bycia Zapomnianym")

Możesz poprosić o usunięcie swojego konta.

**Jak skorzystać z tego prawa:** Ustawienia > Strefa Niebezpieczna > "Usuń Moje Konto"

#### Automatyczny Proces Usuwania:

1. Dwuetapowe potwierdzenie, aby zapobiec przypadkowym usunięciom
2. Natychmiastowa anonimizacja twoich danych osobowych (Firestore)
3. Usunięcie twojego konta Firebase Authentication (automatycznie cofa wszystkie tokeny OAuth)
4. Podany jest zanonimizowany identyfikator jako odniesienie
5. Opcja usunięcia twoich wiadomości i wygenerowanych treści

**Ważne:** Usunięcie jest nieodwracalne. Niektóre zanonimizowane dane mogą być zachowane do celów statystycznych (zgodnie z RODO).

**Ręczne Prośby o Usunięcie:** W przypadku szczególnych próśb o usunięcie danych (np. usunięcie tylko wiadomości z konkretnej społeczności, usunięcie obrazów z Storage lub inne nietypowe przypadki), skontaktuj się z naszym Inspektorem Ochrony Danych pod adresem dpo@jynx.app. Rozpatrzymy ręczne prośby w ciągu 30 dni, zgodnie z wymogami RODO.

### 7.4. Prawo do Przenoszenia Danych

Eksport danych (Sekcja 7.1) pozwala ci pobrać dane w uporządkowanym, nadającym się do odczytu maszynowego formacie (JSON).

### 7.5. Prawo do Sprzeciwu

Możesz sprzeciwić się przetwarzaniu twoich danych do celów marketingu bezpośredniego.

- **One-click unsubscribe:** every marketing email includes a one-click unsubscribe link (RFC 8058 List-Unsubscribe-Post) honored in real time
- **In-app toggle:** Settings > Privacy > Communications Preferences
- **Email:** dpo@jynx.app

### 7.6. Prawo do Cofnięcia Zgody

Możesz cofnąć swoją zgodę na:

- **Analitykę:** Ustawienia > Prywatność > Wyłącz "Włącz Analitykę"
- **Powiadomienia Push:** Ustawienia urządzenia
- **Marketing Communications:** Newsletter, product updates, re-engagement, and uninstall/churn surveys — withdrawable via one-click unsubscribe, the in-app communications-preferences toggle, or dpo@jynx.app, without terminating your account

**Uwaga:** Tokeny OAuth (Google, Apple) są automatycznie cofane po usunięciu konta (Sekcja 7.3).

Withdrawal does not affect the lawfulness of processing carried out before withdrawal (GDPR Art. 7(3); LGPD Art. 8 §5), and withdrawing consent never requires you to delete your account.

### 7.7. Additional LGPD Rights (Brazilian Users)

In addition to the rights above, data subjects located in Brazil have the following rights under LGPD Art. 18: confirmation of the existence of processing; access to the data; correction of incomplete, inaccurate, or out-of-date data; anonymization, blocking, or deletion of unnecessary or excessive data (Art. 18(VI) applies to data processed on the basis of consent); portability to another service or product provider, upon request; deletion of personal data processed with consent; and information about the possibility of denying consent and the consequences of doing so.

You may exercise these rights via Settings > Privacy or by contacting the encarregado at dpo@jynx.app. You may also lodge a complaint with the Brazilian data protection authority — the Autoridade Nacional de Proteção de Dados (ANPD) — at https://www.gov.br/anpd.

## 8. Bezpieczeństwo Danych

Wdrażamy techniczne i organizacyjne środki bezpieczeństwa, aby chronić twoje dane:

- **Szyfrowanie:** Bezpieczna komunikacja przez HTTPS
- **Reguły Bezpieczeństwa Firebase:** Ścisła kontrola dostępu do danych Firestore
- **Uwierzytelnianie:** Bezpieczne zarządzanie sesjami przez Firebase Auth
- **Walidacja Wejścia:** Zapobieganie atakom XSS przez SecureTextInput
- **Ograniczenie Częstotliwości:** Ochrona przed nadużyciami (spamowanie wiadomości, automatyczne działania)
- **Moderacja:** System zgłaszania treści i moderacji
- **Real-time voice:** Voice-room media is encrypted in transit using WebRTC DTLS-SRTP, the same standard used by mainstream voice apps; signaling between the app and our servers is over HTTPS/TLS.

No system is 100% secure. In case of a personal data breach, we will notify the competent supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of a breach that is likely to result in a risk to your rights (GDPR Art. 33), and we will communicate the breach to affected users without undue delay where it is likely to result in a high risk to you (GDPR Art. 34). For data subjects in Brazil, we will also communicate relevant security incidents to the ANPD and to you within the deadline set by the authority (LGPD Art. 48; currently 3 business days under ANPD Resolution CD/ANPD nº 15/2024).

## 9. Międzynarodowe Przekazywanie Danych

Twoje dane mogą być przekazywane i przechowywane na serwerach znajdujących się poza Unią Europejską, w tym:

- **Google Cloud / Firebase:** Korzysta z globalnej infrastruktury zgodnej z RODO
- **Amazon Web Services (image moderation):** The image-moderation processing described in §4.8 runs in AWS's São Paulo region (Brazil); transfers from the EU/EEA rely on AWS's data-processing agreement incorporating the European Commission's standard contractual clauses, together with the general guarantees below. The image is relayed to AWS through Jynx's Google Cloud infrastructure (the Google Cloud / Firebase leg above)
- **Sentry:** Serwery zlokalizowane w USA zgodne z Privacy Shield
- **Email Service Provider (ESP):** Used to deliver the marketing, re-engagement, and survey communications described in §5.6. The ESP is named in §4.4 and acts as a processor under a signed Data Processing Agreement
- **LiveKit (real-time voice, and screen share when available):** LiveKit Cloud is our processor for real-time voice (and, when the feature is available, screen-share) media under a signed Data Processing Agreement (§4.5). LiveKit Cloud routes media globally: sessions are served by LiveKit's global infrastructure without pinning to a specific region. Voice-room audio (and screen-share video when available) is routed in real time and is not recorded, stored, or persisted by Jynx or by LiveKit; LiveKit retains only the operational session metadata described in §4.5. Transfers of personal data to LiveKit rely on LiveKit's Data Processing Addendum, which incorporates GDPR terms and the European Commission's standard contractual clauses for cross-border transfers, together with the general guarantees below, which apply to LiveKit as they do to our other processors.

**Guarantees (GDPR, EU/EEA).** All transfers from the EU/EEA are covered by an adequacy decision, the EU-US Data Privacy Framework, or standard contractual clauses, together with supplementary measures where required.

**Guarantees (LGPD, Brazil).** Transfers of Brazilian users' personal data are governed by LGPD Art. 33:

- **To Jynx Group in France (controller):** Lawful under LGPD Art. 33(I) by virtue of ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (This adequacy decision is subject to reassessment by the ANPD within four years; if suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses.)
- **To Brevo in France (email ESP, processor):** Lawful under LGPD Art. 33(I) by virtue of the same ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (Subject to the same ANPD reassessment described above; if the adequacy decision is suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses with Brevo.)
- **To child-safety technology providers in the EU (hash matching, processors):** Covered by the same ANPD Resolution CD/ANPD nº 32/2026 EU adequacy decision as the legs above — the providers receive only irreversible hashes and perform the matching in the EU region (§4.7)
- **To AWS in Brazil (image moderation, processor):** The AWS Rekognition hop stays in-country — it runs in AWS's São Paulo region (§4.8). The image is first relayed through Jynx's Google Cloud infrastructure, which is covered by the general Google Cloud / Firebase transfer terms above

Historical note: the one-year grace period for adapting existing contracts to the ANPD SCCs ended on 23 August 2025; new processor relationships such as the ESP execute the SCCs at onboarding.

## 10. Pliki Cookie i Podobne Technologie

Nasza aplikacja mobilna nie używa plików cookie w tradycyjnym znaczeniu, ale wykorzystuje:

- **Tokeny Uwierzytelniające:** Przechowywane lokalnie w bezpieczny sposób
- **Lokalną Pamięć Podręczną:** Aby poprawić wydajność (dane profilowe, ostatnie wiadomości)

**Website.** The Jynx website (jynx.app) uses Google Analytics 4 (provided by Google) with Consent Mode v2 to understand how the site is used. Analytics storage is denied by default: until you accept the cookie banner, Google Analytics runs without cookies or local storage and Google receives only cookieless, identifier-free signals; if you accept, full measurement is enabled. Your choice — accept or decline — is stored locally on your device (browser localStorage, key "jynx-analytics-consent"). Clearing your browser storage for jynx.app makes the banner appear again so you can change your choice. Google acts as a recipient of the resulting analytics data (see §9); see §4 for our other processors and §7 for your rights.

**Invitation links.** When you open an invitation link (jynx.app/invite/…) in your browser and tap the App Store download button, the website writes that invitation link into your device clipboard, replacing its previous content. This is a standard technique for attributing app installs on iOS (which has no install-referrer mechanism): it lets the Jynx app, at first launch, propose joining with the invitation of the person who sent you the link. The website never reads your clipboard — it only writes this link — and the app reads it only once, after asking for your explicit consent. No other clipboard content is accessed or collected. If you prefer not to share it, simply decline the paste prompt and join without an invitation.

**Referrals and creator campaigns.** When you join Jynx with an invitation code — from a link, a QR code, or entered manually — we record that code with your account so we can attribute the invitation to the person or campaign that shared it, apply the associated benefits, and detect fraudulent sign-ups. This processing relies on our legitimate interests (see §13) and is subject to our anti-fraud checks; nothing changes on your side, as the same data is collected whichever kind of invitation code you use. Some invitation codes also belong to creator attribution campaigns: if the code you used is part of such a campaign, it may additionally credit that campaign. Payout records for creator campaigns are kept in pseudonymous form.

**Screen sharing (when available).** When the feature is available, you may share your device screen in a voice room. Sharing starts only after the operating system's screen-capture permission is granted and an explicit in-app acknowledgment is given. Everything visible on your screen — including notifications — is streamed live to the other participants in the room, and you are responsible for what you share. The shared video is a live media track routed like voice audio through the LiveKit SFU (§4.5, §9): it is not recorded or stored by Jynx or LiveKit, and it stops when you end the share.

## 11. Zmiany w Tej Polityce

Możemy aktualizować tę politykę prywatności. W przypadku istotnych zmian powiadomimy cię:

- Przez powiadomienie w aplikacji
- E-mailem na adres powiązany z twoim kontem

## 12. Kontakt

W przypadku pytań dotyczących tej polityki prywatności lub w celu skorzystania ze swoich praw:

- **E-mail:** dpo@jynx.app

**Organ Nadzorczy:** If you believe your rights have not been respected, you may lodge a complaint:

- **EU/EEA users:** with the CNIL (Commission Nationale de l'Informatique et des Libertés), France — https://www.cnil.fr
- **Brazilian users:** with the ANPD (Autoridade Nacional de Proteção de Dados), Brazil — https://www.gov.br/anpd

Filing a complaint with a supervisory authority does not prejudice your right to seek other judicial remedies available to you, including the mandatory consumer protections that apply in your jurisdiction (e.g., the Brazilian Consumer Defense Code, Law 8.078/90).

## 13. Zgoda

We process your personal data only where we have a lawful basis. The lawful bases we rely on, and where each is described in this Policy, are:

- Performance of a contract / provision of the Service (GDPR Art. 6(1)(b); LGPD Art. 7, V) — account, matching, and messaging (§5.1–5.3)
- Legitimate interests (GDPR Art. 6(1)(f); LGPD Art. 7, IX and Art. 10) — security, fraud prevention, service improvement, and (for Brazilian users) marketing/re-engagement/survey communications to existing or recently-lapsed users as described in §5.6, each supported by a documented balancing assessment
- Legal obligation (GDPR Art. 6(1)(c); LGPD Art. 7, II) — retention for legal purposes (§6)
- Legal obligation and legitimate interests (GDPR Art. 6(1)(c) and 6(1)(f); LGPD Art. 7, II and IX) — detection of illegal and policy-violating content, including the child-safety image analysis described in §5.8 and the image-moderation processing in §4.8, prevention of abuse and ban evasion (§5.7), and compliance with legal reporting duties. For the analysis of images shared in direct messages, Jynx also relies on the voluntary detection of online child sexual abuse permitted by Regulation (EU) 2021/1232 (the ePrivacy derogation, as currently in force).
- Consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) — analytics where you have enabled them, push notifications, and (for EU/EEA users and for Brazilian prospects/cold/cross-sell sends) marketing communications per §5.6
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Consent must be specific and informed.** Where we rely on your consent, it is given by a clear affirmative act, refers to specified purposes, and is captured separately from your acceptance of these terms (LGPD Art. 8 §1 — cláusula destacada). Generic or bundled authorizations are void under LGPD Art. 8 §4 and invalid under GDPR Art. 4(11) and Art. 7. Using Jynx does not by itself constitute consent to marketing. The burden of proving valid consent rests with Jynx (LGPD Art. 8 §2; GDPR Art. 7(1)); we therefore record the date, form version, language, and scope of each consent we collect.

**Withdrawal.** You may withdraw any consent at any time, through a procedure that is as easy as giving it and that does not require you to delete your account (LGPD Art. 8 §5; GDPR Art. 7(3)) — see §7.5 and §7.6. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. Deleting your account (§7.3) remains available at any time but is not the mechanism for withdrawing a specific consent.
