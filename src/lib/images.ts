import fs from 'node:fs';
import path from 'node:path';

/**
 * Build-time check: does a referenced public image actually exist?
 *
 * This lets components point at canonical names (e.g. `/images/hero.webp`) and
 * fall back to a gradient placeholder until the real file is dropped in — so
 * the site never shows a broken image. External URLs (CMS-stored) pass through.
 *
 * Safe because every page is statically prerendered (this runs at build, in Node).
 */
export function hasPublicImage(src?: string | null): boolean {
  if (!src) return false;
  if (/^https?:\/\//i.test(src)) return true;
  const rel = src.replace(/^\/+/, '');
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', rel));
  } catch {
    return false;
  }
}
