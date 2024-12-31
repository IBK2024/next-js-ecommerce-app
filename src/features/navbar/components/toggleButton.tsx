"use client";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// !Toggle Button
function ResponsiveDropdownMenu() {
  const [toggle, setToggle] = useState(true);
  function changeIcon() {
    setToggle(!toggle);
  }
  return (
    <>
      {toggle ? (
        <FontAwesomeIcon icon={faX} onClick={changeIcon} />
      ) : (
        <FontAwesomeIcon icon={faBars} onClick={changeIcon} />
      )}
    </>
  );
}

export default ResponsiveDropdownMenu;
