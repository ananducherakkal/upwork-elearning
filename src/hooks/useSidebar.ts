import React, { useState } from "react";

function useSidebar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  return {
    showMenu,
    toggleMenu,
    closeMenu,
    openMenu,
  };
}

export default useSidebar;
