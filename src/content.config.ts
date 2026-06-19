import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const STORY_CATEGORIES = ['Hygiene', 'Scholarships', 'Events', 'Impact Stories'] as const;

/** Blog / field stories. */
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(STORY_CATEGORIES),
    date: z.coerce.date(),
    author: z.string().default('MayWe Team'),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // Optional YouTube/Vimeo URL — embedded, never a hosted file.
    video: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Child-protection gate (CP-01): set true only if guardian consent /
    // media-release form is on file offline for every child in this post.
    hasChildPhoto: z.boolean().default(false),
    guardianConsentOnFile: z.boolean().default(false),
  }),
});

/** Program areas shown on the Programs page and Home. */
const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().default('🌱'),
    summary: z.string(),
    order: z.number().default(0),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    whatWeBuild: z.array(z.string()).default([]),
    whoBenefits: z.string().optional(),
    impactToDate: z.string().optional(),
    // CTA: 'donate' | 'scholarship' | 'volunteer'
    cta: z.enum(['donate', 'scholarship', 'volunteer']).default('donate'),
  }),
});

/** Events & workshops (static list; RSVP via form or WhatsApp). */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().default('Online'),
    description: z.string(),
    cover: z.string().optional(),
    organiserContact: z.string().optional(),
    registerUrl: z.string().optional(), // Tally/Google form or wa.me link
  }),
});

/** Team members (About page). */
const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    order: z.number().default(0),
  }),
});

/** Donation campaigns (Donate page cards). Progress is updated manually. */
const campaigns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/campaigns' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().default('🎯'),
    description: z.string(),
    goal: z.number(),
    raised: z.number().default(0),
    donateUrl: z.string(), // hosted Razorpay Payment Page for this campaign
    order: z.number().default(0),
  }),
});

export const collections = { stories, programs, events, team, campaigns };
