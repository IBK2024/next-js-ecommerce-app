import { env } from "@/config/env";
import { cookies } from "next/headers";
import CategoriesList from "./components/categoriesList";

async function Categories() {
  // !Importing the cookies from Next.js headers to check for mock data usage.
  // !Cookie "mock: noCategories" will be set to "true" when testing with no categories.
  const cookieStore = cookies();
  const noCategories = cookieStore.get("mock: noCategories")?.value === "true";
  const nextPublicUseMockData = env.NEXT_PUBLIC_USE_MOCK_DATA === "true";

  // !Importing the service conditionally based on the cookies that indicates whether to use mock data or not.
  const CategoriesService = nextPublicUseMockData
    ? noCategories
      ? (await import("./services/__mocks__/categoriesServiceWithoutData")).default
      : (await import("./services/__mocks__/CategoriesService")).default
    : (await import("./services/CategoriesService")).default;

  const categoriesService = new CategoriesService();
  const categories = await categoriesService.getCategories();

  return <CategoriesList categories={categories} />;
}

export default Categories;
