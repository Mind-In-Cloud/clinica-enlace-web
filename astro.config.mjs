import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // todo: add your public domain
  site: 'https://clinicaenlace.mx',
  integrations: [preact(), tailwind(), sitemap()]
});
