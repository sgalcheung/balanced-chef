/// <reference types="astro/client" />

// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly SQUIDEX_APP_NAME: string;
  readonly SQUIDEX_ENVIRONMENT: string;
  readonly SQUIDEX_API_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
