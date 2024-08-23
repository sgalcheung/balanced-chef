/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SQUIDEX_APP_NAME: string;
  readonly SQUIDEX_ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
