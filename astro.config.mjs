// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://milan.bio',
  trailingSlash: 'always',

  // Old Hugo utility pages.
  redirects: {
    '/archives/': '/posts/',
    '/tags/': '/posts/',
    '/categories/': '/posts/',
  },

  image: {
    // Covers and Markdown images get srcset/sizes and never upscale.
    layout: 'constrained',
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
