import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// !Props
type Props = {
  children: ReactNode;
  className?: string;
};

// !Footer column
function FooterColumn({ children, className }: Props) {
  const classNames = twMerge("px-4", className);
  return <div className={classNames}>{children}</div>;
}

export default FooterColumn;
