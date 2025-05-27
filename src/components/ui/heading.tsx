import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Heading({ children }: Props) {
  return <h1 className="text-center font-semibold text-3xl text-secondary uppercase">{children}</h1>;
}

export default Heading;
