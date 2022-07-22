import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="mx-48 py-6 border-b border-zinc-400">
      <div className="flex items-center justify-between">
        <Image
          src="/logo-md.png"
          width="130"
          height="70"
          className="w-auto"
          alt="scool"
        />

        <ul className="flex gap-12 font-medium h-2 tex-xl ">
          <a href="#">
            {" "}
            <li className=" link link-underline link-underline-black  ">
              Home
            </li>
          </a>
          <a href="#">
            {" "}
            <li className="  link link-underline link-underline-black  ">
              About
            </li>
          </a>{" "}
          <a href="#">
            {" "}
            <li className=" link link-underline link-underline-black   ">
              Contact
            </li>
          </a>{" "}
          <a href="#">
            {" "}
            <li className=" link link-underline link-underline-black  ">
              Explore
            </li>
          </a>
        </ul>

        <button className="bg-black hover:bg-gray-900 text-white  py-2 px-6 rounded-full">
          Sign in
        </button>
      </div>
    </div>
  );
}
