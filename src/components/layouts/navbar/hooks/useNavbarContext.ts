"use client";
import { useContext } from "react";
import { NavbarContext } from "../context/navbarContext";

// !Use navbar context custom hook
export function useNavbarContext() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("NavbarContextProvider must be used within NavbarContextProvider");
  }

  return context;
}
