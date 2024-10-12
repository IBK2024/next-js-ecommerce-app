import NavbarActionButton from "./components/navbarActionButton";
import NavbarLink from "./components/navbarLink";
import NavbarLoginButton from "./components/navbarLoginButton";
import NavbarLogo from "./components/navbarLogo";

// !Main navbar
function Navbar() {
  return (
    <nav className="flex h-navbarHeight w-screen items-center justify-around bg-tertiary px-4 py-1 text-primary *:w-fit">
      <NavbarLogo />
      <div className="flex items-center">
        <NavbarLink href="/">Tees</NavbarLink>
      </div>
      <div className="flex items-center justify-center *:mx-3">
        <NavbarLoginButton />
        <NavbarActionButton />
      </div>
    </nav>
  );
}

export default Navbar;
