"use client";
import CancelIcon from "@/components/icons/cancelIcon";
import MenuIcon from "@/components/icons/menuIcon";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useNavbarContext } from "../../hooks/useNavbarContext";

// !Toggle button for mobile navbar
function MobileNavbarToggleButton() {
  const { toggle, setToggle } = useNavbarContext();
  const className = "block lg:hidden pointer hover:scale-105 active:scale-95";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  if (!toggle) {
    return (
      <MenuIcon
        data-testid="toggle-button"
        className={twMerge(className, "stroke-primary")}
        onClick={() => setToggle(true)}
      />
    );
  }

  return (
    <CancelIcon
      onClick={() => setToggle(false)}
      data-testid="toggle-button"
      className={twMerge(className, "fill-primary")}
    />
  );
}

export default MobileNavbarToggleButton;
