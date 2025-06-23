import { cookies } from "next/headers";
import CategoriesList from "./components/categoriesList";

async function Categories() {
  // !Importing the cookies from Next.js headers to check for mock data usage.
  const cookieStore = cookies();

  // !Importing the service conditionally based on the cookies that indicates whether to use mock data or not.
  // !Cookie "useMock" will be set to "true" when testing.
  const mockMode = cookieStore.get("useMock")?.value === "true";
  const CategoriesService = mockMode
    ? (await import("./services/__mocks__/CategoriesService")).default
    : (await import("./services/CategoriesService")).default;

  const categoriesService = new CategoriesService();
  const categories = await categoriesService.getCategories();

  return <CategoriesList categories={categories} />;
}

export default Categories;
