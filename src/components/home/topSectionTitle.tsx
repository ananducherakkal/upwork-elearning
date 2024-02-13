import React from "react";

function TopSectionTitle() {
  return (
    <div className="pt-17 max-w-[548px] flex flex-col justify-end h-full text-5xl text-gray-10 mx-auto lg:mx-0">
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
        Manage <span className="md:inline-block">Your class</span>
      </h1>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
        For iOS & Android
      </h3>
      <p className="text-base md:text-lg font-normal mt-2 md:mt-6">
        Our powerful app builder will help you build your desired app in minutes
        without coding knowledge and once your app is ready, you can publish it
        on Google Play and App Store.
      </p>
    </div>
  );
}

export default TopSectionTitle;
