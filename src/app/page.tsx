import Header from "@/components/header/header";
import ScrollSection from "@/components/home/scrollSection";
import TopSection from "@/components/home/topSection";
import React from "react";

function Home() {
  return (
    <nav className="w-full h-full flex flex-col overflow-auto snap-y snap-mandatory onScroll">
      <Header />
      <TopSection />
      <ScrollSection />
    </nav>
  );
}

export default Home;
