import type { Dispatch, SetStateAction } from "react";
import type { ReactNode } from "react";

// !Navbar context type
export type NavbarContextType = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

// !Navbar link props type
export type NavbarLinkPropsType = {
  href: string;
  children: ReactNode;
};
