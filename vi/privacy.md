---
title: "Chính Sách Bảo Mật"
description: "Tìm hiểu cách Jynx thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn. Đọc chính sách bảo mật của chúng tôi."
canonical: "https://jynx.app/vi/privacy.html"
locale: "vi"
dateModified: "2026-10-24"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Chính Sách Bảo Mật

Cập nhật lần cuối: Tháng 10 năm 2026

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

## 1. Giới Thiệu

Jynx ("chúng tôi", "của chúng tôi", "ứng dụng") là nền tảng game xã hội cho phép người chơi kết nối, thành lập đội và chơi cùng nhau.

### Thông Tin Pháp Lý:

- **Pháp Nhân:** Jynx Group
- **Liên Hệ Nhân Viên Bảo Vệ Quyền Riêng Tư:** dpo@jynx.app
- **EU / EEA jurisdiction:** France, European Union — this Privacy Policy complies with Regulation (EU) 2016/679 (GDPR) and Directive 2002/58/EC (ePrivacy), as transposed in France.
- **Brazilian jurisdiction:** This Privacy Policy also complies with Brazilian Law nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), which applies to Jynx's processing of personal data of data subjects located in Brazil under Art. 3 of the LGPD, regardless of Jynx having no establishment in Brazil.
- **Publication (LCEN):** Directeur de la publication: Antoine Haie. This website (jynx.app) is hosted by GitHub Pages and delivered through the Cloudflare content-delivery network.

For the purposes of the LGPD, Jynx Group is the controller (controlador) of your personal data. Our Data Protection Officer acts as the encarregado (DPO) and may be reached at dpo@jynx.app for any request relating to the LGPD. Although Jynx qualifies as a pequeno agente de tratamento de dados pessoais (small-scale agent) under ANPD Resolution CD/ANPD nº 2/2022, which exempts Jynx from the obligatory appointment of an encarregado, Jynx voluntarily maintains this published communication channel.

Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ dữ liệu cá nhân của bạn khi bạn sử dụng ứng dụng của chúng tôi.

## 2. Độ Tuổi Tối Thiểu và Xác Minh

Ứng dụng của chúng tôi dành cho người dùng từ 18 tuổi trở lên.

Khi tạo tài khoản, chúng tôi yêu cầu bạn cung cấp ngày sinh. Nếu bạn dưới 18 tuổi, bạn sẽ không thể tạo tài khoản hoặc sử dụng dịch vụ của chúng tôi.

Marketing to minors. Jynx is restricted to users aged 18 and over and applies an automated age gate. If we subsequently identify that a user is under 18 (LGPD Art. 14; GDPR Art. 8), we will immediately terminate the account, exclude the user from all marketing, re-engagement, and survey communications, and delete the associated marketing data. We never knowingly collect marketing consent from a minor.

## 3. Dữ Liệu Thu Thập

### 3.1. Dữ Liệu Đăng Ký và Hồ Sơ

Chúng tôi thu thập thông tin sau khi tạo và quản lý tài khoản của bạn:

#### Thông Tin Xác Thực:

- Email (cho tài khoản email/mật khẩu)
- Tên người dùng/biệt danh
- Ảnh hồ sơ (tùy chọn)
- Social login identifiers (Google, Apple) if you use these methods
- Discord identifiers (your Discord user ID) if you choose to connect your Discord account for the Discord integration — the connection uses Discord's identify-only OAuth and is not a sign-in method; you can disconnect it at any time
- Guest browsing (when available): you may explore the public parts of Jynx without creating an account; in guest mode we process only a locally-stored guest identifier and the technical data in §3.3 needed to serve the app — no profile is created and no account data is retained. To match, chat, or join communities you must create an account

#### Thông Tin Hồ Sơ:

- Ngày sinh (để xác minh độ tuổi)
- Quốc gia và múi giờ
- Ngôn ngữ nói
- Tiểu sử (tùy chọn)
- Sở thích game và khả năng sẵn có
- Handle độc nhất (được tạo tự động để khám phá bạn bè riêng tư)

### 3.2. Dữ Liệu Game

Để giúp bạn tìm đồng đội tương thích, chúng tôi thu thập:

#### Hồ Sơ Game:

- Game bạn chơi
- Cấp độ, rank và thống kê game
- Tướng/nhân vật yêu thích
- Phong cách chơi

#### Tích Hợp Riot Games API:

Chúng tôi lấy từ Riot Games API (với sự đồng ý của bạn):

- Tên Summoner và Riot ID
- Rank và lịch sử trận đấu (League of Legends, Valorant, v.v.)
- Thống kê tướng
- Lịch sử trận đấu gần đây

**Lý Do Thu Thập:** Hiển thị hồ sơ người chơi của bạn và cải thiện việc ghép cặp với người chơi khác.

### 3.3. Dữ Liệu Sử Dụng và Kỹ Thuật

Chúng tôi tự động thu thập một số dữ liệu kỹ thuật:

#### Phân Tích và Hiệu Suất:

- **Firebase Performance Monitoring:** Thời gian khởi động ứng dụng, độ mượt giao diện
- **Sentry:** Báo cáo lỗi và hiệu suất (với ẩn danh hóa dữ liệu cá nhân)
- **Firebase Crashlytics:** Báo cáo sự cố

#### Thông Tin Thiết Bị:

- Loại và model thiết bị
- Phiên bản hệ điều hành
- Phiên bản ứng dụng
- Định danh thiết bị và tín hiệu toàn vẹn thiết bị (xem §5.7)

#### Hành Vi Người Dùng:

- Màn hình đã truy cập và tính năng đã sử dụng
- Thời gian dành trong ứng dụng
- Tương tác giao diện

Bạn có thể tắt thu thập dữ liệu phân tích trong Cài đặt > Quyền riêng tư > "Bật Phân tích".

### 3.4. Dữ Liệu Giao Tiếp

- **Tin Nhắn:** Tin nhắn trong trò chuyện cộng đồng, tin nhắn riêng giữa người dùng, lịch sử trò chuyện
- **Thông Báo:** Token FCM (Firebase Cloud Messaging) cho thông báo đẩy

### 3.5. Nội Dung Do Người Dùng Tạo

- Ảnh đã tải lên (ảnh hồ sơ, ảnh bổ sung) and images shared in direct messages
- Báo cáo bảo mật và kiểm duyệt
- Sở thích thẩm mỹ (avatar, huy hiệu)

### 3.6. Dữ liệu âm thanh của phòng thoại

Jynx cung cấp các phòng thoại theo thời gian thực cho phép bạn trò chuyện với những người tham gia khác trong khi chơi game. Âm thanh phòng thoại chỉ được thu từ micrô của bạn sau khi bạn cấp quyền micrô của hệ điều hành và tham gia rõ ràng vào một phòng; không có âm thanh nào được thu trước khi cả hai bước này hoàn tất.

Jynx không bật các tính năng ghi âm, chuyển ngữ, Agent Insights hay Egress của LiveKit. Âm thanh phòng thoại được định tuyến theo thời gian thực bởi SFU (Selective Forwarding Unit) của LiveKit và không được Jynx hay LiveKit ghi âm, lưu trữ hay duy trì.

Khi bạn nói trong một phòng thoại, âm thanh của bạn được truyền theo thời gian thực đến những người tham gia khác trong phòng đó, tương tự như cách giọng nói hoạt động trong các ứng dụng trò chuyện thoại khác.

Âm thanh phòng thoại được xử lý theo sự đồng ý của bạn: bạn cấp quyền micrô và tham gia rõ ràng vào một phòng trước khi bất kỳ âm thanh nào được thu. Bạn có thể rút lại sự đồng ý bất cứ lúc nào bằng cách rời phòng hoặc thu hồi quyền micrô trong cài đặt thiết bị của mình.

## 4. Dịch Vụ Bên Thứ Ba và Chia Sẻ Dữ Liệu

### 4.1. Dịch Vụ Firebase (Google)

Chúng tôi sử dụng các dịch vụ Firebase sau, tất cả tuân thủ GDPR:

- **Firebase Authentication:** Quản lý tài khoản người dùng an toàn
- **Cloud Firestore:** Lưu trữ hồ sơ và dữ liệu game của bạn
- **Firebase Storage:** Lưu trữ ảnh hồ sơ của bạn
- **Cloud Functions:** Thực thi logic backend an toàn
- **Firebase Cloud Messaging:** Thông báo đẩy
- **Firebase App Check:** Bảo vệ chống lạm dụng và bot
- **Firebase Performance Monitoring:** Giám sát hiệu suất ứng dụng
- **Firebase Crashlytics:** Báo cáo sự cố

**Chính Sách Bảo Mật Firebase:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Giám Sát Lỗi)

Chúng tôi sử dụng Sentry để theo dõi lỗi và hiệu suất. Dữ liệu thu thập bao gồm:

- Dấu vết lỗi
- Bối cảnh kỹ thuật (HĐH, phiên bản ứng dụng)

**Chính Sách Bảo Mật Sentry:** https://sentry.io/privacy/

### 4.3. Riot Games API

Khi bạn liên kết tài khoản Riot Games, chúng tôi lấy thống kê game của bạn qua Riot Games API chính thức. Dữ liệu này chỉ được sử dụng để hiển thị hồ sơ của bạn và cải thiện việc ghép cặp.

**Chính Sách Bảo Mật Riot Games:** https://www.riotgames.com/en/privacy-notice

### 4.4. Email Service Provider (Marketing & Survey Communications)

To deliver the marketing, re-engagement, and uninstall/churn-survey emails described in §5.6, Jynx uses a third-party email service provider (ESP) acting as a processor (GDPR Art. 28; LGPD Art. 39 — operador). The ESP processes your email address and minimal delivery data (e.g., send/bounce status) solely on Jynx's documented instructions, under a signed Data Processing Agreement.

- **ESP identity, role, and location:** Brevo (Brevo SAS, Paris, France) — our Email Service Provider and data processor under a signed Data Processing Agreement. Brevo Privacy Policy: https://www.brevo.com/legal/privacypolicy/
- **Sub-processors:** Brevo's current list of sub-processors is published in its Data Processing Agreement (Terms of Use): https://www.brevo.com/legal/termsofuse/
- **International transfer basis:** See §9. Brevo is headquartered in France (EU). Transfers to Brevo therefore benefit from the EU's protection regime under GDPR and, for Brazilian users, the ANPD adequacy decision for the EU (Resolution nº 32/2026) — no SCCs or additional mechanism are required.

We do not sell your personal data. No tracking pixels or hidden analytics are embedded in marketing emails without a separate legal basis disclosed in §5.6.

### 4.5. LiveKit Cloud (thoại thời gian thực)

Jynx sử dụng LiveKit Cloud với tư cách đơn vị xử lý (GDPR Điều 28; LGPD Điều 39 — operador) theo một Thỏa thuận Xử lý Dữ liệu đã ký, để vận hành hạ tầng truyền thông thời gian thực định tuyến âm thanh phòng thoại giữa những người tham gia. LiveKit vận hành SFU (Selective Forwarding Unit) chuyển tiếp luồng âm thanh của mỗi người tham gia tới những người khác theo thời gian thực.

Jynx không bật các tính năng ghi âm, chuyển ngữ, Agent Insights hay Egress của LiveKit. Âm thanh phòng thoại được định tuyến theo thời gian thực bởi SFU (Selective Forwarding Unit) của LiveKit và không được Jynx hay LiveKit ghi âm, lưu trữ hay duy trì.

LiveKit có lưu giữ siêu dữ liệu phiên hoạt động — như danh tính người tham gia, mã nhận diện phòng, thời điểm kết nối và các chỉ số chất lượng — cho mục đích thanh toán, ngăn ngừa lạm dụng và vận hành theo Phụ lục Xử lý Dữ liệu của mình. Siêu dữ liệu này không được dùng để nhận dạng bạn ngoài nền tảng hay cho mục đích quảng cáo.

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

## 5. Sử Dụng Dữ Liệu

Chúng tôi sử dụng dữ liệu của bạn để:

### 1. Cung Cấp Dịch Vụ:

- Tạo và quản lý tài khoản của bạn
- Cho phép bạn kết nối với người chơi khác
- Tạo điều kiện thuận lợi cho việc tạo đội và tổ chức phiên game

### 2. Cá Nhân Hóa:

- Đề xuất đồng đội tương thích (dựa trên game, rank, phong cách)
- Hiển thị nội dung liên quan

### 3. Giao Tiếp:

- Gửi thông báo quan trọng (tìm thấy trận đấu, nhận tin nhắn)

Marketing, re-engagement, and uninstall/churn-survey emails are described separately in §5.6 Marketing Communications and are not covered by this transactional category.

### 4. Cải Thiện Dịch Vụ:

- Phân tích sử dụng để cải thiện tính năng
- Xác định và sửa lỗi
- Tối ưu hóa hiệu suất
- Generate avatar proposals and companion-message drafts using AI processors (§4.11)

### 5. Bảo Mật và Tuân Thủ:

- Ngăn chặn gian lận và lạm dụng
- Thực thi điều khoản sử dụng của chúng tôi
- Tuân thủ nghĩa vụ pháp lý

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

### 5.7. An toàn cộng đồng và trốn tránh lệnh cấm

Để giúp bảo vệ cộng đồng của chúng tôi khỏi hành vi lạm dụng, chúng tôi sử dụng định danh thiết bị và tín hiệu toàn vẹn thiết bị để phát hiện và ngăn chặn các cố gắng lách lệnh tạm ngừng hoặc cấm. Nếu chúng tôi liên kết một thiết bị với tài khoản bị cấm, thiết bị đó có thể bị ngăn tạo tài khoản mới hoặc đăng nhập. Nếu bạn cho rằng điều này xảy ra do nhầm lẫn, bạn có thể khiếu nại bằng cách liên hệ support@jynx.app.

Device-integrity signals are collected and evaluated with the assistance of Talsec freeRASP, an anti-tampering and device-integrity library embedded in the app. freeRASP operates on your device: it detects locally threats such as rooted devices, runtime hooking, and unlocked bootloaders, and reports its findings to us through our own error-monitoring provider (Sentry, §4.2) for abuse prevention; it does not send your data to any Talsec-operated service.

### 5.8. Child-Safety Image Analysis

To help protect children and meet our legal-reporting duties, Jynx uses automated systems to analyze images shared in direct messages by comparing hashes derived from those images against databases of known child sexual abuse material. For this analysis, the images themselves are not transmitted to third parties — only irreversible hashes are (see §4.7). Profile pictures are screened separately, by the image-moderation processing described in §4.8. This analysis exists solely for child-safety detection and our legal-reporting duties; it is not used for profiling, advertising, or any other purpose. Matches are handled as described in our [Child Safety Policy](/child-safety.html).

## 6. Lưu Giữ Dữ Liệu

### 6.1. Thời Gian Lưu Giữ

- **Dữ Liệu Hồ Sơ:** Được giữ lại khi tài khoản của bạn còn hoạt động
- **Nhật Ký và Phân Tích:** Firebase Analytics: 14 tháng (chính sách Firebase)
- **Marketing email addresses (consent-based):** Retained for as long as you have not opted out or deleted your account, plus a hashed record on the suppression list (see below) to ensure we do not re-contact you
- **Uninstall / churn survey email addresses:** Retained for a maximum of 60 days after the survey is sent (or, if no survey is sent, 60 days after uninstall/deletion), after which the address is deleted or irreversibly anonymized. No more than one (1) survey email is sent per user
- **Re-engagement of recently-lapsed accounts (LGPD legitimate-interest basis, Brazilian users only):** Consistent with CNIL guidance and the reasonable-expectations test, Jynx may use the email address of a recently-lapsed (non-erasure) account for re-engagement for up to 3 years after the last meaningful interaction, after which it is deleted or anonymized

### 6.2. Xóa Dữ Liệu

Bạn có thể yêu cầu xóa tài khoản bất cứ lúc nào (xem Mục 7).

**Lưu Giữ Pháp Lý:** Một số dữ liệu có thể được giữ lại lâu hơn để tuân thủ nghĩa vụ pháp lý của chúng tôi (ví dụ: báo cáo bảo mật, giao dịch tài chính).

When you delete your account, we purge your email address from our marketing CRM and email service provider. If you exercise the right to erasure (§7.3 / GDPR Art. 17 / LGPD Art. 18(VI) for consent-based data), your email address is added to a permanent hashed suppression list so that it is never re-used for marketing, re-engagement, or surveys — including protection against re-import via any third-party or purchased list. Note: under the LGPD, Art. 18(VI) deletion applies to data processed on the basis of consent; data processed on the basis of legitimate interest (Art. 7 IX) is instead governed by the purpose-limitation principle (Art. 6 II and §2) and your right to request cessation of processing (Art. 18 §2).

## 7. Quyền Của Bạn (GDPR)

Theo GDPR, bạn có các quyền sau:

### 7.1. Quyền Truy Cập

Bạn có thể yêu cầu bản sao tất cả dữ liệu chúng tôi có về bạn.

**Cách thực hiện quyền này:** Cài đặt > Quyền riêng tư > "Xuất Dữ Liệu Của Tôi"

Quy trình tạo tệp JSON chứa tất cả dữ liệu của bạn (hồ sơ, tin nhắn, thống kê, v.v.). Liên kết tải xuống có hiệu lực trong 7 ngày.

### 7.2. Quyền Sửa Chữa

Bạn có thể sửa đổi thông tin hồ sơ bất cứ lúc nào từ ứng dụng (tên người dùng, tiểu sử, sở thích, v.v.).

### 7.3. Quyền Xóa ("Quyền Được Quên")

Bạn có thể yêu cầu xóa tài khoản của mình.

**Cách thực hiện quyền này:** Cài đặt > Vùng Nguy Hiểm > "Xóa Tài Khoản Của Tôi"

#### Quy Trình Xóa Tự Động:

1. Xác nhận hai bước để ngăn xóa vô tình
2. Ẩn danh hóa ngay lập tức dữ liệu cá nhân của bạn (Firestore)
3. Xóa tài khoản Firebase Authentication của bạn (tự động thu hồi tất cả token OAuth)
4. Cung cấp ID ẩn danh làm tham chiếu
5. Tùy chọn xóa tin nhắn và nội dung đã tạo của bạn

**Quan Trọng:** Xóa là không thể đảo ngược. Một số dữ liệu ẩn danh có thể được giữ lại cho mục đích thống kê (tuân thủ GDPR).

**Yêu Cầu Xóa Thủ Công:** Đối với yêu cầu xóa dữ liệu cụ thể (ví dụ: chỉ xóa tin nhắn từ cộng đồng cụ thể, xóa ảnh Storage, hoặc các trường hợp đặc biệt khác), vui lòng liên hệ Nhân viên Bảo vệ Dữ liệu của chúng tôi tại dpo@jynx.app. Chúng tôi sẽ xử lý yêu cầu thủ công trong vòng 30 ngày theo yêu cầu của GDPR.

### 7.4. Quyền Di Chuyển Dữ Liệu

Việc xuất dữ liệu (Mục 7.1) cho phép bạn lấy dữ liệu của mình ở định dạng có cấu trúc, có thể đọc được bằng máy (JSON).

### 7.5. Quyền Phản Đối

Bạn có thể phản đối việc xử lý dữ liệu của bạn cho mục đích tiếp thị trực tiếp.

- **One-click unsubscribe:** every marketing email includes a one-click unsubscribe link (RFC 8058 List-Unsubscribe-Post) honored in real time
- **In-app toggle:** Settings > Privacy > Communications Preferences
- **Email:** dpo@jynx.app

### 7.6. Quyền Rút Lại Sự Đồng Ý

Bạn có thể rút lại sự đồng ý của mình cho:

- **Phân Tích:** Cài đặt > Quyền riêng tư > Tắt "Bật Phân tích"
- **Thông Báo Đẩy:** Cài đặt thiết bị
- **Marketing Communications:** Newsletter, product updates, re-engagement, and uninstall/churn surveys — withdrawable via one-click unsubscribe, the in-app communications-preferences toggle, or dpo@jynx.app, without terminating your account

**Lưu Ý:** Token OAuth (Google, Apple) được tự động thu hồi khi bạn xóa tài khoản (Mục 7.3).

Withdrawal does not affect the lawfulness of processing carried out before withdrawal (GDPR Art. 7(3); LGPD Art. 8 §5), and withdrawing consent never requires you to delete your account.

### 7.7. Additional LGPD Rights (Brazilian Users)

In addition to the rights above, data subjects located in Brazil have the following rights under LGPD Art. 18: confirmation of the existence of processing; access to the data; correction of incomplete, inaccurate, or out-of-date data; anonymization, blocking, or deletion of unnecessary or excessive data (Art. 18(VI) applies to data processed on the basis of consent); portability to another service or product provider, upon request; deletion of personal data processed with consent; and information about the possibility of denying consent and the consequences of doing so.

You may exercise these rights via Settings > Privacy or by contacting the encarregado at dpo@jynx.app. You may also lodge a complaint with the Brazilian data protection authority — the Autoridade Nacional de Proteção de Dados (ANPD) — at https://www.gov.br/anpd.

## 8. Bảo Mật Dữ Liệu

Chúng tôi triển khai các biện pháp bảo mật kỹ thuật và tổ chức để bảo vệ dữ liệu của bạn:

- **Mã Hóa:** Giao tiếp an toàn qua HTTPS
- **Quy Tắc Bảo Mật Firebase:** Kiểm soát truy cập chặt chẽ đến dữ liệu Firestore
- **Xác Thực:** Quản lý phiên an toàn qua Firebase Auth
- **Xác Thực Đầu Vào:** Ngăn chặn tiêm XSS qua SecureTextInput
- **Giới Hạn Tốc Độ:** Bảo vệ chống lạm dụng (spam tin nhắn, hành động tự động)
- **Kiểm Duyệt:** Hệ thống báo cáo và kiểm duyệt nội dung
- **Real-time voice:** Voice-room media is encrypted in transit using WebRTC DTLS-SRTP, the same standard used by mainstream voice apps; signaling between the app and our servers is over HTTPS/TLS.

No system is 100% secure. In case of a personal data breach, we will notify the competent supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of a breach that is likely to result in a risk to your rights (GDPR Art. 33), and we will communicate the breach to affected users without undue delay where it is likely to result in a high risk to you (GDPR Art. 34). For data subjects in Brazil, we will also communicate relevant security incidents to the ANPD and to you within the deadline set by the authority (LGPD Art. 48; currently 3 business days under ANPD Resolution CD/ANPD nº 15/2024).

## 9. Chuyển Giao Dữ Liệu Quốc Tế

Dữ liệu của bạn có thể được chuyển và lưu trữ trên máy chủ bên ngoài Liên minh Châu Âu, bao gồm:

- **Google Cloud / Firebase:** Sử dụng cơ sở hạ tầng toàn cầu với tuân thủ GDPR
- **Amazon Web Services (image moderation):** The image-moderation processing described in §4.8 runs in AWS's São Paulo region (Brazil); transfers from the EU/EEA rely on AWS's data-processing agreement incorporating the European Commission's standard contractual clauses, together with the general guarantees below. The image is relayed to AWS through Jynx's Google Cloud infrastructure (the Google Cloud / Firebase leg above)
- **Sentry:** Máy chủ tại Mỹ với tuân thủ Privacy Shield
- **Email Service Provider (ESP):** Used to deliver the marketing, re-engagement, and survey communications described in §5.6. The ESP is named in §4.4 and acts as a processor under a signed Data Processing Agreement
- **LiveKit (real-time voice, and screen share when available):** LiveKit Cloud is our processor for real-time voice (and, when the feature is available, screen-share) media under a signed Data Processing Agreement (§4.5). LiveKit Cloud routes media globally: sessions are served by LiveKit's global infrastructure without pinning to a specific region. Voice-room audio (and screen-share video when available) is routed in real time and is not recorded, stored, or persisted by Jynx or by LiveKit; LiveKit retains only the operational session metadata described in §4.5. Transfers of personal data to LiveKit rely on LiveKit's Data Processing Addendum, which incorporates GDPR terms and the European Commission's standard contractual clauses for cross-border transfers, together with the general guarantees below, which apply to LiveKit as they do to our other processors.

**Guarantees (GDPR, EU/EEA).** All transfers from the EU/EEA are covered by an adequacy decision, the EU-US Data Privacy Framework, or standard contractual clauses, together with supplementary measures where required.

**Guarantees (LGPD, Brazil).** Transfers of Brazilian users' personal data are governed by LGPD Art. 33:

- **To Jynx Group in France (controller):** Lawful under LGPD Art. 33(I) by virtue of ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (This adequacy decision is subject to reassessment by the ANPD within four years; if suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses.)
- **To Brevo in France (email ESP, processor):** Lawful under LGPD Art. 33(I) by virtue of the same ANPD Resolution CD/ANPD nº 32/2026 (in force 26 January 2026), which recognizes the European Union — including France — as providing an adequate level of protection. No additional transfer mechanism is required for this leg. (Subject to the same ANPD reassessment described above; if the adequacy decision is suspended, Jynx will implement an alternative Art. 33 mechanism such as the ANPD standard contractual clauses with Brevo.)
- **To child-safety technology providers in the EU (hash matching, processors):** Covered by the same ANPD Resolution CD/ANPD nº 32/2026 EU adequacy decision as the legs above — the providers receive only irreversible hashes and perform the matching in the EU region (§4.7)
- **To AWS in Brazil (image moderation, processor):** The AWS Rekognition hop stays in-country — it runs in AWS's São Paulo region (§4.8). The image is first relayed through Jynx's Google Cloud infrastructure, which is covered by the general Google Cloud / Firebase transfer terms above

Historical note: the one-year grace period for adapting existing contracts to the ANPD SCCs ended on 23 August 2025; new processor relationships such as the ESP execute the SCCs at onboarding.

## 10. Cookie và Công Nghệ Tương Tự

Ứng dụng di động của chúng tôi không sử dụng cookie theo nghĩa truyền thống, nhưng sử dụng:

- **Token Xác Thực:** Được lưu trữ cục bộ một cách an toàn
- **Bộ Nhớ Cache Cục Bộ:** Để cải thiện hiệu suất (dữ liệu hồ sơ, tin nhắn gần đây)

**Website.** The Jynx website (jynx.app) uses Google Analytics 4 (provided by Google) with Consent Mode v2 to understand how the site is used. Analytics storage is denied by default: until you accept the cookie banner, Google Analytics runs without cookies or local storage and Google receives only cookieless, identifier-free signals; if you accept, full measurement is enabled. Your choice — accept or decline — is stored locally on your device (browser localStorage, key "jynx-analytics-consent"). Clearing your browser storage for jynx.app makes the banner appear again so you can change your choice. Google acts as a recipient of the resulting analytics data (see §9); see §4 for our other processors and §7 for your rights.

**Invitation links.** When you open an invitation link (jynx.app/invite/…) in your browser and tap the App Store download button, the website writes that invitation link into your device clipboard, replacing its previous content. This is a standard technique for attributing app installs on iOS (which has no install-referrer mechanism): it lets the Jynx app, at first launch, propose joining with the invitation of the person who sent you the link. The website never reads your clipboard — it only writes this link — and the app reads it only once, after asking for your explicit consent. No other clipboard content is accessed or collected. If you prefer not to share it, simply decline the paste prompt and join without an invitation.

**Referrals and creator campaigns.** When you join Jynx with an invitation code — from a link, a QR code, or entered manually — we record that code with your account so we can attribute the invitation to the person or campaign that shared it, apply the associated benefits, and detect fraudulent sign-ups. This processing relies on our legitimate interests (see §13) and is subject to our anti-fraud checks; nothing changes on your side, as the same data is collected whichever kind of invitation code you use. Some invitation codes also belong to creator attribution campaigns: if the code you used is part of such a campaign, it may additionally credit that campaign. Payout records for creator campaigns are kept in pseudonymous form.

**Screen sharing (when available).** When the feature is available, you may share your device screen in a voice room. Sharing starts only after the operating system's screen-capture permission is granted and an explicit in-app acknowledgment is given. Everything visible on your screen — including notifications — is streamed live to the other participants in the room, and you are responsible for what you share. The shared video is a live media track routed like voice audio through the LiveKit SFU (§4.5, §9): it is not recorded or stored by Jynx or LiveKit, and it stops when you end the share.

## 11. Thay Đổi Chính Sách Này

Chúng tôi có thể cập nhật chính sách bảo mật này. Trong trường hợp thay đổi lớn, chúng tôi sẽ thông báo cho bạn:

- Qua thông báo trong ứng dụng
- Qua email đến địa chỉ liên kết với tài khoản của bạn

## 12. Liên Hệ Với Chúng Tôi

Để biết bất kỳ câu hỏi nào về chính sách bảo mật này hoặc để thực hiện quyền của bạn:

- **Email:** dpo@jynx.app

**Cơ Quan Giám Sát:** If you believe your rights have not been respected, you may lodge a complaint:

- **EU/EEA users:** with the CNIL (Commission Nationale de l'Informatique et des Libertés), France — https://www.cnil.fr
- **Brazilian users:** with the ANPD (Autoridade Nacional de Proteção de Dados), Brazil — https://www.gov.br/anpd

Filing a complaint with a supervisory authority does not prejudice your right to seek other judicial remedies available to you, including the mandatory consumer protections that apply in your jurisdiction (e.g., the Brazilian Consumer Defense Code, Law 8.078/90).

## 13. Sự Đồng Ý

We process your personal data only where we have a lawful basis. The lawful bases we rely on, and where each is described in this Policy, are:

- Performance of a contract / provision of the Service (GDPR Art. 6(1)(b); LGPD Art. 7, V) — account, matching, and messaging (§5.1–5.3)
- Legitimate interests (GDPR Art. 6(1)(f); LGPD Art. 7, IX and Art. 10) — security, fraud prevention, service improvement, and (for Brazilian users) marketing/re-engagement/survey communications to existing or recently-lapsed users as described in §5.6, each supported by a documented balancing assessment
- Legal obligation (GDPR Art. 6(1)(c); LGPD Art. 7, II) — retention for legal purposes (§6)
- Legal obligation and legitimate interests (GDPR Art. 6(1)(c) and 6(1)(f); LGPD Art. 7, II and IX) — detection of illegal and policy-violating content, including the child-safety image analysis described in §5.8 and the image-moderation processing in §4.8, prevention of abuse and ban evasion (§5.7), and compliance with legal reporting duties. For the analysis of images shared in direct messages, Jynx also relies on the voluntary detection of online child sexual abuse permitted by Regulation (EU) 2021/1232 (the ePrivacy derogation, as currently in force).
- Consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) — analytics where you have enabled them, push notifications, and (for EU/EEA users and for Brazilian prospects/cold/cross-sell sends) marketing communications per §5.6
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Consent must be specific and informed.** Where we rely on your consent, it is given by a clear affirmative act, refers to specified purposes, and is captured separately from your acceptance of these terms (LGPD Art. 8 §1 — cláusula destacada). Generic or bundled authorizations are void under LGPD Art. 8 §4 and invalid under GDPR Art. 4(11) and Art. 7. Using Jynx does not by itself constitute consent to marketing. The burden of proving valid consent rests with Jynx (LGPD Art. 8 §2; GDPR Art. 7(1)); we therefore record the date, form version, language, and scope of each consent we collect.

**Withdrawal.** You may withdraw any consent at any time, through a procedure that is as easy as giving it and that does not require you to delete your account (LGPD Art. 8 §5; GDPR Art. 7(3)) — see §7.5 and §7.6. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. Deleting your account (§7.3) remains available at any time but is not the mechanism for withdrawing a specific consent.
