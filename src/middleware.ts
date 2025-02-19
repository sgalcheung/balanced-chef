import { defineMiddleware } from "astro:middleware";
import { SQUIDEX_APP_NAME, SQUIDEX_URL } from "astro:env/client";

export const onRequest = defineMiddleware((context, next) => {

  console.log(context.url.pathname) // this will log  "/"


	console.log(SQUIDEX_APP_NAME);
	console.log(SQUIDEX_URL);

	return next();
});
