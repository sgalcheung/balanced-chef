
// getPage()
// 定义 Image 接口
interface Image {
  id: string;
}

// 定义 Authors 接口
interface AuthorsFlatData {
  name: string;
  image: Image[];
  bio: Bio[] | null; // Bio 可能为 null
}

interface Author {
  flatData: AuthorsFlatData;
}

// 定义 Recipes 接口
interface RecipesFlatData {
  title: string;
  slug: string;
  mainImage: Image[];
  author: Author[];
  publishedAt: string;
}

interface Recipes {
  flatData: RecipesFlatData;
}

// 定义 Text 接口
interface Text {
  contents: Recipes[];
}

// 定义 FlatData 接口
interface FlatData {
  text: Text;
}

// 定义最终的 GraphQL 查询结果接口
export interface Page {
  flatData: FlatData;
}

// 顶层接口，表示整个查询结果
export interface QueryPageResult {
  findPageSingleton: Page;
}

// getRecipe(slug)
// 定义 Bio 类型
interface Bio {
  text: string;
}

// 定义 Tag 类型
interface Tag {
  children: {
    flatData: {
      name: string;
    };
  }[];
}

// 定义 Nutrition 类型
interface Nutrition {
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
}

export interface Recipe {
  flatData: {
    title: string;
    author: Author[];
    publishedAt: string;
    mainImage: Image[];
    bio: string | null; // bio 可能为 null
    tag: Tag[];
    body: string;
    nutrition: Nutrition[];
    slug: string;
  };
}

export interface QueryRecipesContentsResponse {
  queryRecipesContents: Recipe[];
}