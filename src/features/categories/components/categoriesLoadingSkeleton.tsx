import CategoriesGrid from "./categoriesGrid";

// !Categories section loading skeleton
function CategoriesLoadingSkeleton() {
  return (
    <CategoriesGrid data-cy="categories-loading">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          className="block w-full animate-pulse rounded-lg border-4 border-gray-200 bg-secondary bg-opacity-10 shadow-sm"
          key={index}
          data-testid="category-card-skeleton"
        >
          <div className="aspect-square w-full bg-secondary bg-opacity-5" />
          <div className="h-16 py-4">
            <div className="size-full bg-secondary bg-opacity-5" />
          </div>
        </div>
      ))}
    </CategoriesGrid>
  );
}

export default CategoriesLoadingSkeleton;
