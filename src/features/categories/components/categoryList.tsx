import CategoriesService from "@/services/CategoriesService";
import CategoryCard from "./categoryCard";

// !Category list
async function CategoryList() {
  const categoriesService = new CategoriesService();

  const categories = await categoriesService.getCategories();
  return (
    <div className="mt-16 grid grid-cols-categoriesGrid items-center gap-5 p-4">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoryList;
