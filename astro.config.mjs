import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paladini.io',
  base: '/especialista-ia-automacao-lagoa/',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
});
