import type { CategoryType } from "@/features/categories/types/categoriesTypes";
import CategoriesGrid from "./categoriesGrid";
import CategoryCard from "./categoryCard";

// !Props
interface Props {
  categories: CategoryType[];
}

// !Category list
function CategoriesList({ categories }: Props) {
  if (categories.length === 0) {
    return (
      <div
        className="flex items-center justify-center"
        data-testid="categories-section"
      >
        <p className="font-normal text-lg">No categories available</p>
      </div>
    );
  }

  return (
    <CategoriesGrid data-testid="categories-section">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </CategoriesGrid>
  );
}

export default CategoriesList;
