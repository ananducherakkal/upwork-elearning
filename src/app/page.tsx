import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ScrollSection from "@/components/home/scrollSection";
import TopSection from "@/components/home/topSection";
import React from "react";

function Home() {
  return (
    <main className="w-full min-h-full flex flex-col relative">
      <Header />
      <TopSection />
      <ScrollSection />
      <Footer />
    </main>
  );
}

export default Home;
