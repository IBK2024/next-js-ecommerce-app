import Heading from "@/components/ui/heading";
import Categories from "@/features/categories";
import CategoriesLoadingSkeleton from "@/features/categories/components/categoriesLoadingSkeleton";
import { Suspense } from "react";

// !Generate metadata
export function generateMetadata() {
  return {
    title: "Categories - Blue Store",
    description: "Discover the latest products at Blue Store",
  };
}

// !Categories page
function CategoriesPage() {
  return (
    <div>
      <Heading>Categories</Heading>
      <Suspense fallback={<CategoriesLoadingSkeleton />}>
        <Categories />
      </Suspense>
    </div>
  );
}

export default CategoriesPage;
