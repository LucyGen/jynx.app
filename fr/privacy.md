---
title: "Politique de Confidentialité"
description: "Découvrez comment Jynx protège votre vie privée et gère vos données. Notre politique de confidentialité transparente décrit nos pratiques et vos droits."
canonical: "https://jynx.app/fr/privacy.html"
locale: "fr"
dateModified: "2026-10-24"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Politique de Confidentialité

Dernière mise à jour : 24 octobre 2026

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

## 1. Introduction

Jynx ("nous", "notre", "l'application") est une plateforme sociale de gaming qui permet aux joueurs de se connecter, de former des équipes et de jouer ensemble.

### Informations Légales :

- **Entité Légale :** Jynx Group
- **Contact Responsable de la Protection des Données :** dpo@jynx.app
- **Juridiction UE / EEE :** France, Union européenne — la présente Politique de Confidentialité est conforme au règlement (UE) 2016/679 (RGPD) et à la directive 2002/58/CE (ePrivacy), telle que transposée en France.
- **Juridiction brésilienne :** La présente Politique de Confidentialité est également conforme à la loi brésilienne nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), qui s'applique au traitement par Jynx des données personnelles des personnes concernées situées au Brésil au titre de l'art. 3 de la LGPD, indépendamment du fait que Jynx n'ait aucun établissement au Brésil.
- **Publication (LCEN) :** Directeur de la publication : Antoine Haie. Ce site (jynx.app) est hébergé par GitHub Pages et distribué via le réseau de diffusion de contenu (CDN) Cloudflare.

Pour l'application de la LGPD, Jynx Group est le responsable de traitement (controlador) de vos données personnelles. Notre Délégué à la Protection des Données agit en qualité d'encarregado (DPO) et peut être contacté à dpo@jynx.app pour toute demande relative à la LGPD. Bien que Jynx puisse être qualifié de pequeno agente de tratamento de dados pessoais (agent de traitement de petite envergure) au titre de la résolution CD/ANPD nº 2/2022, ce qui l'exonère de la désignation obligatoire d'un encarregado, Jynx maintient volontairement ce canal de communication public.

Cette politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos données personnelles lorsque vous utilisez notre application.

## 2. Âge Minimum et Vérification

Notre application est réservée aux utilisateurs âgés de 18 ans et plus.

Lors de la création de votre compte, nous vous demandons de fournir votre date de naissance. Si vous avez moins de 18 ans, vous ne pourrez pas créer de compte ou utiliser nos services.

Marketing destiné aux mineurs. Jynx est réservé aux utilisateurs âgés de 18 ans et plus et applique un contrôle d'âge automatisé. Si nous identifions ultérieurement qu'un utilisateur a moins de 18 ans (LGPD art. 14 ; RGPD art. 8), nous clôturons immédiatement son compte, l'excluons de toutes les communications marketing, de ré-engagement et d'enquête, et supprimons les données marketing associées. Nous ne collectons jamais sciemment un consentement marketing auprès d'un mineur.

## 3. Données Collectées

### 3.1. Données d'Inscription et de Profil

Nous collectons les informations suivantes lors de la création et de la gestion de votre compte :

#### Informations d'Authentification :

- Email (pour les comptes email/mot de passe)
- Nom d'utilisateur/pseudo
- Photo de profil (optionnelle)
- Identifiants de connexion sociale (Google, Apple) si vous utilisez ces méthodes
- Identifiants Discord (votre identifiant d'utilisateur Discord) si vous choisissez de connecter votre compte Discord pour l'intégration Discord — la connexion utilise l'OAuth Discord en mode identification seule et ne constitue pas une méthode de connexion ; vous pouvez la déconnecter à tout moment
- Navigation en mode invité (lorsque disponible) : vous pouvez explorer les parties publiques de Jynx sans créer de compte ; en mode invité, nous traitons uniquement un identifiant d'invité stocké localement et les données techniques du §3.3 nécessaires au fonctionnement de l'application — aucun profil n'est créé et aucune donnée de compte n'est conservée. Pour matcher, discuter ou rejoindre des communautés, vous devez créer un compte

#### Informations de Profil :

- Date de naissance (pour vérification d'âge)
- Pays et fuseau horaire
- Langues parlées
- Biographie (optionnelle)
- Préférences de jeu et disponibilités
- Identifiant unique (généré automatiquement pour découverte privée d'amis)

### 3.2. Données de Jeu

Pour vous aider à trouver des coéquipiers compatibles, nous collectons :

#### Profils de Jeu :

- Jeux auxquels vous jouez
- Niveaux, rangs et statistiques de jeu
- Champions/personnages favoris
- Style de jeu

#### Intégration API Riot Games :

Nous récupérons depuis l'API Riot Games (avec votre consentement) :

- Nom d'invocateur et Riot ID
- Rang et historique de matchs (League of Legends, Valorant, etc.)
- Statistiques de champions
- Historique de matchs récents

**Raison de la Collecte :** Afficher votre profil de joueur et améliorer le matching avec d'autres joueurs.

### 3.3. Données d'Utilisation et Techniques

Nous collectons automatiquement certaines données techniques :

#### Analytiques et Performance :

- **Firebase Performance Monitoring :** Temps de démarrage de l'app, fluidité de l'interface
- **Sentry :** Rapports d'erreurs et de performance (avec anonymisation des données personnelles)
- **Firebase Crashlytics :** Rapports de crash

#### Informations de l'Appareil :

- Type et modèle d'appareil
- Version du système d'exploitation
- Version de l'application
- Identifiants d'appareil et signaux d'intégrité de l'appareil (voir §5.7)

#### Comportement Utilisateur :

- Écrans visités et fonctionnalités utilisées
- Temps passé dans l'application
- Interactions avec l'interface

Vous pouvez désactiver la collecte de données analytiques dans Paramètres > Confidentialité > "Activer les Analytiques".

### 3.4. Données de Communication

- **Messages :** Messages dans les chats communautaires, messages privés entre utilisateurs, historique de conversations
- **Notifications :** Jetons FCM (Firebase Cloud Messaging) pour notifications push

### 3.5. Contenu Généré par l'Utilisateur

- Photos téléchargées (photos de profil, photos supplémentaires) and images shared in direct messages
- Rapports de sécurité et modération
- Préférences cosmétiques (avatars, badges)

### 3.6. Données audio des salons vocaux

Jynx propose des salons vocaux en temps réel qui vous permettent de parler avec les autres participants pendant que vous jouez. L'audio des salons vocaux n'est capté à partir de votre micro qu'après que vous avez accordé l'autorisation de micro du système d'exploitation et rejoint explicitement un salon ; aucun audio n'est capté avant ces deux étapes.

Jynx n'active pas les fonctions d'enregistrement, de transcription, d'Agent Insights ou d'Egress de LiveKit. L'audio des salons vocaux est acheminé en temps réel par la SFU (Selective Forwarding Unit) de LiveKit et n'est ni enregistré, ni stocké, ni conservé par Jynx ni par LiveKit.

Lorsque vous parlez dans un salon vocal, votre audio est transmis en temps réel aux autres participants de ce salon, de la même manière que la voix fonctionne dans les autres applications de chat vocal.

L'audio des salons vocaux est traité avec votre consentement : vous accordez l'autorisation de micro et rejoignez explicitement un salon avant toute capture audio. Vous pouvez retirer votre consentement à tout moment en quittant le salon ou en révoquant l'autorisation de micro dans les paramètres de votre appareil.

## 4. Services Tiers et Partage de Données

### 4.1. Services Firebase (Google)

Nous utilisons les services Firebase suivants, tous conformes au RGPD :

- **Firebase Authentication :** Gestion sécurisée des comptes utilisateurs
- **Cloud Firestore :** Stockage de votre profil et données de jeu
- **Firebase Storage :** Hébergement de vos images de profil
- **Cloud Functions :** Exécution sécurisée de la logique backend
- **Firebase Cloud Messaging :** Notifications push
- **Firebase App Check :** Protection contre les abus et bots
- **Firebase Performance Monitoring :** Surveillance des performances de l'app
- **Firebase Crashlytics :** Rapports de crash

**Politique de Confidentialité Firebase :** https://firebase.google.com/support/privacy

### 4.2. Sentry (Surveillance des Erreurs)

Nous utilisons Sentry pour le suivi des erreurs et performances. Les données collectées incluent :

- Traces d'erreurs
- Contexte technique (OS, version de l'app)

**Politique de Confidentialité Sentry :** https://sentry.io/privacy/

### 4.3. API Riot Games

Lorsque vous liez votre compte Riot Games, nous récupérons vos statistiques de jeu via l'API officielle Riot Games. Ces données sont utilisées uniquement pour afficher votre profil et améliorer le matching.

**Politique de Confidentialité Riot Games :** https://www.riotgames.com/en/privacy-notice

### 4.4. Fournisseur de services d'email (communications marketing et enquêtes)

Pour acheminer les emails marketing, de ré-engagement et d'enquête de désinstallation/churn décrits au §5.6, Jynx recourt à un fournisseur de services d'email tiers (ESP) agissant en qualité de sous-traitant (RGPD art. 28 ; LGPD art. 39 — operador). L'ESP traite votre adresse email et des données de livraison minimales (par ex., le statut d'envoi/de rebond) uniquement sur instructions documentées de Jynx, dans le cadre d'un accord de traitement des données signé.

- **Identité, rôle et localisation de l'ESP :** Brevo (Brevo SAS, Paris, France) — notre fournisseur de services d'email et sous-traitant de données dans le cadre d'un accord de traitement des données signé. Politique de Confidentialité Brevo : https://www.brevo.com/legal/privacypolicy/
- **Sous-traitants :** La liste actuelle des sous-traitants de Brevo est publiée dans son accord de traitement des données (Conditions d'Utilisation) : https://www.brevo.com/legal/termsofuse/
- **Base des transferts internationaux :** Voir §9. Brevo a son siège en France (UE). Les transferts vers Brevo bénéficient donc du régime de protection de l'UE au titre du RGPD et, pour les utilisateurs brésiliens, de la décision d'adéquation de l'ANPD pour l'UE (résolution nº 32/2026) — aucune SCC ni mécanisme supplémentaire n'est requis.

Nous ne vendons pas vos données personnelles. Aucun pixel de suivi ni analytique cachée n'est intégré dans les emails marketing sans base légale distincte divulguée au §5.6.

### 4.5. LiveKit Cloud (voix en temps réel)

Jynx utilise LiveKit Cloud en tant que sous-traitant (RGPD art. 28 ; LGPD art. 39 — operador) dans le cadre d'un accord de traitement des données signé, pour exploiter l'infrastructure média en temps réel qui achemine l'audio des salons vocaux entre les participants. LiveKit exploite la SFU (Selective Forwarding Unit) qui transmet le flux audio de chaque participant aux autres en temps réel.

Jynx n'active pas les fonctions d'enregistrement, de transcription, d'Agent Insights ou d'Egress de LiveKit. L'audio des salons vocaux est acheminé en temps réel par la SFU (Selective Forwarding Unit) de LiveKit et n'est ni enregistré, ni stocké, ni conservé par Jynx ni par LiveKit.

LiveKit conserve toutefois des métadonnées opérationnelles de session — telles que les identités des participants, les identifiants de salon, les horaires de connexion et les métriques de qualité — à des fins de facturation, de prévention des abus et d'exploitation, conformément à son addendum de traitement des données. Ces métadonnées ne sont pas utilisées pour vous identifier hors de la plateforme ni à des fins publicitaires.

### 4.6. App Store / Google Play (achats intégrés et abonnements)

Les abonnements Jynx+ et les Founder Packs sont vendus dans l'application via l'App Store d'Apple et Google Play, qui agissent en qualité de marchands pour ces achats (voir les Conditions d'Utilisation, section 8). Les données des moyens de paiement (par ex. les coordonnées bancaires) sont collectées et traitées uniquement par Apple/Google selon leurs politiques de confidentialité respectives ; Jynx ne collecte, ne reçoit ni ne stocke aucune donnée de moyen de paiement.

Via notre prestataire de facturation RevenueCat (sous-traitant agissant dans le cadre d'un accord de traitement des données signé ; RGPD art. 28 ; LGPD art. 39 — operador), Jynx reçoit uniquement les informations nécessaires à la délivrance de votre achat : l'état de votre abonnement et de vos droits (par ex. si Jynx+ est actif et sa date de renouvellement), le palier de Founder Pack acheté et les identifiants de transaction. Ces données sont conservées le temps nécessaire à la fourniture du Service et au respect des obligations comptables (§6), et servent uniquement à accorder et maintenir vos droits et à prévenir la fraude. RevenueCat est établie aux États-Unis ; les transferts de données personnelles vers RevenueCat reposent sur l'EU-US Data Privacy Framework (pour les entités RevenueCat certifiées au DPF) ou sur des clauses contractuelles types lorsque le DPF ne s'applique pas. Le mécanisme de transfert applicable aux données des utilisateurs brésiliens est consigné dans notre registre des activités de traitement (voir §9).

- Politique de confidentialité d'Apple : https://www.apple.com/legal/privacy/
- Politique de confidentialité de Google : https://policies.google.com/privacy
- Politique de confidentialité de RevenueCat : https://www.revenuecat.com/privacy

### 4.7. Fournisseurs technologiques spécialisés de protection de l'enfance

Afin de contribuer à la détection du matériel connu d'abus sexuels sur enfants (voir §5.8), Jynx travaille avec des fournisseurs technologiques spécialisés de protection de l'enfance agissant en qualité de sous-traitants (RGPD art. 28 ; LGPD art. 39 — operador). Ces fournisseurs ne reçoivent que des empreintes irréversibles dérivées des images — jamais les images elles-mêmes — et effectuent la correspondance d'empreintes dans la région UE, uniquement pour la détection de protection de l'enfance sur instructions documentées de Jynx. La dérivation de l'empreinte à partir de l'image se fait au sein de la propre infrastructure Google Cloud de Jynx (voir §9).

### 4.8. Fournisseur cloud de modération d'images (AWS)

Pour garantir la sécurité de la plateforme, les photos de profil et de galerie sont filtrées par un service automatisé de classification d'images — Amazon Rekognition, fourni par Amazon Web Services (AWS), agissant en qualité de sous-traitant (RGPD art. 28 ; LGPD art. 39 — operador). À cette fin, l'image est transmise à AWS et analysée par apprentissage automatique afin de détecter un contenu inapproprié (par exemple de la nudité ou du matériel explicite) ; le résultat est une étiquette générée par machine et un score de confiance, traités selon notre processus de modération (voir la Politique de Protection de l'Enfance). Ce traitement est utilisé uniquement pour la modération du contenu et la sécurité — jamais pour le profilage, la publicité ou toute autre finalité. AWS traite ces données dans la région AWS configurée pour le service (actuellement São Paulo, Brésil) ; les garanties de transfert du §9 s'appliquent. Comme pour le reste du Service, l'image est prise en charge par la propre infrastructure Google Cloud de Jynx avant d'être relayée vers AWS (voir §9).

### 4.9. Attribution publicitaire (Meta, Apple ATT, Google Play Install Referrer)

Pour mesurer si les installations de notre application proviennent de nos actions marketing, nous utilisons des technologies publicitaires et d'attribution, avec votre consentement lorsque celui-ci est requis : le SDK Meta (Facebook) App Events (Meta Platforms Ireland) et l'API Google Play Install Referrer. Sur les appareils Apple, le SDK Meta n'est initialisé qu'après votre autorisation de suivi (App Tracking Transparency, ATT) ; sans cette autorisation, aucun identifiant publicitaire (IDFA) n'est collecté et le SDK n'est pas initialisé. Sur Android, l'API Google Play Install Referrer nous indique si votre installation provient d'une fiche du store ou d'un lien de campagne, et l'identifiant publicitaire (GAID) est utilisé conformément aux réglages d'identifiant publicitaire de votre appareil. Les événements envoyés à Meta se limitent à l'activation de l'application et aux métadonnées d'événements (y compris, lorsque vous êtes connecté, votre identifiant d'utilisateur applicatif, effacé du SDK lorsque vous vous déconnectez), traitées selon les instructions documentées de Jynx à des fins d'attribution et de mesure de campagne.

Meta Platforms Ireland traite ces données en qualité de sous-traitant pour la finalité d'attribution ci-dessus ; Meta Platforms, Inc. peut en outre agir en qualité de responsable de traitement indépendant pour ses propres finalités légitimes selon ses propres conditions (conditions de traitement des données de Meta et sa politique de confidentialité : https://www.facebook.com/privacy/policy). Les transferts vers les États-Unis reposent sur l'EU-US Data Privacy Framework pour les entités Meta certifiées ou sur des clauses contractuelles types (§9). Vous pouvez refuser ou révoquer l'autorisation ATT, ou réinitialiser votre identifiant publicitaire, à tout moment dans les réglages de votre appareil ; le refus ne limite pas votre utilisation de Jynx.

### 4.10. Programme Créateur (partenaire) — KYC et paiements

Si vous rejoignez le programme Jynx Créateur (partenaire), nous traitons les informations d'identité, fiscales et de paiement exigées par le programme : votre CPF ou CNPJ (validé dans l'application), le canal de paiement que vous choisissez — PayPal (identifié par e-mail), virement Wise (Brésil) ou clé Pix — et vos relevés de performance de campagne (inscriptions attribuées ; voir §10 parrainages). Les registres de paiement sont conservés sous forme pseudonymisée (§10). Le programme est régi par les Conditions de parrainage Créateur et le Mandat d'autofacturation versionnés que vous acceptez lors de l'adhésion (voir les Conditions d'Utilisation §15).

Les paiements sont exécutés par l'établissement de paiement opérant le canal choisi : PayPal ou Wise reçoivent les ordres de virement et les données nécessaires pour vérifier votre identité, prévenir la fraude et satisfaire leurs obligations réglementaires, agissant selon leurs propres conditions en qualité d'établissements de paiement indépendants (leurs politiques de confidentialité sont publiées sur leurs sites) ; un paiement Pix est un virement initié par Jynx Group vers la clé Pix que vous avez fournie. Les garanties applicables en matière de transfert international sont décrites au §9.

### 4.11. Fonctionnalités d'IA

**Génération d'avatars.** Le quiz d'avatar peut générer des propositions d'avatars stylisés pour votre profil. La génération s'exécute actuellement sur Cloudflare Workers AI (Cloudflare, Inc., sous-traitant) selon les instructions documentées de Jynx ; si le moteur sous-jacent change, la présente section sera mise à jour avant ou avec le changement. Les entrées sont vos réponses au quiz et vos préférences de style de jeu — jamais vos photos — ainsi que votre identifiant d'utilisateur ; les propositions sont renvoyées à l'application sous forme d'images PNG ou WebP et conservées jusqu'à 30 jours afin que vous puissiez les retrouver, puis supprimées. Les images générées sont synthétiques — ce ne sont pas des photographies de vous — et sont soumises à la même modération que les autres images (§4.8).

**Messages du compagnon (Quimera).** Certains messages du compagnon applicatif sont composés ou enrichis par un système d'IA générative (Google Gemini, sous-traitant). Lorsqu'un message est généré par IA, il est identifié comme tel ; vous êtes toujours informé lorsque vous interagissez avec un élément généré par IA, conformément à l'art. 50 §1 du règlement européen sur l'IA.

## 5. Utilisation des Données

Nous utilisons vos données pour :

### 1. Fournir Nos Services :

- Créer et gérer votre compte
- Vous permettre de vous connecter avec d'autres joueurs
- Faciliter la création d'équipes et l'organisation de sessions de jeu

### 2. Personnalisation :

- Recommander des coéquipiers compatibles (matching basé sur le jeu, le rang, le style)
- Afficher du contenu pertinent

### 3. Communication :

- Vous envoyer des notifications importantes (matchs trouvés, messages reçus)

Les emails marketing, de ré-engagement et d'enquête de désinstallation/churn sont décrits séparément au §5.6 Communications marketing et ne relèvent pas de cette catégorie transactionnelle.

### 4. Amélioration du Service :

- Analyser l'utilisation pour améliorer les fonctionnalités
- Identifier et corriger les bugs
- Optimiser les performances
- Générer des propositions d'avatars et des brouillons de messages du compagnon à l'aide de sous-traitants d'IA (§4.11)

### 5. Sécurité et Conformité :

- Prévenir la fraude et les abus
- Appliquer nos conditions d'utilisation
- Respecter nos obligations légales

Nous pouvons publier des statistiques agrégées et anonymisées dérivées de l'utilisation de l'application (par exemple, la manière dont les joueurs forment des duos). Ces statistiques n'identifient jamais des utilisateurs individuels.

### 5.6. Communications marketing

En plus des notifications opérationnelles décrites au §5.3, nous pouvons vous envoyer des communications marketing et de ré-engagement par email, notamment : des mises à jour produit et annonces de fonctionnalités relatives à l'application Jynx ; des newsletters ; des messages de ré-engagement vous invitant à revenir sur l'application ; et de courtes enquêtes de feedback de désinstallation ou de churn (par ex., "Pourquoi avez-vous cessé d'utiliser Jynx ?"). Ces communications sont distinctes des notifications transactionnelles/de service.

**Base légale — utilisateurs de l'Union européenne / EEE (RGPD + ePrivacy).** Les emails marketing et de ré-engagement adressés aux utilisateurs de l'UE/EEE sont envoyés sur la base de votre consentement opt-in explicite préalable (directive ePrivacy art. 13(1), transposée en France par l'article L. 34-5 du Code des postes et des communications électroniques ; RGPD art. 6(1)(a) et art. 7). Suite au lancement des abonnements payants (Jynx+) et des achats intégrés ponctuels (Founder Packs), le Service est désormais un service onéreux, et ces achats constituent une "vente" au sens de l'arrêt CJUE C-654/23 (13 novembre 2025). L'exception dite du "soft opt-in" de l'ePrivacy art. 13(2) nous est donc en principe disponible pour des produits et services similaires destinés aux clients existants. Par posture de prudence, nous continuons toutefois de nous appuyer sur votre consentement opt-in explicite préalable ; nous ne commencerons à nous appuyer sur la base soft opt-in qu'à l'issue d'une réévaluation documentée, consignée dans nos registres des activités de traitement et accompagnée d'une notice mise à jour qui vous sera notifiée.

**Base légale — utilisateurs brésiliens (LGPD).** Pour les utilisateurs brésiliens, les communications marketing et de ré-engagement reposent sur deux bases légales alternatives :

1. **Consentement (LGPD art. 7, I et art. 8)** — recueilli sous la forme d'un opt-in distinct, non précoché et propre à chaque finalité, à l'inscription ou dans l'application, consigné avec la date, la version du formulaire et la langue ; vous pouvez le retirer à tout moment, gratuitement, sans perdre l'accès au Service (art. 8 §5). Le consentement est la base utilisée pour toute communication destinée à des prospects, à la prospection à froid ou à des offres de vente croisée/partenaires au-delà de l'application Jynx elle-même.
2. **Intérêt légitime (LGPD art. 7, IX, précisé par l'art. 10)** — utilisé uniquement pour des utilisateurs existants ou récemment inactifs recevant des messages de ré-engagement, des mises à jour produit concernant la même application Jynx ou une seule courte enquête de feedback churn/désinstallation. Avant de s'appuyer sur cette base, Jynx réalise et documente une évaluation d'intérêt légitime (LIA) suivant le test en trois phases du Guide de l'intérêt légitime de l'ANPD (2 février 2024) : (i) finalité, (ii) nécessité et (iii) mise en balance et garanties. La LIA consigne la relation antérieure, les attentes raisonnables de l'utilisateur, la finalité, le moyen le moins intrusif retenu et le canal d'opposition. L'intérêt légitime n'est pas utilisé pour les emails à froid/non sollicités, la vente croisée sans lien, les listes achetées ou l'envoi persistant de messages à des utilisateurs partis après la fin clairement établie de la relation.

**Droit d'opposition / opt-out.** Les utilisateurs brésiliens peuvent à tout moment s'opposer à ce traitement et se désinscrire via les mécanismes des §7.5 et §7.6 (désinscription en un clic dans chaque email, ou réglage des préférences de communication dans l'application), sans coût et sans clôture du compte. Nous traitons les demandes d'opt-out en temps réel. Le Code brésilien de défense du consommateur (CDC, loi 8.078/90, en particulier l'art. 39 III) interdit les messages commerciaux non sollicités ou abusifs ; nous respectons donc strictement les opt-out et appliquons des plafonds de fréquence, car un envoi persistant ou ignorant les opt-out peut être qualifié de pratique abusive.

**Enquêtes de désinstallation / churn.** Chaque fois que cela est opérationnellement possible, nous posons les questions de désinstallation/churn dans l'application au moment de la désinstallation (aucune conservation d'email requise). Lorsqu'une enquête par email est envoyée, elle ne contient aucun contenu promotionnel ou de ré-engagement ; nous envoyons au maximum une (1) enquête par utilisateur dans un délai d'environ 60 jours après la suppression du compte ou la désinstallation ; l'adresse email est ensuite supprimée ou anonymisée conformément au §6 ; et les utilisateurs ayant soumis une demande d'effacement / droit à l'oubli (§7.3) ne sont jamais recontactés et sont placés sur une liste de suppression permanente (voir §6 et les Conditions d'Utilisation §7.2).

**Tracking des emails.** Les emails marketing n'intègrent pas de pixels de suivi ni d'analytique cachée traitant des données personnelles sans base légale distincte. Si un tracking d'ouverture/de clic est introduit, il sera divulgué ici et fondé sur le consentement (LGPD art. 8 ; ePrivacy art. 5(3)), conformément aux orientations de l'ANPD sur les technologies de suivi (18 octobre 2022).

**Fréquence.** Les emails marketing sont soumis à des plafonds de fréquence internes ; vous pouvez les réduire ou les désactiver à tout moment via le réglage des préférences de communication dans l'application ou en cliquant sur se désabonner dans n'importe quel message.

### 5.7. Sécurité de la communauté et contournement de bannissement

Afin de protéger notre communauté contre les abus, nous utilisons des identifiants d'appareil et des signaux d'intégrité de l'appareil pour détecter et empêcher les tentatives de contournement d'une suspension ou d'un bannissement. Si nous associons un appareil à un compte banni, cet appareil peut être empêché de créer de nouveaux comptes ou de se connecter. Si vous pensez qu'une erreur a été commise, vous pouvez faire appel en contactant support@jynx.app.

Les signaux d'intégrité de l'appareil sont collectés et évalués avec l'assistance de Talsec freeRASP, une bibliothèque anti-falsification et d'intégrité d'appareil intégrée à l'application. freeRASP fonctionne sur votre appareil : il détecte localement des menaces telles que les appareils rootés, le hooking à l'exécution et les chargeurs d'amorçage déverrouillés, et nous signale ses constats via notre propre prestataire de supervision d'erreurs (Sentry, §4.2) à des fins de prévention des abus ; il n'envoie vos données à aucun service opéré par Talsec.

### 5.8. Analyse d'images de protection de l'enfance

Afin de contribuer à la protection des enfants et de respecter nos obligations légales de signalement, Jynx utilise des systèmes automatisés pour analyser les images partagées en messages privés en comparant les empreintes dérivées de ces images à des bases de matériel connu d'abus sexuels sur enfants. Pour cette analyse, les images elles-mêmes ne sont pas transmises à des tiers — seules les empreintes irréversibles le sont (voir §4.7). Les photos de profil sont filtrées séparément, par le traitement de modération d'images décrit au §4.8. Cette analyse existe uniquement pour la détection de protection de l'enfance et nos obligations légales de signalement ; elle n'est utilisée ni pour le profilage, ni pour la publicité, ni pour aucune autre finalité. Les correspondances sont traitées comme décrit dans notre [Politique de Protection de l'Enfance](/child-safety.html).

## 6. Conservation des Données

### 6.1. Périodes de Conservation

- **Données de Profil :** Conservées tant que votre compte est actif
- **Logs et Analytiques :** Firebase Analytics : 14 mois (politique Firebase)
- **Adresses email marketing (fondées sur le consentement) :** Conservées tant que vous ne vous êtes pas désinscrit et n'avez pas supprimé votre compte, plus un enregistrement haché sur la liste de suppression (voir ci-dessous) afin de garantir que nous ne vous recontactons pas
- **Adresses email des enquêtes de désinstallation / churn :** Conservées au maximum 60 jours après l'envoi de l'enquête (ou, si aucune enquête n'est envoyée, 60 jours après la désinstallation/la suppression), au-delà de quoi l'adresse est supprimée ou irréversiblement anonymisée. Au plus un (1) email d'enquête est envoyé par utilisateur
- **Ré-engagement des comptes récemment inactifs (base d'intérêt légitime LGPD, utilisateurs brésiliens uniquement) :** Conformément aux orientations de la CNIL et au test des attentes raisonnables, Jynx peut utiliser l'adresse email d'un compte récemment inactif (hors demande d'effacement) à des fins de ré-engagement pendant une durée pouvant aller jusqu'à 3 ans après la dernière interaction significative, au-delà de quoi elle est supprimée ou anonymisée

### 6.2. Suppression des Données

Vous pouvez demander la suppression de votre compte à tout moment (voir Section 7).

**Conservation Légale :** Certaines données peuvent être conservées plus longtemps pour respecter nos obligations légales (par ex., rapports de sécurité, transactions financières).

Lorsque vous supprimez votre compte, nous purgeons votre adresse email de notre CRM marketing et de notre fournisseur de services d'email. Si vous exercez le droit à l'effacement (§7.3 / RGPD art. 17 / LGPD art. 18(VI) pour les données fondées sur le consentement), votre adresse email est ajoutée à une liste de suppression hachée permanente afin de ne jamais être réutilisée à des fins marketing, de ré-engagement ou d'enquête — y compris en protection contre la réimportation via une liste tierce ou achetée. Note : au titre de la LGPD, la suppression de l'art. 18(VI) s'applique aux données traitées sur la base du consentement ; les données traitées sur la base de l'intérêt légitime (art. 7 IX) relèvent quant à elles du principe de limitation des finalités (art. 6 II et §2) et de votre droit de demander l'interruption du traitement (art. 18 §2).

## 7. Vos Droits (RGPD)

Selon le RGPD, vous disposez des droits suivants :

### 7.1. Droit d'Accès

Vous pouvez demander une copie de toutes les données que nous détenons sur vous.

**Comment exercer ce droit :** Paramètres > Confidentialité > "Exporter Mes Données"

Le processus génère un fichier JSON contenant toutes vos données (profil, messages, statistiques, etc.). Le lien de téléchargement est valide 7 jours.

### 7.2. Droit de Rectification

Vous pouvez modifier vos informations de profil à tout moment depuis l'application (nom d'utilisateur, bio, préférences, etc.).

### 7.3. Droit à l'Effacement ("Droit à l'Oubli")

Vous pouvez demander la suppression de votre compte.

**Comment exercer ce droit :** Paramètres > Zone de Danger > "Supprimer Mon Compte"

#### Processus de Suppression Automatisé :

1. Confirmation en deux étapes pour éviter les suppressions accidentelles
2. Anonymisation immédiate de vos données personnelles (Firestore)
3. Suppression de votre compte Firebase Authentication (révoque automatiquement tous les jetons OAuth)
4. Un ID anonymisé est fourni comme référence
5. Option de supprimer vos messages et contenu généré

**Important :** La suppression est irréversible. Certaines données anonymisées peuvent être conservées à des fins statistiques (conforme RGPD).

**Demandes de Suppression Manuelle :** Pour des demandes de suppression de données spécifiques (par ex., supprimer uniquement les messages d'une communauté spécifique, supprimer les images Storage, ou autres cas particuliers), veuillez contacter notre Délégué à la Protection des Données à dpo@jynx.app. Nous traiterons les demandes manuelles sous 30 jours comme requis par le RGPD.

### 7.4. Droit à la Portabilité des Données

L'export de données (Section 7.1) vous permet de récupérer vos données dans un format structuré et lisible par machine (JSON).

### 7.5. Droit d'Opposition

Vous pouvez vous opposer au traitement de vos données à des fins de marketing direct.

- **Désinscription en un clic :** chaque email marketing inclut un lien de désinscription en un clic (RFC 8058 List-Unsubscribe-Post) honoré en temps réel
- **Réglage dans l'application :** Paramètres > Confidentialité > Préférences de Communication
- **Email :** dpo@jynx.app

### 7.6. Droit de Retirer le Consentement

Vous pouvez retirer votre consentement pour :

- **Analytiques :** Paramètres > Confidentialité > Désactiver "Activer les Analytiques"
- **Notifications Push :** Paramètres de l'appareil
- **Communications marketing :** Newsletter, mises à jour produit, ré-engagement et enquêtes de désinstallation/churn — retirable via la désinscription en un clic, le réglage des préférences de communication dans l'application, ou dpo@jynx.app, sans clôturer votre compte

**Note :** Les jetons OAuth (Google, Apple) sont automatiquement révoqués lorsque vous supprimez votre compte (Section 7.3).

Le retrait ne remet pas en cause la licéité du traitement effectué avant celui-ci (RGPD art. 7(3) ; LGPD art. 8 §5), et retirer votre consentement ne vous oblige jamais à supprimer votre compte.

### 7.7. Droits LGPD supplémentaires (utilisateurs brésiliens)

En plus des droits ci-dessus, les personnes concernées situées au Brésil disposent des droits suivants au titre de la LGPD art. 18 : confirmation de l'existence d'un traitement ; accès aux données ; rectification des données incomplètes, inexactes ou obsolètes ; anonymisation, blocage ou élimination des données inutiles ou excessives (l'art. 18(VI) s'applique aux données traitées sur la base du consentement) ; portabilité vers un autre service ou fournisseur de produit, sur demande ; suppression des données personnelles traitées avec consentement ; et information sur la possibilité de refuser le consentement et sur les conséquences d'un tel refus.

Vous pouvez exercer ces droits via Paramètres > Confidentialité ou en contactant l'encarregado à dpo@jynx.app. Vous pouvez également introduire une réclamation auprès de l'autorité brésilienne de protection des données — l'Autoridade Nacional de Proteção de Dados (ANPD) — à l'adresse https://www.gov.br/anpd.

## 8. Sécurité des Données

Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :

- **Chiffrement :** Communication sécurisée via HTTPS
- **Règles de Sécurité Firebase :** Contrôle d'accès strict aux données Firestore
- **Authentification :** Gestion sécurisée des sessions via Firebase Auth
- **Validation des Entrées :** Prévention des injections XSS via SecureTextInput
- **Limitation de Débit :** Protection contre les abus (messages spam, actions automatisées)
- **Modération :** Système de signalement et modération du contenu
- **Voix en temps réel :** Les médias des salons vocaux sont chiffrés en transit via WebRTC DTLS-SRTP, le même standard utilisé par les principales applications vocales ; la signalisation entre l'application et nos serveurs passe par HTTPS/TLS.

Aucun système n'est sûr à 100 %. En cas de violation de données personnelles, nous notifierons l'autorité de contrôle compétente sans retard injustifié et, le cas échéant, dans un délai de 72 heures après avoir pris connaissance d'une violation susceptible d'engendrer un risque pour vos droits (RGPD art. 33), et nous communiquerons la violation aux personnes concernées sans retard injustifié lorsqu'elle est susceptible d'engendrer un risque élevé pour vous (RGPD art. 34). Pour les personnes au Brésil, nous communiquerons également les incidents de sécurité pertinents à l'ANPD et à vous dans le délai fixé par l'autorité (LGPD art. 48 ; actuellement 3 jours ouvrables au titre de la résolution ANPD CD/ANPD nº 15/2024).

## 9. Transferts Internationaux de Données

Vos données peuvent être transférées et stockées sur des serveurs situés hors de l'Union Européenne, notamment :

- **Google Cloud / Firebase :** Utilise une infrastructure mondiale avec conformité RGPD
- **Amazon Web Services (modération d'images) :** Le traitement de modération d'images décrit au §4.8 s'exécute dans la région AWS de São Paulo (Brésil) ; les transferts depuis l'UE/EEE reposent sur l'accord de traitement de données d'AWS incorporant les clauses contractuelles types de la Commission européenne, conjointement avec les garanties générales ci-dessous. L'image est relayée vers AWS via l'infrastructure Google Cloud de Jynx (le volet Google Cloud / Firebase ci-dessus)
- **Sentry :** Serveurs basés aux États-Unis avec conformité Privacy Shield
- **Fournisseur de services d'email (ESP) :** Utilisé pour acheminer les communications marketing, de ré-engagement et d'enquête décrites au §5.6. L'ESP est nommé au §4.4 et agit en qualité de sous-traitant dans le cadre d'un accord de traitement des données signé
- **LiveKit (voix en temps réel et partage d'écran lorsque disponible) :** LiveKit Cloud est notre sous-traitant pour les médias en temps réel (et, lorsque la fonctionnalité est disponible, le partage d'écran) dans le cadre d'un accord de traitement des données signé (§4.5). LiveKit Cloud achemine les médias à l'échelle mondiale : les sessions sont servies par l'infrastructure mondiale de LiveKit, sans rattachement à une région précise. L'audio des salons vocaux (et la vidéo de partage d'écran lorsque disponible) est acheminé en temps réel et n'est ni enregistré, ni stocké, ni conservé par Jynx ou LiveKit ; LiveKit ne conserve que les métadonnées opérationnelles de session décrites au §4.5. Les transferts de données personnelles vers LiveKit reposent sur l'addendum de traitement des données de LiveKit, qui incorpore les termes du RGPD et les clauses contractuelles types de la Commission européenne pour les transferts hors UE, conjointement avec les garanties générales ci-dessous, qui s'appliquent à LiveKit comme à nos autres sous-traitants.

**Garanties (RGPD, UE/EEE).** Tous les transferts depuis l'UE/EEE sont couverts par une décision d'adéquation, l'EU-US Data Privacy Framework ou des clauses contractuelles types, accompagnés de mesures complémentaires le cas échéant.

**Garanties (LGPD, Brésil).** Les transferts de données personnelles d'utilisateurs brésiliens sont régis par la LGPD art. 33 :

- **Vers Jynx Group en France (responsable de traitement) :** Licite au titre de la LGPD art. 33(I) en vertu de la résolution CD/ANPD nº 32/2026 (en vigueur le 26 janvier 2026), qui reconnaît que l'Union européenne — y compris la France — assure un niveau de protection adéquat. Aucun mécanisme de transfert supplémentaire n'est requis pour ce volet. (Cette décision d'adéquation est soumise à réexamen par l'ANPD dans un délai de quatre ans ; en cas de suspension, Jynx mettra en œuvre un mécanisme alternatif de l'art. 33, tel que les clauses contractuelles types de l'ANPD.)
- **Vers Brevo en France (ESP d'emailing, sous-traitant) :** Licite au titre de la LGPD art. 33(I) en vertu de la même résolution CD/ANPD nº 32/2026 (en vigueur le 26 janvier 2026), qui reconnaît que l'Union européenne — y compris la France — assure un niveau de protection adéquat. Aucun mécanisme de transfert supplémentaire n'est requis pour ce volet. (Soumis au même réexamen de l'ANPD décrit ci-dessus ; en cas de suspension de la décision d'adéquation, Jynx mettra en œuvre un mécanisme alternatif de l'art. 33, tel que les clauses contractuelles types de l'ANPD avec Brevo.)
- **Vers les fournisseurs technologiques de protection de l'enfance dans l'UE (correspondance d'empreintes, sous-traitants) :** Couvert par la même décision d'adéquation UE de la résolution CD/ANPD nº 32/2026 que les volets ci-dessus — les fournisseurs ne reçoivent que des empreintes irréversibles et effectuent la correspondance dans la région UE (§4.7)
- **Vers AWS au Brésil (modération d'images, sous-traitant) :** Le segment AWS Rekognition reste dans le pays — il s'exécute dans la région AWS de São Paulo (§4.8). L'image est d'abord relayée via l'infrastructure Google Cloud de Jynx, couverte par les conditions générales de transfert Google Cloud / Firebase ci-dessus

Note historique : la période de grâce d'un an pour adapter les contrats existants aux SCC de l'ANPD a pris fin le 23 août 2025 ; les nouvelles relations de sous-traitance, comme celle de l'ESP, exécutent les SCC dès l'intégration.

## 10. Cookies et Technologies Similaires

Notre application mobile n'utilise pas de cookies au sens traditionnel, mais utilise :

- **Jetons d'Authentification :** Stockés localement de manière sécurisée
- **Cache Local :** Pour améliorer les performances (données de profil, messages récents)

**Site web.** Le site web Jynx (jynx.app) utilise Google Analytics 4 (fourni par Google) avec le Consent Mode v2 pour comprendre comment le site est utilisé. Le stockage analytique est refusé par défaut : tant que vous n'acceptez pas le bandeau de cookies, Google Analytics fonctionne sans cookies ni stockage local et Google ne reçoit que des signaux sans cookies ni identifiants ; si vous acceptez, la mesure complète est activée. Votre choix — accepter ou refuser — est stocké localement sur votre appareil (localStorage du navigateur, clé "jynx-analytics-consent"). Effacer le stockage de votre navigateur pour jynx.app fait réapparaître le bandeau afin que vous puissiez modifier votre choix. Google agit en qualité de destinataire des données analytiques qui en résultent (voir §9) ; voir §4 pour nos autres sous-traitants et §7 pour vos droits.

**Liens d’invitation.** Lorsque vous ouvrez un lien d’invitation (jynx.app/invite/…) dans votre navigateur et appuyez sur le bouton de téléchargement de l’App Store, le site web écrit ce lien d’invitation dans le presse-papiers de votre appareil, en remplaçant son contenu précédent. Il s’agit d’une technique standard pour attribuer les installations d’application sur iOS (qui ne dispose d’aucun mécanisme de référent d’installation) : elle permet à l’application Jynx, au premier lancement, de vous proposer de rejoindre la plateforme avec l’invitation de la personne qui vous a envoyé le lien. Le site web ne lit jamais votre presse-papiers — il se contente d’y écrire ce lien — et l’application ne le lit qu’une seule fois, après vous avoir demandé votre consentement explicite. Aucun autre contenu du presse-papiers n’est consulté ni collecté. Si vous préférez ne pas le partager, refusez simplement la demande de collage et rejoignez la plateforme sans invitation.

**Parrainage et campagnes de créateurs.** Lorsque vous rejoignez Jynx avec un code d’invitation — via un lien, un code QR ou saisi manuellement — nous enregistrons ce code avec votre compte afin d’attribuer l’invitation à la personne ou à la campagne qui l’a partagé, d’appliquer les avantages associés et de détecter les inscriptions frauduleuses. Ce traitement repose sur notre intérêt légitime (voir §13) et est soumis à nos contrôles anti-fraude ; rien ne change pour vous : les mêmes données sont collectées quel que soit le type de code d’invitation utilisé. Certains codes d’invitation appartiennent également à des campagnes d’attribution de créateurs : si le code que vous avez utilisé fait partie d’une telle campagne, il peut également créditer celle-ci. Les registres de rémunération des campagnes de créateurs sont conservés sous forme pseudonymisée.

**Partage d'écran (lorsque disponible).** Lorsque la fonctionnalité est disponible, vous pouvez partager l'écran de votre appareil dans un salon vocal. Le partage ne commence qu'après l'octroi de l'autorisation de capture d'écran du système d'exploitation et un accord explicite dans l'application. Tout ce qui est visible à l'écran — y compris les notifications — est diffusé en direct aux autres participants du salon, et vous êtes responsable de ce que vous partagez. La vidéo partagée est un flux média en direct acheminé comme l'audio vocal via le SFU LiveKit (§4.5, §9) : elle n'est ni enregistrée ni stockée par Jynx ou LiveKit, et s'arrête dès que vous mettez fin au partage.

## 11. Modifications de Cette Politique

Nous pouvons mettre à jour cette politique de confidentialité. En cas de changements majeurs, nous vous notifierons :

- Via une notification in-app
- Par email à l'adresse associée à votre compte

## 12. Nous Contacter

Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :

- **Email :** dpo@jynx.app

**Autorité de Contrôle :** Si vous estimez que vos droits n'ont pas été respectés, vous pouvez introduire une réclamation :

- **Utilisateurs de l'UE/EEE :** auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés), France — https://www.cnil.fr
- **Utilisateurs brésiliens :** auprès de l'ANPD (Autoridade Nacional de Proteção de Dados), Brésil — https://www.gov.br/anpd

Introduire une réclamation auprès d'une autorité de contrôle ne préjuge pas de votre droit d'exercer les autres voies judiciaires qui vous sont ouvertes, y compris les protections obligatoires du consommateur applicables dans votre juridiction (par ex., le Code brésilien de défense du consommateur, loi 8.078/90).

## 13. Consentement

Nous ne traitons vos données personnelles que lorsque nous disposons d'une base légale. Les bases légales sur lesquelles nous nous appuyons, et l'endroit où chacune est décrite dans la présente Politique, sont les suivantes :

- Exécution d'un contrat / fourniture du Service (RGPD art. 6(1)(b) ; LGPD art. 7, V) — compte, matching et messagerie (§5.1–5.3)
- Intérêts légitimes (RGPD art. 6(1)(f) ; LGPD art. 7, IX et art. 10) — sécurité, prévention de la fraude, amélioration du service et (pour les utilisateurs brésiliens) communications marketing/de ré-engagement/d'enquête à des utilisateurs existants ou récemment inactifs comme décrit au §5.6, chacune appuyée sur une mise en balance documentée
- Obligation légale (RGPD art. 6(1)(c) ; LGPD art. 7, II) — conservation à des fins légales (§6)
- Obligation légale et intérêts légitimes (RGPD art. 6(1)(c) et 6(1)(f) ; LGPD art. 7, II et IX) — détection des contenus illicites et contraires à nos règles, y compris l'analyse d'images de protection de l'enfance décrite au §5.8 et le traitement de modération d'images du §4.8, prévention des abus et du contournement de bannissement (§5.7), et respect des obligations légales de signalement. Pour l'analyse des images partagées en messages privés, Jynx s'appuie également sur la détection volontaire des abus sexuels sur enfants en ligne permise par le règlement (UE) 2021/1232 (la dérogation ePrivacy, telle qu'en vigueur).
- Consentement (RGPD art. 6(1)(a) ; LGPD art. 7, I et art. 8) — les analytiques lorsque vous les avez activés, les notifications push et (pour les utilisateurs de l'UE/EEE et, pour les envois brésiliens vers des prospects, à froid ou de vente croisée) les communications marketing visées au §5.6
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**Le consentement doit être spécifique et éclairé.** Lorsque nous nous appuyons sur votre consentement, celui-ci est donné par un acte positif clair, porte sur des finalités déterminées et est recueilli séparément de votre acceptation des présentes conditions (LGPD art. 8 §1 — cláusula destacada). Les autorisations génériques ou groupées sont nulles au sens de la LGPD art. 8 §4 et invalides au sens du RGPD art. 4(11) et art. 7. L'utilisation de Jynx ne constitue pas en soi un consentement au marketing. La charge de prouver la validité du consentement repose sur Jynx (LGPD art. 8 §2 ; RGPD art. 7(1)) ; nous consignons donc la date, la version du formulaire, la langue et le périmètre de chaque consentement que nous recueillons.

**Retrait.** Vous pouvez retirer tout consentement à tout moment, selon une procédure aussi simple que celle utilisée pour le donner et qui ne vous oblige pas à supprimer votre compte (LGPD art. 8 §5 ; RGPD art. 7(3)) — voir §7.5 et §7.6. Le retrait ne remet pas en cause la licéité du traitement effectué avant celui-ci. La suppression de votre compte (§7.3) demeure possible à tout moment, mais elle n'est pas le mécanisme permettant de retirer un consentement spécifique.
