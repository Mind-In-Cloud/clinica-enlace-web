import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  // todo: add your public domain
  // site: 'https://clinicaenlace.mx',
  site: 'https://clinica-enlace.netlify.app',
  integrations: [preact(), tailwind(), sitemap()],
  output: "static",
  adapter: netlify()
});
