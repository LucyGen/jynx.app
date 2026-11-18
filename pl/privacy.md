---
title: "Polityka Prywatności"
description: "Dowiedz się, jak Jynx chroni twoją prywatność i zarządza twoimi danymi. Nasza przejrzysta polityka prywatności przedstawia nasze praktyki i twoje prawa."
canonical: "https://jynx.app/pl/privacy.html"
locale: "pl"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Polityka Prywatności

Ostatnia aktualizacja: 17 listopada 2026

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

## 1. Wprowadzenie

Jynx ("my", "nasze", "aplikacja") to społecznościowa platforma gaming, która pozwala graczom łączyć się, tworzyć zespoły i grać razem.

### Informacje Prawne:

- **Podmiot Prawny:** Jynx Group (Société par Actions Simplifiée, SIREN 991443896, zarejestrowana w Nantes, we Francji)
- **Inspektor Ochrony Danych / Encarregado:** dpo@jynx.app
- **Jurysdykcja UE / EOG:** Francja, Unia Europejska — niniejsza Polityka Prywatności jest zgodna z rozporządzeniem (UE) 2016/679 (RODO) i dyrektywą 2002/58/WE (ePrivacy), wdrożonymi we Francji.
- **Jurysdykcja brazylijska:** Niniejsza Polityka Prywatności jest również zgodna z brazylijską ustawą nº 13.709/2018 (Lei Geral de Proteção de Dados, „LGPD”), która — zgodnie z art. 3 LGPD — stosuje się do przetwarzania przez Jynx danych osobowych osób znajdujących się w Brazylii, niezależnie od tego, że Jynx nie ma siedziby w Brazylii.
- **Publikacja (LCEN):** Directeur de la publication: Antoine Haie. Ta witryna (jynx.app) jest hostowana przez GitHub Pages i dostarczana przez sieć dystrybucji treści Cloudflare.

Na potrzeby LGPD Jynx Group jest administratorem (controlador) twoich danych osobowych. Nasz Inspektor Ochrony Danych pełni rolę encarregado (DPO) i jest dostępny pod adresem dpo@jynx.app w każdej sprawie związanej z LGPD. Choć Jynx kwalifikuje się jako pequeno agente de tratamento de dados pessoais (mały podmiot przetwarzający) na mocy uchwały ANPD CD/ANPD nº 2/2022, zwalniającej Jynx z obowiązku wyznaczania encarregado, Jynx dobrowolnie utrzymuje ten opublikowany kanał komunikacji.

Niniejsza polityka prywatności opisuje, w jaki sposób gromadzimy, wykorzystujemy, udostępniamy i chronimy twoje dane osobowe podczas korzystania z naszej aplikacji.

## 2. Minimalny Wiek i Weryfikacja

Nasza aplikacja jest przeznaczona dla użytkowników w wieku 18 lat i starszych.

Podczas tworzenia konta prosimy o podanie daty urodzenia. Jeśli masz poniżej 18 lat, nie będziesz mógł utworzyć konta ani korzystać z naszych usług.

Marketing wobec nieletnich. Jynx jest ograniczony do użytkowników w wieku 18 lat i starszych oraz stosuje automatyczną bramkę wieku. Jeśli później ustalimy, że użytkownik ma mniej niż 18 lat (LGPD art. 14; RODO art. 8), natychmiast zakończymy konto, wykluczemy użytkownika ze wszystkich komunikacji marketingowych, re-engagementowych i ankietowych oraz usuniemy powiązane dane marketingowe. Nigdy nie zbieramy świadomie zgody marketingowej od osoby niepełnoletniej.

## 3. Gromadzone Dane

### 3.1. Dane Rejestracyjne i Profilowe

Podczas tworzenia i zarządzania kontem gromadzimy następujące informacje:

#### Informacje Uwierzytelniające:

- Adres e-mail (dla kont e-mail/hasło)
- Nazwa użytkownika/pseudonim
- Zdjęcie profilowe (opcjonalne)
- Identyfikatory logowania przez media społecznościowe (Google, Apple), jeśli korzystasz z tych metod
- Identyfikatory Discord (twój identyfikator użytkownika Discord), jeśli połączysz konto Discord dla integracji z Discordem — połączenie korzysta z OAuth Discorda z uprawnieniami wyłącznie do identyfikacji i nie jest metodą logowania; możesz je w każdej chwili odłączyć
- Przeglądanie jako gość (gdy jest dostępne): możesz eksplorować publiczne części Jynx bez zakładania konta; w trybie gościa przetwarzamy tylko lokalnie przechowywany identyfikator gościa i dane techniczne z §3.3 potrzebne do działania aplikacji — nie tworzymy profilu i nie przechowujemy danych konta. Aby dopasowywać się, czatować lub dołączać do społeczności, musisz utworzyć konto

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

Pomiar reklam z Meta jest oddzielony od analityki i ma własny przełącznik: patrz §5.9.

### 3.4. Dane Komunikacyjne

- **Wiadomości:** Wiadomości w czatach społeczności, wiadomości prywatne między użytkownikami, historia rozmów
- **Powiadomienia:** Tokeny FCM (Firebase Cloud Messaging) do powiadomień push

### 3.5. Treści Generowane przez Użytkowników

- Przesłane zdjęcia (zdjęcia profilowe, dodatkowe zdjęcia) i obrazy udostępniane w wiadomościach prywatnych
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

### 4.4. Dostawca usług e-mail (komunikacja marketingowa i ankietowa)

Aby dostarczać e-maile marketingowe, re-engagementowe i ankiety po dezinstalacji/odejściu opisane w §5.6, Jynx korzysta ze zewnętrznego dostawcy usług e-mail (ESP) działającego jako podmiot przetwarzający (RODO art. 28; LGPD art. 39 — operador). ESP przetwarza twój adres e-mail i minimalne dane doręczeniowe (np. status wysyłki/odbicia) wyłącznie na udokumentowanych instrukcjach Jynx, na podstawie podpisanej umowy powierzenia przetwarzania danych.

- **Tożsamość, rola i lokalizacja ESP:** Brevo (Brevo SAS, Paryż, Francja) — nasz dostawca usług e-mail i podmiot przetwarzający na podstawie podpisanej umowy powierzenia przetwarzania danych. Polityka prywatności Brevo: https://www.brevo.com/legal/privacypolicy/
- **Podprocesorzy:** Aktualna lista podprocesorów Brevo jest opublikowana w jego umowie powierzenia przetwarzania danych (Warunki użytkowania): https://www.brevo.com/legal/termsofuse/
- **Podstawa transferu międzynarodowego:** Patrz §9. Brevo ma siedzibę we Francji (UE). Transfery do Brevo korzystają zatem z reżimu ochrony UE na mocy RODO, a dla użytkowników z Brazylii — z decyzji o adekwatności ANPD dla UE (uchwała nº 32/2026) — nie są wymagane SCC ani żaden dodatkowy mechanizm.

Nie sprzedajemy twoich danych osobowych. W e-mailach marketingowych nie są osadzone piksele śledzące ani ukryta analityka bez odrębnej podstawy prawnej ujawnionej w §5.6.

### 4.5. LiveKit Cloud (mowa w czasie rzeczywistym)

Jynx korzysta z LiveKit Cloud jako podmiotu przetwarzającego (RODO art. 28; LGPD art. 39 — operador) na podstawie podpisanej umowy powierzenia przetwarzania danych, w celu obsługi infrastruktury medialnej czasu rzeczywistego, która przekierowuje dźwięk pokoi głosowych między uczestnikami. LiveKit obsługuje SFU (Selective Forwarding Unit), która przekazuje strumień audio każdego uczestnika pozostałym w czasie rzeczywistym.

Jynx nie włącza funkcji nagrywania, transkrypcji, Agent Insights ani Egress w LiveKit. Dźwięk pokoi głosowych jest przekierowywany w czasie rzeczywistym przez SFU (Selective Forwarding Unit) LiveKit i nie jest nagrywany, przechowywany ani utrwalany ani przez Jynx, ani przez LiveKit.

LiveKit zachowuje jednak operacyjne metadane sesji — takie jak tożsamości uczestników, identyfikatory pokoi, czasy połączeń i metryki jakości — na potrzeby rozliczeń, zapobiegania nadużyciom i operacyjne, zgodnie ze swoim aneksem do umowy o przetwarzaniu danych. Metadane te nie są wykorzystywane do identyfikacji użytkownika poza platformą ani do celów reklamowych.

### 4.6. App Store / Google Play (zakupy w aplikacji i subskrypcje)

Subskrypcje Jynx+ i Founder Packi są sprzedawane w aplikacji przez App Store Apple i Google Play, które działają jako sprzedawca (merchant of record) tych zakupów (patrz Warunki Usługi, Sekcja 8). Dane instrumentu płatniczego (np. dane karty) są zbierane i przetwarzane wyłącznie przez Apple/Google zgodnie z ich politykami prywatności; Jynx nie zbiera, nie otrzymuje ani nie przechowuje żadnych danych instrumentu płatniczego.

Za pośrednictwem naszego dostawcy rozliczeń RevenueCat (podmiot przetwarzający działający na podstawie podpisanej umowy powierzenia; RODO art. 28; LGPD art. 39 — operador) Jynx otrzymuje tylko informacje niezbędne do dostarczenia tego, co kupiłeś: status twojej subskrypcji i uprawnień (np. czy Jynx+ jest aktywne i kiedy się odnawia), zakupiony poziom Founder Packa oraz identyfikatory transakcji. Dane te są przechowywane tak długo, jak to konieczne do świadczenia Usługi i wypełnienia obowiązków rachunkowych i ewidencyjnych (§6), i są używane wyłącznie do nadawania i utrzymywania twoich uprawnień oraz zapobiegania oszustwom. RevenueCat ma siedzibę w Stanach Zjednoczonych; transfery danych osobowych do RevenueCat opierają się na EU-US Data Privacy Framework (dla podmiotów RevenueCat samocertyfikowanych w DPF) lub na standardowych klauzulach umownych tam, gdzie DPF nie ma zastosowania. Mechanizm transferu obowiązujący dla danych użytkowników z Brazylii jest potwierdzony w naszych Rejestrach czynności przetwarzania (patrz §9).

- Polityka prywatności Apple: https://www.apple.com/legal/privacy/
- Polityka prywatności Google: https://policies.google.com/privacy
- Polityka prywatności RevenueCat: https://www.revenuecat.com/privacy

### 4.7. Wyspecjalizowani dostawcy technologii ochrony dzieci

Aby pomagać w wykrywaniu znanych materiałów wykorzystywania seksualnego dzieci (patrz §5.8), Jynx współpracuje z wyspecjalizowanymi dostawcami technologii ochrony dzieci działającymi jako podmioty przetwarzające (RODO art. 28; LGPD art. 39 — operador). Dostawcy ci otrzymują wyłącznie nieodwracalne skróty (hashe) wyliczone z obrazów — nigdy samych obrazów — i wykonują porównywanie skrótów w regionie UE, wyłącznie na potrzeby wykrywania zagrożeń dla dzieci, na udokumentowanych instrukcjach Jynx. Wyliczanie skrótu z obrazu odbywa się we własnej infrastrukturze Google Cloud Jynx (patrz §9).

### 4.8. Chmurowy dostawca moderacji obrazów (AWS)

Dla bezpieczeństwa platformy zdjęcia profilowe i zdjęcia z galerii są przesiewane przez zautomatyzowaną usługę klasyfikacji obrazów — Amazon Rekognition, dostarczaną przez Amazon Web Services (AWS), działającą jako podmiot przetwarzający (RODO art. 28; LGPD art. 39 — operador). W tym celu obraz jest przekazywany do AWS i analizowany przez uczenie maszynowe pod kątem treści niestosownych (na przykład nagości lub treści dla dorosłych); wynikiem jest etykieta wygenerowana maszynowo i ocena pewności, obsługiwane w naszym procesie moderacji (patrz Polityka ochrony dzieci). To przetwarzanie służy wyłącznie moderacji treści i bezpieczeństwu — nigdy profilowaniu, reklamie ani żadnemu innemu celowi. AWS przetwarza te dane w regionie AWS skonfigurowanym dla usługi (obecnie São Paulo, Brazylia); zastosowanie mają zabezpieczenia transferu z §9. Podobnie jak w pozostałej części Usługi, obraz jest obsługiwany przez własną infrastrukturę Google Cloud Jynx, zanim zostanie przekazany do AWS (patrz §9).

### 4.9. Atrybucja reklamowa (Meta, Apple ATT, Google Play Install Referrer)

Aby mierzyć, czy instalacje naszej aplikacji wynikają z marketingu, używamy technologii reklamowych i atrybucyjnych, za twoją zgodą tam, gdzie jest wymagana: Meta (Facebook) App Events SDK (Meta Platforms Ireland) oraz Google Play Install Referrer API. Na urządzeniach Apple SDK Meta jest inicjalizowany dopiero po udzieleniu zgody App Tracking Transparency (ATT); bez niej nie zbieramy żadnego identyfikatora reklamowego (IDFA), a SDK nie jest inicjalizowany. Na Androidzie Google Play Install Referrer API mówi nam, czy twoja instalacja pochodzi z karty sklepu lub linku kampanii, a identyfikator reklamowy (GAID) jest używany zgodnie z ustawieniami identyfikatora reklamowego twojego urządzenia. Zdarzenia wysyłane do Meta ograniczają się do aktywacji aplikacji i metadanych zdarzeń aplikacji (w tym — gdy jesteś zalogowany — twojego identyfikatora użytkownika aplikacji, czyszczonego z SDK przy wylogowaniu) i są przetwarzane na instrukcje Jynx dla atrybucji i pomiaru kampanii.

Meta Platforms Ireland przetwarza te dane jako nasz podmiot przetwarzający dla opisanego wyżej celu atrybucji; Meta Platforms, Inc. może dodatkowo działać jako niezależny administrator dla własnych prawnie uzasadnionych celów na podstawie własnych warunków (Warunki przetwarzania danych Meta i polityka prywatności na https://www.facebook.com/privacy/policy). Transfery do Stanów Zjednoczonych opierają się na EU-US Data Privacy Framework dla samocertyfikowanych podmiotów Meta lub na standardowych klauzulach umownych (§9). Możesz w każdej chwili odmówić lub cofnąć zgodę ATT albo zresetować identyfikator reklamowy w ustawieniach urządzenia; odmowa nie wpływa na korzystanie z Jynx.

**Pomiar reklam.** Poza atrybucją instalacji mierzymy też konwersje: zdarzenia udostępniane Meta obejmują rejestrację, ukończone onboardowanie i zakupy — wraz z kwotą i walutą zakupu. Za twoją zgodą może być też udostępniany zahaszowany (nieodwracalnie zmieszany) adres e-mail lub numer telefonu, aby poprawić jakość dopasowań; nigdy nie dzieje się to dla użytkowników mierzonych na naszej prawnie uzasadnionej interesie (poniżej). Zdarzenie rejestracji może też obejmować twoją samodzielnie zadeklarowaną płeć. Nic więcej nie jest udostępniane — żadnych wiadomości, pól profilu, gier, społeczności, kontaktów, lokalizacji ani zdjęć — a twoje dane nigdy nie są sprzedawane. Podstawy prawne, twoje wybory i ujawnienie Apple SKAdNetwork opisuje §5.9.

Przechowywanie: Jynx nie prowadzi osobnej kopii zdarzeń udostępnionych Meta. Zdarzenia już udostępnione pozostają objęte procesami przechowywania i usuwania narzędzi biznesowych Meta, które stosują się od momentu udostępnienia.

### 4.10. Program twórców (partnerów) — KYC i wypłaty

Jeśli dołączysz do programu twórców (partnerów) Jynx, przetwarzamy dane tożsamościowe, podatkowe i wypłatowe wymagane przez program: twój CPF lub CNPJ (walidowane w aplikacji), wybraną ścieżkę wypłaty — PayPal (identyfikowany adresem e-mail), przelew bankowy Wise (Brazylia) lub klucz Pix — oraz twoje rekordy wyników kampanii (przypisane rejestracje; patrz §10 polecenia). Rekordy wypłat są przechowywane w formie pseudonimizowanej (§10). Programem rządzą wersjonowane Creator Referral Terms i Self-Billing Mandate, które akceptujesz przy zapisie (patrz Warunki Usługi §15).

Wypłaty wykonuje instytucja płatnicza obsługująca wybraną ścieżkę: PayPal lub Wise otrzymują instrukcje przelewu i dane potrzebne do potwierdzenia twojej tożsamości, zapobiegania oszustwom i wypełnienia obowiązków regulacyjnych, działając na własnych warunkach jako niezależne instytucje płatnicze (ich polityki prywatności są opublikowane na ich stronach); wypłata Pix to przelew inicjowany przez Jynx Group na wskazany przez ciebie klucz Pix. Zabezpieczenia transferu międzynarodowego opisuje §9.

### 4.11. Funkcje AI

**Generowanie awatarów.** Quiz awatarów może generować stylizowane propozycje awatara dla twojego profilu. Generowanie działa obecnie na Cloudflare Workers AI (Cloudflare, Inc., podmiot przetwarzający) na udokumentowanych instrukcjach Jynx; jeśli silnik się zmieni, ta sekcja zostanie zaktualizowana przed zmianą lub wraz z nią. Dane wejściowe to twoje odpowiedzi z quizu i preferencje stylu gry — nigdy twoje zdjęcia — wraz z twoim identyfikatorem użytkownika; propozycje wracają do aplikacji jako obrazy PNG lub WebP i są przechowywane do 30 dni, żebyś mógł je pobrać, po czym są usuwane. Wygenerowane obrazy są syntetyczne — to nie są fotografie ciebie — i podlegają tej samej moderacji co inne obrazy (§4.8).

**Wiadomości towarzysza (Quimera).** Niektóre wiadomości aplikacji towarzysza są tworzone lub wzbogacane przez generatywny system AI (Google Gemini, podmiot przetwarzający). Wiadomość wygenerowana przez AI jest tak oznaczona; jesteś zawsze informowany o interakcji z elementem wygenerowanym przez AI, zgodnie z art. 50(1) aktu o AI UE.

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

- Wysyłania ważnych powiadomień serwisowych (znalezione dopasowania, otrzymane wiadomości, alerty bezpieczeństwa konta i informacje o zmianach zasad zgodnie z §11)

E-maile marketingowe, re-engagementowe i ankiety po dezinstalacji/odejściu są opisane osobno w §5.6 Komunikacja marketingowa i nie są objęte tę kategorią transakcyjną.

### 4. Usprawniania Usługi:

- Analizy wykorzystania w celu poprawy funkcji
- Identyfikacji i naprawiania błędów
- Optymalizacji wydajności
- Generowania propozycji awatarów i szkiców wiadomości towarzysza z użyciem podmiotów przetwarzających AI (§4.11)

### 5. Bezpieczeństwa i Zgodności:

- Zapobiegania oszustwom i nadużyciom
- Egzekwowania naszych warunków użytkowania
- Przestrzegania zobowiązań prawnych

Możemy publikować zanonimizowane, zagregowane statystyki wyprowadzone z użycia aplikacji (na przykład jak gracze tworzą duosy). Statystyki te nigdy nie identyfikują pojedynczych użytkowników.

### 5.6. Komunikacja marketingowa

Oprócz powiadomień operacyjnych opisanych w §5.3 możemy wysyłać ci komunikacje marketingowe i re-engagementowe e-mailem, w tym: aktualizacje produktu i informacje o nowych funkcjach aplikacji Jynx; newslettery; wiadomości re-engagementowe zapraszające cię z powrotem do aplikacji; oraz krótkie ankiety o dezinstalacji lub odejściu (np. „Dlaczego przestałeś korzystać z Jynx?”). Te komunikacje są odrębne od powiadomień transakcyjnych/służbowych.

**Podstawa prawna — użytkownicy z UE / EOG (RODO + ePrivacy).** E-maile marketingowe i re-engagementowe do użytkowników z UE/EOG są wysyłane na podstawie twojej wcześniejszej, wyraźnej zgody opt-in (art. 13(1) dyrektywy ePrivacy, we Francji wdrożony w art. L. 34-5 Code des postes et des communications électroniques; RODO art. 6(1)(a) i art. 7). Po uruchomieniu płatnych subskrypcji (Jynx+) i jednorazowych zakupów w aplikacji (Founder Packi) Usługa jest usługą odpłatną, a te zakupy stanowią „sprzedaż” w rozumieniu wyroku TSUE C-654/23 (13 listopada 2025). Wyjątek „soft opt-in” z art. 13(2) ePrivacy jest więc co do zasady dostępny dla podobnych produktów i usług kierowanych do obecnych klientów. Zachowujemy jednak ostrożne stanowisko i nadal opieramy się na twojej wcześniejszej, wyraźnej zgodzie opt-in; zaczniemy polegać na podstawie soft opt-in dopiero po udokumentowanej ponownej ocenie, zapisanej w naszych Rejestrach czynności przetwarzania, i po zaktualizowanym powiadomieniu skierowanym do ciebie.

**Podstawa prawna — użytkownicy z Brazylii (LGPD).** Dla użytkowników z Brazylii komunikacje marketingowe i re-engagementowe opierają się na dwóch alternatywnych podstawach prawnych:

1. **Zgoda (LGPD art. 7, I i art. 8)** — rejestrowana jako osobny, niezaznaczony, celowy opt-in przy rejestracji lub w aplikacji, z zapisem daty, wersji formularza i języka; możesz ją w każdej chwili wycofać bezpłatnie, nie tracąc dostępu do Usługi (art. 8 §5). Zgoda jest podstawą używaną dla każdej komunikacji do prospektów, zimnego kontaktu oraz ofert cross-sell/partnerskich wykraczających poza samą aplikację Jynx.
2. **Prawnie uzasadniony interes (LGPD art. 7, IX, rozwinięty w art. 10)** — używany wyłącznie dla obecnych lub niedawno nieaktywnych użytkowników otrzymujących wiadomości re-engagementowe, aktualizacje produktu o tej samej aplikacji Jynx albo pojedynczą krótką ankietę o odejściu/dezinstalacji. Zanim Jynx oprze się na tej podstawie, przeprowadza i dokumentuje ocenę prawnie uzasadnionego interesu (LIA) według trójfazowego testu Poradnika prawnie uzasadnionego interesu ANPD (2 lutego 2024): (i) cel, (ii) konieczność i (iii) zbalansowanie oraz zabezpieczenia. LIA odnotowuje wcześniejszą relację, uzasadnione oczekiwania użytkownika, cel, wybrane środek najmniej inwazyjny oraz kanał rezygnacji. Prawnie uzasadniony interes nie jest używany do zimnych/niezamówionych e-maili, niezwiązanego cross-sellu, kupionych list ani trwałego wysyłania do użytkowników, którzy wyraźnie zakończyli relację.

**Prawo sprzeciwu / rezygnacji.** Użytkownicy z Brazylii mogą w każdej chwili sprzeciwić się temu przetwarzaniu i zrezygnować przez mechanizmy z §7.5 i §7.6 (jedno kliknięcie wypisu w każdym e-mailu albo przełącznik preferencji komunikacji w aplikacji), bez kosztów i bez kończenia konta. Rezygnacje honorujemy w czasie rzeczywistym. Brazylijski Kodeks Obrony Konsumenta (CDC, ustawa 8.078/90, w szczególności art. 39 III) zakazuje niezamówionej lub nadużywającej komunikacji handlowej; dlatego ściśle respektujemy rezygnacje i stosujemy limity częstotliwości, bo uporczywe wysyłanie lub ignorowanie rezygnacji może być uznane za praktykę nadużywającą.

**Ankiety po dezinstalacji / odejściu.** Tam, gdzie jest to operacyjnie wykonalne, pytamy o dezinstalację/odejście w aplikacji, w momencie dezinstalacji (bez potrzeby przechowywania e-maili). Gdy ankieta jest wysyłana mailem, nie zawiera treści promocyjnych ani re-engagementowych; wysyłamy maksymalnie jedną (1) ankietę na użytkownika w przybliżeniu w ciągu 60 dni od usunięcia konta lub dezinstalacji; po tym adres e-mail jest usuwany lub nieodwracalnie anonimizowany zgodnie z §6; a użytkownicy, którzy złożyli wniosek o usunięcie / prawo do bycia zapomnianym (§7.3), nie są kontaktowani ponownie i trafiają na trwałą listę supresyjną (patrz §6 i Warunki Usługi §7.2).

**Śledzenie w e-mailach.** E-maile marketingowe nie osadzają pikseli śledzących ani ukrytej analityki przetwarzającej dane osobowe bez odrębnej podstawy prawnej. Jeśli jakiekolwiek śledzenie otwarć/kliknięć zostanie wprowadzone, zostanie tu ujawnione i będzie oparte na zgodzie (LGPD art. 8; ePrivacy art. 5(3)), zgodnie z wytycznymi ANPD o technologiach śledzących (18 października 2022).

**Częstotliwość.** E-maile marketingowe podlegają wewnętrznym limitom częstotliwości; możesz je zmniejszyć lub wyłączyć w każdej chwili przez przełącznik preferencji komunikacji w aplikacji albo klikając wypis w dowolnej wiadomości.

### 5.7. Bezpieczeństwo społeczności i omijanie banów

Aby chronić naszą społeczność przed nadużyciami, używamy identyfikatorów urządzenia i sygnałów integralności urządzenia do wykrywania i zapobiegania próbom obejścia zawieszenia lub bana. Jeśli powiążemy urządzenie z zablokowanym kontem, urządzenie to może zostać pozbawione możliwości tworzenia nowych kont lub logowania się. Jeśli uważasz, że stało się to omyłkowo, możesz odwołać się, kontaktując się z support@jynx.app.

Sygnały integralności urządzenia są zbierane i oceniane przy pomocy Talsec freeRASP — biblioteki antymanipulacyjnej i kontroli integralności urządzenia wbudowanej w aplikację. freeRASP działa na twoim urządzeniu: lokalnie wykrywa zagrożenia takie jak zrootowane urządzenia, hooking w czasie działania i niezablokowane bootloader, a wyniki raportuje do nas przez naszego własnego dostawcę monitorowania błędów (Sentry, §4.2) dla celów zapobiegania nadużyciom; nie wysyła twoich danych do żadnej usługi prowadzonej przez Talsec.

### 5.8. Analiza obrazów w ramach ochrony dzieci

Aby pomagać chronić dzieci i wypełniać obowiązki prawnego raportowania, Jynx używa zautomatyzowanych systemów do analizy obrazów udostępnianych w wiadomościach prywatnych, porównując skróty wyliczone z tych obrazów z bazami znanych materiałów wykorzystywania seksualnego dzieci. Do tej analizy same obrazy nie są przekazywane podmiotom trzecim — tylko nieodwracalne skróty (patrz §4.7). Zdjęcia profilowe są przesiewane osobno, w przetwarzaniu moderacji obrazów opisanym w §4.8. Ta analiza istnieje wyłącznie dla wykrywania zagrożeń dla dzieci i obowiązków prawnego raportowania; nie jest używana do profilowania, reklamy ani żadnego innego celu. Trafienia są obsługiwane jak opisano w naszej [Polityce ochrony dzieci](/child-safety.html).

### 5.9. Pomiar reklam

Jeśli zaakceptujesz, udostępniamy także ograniczone zdarzenia (takie jak rejestracja i zakupy, wraz z ich kwotą) firmie Meta, aby mierzyć i ulepszać naszą reklamę. Twoje dane nigdy nie są sprzedawane, a swój wybór możesz zmienić w każdej chwili w ustawieniach Prywatności. Co jest udostępniane i komu, opisuje §4.9.

Jak jest włączany. Na iPhonie i iPadzie pomiar reklam używa twoich danych tylko za twoją zgodą (RODO art. 6(1)(a); LGPD art. 7, I), wyrażoną na karcie prywatności przy pierwszym uruchomieniu lub później w Ustawienia > Prywatność > Pomiar reklam, i wymaga dodatkowo autoryzacji Apple App Tracking Transparency (patrz §4.9). Na Androidzie pomiar reklam opiera się albo na tej samej zgodzie, albo — dla użytkowników, którym przełącznik pomiaru reklam jest pokazywany domyślnie włączony na karcie pierwszego uruchomienia — na naszym prawnie uzasadnionym interesie w mierzeniu własnej reklamy (LGPD art. 7, IX i art. 10), ocenionym w udokumentowanej ocenie prawnie uzasadnionego interesu. W tym przypadku jest domyślnie włączony, a możesz go wyłączyć na tej samej karcie lub w każdej chwili w Ustawienia > Prywatność > Pomiar reklam — sprzeciw jest równie łatwy jak pozostawienie włączenia, bezpłatny i nigdy nie wymaga usuwania konta (LGPD art. 18, §2).

Zabezpieczenia. Użytkowników, o których wiemy, że mają mniej niż 18 lat, oraz profile bez ustalonego wieku nigdy nie mierzymy na podstawie prawnie uzasadnionego interesu. Cofnięcie zgody lub sprzeciw zatrzymuje dalsze udostępnianie od twojego następnego uruchomienia aplikacji; zdarzenia prawnie udostępnione wcześniej pozostają w Meta na warunkach przechowywania z §4.9, a cofnięcie nie wpływa na legalność czynności wykonanych przed nim (RODO art. 7(3); LGPD art. 8 §5).

**Apple SKAdNetwork (iOS).** Niezależnie od powyższego, dla każdego użytkownika iPhone'a i iPada bez względu na wybory i ustawienia — także gdy śledzenie lub pomiar reklam jest odrzucony — Apple SKAdNetwork raportuje anonimowe, zagregowane informacje o konwersjach do sieci reklamowej, która pokazała ci reklamę (na przykład że rejestracja albo zakup w pewnym przedziale wartości nastąpiły). Żaden identyfikator od Jynx ani żadne dane osobowe nie opuszczają przy tym twojego urządzenia: to standardowy mechanizm atrybucji Apple i nie możemy na jego podstawie zidentyfikować ciebie.

### 5.10. E-maile i komunikacja

**E-maile powiadamiające o aktywności konta (serwisowe).** Gdy przegapisz aktywność konta w aplikacji (nieprzeczytaną wiadomość, nowe dopasowanie lub polubienie), Jynx może wysłać ci o tym e-mail. To powiadomienia serwisowe oparte na naszym prawnie uzasadnionym interesie w prowadzeniu platformy społecznościowej (informowaniu cię o trwających interakcjach) i nie zawierają treści promocyjnych. Każdy typ powiadomień (wiadomości, dopasowania, polubienia) możesz wyłączyć w każdej chwili w Ustawienia > Prywatność > Komunikacja albo przez link „Zarządzaj tymi powiadomieniami” w każdym e-mailu. Sprzeciw wobec tego przetwarzania możesz zgłosić w każdej chwili (RODO art. 21) na privacy@jynx.app.

**E-maile re-engagementowe i marketingowe (winback).** E-maile mające przywrócić cię do Jynx po okresie bezczynności oraz nasze komunikacje z wiadomościami i ofertami to prospekcja handlowa. Są wysyłane wyłącznie za twoją wcześniejszą, konkretną, dobrowolną i odwoływalną zgodą, zbieraną przez osobne, opcjonalne, niezaznaczone pole — nigdy jako warunek akceptacji Warunków. Możesz ją wycofać w każdej chwili w Ustawienia > Prywatność > Komunikacja albo przez link wypisu w każdym e-mailu.

**Wyświetlanie twojej nazwy użytkownika i zdjęcia profilowego w e-mailach powiadamiających.** Jeśli wchodziłeś w interakcję z innym członkiem (polubienie, dopasowanie, wiadomość), twoja nazwa użytkownika i zdjęcie profilowe mogą pojawić się w e-mailach o aktywności konta kierowanych do niego, gdy jest nieaktywny. Te elementy są generowane w momencie wysyłki i nie są przechowywane w naszych logach e-mail (tylko identyfikator i liczniki).

### 5.11. Lokalizacja i odległość dopasowań

**Co przetwarzamy.** Jeśli zdecydujesz się udostępnić lokalizację, Jynx używa jej wyłącznie do jednego celu: pokazywania przybliżonej odległości między tobą a innymi graczami („~12 km”) w kolejce dopasowań oraz — jeśli włączysz sortowanie po bliskości — sortowania tej kolejki według odległości. Przetwarzamy tylko lokalizację przybliżoną: uprawnienie, o które prosimy, to przybliżona / o obniżonej dokładności lokalizacja systemu operacyjnego, a przed zapisaniem czegokolwiek twoje współrzędne są na naszych serwerach przyciągane do siatki o kroku ok. 0,02° (ok. 2,2 km); wywiedziona komórka lokalizacji ma ok. 11 km. Surowe współrzędne GPS nigdy nie są przechowywane.

**Opcjonalne i oparte na zgodzie.** To funkcja opcjonalna: nic nie jest zbierane, chyba że nadasz uprawnienie lokalizacji systemu operacyjnego ORAZ przełącznik lokalizacji w aplikacji jest włączony. Lokalizacja nigdy nie jest przetwarzana w tle — jest używana tylko, gdy korzystasz z aplikacji. Twoja lokalizacja nigdy nie jest pokazywana innym użytkownikom jako pozycja na mapie, nigdy nie jest używana do reklamy i nigdy nie jest udostępniana platformom reklamowym (patrz §4.9: żadne dane lokalizacji nie wchodzą w cokolwiek udostępnianego dla atrybucji czy pomiaru reklam). Nasze zdarzenia analityczne nie zawierają współrzędnych, nazw miast ani identyfikatorów komórek lokalizacji — tylko anonimowe sygnały adopcji i wyboru sortowania. Zapytanie o uprawnienie systemu operacyjnego jest sposobem zebrania twojej zgody, a przełącznik w aplikacji — sposobem jej wycofania (§7.6).

**Jak długo go przechowujemy.** Rekord lokalizacji prowadzony dla twojego konta jest automatycznie usuwany po 45 dniach bez aktualizacji i odświeżany przy każdym użyciu funkcji przy włączonym udostępnianiu. Przybliżona odległość pokazywana na karcie twojego profilu jest ograniczona aktywnością: istnieje tylko tak długo, jak karta twojego profilu, i jest traktowana jako nieobecna po 45 dniach bez aktualizacji.

**Twoja kontrola.** Możesz w każdej chwili przestać udostępniać: wyłączenie przełącznika lokalizacji w aplikacji natychmiast usuwa zapisane współrzędne (rekord pozostaje, ale opróżniony ze współrzędnych), a cofnięcie uprawnienia lokalizacji w ustawieniach urządzenia zatrzymuje zbieranie u źródła. Usunięcie konta (§7.3) także czyści twoje dane lokalizacji.

## 6. Przechowywanie Danych

### 6.1. Okresy Przechowywania

- **Dane Profilowe:** Przechowywane tak długo, jak twoje konto jest aktywne
- **Logi i Analityka:** Firebase Analytics: 14 miesięcy (polityka Firebase)
- **Adresy e-mail marketingowe (oparte na zgodzie):** Przechowywane tak długo, jak nie zrezygnowałeś i nie usunąłeś konta, plus zahaszowany rekord na liście supresyjnej (patrz poniżej), abyśmy na pewno nie kontaktowali cię ponownie
- **Adresy e-mail ankiet po dezinstalacji / odejściu:** Przechowywane maksymalnie 60 dni po wysłaniu ankiety (lub — jeśli ankieta nie została wysłana — 60 dni od dezinstalacji/usunięcia), po czym adres jest usuwany lub nieodwracalnie anonimizowany. Na użytkownika wysyłamy najwyżej jedną (1) ankietę
- **Re-engagement niedawno nieaktywnych kont (podstawa prawnie uzasadnionego interesu LGPD, tylko użytkownicy z Brazylii):** Zgodnie z wytycznymi CNIL i testem uzasadnionych oczekiwań Jynx może używać adresu e-mail niedawno nieaktywnego konta (bez wniosku o usunięcie) do re-engagementu do 3 lat od ostatniej znaczącej interakcji, po czym jest on usuwany lub anonimizowany

### 6.2. Usuwanie Danych

Możesz w każdej chwili poprosić o usunięcie swojego konta (patrz Sekcja 7).

**Przechowywanie Prawne:** Niektóre dane mogą być przechowywane dłużej w celu wypełnienia naszych zobowiązań prawnych (np. zgłoszenia bezpieczeństwa, transakcje finansowe).

Gdy usuniesz konto, czyścimy twój adres e-mail z naszego marketingowego CRM i dostawcy usług e-mail. Jeśli korzystasz z prawa do usunięcia (§7.3 / RODO art. 17 / LGPD art. 18(VI) dla danych opartych na zgodzie), twój adres e-mail trafia na trwałą zahaszowaną listę supresyjną, żeby nigdy nie był ponownie używany do marketingu, re-engagementu ani ankiet — w tym z ochroną przed ponownym zaimportowaniem z list podmiotów trzecich lub kupionych list. Uwaga: na mocy LGPD usuwanie z art. 18(VI) dotyczy danych przetwarzanych na podstawie zgody; dane przetwarzane na podstawie prawnie uzasadnionego interesu (art. 7 IX) rządzą się zamiast tego zasadą ograniczenia celu (art. 6 II i §2) oraz twoim prawem żądania zaprzestania przetwarzania (art. 18 §2).

## 7. Twoje Prawa (RODO i LGPD)

W zależności od miejsca twojego pobytu przysługują ci prawa na mocy RODO (UE/EOG) i/lub brazylijskiej LGPD (Lei Geral de Proteção de Dados, ustawa 13.709/2018).

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

### 7.5. Prawo do Sprzeciwu / Rezygnacji z Marketingu

W każdej chwili możesz sprzeciwić się przetwarzaniu swoich danych do celów marketingu bezpośredniego — bezpłatnie i bez podawania przyczyn. Zgodnie z art. 21(2) RODO prawo to jest bezwzględne dla użytkowników z UE/EOG: po otrzymaniu twojego sprzeciwu zatrzymamy całe przetwarzanie marketingowe. Dla użytkowników z Brazylii możesz sprzeciwić się przetwarzaniu marketingowemu poprzez mechanizmy rezygnacji opisane poniżej (LGPD art. 8 §5; art. 18 §2).

- **Wypis jednym kliknięciem:** każdy e-mail marketingowy zawiera link wypisu jednym kliknięciem (RFC 8058 List-Unsubscribe-Post) honorowany w czasie rzeczywistym
- **Przełącznik w aplikacji:** Ustawienia > Prywatność > Preferencje komunikacji
- **E-mail:** dpo@jynx.app

### 7.6. Prawo do Cofnięcia Zgody

Możesz cofnąć swoją zgodę na:

- **Analitykę:** Ustawienia > Prywatność > Wyłącz "Włącz Analitykę"
- **Pomiar reklam:** Ustawienia > Prywatność > Pomiar reklam (patrz §5.9)
- **Lokalizacja (odległość dopasowań):** Wyłącz przełącznik lokalizacji w aplikacji — to usuwa zapisane współrzędne — albo cofnij uprawnienie lokalizacji w ustawieniach urządzenia (patrz §5.11)
- **Powiadomienia Push:** Ustawienia urządzenia
- **Komunikacja marketingowa:** Newsletter, aktualizacje produktu, re-engagement i ankiety po dezinstalacji/odejściu — odwoływalne przez wypis jednym kliknięciem, przełącznik preferencji komunikacji w aplikacji albo dpo@jynx.app, bez kończenia konta

**Uwaga:** Tokeny OAuth (Google, Apple) są automatycznie cofane po usunięciu konta (Sekcja 7.3).

Cofnięcie nie wpływa na legalność przetwarzania wykonanego przed cofnięciem (RODO art. 7(3); LGPD art. 8 §5), a wycofanie zgody nigdy nie wymaga usunięcia konta.

### 7.7. Dodatkowe prawa LGPD (użytkownicy z Brazylii)

Oprócz praw wymienionych wyżej osoby, których dane dotyczą, znajdujące się w Brazylii, mają następujące prawa na mocy art. 18 LGPD: potwierdzenie istnienia przetwarzania; dostęp do danych; sprostowanie danych niekompletnych, nieprecyzyjnych lub nieaktualnych; anonimizację, blokowanie lub usuwanie danych zbędnych lub nadmiarowych (art. 18(VI) dotyczy danych przetwarzanych na podstawie zgody); przenoszenie danych do innego dostawcy usług lub produktów, na wniosek; usuwanie danych osobowych przetwarzanych za zgodą; oraz informacje o możliwości odmowy zgody i jej skutkach.

Prawa te możesz realizować przez Ustawienia > Prywatność albo kontaktując się z encarregado pod adresem dpo@jynx.app. Możesz też wnieść skargę do brazylijskiego organu ochrony danych — Autoridade Nacional de Proteção de Dados (ANPD) — przez https://www.gov.br/anpd.

## 8. Bezpieczeństwo Danych

Wdrażamy techniczne i organizacyjne środki bezpieczeństwa, aby chronić twoje dane:

- **Szyfrowanie:** Bezpieczna komunikacja przez HTTPS
- **Reguły Bezpieczeństwa Firebase:** Ścisła kontrola dostępu do danych Firestore
- **Uwierzytelnianie:** Bezpieczne zarządzanie sesjami przez Firebase Auth
- **Walidacja Wejścia:** Zapobieganie atakom XSS przez SecureTextInput
- **Ograniczenie Częstotliwości:** Ochrona przed nadużyciami (spamowanie wiadomości, automatyczne działania)
- **Moderacja:** System zgłaszania treści i moderacji
- **Głos w czasie rzeczywistym:** Media pokoi głosowych są szyfrowane w tranzycie przez WebRTC DTLS-SRTP — ten sam standard, którego używają główne aplikacje głosowe; sygnalizacja między aplikacją a naszymi serwerami idzie po HTTPS/TLS.

Żaden system nie jest w 100% bezpieczny. W razie naruszenia ochrony danych osobowych powiadomimy właściwy organ nadzorczy bez zbędnej zwłoki, a w miarę wykonalności w ciągu 72 godzin od stwierdzenia naruszenia mogącego powodować ryzyko dla twoich praw (RODO art. 33), i przekażemy informacje o naruszeniu użytkownikom, których to dotyczy, bez zbędnej zwłoki, gdy może ono powodować wysokie ryzyko (RODO art. 34). Dla osób w Brazylii przekażemy także istotne incydenty bezpieczeństwa do ANPD i tobie w terminie wyznaczonym przez organ (LGPD art. 48; obecnie 3 dni roboczych na mocy uchwały ANPD CD/ANPD nº 15/2024).

## 9. Międzynarodowe Przekazywanie Danych

Twoje dane mogą być przekazywane i przechowywane na serwerach znajdujących się poza twoją jurysdykcją, w tym:

- **Google Cloud / Firebase:** Infrastruktura globalna (w tym Google Analytics na stronie internetowej, patrz §10), na podstawie standardowych klauzul umownych RODO i równoważnych zabezpieczeń
- **Amazon Web Services (moderacja obrazów):** Przetwarzanie moderacji obrazów opisane w §4.8 działa w regionie AWS São Paulo (Brazylia); transfery z UE/EOG opierają się na umowie przetwarzania danych AWS włączającej standardowe klauzule umowne Komisji Europejskiej, wraz z ogólnymi zabezpieczeniami poniżej. Obraz jest przekazywany do AWS przez infrastrukturę Google Cloud Jynx (odcinek Google Cloud / Firebase powyżej)
- **Sentry:** Serwery w USA; transfery z UE/EOG opierają się na EU-US Data Privacy Framework (obowiązującym od lipca 2023, zastępującym unieważniony Privacy Shield) dla podmiotów Sentry samocertyfikowanych w ramach DPF lub na standardowych klauzulach umownych tam, gdzie DPF nie ma zastosowania
- **Dostawca usług e-mail (ESP):** Używany do dostarczania komunikacji marketingowej, re-engagementowej i ankietowej opisanej w §5.6. ESP jest wymieniony w §4.4 i działa jako podmiot przetwarzający na podstawie podpisanej umowy powierzenia przetwarzania danych
- **LiveKit (głos w czasie rzeczywistym, a gdy dostępne — udostępnianie ekranu):** LiveKit Cloud jest naszym podmiotem przetwarzającym dla mediów głosu w czasie rzeczywistym (oraz, gdy funkcja jest dostępna, udostępniania ekranu) na podstawie podpisanej umowy powierzenia przetwarzania danych (§4.5). LiveKit Cloud kieruje media globalnie: sesje są obsługiwane przez globalną infrastrukturę LiveKit bez przypinania do konkretnego regionu. Audio pokoi głosowych (i wideo udostępniania ekranu, gdy dostępne) jest kierowane w czasie rzeczywistym i nie jest nagrywane, przechowywane ani utrwalane przez Jynx ani LiveKit; LiveKit zachowuje tylko operacyjne metadane sesji opisane w §4.5. Transfery danych osobowych do LiveKit opierają się na Aneksie o przetwarzaniu danych LiveKit, który włącza warunki RODO i standardowe klauzule umowne Komisji Europejskiej dla transferów transgranicznych, wraz z ogólnymi zabezpieczeniami poniżej, które dotyczą LiveKit tak jak naszych innych podmiotów przetwarzających.
- **Meta (atrybucja reklamowa i pomiar reklam):** Udostępnianie opisane w §4.9 i §5.9 dociera do Meta Platforms Ireland Ltd. lub Meta Platforms, Inc., które przetwarza je w Stanach Zjednoczonych i innych krajach. Międzynarodowe transfery danych osobowych w związku z narzędziami Meta podlegają właściwym zabezpieczeniom umownym i mechanizmom transferu międzynarodowego. Jynx weryfikuje ich zgodność z wymogami art. 33 LGPD i przepisami ANPD.

**Zabezpieczenia (RODO, UE/EOG).** Wszystkie transfery z UE/EOG są objęte decyzją o adekwatności, EU-US Data Privacy Framework lub standardowymi klauzulami umownymi, wraz z uzupełniającymi środkami tam, gdzie wymagane.

**Zabezpieczenia (LGPD, Brazylia).** Transfery danych osobowych użytkowników z Brazylii rządzą się art. 33 LGPD:

- **Do Jynx Group we Francji (administrator):** Legalny na mocy art. 33(I) LGPD w związku z uchwałą ANPD CD/ANPD nº 32/2026 (obowiązującą od 26 stycznia 2026), uznającą Unię Europejską — w tym Francję — za zapewniającą odpowiedni poziom ochrony. Dla tego odcinka nie jest wymagany żaden dodatkowy mechanizm transferu. (Ta decyzja o adekwatności podlega ponownej ocenie przez ANPD w ciągu czterech lat; w razie zawieszenia Jynx wdroży alternatywny mechanizm z art. 33, np. standardowe klauzule umowne ANPD.)
- **Do Brevo we Francji (ESP e-mail, podmiot przetwarzający):** Legalny na mocy art. 33(I) LGPD w związku z tą samą uchwałą ANPD CD/ANPD nº 32/2026 (obowiązującą od 26 stycznia 2026), uznającą Unię Europejską — w tym Francję — za zapewniającą odpowiedni poziom ochrony. Dla tego odcinka nie jest wymagany żaden dodatkowy mechanizm transferu. (Podlega tej samej ponownej ocenie ANPD opisanej wyżej; w razie zawieszenia decyzji o adekwatności Jynx wdroży alternatywny mechanizm z art. 33, np. standardowe klauzule umowne ANPD z Brevo.)
- **Do dostawców technologii ochrony dzieci w UE (porównywanie skrótów, podmioty przetwarzające):** Objęte tą samą decyzją o adekwatności UE ANPD CD/ANPD nº 32/2026 co odcinki powyżej — dostawcy otrzymują wyłącznie nieodwracalne skróty i wykonują porównywanie w regionie UE (§4.7)
- **Do AWS w Brazylii (moderacja obrazów, podmiot przetwarzający):** Przeskok AWS Rekognition pozostaje w kraju — działa w regionie AWS São Paulo (§4.8). Obraz jest najpierw przekazywany przez infrastrukturę Google Cloud Jynx, objętą ogólnymi warunkami transferu Google Cloud / Firebase powyżej

**Przejrzystość (uchwała ANPD CD/ANPD nº 19/2024).** Informacje wymagane przez art. 17, §2 uchwały ANPD CD/ANPD nº 19/2024 są skonsolidowane w tej Polityce: forma, czas trwania i konkretny cel każdego transferu międzynarodowego oraz kraje przeznaczenia (ta sekcja i sekcje, do których się odwołuje); identyfikacja i dane kontaktowe administratora (§1); wspólne wykorzystanie danych i jego cel (§4); obowiązki podmiotów przetwarzających i przyjęte środki bezpieczeństwa (§4 i §8); oraz twoje prawa i sposób ich realizacji, w tym łatwo dostępny kanał i prawo do petycji do ANPD (§7 i §12). Pełny tekst klauzul umownych używanych do tych transferów międzynarodowych jest udostępniany na wniosek przez naszego inspektora ochrony danych (dpo@jynx.app) w ciągu 15 dni.

Notatka historyczna: roczny okres przejściowy na dostosowanie istniejących umów do SCC ANPD zakończył się 23 sierpnia 2025; nowe relacje z podmiotami przetwarzającymi, takie jak ESP, wykonują SCC przy onboardingu.

## 10. Pliki Cookie i Podobne Technologie

Nasza aplikacja mobilna nie używa plików cookie w tradycyjnym znaczeniu, ale wykorzystuje:

- **Tokeny Uwierzytelniające:** Przechowywane lokalnie w bezpieczny sposób
- **Lokalną Pamięć Podręczną:** Aby poprawić wydajność (dane profilowe, ostatnie wiadomości)

**Witryna.** Strona internetowa Jynx (jynx.app) używa Google Analytics 4 (dostarczanego przez Google) z Consent Mode v2, aby zrozumieć, jak korzysta się ze strony. Przechowywanie danych analitycznych jest domyślnie odrzucone: dopóki nie zaakceptujesz banera cookies, Google Analytics działa bez cookies i pamięci lokalnej, a Google otrzymuje tylko sygnały bez cookies i bez identyfikatorów; po akceptacji pełny pomiar jest włączany. Twój wybór — akceptacja lub odmowa — jest przechowywany lokalnie na twoim urządzeniu (localStorage przeglądarki, klucz „jynx-analytics-consent”). Wyczyszczenie pamięci przeglądarki dla jynx.app sprawia, że baner pojawi się ponownie i możesz zmienić wybór. Google jest odbiorcą powstałych danych analitycznych (patrz §9); naszych innych podmiotów przetwarzających patrz §4, a twoich praw — §7.

**Linki zaproszeń.** Gdy otworzysz link zaproszenia (jynx.app/invite/…) w przeglądarce i stukniesz przycisk pobierania App Store, witryna zapisuje ten link zaproszenia w schowku twojego urządzenia, zastępując jego poprzednią zawartość. To standardowa technika atrybucji instalacji aplikacji na iOS (który nie ma mechanizmu install-referrer): pozwala aplikacji Jynx przy pierwszym uruchomieniu zaproponować dołączenie z zaproszeniem osoby, która wysłała ci link. Witryna nigdy nie czyta twojego schowka — tylko zapisuje ten link — a aplikacja czyta go tylko raz, po zapytaniu o twoją wyraźną zgodę. Żadna inna zawartość schowka nie jest dostępna ani zbierana. Jeśli nie chcesz jej udostępniać, po prostu odrzuć zapytanie o wklejenie i dołącz bez zaproszenia.

**Polecenia i kampanie twórców.** Gdy dołączasz do Jynx z kodem zaproszenia — z linku, kodu QR albo wpisanego ręcznie — zapisujemy ten kod przy twoim koncie, aby przypisać zaproszenie osobie lub kampanii, która go udostępniła, zastosować powiązane korzyści i wykrywać fałszywe rejestracje. To przetwarzanie opiera się na naszym prawnie uzasadnionym interesie (patrz §13) i podlega naszym kontrolom antyfraudowym; po twojej stronie nic się nie zmienia, bo te same dane są zbierane niezależnie od rodzaju kodu zaproszenia. Niektóre kody zaproszeń należą też do kampanii atrybucji twórców: jeśli twój kod jest częścią takiej kampanii, może dodatkowo zaliczyć się jej na konto. Rekordy wypłat kampanii twórców są przechowywane w formie pseudonimizowanej.

**Udostępnianie ekranu (gdy dostępne).** Gdy funkcja jest dostępna, możesz udostępnić ekran urządzenia w pokoju głosowym. Udostępnianie zaczyna się tylko po nadaniu zgody systemu operacyjnego na przechwytywanie ekranu i wyraźnym potwierdzeniu w aplikacji. Wszystko widoczne na twoim ekranie — w tym powiadomienia — jest transmitowane na żywo do innych uczestników pokoju, a ty odpowiadasz za to, co udostępniasz. Udostępniane wideo to ścieżka mediów na żywo kierowana jak dźwięk głosowy przez SFU LiveKit (§4.5, §9): nie jest nagrywana ani przechowywana przez Jynx ani LiveKit i kończy się, gdy zakończysz udostępnianie.

## 11. Zmiany w Tej Polityce

Możemy aktualizować tę politykę prywatności. W przypadku istotnych zmian powiadomimy cię:

- Przez powiadomienie w aplikacji
- E-mailem na adres powiązany z twoim kontem

## 12. Kontakt

W przypadku pytań dotyczących tej polityki prywatności lub w celu skorzystania ze swoich praw:

- **E-mail:** dpo@jynx.app

**Organy Nadzorcze:** Jeśli uważasz, że twoje prawa nie zostały uszanowane, możesz złożyć skargę:

- **Użytkownicy z UE/EOG:** do CNIL (Commission Nationale de l'Informatique et des Libertés), Francja — https://www.cnil.fr
- **Użytkownicy z Brazylii:** do ANPD (Autoridade Nacional de Proteção de Dados), Brazylia — https://www.gov.br/anpd

Złożenie skargi do organu nadzorczego nie ogranicza twojego prawa do innych dostępnych środków sądowych, w tym obowiązkowych ochron konsumenta obowiązujących w twojej jurysdykcji (np. brazylijskiego Kodeksu Obrony Konsumenta, ustawa 8.078/90).

## 13. Podstawy Prawne i Zgoda

Twoje dane osobowe przetwarzamy tylko wtedy, gdy mamy legalną podstawę. Podstawy, na których polegamy, i miejsca ich opisania w tej Polityce to:

- Wykonanie umowy / świadczenie Usługi (RODO art. 6(1)(b); LGPD art. 7, V) — konto, dopasowywanie i komunikacja (§5.1–5.3)
- Prawnie uzasadniony interes (RODO art. 6(1)(f); LGPD art. 7, IX i art. 10) — bezpieczeństwo, zapobieganie oszustwom, ulepszanie usługi oraz (dla użytkowników z Brazylii) komunikacje marketingowe/re-engagementowe/ankietowe do obecnych lub niedawno nieaktywnych użytkowników, jak opisano w §5.6, każda poparta udokumentowaną oceną zbalansowania
- Obowiązek prawny (RODO art. 6(1)(c); LGPD art. 7, II) — przechowywanie dla celów prawnych (§6)
- Obowiązek prawny i prawnie uzasadniony interes (RODO art. 6(1)(c) i 6(1)(f); LGPD art. 7, II i IX) — wykrywanie treści nielegalnych i naruszających zasady, w tym analizę obrazów w ramach ochrony dzieci opisaną w §5.8 i przetwarzanie moderacji obrazów w §4.8, zapobieganie nadużyciom i omijaniu banów (§5.7) oraz wypełnianie obowiązków prawnego raportowania. Do analizy obrazów udostępnianych w wiadomościach prywatnych Jynx opiera się też na dobrowolnym wykrywaniu wykorzystywania seksualnego dzieci online dopuszczonym przez rozporządzenie (UE) 2021/1232 (wyjątek ePrivacy, w obecnie obowiązującym brzmieniu).
- Zgoda (RODO art. 6(1)(a); LGPD art. 7, I i art. 8) — analityka, jeśli ją włączyłeś, powiadomienia push oraz (dla użytkowników z UE/EOG oraz dla brazylijskich prospektów / zimnego kontaktu / cross-sell) komunikacje marketingowe zgodnie z §5.6
- Pomiar reklam (§5.9): twoja zgoda (RODO art. 6(1)(a); LGPD art. 7, I i art. 8), jeśli go włączyłeś/-aś; na Androidzie alternatywnie nasz prawnie uzasadniony interes (LGPD art. 7, IX i art. 10) dla użytkowników pokazanych przełącznik domyślnie włączony, z twoim prawem sprzeciwu w każdej chwili
- Przybliżona lokalizacja dla funkcji odległości dopasowań (§5.11): twoja zgoda (RODO art. 6(1)(a); LGPD art. 7, I i art. 8), zbierana przez uprawnienie lokalizacji systemu operacyjnego wraz z przełącznikiem lokalizacji w aplikacji; możesz ją cofnąć w każdej chwili (§7.6) — wyłączenie przełącznika usuwa zapisane współrzędne
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Zgoda musi być konkretna i świadoma.** Tam, gdzie polegamy na twojej zgodzie, jest ona wyrażana wyraźnym czynem potwierdzającym, odnosi się do określonych celów i jest zbierana osobno od akceptacji tych warunków (LGPD art. 8 §1 — cláusula destacada). Ogólne lub zbiorcze autoryzacje są nieważne na mocy LGPD art. 8 §4 i nieważne na mocy RODO art. 4(11) i art. 7. Samo korzystanie z Jynx nie stanowi zgody na marketing. Ciężar dowodu ważnej zgody spoczywa na Jynx (LGPD art. 8 §2; RODO art. 7(1)); dlatego rejestrujemy datę, wersję formularza, język i zakres każdej zbieranej zgody.

**Cofnięcie.** Każdą zgodę możesz cofnąć w każdej chwili, procedurą równie łatwą jak jej wyrażenie, która nie wymaga usunięcia konta (LGPD art. 8 §5; RODO art. 7(3)) — patrz §7.5 i §7.6. Cofnięcie nie wpływa na legalność przetwarzania wykonanego przed cofnięciem. Usunięcie konta (§7.3) pozostaje dostępne w każdej chwili, ale nie jest mechanizmem cofania konkretnej zgody.
