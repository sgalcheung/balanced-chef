import { defineConfig, envField, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        fluent: ["people-community-16-filled", "timer-16-filled"],
        ic: ["baseline-plus"],
        ph: ["cooking-pot"],
      },
    }),
    setPrerender(),
  ],
  image: {
    service: passthroughImageService(),
  },
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      SQUIDEX_APP_NAME: envField.string({
        context: "server",
        access: "public",
      }),
      SQUIDEX_URL: envField.string({
        context: "server",
        access: "public",
      }),
      FONTS_CDN_URL: envField.string({
        context: "server",
        access: "public",
        default: "https://font-repo.pages.dev",
      }),
    },
  },
});

function setPrerender() {
  return {
    name: "set-prerender",
    hooks: {
      "astro:route:setup": ({ route }) => {
        const renderComponents = [
          "/pages/index.astro",
          "/pages/api/image/[id].ts",
          "/pages/blog/[slug].astro",
          "/pages/blog/Card.astro",
          "/pages/fonts/[path].ts",
        ];
        renderComponents.some((item) => {
          if (route.component.endsWith(item)) {
            route.prerender = false;
          }
        });
      },
    },
  };
}
