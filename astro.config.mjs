// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// NOTE: set `site` to MayWe's real domain before launch (used for sitemap,
// canonical URLs and social cards). Keep the Cloudflare adapter — this repo
// deploys to Cloudflare Workers via `wrangler deploy`.
export default defineConfig({
  site: 'https://www.maywe.org',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  // Friendly aliases (was public/_redirects in the standalone build).
  redirects: {
    '/csr': '/partner',
    '/apply': '/scholarship',
    '/mentor': '/volunteer',
    '/blog': '/stories',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
