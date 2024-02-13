import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Button from "../ui/button";

function Header() {
  return (
    <div className="w-full h-24 px-20 py-4 fixed top-0 left-0 z-30">
      <div className="flex items-center w-full max-w-content">
        <Logo />
        <Menu />
        <Button className="ml-auto">Join Us</Button>
      </div>
    </div>
  );
}

export default Header;
