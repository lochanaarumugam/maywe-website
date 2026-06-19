/**
 * ─────────────────────────────────────────────────────────────────────────
 * MayWe — central site configuration
 * ─────────────────────────────────────────────────────────────────────────
 * This is the ONE file to edit for organisation-specific details.
 * Anything marked `REPLACE` is a placeholder — swap in the real value.
 * No other code needs to change.
 */

export const site = {
  name: 'MayWe',
  tagline: 'Every girl deserves to stay in school.',
  description:
    'MayWe is a not-for-profit improving hygiene infrastructure in tribal and rural schools and funding scholarships for academically gifted girls from low-income families in India.',
  // Used for absolute URLs, sitemap, social cards. Match astro.config.mjs `site`.
  url: 'https://www.maywe.org',
  locale: 'en_IN',
};

export const contact = {
  email: 'hello@maywe.org', // REPLACE with real inbox
  // WhatsApp number in international format, digits only (e.g. 919876543210).
  // Use a DEDICATED org number / WhatsApp Business, not a personal phone.
  whatsapp: '919876543210', // REPLACE
  location: 'India',
};

export const social = {
  instagram: 'https://instagram.com/', // REPLACE or set '' to hide
  facebook: 'https://facebook.com/', // REPLACE or set '' to hide
  twitter: 'https://twitter.com/', // REPLACE or set '' to hide
  linkedin: 'https://linkedin.com/', // REPLACE or set '' to hide
  youtube: '', // set URL to show
};

/** Legal / compliance details shown in the footer, Donate page and receipts. */
export const legal = {
  entityType: 'Section 8 Company / Society / Trust (as applicable)', // REPLACE
  registrationNo: 'REPLACE-REG-NO',
  pan: 'REPLACE-PAN',
  reg80G: 'REPLACE-80G-NO',
  reg12A: 'REPLACE-12A-NO',
  registeredState: 'REPLACE-STATE',
  // Toggle to `true` once FCRA registration is granted. While false, the
  // international-giving disclaimer is shown and intl. donation links hidden.
  fcraGranted: false,
};

/**
 * Donation links — hosted Razorpay Payment Pages (or Danamojo, GiveIndia…).
 * Create each page in the provider dashboard, then paste its public URL here.
 * The Donate button and campaign cards link out to these — no payment code
 * runs on this site.
 */
export const donate = {
  general: 'https://rzp.io/l/REPLACE-GENERAL', // REPLACE
  international: '', // REPLACE once FCRA granted; leave '' to hide intl. option
};

/**
 * Third-party form endpoints.
 * - Web3Forms: free, no backend. Access key is public by design.
 * - Tally: scholarship form embed (file uploads, no applicant login).
 */
export const forms = {
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? 'REPLACE-WEB3FORMS-KEY',
  scholarshipTallyId: 'REPLACE-TALLY-ID', // e.g. 'wAbCdE' from tally.so/r/wAbCdE
  newsletterAction: import.meta.env.PUBLIC_NEWSLETTER_ACTION ?? '',
};

/** Optional sticky announcement bar. Set text to '' to hide it. */
export const announcement = {
  text: 'Applications open for the 2026 scholarship cycle.',
  href: '/scholarship',
  cta: 'Apply now',
};

/** Primary navigation (header). */
export const nav: { label: string; href: string }[] = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Stories', href: '/stories' },
  { label: 'Impact', href: '/impact' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

/** Build a click-to-chat WhatsApp URL with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Render a config value, or a neutral fallback if it's still an unset
 * `REPLACE…` placeholder — so demo builds don't show "REPLACE-PAN" publicly.
 */
export function shown(value: string, fallback = 'To be updated'): string {
  return !value || value.startsWith('REPLACE') ? fallback : value;
}
