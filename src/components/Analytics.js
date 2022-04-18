import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 cursor-pointer hover:bg-[#000000ec]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
