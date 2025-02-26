import { defineConfig, envField } from "astro/config";
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
	adapter: cloudflare({
		// [WARN] The currently selected adapter `@astrojs/cloudflare` is not compatible with the image service "Sharp".
		// imageService: 'cloudflare' // This service need payment, used no-op passthrough service instead.
	}),
	image: {
		// Configure the passthroughImageService() to avoid both Squoosh and Sharp image processing
		// service: passthroughImageService(),
		// endpoint: {
		//   route: "/_image",
		//   entrypoint: "./src/image_endpoint.ts",
		// },
	},
	// https://docs.astro.build/en/guides/integrations-guide/cloudflare/#nodejs-compatibility
	vite: {
		ssr: {
			external: ["node:util", "node:process"],
		},
		plugins: [tailwindcss()],
	},
	env: {
		schema: {
			SQUIDEX_APP_NAME: envField.string({
				context: "client",
				access: "public",
			}),
			SQUIDEX_URL: envField.string({
				context: "client",
				access: "public",
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
