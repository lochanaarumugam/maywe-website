# MayWe — NGO Website

A fast, **static** website for MayWe, a not-for-profit improving hygiene
infrastructure and funding scholarships for tribal and rural girls in India.

Deployed on **Cloudflare Workers** (static assets) via the connected GitHub repo —
every push to `main` triggers a Cloudflare build + deploy. All dynamic work
(donations, forms, email) is offloaded to free third-party services, so there's
no server or database to maintain.

## Stack

| Job | Tool |
|---|---|
| Site / blog build | Astro (static) + `@astrojs/cloudflare` adapter |
| Styling | Tailwind CSS v4 |
| Hosting + CDN | Cloudflare Workers (assets) |
| Founders edit content | Sveltia CMS at `/admin` |
| Donations + 80G | Razorpay Payment Pages / Danamojo (hosted) |
| Contact / Volunteer / CSR forms | Web3Forms |
| Scholarship form | Tally.so (file uploads, no login) |
| Newsletter + blasts | Brevo |
| Click-to-chat | `wa.me` links |

## Develop

```bash
npm install
npm run dev        # http://localhost:4321  (CMS at /admin)
npm run build      # static build → dist/ (with Cloudflare worker)
npm run preview    # build + run via wrangler locally
npm run deploy     # manual wrangler deploy (CI does this automatically on push)
```

> Requires Node ≥ 22.

## Configure for MayWe

1. **`src/config.ts`** — the one file with all org details. Replace every
   `REPLACE…` value (email, WhatsApp number, 80G/PAN/registration, donation
   links, form keys, social links).
2. **`.env`** — paste your Web3Forms key (see `.env.example`). In production, set
   these as Cloudflare build environment variables.
3. **`src/data/impact.json`** — the impact numbers.
4. **`src/content/`** — stories, programs, events, team, campaigns (or edit via
   `/admin`).
5. Replace placeholder images under `public/images/`.
6. Set the real domain in `astro.config.mjs` (`site`) and `src/config.ts`.

## Deploy / hosting

This repo is connected to **Cloudflare Workers Builds**. On push to `main`,
Cloudflare runs `npm run build` and deploys per `wrangler.json` (serves `dist/`
via the `ASSETS` binding; the Astro adapter emits `dist/_worker.js`).

Connect the Content Manager (`/admin`) and finish setup using **`docs/deployment.md`**.

## Documentation

See **`docs/`**: V3 plan, wireframes, donation-provider comparison, founder guide,
deployment guide and the pre-launch content checklist. Start with
`docs/founder-guide.md` (non-technical) and `docs/deployment.md`.
