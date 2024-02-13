import React from "react";
import styles from "./home.module.css";
import { cn } from "@/utils/shadcn";
import Image from "next/image";
import TopSectionTitle from "./topSectionTitle";
import TopSectionAppDownload from "./topSectionAppDownload";
import TopSectionImage from "./topSectionImage";

function TopSection() {
  return (
    <div
      className={cn(
        "w-full bg-primary px-4 md:pl-20 md:pr-16 snap-start",
        styles.backgroundTopSection
      )}
    >
      <div className="w-full h-fit min-h-screen max-w-content pt-24 mx-auto grid grid-cols-8 grid-rows-fr">
        <div className="min-h-min row-start-1 row-span-1 col-start-1 col-span-8 lg:col-span-4">
          <TopSectionTitle />
        </div>
        <div className="min-h-min row-start-3 lg:row-start-2 row-span-1 col-start-1 col-span-8 lg:col-span-4">
          <TopSectionAppDownload />
        </div>
        <div className="min-h-min row-start-2 lg:row-start-1 row-span-1 lg:row-span-2 col-start-1 lg:col-start-5 col-span-8 lg:col-span-4">
          <TopSectionImage />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
