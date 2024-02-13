import React from "react";
import styles from "@/components/home/home.module.css";
import { cn } from "@/utils/shadcn";
import Image from "next/image";
import ScrollSectionSlide from "./scrollSectionSlide";

function ScrollSection() {
  return (
    <section className="w-full relative">
      <ScrollSectionSlide
        className="sticky top-0 left-0"
        top
      ></ScrollSectionSlide>
      <ScrollSectionSlide className="absolute top-0">
        <div className="text-gray-90 w-full max-w-[604px] pl-4 md:pl-12 border-l-4 border-primary">
          <h2 className="text-3xl md:text-5xl font-bold">
            Automate every thing
          </h2>
          <p className="text-base md:text-lg font-normal mt-2 md:mt-7">
            Our powerful app builder will help you build your desired app in
            minutes without coding knowledge and once your app is ready, you can
            publish it on Google Play and App Store.
          </p>
        </div>
      </ScrollSectionSlide>
      <ScrollSectionSlide>
        <div className="text-gray-90 w-full max-w-[604px] pl-4 md:pl-12 border-l-4 border-primary">
          <h2 className="text-3xl md:text-5xl font-bold">Keep focused</h2>
          <p className="text-base md:text-lg font-normal mt-2 md:mt-7">
            Our powerful app builder will help you build your desired app in
            minutes without coding knowledge and once your app is ready, you can
            publish it on Google Play and App Store.
          </p>
        </div>
      </ScrollSectionSlide>
    </section>
  );
}

export default ScrollSection;
