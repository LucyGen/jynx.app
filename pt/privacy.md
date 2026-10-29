---
title: "Política de Privacidade"
description: "Saiba como Jynx protege sua privacidade e lida com seus dados. Nossa política de privacidade transparente descreve nossas práticas e seus direitos."
canonical: "https://jynx.app/pt/privacy.html"
locale: "pt"
dateModified: "2026-10-24"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Política de Privacidade

Última atualização: 24 de outubro de 2026

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

## 1. Introdução

Jynx ("nós", "nosso", "o aplicativo") é uma plataforma de gaming social que permite aos jogadores se conectarem, formarem equipes e jogarem juntos.

### Informações Legais:

- **Entidade Legal:** Jynx Group
- **Contato do Oficial de Privacidade:** dpo@jynx.app
- **Jurisdição UE/EEE:** França, União Europeia — esta Política de Privacidade está em conformidade com o Regulamento (UE) 2016/679 (GDPR) e com a Diretiva 2002/58/EC (ePrivacy), conforme transpostos na França.
- **Jurisdição brasileira:** Esta Política de Privacidade também está em conformidade com a Lei brasileira nº 13.709/2018 (Lei Geral de Proteção de Dados, "LGPD"), que se aplica ao tratamento, pelo Jynx, de dados pessoais de titulares localizados no Brasil, nos termos do Art. 3 da LGPD, independentemente de o Jynx não ter estabelecimento no Brasil.
- **Publicação (LCEN):** Diretor de publicação: Antoine Haie. Este site (jynx.app) é hospedado pelo GitHub Pages e distribuído por meio da rede de distribuição de conteúdo (CDN) da Cloudflare.

Para os fins da LGPD, o Jynx Group é o controlador dos seus dados pessoais. Nosso Oficial de Proteção de Dados atua como encarregado (DPO) e pode ser contatado em dpo@jynx.app para qualquer solicitação relacionada à LGPD. Embora o Jynx se qualifique como pequeno agente de tratamento de dados pessoais nos termos da Resolução CD/ANPD nº 2/2022 — o que o dispensa da nomeação obrigatória de um encarregado —, o Jynx mantém voluntariamente este canal de comunicação publicado.

Esta política de privacidade descreve como coletamos, usamos, compartilhamos e protegemos seus dados pessoais quando você usa nosso aplicativo.

## 2. Idade Mínima e Verificação

Nosso aplicativo é reservado para usuários com 18 anos ou mais.

Ao criar sua conta, pedimos que você forneça sua data de nascimento. Se você tiver menos de 18 anos, não poderá criar uma conta ou usar nossos serviços.

Marketing dirigido a menores de idade. O Jynx é restrito a usuários com 18 anos ou mais e aplica uma verificação automatizada de idade. Se identificarmos posteriormente que um usuário tem menos de 18 anos (LGPD Art. 14; GDPR Art. 8), encerraremos imediatamente a conta, excluiremos o usuário de todas as comunicações de marketing, reengajamento e pesquisas e excluiremos os dados de marketing associados. Nunca coletamos, conscientemente, consentimento de marketing de um menor de idade.

## 3. Dados Coletados

### 3.1. Dados de Registro e Perfil

Coletamos as seguintes informações ao criar e gerenciar sua conta:

#### Informações de Autenticação:

- Email (para contas email/senha)
- Nome de usuário/apelido
- Foto de perfil (opcional)
- Identificadores de login social (Google, Apple) se você usar esses métodos
- Identificadores do Discord (seu ID de usuário do Discord) se você optar por conectar a sua conta do Discord para a integração com o Discord — a conexão usa o OAuth do Discord apenas para identificação e não é um método de login; você pode desconectá-la a qualquer momento
- Navegação como visitante (quando disponível): você pode explorar as partes públicas do Jynx sem criar uma conta; no modo visitante, tratamos apenas um identificador de visitante armazenado localmente e os dados técnicos da seção §3.3 necessários para servir o aplicativo — nenhum perfil é criado e nenhum dado de conta é retido. Para combinar, conversar ou participar de comunidades, é necessário criar uma conta

#### Informações do Perfil:

- Data de nascimento (para verificação de idade)
- País e fuso horário
- Idiomas falados
- Biografia (opcional)
- Preferências de gaming e disponibilidade
- Identificador único (gerado automaticamente para descoberta privada de amigos)

### 3.2. Dados de Gaming

Para ajudá-lo a encontrar companheiros compatíveis, coletamos:

#### Perfis de Jogo:

- Jogos que você joga
- Níveis, ranks e estatísticas de jogo
- Campeões/personagens favoritos
- Estilo de jogo

#### Integração com Riot Games API:

Recuperamos da Riot Games API (com seu consentimento):

- Nome de invocador e Riot ID
- Rank e histórico de partidas (League of Legends, Valorant, etc.)
- Estatísticas de campeões
- Histórico de partidas recente

**Razão da Coleta:** Exibir seu perfil de jogador e melhorar a correspondência com outros jogadores.

### 3.3. Dados de Uso e Técnicos

Coletamos automaticamente certos dados técnicos:

#### Analytics e Desempenho:

- **Firebase Performance Monitoring:** Tempo de inicialização do app, fluidez da interface
- **Sentry:** Relatórios de erros e desempenho (com anonimização de dados pessoais)
- **Firebase Crashlytics:** Relatórios de falhas

#### Informações do Dispositivo:

- Tipo e modelo de dispositivo
- Versão do sistema operacional
- Versão do aplicativo
- Identificadores do dispositivo e sinais de integridade do dispositivo (ver §5.7)

#### Comportamento do Usuário:

- Telas visitadas e recursos usados
- Tempo gasto no aplicativo
- Interações com a interface

Você pode desabilitar a coleta de dados de analytics em Configurações > Privacidade > "Habilitar Analytics".

### 3.4. Dados de Comunicação

- **Mensagens:** Mensagens em chats de comunidade, mensagens privadas entre usuários, histórico de conversação
- **Notificações:** Tokens FCM (Firebase Cloud Messaging) para notificações push

### 3.5. Conteúdo Gerado pelo Usuário

- Fotos enviadas (fotos de perfil, fotos adicionais) e imagens compartilhadas em mensagens diretas
- Relatórios de segurança e moderação
- Preferências cosméticas (avatares, emblemas)

### 3.6. Dados de Áudio das Salas de Voz

O Jynx oferece salas de voz em tempo real que permitem conversar com os outros participantes enquanto você joga. O áudio da sala de voz é capturado do seu microfone somente após você conceder a permissão de microfone do sistema operacional e entrar explicitamente em uma sala; nenhum áudio é capturado antes de ambas essas etapas.

O Jynx não ativa os recursos de gravação, transcrição, Agent Insights ou Egress do LiveKit. O áudio das salas de voz é roteado em tempo real pelo SFU (Selective Forwarding Unit) do LiveKit e não é gravado, armazenado nem persistido pelo Jynx ou pelo LiveKit.

Quando você fala em uma sala de voz, o seu áudio é transmitido em tempo real aos outros participantes daquela sala, de forma semelhante ao funcionamento da voz em outros aplicativos de chat por voz.

O áudio das salas de voz é tratado com o seu consentimento: você concede a permissão de microfone e entra explicitamente em uma sala antes de qualquer captura de áudio. Você pode retirar o seu consentimento a qualquer momento saindo da sala ou revogando a permissão de microfone nas configurações do seu dispositivo.

## 4. Serviços de Terceiros e Compartilhamento de Dados

### 4.1. Serviços Firebase (Google)

Usamos os seguintes serviços Firebase, todos em conformidade com GDPR:

- **Firebase Authentication:** Gerenciamento seguro de contas de usuário
- **Cloud Firestore:** Armazenamento de seu perfil e dados de jogo
- **Firebase Storage:** Hospedagem de suas imagens de perfil
- **Cloud Functions:** Execução segura de lógica backend
- **Firebase Cloud Messaging:** Notificações push
- **Firebase App Check:** Proteção contra abuso e bots
- **Firebase Performance Monitoring:** Monitoramento de desempenho do app
- **Firebase Crashlytics:** Relatórios de falhas

**Política de Privacidade Firebase:** https://firebase.google.com/support/privacy

### 4.2. Sentry (Monitoramento de Erros)

Usamos Sentry para rastreamento de erros e desempenho. Os dados coletados incluem:

- Rastreamentos de erros
- Contexto técnico (SO, versão do app)

**Política de Privacidade Sentry:** https://sentry.io/privacy/

### 4.3. API da Riot Games

Quando você vincula sua conta Riot Games, recuperamos suas estatísticas de jogo via API oficial da Riot Games. Estes dados são usados apenas para exibir seu perfil e melhorar a correspondência.

**Política de Privacidade Riot Games:** https://www.riotgames.com/en/privacy-notice

### 4.4. Provedor de Serviços de Email (Comunicações de Marketing e Pesquisas)

Para entregar os emails de marketing, reengajamento e pesquisas de desinstalação/churn descritos em §5.6, o Jynx utiliza um provedor de serviços de email terceiro (ESP) que atua como operador (GDPR Art. 28; LGPD Art. 39). O ESP trata seu endereço de email e dados mínimos de entrega (ex: status de envio/rejeição) unicamente conforme instruções documentadas do Jynx, sob um Acordo de Tratamento de Dados assinado.

- **Identidade, função e localização do ESP:** Brevo (Brevo SAS, Paris, França) — nosso Provedor de Serviços de Email e operador de dados sob um Acordo de Tratamento de Dados assinado. Política de Privacidade da Brevo: https://www.brevo.com/legal/privacypolicy/
- **Subprocessadores:** A lista atual de subprocessadores da Brevo está publicada em seu Acordo de Tratamento de Dados (Termos de Uso): https://www.brevo.com/legal/termsofuse/
- **Base da transferência internacional:** Ver §9. A Brevo tem sede na França (UE). As transferências para a Brevo beneficiam-se, portanto, do regime de proteção da UE sob o GDPR e, para os usuários brasileiros, da decisão de adequação da ANPD para a UE (Resolução nº 32/2026) — não são exigidas SCCs ou mecanismos adicionais.

Não vendemos seus dados pessoais. Nenhum pixel de rastreamento ou analytics oculto é embutido em emails de marketing sem uma base legal separada, divulgada em §5.6.

### 4.5. LiveKit Cloud (Voz em Tempo Real)

O Jynx utiliza o LiveKit Cloud como operador (GDPR Art. 28; LGPD Art. 39 — operador) por meio de um Acordo de Tratamento de Dados assinado, para operar a infraestrutura de mídia em tempo real que roteia o áudio das salas de voz entre os participantes. O LiveKit executa a SFU (Selective Forwarding Unit), que encaminha o fluxo de áudio de cada participante aos demais em tempo real.

O Jynx não ativa os recursos de gravação, transcrição, Agent Insights ou Egress do LiveKit. O áudio das salas de voz é roteado em tempo real pelo SFU (Selective Forwarding Unit) do LiveKit e não é gravado, armazenado nem persistido pelo Jynx ou pelo LiveKit.

O LiveKit retém metadados operacionais da sessão — como identidades dos participantes, identificadores de sala, horários de conexão e métricas de qualidade — para fins de faturamento, prevenção de abusos e operação, conforme o seu Aditivo de Tratamento de Dados. Esses metadados não são usados para identificá-lo fora da plataforma nem para publicidade.

### 4.6. App Store / Google Play (compras no aplicativo e assinaturas)

As assinaturas Jynx+ e os Founder Packs são vendidos no aplicativo pela App Store da Apple e pelo Google Play, que atuam como registrantes da venda (merchant of record) dessas compras (ver os Termos de Serviço, seção 8). Os dados dos instrumentos de pagamento (por exemplo, dados do cartão) são coletados e processados exclusivamente pela Apple/pelo Google segundo as respectivas políticas de privacidade; o Jynx não coleta, recebe nem armazena quaisquer dados de instrumento de pagamento.

Por meio do nosso provedor de faturamento RevenueCat (operador/processador atuando sob um Acordo de Tratamento de Dados assinado; RGPD art. 28; LGPD art. 39 — operador), o Jynx recebe apenas as informações necessárias para entregar o que você comprou: o status da sua assinatura e dos seus direitos (por exemplo, se o Jynx+ está ativo e a data de renovação), o nível do Founder Pack adquirido e os identificadores de transação. Esses dados são retidos pelo tempo necessário para fornecer o Serviço e atender obrigações contábeis (§6) e são usados exclusivamente para conceder e manter os seus direitos e prevenir fraudes. A RevenueCat é estabelecida nos Estados Unidos; as transferências de dados pessoais para a RevenueCat baseiam-se no EU-US Data Privacy Framework (para entidades RevenueCat autodeclaradas no DPF) ou em cláusulas contratuais-padrão quando o DPF não se aplica. O mecanismo de transferência aplicável aos dados de usuários brasileiros está registrado no nosso Registro de Operações de Tratamento (ver §9).

- Política de Privacidade da Apple: https://www.apple.com/legal/privacy/
- Política de Privacidade do Google: https://policies.google.com/privacy
- Política de Privacidade da RevenueCat: https://www.revenuecat.com/privacy

### 4.7. Provedores Especializados de Tecnologia de Proteção Infantil

Para ajudar a detectar material conhecido de abuso sexual infantil (ver §5.8), a Jynx trabalha com provedores especializados em tecnologia de proteção infantil que atuam como operadores (GDPR Art. 28; LGPD Art. 39 — operador). Esses provedores recebem apenas hashes irreversíveis derivados das imagens — nunca as imagens em si — e realizam a correspondência de hashes na região da UE, exclusivamente para a detecção voltada à proteção infantil, conforme as instruções documentadas da Jynx. A derivação do hash a partir da imagem acontece dentro da própria infraestrutura da Jynx no Google Cloud (ver §9).

### 4.8. Provedor de Moderação de Imagens em Nuvem (AWS)

Para manter a plataforma segura, fotos de perfil e fotos da galeria são triadas por um serviço automatizado de classificação de imagens — o Amazon Rekognition, fornecido pela Amazon Web Services (AWS), atuando como operador (GDPR Art. 28; LGPD Art. 39 — operador). Para essa finalidade, a imagem é transmitida à AWS e analisada por aprendizado de máquina em busca de conteúdo inadequado (por exemplo, nudez ou material explícito); o resultado é um rótulo gerado por máquina com um grau de confiança, tratado pelo nosso processo de moderação (ver a Política de Proteção Infantil). Esse processamento é usado exclusivamente para moderação de conteúdo e segurança — nunca para criação de perfis, publicidade ou qualquer outra finalidade. A AWS processa esses dados na região da AWS configurada para o serviço (atualmente São Paulo, Brasil); as salvaguardas de transferência do §9 aplicam-se. Como no restante do Serviço, a imagem é tratada pela própria infraestrutura da Jynx no Google Cloud antes de ser encaminhada à AWS (ver §9).

### 4.9. Atribuição publicitária (Meta, Apple ATT, Google Play Install Referrer)

Para medir se as instalações do nosso aplicativo resultam do nosso marketing, usamos tecnologias publicitárias e de atribuição, com o seu consentimento quando exigido: o SDK Meta (Facebook) App Events (Meta Platforms Ireland) e a API Google Play Install Referrer. Em dispositivos Apple, o SDK Meta só é inicializado depois que você concede a permissão de App Tracking Transparency (ATT); sem essa permissão, nenhum identificador publicitário (IDFA) é coletado e o SDK não é inicializado. No Android, a API Google Play Install Referrer informa se a sua instalação originou-se de uma listagem da loja ou de um link de campanha, e o identificador publicitário (GAID) é usado conforme as configurações de identificador publicitário do seu dispositivo. Os eventos enviados à Meta limitam-se à ativação do aplicativo e a metadados de eventos (incluindo, quando você está autenticado, o seu identificador de usuário do aplicativo, que é limpo do SDK quando você sai), processados conforme as instruções documentadas do Jynx para fins de atribuição e medição de campanhas.

A Meta Platforms Ireland processa esses dados como nossa operadora (processadora) para a finalidade de atribuição acima; a Meta Platforms, Inc. pode ainda atuar como controladora independente para seus próprios fins legítimos, nos termos próprios dela (condições de tratamento de dados da Meta e a política de privacidade dela: https://www.facebook.com/privacy/policy). As transferências para os Estados Unidos baseiam-se no EU-US Data Privacy Framework para entidades Meta autodeclaradas ou em cláusulas contratuais-padrão (§9). Você pode recusar ou revogar a permissão ATT, ou redefinir o seu identificador publicitário, a qualquer momento nas configurações do seu dispositivo; a recusa não afeta o seu uso do Jynx.

### 4.10. Programa de Criadores (parceiros) — KYC e pagamentos

Se você aderir ao programa Jynx Criadores (parceiros), tratamos as informações de identidade, tributárias e de pagamento exigidas pelo programa: o seu CPF ou CNPJ (validado no aplicativo), o meio de pagamento que você escolhe — PayPal (identificado por e-mail), transferência Wise (Brasil) ou chave Pix — e seus registros de desempenho de campanha (cadastros atribuídos; ver §10 indicações). Os registros de pagamento são mantidos de forma pseudonimizada (§10). O programa é regido pelos Termos de Indicação para Criadores e o Mandato de Autofaturamento versionados que você aceita ao aderir (ver Termos de Serviço §15).

Os pagamentos são executados pela instituição de pagamento que opera o meio escolhido: PayPal ou Wise recebem as instruções de transferência e os dados de que precisam para verificar a sua identidade, prevenir fraudes e cumprir obrigações regulatórias, atuando segundo os seus próprios termos como instituições de pagamento independentes (as políticas de privacidade deles estão publicadas nos respectivos sites); um pagamento Pix é uma transferência iniciada pela Jynx Group para a chave Pix que você forneceu. As salvaguardas de transferência internacional aplicáveis estão descritas na §9.

### 4.11. Recursos de IA

**Geração de avatares.** O quiz de avatar pode gerar propostas de avatares estilizados para o seu perfil. A geração atualmente é executada na Cloudflare Workers AI (Cloudflare, Inc., operadora/processadora) conforme as instruções documentadas do Jynx; se o mecanismo subjacente mudar, esta seção será atualizada antes ou junto com a mudança. As entradas são as suas respostas ao quiz e as suas preferências de estilo de jogo — nunca as suas fotos — junto com o seu identificador de usuário; as propostas são devolvidas ao aplicativo como imagens PNG ou WebP e retidas por até 30 dias para que você possa recuperá-las, sendo excluídas depois. As imagens geradas são sintéticas — não são fotografias suas — e estão sujeitas à mesma moderação das demais imagens (§4.8).

**Mensagens do companheiro (Quimera).** Algumas mensagens do aplicativo companheiro são compostas ou enriquecidas por um sistema de IA generativa (Google Gemini, operador/processador). Quando uma mensagem é gerada por IA, ela é rotulada como tal; você é sempre informado quando interage com um elemento gerado por IA, em conformidade com o art. 50, §1, do Regulamento Europeu de IA.

## 5. Uso de Dados

Usamos seus dados para:

### 1. Fornecer Nossos Serviços:

- Criar e gerenciar sua conta
- Permitir que você se conecte com outros jogadores
- Facilitar criação de equipes e organização de sessões de jogo

### 2. Personalização:

- Recomendar companheiros compatíveis (correspondência baseada em jogo, rank, estilo)
- Exibir conteúdo relevante

### 3. Comunicação:

- Enviar notificações importantes (correspondências encontradas, mensagens recebidas)

Os emails de marketing, reengajamento e pesquisas de desinstalação/churn são descritos separadamente em §5.6 Comunicações de Marketing e não estão abrangidos por esta categoria transacional.

### 4. Melhoria do Serviço:

- Analisar uso para melhorar recursos
- Identificar e corrigir bugs
- Otimizar desempenho
- Gerar propostas de avatares e rascunhos de mensagens do companheiro usando operadores (processadores) de IA (§4.11)

### 5. Segurança e Conformidade:

- Prevenir fraude e abuso
- Fazer cumprir nossos termos de uso
- Cumprir obrigações legais

Podemos publicar estatísticas agregadas e anonimizadas derivadas do uso do aplicativo (por exemplo, como jogadores formam duplas). Essas estatísticas nunca identificam usuários individuais.

### 5.6. Comunicações de Marketing

Além das notificações operacionais descritas em §5.3, podemos enviar a você comunicações de marketing e reengajamento por email, incluindo: atualizações de produto e anúncios de recursos sobre o aplicativo Jynx; newsletters; mensagens de reengajamento convidando você a voltar ao aplicativo; e pesquisas curtas de feedback de desinstalação ou churn (ex: "Por que você parou de usar o Jynx?"). Essas comunicações são distintas das notificações transacionais/de serviço.

**Base legal — usuários da União Europeia / EEE (GDPR + ePrivacy).** Os emails de marketing e reengajamento enviados a usuários da UE/EEE o são com base no seu consentimento prévio e explícito de opt-in (Diretiva ePrivacy Art. 13(1), transposta na França pelo Artigo L. 34-5 do Code des postes et des communications électroniques; GDPR Art. 6(1)(a) e Art. 7). Após o lançamento das assinaturas pagas (Jynx+) e das compras avulsas no aplicativo (Founder Packs), o Serviço é agora um serviço remunerado, e essas compras constituem uma "venda" no sentido da decisão C-654/23 do TJUE (13 de novembro de 2025). A exceção de "soft opt-in" do Art. 13(2) da ePrivacy está, portanto, em princípio disponível para nós para produtos e serviços semelhantes oferecidos a clientes existentes. Como postura conservadora, contudo, continuamos a nos apoiar no seu consentimento prévio e explícito de opt-in; passaremos a nos apoiar na base soft opt-in somente após uma reavaliação documentada, registrada em nosso Registro de Atividades de Tratamento, e um aviso atualizado a você.

**Base legal — usuários brasileiros (LGPD).** Para os usuários brasileiros, as comunicações de marketing e reengajamento se apoiam em duas bases legais alternativas:

1. **Consentimento (LGPD Art. 7, I e Art. 8)** — capturado como um opt-in separado, não marcado previamente e específico para a finalidade, no cadastro ou no aplicativo, registrado com data, versão do formulário e idioma; você pode revogá-lo a qualquer momento, gratuitamente, sem perder o acesso ao Serviço (Art. 8 §5). O consentimento é a base utilizada para qualquer comunicação a potenciais usuários (prospectos), abordagens a frio ou ofertas de venda cruzada/parceiros que vão além do aplicativo Jynx em si.
2. **Interesse legítimo (LGPD Art. 7, IX, detalhado pelo Art. 10)** — utilizado somente para usuários existentes ou recentemente inativos que recebem mensagens de reengajamento, atualizações de produto sobre o mesmo aplicativo Jynx ou uma única pesquisa curta de feedback de churn/desinstalação. Antes de se apoiar nessa base, o Jynx conduz e documenta uma Avaliação de Interesses Legítimos (LIA) seguindo o teste em três fases do Guia de Interesse Legítimo da ANPD (2 de fevereiro de 2024): (i) finalidade, (ii) necessidade e (iii) ponderação e salvaguardas. A LIA registra o relacionamento prévio, as expectativas razoáveis do usuário, a finalidade, os meios menos intrusivos escolhidos e o canal de descadastro. O interesse legítimo não é utilizado para emails a frio/não solicitados, venda cruzada não relacionada, listas adquiridas ou envio persistente de mensagens a usuários desistentes após o encerramento claro do relacionamento.

**Direito de oposição / descadastro.** Os usuários brasileiros podem, a qualquer momento, opor-se a esse tratamento e cancelar a inscrição por meio dos mecanismos descritos em §7.5 e §7.6 (cancelamento de inscrição com um clique em todos os emails ou a alternância de preferências de comunicação no aplicativo), sem custo e sem precisar encerrar a conta. Atendemos às solicitações de descadastro em tempo real. O Código de Defesa do Consumidor brasileiro (CDC, Lei 8.078/90, em particular o Art. 39 III) proíbe mensagens comerciais não solicitadas ou abusivas; portanto, respeitamos estritamente os descadastros e aplicamos limites de frequência, já que o envio persistente ou que ignora um descadastro pode ser tratado como prática abusiva.

**Pesquisas de desinstalação / churn.** Sempre que operacionalmente viável, fazemos as perguntas de desinstalação/churn no aplicativo, no momento da desinstalação (sem necessidade de retenção do email). Quando uma pesquisa por email é enviada, ela não contém conteúdo promocional ou de reengajamento; enviamos no máximo uma (1) pesquisa por usuário em aproximadamente 60 dias após a exclusão da conta ou a desinstalação; o endereço de email é então excluído ou anonimizado em conformidade com o §6; e os usuários que enviaram uma solicitação de exclusão / direito ao esquecimento (§7.3) nunca voltam a ser contatados e são incluídos em uma lista de supressão permanente (ver §6 e o §7.2 dos Termos de Serviço).

**Rastreamento de email.** Os emails de marketing não embutem pixels de rastreamento nem analytics ocultos que tratem dados pessoais sem uma base legal separada. Caso seja introduzido qualquer rastreamento de abertura/cliques, ele será divulgado aqui e terá base em consentimento (LGPD Art. 8; ePrivacy Art. 5(3)), em consonância com a orientação da ANPD sobre tecnologias de rastreamento (18 de outubro de 2022).

**Frequência.** Os emails de marketing estão sujeitos a limites internos de frequência; você pode reduzi-los ou desativá-los a qualquer momento por meio da alternância de preferências de comunicação no aplicativo ou clicando em cancelar inscrição em qualquer mensagem.

### 5.7. Segurança da comunidade e evasão de banimento

Para ajudar a proteger nossa comunidade contra abusos, utilizamos identificadores do dispositivo e sinais de integridade do dispositivo para detectar e impedir tentativas de contornar uma suspensão ou banimento. Se associarmos um dispositivo a uma conta banida, esse dispositivo poderá ser impedido de criar novas contas ou fazer login. Se você acredita que isso ocorreu por engano, pode recorrer entrando em contato com support@jynx.app.

Os sinais de integridade do dispositivo são coletados e avaliados com a assistência do Talsec freeRASP, uma biblioteca antiviolação e de integridade de dispositivo incorporada ao aplicativo. O freeRASP opera no seu dispositivo: ele detecta localmente ameaças como dispositivos com root, hooking em tempo de execução e bootloaders desbloqueados, e nos reporta suas descobertas por meio do nosso próprio provedor de monitoramento de erros (Sentry, §4.2) para prevenção de abusos; ele não envia os seus dados a nenhum serviço operado pela Talsec.

### 5.8. Análise de Imagens para Proteção Infantil

Para ajudar a proteger crianças e cumprir nossos deveres legais de denúncia, a Jynx utiliza sistemas automatizados para analisar as imagens compartilhadas em mensagens diretas, comparando hashes derivados dessas imagens com bancos de dados de material conhecido de abuso sexual infantil. Para essa análise, as imagens em si não são transmitidas a terceiros — apenas hashes irreversíveis o são (ver §4.7). As fotos de perfil são triadas separadamente, pelo processamento de moderação de imagens descrito no §4.8. Essa análise existe exclusivamente para a detecção voltada à proteção infantil e para nossos deveres legais de denúncia; ela não é usada para criação de perfis, publicidade ou qualquer outra finalidade. As correspondências são tratadas conforme descrito em nossa [Política de Proteção Infantil](/child-safety.html).

## 6. Retenção de Dados

### 6.1. Períodos de Retenção

- **Dados de Perfil:** Retidos enquanto sua conta estiver ativa
- **Registros e Analytics:** Firebase Analytics: 14 meses (política Firebase)
- **Endereços de email de marketing (com base em consentimento):** Retidos enquanto você não tiver cancelado a inscrição nem excluído sua conta, além de um registro com hash na lista de supressão (ver abaixo) para garantir que não voltemos a contatá-lo
- **Endereços de email de pesquisas de desinstalação / churn:** Retidos por no máximo 60 dias após o envio da pesquisa (ou, se nenhuma pesquisa for enviada, 60 dias após a desinstalação/exclusão), após o que o endereço é excluído ou anonimizado de forma irreversível. No máximo um (1) email de pesquisa é enviado por usuário
- **Reengajamento de contas recentemente inativas (base de interesse legítimo da LGPD, somente para usuários brasileiros):** Em consonância com a orientação da CNIL e com o teste de expectativas razoáveis, o Jynx pode usar o endereço de email de uma conta recentemente inativa (sem solicitação de exclusão) para reengajamento por até 3 anos após a última interação significativa, após o que ele é excluído ou anonimizado

### 6.2. Exclusão de Dados

Você pode solicitar a exclusão de sua conta a qualquer momento (veja Seção 7).

**Retenção Legal:** Alguns dados podem ser retidos por mais tempo para cumprir nossas obrigações legais (ex: relatórios de segurança, transações financeiras).

Quando você exclui sua conta, eliminamos seu endereço de email do nosso CRM de marketing e do nosso provedor de serviços de email. Se você exercer o direito à exclusão (§7.3 / GDPR Art. 17 / LGPD Art. 18(VI) para dados tratados com base em consentimento), seu endereço de email é adicionado a uma lista de supressão permanente com hash, para que nunca venha a ser reutilizado para marketing, reengajamento ou pesquisas — incluindo proteção contra reimportação por qualquer lista de terceiros ou adquirida. Observação: sob a LGPD, a exclusão do Art. 18(VI) aplica-se aos dados tratados com base em consentimento; os dados tratados com base em interesse legítimo (Art. 7 IX) são regidos, em vez disso, pelo princípio da limitação da finalidade (Art. 6 II e §2) e pelo seu direito de solicitar a cessação do tratamento (Art. 18 §2).

## 7. Seus Direitos (GDPR)

Sob o GDPR, você tem os seguintes direitos:

### 7.1. Direito de Acesso

Você pode solicitar uma cópia de todos os dados que temos sobre você.

**Como exercer este direito:** Configurações > Privacidade > "Exportar Meus Dados"

O processo gera um arquivo JSON contendo todos os seus dados (perfil, mensagens, estatísticas, etc.). O link de download é válido por 7 dias.

### 7.2. Direito de Retificação

Você pode modificar as informações do seu perfil a qualquer momento pelo aplicativo (nome de usuário, biografia, preferências, etc.).

### 7.3. Direito ao Esquecimento ("Direito de Ser Esquecido")

Você pode solicitar a exclusão de sua conta.

**Como exercer este direito:** Configurações > Zona de Perigo > "Excluir Minha Conta"

#### Processo de Exclusão Automatizado:

1. Confirmação em duas etapas para prevenir exclusões acidentais
2. Anonimização imediata de seus dados pessoais (Firestore)
3. Exclusão de sua conta Firebase Authentication (revoga automaticamente todos os tokens OAuth)
4. Um ID anonimizado é fornecido como referência
5. Opção para excluir suas mensagens e conteúdo gerado

**Importante:** A exclusão é irreversível. Alguns dados anonimizados podem ser retidos para fins estatísticos (em conformidade com GDPR).

**Solicitações de Exclusão Manual:** Para solicitações de exclusão de dados específicos (ex: excluir apenas mensagens de uma comunidade específica, excluir imagens do Storage, ou outros casos especiais), entre em contato com nosso Oficial de Proteção de Dados em dpo@jynx.app. Processaremos solicitações manuais dentro de 30 dias conforme exigido pelo GDPR.

### 7.4. Direito à Portabilidade de Dados

A exportação de dados (Seção 7.1) permite que você recupere seus dados em formato estruturado e legível por máquina (JSON).

### 7.5. Direito de Objeção

Você pode se opor ao processamento de seus dados para fins de marketing direto.

- **Cancelamento de inscrição com um clique:** todo email de marketing inclui um link de cancelamento de inscrição com um clique (RFC 8058 List-Unsubscribe-Post) atendido em tempo real
- **Alternância no aplicativo:** Configurações > Privacidade > "Preferências de Comunicação"
- **Email:** dpo@jynx.app

### 7.6. Direito de Retirar Consentimento

Você pode retirar seu consentimento para:

- **Analytics:** Configurações > Privacidade > Desabilitar "Habilitar Analytics"
- **Notificações Push:** Configurações do dispositivo
- **Comunicações de Marketing:** Newsletter, atualizações de produto, reengajamento e pesquisas de desinstalação/churn — revogáveis por meio do cancelamento de inscrição com um clique, da alternância de preferências de comunicação no aplicativo ou de dpo@jynx.app, sem precisar encerrar sua conta

**Nota:** Tokens OAuth (Google, Apple) são automaticamente revogados quando você exclui sua conta (Seção 7.3).

A revogação não afeta a licitude do tratamento realizado antes dela (GDPR Art. 7(3); LGPD Art. 8 §5), e revogar o consentimento nunca exige que você exclua sua conta.

### 7.7. Direitos Adicionais da LGPD (Usuários Brasileiros)

Além dos direitos acima, os titulares localizados no Brasil têm os seguintes direitos nos termos do Art. 18 da LGPD: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos (o Art. 18(VI) aplica-se aos dados tratados com base em consentimento); portabilidade para outro serviço ou provedor de produto, mediante solicitação; eliminação de dados pessoais tratados com consentimento; e informação sobre a possibilidade de negar o consentimento e as consequências de fazê-lo.

Você pode exercer esses direitos em Configurações > Privacidade ou contatando o encarregado em dpo@jynx.app. Você também pode apresentar reclamação à autoridade brasileira de proteção de dados — a Autoridade Nacional de Proteção de Dados (ANPD) — em https://www.gov.br/anpd.

## 8. Segurança de Dados

Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:

- **Criptografia:** Comunicação segura via HTTPS
- **Regras de Segurança Firebase:** Controle de acesso rigoroso aos dados do Firestore
- **Autenticação:** Gerenciamento seguro de sessão via Firebase Auth
- **Validação de Entrada:** Prevenção de injeção XSS via SecureTextInput
- **Limitação de Taxa:** Proteção contra abuso (mensagens spam, ações automatizadas)
- **Moderação:** Sistema de relatório de conteúdo e moderação
- **Voz em tempo real:** A mídia das salas de voz é criptografada em trânsito usando WebRTC DTLS-SRTP, o mesmo padrão usado pelos principais aplicativos de voz; a sinalização entre o aplicativo e nossos servidores ocorre por HTTPS/TLS.

Nenhum sistema é 100% seguro. Em caso de incidente de segurança que possa acarretar risco relevante a dados pessoais, notificaremos a autoridade fiscalizadora competente sem demora injustificada e, quando exequível, em até 72 horas após tomarmos conhecimento de uma violação suscetível de resultar em risco aos seus direitos (RGPD art. 33), e comunicaremos a violação aos usuários afetados sem demora injustificada quando for suscetível de resultar em alto risco para você (RGPD art. 34). Para titulares no Brasil, também comunicaremos incidentes de segurança relevantes à ANPD e a você dentro do prazo fixado pela autoridade (LGPD art. 48; atualmente 3 dias úteis, conforme a Resolução ANPD CD/ANPD nº 15/2024).

## 9. Transferências Internacionais de Dados

Seus dados podem ser transferidos e armazenados em servidores localizados fora da União Europeia, incluindo:

- **Google Cloud / Firebase:** Infraestrutura global (incluindo o Google Analytics no site, ver §10), sob cláusulas contratuais padrão do GDPR e salvaguardas equivalentes
- **Amazon Web Services (moderação de imagens):** O processamento de moderação de imagens descrito no §4.8 é executado na região de São Paulo da AWS (Brasil); as transferências da UE/EEE apoiam-se no contrato de processamento de dados da AWS, que incorpora as cláusulas contratuais padrão da Comissão Europeia, junto com as garantias gerais abaixo. A imagem é encaminhada à AWS por meio da infraestrutura da Jynx no Google Cloud (perna Google Cloud / Firebase acima)
- **Sentry:** Servidores baseados nos EUA com conformidade Privacy Shield
- **Provedor de Serviços de Email (ESP):** Utilizado para entregar as comunicações de marketing, reengajamento e pesquisas descritas em §5.6. O ESP é identificado em §4.4 e atua como operador sob um Acordo de Tratamento de Dados assinado
- **LiveKit (voz em tempo real e compartilhamento de tela, quando disponível):** O LiveKit Cloud é o nosso operador (processador) para mídia em tempo real (e, quando o recurso estiver disponível, compartilhamento de tela) mediante um Acordo de Tratamento de Dados assinado (§4.5). O LiveKit Cloud roteia a mídia globalmente: as sessões são atendidas pela infraestrutura global do LiveKit, sem fixação em uma região específica. O áudio das salas de voz (e o vídeo do compartilhamento de tela, quando disponível) é roteado em tempo real e não é gravado, armazenado nem mantido pelo Jynx ou pelo LiveKit; o LiveKit retém apenas os metadados operacionais de sessão descritos na §4.5. As transferências de dados pessoais para o LiveKit baseiam-se no adendo de tratamento de dados do LiveKit, que incorpora os termos do RGPD e as cláusulas contratuais-padrão da Comissão Europeia para transferências internacionais, em conjunto com as garantias gerais abaixo, que se aplicam ao LiveKit como aos nossos demais operadores.

**Garantias (GDPR, UE/EEE).** Todas as transferências a partir da UE/EEE são cobertas por uma decisão de adequação, pelo Data Privacy Framework UE-EUA ou por cláusulas contratuais padrão, juntamente com medidas suplementares quando exigidas.

**Garantias (LGPD, Brasil).** As transferências de dados pessoais de usuários brasileiros são regidas pelo Art. 33 da LGPD:

- **Para o Jynx Group na França (controlador):** Lícita nos termos do Art. 33(I) da LGPD, em virtude da Resolução CD/ANPD nº 32/2026 (em vigor desde 26 de janeiro de 2026), que reconhece a União Europeia — incluindo a França — como oferecendo um nível adequado de proteção. Nenhum mecanismo adicional de transferência é exigido para esta etapa. (Esta decisão de adequação está sujeita a reavaliação pela ANPD em até quatro anos; se for suspensa, o Jynx implementará um mecanismo alternativo do Art. 33, como as cláusulas contratuais padrão da ANPD.)
- **Para a Brevo na França (ESP de email, operador):** Lícita nos termos do Art. 33(I) da LGPD, em virtude da mesma Resolução CD/ANPD nº 32/2026 (em vigor desde 26 de janeiro de 2026), que reconhece a União Europeia — incluindo a França — como oferecendo um nível adequado de proteção. Nenhum mecanismo adicional de transferência é exigido para esta etapa. (Sujeita à mesma reavaliação da ANPD descrita acima; se a decisão de adequação for suspensa, o Jynx implementará um mecanismo alternativo do Art. 33, como as cláusulas contratuais padrão da ANPD com a Brevo.)
- **Para provedores de tecnologia de proteção infantil na UE (correspondência de hashes, operadores):** Coberto pela mesma decisão de adequação da UE da Resolução CD/ANPD nº 32/2026 citada nas pernas acima — os provedores recebem apenas hashes irreversíveis e realizam a correspondência na região da UE (§4.7)
- **Para a AWS no Brasil (moderação de imagens, operador):** O trecho da AWS Rekognition permanece no país — é executado na região de São Paulo da AWS (§4.8). A imagem é primeiro transmitida pela infraestrutura da Jynx no Google Cloud, coberta pelos termos gerais de transferência do Google Cloud / Firebase acima

Nota histórica: o prazo de carência de um ano para adaptar os contratos existentes às SCCs da ANPD encerrou-se em 23 de agosto de 2025; novas relações com operadores, como a do ESP, executam as SCCs no momento da integração.

## 10. Cookies e Tecnologias Similares

Nosso aplicativo móvel não usa cookies no sentido tradicional, mas usa:

- **Tokens de Autenticação:** Armazenados localmente de forma segura
- **Cache Local:** Para melhorar desempenho (dados de perfil, mensagens recentes)

**Site.** O site da Jynx (jynx.app) utiliza o Google Analytics 4 (fornecido pelo Google) com o Consent Mode v2 para entender como o site é usado. O armazenamento de analytics é negado por padrão: até você aceitar o banner de cookies, o Google Analytics funciona sem cookies ou armazenamento local, e o Google recebe apenas sinais sem cookies e sem identificadores; se você aceitar, a medição completa é ativada. Sua escolha — aceitar ou recusar — fica armazenada localmente no seu dispositivo (localStorage do navegador, chave "jynx-analytics-consent"). Limpar o armazenamento do navegador para o jynx.app faz o banner aparecer novamente, para que você possa alterar sua escolha. O Google atua como destinatário dos dados de analytics resultantes (ver §9); consulte o §4 para os demais operadores e o §7 para seus direitos.

**Links de convite.** Quando você abre um link de convite (jynx.app/invite/…) no seu navegador e toca no botão de download da App Store, o site grava esse link de convite na área de transferência do seu dispositivo, substituindo seu conteúdo anterior. Essa é uma técnica padrão para atribuir instalações de aplicativos no iOS (que não possui um mecanismo de referência de instalação): ela permite que o aplicativo Jynx, no primeiro acesso, proponha que você entre com o convite da pessoa que lhe enviou o link. O site nunca lê a sua área de transferência — ele apenas grava esse link — e o aplicativo a lê apenas uma vez, depois de pedir o seu consentimento explícito. Nenhum outro conteúdo da área de transferência é acessado ou coletado. Se você preferir não compartilhá-lo, basta recusar o pedido de permissão de colagem e entrar sem convite.

**Indicações e campanhas de criadores.** Quando você entra no Jynx com um código de convite — por meio de um link, de um código QR ou digitado manualmente — registramos esse código junto à sua conta para atribuir o convite à pessoa ou à campanha que o compartilhou, aplicar os benefícios associados e detectar cadastros fraudulentos. Esse tratamento se baseia em nossos interesses legítimos (ver §13) e está sujeito às nossas verificações antifraude; nada muda para você: os mesmos dados são coletados independentemente do tipo de código de convite utilizado. Alguns códigos de convite também pertencem a campanhas de atribuição de criadores: se o código que você utilizou fizer parte de uma dessas campanhas, ele também poderá ser creditado a ela. Os registros de pagamentos das campanhas de criadores são mantidos de forma pseudonimizada.

**Compartilhamento de tela (quando disponível).** Quando o recurso estiver disponível, você poderá compartilhar a tela do seu dispositivo em uma sala de voz. O compartilhamento começa somente após a concessão da permissão de captura de tela do sistema operacional e um reconhecimento explícito no aplicativo. Tudo o que estiver visível na sua tela — incluindo notificações — é transmitido ao vivo para os demais participantes da sala, e você é responsável pelo que compartilha. O vídeo compartilhado é uma faixa de mídia ao vivo roteada como o áudio de voz pelo SFU do LiveKit (§4.5, §9): não é gravado nem armazenado pelo Jynx ou pelo LiveKit e cessa quando você encerra o compartilhamento.

## 11. Mudanças nesta Política

Podemos atualizar esta política de privacidade. Em caso de mudanças importantes, notificaremos você:

- Via notificação no aplicativo
- Por email no endereço associado à sua conta

## 12. Entre em Contato

Para quaisquer perguntas sobre esta política de privacidade ou para exercer seus direitos:

- **Email:** dpo@jynx.app

**Autoridade Supervisora:** Se você acredita que seus direitos não foram respeitados, você pode apresentar uma reclamação:

- **Usuários da UE/EEE:** à CNIL (Commission Nationale de l'Informatique et des Libertés), França — https://www.cnil.fr
- **Usuários brasileiros:** à ANPD (Autoridade Nacional de Proteção de Dados), Brasil — https://www.gov.br/anpd

Apresentar uma reclamação a uma autoridade de controle não prejudica seu direito de buscar outras medidas judiciais disponíveis para você, incluindo as proteções obrigatórias ao consumidor aplicáveis em sua jurisdição (ex: o Código de Defesa do Consumidor brasileiro, Lei 8.078/90).

## 13. Consentimento

Tratamos seus dados pessoais somente quando temos uma base legal. As bases legais em que nos apoiamos, e onde cada uma é descrita nesta Política, são:

- Execução de contrato / fornecimento do Serviço (GDPR Art. 6(1)(b); LGPD Art. 7, V) — conta, matchmaking e mensagens (§5.1–5.3)
- Interesses legítimos (GDPR Art. 6(1)(f); LGPD Art. 7, IX e Art. 10) — segurança, prevenção a fraudes, melhoria do serviço e (para os usuários brasileiros) comunicações de marketing/reengajamento/pesquisas a usuários existentes ou recentemente inativos, conforme descrito em §5.6, cada uma apoiada em uma avaliação de ponderação documentada
- Obrigação legal (GDPR Art. 6(1)(c); LGPD Art. 7, II) — retenção para finalidades legais (§6)
- Obrigação legal e interesses legítimos (GDPR Art. 6(1)(c) e 6(1)(f); LGPD Art. 7, II e IX) — detecção de conteúdo ilegal e violador de políticas, incluindo a análise de imagens para proteção infantil descrita no §5.8 e o processamento de moderação de imagens do §4.8, prevenção a abusos e evasão de banimento (§5.7) e cumprimento de deveres legais de denúncia. Para a análise de imagens compartilhadas em mensagens diretas, a Jynx também se apoia na detecção voluntária de abuso sexual infantil on-line permitida pelo Regulamento (UE) 2021/1232 (derrogação ao ePrivacy, vigente conforme aplicável).
- Consentimento (GDPR Art. 6(1)(a); LGPD Art. 7, I e Art. 8) — analytics que você tenha habilitado, notificações push e (para usuários da UE/EEE e, no caso do Brasil, para envios de prospecção, abordagem a frio ou venda cruzada) comunicações de marketing conforme §5.6
- Voice-room audio is processed on the basis of your consent (GDPR Art. 6(1)(a); LGPD Art. 7, I and Art. 8) when you grant microphone permission and explicitly join a room (see §3.6); you may withdraw it at any time by leaving the room or by revoking microphone permission in your device settings.

**O consentimento deve ser específico e informado.** Quando nos apoiamos no seu consentimento, ele é dado por um ato afirmativo claro, refere-se a finalidades especificadas e é capturado separadamente da sua aceitação destes termos (LGPD Art. 8 §1 — cláusula destacada). Autorizações genéricas ou agrupadas são nulas nos termos do LGPD Art. 8 §4 e inválidas nos termos do GDPR Art. 4(11) e Art. 7. Usar o Jynx não constitui, por si só, consentimento para marketing. O ônus de comprovar a validade do consentimento é do Jynx (LGPD Art. 8 §2; GDPR Art. 7(1)); por isso, registramos a data, a versão do formulário, o idioma e o escopo de cada consentimento que coletamos.

**Revogação.** Você pode revogar qualquer consentimento a qualquer momento, por um procedimento tão fácil quanto o de concedê-lo e que não exige que você exclua sua conta (LGPD Art. 8 §5; GDPR Art. 7(3)) — ver §7.5 e §7.6. A revogação não afeta a licitude do tratamento realizado antes dela. A exclusão da sua conta (§7.3) permanece disponível a qualquer momento, mas não é o mecanismo para revogar um consentimento específico.
