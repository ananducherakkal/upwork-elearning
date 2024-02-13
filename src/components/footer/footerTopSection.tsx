import React from "react";
import Logo from "../header/logo";
import Menu from "../header/menu";
import Button from "../ui/button";

function FooterTopSection() {
  return (
    <div className="w-full flex">
      <Logo />
      <Menu />
      <Button className="ml-auto" variant="plain">
        Join Us
      </Button>
    </div>
  );
}

export default FooterTopSection;
