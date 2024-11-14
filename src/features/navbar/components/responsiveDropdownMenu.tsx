"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import closeButton from "../assets/cancel.svg";
import menuButton from "../assets/menu button.svg";
import NavbarActionButton from "./navbarActionButton";
import NavbarLink from "./navbarLink";
import NavbarLoginButton from "./navbarLoginButton";

// !Props
interface Props {
  links?: { name: string; href: string }[];
}

// !Toggle Button
function ResponsiveDropdownMenu({ links }: Props) {
  const [toggle, setToggle] = useState(false);
  function changeIcon() {
    setToggle(!toggle);
  }
  return (
    <div className="block sm:hidden">
      {toggle ? (
        <Image
          priority={true}
          src={closeButton}
          alt="close button"
          onClick={changeIcon}
          width={0}
          height={0}
          objectFit="cover"
          className="relative z-10"
        />
      ) : (
        <Image
          priority={true}
          src={menuButton}
          alt="menu button"
          onClick={changeIcon}
          width={0}
          height={0}
          objectFit="cover"
          className="relative z-10"
        />
      )}
      <div
        className={twMerge(
          "fixed top-0 left-0 flex h-0 w-full items-center justify-center overflow-hidden bg-tertiary transition-all duration-1000",
          toggle ? "h-screen p-5" : "h-0",
        )}
      >
        <div className="text-center *:my-2">
          {links
            ? links.map((link, i) => (
                <NavbarLink key={i} href={link.href}>
                  {link.name}
                </NavbarLink>
              ))
            : null}
          <NavbarLoginButton />
          <NavbarActionButton />
        </div>
      </div>
    </div>
  );
}

export default ResponsiveDropdownMenu;
