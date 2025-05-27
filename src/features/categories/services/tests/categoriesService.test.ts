import { expect } from "vitest";
import CategoriesService from "../CategoriesService";

// !Test suite for CategoriesService service
describe("test suite for the CategoriesService service", () => {
  // !Test case for the getCategories method
  it("should return a list of categories", async () => {
    const categoriesService = new CategoriesService();
    const categories = await categoriesService.getCategories();

    expect(categories).toBeDefined();
    expect(categories).toBeInstanceOf(Array);
    expect(categories.length).toBeGreaterThan(0);
    expect(categories[0]).toHaveProperty("id");
    expect(categories[0]).toHaveProperty("name");
    expect(categories[0]).toHaveProperty("image");
    expect(categories[0]).toHaveProperty("numberOfItems");
    expect(categories[0]).toHaveProperty("description");
  });
});
