import type { CategoriesType } from "@/types/categories";

export default class CategoriesService {
  async getCategories() {
    const categories: CategoriesType[] = [
      {
        id: 1,
        name: "T-shirt",
        numberOfItems: 10,
      },
      {
        id: 2,
        name: "T-shirt",
        numberOfItems: 10,
      },
      {
        id: 3,
        name: "T-shirt",
        numberOfItems: 10,
      },
      {
        id: 4,
        name: "T-shirt",
        numberOfItems: 10,
      },
      {
        id: 5,
        name: "T-shirt",
        numberOfItems: 10,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return categories;
  }
}
