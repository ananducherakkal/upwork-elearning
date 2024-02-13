import React from "react";
import styles from "./topSection.module.css";
import { cn } from "@/utils/shadcn";
import Image from "next/image";
import TopSectionTitle from "./topSectionTitle";
import TopSectionAppDownload from "./topSectionAppDownload";
import TopSectionImage from "./topSectionImage";

function TopSection() {
  return (
    <div
      className={cn(
        "w-full min-h-screen bg-primary pt-24 grid grid-cols-8 grid-rows-fr pl-20 pr-16",
        styles.background
      )}
    >
      <div className="max-h-full row-start-1 row-span-1 col-start-1 col-span-4">
        <TopSectionTitle />
      </div>
      <div className="min-h-min row-start-2 row-span-1 col-start-1 col-span-4">
        <TopSectionAppDownload />
      </div>
      <div className="row-start-1 row-span-2 col-start-5 col-span-4">
        <TopSectionImage />
      </div>
    </div>
  );
}

export default TopSection;
