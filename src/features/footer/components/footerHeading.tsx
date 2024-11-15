import type { ReactNode } from "react";

// !Props
interface Props {
  children: ReactNode;
}

// !Footer heading
function FooterHeading({ children }: Props) {
  return (
    <div className="w-fit font-bold text-xl">
      <h1 className="inline">{children}</h1>
      <hr className="h-0.5 w-full rounded border-none bg-primary" />
    </div>
  );
}

export default FooterHeading;
