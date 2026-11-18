---
title: "Chính Sách Bảo Mật"
description: "Tìm hiểu cách Jynx thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn. Đọc chính sách bảo mật của chúng tôi."
canonical: "https://jynx.app/vi/privacy.html"
locale: "vi"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Chính Sách Bảo Mật

Cập nhật lần cuối: 17 tháng 11 năm 2026

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

## 1. Giới Thiệu

Jynx ("chúng tôi", "của chúng tôi", "ứng dụng") là nền tảng game xã hội cho phép người chơi kết nối, thành lập đội và chơi cùng nhau.

### Thông Tin Pháp Lý:

- **Pháp Nhân:** Jynx Group (Société par Actions Simplifiée, SIREN 991443896, đăng ký tại Nantes, Pháp)
- **Cán bộ Bảo vệ Dữ liệu / Encarregado:** dpo@jynx.app
- **Cơ sở tài phán EU / EEA:** Pháp, Liên minh châu Âu — Chính sách Quyền riêng tư này tuân thủ Quy định (EU) 2016/679 (GDPR) và Chỉ thị 2002/58/EC (ePrivacy) theo văn bản luật hóa tại Pháp.
- **Cơ sở tài phán Brazil:** Chính sách Quyền riêng tư này cũng tuân thủ Luật Brazil số 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), luật này áp dụng cho việc Jynx xử lý dữ liệu cá nhân của các chủ thể dữ liệu đang ở Brazil theo Điều 3 của LGPD, bất kể Jynx không có cơ sở tại Brazil.
- **Thông tin xuất bản (LCEN):** Directeur de la publication: Antoine Haie. Trang web này (jynx.app) được lưu trữ bởi GitHub Pages và phân phối qua mạng phân phối nội dung Cloudflare.

Theo LGPD, Jynx Group là bên kiểm soát dữ liệu (controlador) đối với dữ liệu cá nhân của bạn. Cán bộ Bảo vệ Dữ liệu của chúng tôi đảm nhiệm vai trò encarregado (DPO) và có thể được liên hệ tại dpo@jynx.app cho mọi yêu cầu liên quan đến LGPD. Tuy Jynx được xếp là pequeno agente de tratamento de dados pessoais (chủ thể xử lý quy mô nhỏ) theo Nghị quyết CD/ANPD nº 2/2022 của ANPD — nghị quyết miễn nghĩa vụ bổ nhiệm encarregado bắt buộc — Jynx vẫn tự nguyện duy trì kênh liên lạc công khai này.

Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ dữ liệu cá nhân của bạn khi bạn sử dụng ứng dụng của chúng tôi.

## 2. Độ Tuổi Tối Thiểu và Xác Minh

Ứng dụng của chúng tôi dành cho người dùng từ 18 tuổi trở lên.

Khi tạo tài khoản, chúng tôi yêu cầu bạn cung cấp ngày sinh. Nếu bạn dưới 18 tuổi, bạn sẽ không thể tạo tài khoản hoặc sử dụng dịch vụ của chúng tôi.

Không tiếp thị cho người chưa thành niên. Jynx chỉ dành cho người dùng từ 18 tuổi trở lên và áp dụng cổng kiểm tra độ tuổi tự động. Nếu sau đó chúng tôi xác định một người dùng dưới 18 tuổi (Điều 14 LGPD; Điều 8 GDPR), chúng tôi sẽ ngay lập tức chấm dứt tài khoản, loại người dùng khỏi mọi thông cáo tiếp thị, tái gắn kết và khảo sát, và xóa dữ liệu tiếp thị liên quan. Chúng tôi không bao giờ cố ý thu thập sự đồng ý tiếp thị từ người chưa thành niên.

## 3. Dữ Liệu Thu Thập

### 3.1. Dữ Liệu Đăng Ký và Hồ Sơ

Chúng tôi thu thập thông tin sau khi tạo và quản lý tài khoản của bạn:

#### Thông Tin Xác Thực:

- Email (cho tài khoản email/mật khẩu)
- Tên người dùng/biệt danh
- Ảnh hồ sơ (tùy chọn)
- Định danh đăng nhập mạng xã hội (Google, Apple) nếu bạn dùng các phương thức này
- Định danh Discord (ID người dùng Discord của bạn) nếu bạn chọn kết nối tài khoản Discord để dùng tích hợp Discord — kết nối dùng OAuth chỉ định danh của Discord và không phải phương thức đăng nhập; bạn có thể ngắt kết nối bất cứ lúc nào
- Duyệt với tư cách khách (khi có sẵn): bạn có thể khám phá các phần công khai của Jynx mà không cần tạo tài khoản; ở chế độ khách chúng tôi chỉ xử lý một định danh khách lưu cục bộ và dữ liệu kỹ thuật tại §3.3 cần thiết để vận hành ứng dụng — không tạo hồ sơ và không giữ dữ liệu tài khoản nào. Để ghép đôi, trò chuyện hoặc tham gia cộng đồng, bạn phải tạo tài khoản

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

Đo lường quảng cáo với Meta tách riêng với phân tích và có công tắc riêng: xem §5.9.

### 3.4. Dữ Liệu Giao Tiếp

- **Tin Nhắn:** Tin nhắn trong trò chuyện cộng đồng, tin nhắn riêng giữa người dùng, lịch sử trò chuyện
- **Thông Báo:** Token FCM (Firebase Cloud Messaging) cho thông báo đẩy

### 3.5. Nội Dung Do Người Dùng Tạo

- Ảnh đã tải lên (ảnh hồ sơ, ảnh bổ sung) và hình ảnh chia sẻ trong tin nhắn trực tiếp
- Báo cáo bảo mật và kiểm duyệt
- Sở thích về vật phẩm trang trí (avatar, huy hiệu)

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

### 4.4. Nhà cung cấp Dịch vụ Email (Thông cáo Tiếp thị & Khảo sát)

Để gửi các email tiếp thị, tái gắn kết và khảo sát gỡ cài đặt/churn mô tả tại §5.6, Jynx sử dụng một nhà cung cấp dịch vụ email bên thứ ba (ESP) đóng vai trò bên xử lý dữ liệu (Điều 28 GDPR; Điều 39 LGPD — operador). ESP chỉ xử lý địa chỉ email của bạn và dữ liệu phân phối tối thiểu (ví dụ trạng thái gửi/thất bại) theo đúng chỉ dẫn văn bản của Jynx, trong khuôn khổ một Thỏa thuận Xử lý Dữ liệu đã ký.

- **Danh tính, vai trò và vị trí của ESP:** Brevo (Brevo SAS, Paris, Pháp) — Nhà cung cấp Dịch vụ Email và bên xử lý dữ liệu của chúng tôi theo một Thỏa thuận Xử lý Dữ liệu đã ký. Chính sách Quyền riêng tư của Brevo: https://www.brevo.com/legal/privacypolicy/
- **Các bên xử lý phụ:** Danh sách bên xử lý phụ hiện tại của Brevo được công bố trong Thỏa thuận Xử lý Dữ liệu (Điều khoản Sử dụng) của hãng: https://www.brevo.com/legal/termsofuse/
- **Cơ sở chuyển dữ liệu quốc tế:** Xem §9. Brevo có trụ sở tại Pháp (EU). Vì vậy các lần chuyển dữ liệu đến Brevo hưởng chế độ bảo vệ của EU theo GDPR và, với người dùng Brazil, quyết định adequacy của ANPD cho EU (Nghị quyết nº 32/2026) — không cần SCC hay cơ chế bổ sung nào.

Chúng tôi không bán dữ liệu cá nhân của bạn. Không có pixel theo dõi hay phân tích ẩn nào được nhúng vào email tiếp thị khi chưa có cơ sở pháp lý riêng được công bố tại §5.6.

### 4.5. LiveKit Cloud (thoại thời gian thực)

Jynx sử dụng LiveKit Cloud với tư cách đơn vị xử lý (GDPR Điều 28; LGPD Điều 39 — operador) theo một Thỏa thuận Xử lý Dữ liệu đã ký, để vận hành hạ tầng truyền thông thời gian thực định tuyến âm thanh phòng thoại giữa những người tham gia. LiveKit vận hành SFU (Selective Forwarding Unit) chuyển tiếp luồng âm thanh của mỗi người tham gia tới những người khác theo thời gian thực.

Jynx không bật các tính năng ghi âm, chuyển ngữ, Agent Insights hay Egress của LiveKit. Âm thanh phòng thoại được định tuyến theo thời gian thực bởi SFU (Selective Forwarding Unit) của LiveKit và không được Jynx hay LiveKit ghi âm, lưu trữ hay duy trì.

LiveKit có lưu giữ siêu dữ liệu phiên hoạt động — như danh tính người tham gia, mã nhận diện phòng, thời điểm kết nối và các chỉ số chất lượng — cho mục đích thanh toán, ngăn ngừa lạm dụng và vận hành theo Phụ lục Xử lý Dữ liệu của mình. Siêu dữ liệu này không được dùng để nhận dạng bạn ngoài nền tảng hay cho mục đích quảng cáo.

### 4.6. App Store / Google Play (Mua hàng trong ứng dụng và Gói đăng ký)

Gói đăng ký Jynx+ và Founder Pack được bán trong ứng dụng qua App Store của Apple và Google Play, các nền tảng này đóng vai trò merchant of record cho các giao dịch mua này (xem Điều khoản Dịch vụ, Mục 8). Dữ liệu phương thức thanh toán (ví dụ thông tin thẻ) chỉ được Apple/Google thu thập và xử lý theo chính sách quyền riêng tư riêng của mỗi bên; Jynx không thu thập, nhận hay lưu bất kỳ dữ liệu phương thức thanh toán nào.

Qua nhà cung cấp thanh toán RevenueCat (một bên xử lý dữ liệu hoạt động theo Thỏa thuận Xử lý Dữ liệu đã ký; Điều 28 GDPR; Điều 39 LGPD — operador), Jynx chỉ nhận thông tin cần thiết để cung cấp những gì bạn đã mua: trạng thái gói đăng ký và quyền lợi của bạn (ví dụ Jynx+ có đang hoạt động và ngày gia hạn), cấp Founder Pack đã mua, và các định danh giao dịch. Dữ liệu này được giữ trong thời gian cần thiết để cung cấp Dịch vụ và đáp ứng nghĩa vụ kế toán, lưu hồ sơ (§6), và chỉ được dùng để cấp và duy trì quyền lợi của bạn cũng như phòng chống gian lận. RevenueCat đặt tại Hoa Kỳ; các lần chuyển dữ liệu cá nhân đến RevenueCat dựa trên EU-US Data Privacy Framework (với các thực thể RevenueCat tự chứng nhận theo DPF) hoặc các điều khoản hợp đồng chuẩn khi DPF không áp dụng. Cơ chế chuyển dữ liệu áp dụng cho dữ liệu người dùng Brazil được xác nhận trong Hồ sơ Hoạt động Xử lý của chúng tôi (xem §9).

- Chính sách Quyền riêng tư của Apple: https://www.apple.com/legal/privacy/
- Chính sách Quyền riêng tư của Google: https://policies.google.com/privacy
- Chính sách Quyền riêng tư của RevenueCat: https://www.revenuecat.com/privacy

### 4.7. Các Nhà cung cấp Công nghệ Bảo vệ Trẻ em Chuyên biệt

Để giúp phát hiện tài liệu lạm dụng tình dục trẻ em đã biết (xem §5.8), Jynx hợp tác với các nhà cung cấp công nghệ bảo vệ trẻ em chuyên biệt đóng vai trò bên xử lý dữ liệu (Điều 28 GDPR; Điều 39 LGPD — operador). Các nhà cung cấp này chỉ nhận các mã băm không thể đảo ngược dẫn xuất từ hình ảnh — không bao giờ nhận chính hình ảnh — và thực hiện so khớp mã băm tại khu vực EU, chỉ nhằm mục đích phát hiện vì an toàn trẻ em theo đúng chỉ dẫn văn bản của Jynx. Việc tạo mã băm từ hình ảnh diễn ra bên trong hạ tầng Google Cloud của chính Jynx (xem §9).

### 4.8. Nhà cung cấp Kiểm duyệt Hình ảnh Đám mây (AWS)

Để giữ nền tảng an toàn, ảnh đại diện và ảnh thư viện được kiểm duyệt bởi một dịch vụ phân loại hình ảnh tự động — Amazon Rekognition, do Amazon Web Services (AWS) cung cấp, đóng vai trò bên xử lý dữ liệu (Điều 28 GDPR; Điều 39 LGPD — operador). Cho mục đích này, hình ảnh được truyền đến AWS và phân tích bằng học máy để phát hiện nội dung không phù hợp (ví dụ khỏa thân hay nội dung khiêu dâm); kết quả là một nhãn do máy sinh kèm điểm độ tin cậy, được xử lý theo quy trình kiểm duyệt của chúng tôi (xem Chính sách An toàn Trẻ em). Việc xử lý này chỉ dùng cho kiểm duyệt nội dung và an toàn — không bao giờ dùng để lập hồ sơ, quảng cáo hay bất kỳ mục đích nào khác. AWS xử lý dữ liệu này tại vùng AWS được cấu hình cho dịch vụ (hiện là São Paulo, Brazil); các biện pháp bảo đảm chuyển dữ liệu tại §9 được áp dụng. Như phần còn lại của Dịch vụ, hình ảnh được hạ tầng Google Cloud của chính Jynx tiếp nhận trước khi chuyển tiếp đến AWS (xem §9).

### 4.9. Phân bổ Quảng cáo (Meta, Apple ATT, Google Play Install Referrer)

Để đo lường xem các lượt cài ứng dụng có bắt nguồn từ hoạt động tiếp thị hay không, chúng tôi sử dụng các công nghệ quảng cáo và phân bổ, có sự đồng ý của bạn khi bắt buộc: Meta (Facebook) App Events SDK (Meta Platforms Ireland) và Google Play Install Referrer API. Trên thiết bị Apple, Meta SDK chỉ được khởi tạo sau khi bạn cấp quyền App Tracking Transparency (ATT); nếu không cấp, không có định danh quảng cáo nào (IDFA) được thu thập và SDK không được khởi tạo. Trên Android, Google Play Install Referrer API cho biết lượt cài của bạn đến từ danh mục cửa hàng hay liên kết chiến dịch, và định danh quảng cáo (GAID) được dùng theo cài đặt ID quảng cáo của thiết bị bạn. Các sự kiện gửi đến Meta chỉ giới hạn ở kích hoạt ứng dụng và siêu dữ liệu sự kiện ứng dụng (bao gồm, khi bạn đã đăng nhập, định danh người dùng ứng dụng của bạn — dữ liệu này bị xóa khỏi SDK khi bạn đăng xuất), được xử lý theo chỉ dẫn của Jynx cho mục đích phân bổ và đo lường chiến dịch.

Meta Platforms Ireland xử lý dữ liệu này với tư cách bên xử lý dữ liệu của chúng tôi cho mục đích phân bổ nêu trên; Meta Platforms, Inc. có thể đồng thời đóng vai trò bên kiểm soát độc lập cho các mục đích hợp pháp riêng của hãng theo điều khoản riêng của hãng (các Điều khoản Xử lý Dữ liệu của Meta và chính sách quyền riêng tư tại https://www.facebook.com/privacy/policy). Các lần chuyển dữ liệu đến Hoa Kỳ dựa trên EU-US Data Privacy Framework cho các thực thể Meta tự chứng nhận, hoặc các điều khoản hợp đồng chuẩn (§9). Bạn có thể từ chối hoặc thu hồi quyền ATT hay đặt lại ID quảng cáo bất cứ lúc nào trong cài đặt thiết bị; việc từ chối không ảnh hưởng việc bạn dùng Jynx.

**Đo lường quảng cáo.** Ngoài phân bổ lượt cài, chúng tôi còn đo lường chuyển đổi: các sự kiện chia sẻ với Meta bao gồm đăng ký tài khoản, hoàn tất onboarding và các giao dịch mua — kèm số tiền và đơn vị tiền tệ. Khi bạn đã đồng ý, một địa chỉ email hoặc số điện thoại đã băm (xáo trộn không thể đảo ngược) cũng có thể được chia sẻ để nâng cao chất lượng ghép đôi; điều này không bao giờ xảy ra với người dùng được đo lường trên cơ sở lợi ích hợp pháp của chúng tôi (bên dưới). Sự kiện đăng ký tài khoản cũng có thể bao gồm giới tính bạn tự khai. Không gì khác được chia sẻ — không tin nhắn, trường hồ sơ, trò chơi, cộng đồng, danh bạ, vị trí hay ảnh — và dữ liệu của bạn không bao giờ bị bán. Các cơ sở pháp lý, lựa chọn của bạn và phần công bố Apple SKAdNetwork được mô tả tại §5.9.

Lưu giữ: Jynx không giữ bản sao riêng của các sự kiện đã chia sẻ với Meta. Các sự kiện đã chia sẻ vẫn chịu quy trình lưu giữ và xóa của Meta Business Tools, áp dụng từ thời điểm chia sẻ.

### 4.10. Chương trình Creator (Đối tác) — KYC và Chi trả

Nếu bạn tham gia chương trình Creator (đối tác) của Jynx, chúng tôi xử lý thông tin danh tính, thuế và chi trả mà chương trình yêu cầu: số CPF hoặc CNPJ của bạn (xác thực trong ứng dụng), kênh chi trả bạn chọn — PayPal (xác định bằng email), chuyển khoản ngân hàng Wise (Brazil), hoặc khóa Pix — và hồ sơ hiệu suất chiến dịch của bạn (lượt đăng ký được phân bổ; xem §10 về giới thiệu). Hồ sơ chi trả được giữ dưới dạng bí danh hóa (§10). Chương trình tuân theo Creator Referral Terms và Self-Billing Mandate có phiên bản hóa mà bạn chấp nhận khi đăng ký (xem Điều khoản Dịch vụ §15).

Các khoản chi trả được thực hiện qua tổ chức thanh toán vận hành kênh bạn đã chọn: PayPal hoặc Wise nhận lệnh chuyển và dữ liệu cần thiết để xác minh danh tính của bạn, phòng chống gian lận và đáp ứng nghĩa vụ quản lý của họ, hoạt động theo điều khoản riêng với tư cách tổ chức thanh toán độc lập (chính sách quyền riêng tư của họ được công bố trên trang web của họ); khoản chi trả Pix là một lệnh chuyển do Jynx Group khởi tạo đến khóa Pix bạn cung cấp. Các biện pháp bảo đảm chuyển dữ liệu quốc tế áp dụng được mô tả tại §9.

### 4.11. Tính năng AI

**Tạo avatar.** Bài trắc nghiệm avatar có thể tạo các phương án avatar cách điệu cho hồ sơ của bạn. Việc tạo hiện chạy trên Cloudflare Workers AI (Cloudflare, Inc., bên xử lý dữ liệu) theo đúng chỉ dẫn văn bản của Jynx; nếu công cụ nền thay đổi, mục này sẽ được cập nhật trước hoặc cùng lúc với thay đổi. Đầu vào là các câu trả lời trắc nghiệm và sở thích phong cách chơi của bạn — không bao giờ là ảnh của bạn — cùng định danh người dùng của bạn; các phương án được trả về ứng dụng dưới dạng ảnh PNG hoặc WebP và được giữ tối đa 30 ngày để bạn có thể tải lại, sau đó bị xóa. Ảnh được tạo là ảnh tổng hợp — không phải ảnh chụp của bạn — và chịu cùng quy trình kiểm duyệt như các ảnh khác (§4.8).

**Tin nhắn đồng hành (Quimera).** Một số tin nhắn của ứng dụng đồng hành được soạn hoặc làm giàu bởi một hệ thống AI tạo sinh (Google Gemini, bên xử lý dữ liệu). Khi một tin nhắn do AI tạo, nó được gắn nhãn như vậy; bạn luôn được thông báo khi đang tương tác với một phần tử do AI tạo, theo Điều 50(1) của Đạo luật AI EU.

## 5. Sử Dụng Dữ Liệu

Chúng tôi sử dụng dữ liệu của bạn để:

### 1. Cung Cấp Dịch Vụ:

- Tạo và quản lý tài khoản của bạn
- Cho phép bạn kết nối với người chơi khác
- Tạo điều kiện thuận lợi cho việc tạo đội và tổ chức phiên game

### 2. Cá Nhân Hóa:

- Đề xuất đồng đội tương thích (dựa trên game, rank, phong cách)
- Hiển thị nội dung liên quan

### 3. Giao Tiếp (vận hành / giao dịch):

- Gửi cho bạn các thông báo dịch vụ quan trọng (trận ghép được tìm thấy, tin nhắn nhận được, cảnh báo an ninh tài khoản và thông báo thay đổi chính sách theo §11)

Các email tiếp thị, tái gắn kết và khảo sát gỡ cài đặt/churn được mô tả riêng tại §5.6 Thông cáo Tiếp thị và không thuộc danh mục giao dịch này.

### 4. Cải Thiện Dịch Vụ:

- Phân tích sử dụng để cải thiện tính năng
- Xác định và sửa lỗi
- Tối ưu hóa hiệu suất
- Tạo phương án avatar và bản nháp tin nhắn đồng hành bằng các bên xử lý AI (§4.11)

### 5. Bảo Mật và Tuân Thủ:

- Ngăn chặn gian lận và lạm dụng
- Thực thi điều khoản sử dụng của chúng tôi
- Tuân thủ nghĩa vụ pháp lý

Chúng tôi có thể công bố số liệu thống kê ẩn danh, tổng hợp, dẫn xuất từ việc sử dụng ứng dụng (ví dụ: người chơi hình thành duo như thế nào). Các số liệu này không bao giờ định danh người dùng cá nhân.

### 5.6. Thông cáo Tiếp thị

Ngoài các thông báo vận hành mô tả tại §5.3, chúng tôi có thể gửi cho bạn thông cáo tiếp thị và tái gắn kết qua email, bao gồm: cập nhật sản phẩm và thông báo tính năng về ứng dụng Jynx; bản tin; tin nhắn mời bạn quay lại ứng dụng; và các khảo sát phản hồi gỡ cài đặt/churn ngắn (ví dụ: "Tại sao bạn ngừng dùng Jynx?"). Các thông cáo này khác với thông báo giao dịch/dịch vụ.

**Cơ sở pháp lý — người dùng Liên minh châu Âu / EEA (GDPR + ePrivacy).** Email tiếp thị và tái gắn kết gửi đến người dùng EU/EEA được gửi trên cơ sở sự đồng ý chọn tham gia rõ ràng trước đó của bạn (Điều 13(1) Chỉ thị ePrivacy, luật hóa tại Pháp bởi Điều L. 34-5 của Code des postes et des communications électroniques; Điều 6(1)(a) và Điều 7 GDPR). Sau khi ra mắt gói đăng ký trả phí (Jynx+) và mua một lần trong ứng dụng (Founder Pack), Dịch vụ giờ đây là dịch vụ có thù lao, và các giao dịch mua đó cấu thành một "bán hàng" theo nghĩa bản án C-654/23 của CJEU (13/11/2025). Do đó ngoại lệ "soft opt-in" của Điều 13(2) ePrivacy về nguyên tắc sẵn có cho chúng tôi đối với các sản phẩm và dịch vụ tương tự cho khách hàng hiện hữu. Tuy nhiên, với tư thế thận trọng, chúng tôi tiếp tục dựa trên sự đồng ý chọn tham gia rõ ràng trước đó của bạn; chúng tôi chỉ sẽ bắt đầu dựa vào cơ sở soft-opt-in sau một đánh giá lại có văn bản ghi trong Hồ sơ Hoạt động Xử lý và một thông báo cập nhật cho bạn.

**Cơ sở pháp lý — người dùng Brazil (LGPD).** Với người dùng Brazil, các thông cáo tiếp thị và tái gắn kết dựa trên hai cơ sở pháp lý thay thế:

1. **Sự đồng ý (Điều 7, I và Điều 8 LGPD)** — thu thập dưới dạng một lựa chọn tham gia riêng biệt, không đánh dấu sẵn, theo mục đích cụ thể, khi đăng ký hoặc trong ứng dụng, được ghi lại kèm ngày, phiên bản biểu mẫu và ngôn ngữ; bạn có thể thu hồi bất cứ lúc nào, miễn phí, mà không mất quyền truy cập Dịch vụ (Điều 8 §5). Sự đồng ý là cơ sở dùng cho mọi thông cáo đến khách hàng tiềm năng, tiếp xúc lạnh, hoặc chào bán chéo/đối tác ngoài ứng dụng Jynx cốt lõi.
2. **Lợi ích hợp pháp (Điều 7, IX LGPD, được Điều 10 cụ thể hóa)** — chỉ dùng cho người dùng hiện hữu hoặc mới ngừng hoạt động gần đây nhận tin nhắn tái gắn kết, cập nhật sản phẩm về cùng ứng dụng Jynx, hoặc một khảo sát phản hồi churn/gỡ cài đặt ngắn duy nhất. Trước khi dựa vào cơ sở này, Jynx thực hiện và lập văn bản một Đánh giá Lợi ích Hợp pháp (LIA) theo bài kiểm tra ba pha của Hướng dẫn Lợi ích Hợp pháp của ANPD (2/2/2024): (i) mục đích, (ii) tính cần thiết, và (iii) cân bằng và biện pháp bảo đảm. LIA ghi lại mối quan hệ trước đó, kỳ vọng hợp lý của người dùng, mục đích, phương tiện ít xâm nhập nhất đã chọn, và kênh từ chối nhận. Lợi ích hợp pháp không dùng cho email lạnh/không được yêu cầu, chào bán chéo không liên quan, danh sách mua, hay nhắn tin dai dẳng đến người dùng đã rời sau khi mối quan hệ đã rõ ràng chấm dứt.

**Quyền phản đối / từ chối nhận.** Người dùng Brazil có thể phản đối việc xử lý này và từ chối nhận bất cứ lúc nào qua các cơ chế tại §7.5 và §7.6 (liên kết hủy đăng ký một chạm trong mỗi email, hoặc công tắc tùy chọn giao tiếp trong ứng dụng), không mất phí và không phải chấm dứt tài khoản. Chúng tôi thực hiện yêu cầu từ chối nhận theo thời gian thực. Bộ luật Bảo vệ Người tiêu dùng Brazil (CDC, Luật 8.078/90, đặc biệt Điều 39 III) cấm thông điệp thương mại không được yêu cầu hoặc gây quấy rối; vì vậy chúng tôi tôn trọng nghiêm ngặt các yêu cầu từ chối nhận và áp dụng giới hạn tần suất, vì việc gửi dai dẳng hoặc bỏ qua yêu cầu từ chối nhận có thể bị coi là hành vi gây quấy rối.

**Khảo sát gỡ cài đặt / churn.** Bất cứ nơi nào khả thi về mặt vận hành, chúng tôi đặt câu hỏi gỡ cài đặt/churn ngay trong ứng dụng tại thời điểm gỡ cài đặt (không cần giữ email). Khi một khảo sát email được gửi, khảo sát không chứa nội dung quảng bá hay tái gắn kết; chúng tôi gửi tối đa một (1) khảo sát cho mỗi người dùng trong khoảng 60 ngày sau khi xóa tài khoản hoặc gỡ cài đặt; sau đó địa chỉ email bị xóa hoặc ẩn danh hóa theo §6; và những người dùng đã gửi yêu cầu xóa dữ liệu / quyền được quên (§7.3) không bao giờ được liên hệ lại và được đưa vào danh sách chặn vĩnh viễn (xem §6 và Điều khoản Dịch vụ §7.2).

**Theo dõi email.** Email tiếp thị không nhúng pixel theo dõi hay phân tích ẩn nào xử lý dữ liệu cá nhân khi chưa có cơ sở pháp lý riêng. Khi bất kỳ hình thức theo dõi mở/nhấp nào được đưa vào, nó sẽ được công bố tại đây và dựa trên sự đồng ý (Điều 8 LGPD; Điều 5(3) ePrivacy), phù hợp với hướng dẫn của ANPD về công nghệ theo dõi (18/10/2022).

**Tần suất.** Email tiếp thị chịu các giới hạn tần suất nội bộ; bạn có thể giảm hoặc tắt chúng bất cứ lúc nào qua công tắc tùy chọn giao tiếp trong ứng dụng hoặc bằng cách nhấn hủy đăng ký trong bất kỳ tin nhắn nào.

### 5.7. An toàn cộng đồng và trốn tránh lệnh cấm

Để giúp bảo vệ cộng đồng của chúng tôi khỏi hành vi lạm dụng, chúng tôi sử dụng định danh thiết bị và tín hiệu toàn vẹn thiết bị để phát hiện và ngăn chặn các cố gắng lách lệnh tạm ngừng hoặc cấm. Nếu chúng tôi liên kết một thiết bị với tài khoản bị cấm, thiết bị đó có thể bị ngăn tạo tài khoản mới hoặc đăng nhập. Nếu bạn cho rằng điều này xảy ra do nhầm lẫn, bạn có thể khiếu nại bằng cách liên hệ support@jynx.app.

Các tín hiệu toàn vẹn thiết bị được thu thập và đánh giá với sự trợ giúp của Talsec freeRASP, một thư viện chống can thiệp và toàn vẹn thiết bị nhúng trong ứng dụng. freeRASP hoạt động trên thiết bị của bạn: nó phát hiện cục bộ các mối đe dọa như thiết bị đã root, runtime hooking và bootloader đã mở khóa, và báo cáo kết quả cho chúng tôi qua nhà cung cấp giám sát lỗi của chính chúng tôi (Sentry, §4.2) nhằm phòng chống lạm dụng; nó không gửi dữ liệu của bạn đến bất kỳ dịch vụ nào do Talsec vận hành.

### 5.8. Phân tích Hình ảnh vì An toàn Trẻ em

Để giúp bảo vệ trẻ em và đáp ứng nghĩa vụ báo cáo pháp lý, Jynx sử dụng các hệ thống tự động để phân tích hình ảnh chia sẻ trong tin nhắn trực tiếp bằng cách so khớp mã băm dẫn xuất từ các hình ảnh đó với các cơ sở dữ liệu tài liệu lạm dụng tình dục trẻ em đã biết. Cho việc phân tích này, chính hình ảnh không được truyền đến bên thứ ba — chỉ có mã băm không thể đảo ngược (xem §4.7). Ảnh đại diện được kiểm duyệt riêng, bởi quy trình kiểm duyệt hình ảnh mô tả tại §4.8. Việc phân tích này tồn tại chỉ nhằm phát hiện vì an toàn trẻ em và nghĩa vụ báo cáo pháp lý của chúng tôi; không dùng để lập hồ sơ, quảng cáo hay bất kỳ mục đích nào khác. Các kết quả khớp được xử lý như mô tả trong [Chính sách An toàn Trẻ em](/child-safety.html) của chúng tôi.

### 5.9. Đo lường Quảng cáo

Nếu bạn đồng ý, chúng tôi cũng chia sẻ một số sự kiện giới hạn (như đăng ký và giao dịch mua, kèm số tiền) với Meta để đo lường và cải thiện quảng cáo của chúng tôi. Dữ liệu của bạn không bao giờ bị bán, và bạn có thể thay đổi lựa chọn bất cứ lúc nào trong cài đặt Quyền riêng tư. Những gì được chia sẻ, và với ai, được liệt kê tại §4.9.

Cách bật. Trên iPhone và iPad, đo lường quảng cáo chỉ dùng dữ liệu của bạn khi có sự đồng ý của bạn (Điều 6(1)(a) GDPR; Điều 7, I LGPD), được đưa ra trong trang quyền riêng tư lần đầu khởi chạy hoặc sau đó trong Cài đặt > Quyền riêng tư > Đo lường quảng cáo, và ngoài ra còn yêu cầu ủy quyền App Tracking Transparency của Apple (xem §4.9). Trên Android, đo lường quảng cáo dựa trên cùng sự đồng ý đó hoặc, với người dùng được hiển thị công tắc đo lường quảng cáo bật sẵn trong trang lần đầu, dựa trên lợi ích hợp pháp của chúng tôi trong việc đo lường quảng cáo của mình (Điều 7, IX và Điều 10 LGPD), được đánh giá trong một Đánh giá Lợi ích Hợp pháp có văn bản. Trong trường hợp đó nó bật mặc định, và bạn có thể tắt trong cùng trang đó hoặc bất cứ lúc nào trong Cài đặt > Quyền riêng tư > Đo lường quảng cáo — việc phản đối dễ như việc để nó bật, miễn phí, và không bao giờ đòi hỏi xóa tài khoản (Điều 18, §2 LGPD).

Biện pháp bảo đảm. Những người dùng chúng tôi biết là dưới 18 tuổi, và các hồ sơ chưa xác lập độ tuổi, không bao giờ được đo lường trên cơ sở lợi ích hợp pháp. Thu hồi sự đồng ý hoặc phản đối sẽ chặn mọi chia sẻ tiếp theo từ lần khởi chạy ứng dụng kế tiếp của bạn; các sự kiện đã được chia sẻ hợp pháp trước đó vẫn còn tại Meta theo điều khoản lưu giữ của §4.9, và việc thu hồi không ảnh hưởng tính hợp pháp của những gì đã làm trước đó (Điều 7(3) GDPR; Điều 8 §5 LGPD).

**Apple SKAdNetwork (iOS).** Tách riêng với phần trên, và với mọi người dùng iPhone và iPad bất kể lựa chọn hay cài đặt nào — kể cả khi theo dõi hay đo lường quảng cáo bị từ chối — SKAdNetwork của Apple báo cáo thông tin chuyển đổi ẩn danh, tổng hợp cho mạng quảng cáo đã hiển thị quảng cáo cho bạn (ví dụ: một lượt đăng ký hoặc một giao dịch mua trong một khoảng giá trị nhất định đã xảy ra). Không có định danh nào từ Jynx và không có dữ liệu cá nhân nào rời thiết bị của bạn cho việc này: đây là cơ chế phân bổ tiêu chuẩn của Apple, và chúng tôi không thể định danh bạn từ nó.

### 5.10. Email và Thông cáo

**Email thông báo hoạt động tài khoản (dịch vụ).** Khi bạn bỏ lỡ hoạt động tài khoản trong ứng dụng (một tin nhắn chưa đọc, một match hoặc lượt thích mới), Jynx có thể gửi email cho bạn về điều đó. Đây là các thông báo dịch vụ dựa trên lợi ích hợp pháp của chúng tôi trong việc vận hành nền tảng xã hội (giữ bạn nắm các tương tác đang diễn ra của bạn) và không chứa nội dung quảng bá. Bạn có thể tắt từng loại thông báo (tin nhắn, match, thích) bất cứ lúc nào trong Cài đặt > Quyền riêng tư > Giao tiếp, hoặc qua liên kết "Quản lý các thông báo này" trong mỗi email. Bạn cũng có thể phản đối việc xử lý này bất cứ lúc nào (Điều 21 GDPR) tại privacy@jynx.app.

**Email tái gắn kết và tiếp thị (winback).** Các email nhắm đến việc đưa bạn quay lại Jynx sau một thời gian không hoạt động, và các thông cáo tin tức và ưu đãi của chúng tôi, là hoạt động tiếp cận thương mại. Chúng chỉ được gửi với sự đồng ý trước đó, cụ thể, tự nguyện và có thể thu hồi của bạn, được thu thập qua một ô tùy chọn riêng không đánh dấu sẵn — không bao giờ là điều kiện để chấp nhận Điều khoản của chúng tôi. Bạn có thể thu hồi bất cứ lúc nào trong Cài đặt > Quyền riêng tư > Giao tiếp hoặc qua liên kết hủy đăng ký trong mỗi email.

**Hiển thị tên người dùng và ảnh đại diện của bạn trong email thông báo.** Nếu bạn đã tương tác với một thành viên khác (thích, match, nhắn tin), tên người dùng và ảnh đại diện của bạn có thể xuất hiện trong các email thông báo hoạt động tài khoản gửi cho họ khi họ không hoạt động. Các phần tử này được tạo tại thời điểm gửi và không được giữ trong nhật ký email của chúng tôi (chỉ định danh và số đếm).

### 5.11. Vị trí và Khoảng cách Ghép đôi

**Chúng tôi xử lý gì.** Nếu bạn chọn chia sẻ vị trí, Jynx chỉ dùng nó cho một mục đích duy nhất: hiển thị khoảng cách xấp xỉ giữa bạn và những người chơi khác ("~12 km") trên hàng chờ ghép đôi và, nếu bạn bật sắp xếp theo khoảng cách gần, sắp xếp hàng chờ đó theo khoảng cách. Chúng tôi chỉ xử lý vị trí xấp xỉ: quyền chúng tôi yêu cầu là quyền vị trí thô / độ chính xác giảm của hệ điều hành, và trước khi bất cứ thứ gì được lưu, tọa độ của bạn được bám vào một lưới khoảng 0.02° (khoảng 2,2 km) trên máy chủ của chúng tôi; ô vị trí dẫn xuất rộng khoảng 11 km. Tọa độ GPS thô không bao giờ được lưu.

**Tùy chọn và dựa trên sự đồng ý.** Đây là một tính năng tùy chọn: không có gì được thu trừ khi bạn cấp quyền vị trí của hệ điều hành VÀ công tắc vị trí trong ứng dụng đang bật. Vị trí không bao giờ được xử lý trong nền — chỉ được dùng khi bạn đang dùng ứng dụng. Vị trí của bạn không bao giờ được hiển thị cho người dùng khác dưới dạng vị trí trên bản đồ, không bao giờ dùng cho quảng cáo, và không bao giờ chia sẻ với các nền tảng quảng cáo (xem §4.9: không có dữ liệu vị trí nào nằm trong bất cứ thứ gì chia sẻ cho phân bổ hay đo lường quảng cáo). Các sự kiện phân tích của chúng tôi không chứa tọa độ, tên thành phố hay định danh ô vị trí — chỉ các tín hiệu ẩn danh về việc áp dụng và lựa chọn sắp xếp. Hộp thoại cấp quyền của hệ điều hành là cách sự đồng ý của bạn được ghi nhận, và công tắc trong ứng dụng là cách bạn thu hồi nó (§7.6).

**Chúng tôi giữ nó bao lâu.** Bản ghi vị trí chúng tôi duy trì cho tài khoản của bạn tự động bị xóa sau 45 ngày không có cập nhật, và được làm mới mỗi lần bạn dùng tính năng khi việc chia sẻ đang bật. Khoảng cách xấp xỉ hiển thị trên thẻ hồ sơ của bạn bị giới hạn theo hoạt động: nó chỉ tồn tại cùng thẻ hồ sơ của bạn, và được coi như không còn sau 45 ngày không có cập nhật.

**Bạn kiểm soát.** Bạn có thể ngừng chia sẻ bất cứ lúc nào: tắt công tắc vị trí trong ứng dụng xóa ngay các tọa độ đã lưu (bản ghi được giữ nhưng rỗng tọa độ), và thu hồi quyền vị trí trong cài đặt thiết bị chặn thu thập tại nguồn. Xóa tài khoản (§7.3) cũng xóa dữ liệu vị trí của bạn.

## 6. Lưu Giữ Dữ Liệu

### 6.1. Thời Gian Lưu Giữ

- **Dữ Liệu Hồ Sơ:** Được giữ lại khi tài khoản của bạn còn hoạt động
- **Nhật Ký và Phân Tích:** Firebase Analytics: 14 tháng (chính sách Firebase)
- **Địa chỉ email tiếp thị (dựa trên sự đồng ý):** Giữ cho đến khi bạn từ chối nhận hoặc xóa tài khoản, cộng thêm một bản ghi đã băm trên danh sách chặn (xem bên dưới) để bảo đảm chúng tôi không liên hệ bạn lại
- **Địa chỉ email khảo sát gỡ cài đặt / churn:** Giữ tối đa 60 ngày sau khi khảo sát được gửi (hoặc, nếu không gửi khảo sát nào, 60 ngày sau khi gỡ cài đặt/xóa), sau đó địa chỉ bị xóa hoặc ẩn danh hóa không thể đảo ngược. Không quá một (1) email khảo sát được gửi cho mỗi người dùng
- **Tái gắn kết các tài khoản mới ngừng hoạt động gần đây (cơ sở lợi ích hợp pháp LGPD, chỉ dành cho người dùng Brazil):** Phù hợp với hướng dẫn của CNIL và bài kiểm tra kỳ vọng hợp lý, Jynx có thể dùng địa chỉ email của một tài khoản mới ngừng hoạt động (không có yêu cầu xóa) để tái gắn kết tối đa 3 năm sau lần tương tác có ý nghĩa cuối cùng, sau đó nó bị xóa hoặc ẩn danh hóa

### 6.2. Xóa Dữ Liệu

Bạn có thể yêu cầu xóa tài khoản bất cứ lúc nào (xem Mục 7).

**Lưu Giữ Pháp Lý:** Một số dữ liệu có thể được giữ lại lâu hơn để tuân thủ nghĩa vụ pháp lý của chúng tôi (ví dụ: báo cáo bảo mật, giao dịch tài chính).

Khi bạn xóa tài khoản, chúng tôi tẩy sạch địa chỉ email của bạn khỏi marketing CRM và nhà cung cấp dịch vụ email. Nếu bạn thực hiện quyền được xóa dữ liệu (§7.3 / Điều 17 GDPR / Điều 18(VI) LGPD cho dữ liệu dựa trên sự đồng ý), địa chỉ email của bạn được thêm vào một danh sách chặn đã băm vĩnh viễn để nó không bao giờ được dùng lại cho tiếp thị, tái gắn kết hay khảo sát — bao gồm cả bảo vệ chống tái nhập qua bất kỳ danh sách bên thứ ba hay danh sách mua nào. Lưu ý: theo LGPD, việc xóa theo Điều 18(VI) áp dụng cho dữ liệu xử lý trên cơ sở sự đồng ý; dữ liệu xử lý trên cơ sở lợi ích hợp pháp (Điều 7 IX) thay vào đó chịu nguyên tắc giới hạn mục đích (Điều 6 II và §2) và quyền của bạn yêu cầu chấm dứt xử lý (Điều 18 §2).

## 7. Quyền Của Bạn (GDPR và LGPD)

Tùy nơi bạn đang ở, bạn có các quyền theo GDPR (EU/EEA) và/hoặc LGPD Brazil (Lei Geral de Proteção de Dados, Luật 13.709/2018).

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

**Yêu Cầu Xóa Thủ Công:** Đối với yêu cầu xóa dữ liệu cụ thể (ví dụ: chỉ xóa tin nhắn từ cộng đồng cụ thể, xóa ảnh Storage, hoặc các trường hợp đặc biệt khác), vui lòng liên hệ Cán bộ Bảo vệ Dữ liệu của chúng tôi tại dpo@jynx.app. Chúng tôi sẽ xử lý yêu cầu thủ công trong vòng 30 ngày theo yêu cầu của GDPR.

### 7.4. Quyền Di Chuyển Dữ Liệu

Việc xuất dữ liệu (Mục 7.1) cho phép bạn lấy dữ liệu của mình ở định dạng có cấu trúc, có thể đọc được bằng máy (JSON).

### 7.5. Quyền Phản Đối / Từ chối Tiếp thị

Bạn có thể phản đối việc xử lý dữ liệu của bạn cho mục đích tiếp thị trực tiếp bất cứ lúc nào, miễn phí và không cần nêu lý do. Theo Điều 21(2) GDPR, quyền này là tuyệt đối cho người dùng EU/EEA: chúng tôi sẽ dừng mọi hoạt động xử lý tiếp thị ngay khi nhận được phản đối của bạn. Với người dùng Brazil, bạn có thể phản đối việc xử lý tiếp thị qua các cơ chế từ chối nhận bên dưới (Điều 8 §5 LGPD; Điều 18 §2).

- **Hủy đăng ký một chạm:** mọi email tiếp thị đều có liên kết hủy đăng ký một chạm (RFC 8058 List-Unsubscribe-Post) được thực hiện theo thời gian thực
- **Công tắc trong ứng dụng:** Cài đặt > Quyền riêng tư > Tùy chọn Giao tiếp
- **Email:** dpo@jynx.app

### 7.6. Quyền Rút Lại Sự Đồng Ý

Bạn có thể rút lại sự đồng ý của mình cho:

- **Phân Tích:** Cài đặt > Quyền riêng tư > Tắt "Bật Phân tích"
- **Đo lường quảng cáo:** Cài đặt > Quyền riêng tư > Đo lường quảng cáo (xem §5.9)
- **Vị trí (khoảng cách ghép đôi):** Tắt công tắc vị trí trong ứng dụng — thao tác này xóa các tọa độ đã lưu — hoặc thu hồi quyền vị trí trong cài đặt thiết bị (xem §5.11)
- **Thông Báo Đẩy:** Cài đặt thiết bị
- **Thông cáo Tiếp thị:** Bản tin, cập nhật sản phẩm, tái gắn kết và khảo sát gỡ cài đặt/churn — có thể thu hồi qua hủy đăng ký một chạm, công tắc tùy chọn giao tiếp trong ứng dụng, hoặc dpo@jynx.app, mà không phải chấm dứt tài khoản

**Lưu Ý:** Token OAuth (Google, Apple) được tự động thu hồi khi bạn xóa tài khoản (Mục 7.3).

Việc thu hồi không ảnh hưởng tính hợp pháp của các hoạt động xử lý thực hiện trước khi thu hồi (Điều 7(3) GDPR; Điều 8 §5 LGPD), và thu hồi sự đồng ý không bao giờ đòi hỏi bạn xóa tài khoản.

### 7.7. Các Quyền LGPD Bổ sung (Người dùng Brazil)

Ngoài các quyền nêu trên, các chủ thể dữ liệu đang ở Brazil có các quyền sau theo Điều 18 LGPD: xác nhận việc xử lý có tồn tại hay không; truy cập dữ liệu; sửa dữ liệu chưa đầy đủ, không chính xác hoặc cũ; ẩn danh hóa, chặn hoặc xóa dữ liệu không cần thiết hoặc quá mức (Điều 18(VI) áp dụng cho dữ liệu xử lý trên cơ sở sự đồng ý); tính di chuyển đến nhà cung cấp dịch vụ hoặc sản phẩm khác, theo yêu cầu; xóa dữ liệu cá nhân được xử lý có sự đồng ý; và thông tin về khả năng từ chối đồng ý cùng hậu quả của việc đó.

Bạn có thể thực hiện các quyền này qua Cài đặt > Quyền riêng tư hoặc bằng cách liên hệ encarregado tại dpo@jynx.app. Bạn cũng có thể khiếu nại đến cơ quan bảo vệ dữ liệu Brazil — Autoridade Nacional de Proteção de Dados (ANPD) — tại https://www.gov.br/anpd.

## 8. Bảo Mật Dữ Liệu

Chúng tôi triển khai các biện pháp bảo mật kỹ thuật và tổ chức để bảo vệ dữ liệu của bạn:

- **Mã Hóa:** Giao tiếp an toàn qua HTTPS
- **Quy Tắc Bảo Mật Firebase:** Kiểm soát truy cập chặt chẽ đến dữ liệu Firestore
- **Xác Thực:** Quản lý phiên an toàn qua Firebase Auth
- **Xác Thực Đầu Vào:** Ngăn chặn tiêm XSS qua SecureTextInput
- **Giới Hạn Tốc Độ:** Bảo vệ chống lạm dụng (spam tin nhắn, hành động tự động)
- **Kiểm Duyệt:** Hệ thống báo cáo và kiểm duyệt nội dung
- **Thoại thời gian thực:** Dữ liệu truyền tải phòng thoại được mã hóa khi truyền bằng WebRTC DTLS-SRTP, cùng tiêu chuẩn mà các ứng dụng thoại phổ biến dùng; tín hiệu giữa ứng dụng và máy chủ của chúng tôi đi qua HTTPS/TLS.

Không có hệ thống nào an toàn 100%. Trong trường hợp vi phạm dữ liệu cá nhân, chúng tôi sẽ thông báo cho cơ quan giám sát có thẩm quyền không chậm trễ và, khi khả thi, trong vòng 72 giờ kể từ khi biết về một vi phạm có khả năng gây rủi ro cho quyền của bạn (Điều 33 GDPR), và chúng tôi sẽ thông báo vi phạm cho người dùng bị ảnh hưởng không chậm trễ khi nó có khả năng gây rủi ro cao cho bạn (Điều 34 GDPR). Với các chủ thể dữ liệu tại Brazil, chúng tôi cũng sẽ thông báo các sự cố bảo mật liên quan đến ANPD và đến bạn trong thời hạn do cơ quan quy định (Điều 48 LGPD; hiện là 3 ngày làm việc theo Nghị quyết CD/ANPD nº 15/2024 của ANPD).

## 9. Chuyển Giao Dữ Liệu Quốc Tế

Dữ liệu của bạn có thể được chuyển và lưu trữ trên máy chủ nằm ngoài khu vực tài phán của bạn, bao gồm:

- **Google Cloud / Firebase:** Hạ tầng toàn cầu (bao gồm Google Analytics trên trang web, xem §10), theo các điều khoản hợp đồng chuẩn GDPR và các biện pháp bảo đảm tương đương
- **Amazon Web Services (kiểm duyệt hình ảnh):** Việc xử lý kiểm duyệt hình ảnh mô tả tại §4.8 chạy tại vùng São Paulo của AWS (Brazil); các lần chuyển từ EU/EEA dựa trên thỏa thuận xử lý dữ liệu của AWS vốn kết hợp các điều khoản hợp đồng chuẩn của Ủy ban châu Âu, cùng các bảo đảm chung bên dưới. Hình ảnh được chuyển tiếp đến AWS qua hạ tầng Google Cloud của Jynx (chặng Google Cloud / Firebase bên trên)
- **Sentry:** Máy chủ đặt tại Hoa Kỳ; các lần chuyển từ EU/EEA dựa trên EU-US Data Privacy Framework (có hiệu lực từ tháng 7/2023, thay thế Privacy Shield đã bị vô hiệu hóa) cho các thực thể Sentry tự chứng nhận theo DPF, hoặc các điều khoản hợp đồng chuẩn nơi DPF không áp dụng
- **Nhà cung cấp Dịch vụ Email (ESP):** Dùng để gửi các thông cáo tiếp thị, tái gắn kết và khảo sát mô tả tại §5.6. ESP được nêu tên tại §4.4 và đóng vai trò bên xử lý dữ liệu theo một Thỏa thuận Xử lý Dữ liệu đã ký
- **LiveKit (thoại thời gian thực, và chia sẻ màn hình khi có sẵn):** LiveKit Cloud là bên xử lý dữ liệu của chúng tôi cho dữ liệu truyền tải thoại thời gian thực (và, khi tính năng có sẵn, chia sẻ màn hình) theo một Thỏa thuận Xử lý Dữ liệu đã ký (§4.5). LiveKit Cloud định tuyến dữ liệu truyền tải toàn cầu: các phiên được phục vụ bởi hạ tầng toàn cầu của LiveKit không cố định vào một vùng cụ thể. Âm thanh phòng thoại (và video chia sẻ màn hình khi có sẵn) được định tuyến thời gian thực và không được Jynx hay LiveKit ghi lại, lưu trữ hay duy trì; LiveKit chỉ giữ siêu dữ liệu phiên vận hành mô tả tại §4.5. Các lần chuyển dữ liệu cá nhân đến LiveKit dựa trên Phụ lục Xử lý Dữ liệu của LiveKit, vốn kết hợp các điều khoản GDPR và các điều khoản hợp đồng chuẩn của Ủy ban châu Âu cho chuyển dữ liệu xuyên biên giới, cùng các bảo đảm chung bên dưới, áp dụng cho LiveKit như cho các bên xử lý khác của chúng tôi.
- **Meta (phân bổ quảng cáo và đo lường quảng cáo):** Việc chia sẻ mô tả tại §4.9 và §5.9 đến Meta Platforms Ireland Ltd. hoặc Meta Platforms, Inc., vốn xử lý nó tại Hoa Kỳ và các quốc gia khác. Các lần chuyển dữ liệu cá nhân quốc tế thực hiện liên quan đến công cụ của Meta chịu các bảo đảm hợp đồng và cơ chế chuyển dữ liệu quốc tế áp dụng. Jynx đang xác minh sự tuân thủ của họ với yêu cầu của Điều 33 LGPD và các quy định của ANPD.

**Bảo đảm (GDPR, EU/EEA).** Mọi lần chuyển từ EU/EEA đều được một quyết định adequacy, EU-US Data Privacy Framework, hoặc các điều khoản hợp đồng chuẩn bảo đảm, kèm các biện pháp bổ sung khi yêu cầu.

**Bảo đảm (LGPD, Brazil).** Các lần chuyển dữ liệu cá nhân của người dùng Brazil chịu điều chỉnh của Điều 33 LGPD:

- **Đến Jynx Group tại Pháp (bên kiểm soát):** Hợp pháp theo Điều 33(I) LGPD nhờ Nghị quyết CD/ANPD nº 32/2026 của ANPD (có hiệu lực từ 26/01/2026), nghị quyết công nhận Liên minh châu Âu — bao gồm Pháp — cung cấp mức độ bảo vệ phù hợp. Không cần cơ chế chuyển dữ liệu bổ sung cho chặng này. (Quyết định adequacy này chịu đánh giá lại của ANPD trong vòng bốn năm; nếu bị đình chỉ, Jynx sẽ triển khai một cơ chế Điều 33 thay thế như các điều khoản hợp đồng chuẩn của ANPD.)
- **Đến Brevo tại Pháp (email ESP, bên xử lý dữ liệu):** Hợp pháp theo Điều 33(I) LGPD nhờ cùng Nghị quyết CD/ANPD nº 32/2026 của ANPD (có hiệu lực từ 26/01/2026), nghị quyết công nhận Liên minh châu Âu — bao gồm Pháp — cung cấp mức độ bảo vệ phù hợp. Không cần cơ chế chuyển dữ liệu bổ sung cho chặng này. (Chịu đánh giá lại của ANPD như mô tả trên; nếu quyết định adequacy bị đình chỉ, Jynx sẽ triển khai một cơ chế Điều 33 thay thế như các điều khoản hợp đồng chuẩn của ANPD với Brevo.)
- **Đến các nhà cung cấp công nghệ bảo vệ trẻ em tại EU (so khớp mã băm, bên xử lý dữ liệu):** Được bảo đảm bởi cùng quyết định adequacy EU của Nghị quyết CD/ANPD nº 32/2026 của ANPD như các chặng trên — các nhà cung cấp chỉ nhận mã băm không thể đảo ngược và thực hiện so khớp tại khu vực EU (§4.7)
- **Đến AWS tại Brazil (kiểm duyệt hình ảnh, bên xử lý dữ liệu):** Chặng AWS Rekognition ở lại trong nước — nó chạy tại vùng São Paulo của AWS (§4.8). Hình ảnh trước tiên được chuyển tiếp qua hạ tầng Google Cloud của Jynx, vốn được bảo đảm bởi các điều khoản chuyển dữ liệu Google Cloud / Firebase chung bên trên

**Minh bạch (Nghị quyết CD/ANPD nº 19/2024 của ANPD).** Thông tin yêu cầu bởi Điều 17, §2 của Nghị quyết CD/ANPD nº 19/2024 của ANPD được hợp nhất trong Chính sách này: hình thức, thời hạn và mục đích cụ thể của từng lần chuyển dữ liệu quốc tế và các quốc gia đích (mục này và các mục nó trích dẫn); thông tin nhận diện và liên hệ của bên kiểm soát (§1); việc sử dụng chung dữ liệu và mục đích của nó (§4); trách nhiệm của các chủ thể xử lý và các biện pháp an ninh áp dụng (§4 và §8); và các quyền của bạn cùng cách thực hiện, bao gồm một kênh dễ tiếp cận và quyền kiến nghị ANPD (§7 và §12). Toàn văn các điều khoản hợp đồng dùng để thực hiện các lần chuyển dữ liệu quốc tế này được cung cấp cho bạn, theo yêu cầu, bởi cán bộ bảo vệ dữ liệu của chúng tôi (dpo@jynx.app), trong vòng 15 ngày.

Ghi chú lịch sử: thời hạn ân hạn một năm để điều chỉnh các hợp đồng hiện có theo các SCC của ANPD kết thúc ngày 23/08/2025; các mối quan hệ bên xử lý mới như ESP ký SCC khi onboarding.

## 10. Cookie và Công Nghệ Tương Tự

Ứng dụng di động của chúng tôi không sử dụng cookie theo nghĩa truyền thống, nhưng sử dụng:

- **Token Xác Thực:** Được lưu trữ cục bộ một cách an toàn
- **Bộ Nhớ Cache Cục Bộ:** Để cải thiện hiệu suất (dữ liệu hồ sơ, tin nhắn gần đây)

**Trang web.** Trang web của Jynx (jynx.app) dùng Google Analytics 4 (do Google cung cấp) với Consent Mode v2 để hiểu cách trang được sử dụng. Lưu trữ phân tích bị chặn mặc định: cho đến khi bạn chấp nhận banner cookie, Google Analytics chạy không cookie hay bộ lưu trữ cục bộ và Google chỉ nhận các tín hiệu không cookie, không định danh; nếu bạn chấp nhận, đo lường đầy đủ được bật. Lựa chọn của bạn — chấp nhận hay từ chối — được lưu cục bộ trên thiết bị của bạn (browser localStorage, khóa "jynx-analytics-consent"). Xóa bộ lưu trữ trình duyệt cho jynx.app làm banner xuất hiện lại để bạn có thể đổi lựa chọn. Google đóng vai trò bên nhận dữ liệu phân tích kết quả (xem §9); xem §4 cho các bên xử lý khác của chúng tôi và §7 cho các quyền của bạn.

**Liên kết mời.** Khi bạn mở một liên kết mời (jynx.app/invite/…) trong trình duyệt và nhấn nút tải App Store, trang web ghi liên kết mời đó vào clipboard thiết bị của bạn, thay thế nội dung trước đó. Đây là kỹ thuật chuẩn để phân bổ lượt cài ứng dụng trên iOS (nền tảng không có cơ chế install-referrer): nó cho phép ứng dụng Jynx, ở lần khởi chạy đầu, đề xuất tham gia với lời mời của người đã gửi liên kết cho bạn. Trang web không bao giờ đọc clipboard của bạn — nó chỉ ghi liên kết này — và ứng dụng chỉ đọc nó một lần, sau khi xin sự đồng ý rõ ràng của bạn. Không có nội dung clipboard nào khác bị truy cập hay thu thập. Nếu bạn không muốn chia sẻ nó, chỉ cần từ chối hộp thoại dán và tham gia không có lời mời.

**Giới thiệu và chiến dịch creator.** Khi bạn tham gia Jynx với một mã mời — từ một liên kết, mã QR, hoặc nhập tay — chúng tôi ghi mã đó cùng tài khoản của bạn để phân bổ lời mời cho người hay chiến dịch đã chia sẻ nó, áp dụng các quyền lợi liên quan, và phát hiện đăng ký gian lận. Việc xử lý này dựa trên lợi ích hợp pháp của chúng tôi (xem §13) và chịu các kiểm tra chống gian lận của chúng tôi; không có gì thay đổi ở phía bạn, vì cùng dữ liệu được thu cho dù bạn dùng loại mã mời nào. Một số mã mời cũng thuộc các chiến dịch phân bổ creator: nếu mã bạn dùng nằm trong một chiến dịch như vậy, nó có thể được ghi công thêm cho chiến dịch đó. Hồ sơ chi trả cho các chiến dịch creator được giữ dưới dạng bí danh hóa.

**Chia sẻ màn hình (khi có sẵn).** Khi tính năng có sẵn, bạn có thể chia sẻ màn hình thiết bị trong một phòng thoại. Việc chia sẻ chỉ bắt đầu sau khi quyền chụp màn hình của hệ điều hành được cấp và một xác nhận rõ ràng trong ứng dụng được thực hiện. Mọi thứ hiển thị trên màn hình của bạn — bao gồm thông báo — được truyền trực tiếp đến các thành viên khác trong phòng, và bạn chịu trách nhiệm về những gì bạn chia sẻ. Video được chia sẻ là một luồng truyền tải trực tiếp được định tuyến như âm thanh thoại qua LiveKit SFU (§4.5, §9): nó không được Jynx hay LiveKit ghi lại hay lưu trữ, và dừng khi bạn kết thúc chia sẻ.

## 11. Thay Đổi Chính Sách Này

Chúng tôi có thể cập nhật chính sách bảo mật này. Trong trường hợp thay đổi lớn, chúng tôi sẽ thông báo cho bạn:

- Qua thông báo trong ứng dụng
- Qua email đến địa chỉ liên kết với tài khoản của bạn

## 12. Liên Hệ Với Chúng Tôi

Để biết bất kỳ câu hỏi nào về chính sách bảo mật này hoặc để thực hiện quyền của bạn:

- **Email:** dpo@jynx.app

**Cơ Quan Giám Sát:** Nếu bạn cho rằng các quyền của mình chưa được tôn trọng, bạn có thể khiếu nại:

- **Người dùng EU/EEA:** với CNIL (Commission Nationale de l'Informatique et des Libertés), Pháp — https://www.cnil.fr
- **Người dùng Brazil:** với ANPD (Autoridade Nacional de Proteção de Dados), Brazil — https://www.gov.br/anpd

Việc khiếu nại đến một cơ quan giám sát không làm giảm quyền của bạn trong việc tìm các biện pháp tư pháp khác sẵn có, bao gồm các bảo vệ người tiêu dùng bắt buộc áp dụng tại khu vực tài phán của bạn (ví dụ: Bộ luật Bảo vệ Người tiêu dùng Brazil, Luật 8.078/90).

## 13. Cơ sở Pháp lý và Sự Đồng ý

Chúng tôi chỉ xử lý dữ liệu cá nhân của bạn khi có cơ sở pháp lý. Các cơ sở pháp lý chúng tôi dựa vào, và nơi mỗi cơ sở được mô tả trong Chính sách này, là:

- Thực hiện hợp đồng / cung cấp Dịch vụ (Điều 6(1)(b) GDPR; Điều 7, V LGPD) — tài khoản, ghép đôi và nhắn tin (§5.1–5.3)
- Lợi ích hợp pháp (Điều 6(1)(f) GDPR; Điều 7, IX và Điều 10 LGPD) — an ninh, phòng chống gian lận, cải tiến dịch vụ, và (với người dùng Brazil) thông cáo tiếp thị/tái gắn kết/khảo sát đến người dùng hiện hữu hoặc mới ngừng hoạt động gần đây như mô tả tại §5.6, mỗi lần đều có một đánh giá cân bằng có văn bản hỗ trợ
- Nghĩa vụ pháp lý (Điều 6(1)(c) GDPR; Điều 7, II LGPD) — lưu giữ cho mục đích pháp lý (§6)
- Nghĩa vụ pháp lý và lợi ích hợp pháp (Điều 6(1)(c) và 6(1)(f) GDPR; Điều 7, II và IX LGPD) — phát hiện nội dung bất hợp pháp và vi phạm chính sách, bao gồm phân tích hình ảnh vì an toàn trẻ em mô tả tại §5.8 và quy trình kiểm duyệt hình ảnh tại §4.8, phòng chống lạm dụng và né lệnh cấm (§5.7), và tuân thủ nghĩa vụ báo cáo pháp lý. Cho việc phân tích hình ảnh chia sẻ trong tin nhắn trực tiếp, Jynx còn dựa vào việc phát hiện tự nguyện lạm dụng tình dục trẻ em trực tuyến được Quy định (EU) 2021/1232 cho phép (ngoại lệ ePrivacy, theo văn bản hiện hành).
- Sự đồng ý (Điều 6(1)(a) GDPR; Điều 7, I và Điều 8 LGPD) — phân tích khi bạn đã bật, thông báo đẩy, và (với người dùng EU/EEA và các lượt gửi tiếp thị/tiếp xúc lạnh/chào bán chéo cho khách hàng Brazil) thông cáo tiếp thị theo §5.6
- Đo lường quảng cáo (§5.9): sự đồng ý của bạn (Điều 6(1)(a) GDPR; Điều 7, I và Điều 8 LGPD) khi bạn đã bật; trên Android, thay vào đó là lợi ích hợp pháp của chúng tôi (Điều 7, IX và Điều 10 LGPD) cho người dùng được hiển thị công tắc đo lường quảng cáo bật mặc định, với quyền phản đối của bạn bất cứ lúc nào
- Vị trí xấp xỉ cho tính năng khoảng cách ghép đôi (§5.11): sự đồng ý của bạn (Điều 6(1)(a) GDPR; Điều 7, I và Điều 8 LGPD), được ghi nhận bởi quyền vị trí của hệ điều hành cùng công tắc vị trí trong ứng dụng; bạn có thể thu hồi bất cứ lúc nào (§7.6) — tắt công tắc xóa các tọa độ đã lưu
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Sự đồng ý phải cụ thể và có hiểu biết.** Nơi chúng tôi dựa vào sự đồng ý của bạn, nó được đưa ra bằng một hành vi khẳng định rõ ràng, hướng đến các mục đích được chỉ định, và được ghi nhận tách riêng với việc bạn chấp nhận các điều khoản này (Điều 8 §1 LGPD — cláusula destacada). Các ủy quyền chung hoặc gộp vô hiệu theo Điều 8 §4 LGPD và không có giá trị theo Điều 4(11) và Điều 7 GDPR. Việc dùng Jynx tự nó không cấu thành sự đồng ý cho tiếp thị. Gánh nặng chứng minh sự đồng ý hợp lệ thuộc về Jynx (Điều 8 §2 LGPD; Điều 7(1) GDPR); vì vậy chúng tôi ghi lại ngày, phiên bản biểu mẫu, ngôn ngữ và phạm vi của mỗi sự đồng ý chúng tôi thu thập.

**Thu hồi.** Bạn có thể thu hồi bất kỳ sự đồng ý nào bất cứ lúc nào, qua một thủ tục dễ như việc cấp nó và không đòi hỏi bạn xóa tài khoản (Điều 8 §5 LGPD; Điều 7(3) GDPR) — xem §7.5 và §7.6. Việc thu hồi không ảnh hưởng tính hợp pháp của các hoạt động xử lý thực hiện trước khi thu hồi. Xóa tài khoản (§7.3) vẫn khả dụng bất cứ lúc nào nhưng không phải là cơ chế để thu hồi một sự đồng ý cụ thể.
