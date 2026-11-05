import{h as t,c as a,j as n,r as i}from"./SiteHeader-CNOPVM1x.js";import{L as r}from"./LegalPage-Cfls9ZSw.js";const s=`# Terms of Service
**MateAI**

**Last Updated:** November 6, 2026  
**Effective Date:** November 5, 2026  

---


## Table of Contents
1. [Agreement to Terms](#1-agreement-to-terms)
2. [Description of Service](#2-description-of-service)
3. [User Accounts and Credential Custody](#3-user-accounts-and-credential-custody)
4. [Acceptable Use Policy](#4-acceptable-use-policy)
5. [User-Generated Content and Channel Media](#5-user-generated-content-and-channel-media)
6. [Intellectual Property and Licensing](#6-intellectual-property-and-licensing)
7. [Payment Terms and Pricing](#7-payment-terms-and-pricing)
8. [Free Trials and Subscriptions](#8-free-trials-and-subscriptions)
9. [Privacy and YouTube 30-Day Data Cache](#9-privacy-and-youtube-30-day-data-cache)
10. [Third-Party Services and Google API Compliance](#10-third-party-services-and-google-api-compliance)
11. [Disclaimers and Warranties](#11-disclaimers-and-warranties)
12. [Limitation of Liability](#12-limitation-of-liability)
13. [Indemnification](#13-indemnification)
14. [Termination and Access Revocation](#14-termination-and-access-revocation)
15. [Governing Law and Dispute Resolution](#15-governing-law-and-dispute-resolution)
16. [General Provisions and Contact](#16-general-provisions-and-contact)

---

## 1. Agreement to Terms

These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and MateAI ("we", "us", or "our") governing your access to and use of the MateAI desktop companion application, the Model Context Protocol (MCP) server, and associated software tools (collectively, the "Software").

MateAI is operated by Máté Góg, sole trader (Einzelunternehmen), 8412 Allerheiligen bei Wildon, Austria. Email: [gog.mate@gmail.com](mailto:gog.mate@gmail.com). Full legal notice: [Impressum](https://mateai-io.github.io/impressum/).

By downloading, installing, compiling, or executing the Software, you confirm that you have read, understood, and agreed to be bound by these Terms, as well as our [Privacy Policy](https://mateai-io.github.io/privacy).

**YouTube API Services Integration:**  
MateAI connects to and uses the official YouTube Data API and YouTube Analytics API. By using MateAI to interact with YouTube, you acknowledge and agree that you are also bound by the [YouTube Terms of Service](https://www.youtube.com/t/terms) and the [Google Privacy Policy](https://policies.google.com/privacy).

> **In Plain English:** By downloading or using MateAI, you agree to these ground rules and to YouTube's official Terms of Service. If you do not agree, do not install or use the app.

---

## 2. Description of Service

MateAI provides a local-first desktop application and MCP server designed to connect your YouTube channel and analytics data to local artificial intelligence assistants (such as Claude Desktop and Claude Code).

The Software operates locally on your device. MateAI does not operate remote intermediate proxy servers, cloud message relays, or centralized databases that store your credentials or private channel content. All API requests originate directly from your computer to Google/YouTube endpoints.

> **In Plain English:** MateAI is software that runs on your personal computer. There is no cloud middleman reading or storing your channel data.

---

## 3. User Accounts and Credential Custody

You do not create an account with MateAI. Access to YouTube data is authenticated using Google's official OAuth 2.0 protocol with loopback redirect and Proof Key for Code Exchange (PKCE).

OAuth access and refresh tokens stay on your device. The MateAI desktop app stores them in your operating system's native credential store (macOS Keychain). If you run the MCP server on its own (for example as a Claude Code plugin), it stores them in a file in its data folder that only your user account can read. You are solely responsible for maintaining physical and digital security of your device. MateAI never collects, transmits, or possesses copies of your authentication tokens.

You must be at least 13 years old (or 16 years old within the European Union) to use this Software, or have the consent of a parent or legal guardian.

> **In Plain English:** You authenticate directly with Google. Your login tokens stay on your computer: in the macOS Keychain with the desktop app, or in a private file when you use the MCP server on its own.

---

## 4. Acceptable Use Policy

You agree to use MateAI only for lawful channel management in accordance with applicable laws and YouTube policies. You agree not to:

1. Upload, publish, or distribute content that violates the [YouTube Community Guidelines](https://www.youtube.com/howyoutubeworks/policies/community-guidelines/), including copyright-infringing material, spam, hate speech, or harassment.
2. Automate repetitive or spam-like interactions, including mass comment posting or artificial engagement manipulation.
3. Attempt to bypass, disrupt, or circumvent YouTube API quota limitations or rate limits.
4. Modify or tamper with the Software to intercept tokens of other users or distribute malicious binaries.

> **In Plain English:** Do not use MateAI to spam, infringe copyrights, or break YouTube's rules.

---

## 5. User-Generated Content and Channel Media

You retain 100% ownership, title, and intellectual property rights in and to any videos, titles, descriptions, tags, thumbnails, and comments you manage, upload, or publish using MateAI.

MateAI claims zero ownership, license, or rights in your content. You represent that you possess all necessary rights and clearances for media published via the Software.

> **In Plain English:** Your channel and your videos belong completely to you. MateAI has no rights to your content.

---

## 6. Intellectual Property and Licensing

The MateAI desktop app is owned by Máté Góg. We grant you a free, personal, non-exclusive and non-transferable license to install and use it on computers you own or control, to manage your own channels. You may not sell, rent or redistribute the app or remove its notices. This license ends if you materially breach these Terms.

The MateAI MCP server is open source under the Apache License 2.0, published at [github.com/mategog/mateai-youtube-mcp](https://github.com/mategog/mateai-youtube-mcp). That license, not this section, governs the MCP server's source code.

All trademarks, logos, and brand elements of MateAI belong to their respective owners. YouTube is a registered trademark of Google LLC. Claude is a registered trademark of Anthropic PBC. MateAI is an independent project and is not affiliated with, sponsored by, or endorsed by Google LLC or Anthropic PBC.

> **In Plain English:** You can use the MateAI app for free on your own computer for your own channels, but please don't resell or redistribute it. The MCP server is open source (Apache 2.0). Google, YouTube and Claude are trademarks of their companies, and MateAI isn't affiliated with them.

---

## 7. Payment Terms and Pricing

MateAI Desktop and the companion MCP server are currently distributed free of charge. No payment details are requested or processed by the Software. We reserve the right to offer optional paid add-ons or commercial licenses in the future, subject to clear advance disclosure.

> **In Plain English:** The software is currently free. We do not collect credit cards or charge subscription fees.

---

## 8. Free Trials and Subscriptions

Because the Software is provided free of charge, there are no recurring subscription fees, automatic renewals, or trial cancellation requirements.

Third-party costs associated with running AI models (such as an Anthropic Claude subscription or API usage fees) or Google Cloud compute/quotas are your sole responsibility and are governed by your separate agreements with those providers.

> **In Plain English:** There are no trial periods or subscription lock-ins. Any third-party costs (like Claude or Google API) are paid directly to those providers.

---

## 9. Privacy and YouTube 30-Day Data Cache

Our data handling practices are described in detail in the [MateAI Privacy Policy](https://mateai-io.github.io/privacy).

**Compliance with YouTube Data Retention Rules:**  
In strict compliance with YouTube Developer Policies, any cached YouTube API data, channel snapshots, or analytical metrics stored locally on your device are automatically refreshed or deleted within **30 calendar days**.

> **In Plain English:** We adhere to YouTube's strict 30-day cache limit. Stored local data is automatically refreshed or wiped within 30 days.

---

## 10. Third-Party Services and Google API Compliance

MateAI interfaces with third-party APIs. Your use is subject to the terms and service levels of those third parties.

**Google API Limited Use Disclosure:**  
MateAI's use and transfer of information received from Google APIs adheres strictly to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements:
- Google user data is accessed only to provide user-directed channel management.
- Data is never transferred to third parties or sold.
- Data is never used for serving advertisements.
- Data is never used to train generalized artificial intelligence or machine learning models.

> **In Plain English:** We strictly obey Google's Limited Use policy: your data is never sold, never used for ads, and never used to train AI models.

---

## 11. Disclaimers and Warranties

The Software is provided free of charge. We do not promise that it will be error-free or uninterrupted, that it will achieve any particular result for your channel, or that it will stay compatible with future versions of YouTube APIs or operating systems. Your mandatory statutory rights remain unaffected. We encourage you to use the built-in dry-run feature before publishing real changes.

> **In Plain English:** The software is free and comes without guarantees beyond what the law requires. Use the dry-run feature to check uploads before publishing.

---

## 12. Limitation of Liability

We are liable without limitation for damage we cause intentionally or through gross negligence, and for personal injury. Because the Software is provided free of charge, we are not liable for damage caused by slight negligence, such as loss of revenue, loss of views, channel suspension or data loss, except where mandatory law (such as product liability law) provides otherwise.

> **In Plain English:** We're responsible if we cause harm on purpose or through gross carelessness. For small mistakes in free software, we're not.

---

## 13. Indemnification

If you culpably breach these Terms or YouTube's Terms of Service or Community Guidelines, or infringe other people's copyright, trademark or privacy rights through media you publish with the Software, you compensate us for the resulting damage in accordance with statutory law.

> **In Plain English:** If you use MateAI to infringe copyrights or break YouTube policies and that causes us damage, you're responsible for it.

---

## 14. Termination and Access Revocation

You may terminate this agreement at any time by uninstalling the Software and revoking Google OAuth access.

**How to Revoke Access:**
1. Click **Disconnect** in the MateAI Desktop application to remove tokens from your local Keychain; or
2. Visit [https://myaccount.google.com/permissions](https://myaccount.google.com/permissions) to remove MateAI's permissions directly from your Google account.

We reserve the right to discontinue the Software or cease providing updates at any time.

> **In Plain English:** You can walk away and revoke access whenever you want, either inside the app or in your Google security settings.

---

## 15. Governing Law and Dispute Resolution

These Terms are governed by the laws of **Austria**, excluding its conflict of laws rules. If you are a consumer, this choice of law does not deprive you of the protection of the mandatory provisions of the law of the country where you habitually reside.

If you are a consumer, you may bring proceedings either in the courts of your place of residence or in the courts competent for our place of business; we may bring proceedings against you only in the courts of your place of residence. If you are not a consumer, the courts competent for our place of business have exclusive jurisdiction.

> **In Plain English:** Austrian law applies, but as a consumer you keep the protections of your home country's law and can take us to court where you live.

---

## 16. General Provisions and Contact

If any provision of these Terms is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall remain in full force and effect.

These Terms and the Privacy Policy constitute the entire agreement between you and MateAI regarding the Software.

**Contact Information:**  
- **Operator:** Máté Góg, sole trader, 8412 Allerheiligen bei Wildon, Austria ([Impressum](https://mateai-io.github.io/impressum/))  
- **Support Email:** [gog.mate@gmail.com](mailto:gog.mate@gmail.com)  
- **Website:** [https://mateai-io.github.io](https://mateai-io.github.io)
`,e=document.getElementById("root"),o=n.jsx(i.StrictMode,{children:n.jsx(r,{markdown:s})});e.hasChildNodes()?t(e,o):a(e).render(o);
