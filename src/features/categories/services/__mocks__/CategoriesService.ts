export const fakeCategories = [
  {
    id: "1",
    name: "T-shirt",
    description: "A comfortable cotton t-shirt",
    numberOfProducts: 10,
    image: "/mock-image.png",
  },
];

// !Mock CategoriesService for testing purposes
// !Returns a list of categories with mock data
export default class CategoriesService {
  getCategories() {
    return fakeCategories;
  }
}
