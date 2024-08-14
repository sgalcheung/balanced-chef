export type PostProps = {
  id: string;
  flatData: {
    title: string;
    author: [
      {
        image: [
          {
            id: string;
          }
        ];
        name: string;
        bio: [
          {
            text: string;
          }
        ];
      }
    ];
    publishedAt: Date;
    mainImage: [
      {
        id: string;
      }
    ];
    bio?: {
      text: string;
    };
    tags?: string[];
    body?: {
      _type: string;
      style: string;
      listItem?: string | undefined;
      children: {
        text: string;
      }[];
    }[];
    nutrition?: [
      {
        calories: number;
        carbohydrates: number;
        fat: number;
        protein: number;
      }
    ];
  };
};
