import Link from "next/link";
import type { NavbarLinkPropsType } from "../../types/navbarTypes";
import NavbarLinkActiveUnderline from "./components/navbarLinkActiveUnderline";

// !Navbar link
function NavbarLink({ href, children }: NavbarLinkPropsType) {
  return (
    <Link
      href={href}
      className="group text-base transition-all duration-100 ease-in-out *:transition-all *:duration-100 *:ease-in-out hover:cursor-pointer hover:text-secondary"
      data-cy="navbar-link"
    >
      {children}
      <NavbarLinkActiveUnderline href={href} />
    </Link>
  );
}

export default NavbarLink;
