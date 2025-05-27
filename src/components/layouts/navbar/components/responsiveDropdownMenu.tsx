"use client";
import CancelIcon from "@/components/icons/cancelIcon";
import MenuIcon from "@/components/icons/menuIcon";
import type { NavbarLinkType } from "@/components/layouts/navbar/types/navbarTypes";
import { twMerge } from "tailwind-merge";
import { useNavbarContext } from "../hooks/useNavbarContext";
import NavbarActionButton from "./navbarActionButton";
import NavbarLink from "./navbarLink";
import NavbarLoginButton from "./navbarLoginButton";

// !Props
interface Props {
  links: NavbarLinkType[];
}

// !Toggle button
function ResponsiveDropdownMenu({ links }: Props) {
  const { toggle, setToggle } = useNavbarContext();
  const dropdownNavbarClassname = twMerge(
    "fixed top-0 left-0 flex h-0 w-full items-center justify-center overflow-hidden bg-tertiary transition-all duration-1000",
    toggle ? "h-screen p-5" : "h-0 hidden",
  );

  // !Render the responsive dropdown menu on small screens (sm:hidden)
  return (
    <div className="sm:hidden">
      {/*
        Responsive menu icon
        This icon will be shown on small screens and will trigger the dropdown menu
        when clicked via the setToggle function.
        The icon will be hidden on larger screens (sm:hidden)
      */}
      <MenuIcon
        data-testid="toggle-button"
        className="pointer stroke-primary text-primary hover:scale-105 active:scale-95"
        onClick={() => setToggle(true)}
      />

      {/* Responsive dropdown menu */}
      <div className={dropdownNavbarClassname} data-testid="dropdown-menu" aria-label={toggle ? "open" : "closed"}>
        {/*
          Cancel icon
          This icon will be shown on small screens and will close the dropdown menu
          when clicked via the setToggle function.
          The icon will be hidden on larger screens (sm:hidden)
        */}
        <CancelIcon
          onClick={() => setToggle(false)}
          data-testid="toggle-button"
          className="pointer absolute top-2 right-2 fill-primary hover:scale-105 active:scale-95"
        />

        {/*
          Responsive dropdown menu links
          This will be shown when the dropdown menu is open
          The links will be passed as props to the component
        */}
        <ul className="text-center *:my-2">
          {links?.map((link, i) => (
            <NavbarLink key={i} href={link.href}>
              {link.name}
            </NavbarLink>
          ))}

          {/*
            Responsive dropdown menu buttons
          */}

          <li className="group px-1 hover:cursor-pointer">
            <NavbarLoginButton />
          </li>
          <li className="group px-1 hover:cursor-pointer">
            <NavbarActionButton />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveDropdownMenu;
