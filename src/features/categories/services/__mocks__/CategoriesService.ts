// !Mock categories data
export const mockCategoriesData = [
  {
    id: "1",
    name: "T-shirt",
    description: "A comfortable cotton t-shirt",
    numberOfProducts: 10,
    image: "/mock-image.png",
  },
];

// !Mock CategoriesService for testing purposes
export default class CategoriesService {
  getCategories() {
    return mockCategoriesData;
  }
}
