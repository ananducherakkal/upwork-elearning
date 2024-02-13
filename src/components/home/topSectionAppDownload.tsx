import Image from "next/image";
import React from "react";

function TopSectionAppDownload() {
  return (
    <div className="text-white pt-17 flex flex-col justify-start">
      <div className="text-2xl font-semibold uppercase">Download App Now</div>
      <div className="flex">
        <div>
          <Image
            src="/images/android-store.png"
            alt="profile"
            width="100"
            height="100"
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/apple-store.png"
            alt="profile"
            width="100"
            height="100"
            className="w-full h-full"
          />
        </div>
      </div>
      <div>View features</div>
    </div>
  );
}

export default TopSectionAppDownload;
