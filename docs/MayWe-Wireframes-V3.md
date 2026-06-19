# MayWe NGO — Website Wireframes V3 (Static)

**Version:** 3.0 · **Date:** 2026-06-19 · **Status:** Built
These reflect the **as-built static site**. Where V2 had self-hosted dynamic
features, V3 links/embeds free hosted services (marked `→ hosted`).

```
Legend:  [ Button ]   [____ input ____]   (v) dropdown   ▓ image placeholder
         → hosted = offloaded to a free third-party service
```

---

## Global components

### Header (sticky, all pages)
```
┌───────────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BAR: "Applications open for 2026 scholarship" [→]  │  ← config.announcement
├───────────────────────────────────────────────────────────────┤
│ [◐ MayWe]   About  Programs  Stories  Impact  Events  Contact   │
│                                                  [ Donate ]      │  ← saffron
└───────────────────────────────────────────────────────────────┘
Mobile: logo left + ☰ hamburger → slide-in drawer.
```

### Footer (all pages except Donate)
```
┌───────── NEWSLETTER (green-50) ─────────┐
│ "Stay connected with MayWe's work"       │
│ [___ email ___]  [ Subscribe ]  → Brevo  │
├──────────┬──────────┬──────────┬─────────┤
│ MayWe    │ Explore  │ Get      │ Reach us │
│ logo     │ Home     │ involved │ ✉ email  │
│ tagline  │ About…   │ Donate   │ 📍 India │
│ socials  │ …        │ Apply…   │[Donate]  │
├──────────┴──────────┴──────────┴─────────┤
│ Reg No · PAN · 80G · © 2026 · Privacy · Terms │
└───────────────────────────────────────────────┘
```

### WhatsApp floating button — Donate + Scholarship pages only
```
                              [ 💬 Chat on WhatsApp ]  ← fixed bottom-right, wa.me
```

---

## Page 1 — Home  (`/`)
```
┌─────────────────────────── HERO (green-50, 2-col) ───────────────────────────┐
│ "Every girl deserves to stay in school."        │                            │
│  sub-tagline…                                    │    ▓ hero photo ▓          │
│  [ Donate Now ]  [ Our Impact → ]                │                            │
├──────────────────────── IMPACT COUNTERS (white) ─────────────────────────────┤
│  2,400+ Girls  │  48 Schools  │  ₹32,00,000 Raised │  9,600+ Kits  (animated) │
├──────────────────────── OUR PROGRAMS (green-50) ─────────────────────────────┤
│  [🚰 Hygiene]      [🎓 Scholarships]      [🤝 Mentorship]   → from CMS         │
├──────────────────────── LATEST STORIES (white, 3 cards) ─────────────────────┤
│  ▓img · category · title · date·read · excerpt · Read more →                  │
│                          [ View all stories → ]                               │
├──────────────────────── DONATE CTA (dark green) ─────────────────────────────┤
│  "Help a girl stay in school."  [₹500][₹1,000][₹2,500][₹5,000]  [Donate Now] │
├──────────────────────── VOLUNTEER STRIP (saffron-100) ───────────────────────┤
│  "Share your expertise. Change a life."   [ Become a Mentor → ]               │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Page 2 — About  (`/about`)
```
PAGE HERO (green)
OUR STORY (2-col: founding text  |  ▓ founders photo + consent note)
MISSION | VISION (2 cards, green-50)
OUR TEAM (3 cards: photo · name · role · bio)   → from CMS
LEGAL & REGISTRATIONS (centred card: Reg No · PAN · 80G · 12A · entity · state)
```

## Page 3 — Programs  (`/programs`)
```
PAGE HERO (green)
For each program (alternating image side, from CMS):
┌──────────────────────────────┬───────────────┐
│ 🚰 Title                      │   ▓ photo     │
│ description + ✓ what we do    │               │
│ impact-to-date                │               │
│ [ Donate / Apply / Volunteer ]│               │
└──────────────────────────────┴───────────────┘
```

## Page 4 — Stories index  (`/stories`)
```
PAGE HERO (green)
[ All ][ Hygiene ][ Scholarships ][ Events ][ Impact Stories ]  ← JS filter tabs
┌── story grid (2-col) ──┐  ┌── sidebar ──┐
│ ▓ cards…               │  │ Donate CTA  │
│                        │  │ Categories  │
└────────────────────────┘  └─────────────┘
```

## Page 5 — Single story  (`/stories/[slug]`)
```
POST HEADER (green-50): ← all stories · category badge · Title · author·date·read
▓ FEATURED IMAGE (consent verified before upload)
POST BODY (narrow reading column; Markdown: headings, quotes, YouTube embeds)
Tags · Share: [WhatsApp][Facebook][Twitter/X][Email]
INLINE DONATE CTA (saffron-100)
RELATED STORIES (same category, 3 cards)
```

## Page 6 — Impact  (`/impact`)
```
DARK HERO · "Every number is a girl whose life changed."
IMPACT COUNTERS (large, animated)
ANNUAL REPORT (download PDF)  |  WHERE YOUR MONEY GOES (bars 75/15/10)
IMPACT STORIES GRID (category = Impact Stories)
DONATE CTA (dark green)
```

## Page 7 — Donate  (`/donate`)   *(no footer newsletter; WhatsApp button on)*
```
GRADIENT HEADER · "Your gift stays in India" · 80G No · PAN
┌──────── DONATE PANEL (2/3) ─────────┐  ┌─ WHERE MONEY GOES (1/3) ─┐
│ [₹500][₹1,000][₹2,500][₹5,000]      │  │ bars 75/15/10            │
│ [ Donate Securely → ]  → hosted      │  │ 80G tax-benefit note     │
│ 🔒 provider handles payment          │  └──────────────────────────┘
│ ⚠ FCRA disclaimer (until granted)    │
└──────────────────────────────────────┘
CAMPAIGN CARDS (3, manual progress %)  [Donate to this →] → hosted per-campaign
```

## Page 8 — Apply for Scholarship  (`/scholarship`)   *(WhatsApp button on)*
```
TEAL GRADIENT HEADER · deadline · results date
┌──────── FORM AREA (2/3) ────────┐  ┌─ INFO SIDEBAR (1/3) ─┐
│ ELIGIBILITY (✓ list, green-50)  │  │ Scholarship details   │
│ ┌─ Tally form embed ─┐ → hosted  │  │ FAQ accordion         │
│ │ (file uploads, no   │           │  └───────────────────────┘
│ │  applicant login)   │           │
│ └─────────────────────┘           │
│ confirmation email · docs purged  │
└───────────────────────────────────┘
```

## Page 9 — Volunteer / Mentor  (`/volunteer`)
```
SAFFRON→GREEN HEADER · "Give 2 hours. Change a life."
WHAT MENTORING INVOLVES (list)  |  TIME COMMITMENT (card)
BENEFITS (4 cards)
SIGN-UP FORM → Web3Forms (→ /thank-you) · "or message us on WhatsApp"
```

## Page 10 — Partner with Us / CSR  (`/partner`)
```
DARK HEADER · "Align your CSR mandate with measurable impact."
WHY MAYWE (✓ list)  |  MAYWE AT A GLANCE (dark card, live from impact.json)
SCHEDULE VII ALIGNMENT TABLE
TRANSPARENCY PACK (doc chips → request on Contact)   ← simplified from V2 password gate
TALK TO US (email + 💬 WhatsApp)  |  CSR INQUIRY FORM → Web3Forms
```

## Page 11 — Events  (`/events`)
```
PAGE HERO (green)
UPCOMING EVENTS (cards: ▓ · date·time·location · title · desc · [Register →])
  → register link, or WhatsApp fallback
▸ View past events (collapsible list)
```

## Page 12 — Contact  (`/contact`)
```
PAGE HERO (green)
CONTACT FORM (2/3) → Web3Forms (→ /thank-you)  |  DETAILS (1/3): email · WhatsApp · response time
```

## Utility pages
- **/thank-you** — confirmation after any form submit (message varies by form).
- **/privacy** — incl. children's-data disclosure, retention, deletion rights.
- **/terms** — donations, applications, content.
- **/404** — friendly not-found with Home + Donate CTAs.

---

## Responsive behaviour
| Breakpoint | Change |
|---|---|
| ≥ 1024px | Full multi-column layouts |
| 768–1023px | Sidebars drop below; 3-col → 2-col |
| < 768px | Single column; header → hamburger drawer; counters 2×2 |

## Interaction notes
| Component | Behaviour |
|---|---|
| Impact counters | Count up from 0 on scroll (IntersectionObserver); respects reduced-motion |
| Reveal sections | Fade/slide in on scroll |
| Mobile drawer | Slides from right; closes on overlay/Escape |
| Sticky header | Shadow appears after 80px scroll |
| Story filter tabs | Client-side show/hide by category |
| WhatsApp buttons | `wa.me` links with pre-filled, page-specific messages |
| FCRA disclaimer | Auto-shown until `legal.fcraGranted = true` |
| Forms | POST to hosted service, redirect to `/thank-you`; honeypot anti-spam |
```
