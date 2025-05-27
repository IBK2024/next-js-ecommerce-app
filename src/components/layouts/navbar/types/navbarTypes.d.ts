import type { Dispatch, SetStateAction } from "react";

// !Navbar link type
export interface NavbarLinkType {
  name: string;
  href: string;
}

// !Navbar context type
export interface NavbarContextType {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}
