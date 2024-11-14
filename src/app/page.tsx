import HeroSection from "./features/heroSection";

// !Generate Metadata
export function generateMetadata() {
  return {
    title: "Home - Blue Store",
    description: "Discover the latest products at Blue Store",
  };
}

// !Home page
export default function Home() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
