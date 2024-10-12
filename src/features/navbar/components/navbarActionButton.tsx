import Link from "next/link";

// !Navbar action button
function NavbarActionButton() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/categories" className="rounded-full bg-secondary px-4 py-2 font-bold text-primary hover:opacity-90">
        Shop Now
      </Link>
    </div>
  );
}

export default NavbarActionButton;
