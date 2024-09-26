export const routes = {
  home: () => "/",
  recipes: () => "/blog/Card",
  blog(slug: string) {
    return `/blog/${slug}`;
  },
};
