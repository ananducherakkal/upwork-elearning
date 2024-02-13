import Image from "next/image";
import React from "react";

function TopSectionImage() {
  return (
    <div className="w-full h-full flex justify-center items-center max-w-[500px] mx-auto">
      <Image
        src="/images/background-image-1.png"
        alt="home background image"
        width="750"
        height="650"
        className="max-w-[95%] max-h-[95%] w-full h-full object-contain"
      />
    </div>
  );
}

export default TopSectionImage;
