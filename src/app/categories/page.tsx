import Heading from "@/components/ui/heading";
import { siteDescription, siteName } from "@/config/constants";
import Categories from "@/features/categories";
import CategoriesLoadingSkeleton from "@/features/categories/components/categoriesLoadingSkeleton";
import { Suspense } from "react";

// !Generate metadata
export function generateMetadata() {
  const title = `Categories - ${siteName}`;
  const openGraphUrl = `/api/og?title=${title}&description=${encodeURIComponent(siteDescription)}`;
  return {
    title: title,
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
