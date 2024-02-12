import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Button from "../ui/button";

function Header() {
  return (
    <div className="w-full h-24 px-20 py-4 flex items-center">
      <Logo />
      <Menu />
      <Button className="ml-auto">Join Us</Button>
    </div>
  );
}

export default Header;
