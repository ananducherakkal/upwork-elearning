import Image from "next/image";
import React from "react";

function TopSectionImage() {
  return (
    <div>
      <Image
        src="/images/background-image-1.png"
        alt="profile"
        width="100"
        height="100"
        className="w-full h-full"
      />
    </div>
  );
}

export default TopSectionImage;
