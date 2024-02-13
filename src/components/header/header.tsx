"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import Button from "../ui/button";
import { cn } from "@/utils/shadcn";

function Header() {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("yess", window.scrollY, window.innerHeight);
      setOnScroll(window.scrollY > window.innerHeight - 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-full h-24 px-20 py-4 fixed top-0 left-0 z-30 transition-colors duration-700",
        onScroll ? "onScroll bg-gray-10" : "bg-transparent"
      )}
    >
      <div className="flex items-center w-full max-w-content">
        <Logo />
        <Menu />
        <Button className="ml-auto" variant={onScroll ? "default" : "plain"}>
          Join Us
        </Button>
      </div>
    </nav>
  );
}

export default Header;
