import { getEndpoint, EndpointType } from "src/config";
import type {
  Page,
  QueryPageResult,
  QueryRecipesContentsResponse,
  Recipe,
} from "./interfaces";

const RECIPE_FIELDS = `
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
        },
        publishedAt
        mainImage {
            id
        }
        bio,
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
    }`;

const PAGE_FIELDS = `
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
    }`;

const POST_FIELDS = `
    id
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
    }`;

const AUTHOR_FIELDS = `
    id,
    flatData {
        name,
        image {
          id
        },
        bio {
          text
        }
    }`;

const TAG_FIELDS = `
    id,
    flatData {
      name
    }`;

interface FetchAPIOptions {
  variables?: Record<string, any>;
}

interface FetchAPIResponse {
  data?: any;
  errors?: any[];
}

async function fetchAPI(query: string, { variables }: FetchAPIOptions = {}) {
  const res = await fetch(getEndpoint(EndpointType.GraphQL), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json: FetchAPIResponse = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getLatestPost() {
  const query = `
  {
      queryPostsContents(
        filter: "data/published/iv eq true"
        orderby: "data/publishedDate/iv desc"
        top: 1
      ) {
          ${POST_FIELDS}
        }
  }`;

  const data = await fetchAPI(query);

  return data.queryPostsContents?.[0];
}

export async function getAuthors() {
  const query = `
    {
      queryAuthorsContentsWithTotal {
        total,
        items {
          ${AUTHOR_FIELDS}
        }
      }
    }`;

  const data = await fetchAPI(query);

  return data.queryAuthorsContentsWithTotal;
}

export async function getRecipe(slug: string | undefined): Promise<Recipe> {
  const query = `
    {
        queryRecipesContents(filter: "data/slug/iv eq '${slug}'") {
          ${RECIPE_FIELDS}
        }
    }`;

  const data = await fetchAPI(query);

  // 类型断言
  const response = data as QueryRecipesContentsResponse;
  
  return response.queryRecipesContents?.[0];
}

export async function getTags() {
  const query = `
  {
    queryTagsContentsWithTotal {
        total,
        items {
            ${TAG_FIELDS}
        }
    }
  }`;

  const data = await fetchAPI(query);

  return data.queryTagsContentsWithTotal;
}

export async function getPage(): Promise<Page> {
  const query = `
  {
      findPageSingleton {
          ${PAGE_FIELDS}
        }
  }`;

  const data = await fetchAPI(query);

  // 类型断言
  const response = data as QueryPageResult;

  return response.findPageSingleton;
}

export function urlForImage(source: string): string {
  return `${getEndpoint(EndpointType.Assets)}/${source}`;
}
