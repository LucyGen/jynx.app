---
title: "Kebijakan Privasi"
description: "Pelajari bagaimana Jynx melindungi privasi Anda dan menangani data Anda. Kebijakan privasi transparan kami menguraikan praktik kami dan hak Anda."
canonical: "https://jynx.app/id/privacy.html"
locale: "id"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Kebijakan Privasi

Terakhir diperbarui: 17 November 2026

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

## 1. Pendahuluan

Jynx ("kami", "kami", "aplikasi") adalah platform gaming sosial yang memungkinkan pemain untuk terhubung, membentuk tim, dan bermain bersama.

### Informasi Hukum:

- **Entitas Hukum:** Jynx Group (Société par Actions Simplifiée, SIREN 991443896, terdaftar di Nantes, Prancis)
- **Data Protection Officer / Encarregado:** dpo@jynx.app
- **Yurisdiksi UE / EEA:** Prancis, Uni Eropa — Kebijakan Privasi ini mematuhi Regulasi (UE) 2016/679 (GDPR) dan Direktif 2002/58/EC (ePrivacy), sebagaimana telah diterapkan di Prancis.
- **Yurisdiksi Brasil:** Kebijakan Privasi ini juga mematuhi Undang-Undang Brasil nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), yang berlaku atas pemrosesan data pribadi oleh Jynx milik subjek data yang berlokasi di Brasil berdasarkan Pasal 3 LGPD, terlepas dari Jynx tidak memiliki kantor di Brasil.
- **Publikasi (LCEN):** Directeur de la publication: Antoine Haie. Situs web ini (jynx.app) di-host oleh GitHub Pages dan disajikan melalui jaringan content-delivery Cloudflare.

Untuk keperluan LGPD, Jynx Group adalah pengendali (controlador) atas data pribadi Anda. Data Protection Officer kami bertindak sebagai encarregado (DPO) dan dapat dihubungi di dpo@jynx.app untuk setiap permintaan terkait LGPD. Meskipun Jynx memenuhi syarat sebagai pequeno agente de tratamento de dados pessoais (pelaku pemrosesan skala kecil) berdasarkan Resolusi ANPD CD/ANPD nº 2/2022, yang mengecualikan Jynx dari kewajiban menunjuk encarregado, Jynx secara sukarela tetap memelihara kanal komunikasi terpublikasi ini.

Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, berbagi, dan melindungi data pribadi Anda saat Anda menggunakan aplikasi kami.

## 2. Usia Minimum dan Verifikasi

Aplikasi kami diperuntukkan bagi pengguna berusia 18 tahun ke atas.

Saat membuat akun Anda, kami meminta Anda untuk memberikan tanggal lahir. Jika Anda berusia di bawah 18 tahun, Anda tidak akan dapat membuat akun atau menggunakan layanan kami.

Pemasaran kepada anak di bawah umur. Jynx dibatasi untuk pengguna berusia 18 tahun ke atas dan menerapkan gerbang usia otomatis. Jika kemudian kami mengidentifikasi bahwa seorang pengguna berusia di bawah 18 tahun (LGPD Pasal 14; GDPR Pasal 8), kami akan segera menghentikan akun tersebut, mengeluarkan pengguna dari semua komunikasi pemasaran, re-engagement, dan survei, serta menghapus data pemasaran terkait. Kami tidak pernah dengan sengaja mengumpulkan persetujuan pemasaran dari anak di bawah umur.

## 3. Data yang Dikumpulkan

### 3.1. Data Registrasi dan Profil

Kami mengumpulkan informasi berikut saat membuat dan mengelola akun Anda:

#### Informasi Autentikasi:

- Email (untuk akun email/password)
- Username/nickname
- Foto profil (opsional)
- Pengidentifikasi login sosial (Google, Apple) jika Anda menggunakan metode tersebut
- Pengidentifikasi Discord (Discord user ID Anda) jika Anda memilih untuk menghubungkan akun Discord Anda untuk integrasi Discord — koneksi ini menggunakan OAuth Discord yang hanya mengambil identitas dan bukan metode masuk; Anda dapat memutusnya kapan saja
- Penjelajahan sebagai tamu (bila tersedia): Anda dapat menjelajahi bagian publik Jynx tanpa membuat akun; dalam mode tamu kami hanya memproses pengidentifikasi tamu yang disimpan secara lokal dan data teknis di §3.3 yang diperlukan untuk melayani aplikasi — tidak ada profil yang dibuat dan tidak ada data akun yang disimpan. Untuk match, chat, atau bergabung dengan komunitas, Anda harus membuat akun

#### Informasi Profil:

- Tanggal lahir (untuk verifikasi usia)
- Negara dan zona waktu
- Bahasa yang digunakan
- Biografi (opsional)
- Preferensi gaming dan ketersediaan
- Handle unik (dibuat otomatis untuk penemuan teman pribadi)

### 3.2. Data Gaming

Untuk membantu Anda menemukan rekan tim yang kompatibel, kami mengumpulkan:

#### Profil Game:

- Game yang Anda mainkan
- Level, rank, dan statistik game
- Champion/karakter favorit
- Gaya bermain

#### Integrasi Riot Games API:

Kami mengambil dari Riot Games API (dengan persetujuan Anda):

- Nama summoner dan Riot ID
- Rank dan riwayat pertandingan (League of Legends, Valorant, dll.)
- Statistik champion
- Riwayat pertandingan terkini

**Alasan Pengumpulan:** Menampilkan profil pemain Anda dan meningkatkan matching dengan pemain lain.

### 3.3. Data Penggunaan dan Teknis

Kami secara otomatis mengumpulkan data teknis tertentu:

#### Analitik dan Performa:

- **Firebase Performance Monitoring:** Waktu startup aplikasi, kelancaran antarmuka
- **Sentry:** Laporan error dan performa (dengan anonimisasi data pribadi)
- **Firebase Crashlytics:** Laporan crash

#### Informasi Perangkat:

- Jenis dan model perangkat
- Versi sistem operasi
- Versi aplikasi
- Pengidentifikasi perangkat dan sinyal integritas perangkat (lihat §5.7)

#### Perilaku Pengguna:

- Layar yang dikunjungi dan fitur yang digunakan
- Waktu yang dihabiskan di aplikasi
- Interaksi antarmuka

Anda dapat menonaktifkan pengumpulan data analitik di Pengaturan > Privasi > "Aktifkan Analitik".

Pengukuran iklan dengan Meta terpisah dari analitik dan memiliki sakelar sendiri: lihat §5.9.

### 3.4. Data Komunikasi

- **Pesan:** Pesan dalam chat komunitas, pesan pribadi antar pengguna, riwayat percakapan
- **Notifikasi:** Token FCM (Firebase Cloud Messaging) untuk notifikasi push

### 3.5. Konten yang Dibuat Pengguna

- Foto yang diunggah (gambar profil, foto tambahan) dan gambar yang dibagikan di pesan langsung
- Laporan keamanan dan moderasi
- Preferensi kosmetik (avatar, badge)

### 3.6. Data Audio Ruang Suara

Jynx menyediakan ruang suara real-time yang memungkinkan Anda berbicara dengan peserta lain saat bermain. Audio ruang suara baru ditangkap dari mikrofon Anda setelah Anda memberikan izin mikrofon sistem operasi dan secara eksplisit bergabung ke sebuah ruang; tidak ada audio yang ditangkap sebelum kedua langkah tersebut.

Jynx tidak mengaktifkan fitur perekaman, transkripsi, Agent Insights, atau Egress milik LiveKit. Audio ruang suara dirutekan secara real-time oleh SFU (Selective Forwarding Unit) LiveKit dan tidak direkam, disimpan, atau dipertahankan oleh Jynx maupun LiveKit.

Saat Anda berbicara di sebuah ruang suara, audio Anda ditransmisikan secara real-time kepada peserta lain di ruang tersebut, serupa dengan cara kerja suara di aplikasi obrolan suara lainnya.

Audio ruang suara diproses dengan persetujuan Anda: Anda memberikan izin mikrofon dan secara eksplisit bergabung ke ruang sebelum audio apa pun ditangkap. Anda dapat menarik persetujuan kapan saja dengan meninggalkan ruang atau mencabut izin mikrofon di pengaturan perangkat Anda.

## 4. Layanan Pihak Ketiga dan Berbagi Data

### 4.1. Layanan Firebase (Google)

Kami menggunakan layanan Firebase berikut, semua mematuhi GDPR:

- **Firebase Authentication:** Manajemen akun pengguna yang aman
- **Cloud Firestore:** Penyimpanan profil dan data game Anda
- **Firebase Storage:** Hosting gambar profil Anda
- **Cloud Functions:** Eksekusi logika backend yang aman
- **Firebase Cloud Messaging:** Notifikasi push
- **Firebase App Check:** Perlindungan terhadap penyalahgunaan dan bot
- **Firebase Performance Monitoring:** Pemantauan performa aplikasi
- **Firebase Crashlytics:** Laporan crash

**Kebijakan Privasi Firebase:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Pemantauan Error)

Kami menggunakan Sentry untuk pelacakan error dan performa. Data yang dikumpulkan termasuk:

- Jejak error
- Konteks teknis (OS, versi aplikasi)

**Kebijakan Privasi Sentry:** https://sentry.io/privacy/

### 4.3. Riot Games API

Saat Anda menghubungkan akun Riot Games, kami mengambil statistik game Anda melalui API resmi Riot Games. Data ini hanya digunakan untuk menampilkan profil Anda dan meningkatkan matching.

**Kebijakan Privasi Riot Games:** https://www.riotgames.com/en/privacy-notice

### 4.4. Penyedia Layanan Email (Komunikasi Pemasaran & Survei)

Untuk mengirimkan email pemasaran, re-engagement, dan survei uninstall/churn yang dijelaskan di §5.6, Jynx menggunakan penyedia layanan email pihak ketiga (ESP) yang bertindak sebagai pemroses (GDPR Pasal 28; LGPD Pasal 39 — operador). ESP memproses alamat email Anda dan data pengiriman minimal (misalnya, status terkirim/gagal kirim) semata-mata berdasarkan instruksi terdokumentasi dari Jynx, di bawah Perjanjian Pemrosesan Data yang telah ditandatangani.

- **Identitas, peran, dan lokasi ESP:** Brevo (Brevo SAS, Paris, Prancis) — Penyedia Layanan Email dan pemroses data kami berdasarkan Perjanjian Pemrosesan Data yang telah ditandatangani. Kebijakan Privasi Brevo: https://www.brevo.com/legal/privacypolicy/
- **Sub-pemroses:** Daftar sub-pemroses Brevo saat ini dipublikasikan dalam Perjanjian Pemrosesan Datanya (Ketentuan Penggunaan): https://www.brevo.com/legal/termsofuse/
- **Dasar transfer internasional:** Lihat §9. Brevo berkantor pusat di Prancis (UE). Transfer ke Brevo karenanya memperoleh manfaat dari rezim perlindungan UE berdasarkan GDPR dan, bagi pengguna Brasil, keputusan kecukupan ANPD untuk UE (Resolusi nº 32/2026) — tidak diperlukan SCC atau mekanisme tambahan.

Kami tidak menjual data pribadi Anda. Tidak ada piksel pelacak atau analitik tersembunyi yang disematkan dalam email pemasaran tanpa dasar hukum terpisah yang diungkapkan di §5.6.

### 4.5. LiveKit Cloud (Suara Real-Time)

Jynx menggunakan LiveKit Cloud sebagai pemroses (GDPR Pasal 28; LGPD Pasal 39 — operador) berdasarkan Perjanjian Pemrosesan Data yang telah ditandatangani, untuk mengoperasikan infrastruktur media real-time yang merutekan audio ruang suara antar-peserta. LiveKit menjalankan SFU (Selective Forwarding Unit) yang meneruskan aliran audio setiap peserta kepada peserta lainnya secara real-time.

Jynx tidak mengaktifkan fitur perekaman, transkripsi, Agent Insights, atau Egress milik LiveKit. Audio ruang suara dirutekan secara real-time oleh SFU (Selective Forwarding Unit) LiveKit dan tidak direkam, disimpan, atau dipertahankan oleh Jynx maupun LiveKit.

LiveKit memang menyimpan metadata sesi operasional — seperti identitas peserta, pengidentifikasi ruang, waktu koneksi, dan metrik kualitas — untuk tujuan penagihan, pencegahan penyalahgunaan, dan operasional sesuai Addendum Pemrosesan Datanya. Metadata ini tidak digunakan untuk mengidentifikasi Anda di luar platform atau untuk periklanan.

### 4.6. App Store / Google Play (Pembelian Dalam Aplikasi dan Langganan)

Langganan Jynx+ dan Founder Packs dijual dalam aplikasi melalui App Store milik Apple dan Google Play, yang bertindak sebagai merchant of record untuk pembelian ini (lihat Ketentuan Layanan, Bagian 8). Data instrumen pembayaran (misalnya, detail kartu) dikumpulkan dan diproses semata-mata oleh Apple/Google di bawah kebijakan privasi masing-masing; Jynx tidak mengumpulkan, menerima, atau menyimpan data instrumen pembayaran apa pun.

Melalui penyedia penagihan kami RevenueCat (seorang pemroses yang bertindak di bawah Perjanjian Pemrosesan Data yang telah ditandatangani; GDPR Pasal 28; LGPD Pasal 39 — operador), Jynx hanya menerima informasi yang diperlukan untuk menyetorkan apa yang Anda beli: status langganan dan entitlement Anda (misalnya, apakah Jynx+ aktif dan tanggal perpanjangannya), tingkat Founder Pack yang dibeli, dan pengidentifikasi transaksi. Data ini disimpan selama yang diperlukan untuk menyediakan Layanan dan memenuhi kewajiban akuntansi dan pencatatan (§6), dan hanya digunakan untuk memberikan serta memelihara entitlement Anda dan mencegah penipuan. RevenueCat berkedudukan di Amerika Serikat; transfer data pribadi ke RevenueCat bersandar pada EU-US Data Privacy Framework (untuk entitas RevenueCat yang sertifikasi mandiri di bawah DPF) atau pada klausul kontraktual standar bila DPF tidak berlaku. Mekanisme transfer yang berlaku bagi data pengguna Brasil dikonfirmasi dalam Catatan Aktivitas Pemrosesan kami (lihat §9).

- Kebijakan Privasi Apple: https://www.apple.com/legal/privacy/
- Kebijakan Privasi Google: https://policies.google.com/privacy
- Kebijakan Privasi RevenueCat: https://www.revenuecat.com/privacy

### 4.7. Penyedia Teknologi Keselamatan Anak Khusus

Untuk membantu mendeteksi materi pelecehan seksual anak yang telah diketahui (lihat §5.8), Jynx bekerja sama dengan penyedia teknologi keselamatan anak khusus yang bertindak sebagai pemroses (GDPR Pasal 28; LGPD Pasal 39 — operador). Penyedia ini hanya menerima hash tak terbalikkan yang diturunkan dari gambar — tidak pernah gambar itu sendiri — dan melakukan pencocokan hash di kawasan UE, semata-mata untuk deteksi keselamatan anak atas instruksi terdokumentasi dari Jynx. Penurunan hash dari gambar terjadi di dalam infrastruktur Google Cloud milik Jynx sendiri (lihat §9).

### 4.8. Penyedia Moderasi Gambar Cloud (AWS)

Untuk menjaga platform tetap aman, gambar profil dan foto galeri disaring oleh layanan klasifikasi gambar otomatis — Amazon Rekognition, yang disediakan oleh Amazon Web Services (AWS), bertindak sebagai pemroses (GDPR Pasal 28; LGPD Pasal 39 — operador). Untuk tujuan ini, gambar ditransmisikan ke AWS dan dianalisis dengan machine learning untuk konten yang tidak pantas (misalnya ketelanjangan atau materi eksplisit); hasilnya adalah label dan skor keyakinan yang dihasilkan mesin dan ditangani dalam proses moderasi kami (lihat Kebijakan Keselamatan Anak). Pemrosesan ini hanya digunakan untuk moderasi konten dan keselamatan — tidak pernah untuk pembuatan profil, periklanan, atau tujuan lain apa pun. AWS memproses data ini di kawasan AWS yang dikonfigurasi untuk layanan tersebut (saat ini São Paulo, Brasil); perlindungan transfer di §9 berlaku. Seperti bagian lain dari Layanan, gambar ditangani oleh infrastruktur Google Cloud milik Jynx sendiri sebelum diteruskan ke AWS (lihat §9).

### 4.9. Atribusi Iklan (Meta, Apple ATT, Google Play Install Referrer)

Untuk mengukur apakah instalasi aplikasi kami berasal dari pemasaran, kami menggunakan teknologi periklanan dan atribusi, dengan tunduk pada persetujuan Anda bila diwajibkan: Meta (Facebook) App Events SDK (Meta Platforms Ireland) dan Google Play Install Referrer API. Di perangkat Apple, Meta SDK hanya diinisialisasi setelah Anda memberikan izin App Tracking Transparency (ATT); tanpa izin tersebut, tidak ada pengidentifikasi iklan (IDFA) yang dikumpulkan dan SDK tidak diinisialisasi. Di Android, Google Play Install Referrer API memberi tahu kami apakah instalasi Anda berasal dari listing toko atau tautan kampanye, dan pengidentifikasi iklan (GAID) digunakan sesuai pengaturan ID iklan perangkat Anda. Peristiwa yang dikirim ke Meta dibatasi pada aktivasi aplikasi dan metadata peristiwa aplikasi (termasuk, saat Anda masuk, pengidentifikasi pengguna aplikasi Anda, yang dihapus dari SDK saat Anda keluar), diproses atas instruksi Jynx untuk atribusi dan pengukuran kampanye.

Meta Platforms Ireland memproses data ini sebagai pemroses kami untuk tujuan atribusi di atas; Meta Platforms, Inc. dapat pula bertindak sebagai pengendali independen untuk tujuan sahnya sendiri di bawah ketentuannya sendiri (Meta's Data Processing Terms dan kebijakan privasinya di https://www.facebook.com/privacy/policy). Transfer ke Amerika Serikat bersandar pada EU-US Data Privacy Framework untuk entitas Meta yang sertifikasi mandiri atau pada klausul kontraktual standar (§9). Anda dapat menolak atau mencabut izin ATT atau mengatur ulang ID iklan Anda kapan saja di pengaturan perangkat; penolakan tidak memengaruhi penggunaan Jynx Anda.

**Pengukuran iklan.** Melampaui atribusi instalasi, kami juga mengukur konversi: peristiwa yang dibagikan dengan Meta mencakup pendaftaran (sign-up), onboarding selesai, dan pembelian — beserta jumlah dan mata uang pembelian. Bila Anda telah menyetujui, alamat email atau nomor telepon yang di-hash (diacak tak terbalikkan) juga dapat dibagikan untuk meningkatkan kualitas match; hal ini tidak pernah terjadi bagi pengguna yang diukur atas dasar kepentingan sah kami (di bawah). Peristiwa pendaftaran (sign-up) juga dapat mencakup gender yang Anda nyatakan sendiri. Tidak ada hal lain yang dibagikan — tidak ada pesan, bidang profil, game, komunitas, kontak, lokasi, atau foto — dan data Anda tidak pernah dijual. Dasar hukum, pilihan Anda, dan disclosure Apple SKAdNetwork dijelaskan di §5.9.

Penyimpanan: Jynx tidak menyimpan salinan terpisah atas peristiwa yang dibagikan dengan Meta. Peristiwa yang sudah dibagikan tetap tunduk pada proses penyimpanan dan penghapusan Meta Business Tools, yang berlaku sejak saat pembagian.

### 4.10. Program Kreator (Mitra) — KYC dan Pembayaran

Jika Anda bergabung dengan program Kreator (mitra) Jynx, kami memproses informasi identitas, pajak, dan pembayaran yang diwajibkan program: CPF atau CNPJ Anda (divalidasi dalam aplikasi), jalur pembayaran pilihan Anda — PayPal (diidentifikasi lewat email), transfer bank Wise (Brasil), atau kunci Pix — dan catatan performa kampanye Anda (pendaftaran teratribusi; lihat §10 referrals). Catatan pembayaran disimpan dalam bentuk pseudonim (§10). Program ini diatur oleh Creator Referral Terms dan Self-Billing Mandate versi yang Anda terima saat pendaftaran (lihat Ketentuan Layanan §15).

Pembayaran dieksekusi melalui lembaga pembayaran yang mengoperasikan jalur pilihan Anda: PayPal atau Wise menerima instruksi transfer dan data yang mereka perlukan untuk memverifikasi identitas Anda, mencegah penipuan, dan memenuhi kewajiban regulasi mereka, bertindak atas ketentuan mereka sendiri sebagai lembaga pembayaran independen (kebijakan privasi mereka dipublikasikan di situs web mereka); pembayaran Pix adalah transfer yang diinisiasi Jynx Group ke kunci Pix yang Anda berikan. Perlindungan transfer internasional yang berlaku dijelaskan di §9.

### 4.11. Fitur AI

**Pembuatan avatar.** Kuis avatar dapat menghasilkan usulan avatar bergaya untuk profil Anda. Pembuatan saat ini berjalan di Cloudflare Workers AI (Cloudflare, Inc., pemroses) atas instruksi terdokumentasi dari Jynx; jika mesin yang mendasari berubah, bagian ini akan diperbarui sebelum atau bersamaan dengan perubahan tersebut. Masukan yang digunakan adalah jawaban kuis dan preferensi gaya bermain Anda — tidak pernah foto Anda — bersama pengidentifikasi pengguna Anda; usulan dikembalikan ke aplikasi sebagai gambar PNG atau WebP dan disimpan hingga 30 hari agar Anda dapat mengambilnya, setelah itu dihapus. Gambar yang dihasilkan bersifat sintetis — bukan foto diri Anda — dan tunduk pada moderasi yang sama seperti gambar lain (§4.8).

**Pesan pendamping (Quimera).** Beberapa pesan aplikasi pendamping disusun atau diperkaya oleh sistem AI generatif (Google Gemini, pemroses). Bila sebuah pesan dihasilkan AI, pesan tersebut diberi label demikian; Anda selalu diberi tahu saat berinteraksi dengan elemen yang dihasilkan AI, sesuai EU AI Act Pasal 50(1).

## 5. Penggunaan Data

Kami menggunakan data Anda untuk:

### 1. Menyediakan Layanan Kami:

- Membuat dan mengelola akun Anda
- Memungkinkan Anda terhubung dengan pemain lain
- Memfasilitasi pembuatan tim dan organisasi sesi gaming

### 2. Personalisasi:

- Merekomendasikan rekan tim yang kompatibel (matching berbasis game, rank, gaya)
- Menampilkan konten yang relevan

### 3. Komunikasi (operasional / transaksional):

- Mengirimkan notifikasi layanan penting (match ditemukan, pesan diterima, peringatan keamanan akun, dan pemberitahuan perubahan kebijakan berdasarkan §11)

Email pemasaran, re-engagement, dan survei uninstall/churn dijelaskan secara terpisah di §5.6 Komunikasi Pemasaran dan tidak termasuk dalam kategori transaksional ini.

### 4. Peningkatan Layanan:

- Menganalisis penggunaan untuk meningkatkan fitur
- Mengidentifikasi dan memperbaiki bug
- Mengoptimalkan performa
- Menghasilkan usulan avatar dan draf pesan pendamping menggunakan pemroses AI (§4.11)

### 5. Keamanan dan Kepatuhan:

- Mencegah penipuan dan penyalahgunaan
- Menegakkan ketentuan penggunaan kami
- Mematuhi kewajiban hukum

Kami dapat mempublikasikan statistik anonim dan agregat yang diturunkan dari penggunaan aplikasi (misalnya, bagaimana pemain membentuk duo). Statistik ini tidak pernah mengidentifikasi pengguna individual.

### 5.6. Komunikasi Pemasaran

Selain notifikasi operasional yang dijelaskan di §5.3, kami dapat mengirimkan komunikasi pemasaran dan re-engagement kepada Anda melalui email, meliputi: pembaruan produk dan pengumuman fitur tentang aplikasi Jynx; newsletter; pesan re-engagement yang mengundang Anda kembali ke aplikasi; dan survei umpan balik singkat uninstall atau churn (misalnya, "Mengapa Anda berhenti menggunakan Jynx?"). Komunikasi ini berbeda dari notifikasi transaksional/layanan.

**Dasar hukum — pengguna Uni Eropa / EEA (GDPR + ePrivacy).** Email pemasaran dan re-engagement kepada pengguna UE/EEA dikirim berdasarkan persetujuan opt-in eksplisit Anda terlebih dahulu (ePrivacy Directive Pasal 13(1), diterapkan di Prancis melalui Pasal L. 34-5 Code des postes et des communications électroniques; GDPR Pasal 6(1)(a) dan Pasal 7). Setelah diluncurkannya langganan berbayar (Jynx+) dan pembelian sekali bayar dalam aplikasi (Founder Packs), Layanan kini menjadi layanan berbayar, dan pembelian tersebut merupakan "penjualan" dalam arti putusan CJEU C-654/23 (13 Nov 2025). Pengecualian "soft opt-in" dari ePrivacy Pasal 13(2) karenanya pada prinsipnya tersedia bagi kami untuk produk dan layanan serupa bagi pelanggan yang sudah ada. Namun, sebagai sikap konservatif, kami tetap bersandar pada persetujuan opt-in eksplisit Anda terlebih dahulu; kami hanya akan mulai bersandar pada dasar soft-opt-in setelah penilaian ulang terdokumentasi yang dicatat dalam Catatan Aktivitas Pemrosesan kami dan pemberitahuan yang diperbarui kepada Anda.

**Dasar hukum — pengguna Brasil (LGPD).** Bagi pengguna Brasil, komunikasi pemasaran dan re-engagement bersandar pada dua dasar hukum alternatif:

1. **Persetujuan (LGPD Pasal 7, I dan Pasal 8)** — diambil sebagai opt-in terpisah, tidak dicentang, dan khusus untuk tujuan tertentu saat pendaftaran atau dalam aplikasi, dicatat dengan tanggal, versi formulir, dan bahasa; Anda dapat menariknya kapan saja, tanpa biaya, tanpa kehilangan akses ke Layanan (Pasal 8 §5). Persetujuan adalah dasar yang digunakan untuk setiap komunikasi kepada prospek, cold outreach, atau penawaran cross-sell/mitra di luar aplikasi inti Jynx.
2. **Kepentingan sah (LGPD Pasal 7, IX, dielaborasi oleh Pasal 10)** — hanya digunakan bagi pengguna yang masih ada atau baru saja berhenti yang menerima pesan re-engagement, pembaruan produk tentang aplikasi Jynx yang sama, atau satu survei umpan balik churn/uninstall yang singkat. Sebelum bersandar pada dasar ini, Jynx melakukan dan mendokumentasikan Legitimate Interests Assessment (LIA) mengikuti uji tiga fase dari ANPD Legitimate Interest Guide (2 Feb 2024): (i) tujuan, (ii) kebutuhan, dan (iii) penyeimbangan dan perlindungan. LIA mencatat hubungan sebelumnya, ekspektasi wajar pengguna, tujuan, cara paling tidak mengganggu yang dipilih, dan kanal opt-out. Kepentingan sah tidak digunakan untuk email dingin/tanpa diminta, cross-sell yang tidak terkait, daftar yang dibeli, atau pesan berkelanjutan kepada pengguna yang telah pergi setelah hubungan jelas berakhir.

**Hak untuk menolak / opt-out.** Pengguna Brasil dapat kapan saja menolak pemrosesan ini dan melakukan opt-out melalui mekanisme di §7.5 dan §7.6 (unsubscribe satu klik di setiap email, atau sakelar preferensi komunikasi dalam aplikasi), tanpa biaya dan tanpa menghentikan akun. Kami menghormati permintaan opt-out secara waktu nyata. Kode Pertahanan Konsumen Brasil (CDC, Undang-Undang 8.078/90, khususnya Pasal 39 III) melarang pesan komersial yang tidak diminta atau bersifat kasar; karena itu kami sangat menghormati opt-out dan menerapkan batas frekuensi, sebab pengiriman terus-menerus atau yang mengabaikan opt-out dapat diperlakukan sebagai praktik yang kasar.

**Survei uninstall / churn.** Sejauh mungkin secara operasional, kami mengajukan pertanyaan uninstall/churn dalam aplikasi pada saat uninstall (tanpa perlu menyimpan email). Bila survei email dikirim, survei tersebut tidak memuat konten promosi atau re-engagement; kami mengirim maksimal satu (1) survei per pengguna dalam sekitar 60 hari setelah penghapusan akun atau uninstall; alamat email kemudian dihapus atau dianonimkan sesuai §6; dan pengguna yang telah mengajukan permintaan penghapusan / hak untuk dilupakan (§7.3) tidak pernah dihubungi kembali dan dimasukkan ke daftar supresi permanen (lihat §6 dan Ketentuan Layanan §7.2).

**Pelacakan email.** Email pemasaran tidak menyematkan piksel pelacak atau analitik tersembunyi yang memproses data pribadi tanpa dasar hukum terpisah. Bila pelacakan buka/klik diperkenalkan, hal itu akan diungkapkan di sini dan didasarkan pada persetujuan (LGPD Pasal 8; ePrivacy Pasal 5(3)), konsisten dengan panduan ANPD tentang teknologi pelacakan (18 Okt 2022).

**Frekuensi.** Email pemasaran tunduk pada batas frekuensi internal; Anda dapat mengurangi atau mematikannya kapan saja melalui sakelar preferensi komunikasi dalam aplikasi atau dengan mengeklik unsubscribe di pesan mana pun.

### 5.7. Keamanan Komunitas dan Upaya Menghindari Larangan

Untuk membantu melindungi komunitas kami dari penyalahgunaan, kami menggunakan pengidentifikasi perangkat dan sinyal integritas perangkat untuk mendeteksi dan mencegah upaya menghindari penangguhan atau larangan. Jika kami mengaitkan suatu perangkat dengan akun yang dilarang, perangkat tersebut dapat dicegah membuat akun baru atau masuk. Jika Anda merasa hal ini terjadi karena kesalahan, Anda dapat mengajukan banding dengan menghubungi support@jynx.app.

Sinyal integritas perangkat dikumpulkan dan dievaluasi dengan bantuan Talsec freeRASP, sebuah pustaka anti-pemalsuan dan integritas perangkat yang tersemat dalam aplikasi. freeRASP beroperasi di perangkat Anda: ia mendeteksi secara lokal ancaman seperti perangkat rooted, runtime hooking, dan bootloader yang tidak terkunci, serta melaporkan temuannya kepada kami melalui penyedia pemantauan error milik kami sendiri (Sentry, §4.2) untuk pencegahan penyalahgunaan; ia tidak mengirim data Anda ke layanan mana pun yang dioperasikan Talsec.

### 5.8. Analisis Gambar Keselamatan Anak

Untuk membantu melindungi anak-anak dan memenuhi kewajiban pelaporan hukum kami, Jynx menggunakan sistem otomatis untuk menganalisis gambar yang dibagikan di pesan langsung dengan membandingkan hash yang diturunkan dari gambar tersebut terhadap basis data materi pelecehan seksual anak yang telah diketahui. Untuk analisis ini, gambar itu sendiri tidak ditransmisikan ke pihak ketiga — hanya hash tak terbalikkannya (lihat §4.7). Gambar profil disaring secara terpisah, oleh pemrosesan moderasi gambar yang dijelaskan di §4.8. Analisis ini ada semata-mata untuk deteksi keselamatan anak dan kewajiban pelaporan hukum kami; tidak digunakan untuk pembuatan profil, periklanan, atau tujuan lain apa pun. Kecocokan ditangani seperti dijelaskan dalam [Kebijakan Keselamatan Anak](/child-safety.html) kami.

### 5.9. Pengukuran Iklan

Jika Anda menerima, kami juga membagikan peristiwa terbatas (seperti pendaftaran dan pembelian, beserta jumlahnya) dengan Meta untuk mengukur dan meningkatkan periklanan kami. Data Anda tidak pernah dijual, dan Anda dapat mengubah pilihan Anda kapan saja di pengaturan Privasi. Apa yang dibagikan, dan kepada siapa, tercantum di §4.9.

Cara pengaktifannya. Di iPhone dan iPad, pengukuran iklan menggunakan data Anda hanya dengan persetujuan Anda (GDPR Pasal 6(1)(a); LGPD Pasal 7, I), yang diberikan pada lembar privasi peluncuran pertama atau kemudian di Pengaturan > Privasi > Pengukuran iklan, dan tambahan pula memerlukan otorisasi App Tracking Transparency milik Apple (lihat §4.9). Di Android, pengukuran iklan didasarkan pada persetujuan yang sama tersebut atau, bagi pengguna yang ditampilkan sakelar pengukuran iklan aktif secara bawaan pada lembar peluncuran pertama, atas kepentingan sah kami dalam mengukur periklanan kami (LGPD Pasal 7, IX dan Pasal 10), dinilai dalam Legitimate Interests Assessment terdokumentasi. Dalam hal itu ia aktif secara bawaan, dan Anda dapat mematikannya di lembar yang sama atau kapan saja di Pengaturan > Privasi > Pengukuran iklan — menolak semudah membiarkannya aktif, tanpa biaya, dan tidak pernah mengharuskan Anda menghapus akun (LGPD Pasal 18, §2).

Perlindungan. Pengguna yang kami ketahui berusia di bawah 18 tahun, dan profil yang usianya tidak terkonfirmasi, tidak pernah diukur atas dasar kepentingan sah. Menarik persetujuan atau menolak menghentikan pembagian lebih lanjut sejak peluncuran aplikasi Anda berikutnya; peristiwa yang dibagikan secara sah sebelum itu tetap berada di Meta di bawah ketentuan penyimpanan §4.9, dan penarikan tidak memengaruhi keabsahan apa pun yang dilakukan sebelumnya (GDPR Pasal 7(3); LGPD Pasal 8 §5).

**Apple SKAdNetwork (iOS).** Terpisah dari hal di atas, dan untuk setiap pengguna iPhone dan iPad tanpa memandang pilihan atau pengaturan apa pun — termasuk saat pelacakan atau pengukuran iklan ditolak — SKAdNetwork milik Apple melaporkan informasi konversi anonim dan agregat ke jaringan iklan yang menayangkan iklan kepada Anda (misalnya, bahwa sebuah pendaftaran atau pembelian dalam rentang nilai tertentu terjadi). Tidak ada pengidentifikasi dari Jynx dan tidak ada data pribadi yang keluar dari perangkat Anda untuk ini: ini adalah mekanisme atribusi standar Apple, dan kami tidak dapat mengidentifikasi Anda darinya.

### 5.10. Email dan Komunikasi

**Email notifikasi aktivitas akun (layanan).** Saat Anda melewatkan aktivitas akun di aplikasi (pesan belum dibaca, match atau like baru), Jynx dapat mengirim email tentang hal itu. Ini adalah notifikasi layanan yang didasarkan pada kepentingan sah kami dalam mengoperasikan platform sosial (menjaga Anda tetap informasi atas interaksi Anda yang sedang berlangsung) dan tidak memuat konten promosi. Anda dapat mematikan setiap jenis notifikasi (pesan, match, like) kapan saja di Pengaturan > Privasi > Komunikasi, atau melalui tautan "Kelola notifikasi ini" di setiap email. Anda juga dapat menolak pemrosesan ini kapan saja (GDPR Pasal 21) di privacy@jynx.app.

**Email re-engagement dan pemasaran (winback).** Email yang bertujuan mengembalikan Anda ke Jynx setelah periode tidak aktif, serta komunikasi berita dan penawaran kami, merupakan prospeksi komersial. Email tersebut hanya dikirim dengan persetujuan Anda terlebih dahulu yang spesifik, diberikan secara bebas, dan dapat dicabut, yang diambil melalui kotak centang opsional terpisah — tidak pernah sebagai syarat menerima Ketentuan kami. Anda dapat menariknya kapan saja di Pengaturan > Privasi > Komunikasi atau melalui tautan unsubscribe di setiap email.

**Penampilan username dan gambar profil Anda dalam email notifikasi.** Jika Anda telah berinteraksi dengan anggota lain (like, match, pesan), username dan gambar profil Anda dapat muncul dalam email notifikasi aktivitas akun yang ditujukan kepada mereka saat mereka tidak aktif. Elemen-elemen ini dihasilkan pada saat pengiriman dan tidak disimpan dalam log email kami (hanya pengidentifikasi dan hitungan).

### 5.11. Lokasi dan Jarak Match

**Yang kami proses.** Jika Anda memilih untuk membagikan lokasi Anda, Jynx menggunakannya hanya untuk satu tujuan: menampilkan perkiraan jarak antara Anda dan pemain lain ("~12 km") pada antrean match dan, jika Anda mengaktifkan pengurutan kedekatan, mengurutkan antrean tersebut berdasarkan jarak. Kami hanya memproses lokasi perkiraan: izin yang kami minta adalah lokasi kasar / akurasi-rendah milik sistem operasi, dan sebelum apa pun disimpan, koordinat Anda dipetakan di server kami ke grid berukuran sekitar 0,02° (sekitar 2,2 km); sel lokasi yang dihasilkan berukuran sekitar 11 km. Koordinat GPS mentah tidak pernah disimpan.

**Opsional dan berbasis persetujuan.** Ini adalah fitur opsional: tidak ada yang dikumpulkan kecuali Anda memberikan izin lokasi sistem operasi DAN sakelar lokasi dalam aplikasi aktif. Lokasi tidak pernah diproses di latar belakang — hanya digunakan saat Anda menggunakan aplikasi. Lokasi Anda tidak pernah ditampilkan kepada pengguna lain sebagai posisi pada peta, tidak pernah digunakan untuk periklanan, dan tidak pernah dibagikan dengan platform iklan (lihat §4.9: tidak ada data lokasi yang termasuk dalam apa pun yang dibagikan untuk atribusi atau pengukuran iklan). Peristiwa analitik kami tidak memuat koordinat, nama kota, atau pengidentifikasi sel lokasi — hanya sinyal adopsi dan pilihan pengurutan yang anonim. Permintaan izin sistem operasi adalah cara persetujuan Anda diambil, dan sakelar dalam aplikasi adalah cara Anda menariknya (§7.6).

**Berapa lama kami menyimpannya.** Catatan lokasi yang kami pelihara untuk akun Anda dihapus otomatis setelah 45 hari tanpa pembaruan, dan disegarkan setiap kali Anda menggunakan fitur ini selama pembagian aktif. Jarak perkiraan yang ditampilkan pada kartu profil Anda terikat aktivitas: ia bertahan hanya selama kartu profil Anda bertahan, dan diperlakukan sebagai tidak ada setelah 45 hari tanpa pembaruan.

**Kendali Anda.** Anda dapat berhenti membagikan kapan saja: mematikan sakelar lokasi dalam aplikasi segera menghapus koordinat yang tersimpan (catatan tetap ada tetapi kosong dari koordinat), dan mencabut izin lokasi di pengaturan perangkat Anda menghentikan pengumpulan di sumbernya. Menghapus akun Anda (§7.3) juga menghapus data lokasi Anda.

## 6. Penyimpanan Data

### 6.1. Periode Penyimpanan

- **Data Profil:** Disimpan selama akun Anda aktif
- **Log dan Analitik:** Firebase Analytics: 14 bulan (kebijakan Firebase)
- **Alamat email pemasaran (berbasis persetujuan):** Disimpan selama Anda belum melakukan opt-out atau menghapus akun, ditambah catatan ter-hash pada daftar supresi (lihat di bawah) untuk memastikan kami tidak menghubungi Anda kembali
- **Alamat email survei uninstall / churn:** Disimpan maksimal 60 hari setelah survei dikirim (atau, bila tidak ada survei yang dikirim, 60 hari setelah uninstall/penghapusan), setelah itu alamat dihapus atau dianonimkan secara tak terbalikkan. Tidak lebih dari satu (1) email survei dikirim per pengguna
- **Re-engagement akun yang baru saja berhenti (dasar kepentingan sah LGPD, hanya pengguna Brasil):** Sesuai panduan CNIL dan uji ekspektasi wajar, Jynx dapat menggunakan alamat email akun yang baru berhenti (non-erasure) untuk re-engagement hingga 3 tahun setelah interaksi bermakna terakhir, setelah itu dihapus atau dianonimkan

### 6.2. Penghapusan Data

Anda dapat meminta penghapusan akun Anda kapan saja (lihat Bagian 7).

**Penyimpanan Hukum:** Beberapa data mungkin disimpan lebih lama untuk mematuhi kewajiban hukum kami (misalnya, laporan keamanan, transaksi keuangan).

Saat Anda menghapus akun, kami membersihkan alamat email Anda dari CRM pemasaran dan penyedia layanan email kami. Jika Anda menggunakan hak penghapusan (§7.3 / GDPR Pasal 17 / LGPD Pasal 18(VI) untuk data berbasis persetujuan), alamat email Anda ditambahkan ke daftar supresi ter-hash permanen sehingga tidak pernah digunakan kembali untuk pemasaran, re-engagement, atau survei — termasuk perlindungan terhadap impor ulang melalui daftar pihak ketiga atau daftar yang dibeli apa pun. Catatan: berdasarkan LGPD, penghapusan Pasal 18(VI) berlaku untuk data yang diproses atas dasar persetujuan; data yang diproses atas dasar kepentingan sah (Pasal 7 IX) justru diatur oleh prinsip pembatasan tujuan (Pasal 6 II dan §2) dan hak Anda untuk meminta penghentian pemrosesan (Pasal 18 §2).

## 7. Hak Anda (GDPR dan LGPD)

Tergantung lokasi Anda, Anda memiliki hak berdasarkan GDPR (UE/EEA) dan/atau LGPD Brasil (Lei Geral de Proteção de Dados, Undang-Undang 13.709/2018).

### 7.1. Hak Akses

Anda dapat meminta salinan semua data yang kami simpan tentang Anda.

**Cara menggunakan hak ini:** Pengaturan > Privasi > "Ekspor Data Saya"

Proses ini menghasilkan file JSON yang berisi semua data Anda (profil, pesan, statistik, dll.). Link download berlaku selama 7 hari.

### 7.2. Hak Pembetulan

Anda dapat mengubah informasi profil Anda kapan saja dari aplikasi (username, bio, preferensi, dll.).

### 7.3. Hak Penghapusan ("Hak untuk Dilupakan")

Anda dapat meminta penghapusan akun Anda.

**Cara menggunakan hak ini:** Pengaturan > Zona Bahaya > "Hapus Akun Saya"

#### Proses Penghapusan Otomatis:

1. Konfirmasi dua langkah untuk mencegah penghapusan tidak sengaja
2. Anonimisasi langsung data pribadi Anda (Firestore)
3. Penghapusan akun Firebase Authentication Anda (secara otomatis mencabut semua token OAuth)
4. ID anonim disediakan sebagai referensi
5. Opsi untuk menghapus pesan dan konten yang dibuat

**Penting:** Penghapusan tidak dapat dibatalkan. Beberapa data anonim mungkin disimpan untuk tujuan statistik (mematuhi GDPR).

**Permintaan Penghapusan Manual:** Untuk permintaan penghapusan data khusus (misalnya, hapus hanya pesan dari komunitas tertentu, hapus gambar Storage, atau kasus lainnya), silakan hubungi Petugas Perlindungan Data kami di dpo@jynx.app. Kami akan memproses permintaan manual dalam 30 hari sesuai dengan GDPR.

### 7.4. Hak Portabilitas Data

Ekspor data (Bagian 7.1) memungkinkan Anda mengambil data dalam format terstruktur yang dapat dibaca mesin (JSON).

### 7.5. Hak untuk Menolak / Opt-Out dari Pemasaran

Anda dapat kapan saja menolak pemrosesan data Anda untuk tujuan pemasaran langsung, tanpa biaya dan tanpa memberikan alasan. Berdasarkan GDPR Pasal 21(2), hak ini bersifat absolut bagi pengguna UE/EEA: kami akan menghentikan semua pemrosesan pemasaran segera setelah menerima penolakan Anda. Bagi pengguna Brasil, Anda dapat menentang pemrosesan pemasaran melalui mekanisme opt-out di bawah (LGPD Pasal 8 §5; Pasal 18 §2).

- **Unsubscribe satu klik:** setiap email pemasaran menyertakan tautan unsubscribe satu klik (RFC 8058 List-Unsubscribe-Post) yang dihormati secara waktu nyata
- **Sakelar dalam aplikasi:** Pengaturan > Privasi > Preferensi Komunikasi
- **Email:** dpo@jynx.app

### 7.6. Hak untuk Menarik Persetujuan

Anda dapat menarik persetujuan untuk:

- **Analitik:** Pengaturan > Privasi > Nonaktifkan "Aktifkan Analitik"
- **Pengukuran iklan:** Pengaturan > Privasi > Pengukuran iklan (lihat §5.9)
- **Lokasi (jarak match):** Matikan sakelar lokasi dalam aplikasi — ini menghapus koordinat yang tersimpan — atau cabut izin lokasi di pengaturan perangkat Anda (lihat §5.11)
- **Notifikasi Push:** Pengaturan perangkat
- **Komunikasi Pemasaran:** Newsletter, pembaruan produk, re-engagement, dan survei uninstall/churn — dapat ditarik melalui unsubscribe satu klik, sakelar preferensi komunikasi dalam aplikasi, atau dpo@jynx.app, tanpa menghentikan akun Anda

**Catatan:** Token OAuth (Google, Apple) secara otomatis dicabut saat Anda menghapus akun (Bagian 7.3).

Penarikan tidak memengaruhi keabsahan pemrosesan yang dilakukan sebelum penarikan (GDPR Pasal 7(3); LGPD Pasal 8 §5), dan menarik persetujuan tidak pernah mengharuskan Anda menghapus akun.

### 7.7. Hak LGPD Tambahan (Pengguna Brasil)

Selain hak-hak di atas, subjek data yang berlokasi di Brasil memiliki hak-hak berikut berdasarkan LGPD Pasal 18: konfirmasi atas adanya pemrosesan; akses ke data; koreksi data yang tidak lengkap, tidak akurat, atau tidak mutakhir; anonimisasi, pemblokiran, atau penghapusan data yang tidak perlu atau berlebihan (Pasal 18(VI) berlaku untuk data yang diproses atas dasar persetujuan); portabilitas ke penyedia layanan atau produk lain, atas permintaan; penghapusan data pribadi yang diproses dengan persetujuan; dan informasi tentang kemungkinan menolak memberikan persetujuan serta konsekuensi dari hal tersebut.

Anda dapat menggunakan hak-hak ini melalui Pengaturan > Privasi atau dengan menghubungi encarregado di dpo@jynx.app. Anda juga dapat mengajukan keluhan kepada otoritas perlindungan data Brasil — Autoridade Nacional de Proteção de Dados (ANPD) — di https://www.gov.br/anpd.

## 8. Keamanan Data

Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data Anda:

- **Enkripsi:** Komunikasi aman melalui HTTPS
- **Firebase Security Rules:** Kontrol akses ketat ke data Firestore
- **Autentikasi:** Manajemen sesi aman melalui Firebase Auth
- **Validasi Input:** Pencegahan injeksi XSS melalui SecureTextInput
- **Pembatasan Rate:** Perlindungan terhadap penyalahgunaan (spam pesan, tindakan otomatis)
- **Moderasi:** Sistem pelaporan dan moderasi konten
- **Suara waktu nyata:** Media ruang suara dienkripsi saat transit menggunakan WebRTC DTLS-SRTP, standar yang sama dengan yang digunakan aplikasi suara arus utama; pensinyalan antara aplikasi dan server kami dilakukan melalui HTTPS/TLS.

Tidak ada sistem yang 100% aman. Bila terjadi kebocoran data pribadi, kami akan memberi tahu otoritas pengawas yang berwenang tanpa penundaan yang tidak wajar dan, bila memungkinkan, dalam 72 jam sejak mengetahui kebocoran yang kemungkinan menimbulkan risiko terhadap hak Anda (GDPR Pasal 33), dan kami akan mengomunikasikan kebocoran tersebut kepada pengguna yang terdampak tanpa penundaan yang tidak wajar bila kemungkinan menimbulkan risiko tinggi bagi Anda (GDPR Pasal 34). Bagi subjek data di Brasil, kami juga akan mengomunikasikan insiden keamanan yang relevan kepada ANPD dan kepada Anda dalam tenggat yang ditetapkan otoritas (LGPD Pasal 48; saat ini 3 hari kerja berdasarkan Resolusi ANPD CD/ANPD nº 15/2024).

## 9. Transfer Data Internasional

Data Anda mungkin ditransfer dan disimpan di server yang berlokasi di luar yurisdiksi Anda, termasuk:

- **Google Cloud / Firebase:** Infrastruktur global (termasuk Google Analytics di situs web, lihat §10), di bawah klausul kontraktual standar GDPR dan perlindungan yang setara
- **Amazon Web Services (moderasi gambar):** Pemrosesan moderasi gambar yang dijelaskan di §4.8 berjalan di kawasan São Paulo milik AWS (Brasil); transfer dari UE/EEA bersandar pada perjanjian pemrosesan data AWS yang memasukkan klausul kontraktual standar Komisi Eropa, berserta jaminan umum di bawah. Gambar diteruskan ke AWS melalui infrastruktur Google Cloud milik Jynx (jalur Google Cloud / Firebase di atas)
- **Sentry:** Server berbasis di AS; transfer dari UE/EEA bersandar pada EU-US Data Privacy Framework (berlaku sejak Juli 2023, menggantikan Privacy Shield yang dibatalkan) untuk entitas Sentry yang sertifikasi mandiri di bawah DPF, atau pada klausul kontraktual standar bila DPF tidak berlaku
- **Penyedia Layanan Email (ESP):** Digunakan untuk mengirimkan komunikasi pemasaran, re-engagement, dan survei yang dijelaskan di §5.6. ESP disebutkan di §4.4 dan bertindak sebagai pemroses di bawah Perjanjian Pemrosesan Data yang telah ditandatangani
- **LiveKit (suara waktu nyata, dan screen share bila tersedia):** LiveKit Cloud adalah pemroses kami untuk media suara waktu nyata (dan, bila fitur tersedia, screen-share) di bawah Perjanjian Pemrosesan Data yang telah ditandatangani (§4.5). LiveKit Cloud merutekan media secara global: sesi dilayani oleh infrastruktur global LiveKit tanpa dikunci ke kawasan tertentu. Audio ruang suara (dan video screen-share bila tersedia) dirutekan secara waktu nyata dan tidak direkam, disimpan, atau dipertahankan oleh Jynx maupun LiveKit; LiveKit hanya menyimpan metadata sesi operasional yang dijelaskan di §4.5. Transfer data pribadi ke LiveKit bersandar pada Data Processing Addendum LiveKit, yang memasukkan ketentuan GDPR dan klausul kontraktual standar Komisi Eropa untuk transfer lintas batas, berserta jaminan umum di bawah, yang berlaku bagi LiveKit sebagaimana berlaku bagi pemroses kami yang lain.
- **Meta (atribusi iklan dan pengukuran iklan):** Pembagian yang dijelaskan di §4.9 dan §5.9 sampai ke Meta Platforms Ireland Ltd. atau Meta Platforms, Inc., yang memprosesnya di Amerika Serikat dan negara lain. Transfer internasional data pribadi yang dilakukan sehubungan dengan alat-alat Meta tunduk pada perlindungan kontraktual yang berlaku dan mekanisme transfer internasional. Jynx sedang memverifikasi kepatuhan mereka terhadap persyaratan Pasal 33 LGPD dan regulasi ANPD.

**Jaminan (GDPR, UE/EEA).** Semua transfer dari UE/EEA dicakup oleh keputusan kecukupan, EU-US Data Privacy Framework, atau klausul kontraktual standar, berserta langkah pelengkap bila diwajibkan.

**Jaminan (LGPD, Brasil).** Transfer data pribadi pengguna Brasil diatur oleh LGPD Pasal 33:

- **Ke Jynx Group di Prancis (pengendali):** Sah berdasarkan LGPD Pasal 33(I) berkat Resolusi ANPD CD/ANPD nº 32/2026 (berlaku 26 Januari 2026), yang mengakui Uni Eropa — termasuk Prancis — sebagai pemberi tingkat perlindungan yang memadai. Tidak diperlukan mekanisme transfer tambahan untuk jalur ini. (Keputusan kecukupan ini tunduk pada penilaian ulang ANPD dalam empat tahun; bila ditangguhkan, Jynx akan menerapkan mekanisme Pasal 33 alternatif seperti klausul kontraktual standar ANPD.)
- **Ke Brevo di Prancis (ESP email, pemroses):** Sah berdasarkan LGPD Pasal 33(I) berkat Resolusi ANPD CD/ANPD nº 32/2026 yang sama (berlaku 26 Januari 2026), yang mengakui Uni Eropa — termasuk Prancis — sebagai pemberi tingkat perlindungan yang memadai. Tidak diperlukan mekanisme transfer tambahan untuk jalur ini. (Tunduk pada penilaian ulang ANPD yang sama seperti dijelaskan di atas; bila keputusan kecukupan ditangguhkan, Jynx akan menerapkan mekanisme Pasal 33 alternatif seperti klausul kontraktual standar ANPD dengan Brevo.)
- **Ke penyedia teknologi keselamatan anak di UE (pencocokan hash, pemroses):** Dicakup oleh keputusan kecukupan UE Resolusi ANPD CD/ANPD nº 32/2026 yang sama seperti jalur-jalur di atas — penyedia hanya menerima hash tak terbalikkan dan melakukan pencocokan di kawasan UE (§4.7)
- **Ke AWS di Brasil (moderasi gambar, pemroses):** Lompatan AWS Rekognition tetap di dalam negeri — berjalan di kawasan São Paulo milik AWS (§4.8). Gambar pertama-tama diteruskan melalui infrastruktur Google Cloud milik Jynx, yang dicakup oleh ketentuan transfer Google Cloud / Firebase umum di atas

**Transparansi (Resolusi ANPD CD/ANPD nº 19/2024).** Informasi yang diwajibkan oleh Pasal 17, §2 Resolusi ANPD CD/ANPD nº 19/2024 dikonsolidasikan dalam Kebijakan ini: bentuk, durasi, dan tujuan spesifik setiap transfer internasional serta negara tujuan (bagian ini dan bagian yang dikutipnya); identifikasi dan detail kontak pengendali (§1); penggunaan bersama data dan tujuannya (§4); tanggung jawab para pelaku pemrosesan dan langkah keamanan yang diambil (§4 dan §8); serta hak Anda dan cara menggunakannya, termasuk kanal yang mudah diakses dan hak mengajukan petisi ke ANPD (§7 dan §12). Teks lengkap klausul kontraktual yang digunakan untuk melaksanakan transfer internasional ini disediakan kepada Anda, atas permintaan, oleh petugas perlindungan data kami (dpo@jynx.app), dalam 15 hari.

Catatan historis: masa tenggang satu tahun untuk mengadaptasi kontrak yang sudah ada ke SCC ANPD berakhir pada 23 Agustus 2025; hubungan pemroses baru seperti ESP mengeksekusi SCC saat onboarding.

## 10. Cookie dan Teknologi Serupa

Aplikasi mobile kami tidak menggunakan cookie dalam arti tradisional, tetapi menggunakan:

- **Token Autentikasi:** Disimpan secara lokal dengan cara yang aman
- **Cache Lokal:** Untuk meningkatkan performa (data profil, pesan terkini)

**Situs web.** Situs web Jynx (jynx.app) menggunakan Google Analytics 4 (disediakan oleh Google) dengan Consent Mode v2 untuk memahami bagaimana situs digunakan. Penyimpanan analitik ditolak secara bawaan: sampai Anda menerima banner cookie, Google Analytics berjalan tanpa cookie atau penyimpanan lokal dan Google hanya menerima sinyal tanpa cookie dan tanpa pengidentifikasi; jika Anda menerima, pengukuran penuh diaktifkan. Pilihan Anda — terima atau tolak — disimpan secara lokal di perangkat Anda (localStorage peramban, kunci "jynx-analytics-consent"). Menghapus penyimpanan peramban untuk jynx.app membuat banner muncul kembali sehingga Anda dapat mengubah pilihan Anda. Google bertindak sebagai penerima data analitik yang dihasilkan (lihat §9); lihat §4 untuk pemroses kami yang lain dan §7 untuk hak Anda.

**Tautan undangan.** Saat Anda membuka tautan undangan (jynx.app/invite/…) di peramban Anda dan menekan tombol unduh App Store, situs web menulis tautan undangan tersebut ke clipboard perangkat Anda, menggantikan isi sebelumnya. Ini adalah teknik standar untuk atribusi instalasi aplikasi di iOS (yang tidak memiliki mekanisme install-referrer): hal ini memungkinkan aplikasi Jynx, pada peluncuran pertama, mengusulkan bergabung dengan undangan dari orang yang mengirimkan Anda tautan itu. Situs web tidak pernah membaca clipboard Anda — ia hanya menulis tautan ini — dan aplikasi membacanya hanya satu kali, setelah meminta persetujuan eksplisit Anda. Tidak ada konten clipboard lain yang diakses atau dikumpulkan. Jika Anda lebih memilih untuk tidak membagikannya, cukup tolak permintaan tempel dan bergabung tanpa undangan.

**Referral dan kampanye kreator.** Saat Anda bergabung dengan Jynx dengan kode undangan — dari tautan, kode QR, atau dimasukkan manual — kami mencatat kode itu bersama akun Anda sehingga kami dapat mengatribusikan undangan kepada orang atau kampanye yang membagikannya, menerapkan manfaat terkait, dan mendeteksi pendaftaran penipuan. Pemrosesan ini bersandar pada kepentingan sah kami (lihat §13) dan tunduk pada pemeriksaan anti-penipuan kami; tidak ada yang berubah di pihak Anda, karena data yang sama dikumpulkan apa pun jenis kode undangan yang Anda gunakan. Beberapa kode undangan juga milik kampanye atribusi kreator: jika kode yang Anda gunakan adalah bagian dari kampanye semacam itu, kode tersebut dapat pula mengkreditkan kampanye itu. Catatan pembayaran untuk kampanye kreator disimpan dalam bentuk pseudonim.

**Screen sharing (bila tersedia).** Bila fitur tersedia, Anda dapat membagikan layar perangkat Anda di ruang suara. Pembagian hanya dimulai setelah izin tangkap layar sistem operasi diberikan dan konfirmasi eksplisit dalam aplikasi diberikan. Semua yang terlihat di layar Anda — termasuk notifikasi — disiarkan langsung ke peserta lain di ruangan, dan Anda bertanggung jawab atas apa yang Anda bagikan. Video yang dibagikan adalah track media langsung yang dirutekan seperti audio suara melalui LiveKit SFU (§4.5, §9): tidak direkam atau disimpan oleh Jynx maupun LiveKit, dan berhenti saat Anda mengakhiri pembagian.

## 11. Perubahan pada Kebijakan Ini

Kami dapat memperbarui kebijakan privasi ini. Jika ada perubahan besar, kami akan memberi tahu Anda:

- Melalui notifikasi dalam aplikasi
- Melalui email ke alamat yang terkait dengan akun Anda

## 12. Hubungi Kami

Untuk pertanyaan mengenai kebijakan privasi ini atau untuk menggunakan hak Anda:

- **Email:** dpo@jynx.app

**Otoritas Pengawas:** Jika Anda merasa hak Anda belum dihormati, Anda dapat mengajukan keluhan:

- **Pengguna UE/EEA:** kepada CNIL (Commission Nationale de l'Informatique et des Libertés), Prancis — https://www.cnil.fr
- **Pengguna Brasil:** kepada ANPD (Autoridade Nacional de Proteção de Dados), Brasil — https://www.gov.br/anpd

Mengajukan keluhan kepada otoritas pengawas tidak mengurangi hak Anda untuk mencari upaya hukum lain yang tersedia bagi Anda, termasuk perlindungan konsumen wajib yang berlaku di yurisdiksi Anda (misalnya, Kode Pertahanan Konsumen Brasil, Undang-Undang 8.078/90).

## 13. Dasar Hukum dan Persetujuan

Kami memproses data pribadi Anda hanya bila kami memiliki dasar hukum. Dasar-dasar hukum yang kami andalkan, dan tempat masing-masing dijelaskan dalam Kebijakan ini, adalah:

- Pelaksanaan kontrak / penyediaan Layanan (GDPR Pasal 6(1)(b); LGPD Pasal 7, V) — akun, matching, dan pesan (§5.1–5.3)
- Kepentingan sah (GDPR Pasal 6(1)(f); LGPD Pasal 7, IX dan Pasal 10) — keamanan, pencegahan penipuan, peningkatan layanan, dan (bagi pengguna Brasil) komunikasi pemasaran/re-engagement/survei kepada pengguna yang masih ada atau baru berhenti sebagaimana dijelaskan di §5.6, masing-masing didukung penilaian penyeimbangan terdokumentasi
- Kewajiban hukum (GDPR Pasal 6(1)(c); LGPD Pasal 7, II) — penyimpanan untuk tujuan hukum (§6)
- Kewajiban hukum dan kepentingan sah (GDPR Pasal 6(1)(c) dan 6(1)(f); LGPD Pasal 7, II dan IX) — deteksi konten ilegal dan yang melanggar kebijakan, termasuk analisis gambar keselamatan anak yang dijelaskan di §5.8 dan pemrosesan moderasi gambar di §4.8, pencegahan penyalahgunaan dan ban evasion (§5.7), serta kepatuhan pada kewajiban pelaporan hukum. Untuk analisis gambar yang dibagikan di pesan langsung, Jynx juga bersandar pada deteksi sukarela atas pelecehan seksual anak daring yang diizinkan oleh Regulasi (UE) 2021/1232 (pengecualian ePrivacy, sebagaimana berlaku saat ini).
- Persetujuan (GDPR Pasal 6(1)(a); LGPD Pasal 7, I dan Pasal 8) — analitik bila Anda mengaktifkannya, notifikasi push, dan (bagi pengguna UE/EEA serta pengiriman prospek/cold/cross-sell Brasil) komunikasi pemasaran sesuai §5.6
- Pengukuran iklan (§5.9): persetujuan Anda (GDPR Pasal 6(1)(a); LGPD Pasal 7, I dan Pasal 8) bila Anda mengaktifkannya; di Android, sebagai alternatif kepentingan sah kami (LGPD Pasal 7, IX dan Pasal 10) bagi pengguna yang ditampilkan sakelar pengukuran iklan aktif secara bawaan, dengan hak Anda untuk menolak kapan saja
- Lokasi perkiraan untuk fitur jarak match (§5.11): persetujuan Anda (GDPR Pasal 6(1)(a); LGPD Pasal 7, I dan Pasal 8), diambil melalui izin lokasi sistem operasi bersama sakelar lokasi dalam aplikasi; Anda dapat menariknya kapan saja (§7.6) — mematikan sakelar menghapus koordinat yang tersimpan
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Persetujuan harus spesifik dan berdasar informasi.** Bila kami bersandar pada persetujuan Anda, persetujuan diberikan melalui tindakan afirmatif yang jelas, merujuk pada tujuan yang ditentukan, dan diambil terpisah dari penerimaan Anda atas ketentuan ini (LGPD Pasal 8 §1 — cláusula destacada). Otorisasi generik atau digabungkan batal berdasarkan LGPD Pasal 8 §4 dan tidak sah berdasarkan GDPR Pasal 4(11) dan Pasal 7. Menggunakan Jynx tidak dengan sendirinya merupakan persetujuan untuk pemasaran. Beban pembuktian persetujuan yang sah ada pada Jynx (LGPD Pasal 8 §2; GDPR Pasal 7(1)); karena itu kami mencatat tanggal, versi formulir, bahasa, dan lingkup setiap persetujuan yang kami kumpulkan.

**Penarikan.** Anda dapat menarik persetujuan apa pun kapan saja, melalui prosedur yang semudah pemberiannya dan tidak mengharuskan Anda menghapus akun (LGPD Pasal 8 §5; GDPR Pasal 7(3)) — lihat §7.5 dan §7.6. Penarikan tidak memengaruhi keabsahan pemrosesan yang dilakukan sebelum penarikan. Menghapus akun Anda (§7.3) tetap tersedia kapan saja tetapi bukanlah mekanisme untuk menarik persetujuan tertentu.
