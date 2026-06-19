# Content & Accounts Checklist (before launch)

What MayWe needs to supply or set up before the site goes live. Nothing here
requires a developer except pasting a few values into `config.ts`.

## A. Accounts to create (all free to start)

| Service | Purpose | Needed for |
|---|---|---|
| GitHub | Stores the site + content | Hosting + CMS |
| Cloudflare | Hosting + CDN | Go-live |
| Razorpay **or** Danamojo | Donations + 80G | Donate page |
| Web3Forms | Form submissions → email | Contact/Volunteer/CSR |
| Tally.so | Scholarship form + file uploads | Scholarship page |
| Brevo | Newsletter + email blasts | Newsletter |
| Google Analytics 4 | Traffic stats (optional) | Analytics |
| Dedicated WhatsApp number | Click-to-chat | Donate/Scholarship/CSR |

## B. Brand & media assets

| Item | Notes | Used on |
|---|---|---|
| Logo (SVG + PNG) | Replaces `public/images/logo.svg` & `logo-white.svg` | Header, footer |
| Hero photo | Girls in a classroom; 1600px+ wide | Home |
| Founder & team photos | Square works best | About |
| Program photos (×3) | Hygiene, scholarships, mentorship | Programs |
| Story photos | One per story; **guardian consent if a child is shown** | Stories |

> Until real images are added, the site shows tasteful coloured placeholders.

## C. Text content

| Item | Length | Used on |
|---|---|---|
| Founding story | 300–400 words | About |
| Team bios | 1–2 lines each | About |
| Program descriptions | 100–200 words each | Programs |
| 2+ launch stories | — | Stories, Home |
| Scholarship eligibility & FAQ | confirm details/amount/dates | Scholarship |

## D. Legal / compliance values (into `config.ts`)

| Value | Status needed |
|---|---|
| Organisation legal name & entity type | Required |
| Registration number | Required |
| PAN | Required (shown on receipts) |
| 80G number | **Before soliciting tax-deductible donations** |
| 12A number | Recommended (CSR due diligence) |
| FCRA | **Before international donations** — keep `fcraGranted=false` until granted |
| Privacy Policy & Terms | Lawyer review recommended |
| Guardian consent / media-release form | Drafted, stored offline (child protection) |

## E. Impact numbers (into `src/data/impact.json`)

- Girls Supported
- Schools Served
- Funds Raised (₹)
- Hygiene Kits Distributed
- Fund allocation % (programs / admin / fundraising)
- Annual Impact Report PDF (when available)

## F. Donation links (into `config.ts` / CMS)

- General donation page URL
- Campaign page URLs (Build a Toilet Block, Sponsor a Girl's Year, Hygiene Kits)
- International donation page URL (after FCRA)

---

### Minimum to soft-launch (content pages only, no donations yet)
Logo · hero image · founding story · 2 stories · team names/roles · org legal
name. Everything else can follow, and Donate/Scholarship switch on as the
relevant accounts and registrations come through.
