---
title: "Gizlilik Politikası"
description: "Jynx'in gizlilik politikasını okuyun. Bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin."
canonical: "https://jynx.app/tr/privacy.html"
locale: "tr"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Gizlilik Politikası

Son güncelleme: 17 Kasım 2026

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

## 1. Giriş

Jynx ("biz", "bizim", "uygulama"), oyuncuların bağlanmasına, takım kurmasına ve birlikte oynamasına olanak tanıyan sosyal bir oyun platformudur.

### Yasal Bilgiler:

- **Yasal Varlık:** Jynx Group (Société par Actions Simplifiée, SIREN 991443896, Nantes, Fransa'da kayıtlı)
- **Veri Koruma Görevlisi / Encarregado:** dpo@jynx.app
- **AB / AEA yargı bölgesi:** Fransa, Avrupa Birliği — bu Gizlilik Politikası, Fransa'da iç hukuka aktarılmış haliyle Regulation (EU) 2016/679 (GDPR) ve Directive 2002/58/EC (ePrivacy) ile uyumludur.
- **Brezilya yargı bölgesi:** Bu Gizlilik Politikası ayrıca, Jynx'in Brezilya'da yerleşik olmamasına bakılmaksızın LGPD'nin 3. maddesi uyarınca Brezilya'da bulunan ilgili kişilerin kişisel verilerinin Jynx tarafından işlenmesine uygulanan Brezilya Kanunu nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD") ile de uyumludur.
- **Yayın (LCEN):** Yayın direktörü (Directeur de la publication): Antoine Haie. Bu web sitesi (jynx.app), GitHub Pages tarafından barındırılır ve Cloudflare içerik dağıtım ağı üzerinden sunulur.

LGPD amaçları doğrultusunda Jynx Group, kişisel verilerinizin sorumlusudur (controlador). Veri Koruma Görevlimiz encarregado (DPO) olarak görev yapar ve LGPD ile ilgili her talep için dpo@jynx.app adresinden ulaşılabilir. Jynx, ANPD Resolution CD/ANPD nº 2/2022 uyarınca küçük ölçekli kişisel veri işleme aktörü (pequeno agente de tratamento de dados pessoais) kapsamına girmekte ve bu kapsamda encarregado ataması zorunluluğundan muaf olmaktadır; buna rağmen Jynx, bu yayınlanmış iletişim kanalını gönüllü olarak sürdürmektedir.

Bu gizlilik politikası, uygulamamızı kullandığınızda kişisel verilerinizi nasıl topladığımızı, kullandığımızı, paylaştığımızı ve koruduğumuzu açıklar.

## 2. Minimum Yaş ve Doğrulama

Uygulamamız 18 yaş ve üzeri kullanıcılar içindir.

Hesabınızı oluştururken, doğum tarihinizi sağlamanızı istiyoruz. 18 yaşın altındaysanız, hesap oluşturamaz veya hizmetlerimizi kullanamazsınız.

Reşit olmayanlara pazarlama. Jynx, 18 yaş ve üzeri kullanıcılarla sınırlıdır ve otomatik bir yaş kapısı uygular. Bir kullanıcının 18 yaşın altında olduğunu sonradan tespit edersek (LGPD Mad. 14; GDPR Mad. 8), hesabı derhal sonlandırır, kullanıcıyı tüm pazarlama, yeniden etkileşim ve anket iletişimlerinin dışında tutar ve ilgili pazarlama verilerini sileriz. Reşit olmayan birinden asla bilerek pazarlama onayı toplmayız.

## 3. Toplanan Veriler

### 3.1. Kayıt ve Profil Verileri

Hesabınızı oluştururken ve yönetirken aşağıdaki bilgileri topluyoruz:

#### Kimlik Doğrulama Bilgileri:

- E-posta (e-posta/şifre hesapları için)
- Kullanıcı adı/takma ad
- Profil fotoğrafı (isteğe bağlı)
- Bu yöntemleri kullanırsanız sosyal giriş tanımlayıcıları (Google, Apple)
- Discord entegrasyonu için Discord hesabınızı bağlamayı seçerseniz Discord tanımlayıcıları (Discord kullanıcı kimliğiniz) — bağlantı, Discord'un yalnızca kimlik (identify) amaçlı OAuth'unu kullanır ve bir giriş yöntemi değildir; dilediğiniz zaman bağlantıyı kaldırabilirsiniz
- Misafir gezinme (mevcut olduğunda): Jynx'in herkese açık bölümlerini hesap oluşturmadan keşfedebilirsiniz; misafir modunda yalnızca yerel olarak saklanan bir misafir tanımlayıcısını ve uygulamayı sunmak için gereken §3.3'teki teknik verileri işleriz — profil oluşturulmaz ve hesap verisi saklanmaz. Eşleşmek, sohbet etmek veya topluluklara katılmak için hesap oluşturmanız gerekir

#### Profil Bilgileri:

- Doğum tarihi (yaş doğrulaması için)
- Ülke ve saat dilimi
- Konuşulan diller
- Biyografi (isteğe bağlı)
- Oyun tercihleri ve müsaitlik
- Özel arkadaş keşfi için benzersiz tanımlayıcı (otomatik oluşturulur)

### 3.2. Oyun Verileri

Uyumlu takım arkadaşları bulmanıza yardımcı olmak için şunları topluyoruz:

#### Oyun Profilleri:

- Oynadığınız oyunlar
- Seviyeler, rütbeler ve oyun istatistikleri
- Favori şampiyonlar/karakterler
- Oyun tarzı

#### Riot Games API Entegrasyonu:

Riot Games API'sinden (onayınızla) şunları alıyoruz:

- Çağırıcı adı ve Riot ID
- Rütbe ve maç geçmişi (League of Legends, Valorant, vb.)
- Şampiyon istatistikleri
- Son maç geçmişi

**Toplama Nedeni:** Oyuncu profilinizi göstermek ve diğer oyuncularla eşleştirmeyi iyileştirmek.

### 3.3. Kullanım ve Teknik Veriler

Belirli teknik verileri otomatik olarak topluyoruz:

#### Analitik ve Performans:

- **Firebase Performans İzleme:** Uygulama başlatma süresi, arayüz akıcılığı
- **Sentry:** Hata ve performans raporları (kişisel veri anonimleştirme ile)
- **Firebase Crashlytics:** Çökme raporları

#### Cihaz Bilgileri:

- Cihaz türü ve modeli
- İşletim sistemi sürümü
- Uygulama sürümü
- Cihaz tanımlayıcıları ve cihaz bütünlüğü sinyalleri (bkz. §5.7)

#### Kullanıcı Davranışı:

- Ziyaret edilen ekranlar ve kullanılan özellikler
- Uygulamada geçirilen süre
- Arayüz etkileşimleri

Ayarlar > Gizlilik > "Analitikleri Etkinleştir" bölümünden analitik veri toplamayı devre dışı bırakabilirsiniz.

Meta ile reklam ölçümü, analitikten ayrıdır ve kendi anahtarına sahiptir: bkz. §5.9.

### 3.4. İletişim Verileri

- **Mesajlar:** Topluluk sohbetlerindeki mesajlar, kullanıcılar arası özel mesajlar, sohbet geçmişi
- **Bildirimler:** Push bildirimleri için FCM token'ları (Firebase Cloud Messaging)

### 3.5. Kullanıcı Tarafından Oluşturulan İçerik

- Yüklenen fotoğraflar (profil resimleri, ek fotoğraflar) ve doğrudan mesajlarda paylaşılan görseller
- Güvenlik ve moderasyon raporları
- Kozmetik tercihleri (avatarlar, rozetler)

### 3.6. Sesli Oda Ses Verileri

Jynx, oyun oynarken diğer katılımcılarla konuşmanızı sağlayan gerçek zamanlı sesli odalar sunar. Sesli oda sesi, işletim sistemi mikrofon iznini vermeniz ve açıkça bir odaya katılmanızdan sonra mikrofonunuzdan yakalanır; bu iki adım tamamlanmadan önce hiçbir ses yakalanmaz.

Jynx, LiveKit'in kayıt, transkripsiyon, Agent Insights veya Egress özelliklerini etkinleştirmez. Sesli oda sesi, LiveKit'in SFU'su (Selective Forwarding Unit) üzerinden gerçek zamanlı olarak yönlendirilir ve Jynx veya LiveKit tarafından kaydedilmez, saklanmaz veya muhafaza edilmez.

Bir sesli odada konuştuğunuzda, sesiniz o odadaki diğer katılımcılara gerçek zamanlı olarak iletilir; bu, diğer sesli sohbet uygulamalarındaki sesin çalışma şekline benzer.

Sesli oda sesi onayınızla işlenir: herhangi bir ses yakalanmadan önce mikrofon izni verir ve açıkça bir odaya katılırsınız. Odayı terk ederek veya cihaz ayarlarından mikrofon iznini iptal ederek onayınızı her zaman geri alabilirsiniz.

## 4. Üçüncü Taraf Hizmetleri ve Veri Paylaşımı

### 4.1. Firebase Hizmetleri (Google)

Tamamı GDPR uyumlu aşağıdaki Firebase hizmetlerini kullanıyoruz:

- **Firebase Authentication:** Güvenli kullanıcı hesabı yönetimi
- **Cloud Firestore:** Profil ve oyun verilerinizin saklanması
- **Firebase Storage:** Profil resimlerinizin barındırılması
- **Cloud Functions:** Güvenli backend mantık yürütme
- **Firebase Cloud Messaging:** Push bildirimleri
- **Firebase App Check:** Kötüye kullanım ve botlara karşı koruma
- **Firebase Performance Monitoring:** Uygulama performans izleme
- **Firebase Crashlytics:** Çökme raporları

**Firebase Gizlilik Politikası:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Hata İzleme)

Hata ve performans takibi için Sentry kullanıyoruz. Toplanan veriler şunları içerir:

- Hata izleri
- Teknik bağlam (İS, uygulama sürümü)

**Sentry Gizlilik Politikası:** https://sentry.io/privacy/

### 4.3. Riot Games API

Riot Games hesabınızı bağladığınızda, resmi Riot Games API'si aracılığıyla oyun istatistiklerinizi alırız. Bu veriler yalnızca profilinizi görüntülemek ve eşleştirmeyi iyileştirmek için kullanılır.

**Riot Games Gizlilik Politikası:** https://www.riotgames.com/tr/privacy-notice

### 4.4. E-posta Servis Sağlayıcısı (Pazarlama ve Anket İletişimleri)

§5.6'da açıklanan pazarlama, yeniden etkileşim ve kaldırma/kayıp anketi e-postalarını iletmek için Jynx, veri işleyici (GDPR Mad. 28; LGPD Mad. 39 — operador) olarak hareket eden üçüncü taraf bir e-posta servis sağlayıcısı (ESP) kullanır. ESP; e-posta adresinizi ve minimum teslimat verinizi (örn. gönderim/geri dönme durumu) yalnızca Jynx'in belgelenmiş talimatları doğrultusunda ve imzalı bir Veri İşleme Sözleşmesi kapsamında işler.

- **ESP kimliği, rolü ve konumu:** Brevo (Brevo SAS, Paris, Fransa) — imzalı bir Veri İşleme Sözleşmesi kapsamında e-posta servis sağlayıcımız ve veri işleyicimiz. Brevo Gizlilik Politikası: https://www.brevo.com/legal/privacypolicy/
- **Alt işleyiciler:** Brevo'nun güncel alt işleyici listesi, Veri İşleme Sözleşmesi'nde (Kullanım Koşulları) yayımlanır: https://www.brevo.com/legal/termsofuse/
- **Uluslararası aktarım dayanağı:** Bkz. §9. Brevo'nun merkezi Fransa'dadır (AB). Brevo'ya yapılan aktarımlar bu nedenle GDPR kapsamındaki AB koruma rejiminden ve Brezilyalı kullanıcılar için AB'ye ilişkin ANPD yeterlilik karından (Resolution nº 32/2026) yararlanır — SCC'lere veya ek bir mekanizmaya gerek yoktur.

Kişisel verilerinizi satmıyoruz. §5.6'da açıklanan ayrı bir yasal dayanak olmaksızın pazarlama e-postalarına izleme pikselleri veya gizli analitikler gömülmez.

### 4.5. LiveKit Cloud (Gerçek Zamanlı Ses)

Jynx, katılımcılar arasında sesli oda sesini yönlendiren gerçek zamanlı medya altyapısını işletmek için imzalı bir Veri İşleme Sözleşmesi kapsamında veri işleyici (GDPR Md. 28; LGPD Md. 39 — operador) olarak LiveKit Cloud'u kullanır. LiveKit, her katılımcının ses akışını diğerlerine gerçek zamanlı olarak ileten SFU'yu (Selective Forwarding Unit) işletir.

Jynx, LiveKit'in kayıt, transkripsiyon, Agent Insights veya Egress özelliklerini etkinleştirmez. Sesli oda sesi, LiveKit'in SFU'su (Selective Forwarding Unit) üzerinden gerçek zamanlı olarak yönlendirilir ve Jynx veya LiveKit tarafından kaydedilmez, saklanmaz veya muhafaza edilmez.

LiveKit, faturalandırma, kötüye kullanımın önlenmesi ve operasyonel amaçlarla, Veri İşleme Ek Sözleşmesi uyarınca katılımcı kimlikleri, oda tanımlayıcıları, bağlantı zamanları ve kalite metrikleri gibi operasyonel oturum meta verilerini saklar. Bu meta veriler, sizi platform dışında tanımlamak veya reklam amacıyla kullanılmaz.

### 4.6. App Store / Google Play (Uygulama İçi Satın Almalar ve Abonelikler)

Jynx+ abonelikleri ve Kurucu Paketleri, bu satın almalar için ticari kayıt sahibi (merchant of record) olarak hareket eden Apple'ın App Store'u ve Google Play üzerinden uygulama içinde satılır (Hizmet Şartları, Bölüm 8'e bakın). Ödeme aracı verileri (örn. kart bilgileri) yalnızca Apple/Google tarafından kendi gizlilik politikaları uyarınca toplanır ve işlenir; Jynx hiçbir ödeme aracı verisi toplamaz, almaz veya saklamaz.

Faturalandırma sağlayıcımız RevenueCat aracılığıyla (imzalı bir Veri İşleme Sözleşmesi kapsamında hareket eden bir veri işleyici; GDPR Mad. 28; LGPD Mad. 39 — operador), Jynx yalnızca satın aldığınızı teslim etmek için gereken bilgileri alır: abonelik ve hak durumunuz (örn. Jynx+'ın aktif olup olmadığı ve yenileme tarihi), satın alınan Kurucu Paketi kademesi ve işlem tanımlayıcıları. Bu veri, Hizmeti sağlamak ve muhasebe ile kayıt tutma yükümlülüklerini karşılamak için gerekli olduğu sürece saklanır (§6) ve yalnızca haklarınızı tanımak ve sürdürmek ile dolandırıcılığı önlemek için kullanılır. RevenueCat Amerika Birleşik Devletleri'nde kuruludur; RevenueCat'a yapılan kişisel veri aktarımları, AB-ABD Veri Gizliliği Çerçevesine (DPF kapsamında self-sertifikasyon yapan RevenueCat varlıkları için) veya DPF'nin uygulanmadığı durumlarda standart sözleşme maddelerine dayanır. Brezilyalı kullanıcıların verisi için geçerli aktarım mekanizması, İşleme Faaliyetleri Kayıtlarımızda teyit edilir (bkz. §9).

- Apple Gizlilik Politikası: https://www.apple.com/legal/privacy/
- Google Gizlilik Politikası: https://policies.google.com/privacy
- RevenueCat Gizlilik Politikası: https://www.revenuecat.com/privacy

### 4.7. Özel Çocuk Güvenliği Teknolojisi Sağlayıcıları

Bilinen çocuk cinsel istismarı materyalini tespit etmeye yardımcı olmak için (bkz. §5.8), Jynx veri işleyici (GDPR Mad. 28; LGPD Mad. 39 — operador) olarak hareket eden özel çocuk güvenliği teknolojisi sağlayıcılarıyla çalışır. Bu sağlayıcılar yalnızca görsellerden türetilen geri döndürülemez hash'leri alır — görsellerin kendisini asla — ve hash eşleştirmesini AB bölgesinde, yalnızca çocuk güvenliği tespiti amacıyla ve Jynx'in belgelenmiş talimatları doğrultusunda yapar. Hash'in görselden türetilmesi, Jynx'in kendi Google Cloud altyapısı içinde gerçekleşir (bkz. §9).

### 4.8. Bulut Görsel Moderasyon Sağlayıcısı (AWS)

Platformu güvenli tutmak için profil resimleri ve galeri fotoğrafları, otomatik bir görsel sınıflandırma servisiyle taranır — Amazon Web Services (AWS) tarafından sağlanan ve veri işleyici (GDPR Mad. 28; LGPD Mad. 39 — operador) olarak hareket eden Amazon Rekognition. Bu amaçla görsel AWS'ye iletilir ve uygunsuz içerik (örneğin çıplaklık veya açık materyal) açısından makine öğrenmesiyle analiz edilir; sonuç, moderasyon sürecimizde ele alınan makine tarafından üretilmiş bir etiket ve güven puanıdır (Çocuk Güvenliği Politikası'na bakın). Bu işleme yalnızca içerik moderasyonu ve güvenlik için kullanılır — asla profil çıkarma, reklamcılık veya başka bir amaç için değil. AWS bu veriyi servis için yapılandırılmış AWS bölgesinde (şu anda São Paulo, Brezilya) işler; §9'daki aktarım güvenceleri geçerlidir. Hizmetin geri kalanında olduğu gibi, görsel AWS'ye aktarılmadan önce Jynx'in kendi Google Cloud altyapısı tarafından işlenir (bkz. §9).

### 4.9. Reklam Atfı (Meta, Apple ATT, Google Play Install Referrer)

Uygulama yüklemelerimizin pazarlamadan kaynaklanıp kaynaklanmadığını ölçmek için, gerektiğinde onayınıza tabi olarak reklam ve atıf teknolojileri kullanırız: Meta (Facebook) App Events SDK (Meta Platforms Ireland) ve Google Play Install Referrer API. Apple cihazlarda Meta SDK, yalnızca App Tracking Transparency (ATT) iznini verdikten sonra başlatılır; bu izin verilmeden hiçbir reklam tanımlayıcısı (IDFA) toplanmaz ve SDK başlatılmaz. Android'de Google Play Install Referrer API, yüklemenizin bir mağaza listelemesinden mi yoksa kampanya bağlantısından mı kaynaklandığını bildirir ve reklam tanımlayıcısı (GAID), cihazınızın reklam kimliği ayarlarına uygun şekilde kullanılır. Meta'ya gönderilen etkinlikler; uygulama etkinleştirme ve uygulama etkinliği meta verileriyle sınırlıdır (oturum açtıysanız uygulama kullanıcı tanımlayıcınız dâhildir; oturumu kapattığınızda SDK'dan silinir) ve atıf ile kampanya ölçümü amacıyla Jynx'in talimatları doğrultusunda işlenir.

Meta Platforms Ireland bu veriyi, yukarıdaki atıf amacı için veri işleyicimiz olarak işler; Meta Platforms, Inc. ayrıca kendi koşulları altında kendi meşru amaçları için bağımsız veri sorumlusu olarak da hareket edebilir (Meta'nın Veri İşleme Koşulları ve https://www.facebook.com/privacy/policy adresindeki gizlilik politikası). Amerika Birleşik Devletleri'ne yapılan aktarımlar, self-sertifikasyon yapan Meta varlıkları için AB-ABD Veri Gizliliği Çerçevesine veya standart sözleşme maddelerine dayanır (§9). ATT iznini reddedebilir veya geri alabilir ya da reklam kimliğinizi cihaz ayarlarından dilediğiniz zaman sıfırlayabilirsiniz; reddetmek, Jynx kullanımınızı etkilemez.

**Reklam ölçümü.** Yükleme atfının ötesinde dönüşümleri de ölçeriz: Meta ile paylaşılan etkinlikler; kayıt olma (registration), onboarding tamamlama ve satın almaları — satın alma tutarı ve para birimiyle birlikte — içerir. Onay verdiyseniz, eşleşme kalitesini artırmak için karmalanmış (geri döndürülemez şekilde karıştırılmış) bir e-posta adresi veya telefon numarası da paylaşılabilir; bu, meşru çıkar dayanağıyla (aşağıda) ölçülen kullanıcılar için asla gerçekleşmez. Kayıt olma etkinliği, beyan ettiğiniz cinsiyeti de içerebilir. Başka hiçbir şey paylaşılmaz — mesaj yok, profil alanları yok, oyunlar yok, topluluklar yok, kişiler yok, konum veya fotoğraflar yok — ve veriniz asla satılmaz. Yasal dayanaklar, seçenekleriniz ve Apple SKAdNetwork açıklaması §5.9'da açıklanmıştır.

Saklama: Jynx, Meta ile paylaşılan etkinliklerin ayrı bir kopyasını tutmaz. Zaten paylaşılmış etkinlikler, paylaşım anından itibaren uygulanan Meta'nın Business Tools saklama ve silme süreçlerine tabidir.

### 4.10. İçerik Üretici (Ortak) Programı — KYC ve Ödemeler

Jynx İçerik Üretici (ortak) programına katılırsanız, programın gerektirdiği kimlik, vergi ve ödeme bilgilerini işleriz: CPF veya CNPJ'niz (uygulama içinde doğrulanır), seçtiğiniz ödeme kanalı — PayPal (e-posta ile tanımlanır), Wise banka transferi (Brezilya) veya bir Pix anahtarı — ve kampanya performans kayıtlarınız (atıflı kayıt olmalar; bkz. §10 yönlendirmeler). Ödeme kayıtları takma adlı (pseudonymous) biçimde tutulur (§10). Program, kayıt olurken kabul ettiğiniz sürümlü İçerik Üretici Yönlendirme Koşulları ve Kendi Adına Fatura Yetkisi (Self-Billing Mandate) ile yönetilir (Hizmet Şartları §15'e bakın).

Ödemeler, seçtiğiniz kanalı işleten ödeme kurumu aracılığıyla yürütülür: PayPal veya Wise; kimliğinizi doğrulamak, dolandırıcılığı önlemek ve düzenleyici yükümlülüklerini karşılamak için ihtiyaç duydukları transfer talimatlarını ve verileri alır ve kendi koşulları altında bağımsız ödeme kurumları olarak hareket eder (gizlilik politikaları web sitelerinde yayımlanır); Pix ödemesi, Jynx Group'un sağladığınız Pix anahtarına başlattığı bir transferdir. Geçerli uluslararası aktarım güvenceleri §9'da açıklanmıştır.

### 4.11. Yapay Zekâ Özellikleri

**Avatar üretimi.** Avatar anketi, profiliniz için stilize avatar önerileri üretebilir. Üretim şu anda Cloudflare Workers AI (Cloudflare, Inc., veri işleyici) üzerinde, Jynx'in belgelenmiş talimatları doğrultusunda çalışır; temeldeki motor değişirse bu bölüm, değişiklikle birlikte veya öncesinde güncellenecektir. Girdiler; ankete verdiğiniz yanıtlar ve oyun tarzı tercihlerinizdir — asla fotoğraflarınız değil — birlikte kullanıcı tanımlayıcınız da kullanılır; öneriler uygulamaya PNG veya WebP görselleri olarak döndürülür ve geri alabilmeniz için 30 güne kadar saklanır, ardından silinir. Üretilen görseller sentetiktir — sizin fotoğraflarınız değildir — ve diğer görsellerle aynı moderasyona tabidir (§4.8).

**Yardımcı mesajlar (Quimera).** Bazı yardımcı uygulama mesajları, üretken bir yapay zekâ sistemi (Google Gemini, veri işleyici) tarafından oluşturulur veya zenginleştirilir. Bir mesaj yapay zekâ tarafından üretilmişse bu şekilde etiketlenir; yapay zekâ tarafından üretilmiş bir ögeyle etkileşimde olduğunuzda daima bilgilendirilirsiniz — AB Yapay Zekâ Yasası Mad. 50(1)'e uygun olarak.

## 5. Veri Kullanımı

Verilerinizi şu amaçlarla kullanırız:

### 1. Hizmetlerimizi Sağlamak:

- Hesabınızı oluşturmak ve yönetmek
- Diğer oyuncularla bağlantı kurmanızı sağlamak
- Takım oluşturma ve oyun seansı organizasyonunu kolaylaştırmak

### 2. Kişiselleştirme:

- Uyumlu takım arkadaşları önermek (oyun tabanlı, rütbe, tarz eşleştirme)
- İlgili içeriği göstermek

### 3. İletişim (operasyonel / işlemsel):

- Size önemli hizmet bildirimleri göndermek (bulunan eşleşmeler, alınan mesajlar, hesap güvenliği uyarıları ve §11 kapsamındaki politika değişikliği duyuruları)

Pazarlama, yeniden etkileşim ve kaldırma/kayıp anketi e-postaları ayrıca §5.6 Pazarlama İletişimleri altında açıklanır ve bu işlemsel kategori kapsamında değildir.

### 4. Hizmet İyileştirme:

- Özellikleri iyileştirmek için kullanımı analiz etmek
- Hataları tanımlamak ve düzeltmek
- Performansı optimize etmek
- Yapay zekâ işleyicileriyle avatar önerileri ve yardımcı mesaj taslakları üretmek (§4.11)

### 5. Güvenlik ve Uyumluluk:

- Dolandırıcılığı ve kötüye kullanımı önlemek
- Kullanım şartlarımızı uygulamak
- Yasal yükümlülüklerimize uymak

Uygulama kullanımından türetilmiş, anonimleştirilmiş ve toplulaştırılmış istatistikler yayımlayabiliriz (örneğin, oyuncuların nasıl duo kurduğu). Bu istatistikler asla bireysel kullanıcıları tanımlamaz.

### 5.6. Pazarlama İletişimleri

§5.3'te açıklanan operasyonel bildirimlerin yanı sıra, size e-postayla pazarlama ve yeniden etkileşim iletişimleri gönderebiliriz; bunlar arasında şunlar bulunur: Jynx uygulamasına ilişkin ürün güncellemeleri ve özellik duyuruları; bültenler; sizi uygulamaya geri davet eden yeniden etkileşim mesajları; ve kısa kaldırma veya kayıp geri bildirim anketleri (örn. "Jynx'i neden kullanmayı bıraktınız?"). Bu iletişimler, işlemsel/hizmet bildirimlerinden ayrıdır.

**Yasal dayanak — Avrupa Birliği / AEA kullanıcıları (GDPR + ePrivacy).** AB/AEA kullanıcılarına gönderilen pazarlama ve yeniden etkileşim e-postaları, önceki açık katılım (opt-in) onamınıza dayanır (ePrivacy Direktifi Mad. 13(1); Fransa'da Code des postes et des communications électroniques'in L. 34-5 maddesiyle iç hukuka aktarılmıştır; GDPR Mad. 6(1)(a) ve Mad. 7). Ücretli aboneliklerin (Jynx+) ve tek seferlik uygulama içi satın almaların (Kurucu Paketleri) lansmanının ardından Hizmet artık ücret karşılığı sağlanan bir hizmettir ve bu satın almalar, ABAD'nin C-654/23 sayılı kararı (13 Kasım 2025) anlamında bir "satış" teşkil eder. Bu nedenle ePrivacy Mad. 13(2)'deki "yumuşak katılım" (soft opt-in) istisnası, ilke olarak mevcut müşterilere benzer ürün ve hizmetler için bizim de kullanımımıza açıktır. Ancak ihtiyatlı bir tutum olarak, önceki açık katılım onamınıza dayanmaya devam ediyoruz; yumuşak katılım dayanağına yalnızca, İşleme Faaliyetleri Kayıtlarımızda kayıtlı belgelenmiş bir yeniden değerlendirme ve size güncellenmiş bir bildirimden sonra başlayacağız.

**Yasal dayanak — Brezilyalı kullanıcılar (LGPD).** Brezilyalı kullanıcılar için pazarlama ve yeniden etkileşim iletişimleri, iki alternatif yasal dayanağa dayanır:

1. **Onam (LGPD Mad. 7, I ve Mad. 8)** — kayıt sırasında veya uygulama içinde ayrı, işaretlenmemiş, amaca özel bir katılım (opt-in) olarak alınır; tarih, form sürümü ve dille kaydedilir; dilediğiniz zaman, ücretsiz ve Hizmete erişiminizi kaybetmeden geri çekilebilir (Mad. 8 §5). Onam; Jynx ana uygulamasının ötesinde, potansiyel kullanıcılara yapılan iletişimler, soğuk iletişim veya çapraz satış/ortak teklifleri için kullanılan dayanaktır.
2. **Meşru çıkar (LGPD Mad. 7, IX; Mad. 10 ile ayrıntılandırılmıştır)** — yalnızca yeniden etkileşim mesajları, aynı Jynx uygulamasına ilişkin ürün güncellemeleri veya tek seferlik kısa bir kayıp/kaldırma geri bildirim anketi alan; mevcut veya yakın zamanda kaybedilmiş kullanıcılar için kullanılır. Bu dayanağa güvenmeden önce Jynx, ANPD Meşru Çıkar Rehberi'nin (2 Şubat 2024) üç aşamalı testini izleyerek bir Meşru Çıkarlar Değerlendirmesi (LIA) yapar ve belgeler: (i) amaç, (ii) gereklilik ve (iii) dengeleme ve güvenceler. LIA; önceki ilişkiyi, kullanıcının makul beklentilerini, amacı, seçilen en az müdahaleci yolu ve çıkış (opt-out) kanalını kaydeder. Meşru çıkar; soğuk/istenmeyen e-posta, ilgisiz çapraz satış, satın alınmış listeler veya ilişki açıkça sona erdikten sonra ayrılan kullanıcılara ısrarlı mesajlaşma için kullanılmaz.

**İtiraz hakkı / çıkış (opt-out).** Brezilyalı kullanıcılar bu işlemeye dilediğiniz zaman itiraz edebilir ve §7.5 ile §7.6'daki mekanizmalar üzerinden (her e-postada tek tıkla abonelikten çıkma veya uygulama içi iletişim tercihleri anahtarı) çıkabilir; ücretsizdir ve hesabı sonlandırmayı gerektirmez. Çıkış taleplerini gerçek zamanlı olarak yerine getiririz. Brezilya Tüketicini Koruma Kanunu (CDC, Kanun 8.078/90, özellikle Mad. 39 III), istenmeyen veya kötüye kullanımlı ticari mesajlaşmayı yasaklar; bu nedenle çıkışlara sıkı biçimde uyarız ve sıklık sınırları uygularız; ısrarlı gönderim veya çıkışı görmezden gelmek, kötüye kullanımlı uygulama olarak değerlendirilebilir.

**Kaldırma / kayıp anketleri.** Operasyonel olarak mümkün olduğunda kaldırma/kayıp sorularını, kaldırma anında uygulama içinde sorarız (e-posta saklamayı gerektirmez). E-posta anketi gönderilirse: anket, tanıtım veya yeniden etkileşim içeriği içermez; kullanıcı başına, hesap silme veya kaldırmadan sonra yaklaşık 60 gün içinde en fazla bir (1) anket göndeririz; e-posta adresi daha sonra §6'ya uygun olarak silinir veya anonimleştirilir; ve silme / unutulma hakkı talebi (§7.3) göndermiş kullanıcılar asla yeniden iletişime geçilmez ve kalıcı bir bastırma listesine alınır (bkz. §6 ve Hizmet Şartları §7.2).

**E-posta izleme.** Pazarlama e-postaları, ayrı bir yasal dayanak olmaksızın kişisel veri işleyen izleme pikselleri veya gizli analitikler içermez. Herhangi bir açılma/tıklama izlemesi getirilirse, burada açıklanacak ve onam temelinde olacaktır (LGPD Mad. 8; ePrivacy Mad. 5(3)); ANPD'nin izleme teknolojilerine ilişkin rehberiyle (18 Ekim 2022) uyumlu şekilde.

**Sıklık.** Pazarlama e-postaları, dahili sıklık sınırlarına tabidir; uygulama içi iletişim tercihleri anahtarından veya herhangi bir mesajdaki abonelikten çıkma bağlantısına tıklayarak dilediğiniz zaman azaltabilir veya kapatabilirsiniz.

### 5.7. Topluluk Güvenliği ve Yasak Aşma

Topluluğumuzu kötüye kullanımdan korumaya yardımcı olmak için, bir askıya alma veya yasağı atlatma girişimlerini tespit etmek ve önlemek amacıyla cihaz tanımlayıcılarını ve cihaz bütünlüğü sinyallerini kullanırız. Bir cihazı yasaklı bir hesapla ilişkilendirirsek, o cihazın yeni hesap oluşturması veya oturum açması engellenebilir. Bunun hatadan kaynaklandığını düşünüyorsanız support@jynx.app adresine başvurarak itiraz edebilirsiniz.

Cihaz bütünlüğü sinyalleri, uygulamaya gömülü kurcalamaya karşı (anti-tampering) ve cihaz bütünlüğü kütüphanesi olan Talsec freeRASP'nin yardımıyla toplanır ve değerlendirilir. freeRASP cihazınızda çalışır: root'lanmış cihazlar, çalışma zamanı hooking'i ve kilidi açılmış bootloader'lar gibi tehditleri yerel olarak algılar ve bulgularını, kötüye kullanımı önlemek için kendi hata izleme sağlayıcımız (Sentry, §4.2) üzerinden bize bildirir; verinizi hiçbir Talsec tarafından işletilen servise göndermez.

### 5.8. Çocuk Güvenliği Görsel Analizi

Çocukları korumaya ve yasal bildirim yükümlülüklerimizi yerine getirmeye yardımcı olmak için Jynx, doğrudan mesajlarda paylaşılan görselleri; bu görsellerden türetilen hash'leri bilinen çocuk cinsel istismarı materyali veritabanlarıyla karşılaştıran otomatik sistemlerle analiz eder. Bu analiz için görsellerin kendisi üçüncü taraflara iletilmez — yalnızca geri döndürülemez hash'ler iletilir (bkz. §4.7). Profil resimleri ayrı olarak, §4.8'de açıklanan görsel moderasyon işlemesiyle taranır. Bu analiz yalnızca çocuk güvenliği tespiti ve yasal bildirim yükümlülüklerimiz için vardır; profil çıkarma, reklamcılık veya başka hiçbir amaç için kullanılmaz. Eşleşmeler, [Çocuk Güvenliği Politikamızda](/child-safety.html) açıklandığı şekilde ele alınır.

### 5.9. Reklam Ölçümü

Kabul ederseniz, reklamlarımızı ölçmek ve iyileştirmek için sınırlı etkinlikleri (kayıt olma ve satın almalar, tutarlarıyla birlikte) Meta ile ayrıca paylaşırız. Veriniz asla satılmaz ve seçiminizi Gizlilik ayarlarından dilediğiniz zaman değiştirebilirsiniz. Neyin, kiminle paylaşıldığı §4.9'da listelenmiştir.

Nasıl etkinleştirilir. iPhone ve iPad'de reklam ölçümü, verinizi yalnızca onayınızla (GDPR Mad. 6(1)(a); LGPD Mad. 7, I) kullanır; onam ilk açılıştaki gizlilik ekranında veya daha sonra Ayarlar > Gizlilik > Reklam ölçümü bölümünde verilir ve ayrıca Apple'ın App Tracking Transparency yetkisini gerektirir (bkz. §4.9). Android'de reklam ölçümü ya aynı onama ya da, ilk açılış ekranında reklam ölçümü anahtarı varsayılan olarak açık gösterilen kullanıcılar için, reklamlarımızı ölçme konusundaki meşru çıkarımıza (LGPD Mad. 7, IX ve Mad. 10) dayanır; bu, belgelenmiş bir Meşru Çıkarlar Değerlendirmesi ile değerlendirilmiştir. Bu durumda varsayılan olarak açıktır; aynı ekrandan veya Ayarlar > Gizlilik > Reklam ölçümü bölümünden dilediğiniz zaman kapatabilirsiniz — itiraz etmek, açık bırakmak kadar kolaydır, ücretsizdir ve asla hesabınızı silmeyi gerektirmez (LGPD Mad. 18, §2).

Güvenceler. 18 yaşın altında olduğunu bildiğimiz kullanıcılar ve yaşı tespit edilmemiş profiller, asla meşru çıkar dayanağıyla ölçülmez. Onamı geri çekmek veya itiraz etmek, bir sonraki uygulama açılışınızdan itibaren ileriye dönük paylaşımı durdurur; öncesinde usulüne uygun paylaşılmış etkinlikler §4.9'daki saklama koşullarıyla Meta'da kalır ve geri çekme, öncesinde yapılan işlemlerin hukuka uygunluğunu etkilemez (GDPR Mad. 7(3); LGPD Mad. 8 §5).

**Apple SKAdNetwork (iOS).** Yukarıdakilerden ayrı olarak ve herhangi bir seçim ya da ayardan bağımsız olarak — izleme veya reklam ölçümü reddedilmiş olsa bile — tüm iPhone ve iPad kullanıcıları için Apple'ın SKAdNetwork'ü, size reklam gösteren reklam ağına anonim ve toplulaştırılmış dönüşüm bilgileri bildirir (örneğin, belirli bir değer aralığında bir kayıt olma veya satın alma gerçekleştiği). Bunun için cihazınızdan Jynx'e ait hiçbir tanımlayıcı ve hiçbir kişisel veri çıkmaz: bu, Apple'ın standart atıf mekanizmasıdır ve biz onun aracılığıyla sizi tanımlayamayız.

### 5.10. E-postalar ve İletişimler

**Hesap etkinliği bildirim e-postaları (hizmet).** Uygulamadaki hesap etkinliğini kaçırırsanız (okunmamış bir mesaj, yeni bir eşleşme veya beğeni), Jynx size bununla ilgili e-posta gönderebilir. Bunlar; sosyal platformu işletme konusundaki meşru çıkarımıza (devam eden etkileşimlerinizden haberdar tutmak) dayanan hizmet bildirimleridir ve tanıtım içeriği içermez. Her bildirim türünü (mesajlar, eşleşmeler, beğeniler) Ayarlar > Gizlilik > İletişim bölümünden veya her e-postadaki "Bu bildirimleri yönet" bağlantısından dilediğiniz zaman kapatabilirsiniz. Bu işlemeye ayrıca dilediğiniz zaman itiraz edebilirsiniz (GDPR Mad. 21): privacy@jynx.app.

**Yeniden etkileşim ve pazarlama e-postaları (winback).** Bir hareketsizlik döneminden sonra sizi Jynx'e geri getirmeyi amaçlayan e-postalar ile haber ve teklif iletişimlerimiz ticari tanıtım niteliğindedir. Bunlar yalnızca, ayrı ve isteğe bağlı işaretlenmemiş bir kutu aracılığıyla toplanan; önceki, belirli, özgürce verilmiş ve geri alınabilir onamınızla gönderilir — hiçbir zaman Şartlarımızı kabul etmenin bir koşulu olarak değil. Onamı, Ayarlar > Gizlilik > İletişim bölümünden veya her e-postadaki abonelikten çıkma bağlantısından dilediğiniz zaman geri çekebilirsiniz.

**Bildirim e-postalarında kullanıcı adınızın ve profil resminizin gösterilmesi.** Başka bir üyeyle etkileşimde bulunduysanız (beğeni, eşleşme, mesaj), kullanıcı adınız ve profil resminiz; o üye hareketsizken kendisine gönderilen hesap etkinliği bildirim e-postalarında görünebilir. Bu ögeler gönderim anında üretilir ve e-posta günlüklerimizde saklanmaz (yalnızca tanımlayıcı ve sayaçlar).

### 5.11. Konum ve Eşleşme Mesafesi

**Neyi işliyoruz.** Konumunuzu paylaşmayı seçerseniz Jynx, bunu yalnızca tek bir amaç için kullanır: eşleşme kuyruğunda sizinle diğer oyuncular arasındaki yaklaşık mesafeyi ("~12 km") görüntülemek ve yakınlık sıralamasını açtıysanız o kuyruğu mesafeye göre sıralamak. Yalnızca yaklaşık konumu işleriz: talep ettiğimiz izin, işletim sisteminin kaba / azaltılmış doğruluklu konum iznidir ve herhangi bir şey saklanmadan önce koordinatlarınız, sunucularımızda yaklaşık 0,02°'lik (yaklaşık 2,2 km) bir ızgaraya yuvarlanır; türetilen konum hücresi yaklaşık 11 km genişliğindedir. Ham GPS koordinatları asla saklanmaz.

**İsteğe bağlı ve onama dayalı.** Bu isteğe bağlı bir özelliktir: işletim sistemi konum iznini VERMENİZ ve uygulama içi konum anahtarı AÇIK olmadıkça hiçbir şey toplanmaz. Konum asla arka planda işlenmez — yalnızca uygulamayı kullanırken kullanılır. Konumunuz; asla harita üzerinde bir konum olarak diğer kullanıcılara gösterilmez, asla reklamcılık için kullanılmaz ve asla reklam platformlarıyla paylaşılmaz (bkz. §4.9: reklam atfı veya ölçümü için paylaşılan hiçbir şeyde konum verisi yer almaz). Analitik etkinliklerimiz koordinat, şehir adı veya konum hücresi tanımlayıcısı içermez — yalnızca anonim benimseme ve sıralama seçimi sinyalleri. İşletim sistemi izin istemi, onamınızın alındığı yerdir; uygulama içi anahtar, onu geri çektiğiniz yerdir (§7.6).

**Ne kadar süre tutuyoruz.** Hesabınız için tuttuğumuz konum kaydı, güncelleme olmaksızın 45 gün sonra otomatik olarak silinir ve paylaşım açıkken özelliği her kullandığınızda yenilenir. Profil kartınızda gösterilen yaklaşık mesafe etkinliğe bağlıdır: yalnızca profil kartınız sürdüğü sürece kalır ve güncelleme olmaksızın 45 gün sonra yok sayılır.

**Kontrol sizde.** Paylaşımı dilediğiniz zaman durdurabilirsiniz: uygulama içi konum anahtarını kapatmak, saklanan koordinatları anında siler (kayıt tutulur ancak koordinatları boşaltılır) ve cihaz ayarlarınızdan konum iznini iptal etmek, toplamayı kaynağında durdurur. Hesabınızı silmek (§7.3) konum verilerinizi de temizler.

## 6. Veri Saklama

### 6.1. Saklama Süreleri

- **Profil Verileri:** Hesabınız aktif olduğu sürece saklanır
- **Günlükler ve Analitik:** Firebase Analytics: 14 ay (Firebase politikası)
- **Pazarlama e-posta adresleri (onama dayalı):** Çıkış (opt-out) yapmadığınız veya hesabınızı silmediğiniz sürece saklanır; ayrıca size yeniden ulaşmamayı güvence altına almak için bastırma listesinde (aşağıya bakın) karmalanmış bir kayıt tutulur
- **Kaldırma / kayıp anketi e-posta adresleri:** Anketin gönderilmesinden sonra en fazla 60 gün (anket gönderilmediyse kaldırma/silmeden sonra 60 gün) saklanır; ardından adres silinir veya geri döndürülemez biçimde anonimleştirilir. Kullanıcı başına en fazla bir (1) anket e-postası gönderilir
- **Yakın zamanda kaybedilmiş hesapların yeniden etkileşimi (LGPD meşru çıkar dayanağı, yalnızca Brezilyalı kullanıcılar):** CNIL rehberi ve makul beklentiler testiyle uyumlu olarak, Jynx yakın zamanda kaybedilmiş (silme talebi olmayan) bir hesabın e-posta adresini, son anlamlı etkileşimden sonra 3 yıla kadar yeniden etkileşim için kullanabilir; sonrasında silinir veya anonimleştirilir

### 6.2. Veri Silme

Hesabınızın silinmesini istediğiniz zaman talep edebilirsiniz (Bölüm 7'ye bakın).

**Yasal Saklama:** Bazı veriler yasal yükümlülüklerimizi yerine getirmek için daha uzun süre saklanabilir (örn. güvenlik raporları, finansal işlemler).

Hesabınızı sildiğinizde, e-posta adresinizi pazarlama CRM'imizden ve e-posta servis sağlayıcımızdan temizleriz. Silme hakkınızı kullanırsanız (§7.3 / GDPR Mad. 17 / onama dayalı veriler için LGPD Mad. 18(VI)), e-posta adresiniz kalıcı, karmalanmış bir bastırma listesine eklenir; böylece pazarlama, yeniden etkileşim veya anketler için asla yeniden kullanılmaz — herhangi bir üçüncü taraf veya satın alınmış liste yoluyla yeniden içe aktarmaya karşı koruma dâhil. Not: LGPD kapsamında Mad. 18(VI) silme işlemi, onam temelinde işlenen verilere uygulanır; meşru çıkar temelinde (Mad. 7 IX) işlenen veriler ise amaç sınırlaması ilkesine (Mad. 6 II ve §2) ve işlemenin durdurulmasını isteme hakkınıza (Mad. 18 §2) tabidir.

## 7. Haklarınız (GDPR ve LGPD)

Bulunduğunuz yere bağlı olarak, GDPR (AB/AEA) ve/veya Brezilya LGPD'si (Lei Geral de Proteção de Dados, Kanun 13.709/2018) kapsamında haklara sahipsiniz.

### 7.1. Erişim Hakkı

Hakkınızda tuttuğumuz tüm verilerin bir kopyasını talep edebilirsiniz.

**Bu hakkı nasıl kullanırsınız:** Ayarlar > Gizlilik > "Verilerimi Dışa Aktar"

İşlem, tüm verilerinizi içeren bir JSON dosyası oluşturur (profil, mesajlar, istatistikler, vb.). İndirme bağlantısı 7 gün geçerlidir.

### 7.2. Düzeltme Hakkı

Profil bilgilerinizi uygulamadan istediğiniz zaman değiştirebilirsiniz (kullanıcı adı, biyografi, tercihler, vb.).

### 7.3. Silme Hakkı ("Unutulma Hakkı")

Hesabınızın silinmesini talep edebilirsiniz.

**Bu hakkı nasıl kullanırsınız:** Ayarlar > Tehlike Bölgesi > "Hesabımı Sil"

#### Otomatik Silme İşlemi:

1. Kazara silmeleri önlemek için iki aşamalı onay
2. Kişisel verilerinizin anında anonimleştirilmesi (Firestore)
3. Firebase Authentication hesabınızın silinmesi (tüm OAuth token'larını otomatik iptal eder)
4. Referans olarak anonimleştirilmiş bir ID sağlanır
5. Mesajlarınızı ve oluşturduğunuz içeriği silme seçeneği

**Önemli:** Silme geri alınamaz. Bazı anonimleştirilmiş veriler istatistiksel amaçlarla saklanabilir (GDPR uyumlu).

**Manuel Silme Talepleri:** Özel veri silme talepleri için (örn. yalnızca belirli bir topluluktaki mesajları silmek, Storage görüntülerini silmek veya diğer özel durumlar), lütfen Veri Koruma Görevlimizle dpo@jynx.app adresinden iletişime geçin. GDPR'ın gerektirdiği şekilde manuel talepleri 30 gün içinde işleme alacağız.

### 7.4. Veri Taşınabilirliği Hakkı

Veri dışa aktarma (Bölüm 7.1), verilerinizi yapılandırılmış, makine tarafından okunabilir bir formatta (JSON) almanıza olanak tanır.

### 7.5. İtiraz Hakkı / Pazarlamadan Çıkma

Verilerinizin doğrudan pazarlama amaçlarıyla işlenmesine her zaman, ücretsiz ve gerekçe göstermeksizin itiraz edebilirsiniz. GDPR Mad. 21(2) uyarınca bu hak, AB/AEA kullanıcıları için mutlaktır: itirazınızı aldığımızda tüm pazarlama işlemlerini durdururuz. Brezilyalı kullanıcılar için, pazarlama işlemesine aşağıdaki çıkış mekanizmaları üzerinden karşı çıkabilirsiniz (LGPD Mad. 8 §5; Mad. 18 §2).

- **Tek tıkla abonelikten çıkma:** her pazarlama e-postası, gerçek zamanlı olarak yerine getirilen bir tek tıkla abonelikten çıkma bağlantısı içerir (RFC 8058 List-Unsubscribe-Post)
- **Uygulama içi anahtar:** Ayarlar > Gizlilik > İletişim Tercihleri
- **E-posta:** dpo@jynx.app

### 7.6. Onayı Geri Çekme Hakkı

Şunlar için onayınızı geri çekebilirsiniz:

- **Analitik:** Ayarlar > Gizlilik > "Analitikleri Etkinleştir" seçeneğini devre dışı bırakın
- **Reklam ölçümü:** Ayarlar > Gizlilik > Reklam ölçümü (bkz. §5.9)
- **Konum (eşleşme mesafesi):** Uygulama içi konum anahtarını kapatın — bu, saklanan koordinatları siler — veya cihaz ayarlarınızdan konum iznini iptal edin (bkz. §5.11)
- **Push Bildirimleri:** Cihaz ayarları
- **Pazarlama İletişimleri:** Bülten, ürün güncellemeleri, yeniden etkileşim ve kaldırma/kayıp anketleri — tek tıkla abonelikten çıkma, uygulama içi iletişim tercihleri anahtarı veya dpo@jynx.app yoluyla; hesabınızı sonlandırmadan geri çekilebilir

**Not:** OAuth token'ları (Google, Apple) hesabınızı sildiğinizde otomatik olarak iptal edilir (Bölüm 7.3).

Geri çekme, geri çekmeden önce yapılan işlemenin hukuka uygunluğunu etkilemez (GDPR Mad. 7(3); LGPD Mad. 8 §5) ve onamı geri çekmek asla hesabınızı silmeyi gerektirmez.

### 7.7. Ek LGPD Hakları (Brezilyalı Kullanıcılar)

Yukarıdaki haklara ek olarak, Brezilya'da bulunan ilgili kişiler LGPD Mad. 18 uyarınca şu haklara sahiptir: işlemenin varlığının teyidi; verilere erişim; eksik, yanlış veya güncel olmayan verilerin düzeltilmesi; gereksiz veya aşırı verilerin anonimleştirilmesi, engellenmesi veya silinmesi (Mad. 18(VI), onam temelinde işlenen verilere uygulanır); talep üzerine başka bir servis veya ürün sağlayıcısına taşınabilirlik; onamla işlenen kişisel verilerin silinmesi; ve onamı reddetme olanağı ile bunun sonuçlarına ilişkin bilgi.

Bu hakları, Ayarlar > Gizlilik üzerinden veya dpo@jynx.app adresindeki encarregado ile iletişime geçerek kullanabilirsiniz. Ayrıca Brezilya veri koruma otoritesi — Autoridade Nacional de Proteção de Dados (ANPD) — nezdinde https://www.gov.br/anpd adresinden şikayette bulunabilirsiniz.

## 8. Veri Güvenliği

Verilerinizi korumak için teknik ve organizasyonel güvenlik önlemleri uyguluyoruz:

- **Şifreleme:** HTTPS aracılığıyla güvenli iletişim
- **Firebase Güvenlik Kuralları:** Firestore verilerine katı erişim kontrolü
- **Kimlik Doğrulama:** Firebase Auth aracılığıyla güvenli oturum yönetimi
- **Giriş Doğrulaması:** SecureTextInput aracılığıyla XSS enjeksiyonu önleme
- **Hız Sınırlaması:** Kötüye kullanıma karşı koruma (spam mesajlar, otomatik eylemler)
- **Moderasyon:** İçerik raporlama ve moderasyon sistemi
- **Gerçek zamanlı ses:** Sesli oda medyası, ana akım sesli uygulamaların kullandığı standart olan WebRTC DTLS-SRTP ile aktarım sırasında şifrelenir; uygulama ile sunucularımız arasındaki sinyalleşme HTTPS/TLS üzerinden yapılır.

Hiçbir sistem %100 güvenli değildir. Kişisel veri ihlali durumunda, yetkili denetim otoritesine geciksimsiz olarak ve mümkün olduğunda, haklarınız açısından risk oluşturması muhtemel bir ihlalden haberdar olduktan sonra 72 saat içinde (GDPR Mad. 33) bilgi veririz; ihlal sizin açınızdan yüksek risk oluşturması muhtemelse, etkilenen kullanıcılara geciksimsiz olarak bildiririz (GDPR Mad. 34). Brezilya'daki ilgili kişiler için, ilgili güvenlik olaylarını ANPD'ye ve size, otoritenin belirlediği süre içinde (LGPD Mad. 48; şu anda ANPD Resolution CD/ANPD nº 15/2024 uyarınca 3 iş günü) ileteceğiz.

## 9. Uluslararası Veri Transferleri

Verileriniz, bulunduğunuz yargı bölgesi dışında konumlanan sunuculara aktarılabilir ve orada saklanabilir; bunlar şunları içerir:

- **Google Cloud / Firebase:** Küresel altyapı (web sitesinde Google Analytics dâhil, bkz. §10); GDPR standart sözleşme maddeleri ve eşdeğer güvenceler kapsamında
- **Amazon Web Services (görsel moderasyonu):** §4.8'de açıklanan görsel moderasyon işlemesi, AWS'nin São Paulo bölgesinde (Brezilya) çalışır; AB/AEA'dan yapılan aktarımlar, Avrupa Komisyonu'nun standart sözleşme maddelerini içeren AWS veri işleme sözleşmesine ve aşağıdaki genel güvencelere dayanır. Görsel, Jynx'in Google Cloud altyapısı üzerinden AWS'ye aktarılır (yukarıdaki Google Cloud / Firebase bacağı)
- **Sentry:** ABD merkezli sunucular; AB/AEA'dan yapılan aktarımlar, DPF kapsamında self-sertifikasyon yapan Sentry varlıkları için AB-ABD Veri Gizliliği Çerçevesine (Temmuz 2023'te yürürlükte, geçersiz kılınan Privacy Shield'in yerini almıştır) veya DPF'nin uygulanmadığı durumlarda standart sözleşme maddelerine dayanır
- **E-posta Servis Sağlayıcısı (ESP):** §5.6'da açıklanan pazarlama, yeniden etkileşim ve anket iletişimlerini iletmek için kullanılır. ESP, §4.4'te adlandırılır ve imzalı bir Veri İşleme Sözleşmesi kapsamında veri işleyici olarak hareket eder
- **LiveKit (gerçek zamanlı ses ve, mevcut olduğunda, ekran paylaşımı):** LiveKit Cloud, imzalı bir Veri İşleme Sözleşmesi kapsamında (§4.5) gerçek zamanlı ses (ve özellik mevcut olduğunda ekran paylaşımı) medyası için veri işleyicimizdir. LiveKit Cloud medyayı küresel olarak yönlendirir: oturumlar, belirli bir bölgeye sabitlenmeksizin LiveKit'in küresel altyapısı tarafından sunulur. Sesli oda sesi (ve mevcut olduğunda ekran paylaşımı görüntüsü) gerçek zamanlı olarak yönlendirilir ve Jynx veya LiveKit tarafından kaydedilmez, saklanmaz veya kalıcı tutulmaz; LiveKit yalnızca §4.5'te açıklanan operasyonel oturum meta verilerini tutar. LiveKit'a yapılan kişisel veri aktarımları, GDPR koşullarını ve Avrupa Komisyonu'nun sınır ötesi aktarımlara ilişkin standart sözleşme maddelerini içeren LiveKit Veri İşleme Ek Sözleşmesi'ne ve diğer işleyicilerimiz için geçerli olduğu gibi LiveKit için de geçerli olan aşağıdaki genel güvencelere dayanır.
- **Meta (reklam atfı ve reklam ölçümü):** §4.9 ve §5.9'da açıklanan paylaşım, Meta Platforms Ireland Ltd.'ye veya Meta Platforms, Inc.'e ulaşır; bunlar veriyi Amerika Birleşik Devletleri'nde ve diğer ülkelerde işler. Meta'nın araçlarıyla yapılan kişisel veri uluslararası aktarımları, geçerli sözleşmesel güvencelere ve uluslararası aktarım mekanizmalarına tabidir. Jynx, bunların LGPD Mad. 33 gereksinimlerine ve ANPD düzenlemelerine uygunluğunu doğrulamaktadır.

**Güvenceler (GDPR, AB/AEA).** AB/AEA'dan yapılan tüm aktarımlar; bir yeterlilik karı, AB-ABD Veri Gizliliği Çerçevesi veya standart sözleşme maddeleriyle ve gerektiğinde ek önlemlerle güvence altına alınır.

**Güvenceler (LGPD, Brezilya).** Brezilyalı kullanıcıların kişisel verilerinin aktarımları, LGPD Mad. 33'e tabidir:

- **Fransa'daki Jynx Group'a (veri sorumlusu):** Avrupa Birliği'ni — Fransa dâhil — yeterli koruma düzeyi sağlayan bir bölge olarak tanıyan ve 26 Ocak 2026'da yürürlüğe giren ANPD Resolution CD/ANPD nº 32/2026 sayılı karara dayanarak LGPD Mad. 33(I) uyarınca hukuka uygundur. Bu bacak için ek bir aktarım mekanizması gerekmez. (Bu yeterlilik karı, ANPD tarafından dört yıl içinde yeniden değerlendirmeye tabidir; askıya alınırsa Jynx, ANPD standart sözleşme maddeleri gibi alternatif bir Mad. 33 mekanizması uygulayacaktır.)
- **Fransa'daki Brevo'ya (e-posta ESP'si, veri işleyici):** Yukarıdaki bacak için geçerli olan ve Avrupa Birliği'ni — Fransa dâhil — yeterli koruma düzeyi sağlayan bir bölge olarak tanıyan aynı ANPD Resolution CD/ANPD nº 32/2026 sayılı karara (26 Ocak 2026'da yürürlükte) dayanarak LGPD Mad. 33(I) uyarınca hukuka uygundur. Bu bacak için ek bir aktarım mekanizması gerekmez. (Yukarıda açıklanan aynı ANPD yeniden değerlendirmesine tabidir; yeterlilik kararı askıya alınırsa Jynx, ANPD standart sözleşme maddeleri gibi alternatif bir Mad. 33 mekanizmasını Brevo ile uygulayacaktır.)
- **AB'deki çocuk güvenliği teknolojisi sağlayıcılarına (hash eşleştirme, veri işleyiciler):** Yukarıdaki bacaklarla aynı ANPD Resolution CD/ANPD nº 32/2026 sayılı AB yeterlilik karı kapsamındadır — sağlayıcılar yalnızca geri döndürülemez hash'leri alır ve eşleştirmeyi AB bölgesinde yapar (§4.7)
- **Brezilya'daki AWS'ye (görsel moderasyonu, veri işleyici):** AWS Rekognition adımı ülke içinde kalır — AWS'nin São Paulo bölgesinde çalışır (§4.8). Görsel önce, yukarıdaki genel Google Cloud / Firebase aktarım koşullarıyla güvence altına alınan Jynx'in Google Cloud altyapısı üzerinden aktarılır

**Şeffaflık (ANPD Resolution CD/ANPD nº 19/2024).** ANPD Resolution CD/ANPD nº 19/2024'ün Madde 17, §2'sinde öngörülen bilgiler bu Politikada birleştirilmiştir: her uluslararası aktarımın biçimi, süresi ve belirli amacı ile varış ülkeleri (bu bölüm ve atıf yaptığı bölümler); veri sorumlusunun kimlik ve iletişim bilgileri (§1); verilerin ortak kullanımı ve amacı (§4); işleme aktörlerinin sorumlulukları ve alınan güvenlik önlemleri (§4 ve §8); ve kolay erişilebilir bir kanal ile ANPD'ye başvurma hakkı dâhil haklarınız ve bunları kullanma yolları (§7 ve §12). Bu uluslararası aktarımları gerçekleştirmek için kullanılan sözleşme maddelerinin tam metni, talep üzerine, veri koruma görevlimiz (dpo@jynx.app) tarafından 15 gün içinde size sağlanır.

Tarihsel not: mevcut sözleşmelerin ANPD SCC'lerine uyarlanması için tanınan bir yıllık geçiş süresi 23 Ağustos 2025'te sona erdi; ESP gibi yeni veri işleyici ilişkileri, sözleşmeye dahil olurken SCC'leri imzalar.

## 10. Çerezler ve Benzer Teknolojiler

Mobil uygulamamız geleneksel anlamda çerez kullanmaz, ancak şunları kullanır:

- **Kimlik Doğrulama Token'ları:** Güvenli bir şekilde yerel olarak saklanır
- **Yerel Önbellek:** Performansı iyileştirmek için (profil verileri, son mesajlar)

**Web sitesi.** Jynx web sitesi (jynx.app), sitenin nasıl kullanıldığını anlamak için Google Analytics 4'ü (Google tarafından sağlanır) Consent Mode v2 ile kullanır. Analitik depolaması varsayılan olarak reddedilir: çerez banner'ını kabul edene kadar Google Analytics, çerezler veya yerel depolama olmadan çalışır ve Google yalnızca çerezsiz, tanımlayıcısız sinyaller alır; kabul ederseniz tam ölçüm etkinleştirilir. Seçiminiz — kabul veya reddetme — cihazınızda yerel olarak saklanır (tarayıcı localStorage, anahtar "jynx-analytics-consent"). jynx.app için tarayıcı depolamanızı temizlemek, banner'ın yeniden görünmesini ve seçiminizi değiştirebilmenizi sağlar. Google, ortaya çıkan analitik verinin alıcısı olarak hareket eder (bkz. §9); diğer işleyicilerimiz için §4'e, haklarınız için §7'ye bakın.

**Davet bağlantıları.** Tarayıcınızda bir davet bağlantısı (jynx.app/invite/…) açıp App Store indirme düğmesine dokunduğunuzda, web sitesi o davet bağlantısını cihazınızın panosuna yazar ve önceki içeriğinin yerine koyar. Bu, iOS'ta (yüklemeyi yönlendirme mekanizması olmayan bir platformda) uygulama yüklemelerini atfetmek için kullanılan standart bir tekniktir: Jynx uygulamasının ilk açılışta, bağlantıyı gönderen kişinin davetiyle katılma önerisinde bulunabilmesini sağlar. Web sitesi panonuzu asla okumaz — yalnızca bu bağlantıyı yazar — ve uygulama, açık onamınızı aldıktan sonra onu yalnızca bir kez okur. Başka pano içeriğine erişilmez veya toplanmaz. Paylaşmak istemiyorsanız yapıştırma istemini reddetmeniz ve davetsiz katılmanız yeterlidir.

**Yönlendirmeler ve içerik üretici kampanyaları.** Jynx'e bir davet koduyla — bir bağlantıdan, bir QR kodundan veya elle girilerek — katıldığınızda, daveti paylaşan kişiye veya kampanyaya atfedebilmek, ilgili avantajları uygulayabilmek ve sahte kayıt olmaları tespit edebilmek için o kodu hesabınızla birlikte kaydederiz. Bu işleme, meşru çıkarlarımıza dayanır (bkz. §13) ve dolandırıcılık önleme kontrollerimize tabidir; hangi tür davet kodunu kullandığınıza bakılmaksızın aynı veri toplandığından sizin tarafınızda hiçbir şey değişmez. Bazı davet kodları ayrıca içerik üretici atıf kampanyalarına aittir: kullandığınız kod böyle bir kampanyaya aitse, ek olarak o kampanyaya kredi yazılabilir. İçerik üretici kampanyalarının ödeme kayıtları takma adlı (pseudonymous) biçimde tutulur.

**Ekran paylaşımı (mevcut olduğunda).** Özellik mevcut olduğunda, cihazınızın ekranını bir sesli odada paylaşabilirsiniz. Paylaşım, yalnızca işletim sisteminin ekran yakalama izni verildikten ve uygulama içinde açık bir onay verildikten sonra başlar. Ekranınızda görünen her şey — bildirimler dâhil — odadaki diğer katılımcılara canlı olarak aktarılır ve paylaştığınız şeyden siz sorumlusunuz. Paylaşılan görüntü, sesli ses gibi LiveKit SFU üzerinden yönlendirilen canlı bir medya akışıdır (§4.5, §9): Jynx veya LiveKit tarafından kaydedilmez veya saklanmaz ve paylaşımı sonlandırdığınızda durur.

## 11. Bu Politikadaki Değişiklikler

Bu gizlilik politikasını güncelleyebiliriz. Önemli değişiklikler durumunda sizi bilgilendireceğiz:

- Uygulama içi bildirim aracılığıyla
- Hesabınızla ilişkili e-posta adresine

## 12. Bizimle İletişime Geçin

Bu gizlilik politikası hakkında sorularınız için veya haklarınızı kullanmak için:

- **E-posta:** dpo@jynx.app

**Denetim Otoriteleri:** Haklarınıza riayet edilmediğini düşünüyorsanız şikayette bulunabilirsiniz:

- **AB/AEA kullanıcıları:** Fransa'daki CNIL (Commission Nationale de l'Informatique et des Libertés) nezdinde — https://www.cnil.fr
- **Brezilyalı kullanıcılar:** Brezilya'daki ANPD (Autoridade Nacional de Proteção de Dados) nezdinde — https://www.gov.br/anpd

Bir denetim otoritesine şikayette bulunmak, bulunduğunuz yargı bölgesinde geçerli olan zorunlu tüketici korumaları dâhil (örn. Brezilya Tüketicini Koruma Kanunu, Kanun 8.078/90), size tanınan diğer yargı yollarına başvurma hakkınızı etkilemez.

## 13. Yasal Dayanaklar ve Onam

Kişisel verilerinizi yalnızca hukuka uygun bir dayanağımız olduğunda işleriz. Güvendiğimiz yasal dayanaklar ve her birinin bu Politikada geçtiği yerler şunlardır:

- Bir sözleşmenin ifası / Hizmetin sağlanması (GDPR Mad. 6(1)(b); LGPD Mad. 7, V) — hesap, eşleştirme ve mesajlaşma (§5.1–5.3)
- Meşru çıkarlar (GDPR Mad. 6(1)(f); LGPD Mad. 7, IX ve Mad. 10) — güvenlik, dolandırıcılık önleme, hizmet iyileştirme ve (Brezilyalı kullanıcılar için) §5.6'da açıklanan şekilde mevcut veya yakın zamanda kaybedilmiş kullanıcılara pazarlama/yeniden etkileşim/anket iletişimleri; her biri belgelenmiş bir dengeleme değerlendirmesiyle desteklenir
- Hukuki yükümlülük (GDPR Mad. 6(1)(c); LGPD Mad. 7, II) — yasal amaçlarla saklama (§6)
- Hukuki yükümlülük ve meşru çıkarlar (GDPR Mad. 6(1)(c) ve 6(1)(f); LGPD Mad. 7, II ve IX) — §5.8'de açıklanan çocuk güvenliği görsel analizi ve §4.8'deki görsel moderasyon işlemesi dâhil yasadışı ve politika ihlali içeriğin tespiti, kötüye kullanımın ve yasak aşmanın önlenmesi (§5.7) ve yasal bildirim yükümlülüklerine uyum. Doğrudan mesajlarda paylaşılan görsellerin analizi için Jynx ayrıca, Regulation (EU) 2021/1232'nin (halen yürürlükte olan ePrivacy istisnası) izin verdiği çevrimiçi çocuk cinsel istismarının gönüllü tespitine dayanır.
- Onam (GDPR Mad. 6(1)(a); LGPD Mad. 7, I ve Mad. 8) — etkinleştirdiğinizde analitik, push bildirimleri ve (AB/AEA kullanıcıları ile Brezilyalı potansiyel kullanıcılar/soğuk iletişim/çapraz satış gönderimleri için) §5.6'ya göre pazarlama iletişimleri
- Reklam ölçümü (§5.9): etkinleştirdiğinizde onamınız (GDPR Mad. 6(1)(a); LGPD Mad. 7, I ve Mad. 8); Android'de, anahtar varsayılan olarak açık gösterilen kullanıcılar için alternatif olarak meşru çıkarımız (LGPD Mad. 7, IX ve Mad. 10), dilediğiniz zaman itiraz hakkınızla
- Eşleşme mesafesi özelliği için yaklaşık konum (§5.11): onamınız (GDPR Mad. 6(1)(a); LGPD Mad. 7, I ve Mad. 8), işletim sistemi konum izniyle birlikte uygulama içi konum anahtarıyla alınır; dilediğiniz zaman geri çekebilirsiniz (§7.6) — anahtarı kapatmak, saklanan koordinatları siler
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Onam, belirli ve bilgilendirilmiş olmalıdır.** Onamınıza güvendiğimiz durumlarda onam, net bir olumlu eylemle verilir; belirli amaçlara atıf yapar ve bu şartları kabul etmenizden ayrı olarak alınır (LGPD Mad. 8 §1 — cláusula destacada). Genel veya paketlenmiş yetkilendirmeler LGPD Mad. 8 §4 uyarınca geçersizdir ve GDPR Mad. 4(11) ile Mad. 7 uyarınca hükümsüzdür. Jynx'i kullanmak, tek başına pazarlama onayı oluşturmaz. Geçerli onamı ispat yükü Jynx'tedir (LGPD Mad. 8 §2; GDPR Mad. 7(1)); bu nedenle topladığımız her onamın tarihini, form sürümünü, dilini ve kapsamını kaydederiz.

**Geri çekme.** Herhangi bir onamı dilediğiniz zaman, verilmesi kadar kolay bir prosedürle ve hesabınızı silmenizi gerektirmeden geri çekebilirsiniz (LGPD Mad. 8 §5; GDPR Mad. 7(3)) — bkz. §7.5 ve §7.6. Geri çekme, geri çekmeden önce yapılan işlemenin hukuka uygunluğunu etkilemez. Hesabınızı silmek (§7.3) her zaman mümkün kalır ancak belirli bir onamı geri çekmenin mekanizması değildir.
