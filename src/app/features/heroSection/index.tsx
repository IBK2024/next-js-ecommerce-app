import Link from "next/link";

// !Hero section
function HeroSection() {
  return (
    <div className="flex h-heroHeight w-screen flex-col items-center justify-center bg-tertiary *:text-center *:text-primary">
      <h1 className="font-bold text-heroHeading uppercase">Amazing Products at affordable prices</h1>
      <p className="text-heroSubheading leading-relaxed">Discover the latest products from our store now!</p>
      <Link
        href="/categories"
        className="rounded-full bg-secondary px-3 py-1 font-bold text-primary hover:opacity-90 sm:px-5 sm:py-3"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default HeroSection;
