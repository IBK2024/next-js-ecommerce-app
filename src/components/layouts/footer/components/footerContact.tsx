import type { ReactNode } from "react";

// !Props
interface Props {
  children: ReactNode;
  icon: ReactNode;
}

// !Footer contact
function FooterContact({ children, icon }: Props) {
  return (
    <li className="mb-4 flex items-center">
      <span className="mr-4">{icon}</span>
      <p>{children}</p>
    </li>
  );
}

export default FooterContact;
