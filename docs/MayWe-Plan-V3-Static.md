# MayWe NGO — Website Plan V3 (Static)

**Organisation:** MayWe (Not-for-Profit)
**Document Version:** 3.0
**Date:** 2026-06-19
**Status:** Built — pending content & account setup
**Supersedes:** MayWe-Plan-V2 (WordPress/dynamic). This version re-scopes the
project for **free static hosting** with no server, no database and no monthly
cost, per the NGO's budget constraint.

---

## 1. What changed from V2, and why

The NGO cannot fund dynamic hosting (AWS/WordPress). V3 keeps the mission and
nearly all of the visitor-facing features, but moves every "dynamic" job off our
own server onto **free third-party services**. The site itself is static HTML —
it can be hosted free, loads fast on rural 4G, and has almost no attack surface.

| Concern | V2 (WordPress) | V3 (Static) |
|---|---|---|
| Monthly cost | $6–50+ hosting | **₹0** (domain already owned) |
| Server / DB to maintain | Yes | **None** |
| PII stored on our server | Yes (risk) | **None** — held by Tally/Google, access-controlled |
| Payment handling | Self-hosted GiveWP | **Offloaded** to hosted donation page |
| Performance on 4G | Variable (plugin bloat) | **Excellent** (static + CDN) |
| Founder publishing | WP admin | Git-based CMS at `/admin` |

## 2. Technology stack

| Job | Choice | Notes |
|---|---|---|
| Static site generator | **Astro** | Content-focused, ships almost no JS |
| Styling | **Tailwind CSS v4** | Design tokens from §8 of the brand spec |
| Content editing (founders) | **Sveltia CMS** (`/admin`) | Decap-compatible, Git-based, free |
| Hosting + CDN | **Cloudflare Pages** | Free, unlimited bandwidth; Netlify works too |
| Donations + 80G receipts | **Razorpay Payment Pages** or **Danamojo** | See `donation-providers-comparison.md` |
| Contact / Volunteer / CSR forms | **Web3Forms** | No backend; emails submissions |
| Scholarship form | **Tally.so** | File uploads, no applicant login |
| Newsletter + email blasts | **Brevo** | Free tier; embed signup, blast from dashboard |
| Click-to-chat | **`wa.me` links** | No WhatsApp Business API needed |
| Analytics | **GA4** (optional) | Snippet stubbed in `BaseLayout.astro` |

## 3. Audience segments (unchanged)

| Segment | Primary goal on site | Key pages |
|---|---|---|
| Individual donors | Donate; follow our work | Home, Donate, Stories |
| Corporate CSR partners | Evaluate credibility; partner | Partner, Impact, About |
| Girls / families | Apply for a scholarship | Scholarship |
| Volunteer mentors | Sign up to mentor | Volunteer |
| Government / grant bodies | Verify legitimacy & reach | About, Impact, Programs |

## 4. Page inventory (16 routes)

| Page | Route | Source |
|---|---|---|
| Home | `/` | `src/pages/index.astro` |
| About | `/about` | `about.astro` |
| Programs | `/programs` | `programs.astro` (from `content/programs`) |
| Stories index | `/stories` | `stories/index.astro` |
| Single story | `/stories/[slug]` | `stories/[...slug].astro` |
| Impact | `/impact` | `impact.astro` |
| Donate | `/donate` | `donate.astro` |
| Apply for Scholarship | `/scholarship` | `scholarship.astro` |
| Volunteer / Mentor | `/volunteer` | `volunteer.astro` |
| Partner with Us (CSR) | `/partner` | `partner.astro` |
| Events | `/events` | `events.astro` (from `content/events`) |
| Contact | `/contact` | `contact.astro` |
| Privacy Policy | `/privacy` | `privacy.astro` |
| Terms of Use | `/terms` | `terms.astro` |
| Thank-you | `/thank-you` | `thank-you.astro` (form redirect target) |
| 404 | `/404` | `404.astro` |

Friendly redirects: `/csr→/partner`, `/apply→/scholarship`, `/mentor→/volunteer`,
`/blog→/stories` (see `public/_redirects`).

## 5. Feature mapping vs V2 (what was kept, trimmed, changed)

**Kept (full):** content pages, blog/stories with founder publishing, donations,
email capture + newsletter, scholarship applications, volunteer signup, CSR
inquiry, impact display, WhatsApp click-to-chat, FCRA disclaimer, 80G display,
child-protection consent gating.

**Trimmed / changed:**

| V2 feature | V3 status | Reason |
|---|---|---|
| On-site scholarship management (status workflow, internal notes) | **Cut** — submissions land in Tally/Google, tracked in a sheet | No database |
| Automated post-donation drip (Day 0/3/30) | **Manual** welcome + periodic newsletters | No CRM-payment link |
| Live campaign progress bars | **Manual %** (edited in CMS) | No live donation data |
| CSR Transparency Pack password protection | **On-request** document sharing | Static can't gate easily |
| Events with native RSVP DB | **Static list** + form/WhatsApp RSVP | No database |
| Auto donor tagging / segments | **Basic ESP list** | No server automation |
| 4 payment gateways self-hosted | **One hosted provider** | Offloaded |

## 6. Compliance & child protection (carried over from V2)

These remain mandatory and are designed into the build:

- **80G / PAN** displayed on Donate, About and footer (from `config.ts`).
- **FCRA**: international giving hidden behind a disclaimer until `legal.fcraGranted`
  is set to `true` in `config.ts`.
- **Child protection (CP-01):** every story has `hasChildPhoto` /
  `guardianConsentOnFile` flags in its frontmatter and CMS; consent forms are kept
  offline. The site copy states images of minors are published only with consent.
- **Scholarship PII (CP-02/03):** documents are collected by Tally (not our
  server) and must be deleted after each cycle. HTTPS is automatic on Cloudflare.
- **Privacy Policy** discloses child-data collection, retention and deletion rights.

> **Launch sequencing (important):** 80G/12A/FCRA registrations take time and are
> outside the website's control. The site can **soft-launch** today with all
> content pages; turn on the Donate links once 80G is granted, and flip
> `fcraGranted` once FCRA is granted. Nothing else blocks go-live.

## 7. Non-functional targets

- **Performance:** static + CDN; target Lighthouse ≥ 90 mobile (no Elementor bloat).
- **Responsive:** mobile-first; ≥1024 / 768 / <768 breakpoints; 44px touch targets.
- **Accessibility:** WCAG 2.1 AA target — semantic HTML, alt text, focus rings,
  reduced-motion support, skip link, aria-labels on icon buttons.
- **SEO:** per-page titles/descriptions, Open Graph, canonical, sitemap, robots.txt.
- **Security headers:** set in `public/_headers`.

## 8. Design system

Implemented in `src/styles/global.css` as Tailwind tokens — greens (growth),
saffron (Indian warmth), teal (trust); Inter for body, Playfair Display for
headings. Cards: white, 12px radius, soft shadow, hover lift. See the brand
spec §8 of the original plan for the source palette.

## 9. Phase plan (re-sequenced for static + compliance)

**Phase 0 — Accounts (NGO, in parallel):** GitHub, Cloudflare, Razorpay/Danamojo,
Web3Forms, Tally, Brevo. (See `content-checklist.md`.)

**Phase 1 — Configure (½ day):** fill `src/config.ts`, `.env`, `impact.json`;
add logo + real images.

**Phase 2 — Content (founders):** replace seed stories/team/about with real
content via `/admin`; gather guardian consents for any child photos.

**Phase 3 — Soft launch:** deploy to Cloudflare Pages; all content pages live.
Donate buttons can point to a "coming soon"/contact until 80G is granted.

**Phase 4 — Transactions on:** once 80G granted, paste donation links; once FCRA
granted, set `fcraGranted: true` and add the international link.

**Phase 5 — Ongoing:** publish stories, update impact numbers, run newsletters.

## 10. Acceptance criteria (static)

| # | Test | Expected |
|---|---|---|
| 1 | Founder publishes a story in `/admin` | Appears on `/stories` after rebuild |
| 2 | Donate button | Opens hosted payment page (UPI/card/netbanking) |
| 3 | Newsletter signup | Lands in Brevo/inbox |
| 4 | Scholarship form submit | Stored in Tally; confirmation to applicant |
| 5 | Volunteer / CSR / Contact submit | Email received; redirect to `/thank-you` |
| 6 | Impact counters | Animate on scroll; editable in CMS |
| 7 | International donation | FCRA disclaimer shown while `fcraGranted=false` |
| 8 | Mobile Lighthouse | ≥ 90 performance |
| 9 | WhatsApp buttons (Donate, Scholarship) | Open chat with pre-filled message |
| 10 | Story with child photo | Cannot be set live without consent flags set |
