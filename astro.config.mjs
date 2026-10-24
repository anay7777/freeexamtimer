// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Keep in sync with `languages` in src/i18n/ui.ts
const locales = ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];

// https://astro.build/config
export default defineConfig({
  site: 'https://freeexamtimer.com',
  i18n: {
    locales,
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Adds <xhtml:link rel="alternate" hreflang="…"> entries for each localized page
      i18n: {
        defaultLocale: 'en',
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/500') &&
        !page.includes('/about-us') &&
        !page.includes('/contact-us') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/terms-and-conditions'),
      serialize(item) {
        if (/^https:\/\/freeexamtimer\.com\/([a-z]{2}\/)?$/.test(item.url)) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/how-to') || item.url.includes('/faq')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
