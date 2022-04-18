import React from "react";
import Typed from "react-typed"

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[]-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">Grow with data</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible, financing for</p>
          <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
          strings={["BTC", "BTB", "SASS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analysis to increase revenue for BTC, BTB, & SASS
          platform
        </p>
        <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00df98b6]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
