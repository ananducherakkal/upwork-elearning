import React from "react";
import FooterBottomSection from "./footerBottomSection";
import FooterLinks from "./footerLinks";
import FooterTopSection from "./footerTopSection";

function Footer() {
  return (
    <footer className="w-full bg-accent px-10 md:px-20 pt-6 pb-12 text-gray-10 snap-start">
      <div className="w-full max-w-content mx-auto flex flex-col">
        <FooterTopSection />
        <FooterLinks />
        <FooterBottomSection />
      </div>
    </footer>
  );
}

export default Footer;
