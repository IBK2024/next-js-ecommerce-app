import type { ReactNode } from "react";

// !Props
interface Props {
  children: ReactNode;
}

// !Footer heading
function FooterHeading({ children }: Props) {
  return <h2 className="mb-5 font-bold text-2xl">{children}</h2>;
}

export default FooterHeading;
