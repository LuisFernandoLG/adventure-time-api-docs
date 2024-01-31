import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight(
      {
        title: 'Adventure Time API',
        logo:{
          src: './src/assets/logo.svg',
          alt: 'Astro logo',
          replacesTitle: true,
        },
        social: {
          discord: 'https://astro.build/chat',
          github: 'https://github.com/withastro/starlight',
        },
        customCss:['./src/styles/custom.css']
        
      },
      mdx()
    ),
  ],
});
