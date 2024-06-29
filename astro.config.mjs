import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: 'https://clinicaenlace.mx',
  // site: 'https://clinica-enlace.netlify.app',
  integrations: [preact({ compat: true }), tailwind(), sitemap(), mdx()],
  output: "static",
  adapter: netlify()
});
