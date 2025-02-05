import { inspect } from "node:util";
import { getAssertEnpoint, getGraphQLEndpoint } from "src/config";
import { executeOperation } from "./graphql";
import type { PageQuery, QueryRecipeQuery } from "src/__generated__/graphql";
import { graphql } from "src/__generated__/gql";

const GRAPHQL_URL = getGraphQLEndpoint();

export const getPage = async () => {
	const query = graphql(`
    query Page {
      page: findPageSingleton {
        flatData {
          text {
            contents {
              ... on Recipes {
                flatData {
                  title
                  slug
                  mainImage {
                    id
                  }
                  author {
                    ... on Authors {
                      flatData {
                        name
                        image {
                          id
                        }
                      }
                    }
                  }
                  publishedAt
                }
              }
            }
          }
        }
      }
    }
  `);

	return await executeOperation(GRAPHQL_URL, query).then((r) => {
		if (r.errors) {
			console.log(
				inspect(r.errors, { depth: Number.POSITIVE_INFINITY, colors: true }),
			);
			throw new Error("Failed to execute GraphQL query");
		}
		return r.data as PageQuery;
	});
};

export async function getRecipe(
	slug: string | undefined,
): Promise<QueryRecipeQuery> {
	const query = graphql(`
    query QueryRecipe($filter: String!) {
      recipes: queryRecipesContents(filter: $filter) {
        flatData {
          title
          author {
            ... on Authors {
              flatData {
                name
                image {
                  id
                }
                bio {
                  text
                }
              }
            }
          }
          publishedAt
          mainImage {
            id
          }
          bio
          tag {
            children {
              ... on Tags {
                flatData {
                  name
                }
              }
            }
          }
          body
          nutrition {
            calories
            carbohydrates
            fat
            protein
          }
          slug
        }
      }
    }
  `);

	return await executeOperation(GRAPHQL_URL, query, {
		filter: `data/slug/iv eq '${slug}'`,
	}).then((r) => {
		if (r.errors) {
			console.log(
				inspect(r.errors, { depth: Number.POSITIVE_INFINITY, colors: true }),
			);
			throw new Error("Failed to execute GraphQL query");
		}
		return r.data as QueryRecipeQuery;
	});
}

const imageCache = new Map();

export type CmsImage = {
	id: string;
	buffer: ArrayBuffer;
	type: string;
	origin?: string;
};

export async function getFromCms(
	id: string,
	width?: string,
	heigth?: string,
	quality?: string,
): Promise<CmsImage | undefined> {
	const imageQuality = quality ?? "100";

	// We try to get the image from the cache
	const cacheKey = `${id}/w${width ?? ""}/h${heigth ?? ""}/q${quality ?? ""}`;
	const cachedData = imageCache.get(cacheKey);
	if (cachedData) {
		return {
			id: id,
			buffer: cachedData.buffer,
			type: cachedData.contentType,
			origin: "cache-cms",
		};
	}

	let imageUrl = getAssertEnpoint(id, imageQuality);
	if (width && heigth) {
		imageUrl += `&width=${width}&height=${heigth}&mode=Max`;
	}

	const response = await fetch(imageUrl);
	if (!response.ok) {
		console.log(
			inspect(response.json, { depth: Number.POSITIVE_INFINITY, colors: true }),
		);
		return undefined;
	}

	const contentType = response.headers.get("Content-Type") || "image/jpeg";
	const imageBuffer = await response.arrayBuffer();

	// The image is saved in the cache
	imageCache.set(cacheKey, {
		buffer: imageBuffer,
		contentType: contentType,
	});

	return {
		id: id,
		buffer: imageBuffer,
		type: contentType,
		origin: "server-cms",
	};
}
