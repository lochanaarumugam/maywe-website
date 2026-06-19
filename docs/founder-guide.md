# MayWe Website — Founder's Guide (non-technical)

This guide is for the MayWe team to run the website day-to-day **without a
developer**. You don't need to know any code.

---

## 1. The big picture

Your website is made of **content** (stories, programs, events, numbers) that you
edit, and a **design** that stays consistent automatically. When you save a change,
the site rebuilds itself and the update appears live in a minute or two.

You edit content in one of two ways:
- **Content Manager** at **`yourdomain.com/admin`** — a friendly editor (recommended).
- Or directly in the files under `apps/web/src/content/` (for developers).

---

## 2. Publishing a story / blog post

1. Go to **`/admin`** and sign in.
2. Click **Stories → New Story**.
3. Fill in:
   - **Title**, **Excerpt** (1–2 line summary shown on cards)
   - **Category** — Hygiene, Scholarships, Events, or Impact Stories
     *(Impact Stories also show on the Impact page)*
   - **Date**, **Cover image** (optional), **Body** (the article)
   - **Tags** (optional)
4. **If the post has a photo of a child**, switch on **"Contains a photo of a
   child?"** — and make sure you have a **signed guardian consent / media-release
   form** on file offline. Also switch on "Guardian consent on file".
5. Leave **Draft** off to publish (or on to save without publishing).
6. Click **Save / Publish**. The site updates shortly after.

**Embedding a video:** in the Body, paste a YouTube or Vimeo link on its own line.
Don't upload video files (keeps the site fast and free).

---

## 3. Updating the impact numbers

The four big numbers (Girls Supported, Schools Served, Funds Raised, Hygiene Kits)
appear on the Home and Impact pages.

- In `/admin` → **Site data → Impact numbers**, edit each counter's value.
- "Funds Raised" uses **Funds** format to show ₹ with Indian grouping.
- You can also edit the **"where your money goes"** percentages here.

---

## 4. Adding events

`/admin` → **Events → New Event**. Set the date — events automatically move from
"Upcoming" to "Past events" once the date has passed. For registration, paste a
form link, or leave it blank and visitors will be sent to WhatsApp to register.

---

## 5. Donation links & campaigns

- The main **Donate** button and amount buttons point to your hosted donation page
  (Razorpay/Danamojo). A developer sets this once in `config.ts`.
- **Campaigns** (Donate page) are editable in `/admin → Donation campaigns`: title,
  goal, amount raised (update this manually), and the campaign's donation URL.

---

## 6. Forms — where submissions go

| Form | Goes to |
|---|---|
| Contact, Volunteer, CSR | Your email inbox (via Web3Forms) |
| Scholarship | Your Tally.so account (with uploaded documents) |
| Newsletter signup | Your Brevo (email) account |

You **track scholarship applications in Tally / a Google Sheet**, not on the
website. **Delete scholarship documents after each selection cycle** (data-privacy
requirement) — do this in your Tally account.

---

## 7. Sending a newsletter / email blast

1. People who subscribe on the site land in your **Brevo** account.
2. In Brevo, compose a campaign and send it to your list.
3. Free tier sends a few hundred emails/day — plenty to start.

---

## 8. Replacing images

Add image files to `apps/web/public/images/` (a developer or via the CMS image
picker), then select them in the relevant story/program. Until you add real
photos, the site shows tasteful coloured placeholders — nothing looks broken.

**Always add alt text** (a short description) for accessibility, and **only
publish photos of children with guardian consent.**

---

## 9. Things only a developer touches (once)

- `apps/web/src/config.ts` — org details, donation links, form keys, WhatsApp number.
- Deploying / connecting the CMS (see `deployment.md`).
- Design changes.

---

## 10. Golden rules

- ✅ Keep guardian consent forms for **every** child photo.
- ✅ Delete scholarship documents after each cycle.
- ✅ Don't solicit 80G-deductible donations until 80G is granted.
- ✅ Add alt text to images.
- ❌ Don't upload large video files — embed YouTube/Vimeo instead.
