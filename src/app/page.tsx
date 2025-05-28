import Heading from "@/components/ui/heading";
import { siteDescription, siteName } from "@/config/constants";
import Categories from "@/features/categories";
import CategoriesLoadingSkeleton from "@/features/categories/components/categoriesLoadingSkeleton";
import { Suspense } from "react";
import HeroSection from "../components/ui/heroSection";

export function generateMetadata(_request: Request) {
  const title = `Home - ${siteName}`;
  const openGraphUrl = `/api/og?title=${title}&description=${encodeURIComponent(siteDescription)}`;
  return {
    title: `Home - ${siteName}`,
    description: siteDescription,
    openGraph: {
      images: [
        {
          url: openGraphUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
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
