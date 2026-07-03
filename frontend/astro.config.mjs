import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.saaslyvet.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    // Excluye la página interna de captura del mockup del sitemap.
    sitemap({ filter: (page) => !page.includes('/mockup-dashboard') }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
