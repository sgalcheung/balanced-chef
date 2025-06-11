// Already supported by Astro 5.6.
import { SQUIDEX_APP_NAME, SQUIDEX_URL } from "astro:env/server";

interface Config {
  squidexAppName?: string | undefined;
  squidexURL?: string | undefined;
}

export const config: Config = {
  squidexAppName: SQUIDEX_APP_NAME,
  squidexURL: SQUIDEX_URL,
};

function buildUrl(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  return `${config.squidexURL}/${cleanPath}`;
}

export function getGraphQLEndpoint(): string {
  const path = `api/content/${config.squidexAppName}/graphql`;
  return buildUrl(path);
}

export function getAssetEndpoint(id: string, imageQuality: string): string {
  const format = "WEBP";
  const path = `api/assets/${config.squidexAppName}/${id}?quality=${imageQuality}&format=${format}`;
  return buildUrl(path);
}
