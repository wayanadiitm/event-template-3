import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://wayanadiitm.github.io/event-template-3/',
  //base: 'event-template-3',
  integrations: [mdx(), sitemap(), tailwind()]
});
