import React from "react";
import footerOptions from "@/json/footerOptions.json";

function FooterLinks() {
  return (
    <div className="flex flex-wrap mt-3 text-base space-x-2 w-full max-w-[900px] justify-between">
      {footerOptions.map((option) => (
        <div className="flex flex-col space-y-3" key={option.id}>
          <div className="font-medium">{option.label}</div>
          {option.items.map((item) => (
            <div key={item.id}>{item.label}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
