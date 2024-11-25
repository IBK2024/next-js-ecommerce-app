import { Suspense } from "react";
import CategoriesHeading from "./components/categoriesHeading";
import CategoryList from "./components/categoryList";
import CategoryListSkeleton from "./skeletons/categoryListSkeleton";

// !Categories section
function Categories() {
  return (
    <div className="bg-primary">
      <CategoriesHeading />
      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoryList />
      </Suspense>
    </div>
  );
}

export default Categories;
