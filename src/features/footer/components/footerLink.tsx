import Link from "next/link";
import type { ReactNode } from "react";

// !Props
interface Props {
  href: string;
  children: ReactNode;
}

// !Footer link
function FooterLink({ href, children }: Props) {
  return (
    <li className="hover:cursor-pointer hover:opacity-80">
      <Link href={href}>{children}</Link>
    </li>
  );
}
export default FooterLink;
