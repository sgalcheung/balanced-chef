/* eslint-disable */
import * as types from './graphql.js';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query Page {\n      page: findPageSingleton {\n        flatData {\n          text {\n            contents {\n              ... on Recipes {\n                flatData {\n                  title\n                  slug\n                  mainImage {\n                    id\n                  }\n                  author {\n                    ... on Authors {\n                      flatData {\n                        name\n                        image {\n                          id\n                        }\n                      }\n                    }\n                  }\n                  publishedAt\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ": types.PageDocument,
    "\n    query QueryRecipe($filter: String!) {\n      recipes: queryRecipesContents(filter: $filter) {\n        flatData {\n          title\n          author {\n            ... on Authors {\n              flatData {\n                name\n                image {\n                  id\n                }\n                bio {\n                  text\n                }\n              }\n            }\n          }\n          publishedAt\n          mainImage {\n            id\n          }\n          bio\n          tag {\n            children {\n              ... on Tags {\n                flatData {\n                  name\n                }\n              }\n            }\n          }\n          body\n          nutrition {\n            calories\n            carbohydrates\n            fat\n            protein\n          }\n          slug\n        }\n      }\n    }\n  ": types.QueryRecipeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Page {\n      page: findPageSingleton {\n        flatData {\n          text {\n            contents {\n              ... on Recipes {\n                flatData {\n                  title\n                  slug\n                  mainImage {\n                    id\n                  }\n                  author {\n                    ... on Authors {\n                      flatData {\n                        name\n                        image {\n                          id\n                        }\n                      }\n                    }\n                  }\n                  publishedAt\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Page {\n      page: findPageSingleton {\n        flatData {\n          text {\n            contents {\n              ... on Recipes {\n                flatData {\n                  title\n                  slug\n                  mainImage {\n                    id\n                  }\n                  author {\n                    ... on Authors {\n                      flatData {\n                        name\n                        image {\n                          id\n                        }\n                      }\n                    }\n                  }\n                  publishedAt\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryRecipe($filter: String!) {\n      recipes: queryRecipesContents(filter: $filter) {\n        flatData {\n          title\n          author {\n            ... on Authors {\n              flatData {\n                name\n                image {\n                  id\n                }\n                bio {\n                  text\n                }\n              }\n            }\n          }\n          publishedAt\n          mainImage {\n            id\n          }\n          bio\n          tag {\n            children {\n              ... on Tags {\n                flatData {\n                  name\n                }\n              }\n            }\n          }\n          body\n          nutrition {\n            calories\n            carbohydrates\n            fat\n            protein\n          }\n          slug\n        }\n      }\n    }\n  "): (typeof documents)["\n    query QueryRecipe($filter: String!) {\n      recipes: queryRecipesContents(filter: $filter) {\n        flatData {\n          title\n          author {\n            ... on Authors {\n              flatData {\n                name\n                image {\n                  id\n                }\n                bio {\n                  text\n                }\n              }\n            }\n          }\n          publishedAt\n          mainImage {\n            id\n          }\n          bio\n          tag {\n            children {\n              ... on Tags {\n                flatData {\n                  name\n                }\n              }\n            }\n          }\n          body\n          nutrition {\n            calories\n            carbohydrates\n            fat\n            protein\n          }\n          slug\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;