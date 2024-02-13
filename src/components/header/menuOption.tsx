"use client";
import { cn } from "@/utils/shadcn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuOptionWrapperProps = {
  href?: string;
  children: React.ReactNode;
};

type MenuOptionProps = {
  label: string;
  href?: string;
};

function MenuOptionWrapper(props: MenuOptionWrapperProps) {
  const { href, children } = props;

  if (href) {
    return <Link href={href}>{children}</Link>;
  }

  return <>{children}</>;
}

function MenuOption(props: MenuOptionProps) {
  const { label, href } = props;
  const pathname = usePathname();

  const isActive = href && pathname === href;

  return (
    <MenuOptionWrapper href={href}>
      <div
        className={cn(
          "text-base h-11 border-b-[3px] flex items-center justify-center cursor-default",
          isActive
            ? "border-gray-10 onScroll:border-primary text-gray-10 onScroll:text-primary font-bold"
            : "border-transparent text-gray-10 onScroll:text-primary/55  font-medium"
        )}
      >
        {label}
      </div>
    </MenuOptionWrapper>
  );
}

export default MenuOption;
