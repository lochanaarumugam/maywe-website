# Deployment Guide — MayWe Website

Deploy the static site to **Cloudflare Pages** (free, unlimited bandwidth) and
connect the **Sveltia CMS** so founders can edit content. Netlify works the same
way if you prefer it.

---

## Prerequisites

- A **GitHub** account (free) — holds the code and content.
- A **Cloudflare** account (free).
- The domain MayWe already owns.
- Accounts for the offloaded services (see `content-checklist.md`).

---

## Step 1 — Put the code on GitHub

```bash
bash scripts/setup.sh         # installs deps; offers to init git
# then, if not already done:
git remote add origin git@github.com:your-org/maywe.git
git push -u origin main
```

---

## Step 2 — Connect Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the `maywe` repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Root directory:** `apps/web`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Environment variables** (Settings → Environment variables) — add the ones
   from `apps/web/.env.example`:
   - `PUBLIC_WEB3FORMS_KEY`
   - `PUBLIC_NEWSLETTER_ACTION` (optional)
5. **Save and Deploy.** You'll get a `*.pages.dev` URL.

---

## Step 3 — Connect the custom domain

1. Pages project → **Custom domains → Set up a domain** → enter MayWe's domain.
2. Follow the DNS instructions. SSL/HTTPS is automatic and site-wide.
3. Update `site:` in `apps/web/astro.config.mjs` and `site.url` in
   `src/config.ts` to the real domain (for correct sitemap/social URLs), commit,
   push — it redeploys automatically.

---

## Step 4 — Connect the Content Manager (`/admin`)

Sveltia CMS commits content changes to GitHub via an OAuth app.

1. Edit `apps/web/public/admin/config.yml` → set `repo: your-org/maywe`.
2. Set up GitHub OAuth for the CMS. Easiest options:
   - **Sveltia's recommended Cloudflare Worker authenticator** (free) — follow
     the Sveltia CMS docs, then no extra service is needed; or
   - Any Decap-compatible OAuth provider.
3. Add the founders as **collaborators** on the GitHub repo so they can sign in.
4. Founders visit `yourdomain.com/admin`, sign in with GitHub, and edit. Saving
   commits to `main`, which triggers a Cloudflare rebuild (~1 minute to live).

> **Local editing without OAuth:** run `npm run dev` and open
> `http://localhost:4321/admin` — Sveltia offers "Work with Local Repository".

---

## Step 5 — Wire up the offloaded services

| Service | What to do | Where the value goes |
|---|---|---|
| **Web3Forms** | Get a free access key | `PUBLIC_WEB3FORMS_KEY` env var |
| **Tally** | Build the scholarship form; copy its form ID | `forms.scholarshipTallyId` in `config.ts` |
| **Razorpay/Danamojo** | Create donation page(s); copy URLs | `donate.general` + campaign `donateUrl`s |
| **Brevo** | Create a signup form; copy embed action URL | `PUBLIC_NEWSLETTER_ACTION` (optional) |
| **WhatsApp** | Dedicated org number, digits only | `contact.whatsapp` in `config.ts` |
| **GA4** (optional) | Create property; paste ID | uncomment GA block in `BaseLayout.astro` |

---

## Step 6 — Pre-launch checks

- [ ] All `REPLACE…` values in `config.ts` filled in.
- [ ] Real impact numbers in `src/data/impact.json`.
- [ ] Logo + key images replaced (`public/images/`).
- [ ] Test each form → confirm the email/submission arrives.
- [ ] Test the Donate button → reaches the payment page.
- [ ] 80G number present on Donate/About/footer (once granted).
- [ ] `legal.fcraGranted` correct (false until FCRA granted).
- [ ] Privacy Policy & Terms reviewed by a lawyer.
- [ ] Run Lighthouse on mobile (target ≥ 90).
- [ ] Submit the sitemap (`/sitemap-index.xml`) in Google Search Console.

---

## Rolling back

Cloudflare Pages keeps every deployment. If something breaks, open the Pages
project → **Deployments** → pick a previous good build → **Rollback**.
