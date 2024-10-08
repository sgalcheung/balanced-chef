import * as process from "node:process";

// Dynamically import dotenv functions, only codegen, not Astro development
// for codegen
if (process.env.NODE_ENV === "development" && !import.meta.env.DEV) {
  // Import dotenv only in development environment
  require("dotenv").config();
}

// Polyfill for Cloudflare.
// Importing polyfill.ts has no effect.
if (import.meta.env.PROD) {
  const envClient = await import("astro:env/client");
  const { SQUIDEX_APP_NAME, SQUIDEX_ENVIRONMENT } = envClient;
  process.env["SQUIDEX_APP_NAME"] = SQUIDEX_APP_NAME;
  process.env["SQUIDEX_ENVIRONMENT"] = SQUIDEX_ENVIRONMENT;
}

interface Config {
  squidexAppName?: string;
  squidexEnvironment?: string;
}

// Utility function to get environment variables based on the runtime environment
// Reference: https://www.reddit.com/r/reactjs/comments/1e0wye1/conditionally_use_processenv_or_importmetaenv/
const getEnvVariable = (key: string): string | undefined => {
  if (import.meta.env && key in import.meta.env) {
    // Vite environment
    return import.meta.env[key];
  } else {
    // Node.js environment
    return process.env[key];
  }
};

export const config: Config = {
  squidexAppName: getEnvVariable("SQUIDEX_APP_NAME"),
  squidexEnvironment: getEnvVariable("SQUIDEX_ENVIRONMENT"),
};

export function getEndpoint() {
  const { squidexAppName } = config;

  const GRAPHQL_URI = `api/content/${squidexAppName}/graphql`;

  return buildUrl(GRAPHQL_URI);
}

function buildUrl(url: string) {
  if (url.length > 0 && url.startsWith("/")) {
    url = url.slice(1);
  }

  const result = `${import.meta.env.SQUIDEX_ENVIRONMENT}/${url}`;

  return result;
}
