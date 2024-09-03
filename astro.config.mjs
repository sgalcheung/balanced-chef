import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        fluent: ["people-community-16-filled", "timer-16-filled"],
        ic: ["baseline-plus"],
        ph: ["cooking-pot"],
      },
    }),
  ],
  adapter: cloudflare({
    // [WARN] The currently selected adapter `@astrojs/cloudflare` is not compatible with the image service "Sharp".
    // imageService: 'cloudflare' // This service need payment, used no-op passthrough service instead.
  }),
  image: {
    // Configure the passthroughImageService() to avoid both Squoosh and Sharp image processing
    service: passthroughImageService(),
  },
  // https://docs.astro.build/en/guides/integrations-guide/cloudflare/#nodejs-compatibility
  vite: {
    ssr: {
      external: ["node:util", "node:https", "dotenv"],
    },
  },
});
