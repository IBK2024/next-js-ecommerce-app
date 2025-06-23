"use client";
import { navbarLinks } from "@/config/constants";
import { useNavbarContext } from "../../hooks/useNavbarContext";
import NavbarActionButton from "../navbarActionButton";
import NavbarLink from "../navbarLink";
import NavbarLoginButton from "../navbarLoginButton";

// !Toggle button
function MobileNavbarDropdownMenu() {
  const { toggle, setToggle } = useNavbarContext();

  // !Render the responsive dropdown menu on small screens
  return (
    <ul
      className={`absolute top-[60px] right-8 left-8 block w-[unset] rounded-xl bg-black bg-opacity-10 backdrop-blur-lg transition-all duration-500 ease-in-out *:flex *:items-center *:justify-center *:p-3 sm:left-auto sm:w-80 lg:hidden ${
        toggle ? "max-h-[60%] overflow-scroll opacity-100" : "max-h-0 overflow-hidden opacity-0"
      }`}
      data-testid="dropdown-menu"
    >
      {/* Links */}
      {navbarLinks.map((link, i) => (
        <li
          className="flex items-center justify-center p-3 hover:cursor-pointer hover:opacity-80"
          key={i}
          onClick={() => setToggle(false)}
          onKeyUp={() => setToggle(false)}
        >
          <NavbarLink href={link.href}>{link.name}</NavbarLink>
        </li>
      ))}

      {/* Action buttons */}
      <li className="flex items-center justify-center p-3 hover:cursor-pointer hover:opacity-80">
        <NavbarLoginButton className="flex w-full justify-center" />
      </li>
      <li className="flex items-center justify-center p-3 hover:cursor-pointer hover:opacity-80">
        <NavbarActionButton className="flex w-full justify-center" />
      </li>
    </ul>
  );
}

export default MobileNavbarDropdownMenu;
