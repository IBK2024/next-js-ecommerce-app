import CategoriesService from "@/features/categories/services/CategoriesService";
import CategoriesList from "./components/categoriesList";

async function Categories() {
  const categoriesService = new CategoriesService();
  const categories = await categoriesService.getCategories();

  return <CategoriesList categories={categories} />;
}

export default Categories;
