import React from "react";
import Navigation from "./Navigation";
import LogoWrapper from "./LogoWrapper";
export default function Header() {
  const toggleMenu = () => {
    console.log("toggile menu");
  };
  return (
    //return
    <div className=" p-4 lg:border-b border-gray-400 mx-6 lg:mx-28 flex items-center justify-between ease-in-out">
      <LogoWrapper />
      <Navigation />
      <div className="lg:visible invisible">
        <button className="rounded-full bg-black px-7 text-white p-2   ">
          Sign in{" "}
        </button>
      </div>

      <div className="lg:hidden block  cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}
