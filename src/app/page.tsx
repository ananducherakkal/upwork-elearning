import Header from "@/components/header/header";
import TopSection from "@/components/home/topSection";
import React from "react";

function Home() {
  return (
    <nav className="w-full min-h-full flex flex-col onScroll">
      <Header />
      <TopSection />
    </nav>
  );
}

export default Home;
