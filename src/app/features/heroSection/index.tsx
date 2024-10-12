import Link from "next/link";

// !Hero section
function HeroSection() {
  return (
    <div className="flex h-heroHeight w-screen flex-col items-center justify-center bg-tertiary *:text-primary">
      <h1 className="font-bold text-5xl uppercase">Amazing Products at incredible price</h1>
      <p className="text-lg leading-relaxed">Discover the latest trends and products from our store now!</p>
      <Link href="/categories" className="rounded-full bg-secondary px-4 py-2 font-bold text-primary hover:opacity-90">
        Shop Now
      </Link>
    </div>
  );
}

export default HeroSection;
