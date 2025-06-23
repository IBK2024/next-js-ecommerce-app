import type { CategoryType } from "@/features/categories/types/categoriesTypes";
import CategoriesGrid from "../categoriesGrid";
import CategoryCard from "./components/categoryCard";

// !Props
type Props = {
  categories: CategoryType[];
};

// !Category list
function CategoriesList({ categories }: Props) {
  if (categories.length === 0) {
    return (
      <p
        className="block text-center font-normal text-lg"
        data-cy="categories-empty-message"
        data-testid="categories-section"
      >
        Sorry no categories available
      </p>
    );
  }

  return (
    <CategoriesGrid data-cy="categories-section" data-testid="categories-section">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </CategoriesGrid>
  );
}

export default CategoriesList;
