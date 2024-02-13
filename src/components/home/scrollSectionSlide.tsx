import React from "react";
import { cn } from "@/utils/shadcn";
import styles from "@/components/home/home.module.css";
import Image from "next/image";

type ScrollSectionSlideProps = {
  children?: React.ReactNode;
  className?: string;
  top?: boolean;
};

function ScrollSectionSlide(props: ScrollSectionSlideProps) {
  const { children, className, top = false } = props;

  return (
    <div
      className={cn(
        "w-full h-screen flex flex-col-reverse md:flex-row",
        className,
        top ? styles.backgroundScrollSection : "",
        top ? "z-20 md:-z-10" : "z-10 md:z-20 snap-start"
      )}
    >
      <div className="h-[50%] md:h-full md:min-h-none w-full md:w-1/2 flex items-center justify-center p-10">
        {children}
      </div>
      <div
        className={cn(
          "h-fit md:h-full w-full md:w-1/2 overflow-visible md:mt-24 bg-gray-10 border-t-[100px] border-gray-10 md:border-none md:bg-transparent",
          top ? "" : "opacity-0",
          styles.backgroundScrollSectionMax
        )}
      >
        <div className="w-full h-fit md:h-full p-5 flex items-center md:items-start justify-center">
          <Image
            src="/images/background-image-2.svg"
            alt="home background image"
            width="268"
            height="561"
            className="w-[20%] md:w-[50%] h-[80%] max-w-[300px] min-w-[100px] max-h-full mt-2"
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollSectionSlide;
