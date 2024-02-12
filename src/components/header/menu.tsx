import React from "react";
import headerOptions from "@/json/headerOptions.json";
import MenuOption from "./menuOption";

type MenuProps = {
  options?: Array<{
    id: number;
    label: string;
    href?: string;
  }>;
};

function Menu(props: MenuProps) {
  const { options = headerOptions } = props;

  return (
    <div className="flex space-x-12 px-12">
      {options.map((item) => (
        <MenuOption key={item.id} label={item.label} href={item.href} />
      ))}
    </div>
  );
}

export default Menu;
