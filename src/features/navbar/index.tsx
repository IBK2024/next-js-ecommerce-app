import NavbarActionButton from "./components/navbarActionButton";
import NavbarLink from "./components/navbarLink";
import NavbarLoginButton from "./components/navbarLoginButton";
import NavbarLogo from "./components/navbarLogo";
import ResponsiveDropdownMenu from "./components/responsiveDropdownMenu";

// !Props
interface Props {
  links?: { name: string; href: string }[];
}

// !Main navbar
function Navbar({ links }: Props) {
  return (
    <nav className="flex h-navbarHeight w-screen items-center justify-around bg-tertiary px-4 py-1 text-primary *:w-fit">
      <NavbarLogo />
      <div className="hidden items-center sm:flex">
        {links
          ? links.map((link, i) => (
              <NavbarLink key={i} href={link.href}>
                {link.name}
              </NavbarLink>
            ))
          : null}
      </div>
      <div className="hidden items-center justify-center *:mx-3 sm:flex">
        <NavbarLoginButton />
        <NavbarActionButton />
      </div>

      {/* Responsive design */}
      <ResponsiveDropdownMenu links={links} />
    </nav>
  );
}

export default Navbar;
