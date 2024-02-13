import Image from "next/image";
import React from "react";

function TopSectionAppDownload() {
  return (
    <div className="text-white pt-4 md:pt-7 pb-16 flex flex-col justify-start items-center lg:items-start">
      <div className="text-lg md:text-2xl font-semibold uppercase">
        Download App Now
      </div>
      <div className="flex mt-2 space-x-3">
        <button className="w-fit outline-none active:opacity-80">
          <Image
            src="/images/android-store.png"
            alt="android-store"
            width="150"
            height="45"
            className="w-[150px] h-[45px]"
          />
        </button>
        <button className="w-fit outline-none active:opacity-80">
          <Image
            src="/images/apple-store.png"
            alt="apple-store"
            width="150"
            height="45"
            className="w-[150px] h-[45px]"
          />
        </button>
      </div>
      <button className="mt-7 text-lg md:text-xl font-medium underline bg-transparent w-fit outline-none active:text-gray-20">
        View features
      </button>
    </div>
  );
}

export default TopSectionAppDownload;
