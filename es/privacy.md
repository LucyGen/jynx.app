---
title: "Política de Privacidad"
description: "Aprende cómo Jynx protege tu privacidad y maneja tus datos. Nuestra política de privacidad transparente describe nuestras prácticas y tus derechos."
canonical: "https://jynx.app/es/privacy.html"
locale: "es"
dateModified: "2026-11-17"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Política de Privacidad

Última actualización: 17 de noviembre de 2026

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

## 1. Introducción

Jynx ("nosotros", "nuestro", "la aplicación") es una plataforma de gaming social que permite a los jugadores conectarse, formar equipos y jugar juntos.

### Información Legal:

- **Entidad Legal:** Jynx Group (Société par Actions Simplifiée, SIREN 991443896, registrada en Nantes, Francia)
- **Delegado de Protección de Datos / Encarregado:** dpo@jynx.app
- **Jurisdicción UE / EEE:** Francia, Unión Europea — esta Política de Privacidad cumple el Reglamento (UE) 2016/679 (RGPD) y la Directiva 2002/58/CE (ePrivacy), según transposición en Francia.
- **Jurisdicción brasileña:** Esta Política de Privacidad también cumple la Ley brasileña nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), que se aplica al tratamiento de datos personales por parte de Jynx de titulares ubicados en Brasil conforme al art. 3 de la LGPD, independientemente de que Jynx no tenga establecimiento en Brasil.
- **Publicación (LCEN):** Directeur de la publication: Antoine Haie. Este sitio web (jynx.app) está alojado por GitHub Pages y distribuido a través de la red de distribución de contenidos de Cloudflare.

A efectos de la LGPD, Jynx Group es el responsable (controlador) de tus datos personales. Nuestro Delegado de Protección de Datos actúa como encarregado (DPD) y puede ser contactado en dpo@jynx.app para cualquier solicitud relacionada con la LGPD. Aunque Jynx cumple la condición de pequeno agente de tratamento de dados pessoales (agente de tratamiento a pequeña escala) según la Resolución CD/ANPD nº 2/2022 de la ANPD, que exime a Jynx del nombramiento obligatorio de un encarregado, Jynx mantiene voluntariamente este canal de comunicación publicado.

Esta política de privacidad describe cómo recopilamos, usamos, compartimos y protegemos tus datos personales cuando usas nuestra aplicación.

## 2. Edad Mínima y Verificación

Nuestra aplicación está reservada para usuarios de 18 años o más.

Al crear tu cuenta, te pedimos que proporciones tu fecha de nacimiento. Si tienes menos de 18 años, no podrás crear una cuenta o usar nuestros servicios.

Marketing a menores. Jynx está restringido a usuarios de 18 años o más y aplica una puerta de edad automatizada. Si posteriormente identificamos que un usuario es menor de 18 años (art. 14 LGPD; art. 8 RGPD), terminaremos la cuenta de inmediato, excluiremos al usuario de todas las comunicaciones de marketing, reactivación y encuestas, y borraremos los datos de marketing asociados. Nunca recopilamos conscientemente el consentimiento de marketing de un menor.

## 3. Datos Recopilados

### 3.1. Datos de Registro y Perfil

Recopilamos la siguiente información al crear y gestionar tu cuenta:

#### Información de Autenticación:

- Email (para cuentas email/contraseña)
- Nombre de usuario/apodo
- Foto de perfil (opcional)
- Identificadores de inicio de sesión social (Google, Apple) si usas estos métodos
- Identificadores de Discord (tu ID de usuario de Discord) si decides conectar tu cuenta de Discord para la integración con Discord — la conexión usa el OAuth de Discord de solo identificación y no es un método de inicio de sesión; puedes desconectarla en cualquier momento
- Navegación como invitado (cuando está disponible): puedes explorar las partes públicas de Jynx sin crear una cuenta; en modo invitado solo tratamos un identificador de invitado almacenado localmente y los datos técnicos de la §3.3 necesarios para servir la app — no se crea ningún perfil y no se conservan datos de cuenta. Para emparejar, chatear o unirte a comunidades debes crear una cuenta

#### Información del Perfil:

- Fecha de nacimiento (para verificación de edad)
- País y zona horaria
- Idiomas hablados
- Biografía (opcional)
- Preferencias de gaming y disponibilidad
- Identificador único (generado automáticamente para descubrimiento privado de amigos)

### 3.2. Datos de Gaming

Para ayudarte a encontrar compañeros compatibles, recopilamos:

#### Perfiles de Juego:

- Juegos que juegas
- Niveles, rangos y estadísticas de juego
- Campeones/personajes favoritos
- Estilo de juego

#### Integración con Riot Games API:

Recuperamos de la Riot Games API (con tu consentimiento):

- Nombre de invocador y Riot ID
- Rango e historial de partidas (League of Legends, Valorant, etc.)
- Estadísticas de campeones
- Historial de partidas reciente

**Motivo de Recopilación:** Mostrar tu perfil de jugador y mejorar el emparejamiento con otros jugadores.

### 3.3. Datos de Uso y Técnicos

Recopilamos automáticamente ciertos datos técnicos:

#### Analíticas y Rendimiento:

- **Firebase Performance Monitoring:** Tiempo de inicio de la app, fluidez de interfaz
- **Sentry:** Informes de errores y rendimiento (con anonimización de datos personales)
- **Firebase Crashlytics:** Informes de fallos

#### Información del Dispositivo:

- Tipo y modelo de dispositivo
- Versión del sistema operativo
- Versión de la aplicación
- Identificadores del dispositivo y señales de integridad del dispositivo (ver §5.7)

#### Comportamiento del Usuario:

- Pantallas visitadas y funciones usadas
- Tiempo pasado en la aplicación
- Interacciones con la interfaz

Puedes desactivar la recopilación de datos de analíticas en Configuración > Privacidad > "Habilitar Analíticas".

La medición publicitaria con Meta es independiente de las analíticas y tiene su propio interruptor: ver §5.9.

### 3.4. Datos de Comunicación

- **Mensajes:** Mensajes en chats de comunidad, mensajes privados entre usuarios, historial de conversación
- **Notificaciones:** Tokens FCM (Firebase Cloud Messaging) para notificaciones push

### 3.5. Contenido Generado por el Usuario

- Fotos subidas (fotos de perfil, fotos adicionales) e imágenes compartidas en mensajes directos
- Informes de seguridad y moderación
- Preferencias cosméticas (avatares, insignias)

### 3.6. Datos de audio de las salas de voz

Jynx ofrece salas de voz en tiempo real que te permiten hablar con los demás participantes mientras juegas. El audio de las salas de voz se captura desde tu micrófono solo después de que concedas el permiso de micrófono del sistema operativo y te unas explícitamente a una sala; no se captura ningún audio antes de que se cumplan ambos pasos.

Jynx no activa las funciones de grabación, transcripción, Agent Insights o Egress de LiveKit. El audio de las salas de voz se enruta en tiempo real mediante la SFU (Selective Forwarding Unit) de LiveKit y no es grabado, almacenado ni persistido por Jynx ni por LiveKit.

Cuando hablas en una sala de voz, tu audio se transmite en tiempo real a los demás participantes de esa sala, de forma similar a como funciona la voz en otras aplicaciones de chat de voz.

El audio de las salas de voz se trata con tu consentimiento: concedes el permiso de micrófono y te unes explícitamente a una sala antes de que se capture cualquier audio. Puedes retirar tu consentimiento en cualquier momento saliendo de la sala o revocando el permiso de micrófono en la configuración de tu dispositivo.

## 4. Servicios de Terceros y Compartición de Datos

### 4.1. Servicios de Firebase (Google)

Usamos los siguientes servicios de Firebase, todos compatibles con el RGPD:

- **Firebase Authentication:** Gestión segura de cuentas de usuario
- **Cloud Firestore:** Almacenamiento de tu perfil y datos de juego
- **Firebase Storage:** Alojamiento de tus imágenes de perfil
- **Cloud Functions:** Ejecución segura de lógica backend
- **Firebase Cloud Messaging:** Notificaciones push
- **Firebase App Check:** Protección contra abuso y bots
- **Firebase Performance Monitoring:** Monitoreo de rendimiento de la app
- **Firebase Crashlytics:** Informes de fallos

**Política de Privacidad de Firebase:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Monitoreo de Errores)

Usamos Sentry para seguimiento de errores y rendimiento. Los datos recopilados incluyen:

- Trazas de errores
- Contexto técnico (SO, versión de la app)

**Política de Privacidad de Sentry:** https://sentry.io/privacy/

### 4.3. Riot Games API

Cuando vinculas tu cuenta de Riot Games, recuperamos tus estadísticas de juego vía la Riot Games API oficial. Estos datos se usan solo para mostrar tu perfil y mejorar el emparejamiento.

**Política de Privacidad de Riot Games:** https://www.riotgames.com/en/privacy-notice

### 4.4. Proveedor de Servicios de Email (Comunicaciones de Marketing y Encuestas)

Para entregar los emails de marketing, reactivación y encuestas de desinstalación/churn descritos en la §5.6, Jynx utiliza un proveedor externo de servicios de email (ESP) que actúa como encargado (art. 28 RGPD; art. 39 LGPD — operador). El ESP trata tu dirección de email y datos mínimos de entrega (p. ej., estado de envío/rebote) únicamente siguiendo las instrucciones documentadas de Jynx, bajo un Acuerdo de Tratamiento de Datos firmado.

- **Identidad, función y ubicación del ESP:** Brevo (Brevo SAS, París, Francia) — nuestro proveedor de servicios de email y encargado del tratamiento bajo un Acuerdo de Tratamiento de Datos firmado. Política de Privacidad de Brevo: https://www.brevo.com/legal/privacypolicy/
- **Subencargados:** La lista actual de subencargados de Brevo está publicada en su Acuerdo de Tratamiento de Datos (Términos de Uso): https://www.brevo.com/legal/termsofuse/
- **Base de la transferencia internacional:** Ver §9. Brevo tiene su sede en Francia (UE). Las transferencias a Brevo se benefician por tanto del régimen de protección de la UE bajo el RGPD y, para los usuarios brasileños, de la decisión de adecuación de la ANPD para la UE (Resolución nº 32/2026) — no se requieren SCC ni mecanismos adicionales.

No vendemos tus datos personales. No se incrustan píxeles de seguimiento ni analíticas ocultas en los emails de marketing sin una base jurídica separada divulgada en la §5.6.

### 4.5. LiveKit Cloud (voz en tiempo real)

Jynx utiliza LiveKit Cloud como encargado del tratamiento (RGPD art. 28; LGPD art. 39 — operador) en virtud de un acuerdo de tratamiento de datos firmado, para operar la infraestructura de medios en tiempo real que enruta el audio de las salas de voz entre los participantes. LiveKit opera la SFU (Selective Forwarding Unit), que reenvía el flujo de audio de cada participante a los demás en tiempo real.

Jynx no activa las funciones de grabación, transcripción, Agent Insights o Egress de LiveKit. El audio de las salas de voz se enruta en tiempo real mediante la SFU (Selective Forwarding Unit) de LiveKit y no es grabado, almacenado ni persistido por Jynx ni por LiveKit.

LiveKit sí conserva metadatos operativos de la sesión —como identidades de los participantes, identificadores de sala, horarios de conexión y métricas de calidad— con fines de facturación, prevención de abusos y operación, conforme a su adenda de tratamiento de datos. Estos metadatos no se utilizan para identificarte fuera de la plataforma ni con fines publicitarios.

### 4.6. App Store / Google Play (Compras y Suscripciones en la App)

Las suscripciones Jynx+ y los Founder Packs se venden dentro de la app a través del App Store de Apple y Google Play, que actúan como comerciantes de registro de estas compras (ver los Términos de Servicio, Sección 8). Los datos del instrumento de pago (p. ej., datos de tarjeta) se recopilan y tratan únicamente por Apple/Google bajo sus respectivas políticas de privacidad; Jynx no recopila, recibe ni almacena ningún dato de instrumento de pago.

A través de nuestro proveedor de facturación RevenueCat (un encargado que actúa bajo un Acuerdo de Tratamiento de Datos firmado; art. 28 RGPD; art. 39 LGPD — operador), Jynx recibe únicamente la información necesaria para entregar lo que compraste: el estado de tu suscripción y derechos (p. ej., si Jynx+ está activo y su fecha de renovación), el nivel del Founder Pack comprado y los identificadores de transacción. Estos datos se conservan durante el tiempo necesario para prestar el Servicio y cumplir las obligaciones contables y de registro (§6), y se usan únicamente para otorgar y mantener tus derechos y prevenir el fraude. RevenueCat está establecido en Estados Unidos; las transferencias de datos personales a RevenueCat se apoyan en el EU-US Data Privacy Framework (para las entidades de RevenueCat auto certificadas bajo el DPF) o en cláusulas contractuales tipo cuando el DPF no aplica. El mecanismo de transferencia aplicable a los datos de los usuarios brasileños se confirma en nuestro Registro de Actividades de Tratamiento (ver §9).

- Política de Privacidad de Apple: https://www.apple.com/legal/privacy/
- Política de Privacidad de Google: https://policies.google.com/privacy
- Política de Privacidad de RevenueCat: https://www.revenuecat.com/privacy

### 4.7. Proveedores Especializados en Tecnología de Protección Infantil

Para ayudar a detectar material de abuso sexual infantil conocido (ver §5.8), Jynx colabora con proveedores especializados en tecnología de protección infantil que actúan como encargados (art. 28 RGPD; art. 39 LGPD — operador). Estos proveedores solo reciben hashes irreversibles derivados de imágenes — nunca las imágenes — y realizan la comparación de hashes en la región de la UE, únicamente para la detección de protección infantil siguiendo las instrucciones documentadas de Jynx. La derivación del hash a partir de la imagen ocurre dentro de la propia infraestructura de Google Cloud de Jynx (ver §9).

### 4.8. Proveedor de Moderación de Imágenes en la Nube (AWS)

Para mantener la plataforma segura, las fotos de perfil y de galería se examinan con un servicio automatizado de clasificación de imágenes — Amazon Rekognition, proporcionado por Amazon Web Services (AWS), que actúa como encargado (art. 28 RGPD; art. 39 LGPD — operador). Para este fin, la imagen se transmite a AWS y se analiza con aprendizaje automático para detectar contenido inapropiado (por ejemplo, desnudos o material explícito); el resultado es una etiqueta generada por máquina y una puntuación de confianza que se gestionan dentro de nuestro proceso de moderación (ver la Política de Protección Infantil). Este tratamiento se usa únicamente para la moderación de contenidos y la seguridad — nunca para perfilación, publicidad ni ningún otro propósito. AWS trata estos datos en la región de AWS configurada para el servicio (actualmente São Paulo, Brasil); se aplican las salvaguardas de transferencia de la §9. Como con el resto del Servicio, la imagen la gestiona la propia infraestructura de Google Cloud de Jynx antes de retransmitirse a AWS (ver §9).

### 4.9. Atribución Publicitaria (Meta, ATT de Apple, Install Referrer de Google Play)

Para medir si las instalaciones de nuestra app provienen del marketing, usamos tecnologías publicitarias y de atribución, sujetas a tu consentimiento cuando sea requerido: el SDK de Meta (Facebook) App Events (Meta Platforms Ireland) y la API de Google Play Install Referrer. En dispositivos Apple, el SDK de Meta se inicializa solo después de que concedas el permiso de App Tracking Transparency (ATT); sin ese permiso no se recopila ningún identificador publicitario (IDFA) y el SDK no se inicializa. En Android, la API de Google Play Install Referrer nos indica si tu instalación proviene de una ficha de tienda o de un enlace de campaña, y el identificador publicitario (GAID) se usa conforme a los ajustes de ID publicitario de tu dispositivo. Los eventos enviados a Meta se limitan a la activación de la app y metadatos de eventos de la app (incluyendo, si tienes la sesión iniciada, tu identificador de usuario de la app, que se elimina del SDK al cerrar sesión), tratados siguiendo las instrucciones de Jynx para atribución y medición de campañas.

Meta Platforms Ireland trata estos datos como nuestro encargado para el propósito de atribución anterior; Meta Platforms, Inc. puede además actuar como responsable independiente para sus propios fines legítimos bajo sus propios términos (los Términos de Tratamiento de Datos de Meta y su política de privacidad en https://www.facebook.com/privacy/policy). Las transferencias a Estados Unidos se apoyan en el EU-US Data Privacy Framework para las entidades de Meta auto certificadas o en cláusulas contractuales tipo (§9). Puedes rechazar o revocar el permiso ATT o restablecer tu ID publicitario en cualquier momento en los ajustes de tu dispositivo; el rechazo no afecta al uso de Jynx.

**Medición de anuncios.** Más allá de la atribución de instalaciones, también medimos conversiones: los eventos compartidos con Meta incluyen el registro (sign-up), el onboarding completado y las compras — con el importe y la moneda. Cuando has consentido, también puede compartirse una dirección de email o número de teléfono con hash (codificado de forma irreversible) para mejorar la calidad de las coincidencias; esto nunca ocurre para los usuarios medidos por nuestro interés legítimo (más abajo). El evento de registro también puede incluir tu género autodeclarado. No se comparte nada más — ni mensajes, campos de perfil, juegos, comunidades, contactos, ubicación ni fotos — y tus datos nunca se venden. Las bases jurídicas, tus opciones y la divulgación de Apple SKAdNetwork se describen en la §5.9.

Conservación: Jynx no guarda copia separada de los eventos compartidos con Meta. Los eventos ya compartidos quedan sujetos a los procesos de conservación y borrado de Meta Business Tools, que se aplican desde el momento de compartirlos.

### 4.10. Programa de Creadores (Socios) — KYC y Pagos

Si te unes al programa de Creadores (socios) de Jynx, tratamos la información de identidad, fiscal y de pagos que el programa requiere: tu CPF o CNPJ (validado en la app), la vía de pago que elijas — PayPal (identificado por email), transferencia bancaria Wise (Brasil) o una clave Pix — y tus registros de rendimiento de campañas (registros atribuidos; ver §10 referidos). Los registros de pagos se conservan en forma seudonimizada (§10). El programa se rige por los Creator Referral Terms y el Self-Billing Mandate versionados que aceptas al inscribirte (ver los Términos de Servicio §15).

Los pagos se ejecutan a través de la institución de pago que opera la vía elegida: PayPal o Wise reciben las instrucciones de transferencia y los datos que necesitan para verificar tu identidad, prevenir el fraude y cumplir sus obligaciones regulatorias, actuando bajo sus propios términos como instituciones de pago independientes (sus políticas de privacidad están publicadas en sus sitios web); un pago Pix es una transferencia iniciada por Jynx Group a la clave Pix que proporcionaste. Las salvaguardas de transferencia internacional aplicables se describen en la §9.

### 4.11. Funciones de IA

**Generación de avatares.** El cuestionario de avatar puede generar propuestas de avatar estilizado para tu perfil. La generación actualmente se ejecuta en Cloudflare Workers AI (Cloudflare, Inc., encargado) siguiendo las instrucciones documentadas de Jynx; si el motor subyacente cambia, esta sección se actualizará antes o junto con el cambio. Las entradas son tus respuestas al cuestionario y tus preferencias de estilo de juego — nunca tus fotos — junto con tu identificador de usuario; las propuestas se devuelven a la app como imágenes PNG o WebP y se conservan hasta 30 días para que puedas recuperarlas, tras lo cual se borran. Las imágenes generadas son sintéticas — no son fotografías tuyas — y están sujetas a la misma moderación que las demás imágenes (§4.8).

**Mensajes de compañía (Quimera).** Algunos mensajes de la app acompañante los compone o enriquece un sistema de IA generativa (Google Gemini, encargado). Cuando un mensaje está generado por IA, se etiqueta como tal; siempre se te informa cuando interactúas con un elemento generado por IA, conforme al art. 50(1) del Reglamento de IA de la UE.

## 5. Uso de Datos

Usamos tus datos para:

### 1. Proporcionar Nuestros Servicios:

- Crear y gestionar tu cuenta
- Permitirte conectar con otros jugadores
- Facilitar la creación de equipos y organización de sesiones de juego

### 2. Personalización:

- Recomendar compañeros compatibles (emparejamiento basado en juego, rango, estilo)
- Mostrar contenido relevante

### 3. Comunicación (operativa / transaccional):

- Enviarte notificaciones importantes del servicio (matches encontrados, mensajes recibidos, alertas de seguridad de la cuenta y avisos de cambios de política bajo §11)

Los emails de marketing, reactivación y encuestas de desinstalación/churn se describen por separado en la §5.6 Comunicaciones de Marketing y no están cubiertos por esta categoría transaccional.

### 4. Mejora del Servicio:

- Analizar el uso para mejorar funciones
- Identificar y corregir errores
- Optimizar el rendimiento
- Generar propuestas de avatar y borradores de mensajes de compañía usando encargados de IA (§4.11)

### 5. Seguridad y Cumplimiento:

- Prevenir fraude y abuso
- Hacer cumplir nuestros términos de uso
- Cumplir con obligaciones legales

Podemos publicar estadísticas anónimas y agregadas derivadas del uso de la app (por ejemplo, cómo forman dúos los jugadores). Estas estadísticas nunca identifican a usuarios individuales.

### 5.6. Comunicaciones de Marketing

Además de las notificaciones operativas descritas en la §5.3, podemos enviarte comunicaciones de marketing y reactivación por email, incluyendo: novedades del producto y anuncios de funciones sobre la app de Jynx; boletines; mensajes de reactivación invitándote a volver a la app; y encuestas breves de retroalimentación por desinstalación o abandono (p. ej., "¿Por qué dejaste de usar Jynx?"). Estas comunicaciones son distintas de las notificaciones transaccionales/de servicio.

**Base jurídica — usuarios de la Unión Europea / EEE (RGPD + ePrivacy).** Los emails de marketing y reactivación a usuarios de la UE/EEE se envían sobre la base de tu consentimiento previo explícito mediante opt-in (art. 13(1) de la Directiva ePrivacy, transpuesto en Francia por el artículo L. 34-5 del Code des postes et des communications électroniques; art. 6(1)(a) y art. 7 RGPD). Tras el lanzamiento de las suscripciones de pago (Jynx+) y las compras únicas en la app (Founder Packs), el Servicio es ahora un servicio remunerado, y esas compras constituyen una "venta" en el sentido de la sentencia del TJUE C-654/23 (13 de noviembre de 2025). La excepción del "opt-in blando" del art. 13(2) de la ePrivacy está por tanto en principio disponible para nosotros para productos y servicios similares a clientes existentes. No obstante, como postura conservadora, seguimos apoyándonos en tu consentimiento previo explícito mediante opt-in; solo empezaremos a apoyarnos en la base del opt-in blando tras una reevaluación documentada registrada en nuestro Registro de Actividades de Tratamiento y una notificación actualizada.

**Base jurídica — usuarios brasileños (LGPD).** Para los usuarios brasileños, las comunicaciones de marketing y reactivación se apoyan en dos bases jurídicas alternativas:

1. **Consentimiento (art. 7, I y art. 8 de la LGPD)** — captado como un opt-in separado, sin marcar y específico para esta finalidad en el registro o dentro de la app, registrado con fecha, versión del formulario e idioma; puedes retirarlo en cualquier momento, de forma gratuita y sin perder el acceso al Servicio (art. 8 §5). El consentimiento es la base utilizada para cualquier comunicación a prospectos, contacto en frío u ofertas de cross-sell/socios más allá de la app principal de Jynx.
2. **Interés legítimo (art. 7, IX de la LGPD, desarrollado por el art. 10)** — utilizado únicamente para usuarios existentes o de baja reciente que reciben mensajes de reactivación, novedades sobre la misma app de Jynx o una única encuesta breve de churn/desinstalación. Antes de apoyarse en esta base, Jynx realiza y documenta una Evaluación de Intereses Legítimos (LIA) siguiendo la prueba de tres fases de la Guía de Interés Legítimo de la ANPD (2 de febrero de 2024): (i) finalidad, (ii) necesidad y (iii) ponderación y salvaguardas. La LIA registra la relación previa, las expectativas razonables del usuario, la finalidad, los medios menos intrusivos elegidos y el canal de exclusión. El interés legítimo no se usa para email en frío/no solicitado, cross-sell no relacionado, listas compradas ni mensajería persistente a usuarios que han abandonado tras el final claro de la relación.

**Derecho de oposición / exclusión.** Los usuarios brasileños pueden oponerse a este tratamiento en cualquier momento y darse de baja a través de los mecanismos de la §7.5 y §7.6 (baja con un clic en cada email o el interruptor de preferencias de comunicaciones en la app), sin coste y sin terminar la cuenta. Atendemos las solicitudes de baja en tiempo real. El Código de Defensa del Consumidor brasileño (CDC, Ley 8.078/90, en particular art. 39 III) prohíbe la mensajería comercial no solicitada o abusiva; por ello respetamos estrictamente las bajas y aplicamos límites de frecuencia, ya que el envío persistente o con baja ignorada puede considerarse una práctica abusiva.

**Encuestas de desinstalación / churn.** Siempre que sea operativamente viable preguntamos las cuestiones de desinstalación/churn dentro de la app en el momento de la desinstalación (sin necesidad de retención de email). Cuando se envía una encuesta por email, esta no contiene contenido promocional ni de reactivación; enviamos un máximo de una (1) encuesta por usuario en aproximadamente 60 días tras el borrado de la cuenta o la desinstalación; la dirección de email se borra o anonimiza conforme a la §6; y los usuarios que han presentado una solicitud de supresión / derecho al olvido (§7.3) nunca vuelven a ser contactados y quedan en una lista de supresión permanente (ver §6 y los Términos de Servicio §7.2).

**Seguimiento de email.** Los emails de marketing no incrustan píxeles de seguimiento ni analíticas ocultas que traten datos personales sin una base jurídica separada. Si se introduce cualquier seguimiento de aperturas/clics, se divulgará aquí y se basará en el consentimiento (art. 8 LGPD; art. 5(3) ePrivacy), en coherencia con la guía de la ANPD sobre tecnologías de seguimiento (18 de octubre de 2022).

**Frecuencia.** Los emails de marketing están sujetos a límites internos de frecuencia; puedes reducirlos o desactivarlos en cualquier momento mediante el interruptor de preferencias de comunicaciones en la app o haciendo clic en la baja de cualquier mensaje.

### 5.7. Seguridad de la comunidad y evasión de sanciones

Para ayudar a proteger a nuestra comunidad del abuso, utilizamos identificadores del dispositivo y señales de integridad del dispositivo para detectar y prevenir intentos de eludir una suspensión o un ban. Si asociamos un dispositivo con una cuenta baneada, ese dispositivo puede verse impedido de crear nuevas cuentas o iniciar sesión. Si crees que esto ha ocurrido por error, puedes apelarlo contactando a support@jynx.app.

Las señales de integridad del dispositivo se recopilan y evalúan con la ayuda de Talsec freeRASP, una biblioteca anti-manipulación y de integridad del dispositivo incrustada en la app. freeRASP opera en tu dispositivo: detecta localmente amenazas como dispositivos con root, hooking en tiempo de ejecución y bootloaders desbloqueados, y nos reporta sus hallazgos a través de nuestro propio proveedor de monitoreo de errores (Sentry, §4.2) para la prevención de abusos; no envía tus datos a ningún servicio operado por Talsec.

### 5.8. Análisis de Imágenes de Protección Infantil

Para ayudar a proteger a los niños y cumplir nuestras obligaciones legales de reporte, Jynx utiliza sistemas automatizados para analizar las imágenes compartidas en mensajes directos comparando los hashes derivados de esas imágenes con bases de datos de material conocido de abuso sexual infantil. Para este análisis, las imágenes en sí no se transmiten a terceros — solo los hashes irreversibles (ver §4.7). Las fotos de perfil se examinan por separado, mediante el tratamiento de moderación de imágenes descrito en la §4.8. Este análisis existe únicamente para la detección de protección infantil y nuestras obligaciones legales de reporte; no se usa para perfilación, publicidad ni ningún otro propósito. Las coincidencias se gestionan como se describe en nuestra [Política de Protección Infantil](/child-safety.html).

### 5.9. Medición de Anuncios

Si aceptas, también compartimos eventos limitados (como registros y compras, con su importe) con Meta para medir y mejorar nuestra publicidad. Tus datos nunca se venden, y puedes cambiar tu elección en cualquier momento en Privacidad en Ajustes. Qué se comparte, y con quién, está listado en la §4.9.

Cómo se activa. En iPhone y iPad, la medición de anuncios usa tus datos solo con tu consentimiento (art. 6(1)(a) RGPD; art. 7, I LGPD), otorgado en la hoja de privacidad del primer lanzamiento o después en Ajustes > Privacidad > Medición de anuncios, y además requiere la autorización de App Tracking Transparency de Apple (ver §4.9). En Android, la medición de anuncios se basa en ese mismo consentimiento o, para los usuarios a quienes se muestra el interruptor de medición de anuncios activado por defecto en la hoja del primer lanzamiento, en nuestro interés legítimo de medir nuestra publicidad (art. 7, IX y art. 10 LGPD), evaluado en una Evaluación de Intereses Legítimos documentada. En ese caso está activada por defecto, y puedes desactivarla en la misma hoja o en cualquier momento en Ajustes > Privacidad > Medición de anuncios — oponerse es tan fácil como dejarla activada, es gratuito y nunca requiere borrar tu cuenta (art. 18, §2 LGPD).

Salvaguardas. Los usuarios que sabemos menores de 18 años, y los perfiles cuya edad no está establecida, nunca se miden por la base de interés legítimo. Retirar el consentimiento u oponerse detiene la compartición a partir de tu próximo inicio de la app; los eventos legítimamente compartidos antes de eso permanecen en Meta bajo los términos de conservación de la §4.9, y la retirada no afecta a la licitud de nada hecho antes (art. 7(3) RGPD; art. 8 §5 LGPD).

**Apple SKAdNetwork (iOS).** De forma independiente a lo anterior, y para cada usuario de iPhone y iPad con independencia de cualquier elección o ajuste — incluso cuando se rechaza el seguimiento o la medición de anuncios — el SKAdNetwork de Apple reporta información de conversión anónima y agregada a la red publicitaria que te mostró un anuncio (por ejemplo, que ocurrió un registro o una compra dentro de cierto rango de valor). Para esto no sale de tu dispositivo ningún identificador de Jynx ni ningún dato personal: es el mecanismo de atribución estándar de Apple, y no podemos identificarte a partir de él.

### 5.10. Emails y Comunicaciones

**Emails de notificación de actividad de la cuenta (servicio).** Cuando pierdes actividad de la cuenta en la app (un mensaje sin leer, un nuevo match o like), Jynx puede enviarte un email al respecto. Son notificaciones de servicio basadas en nuestro interés legítimo de operar la plataforma social (mantenerte informado de tus interacciones en curso) y no contienen contenido promocional. Puedes desactivar cada tipo de notificación (mensajes, matches, likes) en cualquier momento en Ajustes > Privacidad > Comunicaciones, o mediante el enlace "Gestionar estas notificaciones" de cada email. También puedes oponerte a este tratamiento en cualquier momento (art. 21 RGPD) en privacy@jynx.app.

**Emails de reactivación y marketing (winback).** Los emails orientados a traerte de vuelta a Jynx tras un periodo de inactividad, y nuestras comunicaciones de noticias y ofertas, son prospección comercial. Solo se envían con tu consentimiento previo, específico, libremente otorgado y revocable, recopilado mediante una casilla opcional separada sin marcar — nunca como condición para aceptar nuestros Términos. Puedes retirarlo en cualquier momento en Ajustes > Privacidad > Comunicaciones o mediante el enlace de baja de cada email.

**Visualización de tu nombre de usuario y foto de perfil en los emails de notificación.** Si has interactuado con otro miembro (like, match, mensaje), tu nombre de usuario y foto de perfil pueden aparecer en los emails de notificación de actividad de la cuenta dirigidos a él cuando está inactivo. Estos elementos se generan en el momento del envío y no se conservan en nuestros registros de email (solo el identificador y los contadores).

### 5.11. Ubicación y Distancia de Match

**Qué tratamos.** Si decides compartir tu ubicación, Jynx la usa para un único propósito: mostrar la distancia aproximada entre tú y otros jugadores ("~12 km") en la cola de matches y, si activas el ordenamiento por proximidad, ordenar esa cola por distancia. Solo tratamos ubicación aproximada: el permiso que solicitamos es la ubicación aproximada / de precisión reducida del sistema operativo, y antes de almacenar nada tus coordenadas se ajustan en nuestros servidores a una cuadrícula de unos 0,02° (unos 2,2 km); la celda de ubicación derivada mide unos 11 km de lado. Las coordenadas GPS en bruto nunca se almacenan.

**Opcional y basado en el consentimiento.** Es una función opcional: no se recopila nada salvo que concedas el permiso de ubicación del sistema operativo Y el interruptor de ubicación dentro de la app esté activado. La ubicación nunca se trata en segundo plano — solo se usa mientras usas la app. Tu ubicación nunca se muestra a otros usuarios como posición en un mapa, nunca se usa para publicidad y nunca se comparte con plataformas publicitarias (ver §4.9: ningún dato de ubicación se incluye en nada compartido para atribución o medición publicitaria). Nuestros eventos de analíticas no contienen coordenadas, nombres de ciudades ni identificadores de celda de ubicación — solo señales anónimas de adopción y de elección de ordenamiento. El aviso de permiso del sistema operativo es como se capta tu consentimiento, y el interruptor en la app es como lo retiras (§7.6).

**Cuánto tiempo la conservamos.** El registro de ubicación que mantenemos para tu cuenta se borra automáticamente tras 45 días sin actualización, y se refresca cada vez que usas la función con la compartición activada. La distancia aproximada mostrada en tu tarjeta de perfil está limitada por la actividad: persiste solo mientras lo haga tu tarjeta de perfil y se considera ausente tras 45 días sin actualización.

**Tu control.** Puedes dejar de compartir en cualquier momento: apagar el interruptor de ubicación en la app borra las coordenadas almacenadas de inmediato (el registro se conserva pero vacío de coordenadas), y revocar el permiso de ubicación en los ajustes de tu dispositivo detiene la recopilación en el origen. Borrar tu cuenta (§7.3) también elimina tus datos de ubicación.

## 6. Retención de Datos

### 6.1. Periodos de Retención

- **Datos de Perfil:** Retenidos mientras tu cuenta esté activa
- **Registros y Analíticas:** Firebase Analytics: 14 meses (política de Firebase)
- **Direcciones de email de marketing (basadas en consentimiento):** Se conservan mientras no te des de baja ni borres tu cuenta, más un registro con hash en la lista de supresión (ver más abajo) para asegurarnos de que no volvemos a contactarte
- **Direcciones de email de encuestas de desinstalación / churn:** Se conservan un máximo de 60 días tras el envío de la encuesta (o, si no se envía encuesta, 60 días tras la desinstalación/borrado), tras lo cual la dirección se borra o se anonimiza de forma irreversible. No se envía más de una (1) encuesta por usuario
- **Reactivación de cuentas de baja reciente (base de interés legítimo de la LGPD, solo usuarios brasileños):** En coherencia con la guía de la CNIL y la prueba de expectativas razonables, Jynx puede usar la dirección de email de una cuenta de baja reciente (sin solicitud de supresión) para reactivación durante un máximo de 3 años tras la última interacción significativa, tras lo cual se borra o anonimiza

### 6.2. Eliminación de Datos

Puedes solicitar la eliminación de tu cuenta en cualquier momento (ver Sección 7).

**Retención Legal:** Algunos datos pueden retenerse por más tiempo para cumplir con nuestras obligaciones legales (p. ej., informes de seguridad, transacciones financieras).

Cuando borras tu cuenta, purgamos tu dirección de email de nuestro CRM de marketing y de nuestro proveedor de servicios de email. Si ejercitas el derecho de supresión (§7.3 / art. 17 RGPD / art. 18(VI) LGPD para datos basados en consentimiento), tu dirección de email se añade a una lista de supresión permanente con hash para que nunca se reutilice para marketing, reactivación ni encuestas — incluida la protección contra reimportación a través de cualquier lista de terceros o comprada. Nota: bajo la LGPD, la supresión del art. 18(VI) aplica a los datos tratados sobre la base del consentimiento; los datos tratados por interés legítimo (art. 7 IX) se rigen en cambio por el principio de limitación de la finalidad (art. 6 II y §2) y tu derecho a solicitar la cesación del tratamiento (art. 18 §2).

## 7. Tus Derechos (RGPD y LGPD)

Según tu ubicación, tienes derechos bajo el RGPD (UE/EEE) y/o la LGPD brasileña (Lei Geral de Proteção de Dados, Ley 13.709/2018).

### 7.1. Derecho de Acceso

Puedes solicitar una copia de todos los datos que tenemos sobre ti.

**Cómo ejercer este derecho:** Configuración > Privacidad > "Exportar Mis Datos"

El proceso genera un archivo JSON conteniendo todos tus datos (perfil, mensajes, estadísticas, etc.). El enlace de descarga es válido por 7 días.

### 7.2. Derecho de Rectificación

Puedes modificar la información de tu perfil en cualquier momento desde la aplicación (nombre de usuario, biografía, preferencias, etc.).

### 7.3. Derecho al Olvido ("Derecho a Ser Olvidado")

Puedes solicitar la eliminación de tu cuenta.

**Cómo ejercer este derecho:** Configuración > Zona de Peligro > "Eliminar Mi Cuenta"

#### Proceso de Eliminación Automatizado:

1. Confirmación de dos pasos para prevenir eliminaciones accidentales
2. Anonimización inmediata de tus datos personales (Firestore)
3. Eliminación de tu cuenta de Firebase Authentication (revoca automáticamente todos los tokens OAuth)
4. Se proporciona un ID anonimizado como referencia
5. Opción para eliminar tus mensajes y contenido generado

**Importante:** La eliminación es irreversible. Algunos datos anonimizados pueden retenerse con fines estadísticos (conforme al RGPD).

**Solicitudes de Eliminación Manual:** Para solicitudes de eliminación de datos específicos (p. ej., eliminar solo mensajes de una comunidad específica, eliminar imágenes de Storage, u otros casos especiales), contacta a nuestro Oficial de Protección de Datos en dpo@jynx.app. Procesaremos las solicitudes manuales dentro de 30 días según lo requerido por el RGPD.

### 7.4. Derecho a la Portabilidad de Datos

La exportación de datos (Sección 7.1) te permite recuperar tus datos en un formato estructurado y legible por máquina (JSON).

### 7.5. Derecho de Oposición / No Recibir Marketing

Puedes oponerte al tratamiento de tus datos con fines de marketing directo en cualquier momento, de forma gratuita y sin dar razones. Bajo el art. 21(2) del RGPD este derecho es absoluto para los usuarios de la UE/EEE: detendremos todo el tratamiento de marketing al recibir tu oposición. Para los usuarios brasileños, puedes oponerte al tratamiento de marketing a través de los mecanismos de exclusión siguientes (art. 8 §5 LGPD; art. 18 §2 LGPD).

- **Baja con un clic:** cada email de marketing incluye un enlace de baja con un clic (RFC 8058 List-Unsubscribe-Post) atendido en tiempo real
- **Interruptor en la app:** Ajustes > Privacidad > Preferencias de comunicaciones
- **Email:** dpo@jynx.app

### 7.6. Derecho a Retirar el Consentimiento

Puedes retirar tu consentimiento para:

- **Analíticas:** Configuración > Privacidad > Desactivar "Habilitar Analíticas"
- **Medición de anuncios:** Ajustes > Privacidad > Medición de anuncios (ver §5.9)
- **Ubicación (distancia de match):** Apaga el interruptor de ubicación en la app — esto borra las coordenadas almacenadas — o revoca el permiso de ubicación en los ajustes de tu dispositivo (ver §5.11)
- **Notificaciones Push:** Configuración del dispositivo
- **Comunicaciones de marketing:** Boletín, novedades del producto, reactivación y encuestas de desinstalación/churn — cancelables mediante la baja con un clic, el interruptor de preferencias de comunicaciones en la app o dpo@jynx.app, sin terminar tu cuenta

**Nota:** Los tokens OAuth (Google, Apple) se revocan automáticamente cuando eliminas tu cuenta (Sección 7.3).

La retirada no afecta a la licitud del tratamiento efectuado antes de la retirada (art. 7(3) RGPD; art. 8 §5 LGPD), y retirar el consentimiento nunca requiere borrar tu cuenta.

### 7.7. Derechos Adicionales de la LGPD (Usuarios Brasileños)

Además de los derechos anteriores, los titulares de datos ubicados en Brasil tienen los siguientes derechos bajo el art. 18 de la LGPD: confirmación de la existencia del tratamiento; acceso a los datos; corrección de datos incompletos, inexactos o desactualizados; anonimización, bloqueo o borrado de datos innecesarios o excesivos (el art. 18(VI) aplica a los datos tratados sobre la base del consentimiento); portabilidad a otro proveedor de servicios o productos, previa solicitud; borrado de los datos personales tratados con consentimiento; e información sobre la posibilidad de negar el consentimiento y las consecuencias de hacerlo.

Puedes ejercer estos derechos mediante Ajustes > Privacidad o contactando al encarregado en dpo@jynx.app. También puedes presentar una reclamación ante la autoridad brasileña de protección de datos — la Autoridade Nacional de Proteção de Dados (ANPD) — en https://www.gov.br/anpd.

## 8. Seguridad de Datos

Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos:

- **Encriptación:** Comunicación segura vía HTTPS
- **Reglas de Seguridad de Firebase:** Control de acceso estricto a datos de Firestore
- **Autenticación:** Gestión segura de sesión vía Firebase Auth
- **Validación de Entrada:** Prevención de inyección XSS vía SecureTextInput
- **Limitación de Tasa:** Protección contra abuso (mensajes spam, acciones automatizadas)
- **Moderación:** Sistema de reporte de contenido y moderación
- **Voz en tiempo real:** Los medios de las salas de voz se cifran en tránsito mediante WebRTC DTLS-SRTP, el mismo estándar usado por las aplicaciones de voz principales; la señalización entre la app y nuestros servidores va por HTTPS/TLS.

Ningún sistema es 100% seguro. En caso de una violación de datos personales, notificaremos a la autoridad de control competente sin dilación indebida y, cuando sea viable, dentro de las 72 horas tras tener conocimiento de una violación que pueda suponer un riesgo para tus derechos (art. 33 RGPD), y comunicaremos la violación a los usuarios afectados sin dilación indebida cuando pueda suponer un alto riesgo para ti (art. 34 RGPD). Para los titulares de datos en Brasil, también comunicaremos los incidentes de seguridad relevantes a la ANPD y a ti dentro del plazo fijado por la autoridad (art. 48 LGPD; actualmente 3 días hábiles bajo la Resolución CD/ANPD nº 15/2024).

## 9. Transferencias Internacionales de Datos

Tus datos pueden ser transferidos y almacenados en servidores ubicados fuera de tu jurisdicción, incluyendo:

- **Google Cloud / Firebase:** Infraestructura global (incluyendo Google Analytics en el sitio web, ver §10), bajo cláusulas contractuales tipo del RGPD y salvaguardas equivalentes
- **Amazon Web Services (moderación de imágenes):** El tratamiento de moderación de imágenes descrito en la §4.8 se ejecuta en la región de São Paulo de AWS (Brasil); las transferencias desde la UE/EEE se apoyan en el acuerdo de tratamiento de datos de AWS que incorpora las cláusulas contractuales tipo de la Comisión Europea, junto con las garantías generales siguientes. La imagen se retransmite a AWS a través de la infraestructura de Google Cloud de Jynx (el tramo de Google Cloud / Firebase anterior)
- **Sentry:** Servidores ubicados en EE. UU.; las transferencias desde la UE/EEE se apoyan en el EU-US Data Privacy Framework (en vigor desde julio de 2023, en sustitución del Privacy Shield invalidado) para las entidades de Sentry auto certificadas bajo el DPF, o en cláusulas contractuales tipo cuando el DPF no aplica
- **Proveedor de servicios de email (ESP):** Se usa para entregar las comunicaciones de marketing, reactivación y encuestas descritas en la §5.6. El ESP se identifica en la §4.4 y actúa como encargado bajo un Acuerdo de Tratamiento de Datos firmado
- **LiveKit (voz en tiempo real, y compartir pantalla cuando esté disponible):** LiveKit Cloud es nuestro encargado para los medios de voz en tiempo real (y, cuando la función esté disponible, de compartir pantalla) bajo un Acuerdo de Tratamiento de Datos firmado (§4.5). LiveKit Cloud enruta los medios globalmente: las sesiones se sirven mediante la infraestructura global de LiveKit sin fijación a una región específica. El audio de las salas de voz (y el vídeo de pantalla compartida cuando esté disponible) se enruta en tiempo real y no es grabado, almacenado ni persistido por Jynx ni por LiveKit; LiveKit solo conserva los metadatos operativos de la sesión descritos en la §4.5. Las transferencias de datos personales a LiveKit se apoyan en la Adenda de Tratamiento de Datos de LiveKit, que incorpora términos del RGPD y las cláusulas contractuales tipo de la Comisión Europea para transferencias transfronterizas, junto con las garantías generales siguientes, que se aplican a LiveKit igual que a nuestros demás encargados.
- **Meta (atribución publicitaria y medición de anuncios):** La compartición descrita en la §4.9 y §5.9 llega a Meta Platforms Ireland Ltd. o Meta Platforms, Inc., que la trata en Estados Unidos y otros países. Las transferencias internacionales de datos personales realizadas en relación con las herramientas de Meta están sujetas a las salvaguardas contractuales y mecanismos de transferencia internacional aplicables. Jynx está verificando su cumplimiento de los requisitos del art. 33 de la LGPD y de la normativa de la ANPD.

**Garantías (RGPD, UE/EEE).** Todas las transferencias desde la UE/EEE están cubiertas por una decisión de adecuación, el EU-US Data Privacy Framework o cláusulas contractuales tipo, junto con medidas complementarias cuando se requieran.

**Garantías (LGPD, Brasil).** Las transferencias de datos personales de usuarios brasileños se rigen por el art. 33 de la LGPD:

- **A Jynx Group en Francia (responsable):** Lícita bajo el art. 33(I) de la LGPD en virtud de la Resolución CD/ANPD nº 32/2026 de la ANPD (en vigor desde el 26 de enero de 2026), que reconoce que la Unión Europea — incluida Francia — ofrece un nivel de protección adecuado. No se requiere ningún mecanismo de transferencia adicional para este tramo. (Esta decisión de adecuación está sujeta a reevaluación por la ANPD dentro de cuatro años; si se suspende, Jynx implementará un mecanismo alternativo del art. 33 como las cláusulas contractuales tipo de la ANPD.)
- **A Brevo en Francia (ESP de email, encargado):** Lícita bajo el art. 33(I) de la LGPD en virtud de la misma Resolución CD/ANPD nº 32/2026 de la ANPD (en vigor desde el 26 de enero de 2026), que reconoce que la Unión Europea — incluida Francia — ofrece un nivel de protección adecuado. No se requiere ningún mecanismo de transferencia adicional para este tramo. (Sujeta a la misma reevaluación de la ANPD descrita arriba; si la decisión de adecuación se suspende, Jynx implementará un mecanismo alternativo del art. 33 como las cláusulas contractuales tipo de la ANPD con Brevo.)
- **A proveedores de tecnología de protección infantil en la UE (comparación de hashes, encargados):** Cubierta por la misma decisión de adecuación UE de la Resolución CD/ANPD nº 32/2026 de la ANPD que los tramos anteriores — los proveedores solo reciben hashes irreversibles y realizan la comparación en la región de la UE (§4.7)
- **A AWS en Brasil (moderación de imágenes, encargado):** El salto de AWS Rekognition se queda en el país — se ejecuta en la región de São Paulo de AWS (§4.8). La imagen se retransmite primero a través de la infraestructura de Google Cloud de Jynx, que está cubierta por los términos generales de transferencia de Google Cloud / Firebase anteriores

**Transparencia (Resolución CD/ANPD nº 19/2024).** La información exigida por el artículo 17, §2 de la Resolución CD/ANPD nº 19/2024 de la ANPD está consolidada en esta Política: la forma, la duración y la finalidad específica de cada transferencia internacional y los países de destino (esta sección y las secciones que cita); la identificación y los datos de contacto del responsable (§1); el uso compartido de los datos y su finalidad (§4); las responsabilidades de los agentes de tratamiento y las medidas de seguridad adoptadas (§4 y §8); y tus derechos y los medios de ejercerlos, incluido un canal de fácil acceso y el derecho de petición ante la ANPD (§7 y §12). El texto completo de las cláusulas contractuales utilizadas para realizar estas transferencias internacionales está a tu disposición, previa solicitud, a través de nuestro delegado de protección de datos (dpo@jynx.app), dentro de 15 días.

Nota histórica: el periodo de gracia de un año para adaptar los contratos existentes a las SCC de la ANPD terminó el 23 de agosto de 2025; las nuevas relaciones con encargados, como el ESP, firman las SCC al incorporarse.

## 10. Cookies y Tecnologías Similares

Nuestra aplicación móvil no usa cookies en el sentido tradicional, pero usa:

- **Tokens de Autenticación:** Almacenados localmente de manera segura
- **Caché Local:** Para mejorar el rendimiento (datos de perfil, mensajes recientes)

**Sitio web.** El sitio web de Jynx (jynx.app) usa Google Analytics 4 (proporcionado por Google) con Consent Mode v2 para entender cómo se usa el sitio. El almacenamiento de analíticas está denegado por defecto: hasta que aceptes el banner de cookies, Google Analytics funciona sin cookies ni almacenamiento local y Google solo recibe señales sin cookies y sin identificadores; si aceptas, se habilita la medición completa. Tu elección — aceptar o rechazar — se guarda localmente en tu dispositivo (localStorage del navegador, clave "jynx-analytics-consent"). Borrar el almacenamiento del navegador para jynx.app hace que el banner vuelva a aparecer para que puedas cambiar tu elección. Google actúa como destinatario de los datos de analíticas resultantes (ver §9); ver §4 para nuestros demás encargados y §7 para tus derechos.

**Enlaces de invitación.** Cuando abres un enlace de invitación (jynx.app/invite/…) en tu navegador y tocas el botón de descarga del App Store, el sitio web escribe ese enlace de invitación en el portapapeles de tu dispositivo, sustituyendo su contenido anterior. Es una técnica estándar para atribuir instalaciones de la app en iOS (que no tiene mecanismo de install-referrer): permite que la app de Jynx, en el primer arranque, proponga unirte con la invitación de la persona que te envió el enlace. El sitio web nunca lee tu portapapeles — solo escribe este enlace — y la app lo lee una sola vez, tras pedir tu consentimiento explícito. No se accede ni recopila ningún otro contenido del portapapeles. Si prefieres no compartirlo, simplemente rechaza el aviso de pegado y únete sin invitación.

**Referidos y campañas de creadores.** Cuando te unes a Jynx con un código de invitación — desde un enlace, un código QR o introducido manualmente — registramos ese código junto a tu cuenta para atribuir la invitación a la persona o campaña que la compartió, aplicar los beneficios asociados y detectar registros fraudulentos. Este tratamiento se apoya en nuestros intereses legítimos (ver §13) y está sujeto a nuestros controles antifraude; nada cambia de tu lado, ya que se recopilan los mismos datos sea cual sea el tipo de código de invitación que uses. Algunos códigos de invitación también pertenecen a campañas de atribución de creadores: si el código que usaste forma parte de esa campaña, puede acreditar además a esa campaña. Los registros de pagos de las campañas de creadores se conservan en forma seudonimizada.

**Compartir pantalla (cuando esté disponible).** Cuando la función esté disponible, puedes compartir la pantalla de tu dispositivo en una sala de voz. La compartición comienza solo después de conceder el permiso de captura de pantalla del sistema operativo y dar una confirmación explícita dentro de la app. Todo lo visible en tu pantalla — incluidas las notificaciones — se emite en directo a los demás participantes de la sala, y eres responsable de lo que compartes. El vídeo compartido es una pista de medios en directo enrutada como el audio de voz a través del SFU de LiveKit (§4.5, §9): no es grabado ni almacenado por Jynx ni por LiveKit, y se detiene cuando finalizas la compartición.

## 11. Cambios a Esta Política

Podemos actualizar esta política de privacidad. En caso de cambios importantes, te notificaremos:

- Vía una notificación en la aplicación
- Por email a la dirección asociada con tu cuenta

## 12. Contáctanos

Para cualquier pregunta sobre esta política de privacidad o para ejercer tus derechos:

- **Email:** dpo@jynx.app

**Autoridad Supervisora:** Si crees que tus derechos no han sido respetados, puedes presentar una reclamación:

- **Usuarios de la UE/EEE:** ante la CNIL (Commission Nationale de l'Informatique et des Libertés), Francia — https://www.cnil.fr
- **Usuarios brasileños:** ante la ANPD (Autoridade Nacional de Proteção de Dados), Brasil — https://www.gov.br/anpd

Presentar una reclamación ante una autoridad de control no prejudica tu derecho a buscar otros recursos judiciales disponibles, incluidas las protecciones de consumo obligatorias aplicables en tu jurisdicción (p. ej., el Código de Defensa del Consumidor brasileño, Ley 8.078/90).

## 13. Bases Jurídicas y Consentimiento

Solo tratamos tus datos personales cuando disponemos de una base jurídica. Las bases jurídicas en las que nos apoyamos, y dónde se describe cada una en esta Política, son:

- Ejecución de un contrato / prestación del Servicio (art. 6(1)(b) RGPD; art. 7, V LGPD) — cuenta, emparejamiento y mensajería (§5.1–5.3)
- Intereses legítimos (art. 6(1)(f) RGPD; art. 7, IX y art. 10 LGPD) — seguridad, prevención del fraude, mejora del servicio y (para usuarios brasileños) comunicaciones de marketing/reactivación/encuestas a usuarios existentes o de baja reciente como se describe en la §5.6, cada una respaldada por una evaluación de ponderación documentada
- Obligación legal (art. 6(1)(c) RGPD; art. 7, II LGPD) — conservación con fines legales (§6)
- Obligación legal e intereses legítimos (art. 6(1)(c) y 6(1)(f) RGPD; art. 7, II y IX LGPD) — detección de contenidos ilegales y que infringen la política, incluido el análisis de imágenes de protección infantil descrito en la §5.8 y el tratamiento de moderación de imágenes de la §4.8, prevención de abusos y evasión de sanciones (§5.7), y cumplimiento de las obligaciones legales de reporte. Para el análisis de imágenes compartidas en mensajes directos, Jynx se apoya además en la detección voluntaria de abuso sexual infantil en línea permitida por el Reglamento (UE) 2021/1232 (la excepción de la ePrivacy, actualmente en vigor).
- Consentimiento (art. 6(1)(a) RGPD; art. 7, I y art. 8 LGPD) — analíticas cuando las has habilitado, notificaciones push y (para usuarios de la UE/EEE y para prospectos brasileños/envíos en frío/cross-sell) comunicaciones de marketing según §5.6
- Medición de anuncios (§5.9): tu consentimiento (art. 6(1)(a) RGPD; art. 7, I y art. 8 LGPD) cuando lo has habilitado; en Android, alternativamente nuestro interés legítimo (art. 7, IX y art. 10 LGPD) para los usuarios a quienes se muestra el interruptor activado por defecto, con tu derecho de oposición en cualquier momento
- Ubicación aproximada para la función de distancia de match (§5.11): tu consentimiento (art. 6(1)(a) RGPD; art. 7, I y art. 8 LGPD), captado mediante el permiso de ubicación del sistema operativo junto con el interruptor de ubicación en la app; puedes retirarlo en cualquier momento (§7.6) — apagar el interruptor borra las coordenadas almacenadas
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**El consentimiento debe ser específico e informado.** Cuando nos apoyamos en tu consentimiento, este se otorga mediante un acto afirmativo claro, se refiere a finalidades especificadas y se capta separadamente de tu aceptación de estos términos (art. 8 §1 LGPD — cláusula destacada). Las autorizaciones genéricas o agrupadas son nulas bajo el art. 8 §4 de la LGPD e inválidas bajo los art. 4(11) y 7 del RGPD. Usar Jynx no constituye por sí mismo consentimiento para marketing. La carga de probar el consentimiento válido recae sobre Jynx (art. 8 §2 LGPD; art. 7(1) RGPD); por ello registramos la fecha, la versión del formulario, el idioma y el alcance de cada consentimiento que recopilamos.

**Retirada.** Puedes retirar cualquier consentimiento en cualquier momento, mediante un procedimiento tan sencillo como el de otorgarlo y que no requiere borrar tu cuenta (art. 8 §5 LGPD; art. 7(3) RGPD) — ver §7.5 y §7.6. La retirada no afecta a la licitud del tratamiento efectuado antes de ella. Borrar tu cuenta (§7.3) sigue disponible en cualquier momento, pero no es el mecanismo para retirar un consentimiento específico.
