import CategoryCardSkeleton from "./categoryCardSkeleton";

// !Category list loading skeleton
function CategoryListSkeleton() {
  return (
    <div className="mt-16 grid grid-cols-categoriesGrid items-center gap-5 p-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <CategoryCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default CategoryListSkeleton;
