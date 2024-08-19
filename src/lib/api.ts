const RECIPE_FIELDS = `
    id,
    flatData {
        title,
        author {
            id
        },
        publishedAt,
        mainImage {
            id
        },
        bio,
        tag {
            children {
                id
            }
        }
        body,
        nutrition {
            calories,
            carbohydrates,
            fat,
            protein
        },
        slug
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

const SQUIDEX_API_URI = `api/content/${
  import.meta.env.SQUIDEX_APP_NAME
}/graphql`;

const SQUIDEX_API_URL = `${import.meta.env.SQUIDEX_ENVIRONMENT.replace(
  /\/+$/,
  ""
)}/${SQUIDEX_API_URI}`;

async function fetchAPI(query: string, { variables }: FetchAPIOptions = {}) {
  const res = await fetch(SQUIDEX_API_URL, {
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

export async function getRecipes() {
  const query = `
    {
      queryRecipesContentsWithTotal {
        total,
        items {
          ${RECIPE_FIELDS}
        }
      }
    }`;

  const data = await fetchAPI(query);

  return data.queryRecipesContentsWithTotal;
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

export function urlForImage(source: string): string {
  return `${import.meta.env.SQUIDEX_ENVIRONMENT}/api/assets/${
    import.meta.env.SQUIDEX_APP_NAME
  }/${source}`;
}
