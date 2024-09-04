// Polyfill for Cloudflare
export async function loadConfig() {
  const envClient = await import("astro:env/client");
  const { SQUIDEX_APP_NAME, SQUIDEX_ENVIRONMENT } = envClient;
  process.env["SQUIDEX_APP_NAME"] = SQUIDEX_APP_NAME;
  process.env["SQUIDEX_ENVIRONMENT"] = SQUIDEX_ENVIRONMENT;
}
