---
title: "개인정보 처리방침"
description: "Jynx의 개인정보 처리방침을 읽어보세요. 우리가 귀하의 정보를 수집, 사용 및 보호하는 방법을 알아보세요."
canonical: "https://jynx.app/ko/privacy.html"
locale: "ko"
dateModified: "2026-10-24"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# 개인정보 처리방침

최종 업데이트: 2026년 10월

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

## 1. 소개

Jynx('우리', '당사', '애플리케이션')는 플레이어가 연결하고, 팀을 구성하며, 함께 플레이할 수 있는 소셜 게임 플랫폼입니다.

### 법률 정보:

- **법인:** Jynx Group
- **개인정보 보호 책임자 연락처:** dpo@jynx.app
- **EU / EEA jurisdiction:** France, European Union — this Privacy Policy complies with Regulation (EU) 2016/679 (GDPR) and Directive 2002/58/EC (ePrivacy), as transposed in France.
- **Brazilian jurisdiction:** This Privacy Policy also complies with Brazilian Law nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), which applies to Jynx's processing of personal data of data subjects located in Brazil under Art. 3 of the LGPD, regardless of Jynx having no establishment in Brazil.
- **Publication (LCEN):** Directeur de la publication: Antoine Haie. This website (jynx.app) is hosted by GitHub Pages and delivered through the Cloudflare content-delivery network.

For the purposes of the LGPD, Jynx Group is the controller (controlador) of your personal data. Our Data Protection Officer acts as the encarregado (DPO) and may be reached at dpo@jynx.app for any request relating to the LGPD. Although Jynx qualifies as a pequeno agente de tratamento de dados pessoais (small-scale agent) under ANPD Resolution CD/ANPD nº 2/2022, which exempts Jynx from the obligatory appointment of an encarregado, Jynx voluntarily maintains this published communication channel.

이 개인정보 처리방침은 귀하가 우리 애플리케이션을 사용할 때 귀하의 개인 데이터를 수집, 사용, 공유 및 보호하는 방법을 설명합니다.

## 2. 최소 연령 및 확인

우리 애플리케이션은 18세 이상의 사용자를 위한 것입니다.

계정을 만들 때 생년월일을 제공해야 합니다. 18세 미만인 경우 계정을 만들거나 우리 서비스를 사용할 수 없습니다.

Marketing to minors. Jynx is restricted to users aged 18 and over and applies an automated age gate. If we subsequently identify that a user is under 18 (LGPD Art. 14; GDPR Art. 8), we will immediately terminate the account, exclude the user from all marketing, re-engagement, and survey communications, and delete the associated marketing data. We never knowingly collect marketing consent from a minor.

## 3. 수집되는 데이터

### 3.1. 등록 및 프로필 데이터

계정을 만들고 관리할 때 다음 정보를 수집합니다:

#### 인증 정보:

- 이메일(이메일/비밀번호 계정용)
- 사용자 이름/닉네임
- 프로필 사진(선택 사항)
- Social login identifiers (Google, Apple) if you use these methods
- Discord identifiers (your Discord user ID) if you choose to connect your Discord account for the Discord integration — the connection uses Discord's identify-only OAuth and is not a sign-in method; you can disconnect it at any time
- Guest browsing (when available): you may explore the public parts of Jynx without creating an account; in guest mode we process only a locally-stored guest identifier and the technical data in §3.3 needed to serve the app — no profile is created and no account data is retained. To match, chat, or join communities you must create an account

#### 프로필 정보:

- 생년월일(연령 확인용)
- 국가 및 시간대
- 사용 언어
- 자기소개(선택 사항)
- 게임 선호도 및 가용성
- 고유 핸들(비공개 친구 발견을 위해 자동 생성)

### 3.2. 게임 데이터

호환되는 팀원을 찾는 데 도움을 주기 위해 다음을 수집합니다:

#### 게임 프로필:

- 플레이하는 게임
- 레벨, 랭크 및 게임 통계
- 선호하는 챔피언/캐릭터
- 플레이 스타일

#### Riot Games API 통합:

Riot Games API에서 다음을 검색합니다(귀하의 동의 하에):

- 소환사 이름 및 Riot ID
- 랭크 및 매치 기록(League of Legends, Valorant 등)
- 챔피언 통계
- 최근 매치 기록

**수집 이유:** 플레이어 프로필을 표시하고 다른 플레이어와의 매칭을 개선합니다.

### 3.3. 사용 및 기술 데이터

특정 기술 데이터를 자동으로 수집합니다:

#### 분석 및 성능:

- **Firebase Performance Monitoring:** 앱 시작 시간, 인터페이스 유동성
- **Sentry:** 오류 및 성능 보고서(개인 데이터 익명화)
- **Firebase Crashlytics:** 충돌 보고서

#### 장치 정보:

- 장치 유형 및 모델
- 운영 체제 버전
- 애플리케이션 버전
- 기기 식별자 및 기기 무결성 신호(§5.7 참조)

#### 사용자 행동:

- 방문한 화면 및 사용된 기능
- 애플리케이션에서 보낸 시간
- 인터페이스 상호 작용

설정 > 개인정보 보호 > '분석 활성화'에서 분석 데이터 수집을 비활성화할 수 있습니다.

### 3.4. 커뮤니케이션 데이터

- **메시지:** 커뮤니티 채팅의 메시지, 사용자 간 개인 메시지, 대화 기록
- **알림:** 푸시 알림을 위한 FCM 토큰(Firebase Cloud Messaging)

### 3.5. 사용자 생성 콘텐츠

- 업로드된 사진(프로필 사진, 추가 사진) and images shared in direct messages
- 보안 및 중재 보고서
- 화장품 선호도(아바타, 배지)

### 3.6. 음성 채팅방 오디오 데이터

Jynx는 게임을 하면서 다른 참가자와 대화할 수 있는 실시간 음성 채팅방을 제공합니다. 음성 채팅방 오디오는 운영체제의 마이크 권한을 부여하고 채팅방에 명시적으로 입장한 후에만 마이크에서 캡처됩니다. 이 두 단계가 모두 완료되기 전에는 어떠한 오디오도 캡처되지 않습니다.

Jynx는 LiveKit의 녹음, 전사, Agent Insights 또는 Egress 기능을 활성화하지 않습니다. 음성 채팅방 오디오는 LiveKit의 SFU(Selective Forwarding Unit)를 통해 실시간으로 라우팅되며, Jynx나 LiveKit에 의해 녹음, 저장 또는 보존되지 않습니다.

음성 채팅방에서 말하면 오디오가 해당 채팅방의 다른 참가자에게 실시간으로 전송되며, 이는 다른 음성 채팅 앱에서 음성이 작동하는 방식과 유사합니다.

음성 채팅방 오디오는 사용자의 동의에 따라 처리됩니다. 마이크 권한을 부여하고 채팅방에 명시적으로 입장한 후에야 오디오가 캡처됩니다. 채팅방을 나가거나 기기 설정에서 마이크 권한을 철회하여 언제든지 동의를 철회할 수 있습니다.

## 4. 제3자 서비스 및 데이터 공유

### 4.1. Firebase 서비스 (Google)

다음 Firebase 서비스를 사용하며 모두 GDPR을 준수합니다:

- **Firebase Authentication:** 안전한 사용자 계정 관리
- **Cloud Firestore:** 프로필 및 게임 데이터 저장
- **Firebase Storage:** 프로필 이미지 호스팅
- **Cloud Functions:** 안전한 백엔드 로직 실행
- **Firebase Cloud Messaging:** 푸시 알림
- **Firebase App Check:** 남용 및 봇으로부터 보호
- **Firebase Performance Monitoring:** 앱 성능 모니터링
- **Firebase Crashlytics:** 충돌 보고서

**Firebase 개인정보 처리방침:** https://firebase.google.com/support/privacy

### 4.2. Sentry (오류 모니터링)

오류 및 성능 추적을 위해 Sentry를 사용합니다. 수집되는 데이터에는 다음이 포함됩니다:

- 오류 추적
- 기술 컨텍스트(OS, 앱 버전)

**Sentry 개인정보 처리방침:** https://sentry.io/privacy/

### 4.3. Riot Games API

Riot Games 계정을 연결하면 공식 Riot Games API를 통해 게임 통계를 검색합니다. 이 데이터는 프로필을 표시하고 매칭을 개선하는 데만 사용됩니다.

**Riot Games 개인정보 처리방침:** https://www.riotgames.com/ko/privacy-notice

### 4.4. Email Service Provider (Marketing & Survey Communications)

To deliver the marketing, re-engagement, and uninstall/churn-survey emails described in §5.6, Jynx uses a third-party email service provider (ESP) acting as a processor (GDPR Art. 28; LGPD Art. 39 — operador). The ESP processes your email address and minimal delivery data (e.g., send/bounce status) solely on Jynx's documented instructions, under a signed Data Processing Agreement.

- **ESP identity, role, and location:** Brevo (Brevo SAS, Paris, France) — our Email Service Provider and data processor under a signed Data Processing Agreement. Brevo Privacy Policy: https://www.brevo.com/legal/privacypolicy/
- **Sub-processors:** Brevo's current list of sub-processors is published in its Data Processing Agreement (Terms of Use): https://www.brevo.com/legal/termsofuse/
- **International transfer basis:** See §9. Brevo is headquartered in France (EU). Transfers to Brevo therefore benefit from the EU's protection regime under GDPR and, for Brazilian users, the ANPD adequacy decision for the EU (Resolution nº 32/2026) — no SCCs or additional mechanism are required.

We do not sell your personal data. No tracking pixels or hidden analytics are embedded in marketing emails without a separate legal basis disclosed in §5.6.

### 4.5. LiveKit Cloud (실시간 음성)

Jynx는 참가자 간 음성 채팅방 오디오를 라우팅하는 실시간 미디어 인프라를 운영하기 위해 서명된 데이터 처리 계약에 따라 처리자(GDPR 제28조; LGPD 제39조 — operador)로서 LiveKit Cloud를 사용합니다. LiveKit은 각 참가자의 오디오 스트림을 다른 참가자에게 실시간으로 전달하는 SFU(Selective Forwarding Unit)를 운영합니다.

Jynx는 LiveKit의 녹음, 전사, Agent Insights 또는 Egress 기능을 활성화하지 않습니다. 음성 채팅방 오디오는 LiveKit의 SFU(Selective Forwarding Unit)를 통해 실시간으로 라우팅되며, Jynx나 LiveKit에 의해 녹음, 저장 또는 보존되지 않습니다.

LiveKit은 청구, 남용 방지 및 운영 목적으로 자사의 데이터 처리 부속서(Data Processing Addendum)에 따라 참가자 신원, 채팅방 식별자, 연결 시간 및 품질 지표와 같은 운영 세션 메타데이터를 보존합니다. 이 메타데이터는 플랫폼 외부에서 사용자를 식별하거나 광고 목적으로 사용되지 않습니다.

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

## 5. 데이터 사용

귀하의 데이터를 다음 목적으로 사용합니다:

### 1. 서비스 제공:

- 계정을 만들고 관리
- 다른 플레이어와 연결할 수 있도록
- 팀 생성 및 게임 세션 조직 촉진

### 2. 개인화:

- 호환되는 팀원 추천(게임 기반, 랭크, 스타일 매칭)
- 관련 콘텐츠 표시

### 3. 커뮤니케이션:

- 중요한 알림 전송(매치 발견, 메시지 수신)

Marketing, re-engagement, and uninstall/churn-survey emails are described separately in §5.6 Marketing Communications and are not covered by this transactional category.

### 4. 서비스 개선:

- 기능을 개선하기 위한 사용 분석
- 버그 식별 및 수정
- 성능 최적화
- Generate avatar proposals and companion-message drafts using AI processors (§4.11)

### 5. 보안 및 준수:

- 사기 및 남용 방지
- 이용약관 시행
- 법적 의무 준수

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

### 5.7. 커뮤니티 안전 및 차단 회피

커뮤니티를 남용으로부터 보호하기 위해 당사는 기기 식별자와 기기 무결성 신호를 사용하여 정지 또는 차단을 우회하려는 시도를 탐지하고 차단합니다. 당사가 기기를 차단된 계정과 연관 지으면 해당 기기는 새 계정을 만들거나 로그인하지 못하도록 제한될 수 있습니다. 이것이 오류로 발생했다고 생각되시면 support@jynx.app으로 연락하여 이의를 제기할 수 있습니다.

Device-integrity signals are collected and evaluated with the assistance of Talsec freeRASP, an anti-tampering and device-integrity library embedded in the app. freeRASP operates on your device: it detects locally threats such as rooted devices, runtime hooking, and unlocked bootloaders, and reports its findings to us through our own error-monitoring provider (Sentry, §4.2) for abuse prevention; it does not send your data to any Talsec-operated service.

### 5.8. Child-Safety Image Analysis

To help protect children and meet our legal-reporting duties, Jynx uses automated systems to analyze images shared in direct messages by comparing hashes derived from those images against databases of known child sexual abuse material. For this analysis, the images themselves are not transmitted to third parties — only irreversible hashes are (see §4.7). Profile pictures are screened separately, by the image-moderation processing described in §4.8. This analysis exists solely for child-safety detection and our legal-reporting duties; it is not used for profiling, advertising, or any other purpose. Matches are handled as described in our [Child Safety Policy](/child-safety.html).

## 6. 데이터 보존

### 6.1. 보존 기간

- **프로필 데이터:** 계정이 활성화되어 있는 동안 보존
- **로그 및 분석:** Firebase Analytics: 14개월(Firebase 정책)
- **Marketing email addresses (consent-based):** Retained for as long as you have not opted out or deleted your account, plus a hashed record on the suppression list (see below) to ensure we do not re-contact you
- **Uninstall / churn survey email addresses:** Retained for a maximum of 60 days after the survey is sent (or, if no survey is sent, 60 days after uninstall/deletion), after which the address is deleted or irreversibly anonymized. No more than one (1) survey email is sent per user
- **Re-engagement of recently-lapsed accounts (LGPD legitimate-interest basis, Brazilian users only):** Consistent with CNIL guidance and the reasonable-expectations test, Jynx may use the email address of a recently-lapsed (non-erasure) account for re-engagement for up to 3 years after the last meaningful interaction, after which it is deleted or anonymized

### 6.2. 데이터 삭제

언제든지 계정 삭제를 요청할 수 있습니다(섹션 7 참조).

**법적 보존:** 일부 데이터는 법적 의무를 준수하기 위해 더 오래 보존될 수 있습니다(예: 보안 보고서, 금융 거래).

When you delete your account, we purge your email address from our marketing CRM and email service provider. If you exercise the right to erasure (§7.3 / GDPR Art. 17 / LGPD Art. 18(VI) for consent-based data), your email address is added to a permanent hashed suppression list so that it is never re-used for marketing, re-engagement, or surveys — including protection against re-import via any third-party or purchased list. Note: under the LGPD, Art. 18(VI) deletion applies to data processed on the basis of consent; data processed on the basis of legitimate interest (Art. 7 IX) is instead governed by the purpose-limitation principle (Art. 6 II and §2) and your right to request cessation of processing (Art. 18 §2).

## 7. 귀하의 권리 (GDPR)

GDPR에 따라 다음 권리가 있습니다:

### 7.1. 접근권

우리가 보유한 모든 데이터의 사본을 요청할 수 있습니다.

**이 권리를 행사하는 방법:** 설정 > 개인정보 보호 > '내 데이터 내보내기'

이 프로세스는 모든 데이터(프로필, 메시지, 통계 등)가 포함된 JSON 파일을 생성합니다. 다운로드 링크는 7일 동안 유효합니다.

### 7.2. 수정권

애플리케이션에서 언제든지 프로필 정보를 수정할 수 있습니다(사용자 이름, 자기소개, 선호도 등).

### 7.3. 삭제권 ('잊혀질 권리')

계정 삭제를 요청할 수 있습니다.

**이 권리를 행사하는 방법:** 설정 > 위험 구역 > '내 계정 삭제'

#### 자동 삭제 프로세스:

1. 우발적 삭제를 방지하기 위한 2단계 확인
2. 개인 데이터 즉시 익명화(Firestore)
3. Firebase Authentication 계정 삭제(모든 OAuth 토큰 자동 해지)
4. 참조용 익명화된 ID 제공
5. 메시지 및 생성된 콘텐츠 삭제 옵션

**중요:** 삭제는 되돌릴 수 없습니다. 일부 익명화된 데이터는 통계 목적으로 보존될 수 있습니다(GDPR 준수).

**수동 삭제 요청:** 특정 데이터 삭제 요청(예: 특정 커뮤니티의 메시지만 삭제, Storage 이미지 삭제 또는 기타 특수한 경우)의 경우 dpo@jynx.app로 데이터 보호 책임자에게 문의하십시오. GDPR에서 요구하는 대로 30일 이내에 수동 요청을 처리합니다.

### 7.4. 데이터 이동권

데이터 내보내기(섹션 7.1)를 통해 구조화되고 기계가 읽을 수 있는 형식(JSON)으로 데이터를 검색할 수 있습니다.

### 7.5. 반대권

직접 마케팅 목적의 데이터 처리에 반대할 수 있습니다.

- **One-click unsubscribe:** every marketing email includes a one-click unsubscribe link (RFC 8058 List-Unsubscribe-Post) honored in real time
- **In-app toggle:** Settings > Privacy > Communications Preferences
- **Email:** dpo@jynx.app

### 7.6. 동의 철회권

다음에 대한 동의를 철회할 수 있습니다:

- **분석:** 설정 > 개인정보 보호 > '분석 활성화' 비활성화
- **푸시 알림:** 장치 설정
- **Marketing Communications:** Newsletter, product updates, re-engagement, and uninstall/churn surveys — withdrawable via one-click unsubscribe, the in-app communications-preferences toggle, or dpo@jynx.app, without terminating your account

**참고:** OAuth 토큰(Google, Apple)은 계정을 삭제할 때 자동으로 해지됩니다(섹션 7.3).

Withdrawal does not affect the lawfulness of processing carried out before withdrawal (GDPR Art. 7(3); LGPD Art. 8 §5), and withdrawing consent never requires you to delete your account.

### 7.7. Additional LGPD Rights (Brazilian Users)

In addition to the rights above, data subjects located in Brazil have the following rights under LGPD Art. 18: confirmation of the existence of processing; access to the data; correction of incomplete, inaccurate, or out-of-date data; anonymization, blocking, or deletion of unnecessary or excessive data (Art. 18(VI) applies to data processed on the basis of consent); portability to another service or product provider, upon request; deletion of personal data processed with consent; and information about the possibility of denying consent and the consequences of doing so.

You may exercise these rights via Settings > Privacy or by contacting the encarregado at dpo@jynx.app. You may also lodge a complaint with the Brazilian data protection authority — the Autoridade Nacional de Proteção de Dados (ANPD) — at https://www.gov.br/anpd.

## 8. 데이터 보안

귀하의 데이터를 보호하기 위해 기술적 및 조직적 보안 조치를 구현합니다:

- **암호화:** HTTPS를 통한 안전한 통신
- **Firebase 보안 규칙:** Firestore 데이터에 대한 엄격한 접근 제어
- **인증:** Firebase Auth를 통한 안전한 세션 관리
- **입력 유효성 검사:** SecureTextInput를 통한 XSS 주입 방지
- **속도 제한:** 남용으로부터 보호(스팸 메시지, 자동화된 작업)
- **중재:** 콘텐츠 보고 및 중재 시스템
- **Real-time voice:** Voice-room media is encrypted in transit using WebRTC DTLS-SRTP, the same standard used by mainstream voice apps; signaling between the app and our servers is over HTTPS/TLS.

No system is 100% secure. In case of a personal data breach, we will notify the competent supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of a breach that is likely to result in a risk to your rights (GDPR Art. 33), and we will communicate the breach to affected users without undue delay where it is likely to result in a high risk to you (GDPR Art. 34). For data subjects in Brazil, we will also communicate relevant security incidents to the ANPD and to you within the deadline set by the authority (LGPD Art. 48; currently 3 business days under ANPD Resolution CD/ANPD nº 15/2024).

## 9. 국제 데이터 전송

귀하의 데이터는 유럽 연합 외부에 위치한 서버로 전송되고 저장될 수 있으며, 다음을 포함합니다:

- **Google Cloud / Firebase:** GDPR 준수와 함께 글로벌 인프라 사용
- **Amazon Web Services (image moderation):** The image-moderation processing described in §4.8 runs in AWS's São Paulo region (Brazil); transfers from the EU/EEA rely on AWS's data-processing agreement incorporating the European Commission's standard contractual clauses, together with the general guarantees below. The image is relayed to AWS through Jynx's Google Cloud infrastructure (the Google Cloud / Firebase leg above)
- **Sentry:** Privacy Shield 준수와 함께 미국 기반 서버
- **Email Service Provider (ESP):** Used to deliver the marketing, re-engagement, and survey communications described in §5.6. The ESP is named in §4.4 and acts as a processor under a signed Data Processing Agreement
- **LiveKit (real-time voice, and screen share when available):** LiveKit Cloud is our processor for real-time voice (and, when the feature is available, screen-share) media under a signed Data Processing Agreement (§4.5). LiveKit Cloud routes media globally: sessions are served by LiveKit's global infrastructure without pinning to a specific region. Voice-room audio (and screen-share video when available) is routed in real time and is not recorded, stored, or persisted by Jynx or by LiveKit; LiveKit retains only the operational session metadata described in §4.5. Transfers of personal data to LiveKit rely on LiveKit's Data Processing Addendum, which incorporates GDPR terms and the European Commission's standard contractual clauses for cross-border transfers, together with the general guarantees below, which apply to LiveKit as they do to our other processors.

**Guarantees (GDPR, EU/EEA).** All transfers from the EU/EEA are covered by an adequacy decision, the EU-US Data Privacy Framework, or standard contractual clauses, together with supplementary measures where required.

**Guarantees (LGPD, Brazil).** Transfers of Brazilian users' personal data are governed by LGPD Art. 33:

- **To Jynx Group in France (controller):** Lawful under LGPD Art. 33(I) by virtue of ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (This adequacy decision is subject to reassessment by the ANPD within four years; if suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses.)
- **To Brevo in France (email ESP, processor):** Lawful under LGPD Art. 33(I) by virtue of the same ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (Subject to the same ANPD reassessment described above; if the adequacy decision is suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses with Brevo.)
- **To child-safety technology providers in the EU (hash matching, processors):** Covered by the same ANPD Resolution CD/ANPD nº 32/2026 EU adequacy decision as the legs above — the providers receive only irreversible hashes and perform the matching in the EU region (§4.7)
- **To AWS in Brazil (image moderation, processor):** The AWS Rekognition hop stays in-country — it runs in AWS's São Paulo region (§4.8). The image is first relayed through Jynx's Google Cloud infrastructure, which is covered by the general Google Cloud / Firebase transfer terms above

Historical note: the one-year grace period for adapting existing contracts to the ANPD SCCs ended on 23 August 2025; new processor relationships such as the ESP execute the SCCs at onboarding.

## 10. 쿠키 및 유사한 기술

우리 모바일 애플리케이션은 전통적인 의미의 쿠키를 사용하지 않지만 다음을 사용합니다:

- **인증 토큰:** 안전한 방식으로 로컬에 저장
- **로컬 캐시:** 성능 향상을 위해(프로필 데이터, 최근 메시지)

**Website.** The Jynx website (jynx.app) uses Google Analytics 4 (provided by Google) with Consent Mode v2 to understand how the site is used. Analytics storage is denied by default: until you accept the cookie banner, Google Analytics runs without cookies or local storage and Google receives only cookieless, identifier-free signals; if you accept, full measurement is enabled. Your choice — accept or decline — is stored locally on your device (browser localStorage, key "jynx-analytics-consent"). Clearing your browser storage for jynx.app makes the banner appear again so you can change your choice. Google acts as a recipient of the resulting analytics data (see §9); see §4 for our other processors and §7 for your rights.

**Invitation links.** When you open an invitation link (jynx.app/invite/…) in your browser and tap the App Store download button, the website writes that invitation link into your device clipboard, replacing its previous content. This is a standard technique for attributing app installs on iOS (which has no install-referrer mechanism): it lets the Jynx app, at first launch, propose joining with the invitation of the person who sent you the link. The website never reads your clipboard — it only writes this link — and the app reads it only once, after asking for your explicit consent. No other clipboard content is accessed or collected. If you prefer not to share it, simply decline the paste prompt and join without an invitation.

**Referrals and creator campaigns.** When you join Jynx with an invitation code — from a link, a QR code, or entered manually — we record that code with your account so we can attribute the invitation to the person or campaign that shared it, apply the associated benefits, and detect fraudulent sign-ups. This processing relies on our legitimate interests (see §13) and is subject to our anti-fraud checks; nothing changes on your side, as the same data is collected whichever kind of invitation code you use. Some invitation codes also belong to creator attribution campaigns: if the code you used is part of such a campaign, it may additionally credit that campaign. Payout records for creator campaigns are kept in pseudonymous form.

**Screen sharing (when available).** When the feature is available, you may share your device screen in a voice room. Sharing starts only after the operating system's screen-capture permission is granted and an explicit in-app acknowledgment is given. Everything visible on your screen — including notifications — is streamed live to the other participants in the room, and you are responsible for what you share. The shared video is a live media track routed like voice audio through the LiveKit SFU (§4.5, §9): it is not recorded or stored by Jynx or LiveKit, and it stops when you end the share.

## 11. 이 정책의 변경

이 개인정보 처리방침을 업데이트할 수 있습니다. 중대한 변경 사항이 있는 경우 다음을 통해 알려드립니다:

- 앱 내 알림을 통해
- 계정과 연결된 이메일 주소로

## 12. 문의하기

이 개인정보 처리방침에 대한 질문이나 권리를 행사하려면:

- **이메일:** dpo@jynx.app

**감독 기관:** If you believe your rights have not been respected, you may lodge a complaint:

- **EU/EEA users:** with the CNIL (Commission Nationale de l'Informatique et des Libertés), France — https://www.cnil.fr
- **Brazilian users:** with the ANPD (Autoridade Nacional de Proteção de Dados), Brazil — https://www.gov.br/anpd

Filing a complaint with a supervisory authority does not prejudice your right to seek other judicial remedies available to you, including the mandatory consumer protections that apply in your jurisdiction (e.g., the Brazilian Consumer Defense Code, Law 8.078/90).

## 13. 동의

We process your personal data only where we have a lawful basis. The lawful bases we rely on, and where each is described in this Policy, are:

- Performance of a contract / provision of the Service (GDPR Art. 6(1)(b); LGPD Art. 7, V) — account, matching, and messaging (§5.1–5.3)
- Legitimate interests (GDPR Art. 6(1)(f); LGPD Art. 7, IX and Art. 10) — security, fraud prevention, service improvement, and (for Brazilian users) marketing/re-engagement/survey communications to existing or recently-lapsed users as described in §5.6, each supported by a documented balancing assessment
- Legal obligation (GDPR Art. 6(1)(c); LGPD Art. 7, II) — retention for legal purposes (§6)
- Legal obligation and legitimate interests (GDPR Art. 6(1)(c) and 6(1)(f); LGPD Art. 7, II and IX) — detection of illegal and policy-violating content, including the child-safety image analysis described in §5.8 and the image-moderation processing in §4.8, prevention of abuse and ban evasion (§5.7), and compliance with legal reporting duties. For the analysis of images shared in direct messages, Jynx also relies on the voluntary detection of online child sexual abuse permitted by Regulation (EU) 2021/1232 (the ePrivacy derogation, as currently in force).
- Consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) — analytics where you have enabled them, push notifications, and (for EU/EEA users and for Brazilian prospects/cold/cross-sell sends) marketing communications per §5.6
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Consent must be specific and informed.** Where we rely on your consent, it is given by a clear affirmative act, refers to specified purposes, and is captured separately from your acceptance of these terms (LGPD Art. 8 §1 — cláusula destacada). Generic or bundled authorizations are void under LGPD Art. 8 §4 and invalid under GDPR Art. 4(11) and Art. 7. Using Jynx does not by itself constitute consent to marketing. The burden of proving valid consent rests with Jynx (LGPD Art. 8 §2; GDPR Art. 7(1)); we therefore record the date, form version, language, and scope of each consent we collect.

**Withdrawal.** You may withdraw any consent at any time, through a procedure that is as easy as giving it and that does not require you to delete your account (LGPD Art. 8 §5; GDPR Art. 7(3)) — see §7.5 and §7.6. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. Deleting your account (§7.3) remains available at any time but is not the mechanism for withdrawing a specific consent.
