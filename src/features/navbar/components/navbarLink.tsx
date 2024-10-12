import Link from "next/link";
import type React from "react";

// !Props
interface Props {
  href: string;
  children: React.ReactNode;
}

// !Navbar Link
function NavbarLink({ href, children }: Props) {
  return (
    <div className="group px-1 text-xl hover:cursor-pointer hover:opacity-80">
      <Link href={href} className="mx-auto">
        {children}
      </Link>
      <hr className="mx-auto w-0 border-y-1 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default NavbarLink;
