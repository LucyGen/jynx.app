---
title: "개인정보 처리방침"
description: "Jynx의 개인정보 처리방침을 읽어보세요. 우리가 귀하의 정보를 수집, 사용 및 보호하는 방법을 알아보세요."
canonical: "https://jynx.app/ko/privacy.html"
locale: "ko"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# 개인정보 처리방침

최종 업데이트: 2026년 11월 17일

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

## 1. 소개

Jynx('우리', '당사', '애플리케이션')는 플레이어가 연결하고, 팀을 구성하며, 함께 플레이할 수 있는 소셜 게임 플랫폼입니다.

### 법률 정보:

- **법인:** Jynx Group(Société par Actions Simplifiée, SIREN 991443896, 프랑스 낭트 등록)
- **데이터 보호 책임자(DPO) / Encarregado:** dpo@jynx.app
- **EU/EEA 관할:** 프랑스, 유럽 연합 — 본 개인정보 처리방침은 프랑스에서 시행된 EU 규정 2016/679(GDPR) 및 지침 2002/58/EC(ePrivacy)를 준수합니다.
- **브라질 관할:** 본 개인정보 처리방침은 브라질 법률 제13.709/2018호(Lei Geral de Proteção de Dados, "LGPD")도 준수합니다. 이 법은 LGPD 제3조에 따라, Jynx가 브라질에 사업장을 두지 않음에도, 브라질에 있는 데이터 주체의 개인 데이터에 대한 Jynx의 처리에 적용됩니다.
- **게시 책임자(LCEN):** Directeur de la publication(게시 책임자): Antoine Haie. 본 웹사이트(jynx.app)는 GitHub Pages에서 호스팅되며 Cloudflare 콘텐츠 전송 네트워크를 통해 제공됩니다.

LGPD의 관점에서 Jynx Group은 귀하의 개인 데이터의 통제자(controlador)입니다. 당사의 데이터 보호 책임자가 encarregado(DPO)로서 LGPD 관련 요청을 dpo@jynx.app 으로 접수합니다. Jynx는 ANPD 결정 CD/ANPD 제2/2022호에 따른 소규모 개인 데이터 처리자(pequeno agente de tratamento de dados pessoais)에 해당하여 encarregado 지정 의무가 없음에도 이 공개된 소통 채널을 자발적으로 유지합니다.

이 개인정보 처리방침은 귀하가 우리 애플리케이션을 사용할 때 귀하의 개인 데이터를 수집, 사용, 공유 및 보호하는 방법을 설명합니다.

## 2. 최소 연령 및 확인

우리 애플리케이션은 18세 이상의 사용자를 위한 것입니다.

계정을 만들 때 생년월일을 제공해야 합니다. 18세 미만인 경우 계정을 만들거나 우리 서비스를 사용할 수 없습니다.

미성년자 대상 마케팅 금지. Jynx는 18세 이상 사용자로 제한되며 자동 연령 게이트를 적용합니다. 이후 사용자가 18세 미만임을 확인하면(LGPD 제14조; GDPR 제8조) 즉시 계정을 종료하고 모든 마케팅, 재참여, 설문 커뮤니케이션에서 사용자를 제외하며 관련 마케팅 데이터를 삭제합니다. 당사는 미성년자의 마케팅 동의를 고의로 수집하지 않습니다.

## 3. 수집되는 데이터

### 3.1. 등록 및 프로필 데이터

계정을 만들고 관리할 때 다음 정보를 수집합니다:

#### 인증 정보:

- 이메일(이메일/비밀번호 계정용)
- 사용자 이름/닉네임
- 프로필 사진(선택 사항)
- 소셜 로그인 식별자(Google, Apple) — 해당 방식을 사용하는 경우
- Discord 식별자(귀하의 Discord 사용자 ID) — Discord 연동을 위해 Discord 계정 연결을 선택한 경우. 이 연결은 identify 전용 OAuth를 사용하며 로그인 수단이 아니고 언제든 해제할 수 있습니다
- 게스트 둘러보기(제공되는 경우): 계정을 만들지 않고 Jynx의 공개 영역을 둘러볼 수 있습니다. 게스트 모드에서는 로컬에 저장된 게스트 식별자와 앱 제공에 필요한 §3.3의 기술 데이터만 처리하며, 프로필이 만들어지지 않고 계정 데이터는 보관되지 않습니다. 매칭, 채팅, 커뮤니티 참여에는 계정 생성이 필요합니다

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

Meta를 통한 광고 측정은 분석과 별개이며 자체 스위치가 있습니다: §5.9를 참조하세요.

### 3.4. 커뮤니케이션 데이터

- **메시지:** 커뮤니티 채팅의 메시지, 사용자 간 개인 메시지, 대화 기록
- **알림:** 푸시 알림을 위한 FCM 토큰(Firebase Cloud Messaging)

### 3.5. 사용자 생성 콘텐츠

- 업로드한 사진(프로필 사진, 추가 사진)과 직접 메시지에서 공유한 이미지
- 보안 및 중재 보고서
- 코스메틱 선호도(아바타, 배지)

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

**Riot Games 개인정보 처리방침:** https://www.riotgames.com/en/privacy-notice

### 4.4. 이메일 서비스 제공업체(마케팅 및 설문 커뮤니케이션)

§5.6에서 설명하는 마케팅, 재참여, 삭제/이탈 설문 이메일을 전송하기 위해 Jynx는 처리자(GDPR 제28조; LGPD 제39조 — operador)로서 제3자 이메일 서비스 제공업체(ESP)를 사용합니다. ESP는 서명된 데이터 처리 위탁 계약에 따라 당사의 문서화된 지시에 한해 귀하의 이메일 주소와 최소한의 전송 데이터(예: 발송/반송 상태)를 처리합니다.

- **ESP의 신원, 역할, 위치:** Brevo(Brevo SAS, 프랑스 파리) — 서명된 데이터 처리 위탁 계약에 따른 당사의 이메일 서비스 제공업체이자 데이터 처리자입니다. Brevo 개인정보 처리방침: https://www.brevo.com/legal/privacypolicy/
- **하위 처리자:** Brevo의 현재 하위 처리자 목록은 데이터 처리 위탁 계약(이용약관)에 게시되어 있습니다: https://www.brevo.com/legal/termsofuse/
- **국제 이전 근거:** §9를 참조하세요. Brevo는 프랑스(EU)에 본사를 둡니다. 따라서 Brevo로의 이전은 GDPR의 EU 보호 체계와, 브라질 사용자의 경우 EU에 대한 ANPD 적절성 결정(제32/2026호)의 보호를 받습니다 — SCC나 추가 메커니즘은 필요하지 않습니다.

당사는 귀하의 개인 데이터를 판매하지 않습니다. §5.6에서 별도의 법적 근거를 공개하지 않는 한 마케팅 이메일에 추적 픽셀이나 숨겨진 분석 도구를 넣지 않습니다.

### 4.5. LiveKit Cloud (실시간 음성)

Jynx는 참가자 간 음성 채팅방 오디오를 라우팅하는 실시간 미디어 인프라를 운영하기 위해 서명된 데이터 처리 계약에 따라 처리자(GDPR 제28조; LGPD 제39조 — operador)로서 LiveKit Cloud를 사용합니다. LiveKit은 각 참가자의 오디오 스트림을 다른 참가자에게 실시간으로 전달하는 SFU(Selective Forwarding Unit)를 운영합니다.

Jynx는 LiveKit의 녹음, 전사, Agent Insights 또는 Egress 기능을 활성화하지 않습니다. 음성 채팅방 오디오는 LiveKit의 SFU(Selective Forwarding Unit)를 통해 실시간으로 라우팅되며, Jynx나 LiveKit에 의해 녹음, 저장 또는 보존되지 않습니다.

LiveKit은 청구, 남용 방지 및 운영 목적으로 자사의 데이터 처리 부속서(Data Processing Addendum)에 따라 참가자 신원, 채팅방 식별자, 연결 시간 및 품질 지표와 같은 운영 세션 메타데이터를 보존합니다. 이 메타데이터는 플랫폼 외부에서 사용자를 식별하거나 광고 목적으로 사용되지 않습니다.

### 4.6. 앱스토어 / Google Play(인앱 결제 및 구독)

Jynx+ 구독과 Founder Pack은 Apple 앱스토어와 Google Play를 통해 인앱으로 판매되며, 두 스토어가 해당 구매의 판매자(merchant of record)입니다(이용약관 제8조 참조). 결제 수단 데이터(예: 카드 정보)는 Apple/Google이 각자의 개인정보 처리방침에 따라 단독으로 수집·처리하며, Jynx는 결제 수단 데이터를 수집·수신·저장하지 않습니다.

청구 제공업체 RevenueCat(서명된 데이터 처리 위탁 계약에 따라 활동하는 처리자; GDPR 제28조; LGPD 제39조 — operador)을 통해 Jynx는 구매한 항목을 제공하는 데 필요한 정보만 받습니다: 구독 및 권한 상태(예: Jynx+ 활성 여부와 갱신일), 구매한 Founder Pack 등급, 거래 식별자. 이 데이터는 서비스 제공과 회계·기록 보관 의무 이행(§6)에 필요한 기간 동안 보관되며 권한 부여·유지와 사기 방지에만 사용됩니다. RevenueCat은 미국에 설립되어 있으며, 개인 데이터의 RevenueCat 이전은 EU-미국 데이터 프라이버시 프레임워크(DPF에 자체 인증한 RevenueCat 법인의 경우) 또는 DPF가 적용되지 않는 경우 표준 계약 조항에 근거합니다. 브라질 사용자 데이터에 적용되는 이전 메커니즘은 처리 활동 기록부에서 확인됩니다(§9 참조).

- Apple 개인정보 처리방침: https://www.apple.com/legal/privacy/
- Google 개인정보 처리방침: https://policies.google.com/privacy
- RevenueCat 개인정보 처리방침: https://www.revenuecat.com/privacy

### 4.7. 전문 아동 보호 기술 제공업체

알려진 아동 성학대물을 탐지하기 위해(§5.8 참조) Jynx는 처리자(GDPR 제28조; LGPD 제39조 — operador)로서 전문 아동 보호 기술 제공업체와 협력합니다. 이 제공업체들은 이미지 자체가 아닌 이미지에서 파생된 복원 불가능한 해시만을 받아, 당사의 문서화된 지시에 따라 EU 지역에서 아동 보호 탐지 목적의 해시 매칭만 수행합니다. 이미지에서 해시를 파생하는 작업은 Jynx 자체의 Google Cloud 인프라 내부에서 이뤄집니다(§9 참조).

### 4.8. 클라우드 이미지 모더레이션 제공업체(AWS)

플랫폼의 안전을 위해 프로필 사진과 갤러리 사진은 자동 이미지 분류 서비스로 검사됩니다 — 처리자(GDPR 제28조; LGPD 제39조 — operador)인 Amazon Web Services(AWS)가 제공하는 Amazon Rekognition입니다. 이를 위해 이미지는 AWS로 전송되어 기계 학습으로 부적절 콘텐츠(예: 노출이나 선정적 자료) 여부를 분석하며, 결과는 모더레이션 프로세스에서 처리되는 기계 생성 라벨과 신뢰도 점수입니다(아동 보호 정책 참조). 이 처리는 콘텐츠 모더레이션과 안전 목적으로만 사용되며 — 프로파일링, 광고 또는 다른 목적으로는 절대 사용되지 않습니다. AWS는 서비스에 구성된 AWS 리전(현재 브라질 상파울루)에서 이 데이터를 처리하며 §9의 이전 보호 장치가 적용됩니다. 다른 서비스와 마찬가지로 이미지는 AWS로 전달되기 전에 Jynx 자체의 Google Cloud 인프라에서 처리됩니다(§9 참조).

### 4.9. 광고 어트리뷰션(Meta, Apple ATT, Google Play Install Referrer)

앱 설치가 마케팅에서 비롯되었는지 측정하기 위해, 필요한 경우 귀하의 동의를 조건으로 광고·어트리뷰션 기술을 사용합니다: Meta(Facebook) App Events SDK(Meta Platforms Ireland)와 Google Play Install Referrer API입니다. Apple 기기에서는 App Tracking Transparency(ATT) 권한을 허용한 후에만 Meta SDK가 초기화되며, 허용하지 않으면 광고 식별자(IDFA)가 수집되지 않고 SDK도 초기화되지 않습니다. Android에서는 Google Play Install Referrer API가 설치가 스토어 등록정보나 캠페인 링크에서 비롯되었는지 알려 주고, 광고 식별자(GAID)는 기기의 광고 ID 설정에 따라 사용됩니다. Meta로 전송되는 이벤트는 앱 활성화와 앱 이벤트 메타데이터(로그인 상태에서는 앱 사용자 식별자 포함 — 로그아웃 시 SDK에서 삭제됨)로 제한되며, 어트리뷰션과 캠페인 측정을 위해 Jynx의 지시에 따라 처리됩니다.

Meta Platforms Ireland는 위 어트리뷰션 목적의 당사 처리자로 이 데이터를 처리하며, Meta Platforms, Inc.는 자체 약관에 따라 자신의 정당한 목적을 위한 독립 통제자로 활동할 수 있습니다(Meta의 데이터 처리 약관과 https://www.facebook.com/privacy/policy 의 개인정보 처리방침). 미국으로의 이전은 DPF에 자체 인증한 Meta 법인의 경우 EU-미국 데이터 프라이버시 프레임워크에, 그 외의 경우 표준 계약 조항(§9)에 근거합니다. ATT 권한 거부·철회와 광고 ID 초기화는 기기 설정에서 언제든 가능하며, 거부해도 Jynx 이용에는 영향이 없습니다.

**광고 측정.** 설치 어트리뷰션 외에 전환도 측정합니다: Meta와 공유되는 이벤트에는 가입(회원 등록), 온보딩 완료, 구매 — 금액과 통화 포함 — 이 있습니다. 동의한 경우 매칭 품질 개선을 위해 해시 처리(복원 불가능하게 변형)된 이메일 주소나 전화번호가 공유될 수 있습니다. 정당한 이익(아래)으로 측정되는 사용자에게는 이런 일이 절대 없습니다. 가입(회원 등록) 이벤트에는 귀하가 직접 선언한 성별이 포함될 수 있습니다. 그 외의 것 — 메시지, 프로필 필드, 게임, 커뮤니티, 연락처, 위치, 사진 — 은 공유되지 않으며 귀하의 데이터는 절대 판매되지 않습니다. 법적 근거, 선택지, Apple SKAdNetwork 고지는 §5.9에 설명되어 있습니다.

보관: Jynx는 Meta와 공유한 이벤트의 별도 사본을 보관하지 않습니다. 이미 공유된 이벤트는 공유 시점부터 Meta의 비즈니스 도구 보관·삭제 프로세스의 적용을 받습니다.

### 4.10. 크리에이터(파트너) 프로그램 — KYC와 정산

Jynx 크리에이터(파트너) 프로그램에 참여하면 프로그램에 필요한 신원·세금·정산 정보를 처리합니다: 앱 내에서 검증하는 CPF 또는 CNPJ, 선택한 정산 수단 — PayPal(이메일로 식별), Wise 계좌 이체(브라질), Pix 키 — 그리고 캠페인 성과 기록(어트리뷰션된 가입; §10 추천 참조). 정산 기록은 가명 형태로 보관됩니다(§10). 프로그램은 가입 시 수락하는 버전별 Creator Referral Terms와 Self-Billing Mandate가 규율합니다(이용약관 §15 참조).

정산은 선택한 수단을 운영하는 결제 기관을 통해 집행됩니다: PayPal과 Wise는 이체 지시와 신원 확인, 사기 방지, 규제 의무 이행에 필요한 데이터를 받으며 각자의 약관에 따라 독립 결제 기관으로 활동합니다(개인정보 처리방침은 각사 웹사이트에 게시). Pix 정산은 Jynx Group이 귀하가 제공한 Pix 키로 시작하는 이체입니다. 적용되는 국제 이전 보호 장치는 §9에 설명되어 있습니다.

### 4.11. AI 기능

**아바타 생성.** 아바타 퀴즈는 프로필에 쓸 스타일리즈된 아바타 제안을 생성할 수 있습니다. 생성은 현재 Jynx의 문서화된 지시에 따라 Cloudflare Workers AI(Cloudflare, Inc., 처리자)에서 실행되며, 기반 엔진이 바뀌면 변경 전에 또는 변경과 함께 이 절을 갱신합니다. 입력은 귀하의 퀴즈 답변과 플레이 스타일 선호 — 사진은 절대 아님 — 이며 사용자 식별자가 함께 전달됩니다. 제안은 PNG 또는 WebP 이미지로 앱에 반환되고 검색할 수 있도록 최대 30일 보관 후 삭제됩니다. 생성된 이미지는 합성 이미지 — 귀하의 사진이 아님 — 이며 다른 이미지와 동일한 모더레이션 대상입니다(§4.8).

**컴패니언 메시지(Quimera).** 일부 컴패니언 앱 메시지는 생성형 AI 시스템(Google Gemini, 처리자)이 작성하거나 보강합니다. AI가 생성한 메시지에는 그 사실이 표시되며, EU AI법 제50조(1)에 따라 AI 생성 요소와 상호작용할 때는 항상 그 사실을 알려 드립니다.

## 5. 데이터 사용

귀하의 데이터를 다음 목적으로 사용합니다:

### 1. 서비스 제공:

- 계정을 만들고 관리
- 다른 플레이어와 연결할 수 있도록
- 팀 생성 및 게임 세션 조직 촉진

### 2. 개인화:

- 호환되는 팀원 추천(게임 기반, 랭크, 스타일 매칭)
- 관련 콘텐츠 표시

### 3. 커뮤니케이션(운영 / 거래):

- 중요한 서비스 알림 전송(매치 발견, 메시지 수신, 계정 보안 경고, §11의 정책 변경 고지)

마케팅, 재참여, 삭제/이탈 설문 이메일은 §5.6 마케팅 커뮤니케이션에서 별도로 설명하며 이 거래성 범주에 포함되지 않습니다.

### 4. 서비스 개선:

- 기능을 개선하기 위한 사용 분석
- 버그 식별 및 수정
- 성능 최적화
- AI 처리자를 사용하여 아바타 제안과 컴패니언 메시지 초안 생성(§4.11)

### 5. 보안 및 준수:

- 사기 및 남용 방지
- 이용약관 시행
- 법적 의무 준수

당사는 앱 사용에서 파생된 익명화·집계 통계를 공개할 수 있습니다(예: 플레이어가 듀오를 만드는 방식). 이 통계로 개별 사용자를 식별할 수 없습니다.

### 5.6. 마케팅 커뮤니케이션

§5.3의 운영 알림 외에 이메일로 마케팅·재참여 커뮤니케이션을 보낼 수 있습니다: Jynx 앱의 제품 업데이트와 기능 발표; 뉴스레터; 앱으로 다시 초대하는 재참여 메시지; 짧은 삭제·이탈 피드백 설문(예: "Jynx 사용을 멈춘 이유는 무엇인가요?"). 이 커뮤니케이션은 거래성/서비스 알림과 구별됩니다.

**법적 근거 — EU/EEA 사용자(GDPR + ePrivacy).** EU/EEA 사용자에게 보내는 마케팅·재참여 이메일은 사전 명시적 옵트인 동의에 근거합니다(ePrivacy 지침 제13조(1), 프랑스에서는 우편전자통신법(Code des postes et des communications électroniques) 제L. 34-5조로 시행; GDPR 제6조(1)(a)와 제7조). 유료 구독(Jynx+)과 인앱 일회성 구매(Founder Pack) 출시 이후 서비스는 보수를 받는 서비스가 되었고 이 구매들은 EU 사법재판소 판결 C-654/23(2025년 11월 13일)의 의미에서 "판매"에 해당합니다. 따라서 ePrivacy 제13조(2)의 "소프트 옵트인" 예외는 기존 고객에 대한 유사 제품·서비스에 원칙적으로 사용할 수 있습니다. 다만 신중한 원칙으로 당사는 계속 사전 명시적 옵트인 동의에 근거하며, 처리 활동 기록부에 기록된 문서화된 재평가와 갱신된 고지 이후에만 소프트 옵트인 근거로 전환할 것입니다.

**법적 근거 — 브라질 사용자(LGPD).** 브라질 사용자의 마케팅·재참여 커뮤니케이션은 두 가지 대체 법적 근거 중 하나에 근거합니다:

1. **동의(LGPD 제7조 I 및 제8조)** — 가입 시 또는 앱 내에서 별도로, 체크되지 않은, 목적별 옵트인으로 수집되며 날짜, 양식 버전, 언어와 함께 기록됩니다. 언제든지 무료로 철회할 수 있고 서비스 이용이 제한되지 않습니다(제8조 §5). 동의는 잠재 고객 커뮤니케이션, 콜드 아웃리치, Jynx 앱의 핵심을 넘는 크로스셀/파트너 제안에 쓰이는 근거입니다.
2. **정당한 이익(LGPD 제7조 IX, 제10조로 구체화)** — 기존 또는 최근에 활동을 멈춘 사용자가 재참여 메시지, 같은 Jynx 앱에 대한 제품 업데이트, 단 한 번의 짧은 이탈/삭제 피드백 설문을 받을 때만 사용됩니다. 이 근거에 의존하기 전에 Jynx는 ANPD 정당한 이익 가이드(2024년 2월 2일)의 3단계 검증에 따라 정당한 이익 평가(LIA)를 수행·기록합니다: (i) 목적, (ii) 필요성, (iii) 균형과 보호 장치. LIA는 기존 관계, 사용자의 합리적 기대, 목적, 가장 덜 침해적인 수단, 옵트아웃 채널을 기록합니다. 정당한 이익은 콜드/무단 이메일, 무관한 크로스셀, 구매한 목록, 관계가 명확히 끝난 사용자에 대한 지속적 메시징에는 사용되지 않습니다.

**반대권 / 옵트아웃.** 브라질 사용자는 언제든지 이 처리에 반대하고 §7.5와 §7.6의 메커니즘(모든 이메일의 원클릭 수신거부 또는 앱 내 커뮤니케이션 환경 설정 토글)으로 옵트아웃할 수 있으며, 비용도 없고 계정은 유지됩니다. 옵트아웃 요청은 실시간으로 반영합니다. 브라질 소비자방어법(CDC, 법률 8.078/90, 특히 제39조 III)은 무단·과도한 상업적 메시징을 금지하므로 당사는 옵트아웃을 엄격히 존중하고 빈도 상한을 적용합니다. 지속적 발송이나 무시된 옵트아웃은 과도한 관행으로 처리될 수 있습니다.

**삭제 / 이탈 설문.** 운영상 가능한 경우 삭제 시점에 앱 내에서 이탈 질문을 합니다(이메일 보관 불필요). 이메일 설문을 보내는 경우 설문에는 홍보·재참여 콘텐츠가 없으며, 계정 삭제 또는 앱 삭제 후 약 60일 이내에 사용자당 최대 한 번(1회)을 보내고, 그 후 이메일 주소는 §6에 따라 삭제 또는 복원 불가능하게 익명화됩니다. 삭제/잊혀질 권리 요청(§7.3)을 제출한 사용자는 다시 연락되지 않으며 영구 수신거부 목록에 등록됩니다(§6 및 이용약관 §7.2 참조).

**이메일 추적.** 마케팅 이메일에는 별도의 법적 근거 없이 개인 데이터를 처리하는 추적 픽셀이나 숨겨진 분석 도구가 없습니다. 열람/클릭 추적을 도입하면 여기에 공개하고 동의에 근거합니다(LGPD 제8조; ePrivacy 제5조(3)). ANPD의 추적 기술 관련 지침(2022년 10월 18일)과 일치합니다.

**빈도.** 마케팅 이메일에는 내부 빈도 상한이 적용됩니다. 앱 내 커뮤니케이션 환경 설정 토글이나 메시지의 수신거부 링크로 언제든 줄이거나 끌 수 있습니다.

### 5.7. 커뮤니티 안전 및 차단 회피

커뮤니티를 남용으로부터 보호하기 위해 당사는 기기 식별자와 기기 무결성 신호를 사용하여 정지 또는 차단을 우회하려는 시도를 탐지하고 차단합니다. 당사가 기기를 차단된 계정과 연관 지으면 해당 기기는 새 계정을 만들거나 로그인하지 못하도록 제한될 수 있습니다. 이것이 오류로 발생했다고 생각되시면 support@jynx.app으로 연락하여 이의를 제기할 수 있습니다.

기기 무결성 신호는 앱에 내장된 안티탬퍼링·기기 무결성 라이브러리인 Talsec freeRASP의 도움으로 수집·평가됩니다. freeRASP는 귀하의 기기에서 작동합니다: 루팅된 기기, 런타임 후킹, 부트로더 잠금 해제 같은 위협을 로컬에서 탐지하고 그 결과를 남용 방지를 위해 당사의 오류 모니터링 제공업체(Sentry, §4.2)를 통해 보고합니다. 데이터가 Talsec이 운영하는 서비스로 전송되지는 않습니다.

### 5.8. 아동 보호 이미지 분석

아동을 보호하고 법적 신고 의무를 이행하기 위해 Jynx는 직접 메시지에서 공유된 이미지에서 파생된 해시를 알려진 아동 성학대물 데이터베이스와 비교하는 자동 시스템을 사용합니다. 이 분석을 위해 이미지 자체는 제3자에게 전송되지 않습니다 — 복원 불가능한 해시만 전송됩니다(§4.7 참조). 프로필 사진은 §4.8의 이미지 모더레이션 처리로 별도 검사됩니다. 이 분석은 아동 보호 탐지와 법적 신고 의무에만 존재하며 프로파일링, 광고 또는 다른 목적으로는 사용되지 않습니다. 매칭 결과는 [아동 보호 정책](/child-safety.html)에 설명된 대로 처리됩니다.

### 5.9. 광고 측정

동의하시면 광고를 측정·개선하기 위해 제한된 이벤트(가입, 구매와 금액 등)를 Meta와 공유합니다. 귀하의 데이터는 절대 판매되지 않으며 개인정보 설정에서 언제든 선택을 바꿀 수 있습니다. 무엇을 누구와 공유하는지는 §4.9에 나열되어 있습니다.

활성화 방식. iPhone과 iPad에서 광고 측정은 귀하의 동의(GDPR 제6조(1)(a); LGPD 제7조 I)가 있을 때만 귀하의 데이터를 사용하며, 이 동의는 첫 실행 개인정보 시트 또는 이후 설정 > 개인정보 > 광고 측정에서 이뤄지고 추가로 Apple의 App Tracking Transparency 승인이 필요합니다(§4.9 참조). Android에서는 같은 동의에 근거하거나, 첫 실행 시트에서 광고 측정 스위치가 기본 켜짐으로 표시된 사용자의 경우 문서화된 정당한 이익 평가를 거친 당사의 광고 측정 정당한 이익(LGPD 제7조 IX와 제10조)에 근거합니다. 이 경우 기본 켜짐이며 같은 시트나 설정 > 개인정보 > 광고 측정에서 언제든 끌 수 있습니다 — 끄는 것은 켜두는 것만큼 쉽고, 무료이며, 계정 삭제를 요구하지 않습니다(LGPD 제18조 §2).

보호 장치. 18세 미만임을 아는 사용자와 연령이 확인되지 않는 프로필은 정당한 이익 근거로 측정되지 않습니다. 동의 철회나 반대는 다음 앱 실행부터 공유를 중단하며, 그 전에 적법하게 공유된 이벤트는 §4.9의 보관 조건에 따라 Meta에 남습니다. 철회는 그 이전의 적법성에 영향을 주지 않습니다(GDPR 제7조(3); LGPD 제8조 §5).

**Apple SKAdNetwork(iOS).** 위와 별개로, 선택이나 설정과 무관하게 모든 iPhone·iPad 사용자에게 — 추적이나 광고 측정을 거부했을 때도 — Apple의 SKAdNetwork는 익명의 집계 전환 정보를 광고를 보여 준 광고 네트워크에 보고합니다(예: 특정 금액 범위 내의 등록이나 구매가 발생했음). 이를 위해 Jynx의 식별자도 개인 데이터도 기기 밖으로 나가지 않습니다. 이는 Apple의 표준 어트리뷰션 메커니즘이며 당사는 이것으로 귀하를 식별할 수 없습니다.

### 5.10. 이메일과 커뮤니케이션

**계정 활동 알림 이메일(서비스).** 앱에서 놓친 계정 활동(읽지 않은 메시지, 새 매치나 좋아요)이 있으면 Jynx가 이메일로 알려 드릴 수 있습니다. 이는 소셜 플랫폼 운영(진행 중인 상호작용을 알려 드리는 것)에 대한 당사의 정당한 이익에 근거한 서비스 알림이며 홍보 콘텐츠를 포함하지 않습니다. 각 알림 유형(메시지, 매치, 좋아요)은 설정 > 개인정보 > 커뮤니케이션에서, 또는 각 이메일의 "이 알림 관리" 링크로 언제든 끌 수 있습니다. 이 처리에 언제든 반대할 수 있으며(GDPR 제21조) privacy@jynx.app 으로 알려 주세요.

**재참여·마케팅 이메일(winback).** 한동안 활동이 없던 후 귀하를 Jynx로 다시 모으는 이메일과 뉴스·제안 커뮤니케이션은 상업적 광고 커뮤니케이션입니다. 별도의 선택적·체크되지 않은 체크박스로 수집한 사전의 특정·자유로운·철회 가능한 동의가 있을 때만 보내며, 약관 수락의 조건이 아닙니다. 설정 > 개인정보 > 커뮤니케이션에서 또는 각 이메일의 수신거부 링크로 언제든 철회할 수 있습니다.

**알림 이메일에 표시되는 사용자 이름과 프로필 사진.** 다른 회원과 상호작용한 적이 있으면(좋아요, 매치, 메시지) 그 회원이 비활성 상태일 때 그에게 보내는 계정 활동 알림 이메일에 귀하의 사용자 이름과 프로필 사진이 표시될 수 있습니다. 이 요소는 발송 시점에 만들어지며 이메일 로그에는 보관되지 않습니다(식별자와 횟수만 기록).

### 5.11. 위치와 매치 거리

**처리하는 것.** 위치 공유를 선택하면 Jynx는 한 가지 목적으로만 사용합니다: 매치 대기열에 다른 플레이어와의 대략적 거리("~12 km")를 표시하고, 근접 정렬을 켜면 거리순으로 정렬합니다. 대략적 위치만 처리합니다. 요청하는 권한은 운영체제의 낮은 정밀도 위치 권한이며, 저장 전에 서버에서 좌표를 약 0.02°(약 2.2 km) 격자로 맞춥니다. 파생된 위치 셀은 폭 약 11km입니다. 원시 GPS 좌표는 절대 저장되지 않습니다.

**선택 사항이며 동의 기반.** 선택적 기능입니다. 운영체제 위치 권한을 허용하고 앱 내 위치 토글을 켠 경우에만 수집됩니다. 위치는 백그라운드에서 처리되지 않으며 — 앱을 사용하는 동안에만 사용됩니다. 귀하의 위치는 지도 위의 위치로 다른 사용자에게 표시되지 않고, 광고에 사용되지 않으며, 광고 플랫폼과 공유되지 않습니다(§4.9 참조: 광고 어트리뷰션이나 측정을 위해 공유되는 것에 위치 데이터는 없습니다). 분석 이벤트에는 좌표, 도시 이름, 위치 셀 식별자가 없습니다 — 익명의 채택·정렬 선택 신호만 있습니다. 운영체제 권한 프롬프트가 동의를 모으는 방식이고 앱 내 토글이 철회하는 방식입니다(§7.6).

**보관 기간.** 계정의 위치 기록은 45일 동안 갱신이 없으면 자동 삭제되며, 공유가 켜져 있는 동안 기능을 쓸 때마다 갱신됩니다. 프로필 카드에 표시되는 대략적 거리는 활동 범위로 유지됩니다: 프로필 카드가 유지되는 동안만 존재하며 45일 갱신이 없으면 없는 것으로 처리됩니다.

**통제.** 언제든 공유를 중단할 수 있습니다: 앱 내 위치 토글을 끄면 저장된 좌표가 즉시 지워지고(기록은 유지되지만 좌표는 비워짐), 기기 설정에서 위치 권한을 철회하면 수집 자체가 멈춥니다. 계정 삭제(§7.3)로도 위치 데이터가 지워집니다.

## 6. 데이터 보존

### 6.1. 보존 기간

- **프로필 데이터:** 계정이 활성화되어 있는 동안 보존
- **로그 및 분석:** Firebase Analytics: 14개월(Firebase 정책)
- **마케팅 이메일 주소(동의 기반):** 옵트아웃하거나 계정을 삭제하기 전까지 보관되며, 재연락 방지를 위해 수신거부 목록의 해시 기록이 유지됩니다(아래 참조)
- **삭제 / 이탈 설문 이메일 주소:** 설문 발송 후 최대 60일(설문이 없으면 삭제/설치 제거 후 60일) 보관 후 주소가 삭제되거나 복원 불가능하게 익명화됩니다. 사용자당 한 번(1회)을 넘는 설문 이메일은 보내지 않습니다
- **최근 비활성 계정의 재참여(LGPD 정당한 이익 근거, 브라질 사용자만):** CNIL 지침과 합리적 기대 검증에 따라 Jynx는 최근 비활성(삭제 요청 아님) 계정의 이메일 주소를 마지막 의미 있는 상호작용 후 최대 3년까지 재참여에 쓸 수 있으며, 이후 삭제 또는 익명화됩니다

### 6.2. 데이터 삭제

언제든지 계정 삭제를 요청할 수 있습니다(섹션 7 참조).

**법적 보존:** 일부 데이터는 법적 의무를 준수하기 위해 더 오래 보존될 수 있습니다(예: 보안 보고서, 금융 거래).

계정을 삭제하면 마케팅 CRM과 이메일 서비스 제공업체에서 귀하의 이메일 주소를 완전히 지웁니다. 삭제권(§7.3 / GDPR 제17조 / 동의 기반 데이터의 경우 LGPD 제18조(VI))을 행사하면 이메일 주소가 영구 해시 수신거부 목록에 추가되어 마케팅, 재참여, 설문에 재사용되지 않습니다 — 제3자 또는 구매한 목록을 통한 재수입 방지를 포함합니다. 참고: LGPD에서 제18조(VI) 삭제는 동의 기반으로 처리된 데이터에 적용되며, 정당한 이익(제7조 IX) 기반 데이터는 목적 제한 원칙(제6조 II와 §2)과 처리 중단 요청권(제18조 §2)이 적용됩니다.

## 7. 귀하의 권리 (GDPR 및 LGPD)

소재지에 따라 GDPR(EU/EEA) 및/또는 브라질 LGPD(Lei Geral de Proteção de Dados, 법률 13.709/2018)의 권리가 있습니다.

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

### 7.5. 반대권 / 마케팅 옵트아웃

직접 마케팅 목적의 데이터 처리에 언제든지, 무료로, 이유 없이 반대할 수 있습니다. GDPR 제21조(2)에 따라 이 권리는 EU/EEA 사용자에게 절대적입니다: 반대를 받으면 모든 마케팅 처리를 멈춥니다. 브라질 사용자는 아래의 옵트아웃 메커니즘으로 마케팅 처리에 반대할 수 있습니다(LGPD 제8조 §5; 제18조 §2).

- **원클릭 수신거부:** 모든 마케팅 이메일에 실시간으로 반영되는 원클릭 수신거부 링크가 들어 있습니다(RFC 8058 List-Unsubscribe-Post)
- **앱 내 토글:** 설정 > 개인정보 > 커뮤니케이션 환경 설정
- **이메일:** dpo@jynx.app

### 7.6. 동의 철회권

다음에 대한 동의를 철회할 수 있습니다:

- **분석:** 설정 > 개인정보 보호 > '분석 활성화' 비활성화
- **광고 측정:** 설정 > 개인정보 > 광고 측정(§5.9 참조)
- **위치(매치 거리):** 앱 내 위치 토글을 꺼서 저장된 좌표를 삭제하거나, 기기 설정에서 위치 권한을 철회하세요(§5.11 참조)
- **푸시 알림:** 장치 설정
- **마케팅 커뮤니케이션:** 뉴스레터, 제품 업데이트, 재참여, 삭제/이탈 설문 — 원클릭 수신거부, 앱 내 커뮤니케이션 환경 설정 토글, dpo@jynx.app 로 철회할 수 있으며 계정은 유지됩니다

**참고:** OAuth 토큰(Google, Apple)은 계정을 삭제할 때 자동으로 해지됩니다(섹션 7.3).

철회는 철회 전에 이뤄진 처리의 적법성에 영향을 주지 않으며(GDPR 제7조(3); LGPD 제8조 §5) 동의 철회에 계정 삭제는 요구되지 않습니다.

### 7.7. 추가 LGPD 권리(브라질 사용자)

위 권리 외에 브라질에 있는 데이터 주체는 LGPD 제18조에 따라 다음 권리를 갖습니다: 처리 존재의 확인; 데이터 접근; 불완전·부정확·시대에 뒤떨어진 데이터의 정정; 불필요하거나 과도한 데이터의 익명화·차단·삭제(제18조(VI)는 동의 기반으로 처리된 데이터에 적용); 요청 시 다른 서비스나 제품 제공자로의 이동권; 동의로 처리된 개인 데이터의 삭제; 동의 거부 가능성과 그 결과에 대한 정보.

이 권리는 설정 > 개인정보 또는 encarregado(dpo@jynx.app)에게 연락하여 행사할 수 있습니다. 브라질 데이터 보호 기관 — Autoridade Nacional de Proteção de Dados(ANPD) — 에도 https://www.gov.br/anpd 를 통해 불만을 제기할 수 있습니다.

## 8. 데이터 보안

귀하의 데이터를 보호하기 위해 기술적 및 조직적 보안 조치를 구현합니다:

- **암호화:** HTTPS를 통한 안전한 통신
- **Firebase 보안 규칙:** Firestore 데이터에 대한 엄격한 접근 제어
- **인증:** Firebase Auth를 통한 안전한 세션 관리
- **입력 유효성 검사:** SecureTextInput를 통한 XSS 주입 방지
- **속도 제한:** 남용으로부터 보호(스팸 메시지, 자동화된 작업)
- **중재:** 콘텐츠 보고 및 중재 시스템
- **실시간 음성:** 음성 채팅방 미디어는 주류 음성 앱과 같은 표준인 WebRTC DTLS-SRTP로 전송 중 암호화되며, 앱과 서버 간 신호는 HTTPS/TLS로 전달됩니다.

100% 안전한 시스템은 없습니다. 개인 데이터 유출이 발생하면 지체 없이 — 권한에 위험을 초래할 가능성이 있는 유출을 알게 된 시점부터 가능하면 72시간 이내에 — 감독 기관에 통지하고(GDPR 제33조), 귀하에게 높은 위험을 초래할 가능성이 있는 경우 영향을 받는 사용자에게 지체 없이 알립니다(GDPR 제34조). 브라질 데이터 주체의 경우 관련 보안 사고를 기관이 정한 기한 내에 ANPD와 귀하에게 통지합니다(LGPD 제48조; 현재 ANPD 결정 CD/ANPD 제15/2024호에 따라 영업일 기준 3일).

## 9. 국제 데이터 전송

귀하의 데이터는 관할권 밖에 있는 서버로 전송되어 저장될 수 있습니다. 예를 들어:

- **Google Cloud / Firebase:** 글로벌 인프라(웹사이트의 Google Analytics 포함, §10 참조) — GDPR 표준 계약 조항과 동등한 보호 장치에 근거
- **Amazon Web Services(이미지 모더레이션):** §4.8의 이미지 모더레이션 처리는 AWS의 상파울루 리전(브라질)에서 실행됩니다. EU/EEA에서의 이전은 유럽위원회 표준 계약 조항을 담은 AWS의 데이터 처리 계약과 아래의 일반 보호 장치에 근거합니다. 이미지는 Jynx의 Google Cloud 인프라를 거쳐 AWS로 전달됩니다(위의 Google Cloud / Firebase 구간)
- **Sentry:** 미국 기반 서버. EU/EEA에서의 이전은 DPF에 자체 인증한 Sentry 법인의 경우 EU-미국 데이터 프라이버시 프레임워크(2023년 7월 시행, 무효화된 Privacy Shield를 대체)에, DPF가 적용되지 않는 경우 표준 계약 조항에 근거
- **이메일 서비스 제공업체(ESP):** §5.6의 마케팅, 재참여, 설문 커뮤니케이션 전송에 사용됩니다. ESP는 §4.4에 명시되어 있으며 서명된 데이터 처리 위탁 계약에 따라 처리자로 활동합니다
- **LiveKit(실시간 음성, 그리고 제공 시 화면 공유):** LiveKit Cloud는 서명된 데이터 처리 위탁 계약(§4.5)에 따라 실시간 음성(그리고 기능 제공 시 화면 공유) 미디어의 당사 처리자입니다. LiveKit Cloud는 미디어를 글로벌하게 라우팅합니다: 세션은 특정 리전에 고정되지 않고 LiveKit의 글로벌 인프라가 처리합니다. 음성 채팅방 오디오(그리고 제공 시 화면 공유 영상)는 실시간으로 라우팅되며 Jynx나 LiveKit이 녹음·저장·보존하지 않습니다. LiveKit은 §4.5에 설명된 운영 세션 메타데이터만 보관합니다. LiveKit으로의 개인 데이터 이전은 GDPR 조항과 국경 간 이전을 위한 유럽위원회 표준 계약 조항을 담은 LiveKit의 데이터 처리 부속서에 근거하며, 아래의 일반 보호 장치가 다른 처리자와 마찬가지로 LiveKit에도 적용됩니다.
- **Meta(광고 어트리뷰션 및 광고 측정):** §4.9와 §5.9의 공유는 Meta Platforms Ireland Ltd. 또는 Meta Platforms, Inc.에 도달하며 이들은 미국과 기타 국가에서 처리합니다. Meta의 도구와 관련된 개인 데이터의 국제 이전은 해당 계약상 보호 장치와 국제 이전 메커니즘의 적용을 받습니다. Jynx는 이들의 LGPD 제33조 및 ANPD 규정 준수를 확인하고 있습니다.

**보호 장치(GDPR, EU/EEA).** EU/EEA에서의 모든 이전은 적절성 결정, EU-미국 데이터 프라이버시 프레임워크 또는 표준 계약 조항이 보호하며, 필요한 경우 보완 조치가 함께 적용됩니다.

**보호 장치(LGPD, 브라질).** 브라질 사용자의 개인 데이터 이전은 LGPD 제33조가 규율합니다:

- **프랑스의 Jynx Group(통제자)으로:** ANPD 결정 CD/ANPD 제32/2026호(2026년 1월 26일 시행)가 EU — 프랑스 포함 — 를 적절한 보호 수준을 제공하는 곳으로 인정하므로 LGPD 제33조(I)에 따라 적법합니다. 이 구간에는 추가 이전 메커니즘이 필요하지 않습니다. (이 적절성 결정은 4년 이내에 ANPD가 재평가하며, 중단되면 Jynx는 ANPD 표준 계약 조항 같은 대체 제33조 메커니즘을 시행합니다.)
- **프랑스의 Brevo(이메일 ESP, 처리자)로:** 같은 ANPD 결정 CD/ANPD 제32/2026호(2026년 1월 26일 시행)가 EU — 프랑스 포함 — 를 적절한 보호 수준을 제공하는 곳으로 인정하므로 LGPD 제33조(I)에 따라 적법합니다. 이 구간에는 추가 이전 메커니즘이 필요하지 않습니다. (위와 같은 ANPD 재평가 대상이며, 적절성 결정이 중단되면 Jynx는 Brevo와의 ANPD 표준 계약 조항 같은 대체 제33조 메커니즘을 시행합니다.)
- **EU의 아동 보호 기술 제공업체로(해시 매칭, 처리자):** 위 구간들과 같은 ANPD 결정 CD/ANPD 제32/2026호 EU 적절성 결정이 적용됩니다 — 제공업체는 복원 불가능한 해시만 받고 EU 지역에서 매칭을 수행합니다(§4.7)
- **브라질의 AWS로(이미지 모더레이션, 처리자):** AWS Rekognition 구간은 국내에 머뭅니다 — AWS의 상파울루 리전에서 실행됩니다(§4.8). 이미지는 먼저 위의 일반 Google Cloud / Firebase 이전 조건이 적용되는 Jynx의 Google Cloud 인프라를 거쳐 전달됩니다

**투명성(ANPD 결정 CD/ANPD 제19/2024호).** ANPD 결정 CD/ANPD 제19/2024호 제17조 §2가 요구하는 정보는 본 정책에 모여 있습니다: 각 국제 이전의 형태·기간·구체적 목적과 목적지 국가(본 절과 인용하는 절); 통제자의 식별·연락처(§1); 데이터의 공동 이용과 그 목적(§4); 처리 주체의 책임과 채택된 보안 조치(§4와 §8); 접근하기 쉬운 채널과 ANPD에 청원할 권리를 포함한 귀하의 권리와 행사 수단(§7과 §12). 이러한 국제 이전에 쓰이는 계약 조항의 전문은 요청 시 당사의 데이터 보호 책임자(dpo@jynx.app)를 통해 15일 이내에 제공됩니다.

역사적 참고: 기존 계약을 ANPD SCC에 맞추기 위한 1년 유예 기간은 2025년 8월 23일에 끝났으며, ESP 같은 새로운 처리자 관계는 온보딩 시 SCC를 체결합니다.

## 10. 쿠키 및 유사한 기술

우리 모바일 애플리케이션은 전통적인 의미의 쿠키를 사용하지 않지만 다음을 사용합니다:

- **인증 토큰:** 안전한 방식으로 로컬에 저장
- **로컬 캐시:** 성능 향상을 위해(프로필 데이터, 최근 메시지)

**웹사이트.** Jynx 웹사이트(jynx.app)는 사용 방식을 이해하기 위해 Consent Mode v2가 적용된 Google Analytics 4(Google 제공)를 사용합니다. 분석 저장은 기본 거부입니다. 쿠키 배너를 수락하기 전까지 Google Analytics는 쿠키나 로컬 저장소 없이 실행되며 Google은 쿠키 없는, 식별자 없는 신호만 받습니다. 수락하면 전체 측정이 켜집니다. 수락 또는 거부 선택은 기기에 로컬로 저장됩니다(브라우저 localStorage, 키 "jynx-analytics-consent"). jynx.app 의 브라우저 저장소를 지우면 배너가 다시 나타나 선택을 바꿀 수 있습니다. Google은 결과 분석 데이터의 수신자입니다(§9 참조). 다른 처리자는 §4, 권리는 §7을 참조하세요.

**초대 링크.** 브라우저에서 초대 링크(jynx.app/invite/…)를 열고 앱스토어 다운로드 버튼을 누르면, 웹사이트가 그 초대 링크를 기기 클립보드에 기존 내용을 대체해 기록합니다. 이는 iOS(설치 참조 메커니즘이 없음)에서 앱 설치 어트리뷰션의 표준 기법으로, Jynx 앱이 첫 실행 시 링크를 보낸 사람의 초대로 참여하도록 제안할 수 있게 합니다. 웹사이트는 클립보드를 읽지 않습니다 — 이 링크를 기록할 뿐이며, 앱은 명시적 동의를 요청한 후 한 번만 읽습니다. 다른 클립보드 내용은 접근·수집되지 않습니다. 공유를 원하지 않으면 붙여넣기 프롬프트를 거부하고 초대 없이 참여하면 됩니다.

**추천과 크리에이터 캠페인.** 초대 코드 — 링크, QR 코드, 또는 직접 입력 — 로 Jynx에 참여하면 초대를 공유한 사람이나 캠페인에 어트리뷰션하고 관련 혜택을 적용하며 부정 가입을 탐지할 수 있도록 그 코드를 계정과 함께 기록합니다. 이 처리는 당사의 정당한 이익(§13 참조)에 근거하며 안티프로드 검사를 거칩니다. 어느 종류의 초대 코드든 같은 데이터가 수집되므로 귀하 쪽에서 달라지는 것은 없습니다. 일부 초대 코드는 크리에이터 어트리뷰션 캠페인에 속합니다: 쓴 코드가 그런 캠페인에 속하면 추가로 그 캠페인에 크레딧될 수 있습니다. 크리에이터 캠페인의 정산 기록은 가명 형태로 보관됩니다.

**화면 공유(제공 시).** 기능이 제공되면 음성 채팅방에서 기기 화면을 공유할 수 있습니다. 공유는 운영체제의 화면 캡처 권한이 허용되고 앱 내 명시적 확인을 마친 후에만 시작됩니다. 화면에 보이는 모든 것 — 알림 포함 — 은 채팅방의 다른 참가자에게 실시간으로 스트리밍되며 공유 내용에 대한 책임은 귀하에게 있습니다. 공유된 영상은 음성 오디오와 같이 LiveKit SFU(§4.5, §9)로 라우팅되는 실시간 미디어 트랙이며, Jynx나 LiveKit이 녹음·저장하지 않고 공유를 끝내면 멈춥니다.

## 11. 이 정책의 변경

이 개인정보 처리방침을 업데이트할 수 있습니다. 중대한 변경 사항이 있는 경우 다음을 통해 알려드립니다:

- 앱 내 알림을 통해
- 계정과 연결된 이메일 주소로

## 12. 문의하기

이 개인정보 처리방침에 대한 질문이나 권리를 행사하려면:

- **이메일:** dpo@jynx.app

**감독 기관:** 권리가 존중되지 않았다고 생각되면 불만을 제기할 수 있습니다:

- **EU/EEA 사용자:** 프랑스 CNIL(Commission Nationale de l'Informatique et des Libertés) — https://www.cnil.fr
- **브라질 사용자:** 브라질 ANPD(Autoridade Nacional de Proteção de Dados) — https://www.gov.br/anpd

감독 기관에 불만을 제기해도 귀하 관할의 필수 소비자 보호(예: 브라질 소비자방어법, 법률 8.078/90)를 포함해 다른 사법 구제를 찾을 권리는 그대로 유지됩니다.

## 13. 법적 근거와 동의

당사는 적법한 근거가 있을 때만 귀하의 개인 데이터를 처리합니다. 근거로 삼는 사항과 정책에서 설명하는 위치는 다음과 같습니다:

- 계약 이행 / 서비스 제공(GDPR 제6조(1)(b); LGPD 제7조 V) — 계정, 매칭, 메시징(§5.1–5.3)
- 정당한 이익(GDPR 제6조(1)(f); LGPD 제7조 IX와 제10조) — 보안, 사기 방지, 서비스 개선, 그리고 (브라질 사용자의 경우) §5.6에 설명된 기존 또는 최근 비활성 사용자를 위한 마케팅/재참여/설문 커뮤니케이션. 각각 문서화된 균형 평가가 뒷받침합니다
- 법적 의무(GDPR 제6조(1)(c); LGPD 제7조 II) — 법적 목적의 보관(§6)
- 법적 의무와 정당한 이익(GDPR 제6조(1)(c)와 6조(1)(f); LGPD 제7조 II와 IX) — §5.8의 아동 보호 이미지 분석과 §4.8의 이미지 모더레이션 처리를 포함한 불법·정책 위반 콘텐츠 탐지, 남용과 차단 회피 방지(§5.7), 법적 신고 의무 이행. 직접 메시지에서 공유된 이미지의 분석을 위해 Jynx는 현행 시행 중인 규정(EU) 2021/1232(ePrivacy 예외 조항)가 허용하는 온라인 아동 성학대물의 자발적 탐지에도 근거합니다.
- 동의(GDPR 제6조(1)(a); LGPD 제7조 I와 제8조) — 켠 경우의 분석, 푸시 알림, 그리고 (EU/EEA 사용자와 브라질 잠재고객/콜드/크로스셀 발송의 경우) §5.6에 따른 마케팅 커뮤니케이션
- 광고 측정(§5.9): 켠 경우 귀하의 동의(GDPR 제6조(1)(a); LGPD 제7조 I와 제8조). Android에서는 광고 측정 스위치가 기본 켜짐으로 표시된 사용자의 경우 언제든 반대할 권리와 함께 당사의 정당한 이익(LGPD 제7조 IX와 제10조)
- 매치 거리 기능의 대략적 위치(§5.11): 운영체제 위치 권한과 앱 내 위치 토글로 모으는 귀하의 동의(GDPR 제6조(1)(a); LGPD 제7조 I와 제8조). 언제든 철회할 수 있으며(§7.6) — 토글을 끄면 저장된 좌표가 지워집니다
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**동의는 구체적이고 알기 쉬워야 합니다.** 동의에 근거하는 경우 그 동의는 명확한 긍정적 행위로 이뤄지고, 특정 목적을 가리키며, 이 약관의 수락과 별도로 모입니다(LGPD 제8조 §1 — cláusula destacada). 포괄적이거나 묶음인 승인은 LGPD 제8조 §4와 GDPR 제4조(11), 제7조에 따라 무효입니다. Jynx 사용 자체는 마케팅 동의가 아닙니다. 유효한 동의 입증 책임은 Jynx에 있으므로(LGPD 제8조 §2; GDPR 제7조(1)) 모으는 각 동의의 날짜, 양식 버전, 언어, 범위를 기록합니다.

**철회.** 동의는 언제든지, 동의 때만큼 쉬운 절차로, 계정 삭제 없이 철회할 수 있습니다(LGPD 제8조 §5; GDPR 제7조(3)) — §7.5와 §7.6을 참조하세요. 철회는 철회 전의 처리 적법성에 영향을 주지 않습니다. 계정 삭제(§7.3)는 언제든 가능하지만 특정 동의를 철회하는 메커니즘은 아닙니다.
