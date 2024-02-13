import React from "react";
import HamburgerIcon from "../icons/hamburger";

type ToogleMenuIconProps = {
  toggleMenu: () => void;
};

function ToogleMenuIcon(props: ToogleMenuIconProps) {
  const { toggleMenu } = props;

  return (
    <div className="w-6 h-6 cursor-pointer mr-4 md:hidden" onClick={toggleMenu}>
      <HamburgerIcon className="w-full h-full" />
    </div>
  );
}

export default ToogleMenuIcon;
