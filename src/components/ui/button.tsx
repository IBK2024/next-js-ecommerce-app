import type { UrlObject } from "node:url";
import Link from "next/link";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// !Props
interface Props {
  className?: string;
  children: ReactNode;
  href?: string | UrlObject;
}

// !Button component
function Button({ children, className, href, ...props }: Props) {
  const buttonClassname = twMerge(
    "rounded-full bg-secondary px-4 py-2 font-bold text-primary hover:opacity-90",
    className ? className : "",
  );

  return (
    <Link href={href ? href : "#"} className={buttonClassname} role="button" {...props}>
      {children}
    </Link>
  );
}

export default Button;
