export default class CategoriesService {
  getCategories() {
    return [
      {
        id: "1",
        name: "T-shirt",
        description: "A comfortable cotton t-shirt",
        numberOfProducts: 10,
        image: "/mock-image.png",
      },
    ];
  }
}
