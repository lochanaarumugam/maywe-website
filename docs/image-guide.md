# MayWe — Image Guide

How to add real photos to the site. The site is built so that **dropping a
correctly-named file in and running one command makes the photo appear** — no
code editing. Until a real file exists, a tasteful gradient placeholder shows,
so nothing ever looks broken.

---

## 1. Two non-negotiable rules

1. **Human, not generic.** Use warm, candid photos of real girls, classrooms,
   handwash stations and workshops — never polished, generic stock.
2. **Consent for children.** A signed **guardian consent / media-release form**
   must be on file (offline) for any identifiable child. If you don't have
   consent, use consent-safe framing: hands washing, a girl writing seen from
   behind, feet walking to school, close-ups of a tap or a sanitary kit.

---

## 2. The workflow (drag, drop, one command)

1. Put source images (any size; `.jpg`, `.png`, `.webp`) into the **`raw-images/`**
   folder, named after the slot (see the table below) — e.g. `hero.jpg`,
   `program-hygiene.jpg`, `story-lakshmi.jpg`.
2. Run:
   ```bash
   npm run images
   ```
   Each file is cropped to the right shape (auto-focusing on faces), converted to
   WebP, and written to `public/images/`.
3. Commit & push (or `npm run dev` to preview). Cloudflare rebuilds and the photos
   are live.

> The originals in `raw-images/` are **not** committed — only the optimised
> files in `public/images/`. You don't edit any code.

---

## 3. Slot names → what to shoot → output size

| Drop this file | Appears on | Shoot | Output |
|---|---|---|---|
| `hero.jpg` | Home hero | Rural girls in a classroom, warm light | 1600×1200 |
| `about-story.jpg` | About — Our Story | Founders/team with students in the field | 1200×900 |
| `program-hygiene.jpg` | Programs | Girls at a handwash station / new toilet block | 1200×900 |
| `program-scholarships.jpg` | Programs | A girl studying, books, focused | 1200×900 |
| `program-mentorship.jpg` | Programs | Mentor + student talking / workshop | 1200×900 |
| `story-toilet-block.jpg` | Story card + page | A toilet block / school building | 1200×675 |
| `story-lakshmi.jpg` | Story card + page | A college-age girl (consented) or consent-safe | 1200×675 |
| `story-selection.jpg` | Story card + page | Reviewing applications / desk with papers | 1200×675 |
| `story-handwash.jpg` | Story card + page | Children at a handwash station | 1200×675 |
| `team-1.jpg` `team-2.jpg` `team-3.jpg` | About — Team | Square headshots | 400×400 |
| `og-default.jpg` | Social share card | Branded hero (optional; a default is shipped) | 1200×630 → PNG |

**New stories/events you add later:** name the cover `story-<something>.jpg` or
`event-<something>.jpg`, run `npm run images`, then set that image in the CMS
cover field (or the markdown `cover:`). Any `story-*` becomes 16:9, any
`event-*` becomes 1200×900 automatically.

---

## 4. Where to source photos (free, commercial-use)

- **MayWe's own field photos** — always best (with consent).
- **Pexels**, **Unsplash**, **Pixabay** — free, no attribution. Try:
  `rural india school girls`, `indian classroom`, `handwashing children`,
  `indian schoolgirl studying`, `village india education`.
- **Wikimedia Commons** — documentary rural-India photos (CC-BY, *credit needed*).
- **WaterAid / UNICEF / Gates Foundation** image libraries — WASH + education
  (check each license).
- For the most India-authentic hero (paid, cheap): **ImagesBazaar**, **iStock India**.

Avoid AI-generated images for anything implying a real beneficiary — for an NGO
it reads as misleading and risks trust.

---

## 5. The social-share (OG) image

`public/images/og-default.png` is what WhatsApp/Facebook/LinkedIn show when the
site is shared. A branded default ships with the repo. To replace it, drop
`og-default.jpg` (1200×630-ish) in `raw-images/` and run `npm run images`.

Individual stories automatically use their own cover image as the share image.
