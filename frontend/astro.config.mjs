import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://veteris.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
