# MayWe Website — Step-by-Step Playbook

A plain-English guide for non-technical editors. No prior coding knowledge needed.
Take it slowly, follow the numbered steps, and you can't break anything that a
quick "undo" won't fix.

> **The project folder** (on the Mac it was set up on) is:
> `/Volumes/dock-ssd 1/Workspaces/maywe-website`
> Whenever a step says "the project folder," that's this.

---

## 0. How the website works (read this once)

- Your website's words and pictures are **content** that you edit.
- When you **save/publish** a change, it's sent to **GitHub** (where the site
  lives), and **Cloudflare** automatically rebuilds the site.
- Your change appears live in about **1–2 minutes**. (Refresh the page to see it.)

There are **two ways to edit**. Pick whichever you're comfortable with:

| | **Way 1 — Content Manager** | **Way 2 — On the computer** |
|---|---|---|
| Where | A friendly editor at **`/admin`** | Files + Terminal |
| Best for | Stories, events, numbers, team, picking images | Optimising big photos, bigger changes |
| Commands? | None | A few copy-paste commands |
| Publishing | Click **Publish** | `git push` |

Most day-to-day work is **Way 1**. Use Way 2 when you need the photo optimiser.

---

# PART A — The Content Manager (the easy way, no commands)

The Content Manager is a friendly screen where you type into boxes and click
**Save**. Two ways to open it:

- **Online:** go to `https://YOUR-SITE/admin` and sign in with GitHub.
  *(This needs a one-time setup — see `deployment.md` §4. If it's not set up yet,
  use the “On your computer” option just below.)*
- **On your computer (works today):**
  1. Open the **Terminal** app.
  2. Type this and press Enter:
     ```
     cd "/Volumes/dock-ssd 1/Workspaces/maywe-website" && npm run dev
     ```
  3. Open a browser to **`http://localhost:4321/admin`**
  4. Click **“Work with Local Repository”** and choose the project folder.
  5. Edit away (steps below). When done, press **Ctrl + C** in Terminal to stop,
     then **publish with git** (Part B, step B7).

### A1. Write and publish a new story

1. In the Content Manager, click **Stories** in the left menu.
2. Click **New Story** (top right).
3. Fill in the boxes:
   - **Title** — the headline.
   - **Excerpt** — one or two sentences shown on story cards.
   - **Category** — choose Hygiene, Scholarships, Events, or Impact Stories.
     *(“Impact Stories” also appear on the Impact page.)*
   - **Date** — the story date.
   - **Author** — leave as “MayWe Team” or change it.
   - **Cover image** — click to upload a photo (see A5).
   - **Cover image alt text** — a short description of the photo (for screen readers).
   - **Video** — *optional*; paste a YouTube/Vimeo link (see A6 about videos).
   - **Tags** — optional keywords.
   - **Draft** — leave **OFF** to publish now (turn ON to save privately).
   - **Contains a photo of a child?** — turn ON only if a child is shown, **and**
     you have a signed guardian consent form on file (see Golden Rules).
   - **Body** — write the story. You can make text **bold**, add lists, quotes,
     and paste YouTube links.
4. Click **Save** (or **Publish**).
5. Wait ~1–2 minutes, then refresh the live site → your story is on **/stories**.

### A2. Edit an existing story

1. Click **Stories** → click the story you want to change.
2. Edit any box.
3. Click **Save**. Live in ~1–2 minutes.

### A3. Hide or delete a story

- **Hide it (keep it):** open the story, turn **Draft ON**, Save.
- **Delete it for good:** open the story, click the **⋮** menu (or **Delete**) →
  confirm.

### A4. Update the impact numbers (Girls Supported, Funds Raised, etc.)

1. Click **Site data** → **Impact numbers**.
2. Change the **value** for each counter (e.g., Girls Supported → 2600).
   - “Funds Raised” uses the **₹ (inr)** format — just type the number, no commas.
3. You can also edit the **“where money goes”** percentages here.
4. Click **Save**. The big numbers on the Home and Impact pages update.

### A5. Add or change an image (small/simple way)

Inside any item (story, event, team member), click the **image box**, then
**Upload** and pick a file from your computer. Click **Save**.

> For the **big hero photo** or when you want photos auto-resized for speed, use
> the optimiser in **Part B, step B5** instead — it keeps the site fast on phones.

Always fill in **alt text** (a short description), and only use photos of children
**with guardian consent**.

### A6. Videos

**Never upload a video file.** Instead:
1. Upload the video to **YouTube** (set it *Unlisted* if you don't want it public).
2. Copy its link (e.g. `https://youtu.be/abc123`).
3. Paste it into a story's **Video** box → Save.
It becomes a video player on the story automatically.

### A7. Events, Team, Donation campaigns

Same pattern as stories — click the section (**Events**, **Team**, or
**Donation campaigns**), then **New** or click an existing item, fill the boxes,
**Save**.
- Events automatically move to “past events” after their date.
- For campaigns, update **Raised so far** by hand to move the progress bar, and
  paste the campaign's **donation page URL**.

---

# PART B — Editing on your computer (with git)

Use this when you need the **photo optimiser**, or to publish changes you made
locally. It's just a handful of copy-paste commands.

### The golden rule

> **Always “Pull” before you start, and “Push” when you finish.**
> Pull = download the latest. Push = upload your changes.

### B1. Open the Terminal and go to the project

1. Open the **Terminal** app (press ⌘ Space, type “Terminal”, Enter).
2. Copy-paste this and press Enter:
   ```
   cd "/Volumes/dock-ssd 1/Workspaces/maywe-website"
   ```

### B2. Pull the latest (always do this first)

```
git pull
```
This downloads any changes (including ones made through the online Content
Manager) so you're up to date. *(If it says “Already up to date,” great.)*

### B3. See the website on your computer first (optional but recommended)

```
npm run dev
```
Open **`http://localhost:4321`** in a browser to preview. You can also use the
Content Manager at `http://localhost:4321/admin`. Press **Ctrl + C** in Terminal
to stop when done.

### B4. Create a story from the Terminal (alternative to the CMS)

```
bash ../MayWe/scripts/new-story.sh "My story title"
```
*(Or just use the Content Manager — A1.)* This makes a draft you then edit in the
`src/content/stories` folder or in the CMS.

### B5. Add or change a photo (the optimiser)

This resizes photos so the site stays fast on phones.

1. Put your photo(s) into the **`raw-images`** folder inside the project,
   named after the slot you want. Common names:

   | File name to use | Where it appears |
   |---|---|
   | `hero.jpg` | Home page big hero photo |
   | `about-story.jpg` | About page |
   | `program-hygiene.jpg` | Programs — Hygiene |
   | `program-scholarships.jpg` | Programs — Scholarships |
   | `program-mentorship.jpg` | Programs — Mentorship |
   | `story-XXXX.jpg` | A story cover (any name starting `story-`) |
   | `team-1.jpg` `team-2.jpg` `team-3.jpg` | Team photos |

   *(Any format works — `.jpg`, `.png`, `.webp`, `.avif`. Full list in `image-guide.md`.)*
2. Run:
   ```
   npm run images
   ```
3. Preview with `npm run dev` if you like, then **publish** (next step).

### B6. Preview before publishing (optional)

```
npm run dev
```
Check `http://localhost:4321`, then Ctrl + C to stop.

### B7. Publish your changes (save + upload)

Run these three lines, one at a time:
```
git add -A
git commit -m "Describe what you changed"
git push
```
- `git add -A` = gather all your changes.
- `git commit -m "..."` = label them (put a short note in the quotes).
- `git push` = upload. The website rebuilds and is live in ~1–2 minutes.

*(You won't be asked for a password — it's already saved for this folder.)*

### B8. If you're done, that's it

Close the Terminal. To make more changes later, start again at **B2 (Pull)**.

---

# PART C — Changing other information

| What you want to change | Where | How |
|---|---|---|
| Stories / events / team / campaigns | Content Manager | Part A |
| Impact numbers | Content Manager → Site data | A4 |
| Hero & program photos | `raw-images/` + `npm run images` | B5 |
| Email, WhatsApp number, social links | `src/config.ts` | Below ⤵ |
| Donation page links (Razorpay) | `src/config.ts` (general) / campaign in CMS | Below ⤵ |
| 80G / PAN / registration numbers | `src/config.ts` | Below ⤵ |
| Announcement bar text | `src/config.ts` | Below ⤵ |

**Editing `src/config.ts`** (organisation details): open the project folder, open
the file `src/config.ts` in a text editor. Find the line with the value to change
(each is labelled), edit only the part inside the quotes, save the file, then
publish with **B7**. Example:
```
email: 'hello@maywe.org',        ← change the address inside the quotes
whatsapp: '919876543210',        ← your WhatsApp number, country code first, digits only
```
> If `config.ts` feels intimidating, send the change to whoever set up the site —
> it's a one-time edit.

---

# PART D — Golden rules (please always follow)

- ✅ **Guardian consent** for **every** photo of a child — keep the signed form on
  file. In the CMS, turn on “Contains a photo of a child?” for those stories.
- ✅ **Delete scholarship documents** after each selection cycle (in your Tally
  account) — they contain private family information.
- ✅ Add **alt text** (a short description) to every photo.
- ❌ **Never** upload video files — put videos on YouTube and paste the link.
- ❌ Don't solicit 80G tax-deductible donations until 80G is granted.

---

# PART E — Troubleshooting

**“My change isn't showing on the live site.”**
Wait 2 minutes and hard-refresh (⌘ Shift R). Still nothing? Check the Cloudflare
dashboard → Deployments to see if the build finished or failed.

**`git push` says “rejected” or “fetch first.”**
Someone else (or the online CMS) changed things. Fix it by running:
```
git pull
```
then `git push` again.

**`git pull` says “merge conflict.”**
This means two edits clashed. Don't panic — message whoever helps with the site;
it's a 2-minute fix for them. Avoid it by always **Pull before you edit**.

**An image shows a coloured box instead of the photo.**
The photo file isn't there yet, or the name doesn't match the slot. Re-check the
file name in `raw-images/` against the table in **B5** and run `npm run images`.

**The site preview won't start (`npm run dev` errors).**
Run `npm install` once, then `npm run dev` again.

---

# Quick reference card

```
# 1. Get latest
cd "/Volumes/dock-ssd 1/Workspaces/maywe-website"
git pull

# 2. (optional) optimise new photos dropped in raw-images/
npm run images

# 3. (optional) preview locally → http://localhost:4321  (Ctrl+C to stop)
npm run dev

# 4. Publish
git add -A
git commit -m "What I changed"
git push        # live in ~1–2 minutes
```

Everyday content (stories, numbers, events): just use the **Content Manager**
(Part A). Reach for the Terminal only for photos and bigger changes.
