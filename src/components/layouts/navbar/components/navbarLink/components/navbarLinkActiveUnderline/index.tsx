"use client";
import { usePathname } from "next/navigation";

// !Props
type Props = {
  href: string;
};

// !Underline for navbar links when active
function NavbarLinkActiveUnderline({ href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return isActive && <hr className="mx-auto w-1/2 rounded border-primary border-y-2 group-hover:border-secondary" />;
}

export default NavbarLinkActiveUnderline;
