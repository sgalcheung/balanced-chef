import type { APIRoute } from "astro";
import { getFromCms } from "@lib/api";

export const GET: APIRoute = async ({ params, url }) => {
	const { id } = params;
	if (!id) {
		return new Response("Not Found", { status: 404 });
	}
	const width = url.searchParams.get("w") || undefined;
	const heigth = url.searchParams.get("h") || undefined;
	const quality = url.searchParams.get("q") || undefined;

	const cmsImage = await getFromCms(id, width, heigth, quality);
	if (!cmsImage) {
		return new Response("Image not found", { status: 404 });
	}

	const imageBuffer = cmsImage.buffer;
	const contentType = cmsImage.type;
	const origin = cmsImage.origin ?? "server";

	// In my case, I set the cache to one year
	const cacheHeader = "max-age=31536000, immutable";

	return new Response(imageBuffer, {
		headers: {
			"Content-Type": contentType,
			"Cache-Control": cacheHeader,
			"Astro-Origin": origin, // This header is optional, it's just informative
		},
	});
};
