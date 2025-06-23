"use client";
import { type ReactNode, createContext, useEffect, useState } from "react";
import type { NavbarContextType } from "../../types/navbarTypes";

// !Navbar context
export const NavbarContext = createContext<NavbarContextType | null>(null);

// !Navbar context provider props
type Props = {
  children: ReactNode;
};

// !Navbar context provider
export default function NavbarContextProvider({ children }: Props) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    }
  }, [toggle]);

  return <NavbarContext.Provider value={{ toggle, setToggle }}>{children}</NavbarContext.Provider>;
}
