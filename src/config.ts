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

export function getGraphQLEndpoint() {
  const { squidexAppName } = config;

  const GRAPHQL_URI = `api/content/${squidexAppName}/graphql`;

  return buildUrl(GRAPHQL_URI);
}

function buildUrl(url: string) {

  const { squidexURL } = config;

  let modifiedUrl = url;
  if (modifiedUrl.length > 0 && modifiedUrl.startsWith("/")) {
    modifiedUrl = modifiedUrl.slice(1);
  }

  const result = `${squidexURL}/${modifiedUrl}`;

  return result;
}

export function getAssertEnpoint(id: string, imageQuality: string) {
  const { squidexAppName } = config;
  const type = "WEBP";

  const ASSERT_URI = `api/assets/${squidexAppName}/${id}?quality=${imageQuality}&format=${type}`;

  return buildUrl(ASSERT_URI);
}
