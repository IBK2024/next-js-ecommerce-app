import Button from "@/components/ui/button";

// !Hero section
function HeroSection() {
  return (
    <div
      className="flex h-heroHeight w-full flex-col items-center justify-center bg-tertiary *:text-center *:text-primary"
      data-cy="hero"
    >
      <h1 className="font-bold text-heroHeading uppercase">Amazing Products at affordable prices</h1>
      <p className="text-lg leading-relaxed sm:text-3xl">Discover the latest products from our store now!</p>
      <Button href="/categories" data-cy="hero-action-button">
        Shop Now
      </Button>
    </div>
  );
}

export default HeroSection;
