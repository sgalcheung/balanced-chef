/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Instant: { input: any; output: any; }
  /** Unstructured Json object */
  JsonScalar: { input: any; output: any; }
  Long: { input: any; output: any; }
};

export type AllContents = Authors | Page | Posts | Recipes | Tags;

/** The app mutations. */
export type ApplicationMutations = {
  __typename?: 'ApplicationMutations';
  /** Change a authors content. */
  changeAuthorsContent?: Maybe<Authors>;
  /** Change a page content. */
  changePageContent?: Maybe<Page>;
  /** Change a posts content. */
  changePostsContent?: Maybe<Posts>;
  /** Change a recipes content. */
  changeRecipesContent?: Maybe<Recipes>;
  /** Change a tags content. */
  changeTagsContent?: Maybe<Tags>;
  /** Creates an authors content. */
  createAuthorsContent?: Maybe<Authors>;
  /** Creates an page content. */
  createPageContent?: Maybe<Page>;
  /** Creates an posts content. */
  createPostsContent?: Maybe<Posts>;
  /** Creates an recipes content. */
  createRecipesContent?: Maybe<Recipes>;
  /** Creates an tags content. */
  createTagsContent?: Maybe<Tags>;
  /** Delete an authors content. */
  deleteAuthorsContent: EntitySavedResultDto;
  /** Delete an page content. */
  deletePageContent: EntitySavedResultDto;
  /** Delete an posts content. */
  deletePostsContent: EntitySavedResultDto;
  /** Delete an recipes content. */
  deleteRecipesContent: EntitySavedResultDto;
  /** Delete an tags content. */
  deleteTagsContent: EntitySavedResultDto;
  /** Patch an authors content by id. */
  patchAuthorsContent?: Maybe<Authors>;
  /** Patch an page content by id. */
  patchPageContent?: Maybe<Page>;
  /** Patch an posts content by id. */
  patchPostsContent?: Maybe<Posts>;
  /** Patch an recipes content by id. */
  patchRecipesContent?: Maybe<Recipes>;
  /** Patch an tags content by id. */
  patchTagsContent?: Maybe<Tags>;
  /**
   * Publish a authors content.
   * @deprecated Use 'changeAuthorsContent' instead
   */
  publishAuthorsContent?: Maybe<Authors>;
  /**
   * Publish a page content.
   * @deprecated Use 'changePageContent' instead
   */
  publishPageContent?: Maybe<Page>;
  /**
   * Publish a posts content.
   * @deprecated Use 'changePostsContent' instead
   */
  publishPostsContent?: Maybe<Posts>;
  /**
   * Publish a recipes content.
   * @deprecated Use 'changeRecipesContent' instead
   */
  publishRecipesContent?: Maybe<Recipes>;
  /**
   * Publish a tags content.
   * @deprecated Use 'changeTagsContent' instead
   */
  publishTagsContent?: Maybe<Tags>;
  /** Update an authors content by id. */
  updateAuthorsContent?: Maybe<Authors>;
  /** Update an page content by id. */
  updatePageContent?: Maybe<Page>;
  /** Update an posts content by id. */
  updatePostsContent?: Maybe<Posts>;
  /** Update an recipes content by id. */
  updateRecipesContent?: Maybe<Recipes>;
  /** Update an tags content by id. */
  updateTagsContent?: Maybe<Tags>;
  /** Upsert an authors content by id. */
  upsertAuthorsContent?: Maybe<Authors>;
  /** Upsert an page content by id. */
  upsertPageContent?: Maybe<Page>;
  /** Upsert an posts content by id. */
  upsertPostsContent?: Maybe<Posts>;
  /** Upsert an recipes content by id. */
  upsertRecipesContent?: Maybe<Recipes>;
  /** Upsert an tags content by id. */
  upsertTagsContent?: Maybe<Tags>;
};


/** The app mutations. */
export type ApplicationMutationsChangeAuthorsContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsChangePageContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsChangePostsContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsChangeRecipesContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsChangeTagsContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsCreateAuthorsContentArgs = {
  data: AuthorsDataInputDto;
  id?: InputMaybe<Scalars['String']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsCreatePageContentArgs = {
  data: PageDataInputDto;
  id?: InputMaybe<Scalars['String']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsCreatePostsContentArgs = {
  data: PostsDataInputDto;
  id?: InputMaybe<Scalars['String']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsCreateRecipesContentArgs = {
  data: RecipesDataInputDto;
  id?: InputMaybe<Scalars['String']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsCreateTagsContentArgs = {
  data: TagsDataInputDto;
  id?: InputMaybe<Scalars['String']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsDeleteAuthorsContentArgs = {
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsDeletePageContentArgs = {
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsDeletePostsContentArgs = {
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsDeleteRecipesContentArgs = {
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsDeleteTagsContentArgs = {
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsPatchAuthorsContentArgs = {
  data: AuthorsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsPatchPageContentArgs = {
  data: PageDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsPatchPostsContentArgs = {
  data: PostsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsPatchRecipesContentArgs = {
  data: RecipesDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsPatchTagsContentArgs = {
  data: TagsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsPublishAuthorsContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsPublishPageContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsPublishPostsContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsPublishRecipesContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsPublishTagsContentArgs = {
  dueTime?: InputMaybe<Scalars['Instant']['input']>;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


/** The app mutations. */
export type ApplicationMutationsUpdateAuthorsContentArgs = {
  data: AuthorsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpdatePageContentArgs = {
  data: PageDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpdatePostsContentArgs = {
  data: PostsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpdateRecipesContentArgs = {
  data: RecipesDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpdateTagsContentArgs = {
  data: TagsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpsertAuthorsContentArgs = {
  data: AuthorsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  patch?: InputMaybe<Scalars['Boolean']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpsertPageContentArgs = {
  data: PageDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  patch?: InputMaybe<Scalars['Boolean']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpsertPostsContentArgs = {
  data: PostsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  patch?: InputMaybe<Scalars['Boolean']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpsertRecipesContentArgs = {
  data: RecipesDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  patch?: InputMaybe<Scalars['Boolean']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


/** The app mutations. */
export type ApplicationMutationsUpsertTagsContentArgs = {
  data: TagsDataInputDto;
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  patch?: InputMaybe<Scalars['Boolean']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** The app queries. */
export type ApplicationQueries = {
  __typename?: 'ApplicationQueries';
  /** Find an asset by id. */
  findAsset?: Maybe<Asset>;
  /** Find an authors content by id. */
  findAuthorsContent?: Maybe<Authors>;
  /**
   * Find an page content by id.
   * @deprecated Use 'findPageSingleton' instead.
   */
  findPageContent?: Maybe<Page>;
  /** Find an page singleton. */
  findPageSingleton?: Maybe<Page>;
  /** Find an posts content by id. */
  findPostsContent?: Maybe<Posts>;
  /** Find an recipes content by id. */
  findRecipesContent?: Maybe<Recipes>;
  /** Find an tags content by id. */
  findTagsContent?: Maybe<Tags>;
  /** Get assets. */
  queryAssets: Array<Asset>;
  /** Get assets and total count. */
  queryAssetsWithTotal: AssetResultDto;
  /** Query authors content items. */
  queryAuthorsContents?: Maybe<Array<Authors>>;
  /** Query authors content items with total count. */
  queryAuthorsContentsWithTotal?: Maybe<AuthorsResultDto>;
  /** Query content items by IDs across schemeas. */
  queryContentsByIds: Array<AllContents>;
  /**
   * Query page content items.
   * @deprecated Use 'findPageSingleton' instead.
   */
  queryPageContents?: Maybe<Array<Page>>;
  /**
   * Query page content items with total count.
   * @deprecated Use 'findPageSingleton' instead.
   */
  queryPageContentsWithTotal?: Maybe<PageResultDto>;
  /** Query posts content items. */
  queryPostsContents?: Maybe<Array<Posts>>;
  /** Query posts content items with total count. */
  queryPostsContentsWithTotal?: Maybe<PostsResultDto>;
  /** Query recipes content items. */
  queryRecipesContents?: Maybe<Array<Recipes>>;
  /** Query recipes content items with total count. */
  queryRecipesContentsWithTotal?: Maybe<RecipesResultDto>;
  /** Query tags content items. */
  queryTagsContents?: Maybe<Array<Tags>>;
  /** Query tags content items with total count. */
  queryTagsContentsWithTotal?: Maybe<TagsResultDto>;
};


/** The app queries. */
export type ApplicationQueriesFindAssetArgs = {
  id: Scalars['String']['input'];
};


/** The app queries. */
export type ApplicationQueriesFindAuthorsContentArgs = {
  id: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesFindPageContentArgs = {
  id: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesFindPageSingletonArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesFindPostsContentArgs = {
  id: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesFindRecipesContentArgs = {
  id: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesFindTagsContentArgs = {
  id: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryAssetsArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryAssetsWithTotalArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryAuthorsContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryAuthorsContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryContentsByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryPageContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryPageContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryPostsContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryPostsContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryRecipesContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryRecipesContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryTagsContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The app queries. */
export type ApplicationQueriesQueryTagsContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};

export type ApplicationSubscriptions = {
  __typename?: 'ApplicationSubscriptions';
  /** Subscribe to asset events. */
  assetChanges?: Maybe<EnrichedAssetEvent>;
  /** Subscribe to content events. */
  contentChanges?: Maybe<EnrichedContentEvent>;
};


export type ApplicationSubscriptionsAssetChangesArgs = {
  type?: InputMaybe<EnrichedAssetEventType>;
};


export type ApplicationSubscriptionsContentChangesArgs = {
  schemaName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnrichedContentEventType>;
};

/** An asset */
export type Asset = {
  __typename?: 'Asset';
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The edit token. */
  editToken?: Maybe<Scalars['String']['output']>;
  /** The hash of the file. Can be null for old files. */
  fileHash: Scalars['String']['output'];
  /** The file name of the asset. */
  fileName: Scalars['String']['output'];
  /** The size of the file in bytes. */
  fileSize: Scalars['Int']['output'];
  /** The file type (file extension) of the asset. */
  fileType: Scalars['String']['output'];
  /** The version of the file. */
  fileVersion: Scalars['Int']['output'];
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /**
   * Determines if the uploaded file is an image.
   * @deprecated Use 'type' field instead.
   */
  isImage: Scalars['Boolean']['output'];
  /** True, when the asset is not public. */
  isProtected: Scalars['Boolean']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The asset metadata. */
  metadata?: Maybe<Scalars['JsonScalar']['output']>;
  /** The type of the image. */
  metadataText: Scalars['String']['output'];
  /** The mime type. */
  mimeType: Scalars['String']['output'];
  /** The ID of the parent folder. Empty for files without parent. */
  parentId: Scalars['String']['output'];
  /**
   * The height of the image in pixels if the asset is an image.
   * @deprecated Use 'metadata' field instead.
   */
  pixelHeight?: Maybe<Scalars['Int']['output']>;
  /**
   * The width of the image in pixels if the asset is an image.
   * @deprecated Use 'metadata' field instead.
   */
  pixelWidth?: Maybe<Scalars['Int']['output']>;
  /** The file name as slug. */
  slug: Scalars['String']['output'];
  /** The source URL of the asset. */
  sourceUrl?: Maybe<Scalars['String']['output']>;
  /** The asset tags. */
  tags: Array<Scalars['String']['output']>;
  /** The thumbnail URL to the asset. */
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  /** The type of the asset. */
  type: AssetType;
  /** The URL to the asset. */
  url: Scalars['String']['output'];
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};


/** An asset */
export type AssetMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** List of assets and total count of assets. */
export type AssetResultDto = {
  __typename?: 'AssetResultDto';
  /** The assets. */
  items: Array<Asset>;
  /** The total count of assets. */
  total: Scalars['Int']['output'];
};

export enum AssetType {
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Unknown = 'UNKNOWN',
  Video = 'VIDEO'
}

/** The structure of a authors content type. */
export type Authors = Content & {
  __typename?: 'Authors';
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The data of the content. */
  data: AuthorsDataDto;
  /** The data of the content. */
  data__dynamic?: Maybe<Scalars['JsonScalar']['output']>;
  /** The edit token. */
  editToken?: Maybe<Scalars['String']['output']>;
  /** The flat data of the content. */
  flatData: AuthorsFlatDataDto;
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The new status of the content. */
  newStatus?: Maybe<Scalars['String']['output']>;
  /** The status color of the content. */
  newStatusColor?: Maybe<Scalars['String']['output']>;
  /** Query recipes content items. */
  referencingRecipesContents?: Maybe<Array<Recipes>>;
  /** Query recipes content items with total count. */
  referencingRecipesContentsWithTotal?: Maybe<RecipesResultDto>;
  /** The status of the content. */
  status: Scalars['String']['output'];
  /** The status color of the content. */
  statusColor: Scalars['String']['output'];
  /** The URL to the content. */
  url: Scalars['String']['output'];
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};


/** The structure of a authors content type. */
export type AuthorsReferencingRecipesContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The structure of a authors content type. */
export type AuthorsReferencingRecipesContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};

/** The structure of the Bio nested schema. */
export type AuthorsDataBioChildDto = {
  __typename?: 'AuthorsDataBioChildDto';
  text?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Bio nested schema. */
export type AuthorsDataBioChildInputDto = {
  text?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the Bio field of the authors content type. */
export type AuthorsDataBioDto = {
  __typename?: 'AuthorsDataBioDto';
  iv?: Maybe<Array<AuthorsDataBioChildDto>>;
};

/** The structure of the Bio field of the authors content input type. */
export type AuthorsDataBioInputDto = {
  iv?: InputMaybe<Array<AuthorsDataBioChildInputDto>>;
};

/** The structure of the authors data type. */
export type AuthorsDataDto = {
  __typename?: 'AuthorsDataDto';
  bio?: Maybe<AuthorsDataBioDto>;
  image?: Maybe<AuthorsDataImageDto>;
  name?: Maybe<AuthorsDataNameDto>;
};

/** The structure of the Image field of the authors content type. */
export type AuthorsDataImageDto = {
  __typename?: 'AuthorsDataImageDto';
  iv?: Maybe<Array<Asset>>;
};

/** The structure of the Image field of the authors content input type. */
export type AuthorsDataImageInputDto = {
  iv?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The structure of the authors data input type. */
export type AuthorsDataInputDto = {
  bio?: InputMaybe<AuthorsDataBioInputDto>;
  image?: InputMaybe<AuthorsDataImageInputDto>;
  name?: InputMaybe<AuthorsDataNameInputDto>;
};

/** The structure of the Name field of the authors content type. */
export type AuthorsDataNameDto = {
  __typename?: 'AuthorsDataNameDto';
  iv?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Name field of the authors content input type. */
export type AuthorsDataNameInputDto = {
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the flat authors data type. */
export type AuthorsFlatDataDto = {
  __typename?: 'AuthorsFlatDataDto';
  bio?: Maybe<Array<AuthorsDataBioChildDto>>;
  image?: Maybe<Array<Asset>>;
  name?: Maybe<Scalars['String']['output']>;
};

/** List of authors items and total count. */
export type AuthorsResultDto = {
  __typename?: 'AuthorsResultDto';
  /** The contents. */
  items?: Maybe<Array<Authors>>;
  /** The total count of  contents. */
  total: Scalars['Int']['output'];
};

/** The structure of all content types. */
export type Component = {
  /** schemaId */
  schemaId: Scalars['String']['output'];
  /** schemaName */
  schemaName?: Maybe<Scalars['String']['output']>;
};

/** The structure of all content types. */
export type Content = {
  /** created */
  created: Scalars['Instant']['output'];
  /** createdBy */
  createdBy: Scalars['String']['output'];
  /** data__dynamic */
  data__dynamic?: Maybe<Scalars['JsonScalar']['output']>;
  /** editToken */
  editToken?: Maybe<Scalars['String']['output']>;
  /** id */
  id: Scalars['String']['output'];
  /** lastModified */
  lastModified: Scalars['Instant']['output'];
  /** lastModifiedBy */
  lastModifiedBy: Scalars['String']['output'];
  /** newStatus */
  newStatus?: Maybe<Scalars['String']['output']>;
  /** newStatusColor */
  newStatusColor?: Maybe<Scalars['String']['output']>;
  /** status */
  status: Scalars['String']['output'];
  /** statusColor */
  statusColor: Scalars['String']['output'];
  /** url */
  url: Scalars['String']['output'];
  /** version */
  version: Scalars['Int']['output'];
};

/** An asset event */
export type EnrichedAssetEvent = {
  __typename?: 'EnrichedAssetEvent';
  /** The type of the asset. */
  assetType: AssetType;
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The hash of the file. Can be null for old files. */
  fileHash: Scalars['String']['output'];
  /** The file name of the asset. */
  fileName: Scalars['String']['output'];
  /** The size of the file in bytes. */
  fileSize: Scalars['Int']['output'];
  /** The file type (file extension) of the asset. */
  fileType: Scalars['String']['output'];
  /** The version of the file. */
  fileVersion: Scalars['Int']['output'];
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /**
   * Determines if the uploaded file is an image.
   * @deprecated Use 'type' field instead.
   */
  isImage: Scalars['Boolean']['output'];
  /** True, when the asset is not public. */
  isProtected: Scalars['Boolean']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The asset metadata. */
  metadata?: Maybe<Scalars['JsonScalar']['output']>;
  /** The mime type. */
  mimeType: Scalars['String']['output'];
  /**
   * The height of the image in pixels if the asset is an image.
   * @deprecated Use 'metadata' field instead.
   */
  pixelHeight?: Maybe<Scalars['Int']['output']>;
  /**
   * The width of the image in pixels if the asset is an image.
   * @deprecated Use 'metadata' field instead.
   */
  pixelWidth?: Maybe<Scalars['Int']['output']>;
  /** The file name as slug. */
  slug: Scalars['String']['output'];
  /** The source URL of the asset. */
  sourceUrl: Scalars['String']['output'];
  /** The thumbnail URL to the asset. */
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  /** The type of the event. */
  type?: Maybe<EnrichedAssetEventType>;
  /** The URL to the asset. */
  url: Scalars['String']['output'];
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};


/** An asset event */
export type EnrichedAssetEventMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

export enum EnrichedAssetEventType {
  Annotated = 'ANNOTATED',
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

/** An content event */
export type EnrichedContentEvent = {
  __typename?: 'EnrichedContentEvent';
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The data of the content. */
  data?: Maybe<Scalars['JsonScalar']['output']>;
  /** The previous data of the content. */
  dataOld?: Maybe<Scalars['JsonScalar']['output']>;
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The new status of the content. */
  newStatus?: Maybe<Scalars['String']['output']>;
  /** The status of the content. */
  status: Scalars['String']['output'];
  /** The type of the event. */
  type?: Maybe<EnrichedContentEventType>;
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};

export enum EnrichedContentEventType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Published = 'PUBLISHED',
  ReferenceUpdated = 'REFERENCE_UPDATED',
  StatusChanged = 'STATUS_CHANGED',
  Unpublished = 'UNPUBLISHED',
  Updated = 'UPDATED'
}

/** The result of a mutation */
export type EntitySavedResultDto = {
  __typename?: 'EntitySavedResultDto';
  /** The new version of the item. */
  version: Scalars['Long']['output'];
};

/** The structure of a page content type. */
export type Page = Content & {
  __typename?: 'Page';
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The data of the content. */
  data: PageDataDto;
  /** The data of the content. */
  data__dynamic?: Maybe<Scalars['JsonScalar']['output']>;
  /** The edit token. */
  editToken?: Maybe<Scalars['String']['output']>;
  /** The flat data of the content. */
  flatData: PageFlatDataDto;
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The new status of the content. */
  newStatus?: Maybe<Scalars['String']['output']>;
  /** The status color of the content. */
  newStatusColor?: Maybe<Scalars['String']['output']>;
  /** The status of the content. */
  status: Scalars['String']['output'];
  /** The status color of the content. */
  statusColor: Scalars['String']['output'];
  /** The URL to the content. */
  url: Scalars['String']['output'];
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};

/** The structure of the page data type. */
export type PageDataDto = {
  __typename?: 'PageDataDto';
  published?: Maybe<PageDataPublishedDto>;
  publishedDate?: Maybe<PageDataPublishedDateDto>;
  text?: Maybe<PageDataTextDto>;
};

/** The structure of the page data input type. */
export type PageDataInputDto = {
  published?: InputMaybe<PageDataPublishedInputDto>;
  publishedDate?: InputMaybe<PageDataPublishedDateInputDto>;
  text?: InputMaybe<PageDataTextInputDto>;
};

/** The structure of the PublishedDate(Autogenerated) field of the page content type. */
export type PageDataPublishedDateDto = {
  __typename?: 'PageDataPublishedDateDto';
  iv?: Maybe<Scalars['Instant']['output']>;
};

/** The structure of the PublishedDate(Autogenerated) field of the page content input type. */
export type PageDataPublishedDateInputDto = {
  iv?: InputMaybe<Scalars['Instant']['input']>;
};

/** The structure of the Published field of the page content type. */
export type PageDataPublishedDto = {
  __typename?: 'PageDataPublishedDto';
  iv?: Maybe<Scalars['Boolean']['output']>;
};

/** The structure of the Published field of the page content input type. */
export type PageDataPublishedInputDto = {
  iv?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The structure of the Text field of the page content type. */
export type PageDataTextDto = {
  __typename?: 'PageDataTextDto';
  iv?: Maybe<PageDataTextEmbeddableString>;
};

export type PageDataTextEmbeddableString = {
  __typename?: 'PageDataTextEmbeddableString';
  /** The referenced assets. */
  assets: Array<Asset>;
  /** The referenced content items. */
  contents: Array<Recipes>;
  /** The text of this field. */
  text?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Text field of the page content input type. */
export type PageDataTextInputDto = {
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the flat page data type. */
export type PageFlatDataDto = {
  __typename?: 'PageFlatDataDto';
  published?: Maybe<Scalars['Boolean']['output']>;
  publishedDate?: Maybe<Scalars['Instant']['output']>;
  text?: Maybe<PageDataTextEmbeddableString>;
};

/** List of page items and total count. */
export type PageResultDto = {
  __typename?: 'PageResultDto';
  /** The contents. */
  items?: Maybe<Array<Page>>;
  /** The total count of  contents. */
  total: Scalars['Int']['output'];
};

/** The structure of a posts content type. */
export type Posts = Content & {
  __typename?: 'Posts';
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The data of the content. */
  data: PostsDataDto;
  /** The data of the content. */
  data__dynamic?: Maybe<Scalars['JsonScalar']['output']>;
  /** The edit token. */
  editToken?: Maybe<Scalars['String']['output']>;
  /** The flat data of the content. */
  flatData: PostsFlatDataDto;
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The new status of the content. */
  newStatus?: Maybe<Scalars['String']['output']>;
  /** The status color of the content. */
  newStatusColor?: Maybe<Scalars['String']['output']>;
  /** The status of the content. */
  status: Scalars['String']['output'];
  /** The status color of the content. */
  statusColor: Scalars['String']['output'];
  /** The URL to the content. */
  url: Scalars['String']['output'];
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};

/** The structure of the posts data type. */
export type PostsDataDto = {
  __typename?: 'PostsDataDto';
  published?: Maybe<PostsDataPublishedDto>;
  publishedDate?: Maybe<PostsDataPublishedDateDto>;
  text?: Maybe<PostsDataTextDto>;
};

/** The structure of the posts data input type. */
export type PostsDataInputDto = {
  published?: InputMaybe<PostsDataPublishedInputDto>;
  publishedDate?: InputMaybe<PostsDataPublishedDateInputDto>;
  text?: InputMaybe<PostsDataTextInputDto>;
};

/** The structure of the PublishedDate field of the posts content type. */
export type PostsDataPublishedDateDto = {
  __typename?: 'PostsDataPublishedDateDto';
  iv?: Maybe<Scalars['Instant']['output']>;
};

/** The structure of the PublishedDate field of the posts content input type. */
export type PostsDataPublishedDateInputDto = {
  iv?: InputMaybe<Scalars['Instant']['input']>;
};

/** The structure of the Published field of the posts content type. */
export type PostsDataPublishedDto = {
  __typename?: 'PostsDataPublishedDto';
  iv?: Maybe<Scalars['Boolean']['output']>;
};

/** The structure of the Published field of the posts content input type. */
export type PostsDataPublishedInputDto = {
  iv?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The structure of the Text field of the posts content type. */
export type PostsDataTextDto = {
  __typename?: 'PostsDataTextDto';
  iv?: Maybe<PostsDataTextEmbeddableString>;
};

export type PostsDataTextEmbeddableString = {
  __typename?: 'PostsDataTextEmbeddableString';
  /** The referenced assets. */
  assets: Array<Asset>;
  /** The referenced content items. */
  contents: Array<Recipes>;
  /** The text of this field. */
  text?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Text field of the posts content input type. */
export type PostsDataTextInputDto = {
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the flat posts data type. */
export type PostsFlatDataDto = {
  __typename?: 'PostsFlatDataDto';
  published?: Maybe<Scalars['Boolean']['output']>;
  publishedDate?: Maybe<Scalars['Instant']['output']>;
  text?: Maybe<PostsDataTextEmbeddableString>;
};

/** List of posts items and total count. */
export type PostsResultDto = {
  __typename?: 'PostsResultDto';
  /** The contents. */
  items?: Maybe<Array<Posts>>;
  /** The total count of  contents. */
  total: Scalars['Int']['output'];
};

/** The structure of a recipes content type. */
export type Recipes = Content & {
  __typename?: 'Recipes';
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The data of the content. */
  data: RecipesDataDto;
  /** The data of the content. */
  data__dynamic?: Maybe<Scalars['JsonScalar']['output']>;
  /** The edit token. */
  editToken?: Maybe<Scalars['String']['output']>;
  /** The flat data of the content. */
  flatData: RecipesFlatDataDto;
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The new status of the content. */
  newStatus?: Maybe<Scalars['String']['output']>;
  /** The status color of the content. */
  newStatusColor?: Maybe<Scalars['String']['output']>;
  /** Query authors content items. */
  referencesAuthorsContents?: Maybe<Array<Authors>>;
  /** Query authors content items with total count. */
  referencesAuthorsContentsWithTotal?: Maybe<AuthorsResultDto>;
  /** Query tags content items. */
  referencesTagsContents?: Maybe<Array<Tags>>;
  /** Query tags content items with total count. */
  referencesTagsContentsWithTotal?: Maybe<TagsResultDto>;
  /** The status of the content. */
  status: Scalars['String']['output'];
  /** The status color of the content. */
  statusColor: Scalars['String']['output'];
  /** The URL to the content. */
  url: Scalars['String']['output'];
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};


/** The structure of a recipes content type. */
export type RecipesReferencesAuthorsContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The structure of a recipes content type. */
export type RecipesReferencesAuthorsContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The structure of a recipes content type. */
export type RecipesReferencesTagsContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The structure of a recipes content type. */
export type RecipesReferencesTagsContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};

/** The structure of the Author field of the recipes content type. */
export type RecipesDataAuthorDto = {
  __typename?: 'RecipesDataAuthorDto';
  iv?: Maybe<Array<Authors>>;
};

/** The structure of the Author field of the recipes content input type. */
export type RecipesDataAuthorInputDto = {
  iv?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The structure of the Bio field of the recipes content type. */
export type RecipesDataBioDto = {
  __typename?: 'RecipesDataBioDto';
  /** 似乎没有用上这个字段 */
  iv?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Bio field of the recipes content input type. */
export type RecipesDataBioInputDto = {
  /** 似乎没有用上这个字段 */
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the Body field of the recipes content type. */
export type RecipesDataBodyDto = {
  __typename?: 'RecipesDataBodyDto';
  iv?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Body field of the recipes content input type. */
export type RecipesDataBodyInputDto = {
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the recipes data type. */
export type RecipesDataDto = {
  __typename?: 'RecipesDataDto';
  author?: Maybe<RecipesDataAuthorDto>;
  bio?: Maybe<RecipesDataBioDto>;
  body?: Maybe<RecipesDataBodyDto>;
  mainImage?: Maybe<RecipesDataMainImageDto>;
  nutrition?: Maybe<RecipesDataNutritionDto>;
  publishedAt?: Maybe<RecipesDataPublishedAtDto>;
  slug?: Maybe<RecipesDataSlugDto>;
  tag?: Maybe<RecipesDataTagDto>;
  title?: Maybe<RecipesDataTitleDto>;
};

/** The structure of the recipes data input type. */
export type RecipesDataInputDto = {
  author?: InputMaybe<RecipesDataAuthorInputDto>;
  bio?: InputMaybe<RecipesDataBioInputDto>;
  body?: InputMaybe<RecipesDataBodyInputDto>;
  mainImage?: InputMaybe<RecipesDataMainImageInputDto>;
  nutrition?: InputMaybe<RecipesDataNutritionInputDto>;
  publishedAt?: InputMaybe<RecipesDataPublishedAtInputDto>;
  slug?: InputMaybe<RecipesDataSlugInputDto>;
  tag?: InputMaybe<RecipesDataTagInputDto>;
  title?: InputMaybe<RecipesDataTitleInputDto>;
};

/** The structure of the MainImage field of the recipes content type. */
export type RecipesDataMainImageDto = {
  __typename?: 'RecipesDataMainImageDto';
  iv?: Maybe<Array<Asset>>;
};

/** The structure of the MainImage field of the recipes content input type. */
export type RecipesDataMainImageInputDto = {
  iv?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The structure of the Nutrition nested schema. */
export type RecipesDataNutritionChildDto = {
  __typename?: 'RecipesDataNutritionChildDto';
  calories?: Maybe<Scalars['Float']['output']>;
  carbohydrates?: Maybe<Scalars['Float']['output']>;
  fat?: Maybe<Scalars['Float']['output']>;
  protein?: Maybe<Scalars['Float']['output']>;
};

/** The structure of the Nutrition nested schema. */
export type RecipesDataNutritionChildInputDto = {
  calories?: InputMaybe<Scalars['Float']['input']>;
  carbohydrates?: InputMaybe<Scalars['Float']['input']>;
  fat?: InputMaybe<Scalars['Float']['input']>;
  protein?: InputMaybe<Scalars['Float']['input']>;
};

/** The structure of the Nutrition field of the recipes content type. */
export type RecipesDataNutritionDto = {
  __typename?: 'RecipesDataNutritionDto';
  iv?: Maybe<Array<RecipesDataNutritionChildDto>>;
};

/** The structure of the Nutrition field of the recipes content input type. */
export type RecipesDataNutritionInputDto = {
  iv?: InputMaybe<Array<RecipesDataNutritionChildInputDto>>;
};

/** The structure of the PublishedAt field of the recipes content type. */
export type RecipesDataPublishedAtDto = {
  __typename?: 'RecipesDataPublishedAtDto';
  iv?: Maybe<Scalars['Instant']['output']>;
};

/** The structure of the PublishedAt field of the recipes content input type. */
export type RecipesDataPublishedAtInputDto = {
  iv?: InputMaybe<Scalars['Instant']['input']>;
};

/** The structure of the Slug (Autogenerated) field of the recipes content type. */
export type RecipesDataSlugDto = {
  __typename?: 'RecipesDataSlugDto';
  iv?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Slug (Autogenerated) field of the recipes content input type. */
export type RecipesDataSlugInputDto = {
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the Tag nested schema. */
export type RecipesDataTagChildDto = {
  __typename?: 'RecipesDataTagChildDto';
  children?: Maybe<Array<Tags>>;
};

/** The structure of the Tag nested schema. */
export type RecipesDataTagChildInputDto = {
  children?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The structure of the Tag field of the recipes content type. */
export type RecipesDataTagDto = {
  __typename?: 'RecipesDataTagDto';
  iv?: Maybe<Array<RecipesDataTagChildDto>>;
};

/** The structure of the Tag field of the recipes content input type. */
export type RecipesDataTagInputDto = {
  iv?: InputMaybe<Array<RecipesDataTagChildInputDto>>;
};

/** The structure of the Title field of the recipes content type. */
export type RecipesDataTitleDto = {
  __typename?: 'RecipesDataTitleDto';
  iv?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Title field of the recipes content input type. */
export type RecipesDataTitleInputDto = {
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the flat recipes data type. */
export type RecipesFlatDataDto = {
  __typename?: 'RecipesFlatDataDto';
  author?: Maybe<Array<Authors>>;
  /** 似乎没有用上这个字段 */
  bio?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  mainImage?: Maybe<Array<Asset>>;
  nutrition?: Maybe<Array<RecipesDataNutritionChildDto>>;
  publishedAt?: Maybe<Scalars['Instant']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Array<RecipesDataTagChildDto>>;
  title?: Maybe<Scalars['String']['output']>;
};

/** List of recipes items and total count. */
export type RecipesResultDto = {
  __typename?: 'RecipesResultDto';
  /** The contents. */
  items?: Maybe<Array<Recipes>>;
  /** The total count of  contents. */
  total: Scalars['Int']['output'];
};

/** The structure of a tags content type. */
export type Tags = Content & {
  __typename?: 'Tags';
  /** The timestamp when the object was created. */
  created: Scalars['Instant']['output'];
  /** The user who created the object. */
  createdBy: Scalars['String']['output'];
  /** The user who created the object. */
  createdByUser: User;
  /** The data of the content. */
  data: TagsDataDto;
  /** The data of the content. */
  data__dynamic?: Maybe<Scalars['JsonScalar']['output']>;
  /** The edit token. */
  editToken?: Maybe<Scalars['String']['output']>;
  /** The flat data of the content. */
  flatData: TagsFlatDataDto;
  /** The ID of the object (usually GUID). */
  id: Scalars['String']['output'];
  /** The timestamp when the object was updated the last time. */
  lastModified: Scalars['Instant']['output'];
  /** The user who updated the object the last time. */
  lastModifiedBy: Scalars['String']['output'];
  /** The user who updated the object the last time. */
  lastModifiedByUser: User;
  /** The new status of the content. */
  newStatus?: Maybe<Scalars['String']['output']>;
  /** The status color of the content. */
  newStatusColor?: Maybe<Scalars['String']['output']>;
  /** Query recipes content items. */
  referencingRecipesContents?: Maybe<Array<Recipes>>;
  /** Query recipes content items with total count. */
  referencingRecipesContentsWithTotal?: Maybe<RecipesResultDto>;
  /** The status of the content. */
  status: Scalars['String']['output'];
  /** The status color of the content. */
  statusColor: Scalars['String']['output'];
  /** The URL to the content. */
  url: Scalars['String']['output'];
  /** The version of the objec. */
  version: Scalars['Int']['output'];
};


/** The structure of a tags content type. */
export type TagsReferencingRecipesContentsArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};


/** The structure of a tags content type. */
export type TagsReferencingRecipesContentsWithTotalArgs = {
  collation?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderby?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  top?: InputMaybe<Scalars['Int']['input']>;
};

/** The structure of the tags data type. */
export type TagsDataDto = {
  __typename?: 'TagsDataDto';
  name?: Maybe<TagsDataNameDto>;
};

/** The structure of the tags data input type. */
export type TagsDataInputDto = {
  name?: InputMaybe<TagsDataNameInputDto>;
};

/** The structure of the Name field of the tags content type. */
export type TagsDataNameDto = {
  __typename?: 'TagsDataNameDto';
  iv?: Maybe<Scalars['String']['output']>;
};

/** The structure of the Name field of the tags content input type. */
export type TagsDataNameInputDto = {
  iv?: InputMaybe<Scalars['String']['input']>;
};

/** The structure of the flat tags data type. */
export type TagsFlatDataDto = {
  __typename?: 'TagsFlatDataDto';
  name?: Maybe<Scalars['String']['output']>;
};

/** List of tags items and total count. */
export type TagsResultDto = {
  __typename?: 'TagsResultDto';
  /** The contents. */
  items?: Maybe<Array<Tags>>;
  /** The total count of  contents. */
  total: Scalars['Int']['output'];
};

/** A user that created or modified a content or asset. */
export type User = {
  __typename?: 'User';
  /** The display name of this user. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** The email address ofthis  user. */
  email?: Maybe<Scalars['String']['output']>;
  /** The ID of this user. */
  id: Scalars['String']['output'];
};

export type PageQueryVariables = Exact<{ [key: string]: never; }>;


export type PageQuery = { __typename?: 'ApplicationQueries', page?: { __typename?: 'Page', flatData: { __typename?: 'PageFlatDataDto', text?: { __typename?: 'PageDataTextEmbeddableString', contents: Array<{ __typename?: 'Recipes', flatData: { __typename?: 'RecipesFlatDataDto', title?: string | null, slug?: string | null, publishedAt?: any | null, mainImage?: Array<{ __typename?: 'Asset', id: string }> | null, author?: Array<{ __typename?: 'Authors', flatData: { __typename?: 'AuthorsFlatDataDto', name?: string | null, image?: Array<{ __typename?: 'Asset', id: string }> | null } }> | null } }> } | null } } | null };

export type QueryRecipeQueryVariables = Exact<{
  filter: Scalars['String']['input'];
}>;


export type QueryRecipeQuery = { __typename?: 'ApplicationQueries', recipes?: Array<{ __typename?: 'Recipes', flatData: { __typename?: 'RecipesFlatDataDto', title?: string | null, publishedAt?: any | null, bio?: string | null, body?: string | null, slug?: string | null, author?: Array<{ __typename?: 'Authors', flatData: { __typename?: 'AuthorsFlatDataDto', name?: string | null, image?: Array<{ __typename?: 'Asset', id: string }> | null, bio?: Array<{ __typename?: 'AuthorsDataBioChildDto', text?: string | null }> | null } }> | null, mainImage?: Array<{ __typename?: 'Asset', id: string }> | null, tag?: Array<{ __typename?: 'RecipesDataTagChildDto', children?: Array<{ __typename?: 'Tags', flatData: { __typename?: 'TagsFlatDataDto', name?: string | null } }> | null }> | null, nutrition?: Array<{ __typename?: 'RecipesDataNutritionChildDto', calories?: number | null, carbohydrates?: number | null, fat?: number | null, protein?: number | null }> | null } }> | null };


export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"page"},"name":{"kind":"Name","value":"findPageSingleton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flatData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flatData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Authors"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flatData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const QueryRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"recipes"},"name":{"kind":"Name","value":"queryRecipesContents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flatData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Authors"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flatData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tags"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flatData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"nutrition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"carbohydrates"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<QueryRecipeQuery, QueryRecipeQueryVariables>;