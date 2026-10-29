---
title: "Privacy Policy"
description: "जानें कि Jynx कैसे आपकी privacy को protect करता है और आपके data को handle करता है। हमारी transparent privacy policy हमारी practices और आपके अधिकारों को outline करती है।"
canonical: "https://jynx.app/hi/privacy.html"
locale: "hi"
dateModified: "2026-10-24"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Privacy Policy

आखिरी अपडेट: अक्टूबर 2026

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

## 1. परिचय

Jynx ("हम", "हमारा", "एप्लिकेशन") एक सोशल गेमिंग प्लेटफॉर्म है जो खिलाड़ियों को connect करने, teams बनाने और साथ खेलने की अनुमति देता है।

### कानूनी जानकारी:

- **कानूनी इकाई:** Jynx Group
- **Privacy Officer संपर्क:** dpo@jynx.app
- **EU / EEA jurisdiction:** France, European Union — this Privacy Policy complies with Regulation (EU) 2016/679 (GDPR) and Directive 2002/58/EC (ePrivacy), as transposed in France.
- **Brazilian jurisdiction:** This Privacy Policy also complies with Brazilian Law nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), which applies to Jynx's processing of personal data of data subjects located in Brazil under Art. 3 of the LGPD, regardless of Jynx having no establishment in Brazil.
- **Publication (LCEN):** Directeur de la publication: Antoine Haie. This website (jynx.app) is hosted by GitHub Pages and delivered through the Cloudflare content-delivery network.

For the purposes of the LGPD, Jynx Group is the controller (controlador) of your personal data. Our Data Protection Officer acts as the encarregado (DPO) and may be reached at dpo@jynx.app for any request relating to the LGPD. Although Jynx qualifies as a pequeno agente de tratamento de dados pessoais (small-scale agent) under ANPD Resolution CD/ANPD nº 2/2022, which exempts Jynx from the obligatory appointment of an encarregado, Jynx voluntarily maintains this published communication channel.

यह privacy policy बताती है कि जब आप हमारे एप्लिकेशन का उपयोग करते हैं तो हम कैसे आपके personal data को collect, use, share और protect करते हैं।

## 2. न्यूनतम आयु और सत्यापन

हमारा एप्लिकेशन 18 वर्ष और उससे अधिक आयु के users के लिए आरक्षित है।

अपना account बनाते समय, हम आपसे आपकी जन्म तिथि प्रदान करने के लिए कहते हैं। यदि आपकी आयु 18 वर्ष से कम है, तो आप account नहीं बना पाएंगे या हमारी services का उपयोग नहीं कर पाएंगे।

Marketing to minors. Jynx is restricted to users aged 18 and over and applies an automated age gate. If we subsequently identify that a user is under 18 (LGPD Art. 14; GDPR Art. 8), we will immediately terminate the account, exclude the user from all marketing, re-engagement, and survey communications, and delete the associated marketing data. We never knowingly collect marketing consent from a minor.

## 3. एकत्रित डेटा

### 3.1. Registration और Profile Data

आपका account बनाते और manage करते समय हम निम्नलिखित जानकारी एकत्र करते हैं:

#### Authentication जानकारी:

- Email (email/password accounts के लिए)
- Username/nickname
- Profile photo (वैकल्पिक)
- Social login identifiers (Google, Apple) if you use these methods
- Discord identifiers (your Discord user ID) if you choose to connect your Discord account for the Discord integration — the connection uses Discord's identify-only OAuth and is not a sign-in method; you can disconnect it at any time
- Guest browsing (when available): you may explore the public parts of Jynx without creating an account; in guest mode we process only a locally-stored guest identifier and the technical data in §3.3 needed to serve the app — no profile is created and no account data is retained. To match, chat, or join communities you must create an account

#### Profile जानकारी:

- जन्म तिथि (उम्र सत्यापन के लिए)
- देश और timezone
- बोली जाने वाली भाषाएं
- Biography (वैकल्पिक)
- गेमिंग preferences और availability
- यूनीक handle (private friend discovery के लिए स्वचालित रूप से generated)

### 3.2. Gaming Data

आपको compatible teammates खोजने में मदद करने के लिए, हम एकत्र करते हैं:

#### Game Profiles:

- आपके द्वारा खेले जाने वाले games
- Levels, ranks और game statistics
- पसंदीदा champions/characters
- Play style

#### Riot Games API Integration:

हम Riot Games API से retrieve करते हैं (आपकी सहमति से):

- Summoner name और Riot ID
- Rank और match history (League of Legends, Valorant, आदि)
- Champion statistics
- हाल की match history

**एकत्र करने का कारण:** आपकी player profile display करना और अन्य players के साथ matching में सुधार करना।

### 3.3. Usage और Technical Data

हम स्वचालित रूप से कुछ technical data एकत्र करते हैं:

#### Analytics और Performance:

- **Firebase Performance Monitoring:** App startup time, interface fluidity
- **Sentry:** Error और performance reports (personal data anonymization के साथ)
- **Firebase Crashlytics:** Crash reports

#### Device जानकारी:

- Device type और model
- Operating system version
- एप्लिकेशन version
- डिवाइस पहचानकर्ता और डिवाइस-अखंडता संकेत (देखें §5.7)

#### User Behavior:

- देखी गई screens और उपयोग की गई features
- एप्लिकेशन में बिताया गया समय
- Interface interactions

आप Settings > Privacy > "Enable Analytics" में analytics data collection को disable कर सकते हैं।

### 3.4. Communication Data

- **Messages:** Community chats में messages, users के बीच private messages, conversation history
- **Notifications:** FCM tokens (Firebase Cloud Messaging) push notifications के लिए

### 3.5. User Generated Content

- Upload की गई photos (profile pictures, अतिरिक्त photos) and images shared in direct messages
- Security और moderation reports
- Cosmetic preferences (avatars, badges)

### 3.6. वॉइस रूम ऑडियो डेटा

Jynx रीयल-टाइम वॉइस रूम की सुविधा देता है, जिससे आप खेलते समय अन्य प्रतिभागियों से बात कर सकते हैं। वॉइस रूम का ऑडियो आपके माइक्रोफ़ोन से तभी कैप्चर होता है जब आप ऑपरेटिंग सिस्टम की माइक्रोफ़ोन अनुमति देते हैं और स्पष्ट रूप से किसी रूम में शामिल होते हैं; इन दोनों चरणों से पहले कोई ऑडियो कैप्चर नहीं किया जाता।

Jynx, LiveKit की रिकॉर्डिंग, ट्रांसक्रिप्शन, Agent Insights या Egress सुविधाएँ सक्रिय नहीं करता। वॉइस रूम का ऑडियो LiveKit की SFU (Selective Forwarding Unit) द्वारा रीयल-टाइम में रूट किया जाता है और न तो Jynx और न ही LiveKit द्वारा रिकॉर्ड, संग्रहीत या सुरक्षित किया जाता है।

जब आप किसी वॉइस रूम में बोलते हैं, तो आपका ऑडियो उस रूम के अन्य प्रतिभागियों को रीयल-टाइम में भेजा जाता है, ठीक वैसे ही जैसे अन्य वॉइस-चैट ऐप्स में वॉइस काम करती है।

वॉइस रूम का ऑडियो आपकी सहमति से संसाधित होता है: कोई भी ऑडियो कैप्चर होने से पहले आप माइक्रोफ़ोन की अनुमति देते हैं और स्पष्ट रूप से रूम में शामिल होते हैं। आप रूम छोड़कर या अपने डिवाइस की सेटिंग्स में माइक्रोफ़ोन की अनुमति रद्द करके किसी भी समय अपनी सहमति वापस ले सकते हैं।

## 4. Third-Party Services और Data Sharing

### 4.1. Firebase Services (Google)

हम निम्नलिखित Firebase services का उपयोग करते हैं, सभी GDPR compliant:

- **Firebase Authentication:** Secure user account management
- **Cloud Firestore:** आपके profile और game data का storage
- **Firebase Storage:** आपकी profile images को hosting
- **Cloud Functions:** Secure backend logic execution
- **Firebase Cloud Messaging:** Push notifications
- **Firebase App Check:** Abuse और bots से protection
- **Firebase Performance Monitoring:** App performance monitoring
- **Firebase Crashlytics:** Crash reports

**Firebase Privacy Policy:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Error Monitoring)

हम error और performance tracking के लिए Sentry का उपयोग करते हैं। एकत्रित data में शामिल है:

- Error traces
- Technical context (OS, app version)

**Sentry Privacy Policy:** https://sentry.io/privacy/

### 4.3. Riot Games API

जब आप अपना Riot Games account link करते हैं, तो हम official Riot Games API के माध्यम से आपकी game statistics retrieve करते हैं। यह data केवल आपकी profile display करने और matching में सुधार के लिए उपयोग किया जाता है।

**Riot Games Privacy Policy:** https://www.riotgames.com/en/privacy-notice

### 4.4. Email Service Provider (Marketing & Survey Communications)

To deliver the marketing, re-engagement, and uninstall/churn-survey emails described in §5.6, Jynx uses a third-party email service provider (ESP) acting as a processor (GDPR Art. 28; LGPD Art. 39 — operador). The ESP processes your email address and minimal delivery data (e.g., send/bounce status) solely on Jynx's documented instructions, under a signed Data Processing Agreement.

- **ESP identity, role, and location:** Brevo (Brevo SAS, Paris, France) — our Email Service Provider and data processor under a signed Data Processing Agreement. Brevo Privacy Policy: https://www.brevo.com/legal/privacypolicy/
- **Sub-processors:** Brevo's current list of sub-processors is published in its Data Processing Agreement (Terms of Use): https://www.brevo.com/legal/termsofuse/
- **International transfer basis:** See §9. Brevo is headquartered in France (EU). Transfers to Brevo therefore benefit from the EU's protection regime under GDPR and, for Brazilian users, the ANPD adequacy decision for the EU (Resolution nº 32/2026) — no SCCs or additional mechanism are required.

We do not sell your personal data. No tracking pixels or hidden analytics are embedded in marketing emails without a separate legal basis disclosed in §5.6.

### 4.5. LiveKit Cloud (रीयल-टाइम वॉइस)

Jynx, हस्ताक्षरित डेटा प्रोसेसिंग एग्रीमेंट के तहत प्रोसेसर (GDPR अनुच्छेद 28; LGPD अनुच्छेद 39 — operador) के रूप में LiveKit Cloud का उपयोग करता है, ताकि प्रतिभागियों के बीच वॉइस रूम का ऑडियो रूट करने वाली रीयल-टाइम मीडिया इंफ़्रास्ट्रक्चर संचालित की जा सके। LiveKit, SFU (Selective Forwarding Unit) चलाता है, जो प्रत्येक प्रतिभागी के ऑडियो स्ट्रीम को रीयल-टाइम में अन्य प्रतिभागियों तक अग्रेषित करता है।

Jynx, LiveKit की रिकॉर्डिंग, ट्रांसक्रिप्शन, Agent Insights या Egress सुविधाएँ सक्रिय नहीं करता। वॉइस रूम का ऑडियो LiveKit की SFU (Selective Forwarding Unit) द्वारा रीयल-टाइम में रूट किया जाता है और न तो Jynx और न ही LiveKit द्वारा रिकॉर्ड, संग्रहीत या सुरक्षित किया जाता है।

LiveKit अपने डेटा प्रोसेसिंग एडेंडम के तहत बिलिंग, दुरुपयोग रोकने और परिचालन उद्देश्यों के लिए सत्र का परिचालन मेटाडेटा — जैसे प्रतिभागी पहचान, रूम पहचानकर्ता, कनेक्शन समय और गुणवत्ता मीट्रिक — अवश्य रखता है। इस मेटाडेटा का उपयोग प्लेटफ़ॉर्म के बाहर आपकी पहचान करने या विज्ञापन के लिए नहीं किया जाता।

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

## 5. Data का उपयोग

हम आपके data का उपयोग इसके लिए करते हैं:

### 1. हमारी Services प्रदान करना:

- आपका account बनाना और manage करना
- आपको अन्य players से connect करने की अनुमति देना
- Team creation और gaming session organization को facilitate करना

### 2. Personalization:

- Compatible teammates की recommend करना (game-based, rank, style matching)
- Relevant content display करना

### 3. Communication:

- आपको महत्वपूर्ण notifications भेजना (matches मिलने पर, messages प्राप्त होने पर)

Marketing, re-engagement, and uninstall/churn-survey emails are described separately in §5.6 Marketing Communications and are not covered by this transactional category.

### 4. Service में सुधार:

- Features में सुधार के लिए usage का analyze करना
- Bugs को identify और fix करना
- Performance को optimize करना
- Generate avatar proposals and companion-message drafts using AI processors (§4.11)

### 5. Security और Compliance:

- Fraud और abuse को prevent करना
- हमारे terms of use को enforce करना
- कानूनी दायित्वों का पालन करना

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

### 5.7. समुदाय सुरक्षा और प्रतिबंध से बचाव

हमारे समुदाय को दुरुपयोग से बचाने में मदद के लिए, हम निलंबन या प्रतिबंध को दरकिनार करने के प्रयासों का पता लगाने और उन्हें रोकने के लिए डिवाइस पहचानकर्ताओं और डिवाइस-अखंडता संकेतों का उपयोग करते हैं। यदि हम किसी डिवाइस को प्रतिबंधित खाते से जोड़ते हैं, तो उस डिवाइस को नए खाते बनाने या साइन इन करने से रोका जा सकता है। यदि आपको लगता है कि यह गलती से हुआ है, तो आप support@jynx.app पर संपर्क करके अपील कर सकते हैं।

Device-integrity signals are collected and evaluated with the assistance of Talsec freeRASP, an anti-tampering and device-integrity library embedded in the app. freeRASP operates on your device: it detects locally threats such as rooted devices, runtime hooking, and unlocked bootloaders, and reports its findings to us through our own error-monitoring provider (Sentry, §4.2) for abuse prevention; it does not send your data to any Talsec-operated service.

### 5.8. Child-Safety Image Analysis

To help protect children and meet our legal-reporting duties, Jynx uses automated systems to analyze images shared in direct messages by comparing hashes derived from those images against databases of known child sexual abuse material. For this analysis, the images themselves are not transmitted to third parties — only irreversible hashes are (see §4.7). Profile pictures are screened separately, by the image-moderation processing described in §4.8. This analysis exists solely for child-safety detection and our legal-reporting duties; it is not used for profiling, advertising, or any other purpose. Matches are handled as described in our [Child Safety Policy](/child-safety.html).

## 6. Data Retention

### 6.1. Retention Periods

- **Profile Data:** जब तक आपका account active है तब तक retained
- **Logs और Analytics:** Firebase Analytics: 14 महीने (Firebase policy)
- **Marketing email addresses (consent-based):** Retained for as long as you have not opted out or deleted your account, plus a hashed record on the suppression list (see below) to ensure we do not re-contact you
- **Uninstall / churn survey email addresses:** Retained for a maximum of 60 days after the survey is sent (or, if no survey is sent, 60 days after uninstall/deletion), after which the address is deleted or irreversibly anonymized. No more than one (1) survey email is sent per user
- **Re-engagement of recently-lapsed accounts (LGPD legitimate-interest basis, Brazilian users only):** Consistent with CNIL guidance and the reasonable-expectations test, Jynx may use the email address of a recently-lapsed (non-erasure) account for re-engagement for up to 3 years after the last meaningful interaction, after which it is deleted or anonymized

### 6.2. Data Deletion

आप किसी भी समय अपने account के deletion का अनुरोध कर सकते हैं (Section 7 देखें)।

**कानूनी Retention:** कुछ data हमारे कानूनी दायित्वों का पालन करने के लिए अधिक समय तक retained किया जा सकता है (जैसे security reports, financial transactions)।

When you delete your account, we purge your email address from our marketing CRM and email service provider. If you exercise the right to erasure (§7.3 / GDPR Art. 17 / LGPD Art. 18(VI) for consent-based data), your email address is added to a permanent hashed suppression list so that it is never re-used for marketing, re-engagement, or surveys — including protection against re-import via any third-party or purchased list. Note: under the LGPD, Art. 18(VI) deletion applies to data processed on the basis of consent; data processed on the basis of legitimate interest (Art. 7 IX) is instead governed by the purpose-limitation principle (Art. 6 II and §2) and your right to request cessation of processing (Art. 18 §2).

## 7. आपके अधिकार (GDPR)

GDPR के तहत, आपके पास निम्नलिखित अधिकार हैं:

### 7.1. Access का अधिकार

आप हमारे पास मौजूद सभी data की एक copy का अनुरोध कर सकते हैं।

**इस अधिकार का उपयोग कैसे करें:** Settings > Privacy > "Export My Data"

यह process एक JSON file generate करती है जिसमें आपका सभी data होता है (profile, messages, statistics, आदि)। Download link 7 दिनों के लिए valid है।

### 7.2. Rectification का अधिकार

आप किसी भी समय एप्लिकेशन से अपनी profile information को modify कर सकते हैं (username, bio, preferences, आदि)।

### 7.3. Erasure का अधिकार ("Right to be Forgotten")

आप अपने account के deletion का अनुरोध कर सकते हैं।

**इस अधिकार का उपयोग कैसे करें:** Settings > Danger Zone > "Delete My Account"

#### Automated Deletion Process:

1. गलती से deletion को रोकने के लिए two-step confirmation
2. आपके personal data का तुरंत anonymization (Firestore)
3. आपके Firebase Authentication account का deletion (स्वचालित रूप से सभी OAuth tokens को revoke करता है)
4. Reference के रूप में एक anonymized ID प्रदान की जाती है
5. आपके messages और generated content को delete करने का option

**महत्वपूर्ण:** Deletion irreversible है। कुछ anonymized data statistical purposes के लिए retained किया जा सकता है (GDPR-compliant)।

**Manual Deletion Requests:** विशिष्ट data deletion requests के लिए (जैसे केवल एक specific community के messages delete करना, Storage images delete करना, या अन्य edge cases), कृपया हमारे Data Protection Officer को dpo@jynx.app पर संपर्क करें। हम GDPR द्वारा आवश्यक 30 दिनों के भीतर manual requests को process करेंगे।

### 7.4. Data Portability का अधिकार

Data export (Section 7.1) आपको structured, machine-readable format (JSON) में अपना data retrieve करने की अनुमति देता है।

### 7.5. Object करने का अधिकार

आप direct marketing purposes के लिए अपने data की processing पर object कर सकते हैं।

- **One-click unsubscribe:** every marketing email includes a one-click unsubscribe link (RFC 8058 List-Unsubscribe-Post) honored in real time
- **In-app toggle:** Settings > Privacy > Communications Preferences
- **Email:** dpo@jynx.app

### 7.6. Consent Withdraw करने का अधिकार

आप अपनी consent इसके लिए withdraw कर सकते हैं:

- **Analytics:** Settings > Privacy > "Enable Analytics" को disable करें
- **Push Notifications:** Device settings
- **Marketing Communications:** Newsletter, product updates, re-engagement, and uninstall/churn surveys — withdrawable via one-click unsubscribe, the in-app communications-preferences toggle, or dpo@jynx.app, without terminating your account

**नोट:** जब आप अपना account delete करते हैं तो OAuth tokens (Google, Apple) स्वचालित रूप से revoke हो जाते हैं (Section 7.3)।

Withdrawal does not affect the lawfulness of processing carried out before withdrawal (GDPR Art. 7(3); LGPD Art. 8 §5), and withdrawing consent never requires you to delete your account.

### 7.7. Additional LGPD Rights (Brazilian Users)

In addition to the rights above, data subjects located in Brazil have the following rights under LGPD Art. 18: confirmation of the existence of processing; access to the data; correction of incomplete, inaccurate, or out-of-date data; anonymization, blocking, or deletion of unnecessary or excessive data (Art. 18(VI) applies to data processed on the basis of consent); portability to another service or product provider, upon request; deletion of personal data processed with consent; and information about the possibility of denying consent and the consequences of doing so.

You may exercise these rights via Settings > Privacy or by contacting the encarregado at dpo@jynx.app. You may also lodge a complaint with the Brazilian data protection authority — the Autoridade Nacional de Proteção de Dados (ANPD) — at https://www.gov.br/anpd.

## 8. Data Security

हम आपके data को protect करने के लिए technical और organizational security measures लागू करते हैं:

- **Encryption:** HTTPS के माध्यम से secure communication
- **Firebase Security Rules:** Firestore data तक strict access control
- **Authentication:** Firebase Auth के माध्यम से secure session management
- **Input Validation:** SecureTextInput के माध्यम से XSS injection prevention
- **Rate Limiting:** Abuse से protection (spam messages, automated actions)
- **Moderation:** Content reporting और moderation system
- **Real-time voice:** Voice-room media is encrypted in transit using WebRTC DTLS-SRTP, the same standard used by mainstream voice apps; signaling between the app and our servers is over HTTPS/TLS.

No system is 100% secure. In case of a personal data breach, we will notify the competent supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of a breach that is likely to result in a risk to your rights (GDPR Art. 33), and we will communicate the breach to affected users without undue delay where it is likely to result in a high risk to you (GDPR Art. 34). For data subjects in Brazil, we will also communicate relevant security incidents to the ANPD and to you within the deadline set by the authority (LGPD Art. 48; currently 3 business days under ANPD Resolution CD/ANPD nº 15/2024).

## 9. International Data Transfers

आपका data यूरोपीय संघ के बाहर स्थित servers पर transfer और store किया जा सकता है, जिसमें शामिल हैं:

- **Google Cloud / Firebase:** GDPR compliance के साथ global infrastructure का उपयोग करता है
- **Amazon Web Services (image moderation):** The image-moderation processing described in §4.8 runs in AWS's São Paulo region (Brazil); transfers from the EU/EEA rely on AWS's data-processing agreement incorporating the European Commission's standard contractual clauses, together with the general guarantees below. The image is relayed to AWS through Jynx's Google Cloud infrastructure (the Google Cloud / Firebase leg above)
- **Sentry:** Privacy Shield compliance के साथ US-based servers
- **Email Service Provider (ESP):** Used to deliver the marketing, re-engagement, and survey communications described in §5.6. The ESP is named in §4.4 and acts as a processor under a signed Data Processing Agreement
- **LiveKit (real-time voice, and screen share when available):** LiveKit Cloud is our processor for real-time voice (and, when the feature is available, screen-share) media under a signed Data Processing Agreement (§4.5). LiveKit Cloud routes media globally: sessions are served by LiveKit's global infrastructure without pinning to a specific region. Voice-room audio (and screen-share video when available) is routed in real time and is not recorded, stored, or persisted by Jynx or by LiveKit; LiveKit retains only the operational session metadata described in §4.5. Transfers of personal data to LiveKit rely on LiveKit's Data Processing Addendum, which incorporates GDPR terms and the European Commission's standard contractual clauses for cross-border transfers, together with the general guarantees below, which apply to LiveKit as they do to our other processors.

**Guarantees (GDPR, EU/EEA).** All transfers from the EU/EEA are covered by an adequacy decision, the EU-US Data Privacy Framework, or standard contractual clauses, together with supplementary measures where required.

**Guarantees (LGPD, Brazil).** Transfers of Brazilian users' personal data are governed by LGPD Art. 33:

- **To Jynx Group in France (controller):** Lawful under LGPD Art. 33(I) by virtue of ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (This adequacy decision is subject to reassessment by the ANPD within four years; if suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses.)
- **To Brevo in France (email ESP, processor):** Lawful under LGPD Art. 33(I) by virtue of the same ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (Subject to the same ANPD reassessment described above; if the adequacy decision is suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses with Brevo.)
- **To child-safety technology providers in the EU (hash matching, processors):** Covered by the same ANPD Resolution CD/ANPD nº 32/2026 EU adequacy decision as the legs above — the providers receive only irreversible hashes and perform the matching in the EU region (§4.7)
- **To AWS in Brazil (image moderation, processor):** The AWS Rekognition hop stays in-country — it runs in AWS's São Paulo region (§4.8). The image is first relayed through Jynx's Google Cloud infrastructure, which is covered by the general Google Cloud / Firebase transfer terms above

Historical note: the one-year grace period for adapting existing contracts to the ANPD SCCs ended on 23 August 2025; new processor relationships such as the ESP execute the SCCs at onboarding.

## 10. Cookies और Similar Technologies

हमारा mobile application पारंपरिक अर्थ में cookies का उपयोग नहीं करता, लेकिन उपयोग करता है:

- **Authentication Tokens:** Secure तरीके से locally stored
- **Local Cache:** Performance में सुधार के लिए (profile data, recent messages)

**Website.** The Jynx website (jynx.app) uses Google Analytics 4 (provided by Google) with Consent Mode v2 to understand how the site is used. Analytics storage is denied by default: until you accept the cookie banner, Google Analytics runs without cookies or local storage and Google receives only cookieless, identifier-free signals; if you accept, full measurement is enabled. Your choice — accept or decline — is stored locally on your device (browser localStorage, key "jynx-analytics-consent"). Clearing your browser storage for jynx.app makes the banner appear again so you can change your choice. Google acts as a recipient of the resulting analytics data (see §9); see §4 for our other processors and §7 for your rights.

**Invitation links.** When you open an invitation link (jynx.app/invite/…) in your browser and tap the App Store download button, the website writes that invitation link into your device clipboard, replacing its previous content. This is a standard technique for attributing app installs on iOS (which has no install-referrer mechanism): it lets the Jynx app, at first launch, propose joining with the invitation of the person who sent you the link. The website never reads your clipboard — it only writes this link — and the app reads it only once, after asking for your explicit consent. No other clipboard content is accessed or collected. If you prefer not to share it, simply decline the paste prompt and join without an invitation.

**Referrals and creator campaigns.** When you join Jynx with an invitation code — from a link, a QR code, or entered manually — we record that code with your account so we can attribute the invitation to the person or campaign that shared it, apply the associated benefits, and detect fraudulent sign-ups. This processing relies on our legitimate interests (see §13) and is subject to our anti-fraud checks; nothing changes on your side, as the same data is collected whichever kind of invitation code you use. Some invitation codes also belong to creator attribution campaigns: if the code you used is part of such a campaign, it may additionally credit that campaign. Payout records for creator campaigns are kept in pseudonymous form.

**Screen sharing (when available).** When the feature is available, you may share your device screen in a voice room. Sharing starts only after the operating system's screen-capture permission is granted and an explicit in-app acknowledgment is given. Everything visible on your screen — including notifications — is streamed live to the other participants in the room, and you are responsible for what you share. The shared video is a live media track routed like voice audio through the LiveKit SFU (§4.5, §9): it is not recorded or stored by Jynx or LiveKit, and it stops when you end the share.

## 11. इस Policy में परिवर्तन

हम इस privacy policy को update कर सकते हैं। बड़े परिवर्तनों की स्थिति में, हम आपको सूचित करेंगे:

- एक in-app notification के माध्यम से
- आपके account से जुड़े email address पर email द्वारा

## 12. हमसे संपर्क करें

इस privacy policy के बारे में किसी भी प्रश्न के लिए या अपने अधिकारों का उपयोग करने के लिए:

- **Email:** dpo@jynx.app

**Supervisory Authority:** If you believe your rights have not been respected, you may lodge a complaint:

- **EU/EEA users:** with the CNIL (Commission Nationale de l'Informatique et des Libertés), France — https://www.cnil.fr
- **Brazilian users:** with the ANPD (Autoridade Nacional de Proteção de Dados), Brazil — https://www.gov.br/anpd

Filing a complaint with a supervisory authority does not prejudice your right to seek other judicial remedies available to you, including the mandatory consumer protections that apply in your jurisdiction (e.g., the Brazilian Consumer Defense Code, Law 8.078/90).

## 13. सहमति

We process your personal data only where we have a lawful basis. The lawful bases we rely on, and where each is described in this Policy, are:

- Performance of a contract / provision of the Service (GDPR Art. 6(1)(b); LGPD Art. 7, V) — account, matching, and messaging (§5.1–5.3)
- Legitimate interests (GDPR Art. 6(1)(f); LGPD Art. 7, IX and Art. 10) — security, fraud prevention, service improvement, and (for Brazilian users) marketing/re-engagement/survey communications to existing or recently-lapsed users as described in §5.6, each supported by a documented balancing assessment
- Legal obligation (GDPR Art. 6(1)(c); LGPD Art. 7, II) — retention for legal purposes (§6)
- Legal obligation and legitimate interests (GDPR Art. 6(1)(c) and 6(1)(f); LGPD Art. 7, II and IX) — detection of illegal and policy-violating content, including the child-safety image analysis described in §5.8 and the image-moderation processing in §4.8, prevention of abuse and ban evasion (§5.7), and compliance with legal reporting duties. For the analysis of images shared in direct messages, Jynx also relies on the voluntary detection of online child sexual abuse permitted by Regulation (EU) 2021/1232 (the ePrivacy derogation, as currently in force).
- Consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) — analytics where you have enabled them, push notifications, and (for EU/EEA users and for Brazilian prospects/cold/cross-sell sends) marketing communications per §5.6
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Consent must be specific and informed.** Where we rely on your consent, it is given by a clear affirmative act, refers to specified purposes, and is captured separately from your acceptance of these terms (LGPD Art. 8 §1 — cláusula destacada). Generic or bundled authorizations are void under LGPD Art. 8 §4 and invalid under GDPR Art. 4(11) and Art. 7. Using Jynx does not by itself constitute consent to marketing. The burden of proving valid consent rests with Jynx (LGPD Art. 8 §2; GDPR Art. 7(1)); we therefore record the date, form version, language, and scope of each consent we collect.

**Withdrawal.** You may withdraw any consent at any time, through a procedure that is as easy as giving it and that does not require you to delete your account (LGPD Art. 8 §5; GDPR Art. 7(3)) — see §7.5 and §7.6. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. Deleting your account (§7.3) remains available at any time but is not the mechanism for withdrawing a specific consent.
