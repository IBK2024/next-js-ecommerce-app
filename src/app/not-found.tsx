import NotFound from "@/components/ui/notFound";

// !Generate metadata
export function generateMetadata() {
  return {
    title: "404 - Blue Store",
    description: "Discover the latest products at Blue Store",
  };
}

// !Not found page
function NotFoundPage() {
  return <NotFound />;
}

export default NotFoundPage;
