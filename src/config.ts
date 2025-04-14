// import * as process from "node:process";
import { SQUIDEX_APP_NAME, SQUIDEX_URL } from "astro:env/client";

// Already supported by Astro 5.6.
// Polyfill for Cloudflare.
// if (import.meta.env.PROD) {
// 	process.env.SQUIDEX_APP_NAME = SQUIDEX_APP_NAME;
// 	process.env.SQUIDEX_URL = SQUIDEX_URL;
// }

interface Config {
	squidexAppName?: string | undefined;
	squidexURL?: string | undefined;
}

// Utility function to get environment variables based on the runtime environment
// Reference: https://www.reddit.com/r/reactjs/comments/1e0wye1/conditionally_use_processenv_or_importmetaenv/
// const getEnvVariable = (key: string): string | undefined => {
// 	if (import.meta.env && key in import.meta.env) {
// 		// Vite environment
// 		return import.meta.env[key];
// 	}
// 	// Node.js environment
// 	return process.env[key];
// };

export const config: Config = {
	// squidexAppName: getEnvVariable("SQUIDEX_APP_NAME"),
	// squidexURL: getEnvVariable("SQUIDEX_URL"),

  squidexAppName: SQUIDEX_APP_NAME,
  squidexURL: SQUIDEX_URL,
};

export function getGraphQLEndpoint() {
	const { squidexAppName } = config;

	const GRAPHQL_URI = `api/content/${squidexAppName}/graphql`;

	return buildUrl(GRAPHQL_URI);
}

function buildUrl(url: string) {
	let modifiedUrl = url;
	if (modifiedUrl.length > 0 && modifiedUrl.startsWith("/")) {
		modifiedUrl = modifiedUrl.slice(1);
	}

	const result = `${import.meta.env.SQUIDEX_URL}/${modifiedUrl}`;

	return result;
}

export function getAssertEnpoint(id: string, imageQuality: string) {
	const { squidexAppName } = config;
	const type = "WEBP";

	const ASSERT_URI = `api/assets/${squidexAppName}/${id}?quality=${imageQuality}&format=${type}`;

	return buildUrl(ASSERT_URI);
}
