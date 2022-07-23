import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    //return
    <div className=" p-4 lg:border-b border-gray-400 mx-6 lg:mx-28 flex items-center justify-between ease-in-out">
      <div className="hidden md:block ">
        <Image
          src="/logo-md.png"
          alt="Picture of the author"
          width="130"
          height="70"
          className="w-auto h-auto "
        />
      </div>
      <div className="md:invisible visible justify-between">
        <Image
          src="/logo-sm.png"
          alt="Picture of the author"
          width="50"
          height="48"
          className="w-auto h-auto "
        />
      </div>

      <ul className="lg:flex gap-10 cursor-pointer  ease-in-out hidden  text-lg duration-300">
        <li className="hover:font-medium ease-in-out duration-200">Home</li>
        <li className="hover:font-medium ease-in-out duration-200">About</li>
        <li className="hover:font-medium ease-in-out duration-200">Contact</li>
        <li className="hover:font-medium ease-in-out duration-200">Explore</li>
      </ul>

      <div className="lg:visible invisible">
        <button className="rounded-full bg-black px-7 text-white p-2   ">
          Sign in{" "}
        </button>
      </div>

      <div className="lg:hidden block  cursor-pointer">
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
