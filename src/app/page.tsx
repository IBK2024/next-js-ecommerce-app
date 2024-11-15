import HeroSection from "./features/heroSection";

// !Generate metadata
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
      <p>Home page content...</p>
    </div>
  );
}
