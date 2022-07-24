import React from "react";
import Navigation from "./Navigation";
export default function SideBar({ toggle }) {
  return (
    <div
      className={` transition h-full opacity-0  z-30 w-screen bg-transparent py-20 fixed top-0 lg:hidden left-0 m-0 p-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border ease-linear duration-300 delay-300
         ${toggle ? " opacity-100" : "opacity-0"} `}
    >
      <div
        className={`h-full duration-300 -translate-y-2${
          toggle ? "opacity-100" : " opacity-0 "
        }`}
      >
        <Navigation size="md" className="" />
      </div>
    </div>
  );
}
