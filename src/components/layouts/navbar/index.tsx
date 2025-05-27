import NavbarContextProvider from "@/components/layouts/navbar/context/navbarContext";
import type { NavbarLinkType } from "@/components/layouts/navbar/types/navbarTypes";
import NavbarActionButton from "./components/navbarActionButton";
import NavbarLinks from "./components/navbarLinks";
import NavbarLoginButton from "./components/navbarLoginButton";
import NavbarLogo from "./components/navbarLogo";
import ResponsiveDropdownMenu from "./components/responsiveDropdownMenu";

// !Props
interface Props {
  links: NavbarLinkType[];
}

// !Main navbar
function Navbar({ links }: Props) {
  return (
    <NavbarContextProvider>
      <nav
        className="flex h-navbarHeight w-full items-center justify-around bg-tertiary px-4 py-1 text-primary *:w-fit"
        data-cy="navbar"
      >
        <NavbarLogo />
        <NavbarLinks links={links} />
        <div className="hidden items-center justify-center *:mx-3 sm:flex">
          <NavbarLoginButton />
          <NavbarActionButton />
        </div>

        {/* Responsive design */}
        <ResponsiveDropdownMenu links={links} />
      </nav>
    </NavbarContextProvider>
  );
}

export default Navbar;
