import Heading from "@/components/ui/heading";
import Categories from "@/features/categories";
import CategoriesLoadingSkeleton from "@/features/categories/components/categoriesLoadingSkeleton";
import { Suspense } from "react";
import HeroSection from "../components/ui/heroSection";

// !Generate metadata
export function generateMetadata() {
  return {
    title: "Home - Blue Store",
    description: "Discover the latest products at Blue Store",
  };
}

// !Home page
function Home() {
  return (
    <>
      <HeroSection />
      <div data-cy="categories">
        <Heading>Categories</Heading>
        <Suspense fallback={<CategoriesLoadingSkeleton />}>
          <Categories />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
