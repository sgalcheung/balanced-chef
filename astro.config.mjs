import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), icon()],
  adapter: cloudflare({
    // [WARN] The currently selected adapter `@astrojs/cloudflare` is not compatible with the image service "Sharp".
    imageService: 'cloudflare'
  })
});