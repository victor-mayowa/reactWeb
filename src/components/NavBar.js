import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center text-white max-w-[1240px] mx-auto px-4 h-24">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Company</li>
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Resource</li>
        <li className="p-4">Contact</li>
      </ul>

      <div className="cursor-pointer block md:hidden" onClick={navHandler}>
        {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div className={!nav ?"fixed z-50 left-0 top-0 w-[60%]  h-full border-r bg-[#000300] ease-in-out duration-500 md:hidden":"fixed left-[-100%] md:hidden"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Resource</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
