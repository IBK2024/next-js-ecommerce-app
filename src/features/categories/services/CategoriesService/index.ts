import categoriesImage from "@/assets/images/t-shirt.png";
import prisma from "@/lib/prisma";
import type { CategoryType } from "../../types/categoriesTypes";

// ! Categories service
export default class CategoriesService {
  // !Returns all categories from the database
  async getCategories() {
    await this.seedCategories();
    const categories: CategoryType[] = await prisma.categories.findMany();

    return categories;
  }

  // !Creates a new category in the database
  async createCategory(name: string, image: string, numberOfProducts: number, description: string) {
    const newCategory = await prisma.categories.create({
      data: {
        name: name,
        image: image,
        numberOfProducts: numberOfProducts,
        description: description,
      },
    });

    return newCategory;
  }

  // !Seeds the database with a default category if no categories exist
  async seedCategories() {
    const categories = await prisma.categories.findMany();
    if (categories.length === 0) {
      await this.createCategory(
        "T-shirt",
        `http://localhost:8080${categoriesImage.src}`,
        10,
        "A comfortable cotton t-shirt",
      );
    }
  }
}
