import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.saaslyvet.com',
  output: 'static',
  // 'ignore': ambas formas resuelven. La consistencia canónica se garantiza vía la
  // etiqueta <link rel="canonical"> (siempre con barra final) + sitemap con barra +
  // enlaces internos del blog normalizados a barra final. Así se consolida el dup
  // /blog vs /blog/ sin arriesgar 404 por host en las rutas legales existentes.
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
