import Image from "next/image";
import React from "react";
import YoutubeIcon from "../icons/youtube";
import FacebookIcon from "../icons/facebook";
import TwitterIcon from "../icons/twitter";
import InstagramIcon from "../icons/instagram";
import LinkedinIcon from "../icons/linkedin";

function FooterBottomSection() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center">
      <div className="text-base space-x-8 flex flex-wrap mt-10">
        <div>Tareeq@2024</div>
        <div>Terms of service</div>
        <div>Privacy policy</div>
        <div>Manage Cookies</div>
      </div>
      <div className="space-x-4 flex-wrap ml-auto mt-10">
        <button className="w-7 h-7">
          <YoutubeIcon className="w-full h-full" />
        </button>
        <button className="w-7 h-7">
          <FacebookIcon className="w-full h-full" />
        </button>
        <button className="w-7 h-7">
          <TwitterIcon className="w-full h-full" />
        </button>
        <button className="w-7 h-7">
          <InstagramIcon className="w-full h-full" />
        </button>
        <button className="w-7 h-7">
          <LinkedinIcon className="w-full h-full" />
        </button>
      </div>
      <div className="flex ml-12 space-x-3 flex-wrap mt-10">
        <button className="w-fit outline-none active:opacity-80 border border-gray-40 rounded-md">
          <Image
            src="/images/android-store.png"
            alt="android-store"
            width="150"
            height="45"
            className="w-[150px] h-[45px]"
          />
        </button>
        <button className="w-fit outline-none active:opacity-80 border border-gray-40 rounded-md">
          <Image
            src="/images/apple-store.png"
            alt="apple-store"
            width="150"
            height="45"
            className="w-[150px] h-[45px]"
          />
        </button>
      </div>
    </div>
  );
}

export default FooterBottomSection;
