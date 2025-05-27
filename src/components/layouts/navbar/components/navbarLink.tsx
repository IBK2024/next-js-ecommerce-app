import Link from "next/link";
import type { ReactNode } from "react";

// !Props
interface Props {
  href: string;
  children: ReactNode;
}

// !Navbar link
function NavbarLink({ href, children }: Props) {
  return (
    <li className="group px-1 hover:cursor-pointer hover:opacity-80">
      <Link href={href} className="mx-auto text-2xl" data-cy="navbar-link">
        {children}
      </Link>
      <hr className="mx-auto w-0 border-y-1 transition-all duration-300 group-hover:w-full" />
    </li>
  );
}

export default NavbarLink;
