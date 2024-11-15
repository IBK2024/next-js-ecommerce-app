"use client";
import { type Dispatch, type ReactNode, type SetStateAction, createContext, useContext, useState } from "react";

// !Navbar context type
interface NavbarContextType {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

// !Navbar context
export const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// !Navbar context provider props
interface Props {
  children: ReactNode;
}

// !Navbar context provider
export default function NavbarContextProvider({ children }: Props) {
  const [toggle, setToggle] = useState(false);

  return <NavbarContext.Provider value={{ toggle, setToggle }}>{children}</NavbarContext.Provider>;
}

// !Use navbar context custom hook

export function useNavbarContext() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("NavbarContextProvider must be used within NavbarContextProvider");
  }

  return context;
}
