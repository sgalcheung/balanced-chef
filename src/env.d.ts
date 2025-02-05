/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SQUIDEX_APP_NAME: string;
	readonly SQUIDEX_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
