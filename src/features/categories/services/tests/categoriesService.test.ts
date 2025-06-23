import prisma from "@/lib/prisma";
import { expect } from "vitest";
import type { CategoryType } from "../../types/categoriesTypes";
import CategoriesService from "../CategoriesService";

// Mock Prisma client
vi.mock("@/lib/prisma", () => ({
  default: {
    categories: {
      findMany: vi.fn(),
      delete: vi.fn(),
      create: vi.fn(),
    },
  },
}));

// !Test suite for CategoriesService service
describe("test suite for the CategoriesService service", () => {
  const service = new CategoriesService();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // !Test case for the getCategories method
  it("should return a list of categories", async () => {
    const mockCategories: CategoryType[] = [
      {
        id: "1",
        name: "T-shirt",
        image: "https://example.com/tshirt.jpg",
        numberOfProducts: 10,
        description: "A comfortable cotton t-shirt",
      },
    ];

    (prisma.categories.findMany as ReturnType<typeof vi.fn>).mockResolvedValue(mockCategories);

    const categories = await service.getCategories();

    expect(categories).toEqual(mockCategories);
    expect(prisma.categories.findMany).toHaveBeenCalledTimes(2);
  });
});
