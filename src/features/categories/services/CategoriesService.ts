import categoriesImage from "@/assets/images/t-shirt.png";
import type { CategoryType } from "../types/categoriesTypes";

export default class CategoriesService {
  async getCategories() {
    const categories: CategoryType[] = [
      {
        id: 1,
        name: "T-shirt",
        image: `http://localhost:8080${categoriesImage.src}`,
        numberOfItems: 10,
        description: "A comfortable cotton t-shirt",
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 4000));

    return categories;
  }
}
