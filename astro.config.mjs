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
          github: 'https://github.com/LuisFernandoLG',
        },
        customCss:['./src/styles/custom.css'],
        editLink:{
          baseUrl:"https://github.com/LuisFernandoLG/adventure-time-api-docs/edit/master"
        }
      },
      mdx()
    ),
  ],
});
