import type { NavbarLinkType } from "@/components/layouts/navbar/types/navbarTypes";
import NavbarLink from "./navbarLink";

// !Props
interface Props {
  links: NavbarLinkType[];
}

// !Navbar links
function NavbarLinks({ links }: Props) {
  return (
    <ul className="hidden items-center sm:flex">
      {links?.map((link, i) => (
        <NavbarLink key={i} href={link.href}>
          {link.name}
        </NavbarLink>
      ))}
    </ul>
  );
}

export default NavbarLinks;
