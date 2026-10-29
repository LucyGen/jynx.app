---
title: "Security & Vulnerability Disclosure Policy"
description: "How to report a security vulnerability in Jynx: contact address, safe harbour, what is in and out of scope, and how contributors are credited."
canonical: "https://jynx.app/security.html"
locale: "en"
dateModified: "2026-10-12"
generator: "jynx-md-siblings (scripts/generate-md-siblings.js)"
---

# Security & Vulnerability Disclosure Policy

Last updated: August 13, 2026

Effective date: August 13, 2026

## Reporting a Vulnerability

If you believe you have found a security vulnerability affecting Jynx, please email **[security@jynx.app](mailto:security@jynx.app)**. This address is monitored by the Jynx team.

A machine-readable version of this contact information is published at [/.well-known/security.txt](/.well-known/security.txt), in the format defined by [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116). The file is **PGP-signed**; the public key is published at [/.well-known/pgp-key.asc](/.well-known/pgp-key.asc) (key fingerprint `95C0 B6AC C22A 07CE BBE4 C465 DD41 721A 6D83 1567`) so you can verify its authenticity: `gpg --verify security.txt`.

Please do **not** open a public issue, post the details on social media, or disclose the finding publicly before we have had a reasonable opportunity to address it.

### What to Include

The more of the following you can provide, the faster we can act:

- **A clear description** of the issue and the security impact you believe it has.
- **Reproduction steps** — a proof of concept, request/response pair, screenshot, or short video.
- **The affected surface** — for example the app version and platform, the URL, or the API endpoint.
- **Your assessment** of severity, and any suggested mitigation.
- **How you would like to be credited**, if the finding is confirmed and you want to be listed (see [Acknowledgements](/acknowledgements.html)).

English and French are both fine.

## What You Can Expect From Us

Jynx is a small team, so we make commitments we can actually keep:

- **Acknowledgement** — we aim to confirm receipt of your report within **5 business days**.
- **Assessment** — we aim to tell you whether we consider the report valid, and our assessment of its severity, within **14 days** of acknowledgement.
- **Remediation** — confirmed issues are fixed on a timeline proportional to their severity. We will tell you when a fix has shipped.
- **Credit** — with your permission, confirmed reports are credited on our [Acknowledgements](/acknowledgements.html) page once the fix is live.

We may not be able to respond in detail to reports that fall entirely within the out-of-scope list below.

## Safe Harbour

We will not pursue or support legal action against you for security research conducted in good faith under this policy, provided that you:

- Make a good-faith effort to avoid privacy violations, data destruction, service degradation, and interruption to other users.
- Only interact with accounts you own or for which you have explicit permission from the account holder.
- Do not access, modify, download, or retain any Jynx user data beyond the minimum necessary to demonstrate the issue — and delete any such data as soon as the report is filed.
- Do not perform denial-of-service, volumetric, or load testing against our infrastructure.
- Do not use social engineering, phishing, or physical attacks against Jynx users, staff, or service providers.
- Give us a reasonable opportunity to remediate before disclosing publicly.

If in doubt about whether a specific test is acceptable, ask us at [security@jynx.app](mailto:security@jynx.app) before running it.

## Scope

The following surfaces are in scope:

- **The Jynx mobile apps** — Android and iOS, current released version.
- **The Jynx web app** — [web.jynx.app](https://web.jynx.app).
- **The Jynx backend** — our Cloud Functions API, database security rules, and file storage rules, insofar as they can be exercised from a normal client.
- **This website** — [jynx.app](https://jynx.app).

Third-party services we depend on (for example our hosting, database, email, and voice infrastructure providers) are **not** in scope. Please report issues in those products directly to the vendor concerned.

## Out of Scope

We are grateful for the attention, but the following are **not** treated as reportable vulnerabilities. They are, in the main, the output of free automated configuration scanners rather than findings with a demonstrated security impact on Jynx or its users:

### Email and DNS configuration

- Absence or configuration of **DNSSEC**.
- **DMARC** policy set to `p=none`, or the absence of a stricter policy.
- **SPF** using a soft-fail qualifier ( `~all`) rather than `-all`.
- Absence of **DKIM** on a given selector, **CAA**, **MTA-STS**, **TLS-RPT**, or **BIMI** records.
- Email spoofing reports that do not include a delivered proof of concept to a mailbox you control.

We track our own email and DNS authentication posture internally and improve it on our own schedule. Reports in this category will not be credited.

### Headers, TLS, and other configuration

- Missing or "weak" HTTP security headers without a demonstrated exploit.
- TLS configuration findings (cipher suites, protocol versions, HSTS preload status) without a demonstrated attack.
- Clickjacking on static pages with no state-changing action.
- Missing `Secure`, `HttpOnly`, or `SameSite` flags on cookies that carry no session or authentication value.
- Content spoofing or text injection with no HTML or script execution.
- Presence of a version banner, a public file, or a directory listing without demonstrated impact.

### Reports without demonstrated impact

- Raw output of an automated scanner, pasted without validation or a proof of concept.
- Self-XSS, or any issue that requires the victim to paste attacker-supplied content into their own console.
- Issues requiring a rooted, jailbroken, or otherwise compromised device, or a physically unlocked device.
- Issues requiring a man-in-the-middle position that the reporter has themselves created (for example, a user-installed root certificate).
- Outdated dependency versions without a working exploit path in Jynx.
- Rate limiting or brute-force concerns on endpoints that expose no sensitive data or state change.
- Denial of service, volumetric testing, or resource-exhaustion attacks of any kind.
- Social engineering, phishing, or physical attacks against Jynx users or staff.
- Publicly disclosed information that Jynx deliberately publishes (for example, the client-side Firebase configuration, which is public by design and protected by server-side security rules and App Check).

## No Monetary Bounty

Jynx does **not** operate a paid bug bounty programme and does not pay for vulnerability reports. We are a small independent team, and we would rather be straightforward about that up front than leave it ambiguous.

What we do offer, for confirmed and in-scope findings, is **public credit** on our [Acknowledgements](/acknowledgements.html) page — with your name or handle exactly as you would like it shown, and an optional link to your site or profile. That commitment is genuine and permanent.

Unsolicited invoices, payment demands, or requests for a "reward" attached to scanner output will not receive a response.

## Related Pages

- [Acknowledgements](/acknowledgements.html) — contributors we have credited.
- [Privacy Policy](/privacy.html) — how we handle personal data.
- [Terms of Service](/terms.html) — acceptable use.
- [Child Safety Policy](/child-safety.html) — reporting content that endangers a minor. Child safety reports should go to [support@jynx.app](mailto:support@jynx.app), not to the security address.

For privacy, data protection, and law enforcement requests, contact [dpo@jynx.app](mailto:dpo@jynx.app).
