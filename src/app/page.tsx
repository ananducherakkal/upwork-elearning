import Header from "@/components/header/header";
import ScrollSection from "@/components/home/scrollSection";
import TopSection from "@/components/home/topSection";
import React from "react";

function Home() {
  return (
    <main className="w-full min-h-full flex flex-col" id="scroll-page">
      <Header />
      <TopSection />
      <ScrollSection />
    </main>
  );
}

export default Home;
