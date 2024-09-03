import { inspect } from "util";
import { EndpointType, getEndpoint } from "src/config";
import { executeOperation } from "./graphql";
import type { PageQuery, QueryRecipeQuery } from "src/__generated__/graphql";
import { graphql } from "src/__generated__/gql";

const GRAPHQL_URL = getEndpoint(EndpointType.GraphQL);

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

  return executeOperation(GRAPHQL_URL, query).then((r) => {
    if (r.errors) {
      console.log(inspect(r.errors, { depth: Infinity, colors: true }));
      throw new Error("Failed to execute GraphQL query");
    }
    return r.data as PageQuery;
  });
};

export async function getRecipe(
  slug: string | undefined
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

  return executeOperation(GRAPHQL_URL, query, {
    filter: `data/slug/iv eq '${slug}'`,
  }).then((r) => {
    if (r.errors) {
      console.log(inspect(r.errors, { depth: Infinity, colors: true }));
      throw new Error("Failed to execute GraphQL query");
    }
    return r.data as QueryRecipeQuery;
  });
}

export function urlForImage(source: string): string {
  return `${getEndpoint(EndpointType.Assets)}/${source}`;
}
