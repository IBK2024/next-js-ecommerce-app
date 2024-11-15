"use client";
import { useNavbarContext } from "@/features/navbar/context/navbarContext";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import closeButton from "../assets/icons/cancel.svg";
import NavbarActionButton from "./navbarActionButton";
import NavbarLink from "./navbarLink";
import NavbarLoginButton from "./navbarLoginButton";
import ResponsiveDropdownMenuToggleButton from "./responsiveDropdownMenuToggleButton";

// !Props
interface Props {
  links?: { name: string; href: string }[];
}

// !Toggle button
function ResponsiveDropdownMenu({ links }: Props) {
  const { toggle, setToggle } = useNavbarContext();
  return (
    <div>
      <ResponsiveDropdownMenuToggleButton />
      <div
        className={twMerge(
          "fixed top-0 left-0 flex h-0 w-full items-center justify-center overflow-hidden bg-tertiary transition-all duration-1000",
          toggle ? "h-screen p-5" : "h-0",
        )}
      >
        <Image
          priority={true}
          src={closeButton}
          alt="close button"
          onClick={() => setToggle(false)}
          width={0}
          height={0}
          className="absolute top-2 right-2 object-cover"
        />
        <ul className="text-center *:my-2">
          {links
            ? links.map((link, i) => (
                <NavbarLink key={i} href={link.href}>
                  {link.name}
                </NavbarLink>
              ))
            : null}
          <li className="group px-1 hover:cursor-pointer hover:opacity-80">
            <NavbarLoginButton />
          </li>
          <li className="group px-1 hover:cursor-pointer hover:opacity-80">
            <NavbarActionButton />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveDropdownMenu;
