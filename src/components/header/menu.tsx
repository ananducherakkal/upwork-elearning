import React from "react";
import headerOptions from "@/json/headerOptions.json";
import MenuOption from "./menuOption";
import { cn } from "@/utils/shadcn";

type MenuProps = {
  options?: Array<{
    id: number;
    label: string;
    href?: string;
  }>;
  open?: boolean;
};

function Menu(props: MenuProps) {
  const { options = headerOptions, open = false } = props;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-12 py-12 md:py-0 px-12 fixed md:static top-0 left-0 bg-gray-10 md:bg-transparent h-full md:h-fit z-50 md:z-20 md:translate-x-0",
        open ? "translate-x-none" : "-translate-x-[300px]"
      )}
    >
      {options.map((item) => (
        <MenuOption key={item.id} label={item.label} href={item.href} />
      ))}
    </div>
  );
}

export default Menu;
