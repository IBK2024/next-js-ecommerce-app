import Categories from "@/features/categories";

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
    <div className="min-h-[80vh]">
      <Categories />
    </div>
  );
}

export default CategoriesPage;
