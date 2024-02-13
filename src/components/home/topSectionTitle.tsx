import React from "react";

function TopSectionTitle() {
  return (
    <div className="pt-16 flex flex-col justify-end h-full text-5xl text-gray-10 ">
      <div className="text-8xl font-extrabold">
        Manage <span className="md:inline-block">Your class</span>
      </div>
      <div className="text-4xl font-bold mt-2">For iOS & Android</div>
      <div className="text-lg font-normal mt-6">
        Our powerful app builder will help you build your desired app in minutes
        without coding knowledge and once your app is ready, you can publish it
        on Google Play and App Store.
      </div>
    </div>
  );
}

export default TopSectionTitle;
