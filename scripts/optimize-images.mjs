#!/usr/bin/env node
/**
 * MayWe image optimiser.
 *
 * Drop source images (any size, .jpg/.png/.webp/.tif) into `raw-images/`,
 * named after a slot, then run:  npm run images
 *
 * Each file is cropped to the right aspect ratio (focusing on faces) and
 * written to `public/images/<name>.webp` (or .png for og-default).
 *
 * Slot names → output size:
 *   hero                  1600×1200   (home hero)
 *   about-story           1200×900    (about page)
 *   program-hygiene       1200×900
 *   program-scholarships  1200×900
 *   program-mentorship    1200×900
 *   story-<anything>      1200×675    (story card / featured, 16:9)
 *   event-<anything>      1200×900
 *   team-1 / team-2 / …   400×400     (square headshots)
 *   og-default            1200×630    (social share card → PNG)
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('✗ "sharp" is not installed. Run `npm install` first.');
  process.exit(1);
}

const ROOT = process.cwd();
const INPUT = path.join(ROOT, 'raw-images');
const OUT = path.join(ROOT, 'public', 'images');

function targetFor(name) {
  if (name === 'hero') return { w: 1600, h: 1200 };
  if (name === 'about-story') return { w: 1200, h: 900 };
  if (name === 'og-default') return { w: 1200, h: 630 };
  if (name.startsWith('program-')) return { w: 1200, h: 900 };
  if (name.startsWith('story-')) return { w: 1200, h: 675 };
  if (name.startsWith('event-')) return { w: 1200, h: 900 };
  if (name.startsWith('team-')) return { w: 400, h: 400 };
  return { w: 1200, h: 900 };
}

if (!fs.existsSync(INPUT)) {
  console.error('✗ No raw-images/ folder found. Create it and drop source images there.');
  process.exit(1);
}
fs.mkdirSync(OUT, { recursive: true });

const files = fs
  .readdirSync(INPUT)
  .filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f) && !f.startsWith('.'));

if (!files.length) {
  console.log('No source images in raw-images/. Drop files like hero.jpg, program-hygiene.jpg …');
  process.exit(0);
}

let count = 0;
for (const file of files) {
  const base = path.basename(file).replace(/\.[^.]+$/, '');
  const { w, h } = targetFor(base);
  const isOg = base === 'og-default';
  const ext = isOg ? 'png' : 'webp';
  const outFile = path.join(OUT, `${base}.${ext}`);
  const pipeline = sharp(path.join(INPUT, file)).resize(w, h, {
    fit: 'cover',
    position: 'attention', // crop toward the most salient region (usually faces)
  });
  await (isOg ? pipeline.png() : pipeline.webp({ quality: 80 })).toFile(outFile);
  const kb = Math.round(fs.statSync(outFile).size / 1024);
  console.log(`✓ ${file}  →  public/images/${base}.${ext}   (${w}×${h}, ${kb} KB)`);
  count++;
}
console.log(`\nDone — ${count} image(s) optimised. Rebuild or push to see them live.`);
