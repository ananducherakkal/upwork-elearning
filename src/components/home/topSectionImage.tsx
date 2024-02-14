"use client";
import useImageLoad from "@/hooks/useImageLoad";
import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React from "react";

function TopSectionImage() {
  const { loadClass, handleImageLoad } = useImageLoad();

  return (
    <div className="w-full h-full flex justify-center items-center mx-auto">
      <Image
        src="/images/background-image-1.png"
        alt="home background image"
        width="750"
        height="650"
        className={cn(
          "max-w-full max-h-full w-full h-full object-contain",
          loadClass
        )}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default TopSectionImage;
