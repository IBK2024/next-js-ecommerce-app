import Link from "next/link";
import type { ReactNode } from "react";

// !Props
interface Props {
  href: string;
  children: ReactNode;
}

// !Footer social icon
function FooterSocialIcon({ children, ...props }: Props) {
  return (
    <li>
      <Link
        className="group mr-12 inline-block h-12 w-12 border-2 border-primary border-solid bg-transparent pt-3 hover:bg-primary"
        data-cy="footer-social-icon"
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default FooterSocialIcon;
