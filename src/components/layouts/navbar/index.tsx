import { navbarLinks } from "@/config/constants";
import MobileNavbarDropdownMenu from "./components/mobileNavbarDropdownMenu";
import MobileNavbarToggleButton from "./components/mobileNavbarToggleButton";
import NavbarActionButton from "./components/navbarActionButton";
import NavbarLink from "./components/navbarLink";
import NavbarLoginButton from "./components/navbarLoginButton";
import NavbarLogo from "./components/navbarLogo";
import NavbarContextProvider from "./context/navbarContext";

// !Main navbar
function Navbar() {
  return (
    <NavbarContextProvider>
      <header className="relative bg-tertiary px-8">
        <nav
          className="mx-auto flex h-navbarHeight w-full max-w-7xl items-center justify-between text-primary"
          data-cy="navbar"
        >
          <NavbarLogo />
          <ul className="hidden items-center gap-8 lg:flex">
            {navbarLinks.map((link, i) => (
              <li className="mx-auto w-fit" key={i}>
                <NavbarLink href={link.href}>{link.name}</NavbarLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-3">
            <NavbarLoginButton className="hidden lg:block" />
            <NavbarActionButton className="hidden lg:block" />

            {/* Toggles the navbar on smaller screens */}
            <MobileNavbarToggleButton />
          </div>

          {/* Navbar dropdown menu for smaller screens */}
          <MobileNavbarDropdownMenu />
        </nav>
      </header>
    </NavbarContextProvider>
  );
}

export default Navbar;
