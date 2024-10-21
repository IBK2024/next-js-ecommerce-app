import Link from "next/link";

// !Navbar login button
function NavbarLoginButton() {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/login"
        className="rounded-full border-2 border-primary bg-none px-4 py-2 font-bold text-primary hover:border-none hover:bg-secondary"
        role="button"
      >
        Login
      </Link>
    </div>
  );
}

export default NavbarLoginButton;
