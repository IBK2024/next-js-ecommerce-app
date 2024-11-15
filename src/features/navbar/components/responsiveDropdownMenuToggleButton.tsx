"use client";
import { useNavbarContext } from "@/features/navbar/context/navbarContext";
import Image from "next/image";
import menuButton from "../assets/icons/menu button.svg";

// !Responsive dropdown menu toggle button
function ResponsiveDropdownMenuToggleButton() {
  const { setToggle } = useNavbarContext();

  return (
    <div>
      <Image
        priority={true}
        src={menuButton}
        alt="menu button"
        onClick={() => setToggle(true)}
        width={0}
        height={0}
        className="object-cover"
      />
    </div>
  );
}

export default ResponsiveDropdownMenuToggleButton;
