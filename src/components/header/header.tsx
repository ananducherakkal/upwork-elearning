"use client";
import Logo from "./logo";
import Menu from "./menu";
import Button from "../ui/button";
import { cn } from "@/utils/shadcn";
import HamburgerIcon from "../icons/hamburger";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import useSidebar from "@/hooks/useSidebar";
import ToogleMenuIcon from "./toogleMenuIcon";
import CloseMenuScreen from "./closeMenuScreen";

function Header() {
  const { onScroll } = useHeaderScroll();
  const { showMenu, toggleMenu, closeMenu } = useSidebar();

  return (
    <nav
      className={cn(
        "w-full h-24 px-8 lg:px-20 fixed top-0 left-0 z-30 transition-colors duration-700",
        onScroll ? "onScroll bg-gray-10" : "bg-transparent"
      )}
    >
      <div className="flex items-center w-full max-w-content py-4 mx-auto">
        <ToogleMenuIcon toggleMenu={toggleMenu} />
        <Logo />
        <Menu open={showMenu} />
        <Button className="ml-auto" variant={onScroll ? "default" : "plain"}>
          Join Us
        </Button>
      </div>
      <CloseMenuScreen closeMenu={closeMenu} show={showMenu} />
    </nav>
  );
}

export default Header;
