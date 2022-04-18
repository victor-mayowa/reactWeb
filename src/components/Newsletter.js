import React from "react";

const Newsletter = () => {
  return (
    <div className=" text-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              placeholder="Enter Email"
              type="email"
              className="flex w-full rounded-md text-black p-3"
            />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 ml-4 py-3 hover:bg-[#00df98b6]">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our <span className="text-[#00df9a] cursor-pointer decoration-underline underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
