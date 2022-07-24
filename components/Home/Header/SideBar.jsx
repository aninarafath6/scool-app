import React from "react";
import Navigation from "./Navigation";
export default function SideBar({ toggle }) {
  return (
    <div
      className={` transition h-full opacity-0  z-30 w-screen bg-fuchsia py-20 fixed top-0 lg:hidden left-0 m-0 p-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border ease-linear duration-${
        toggle ? "300 " : "300 delay-300	"
      }    ${toggle ? " opacity-100" : "opacity-0"} `}
    >
      <div
        className={`h-full -translate-y-32${
          toggle ? "opacity-100}" : " opacity-0 "
        }`}
      >
        <Navigation size="md" className="" />
      </div>
    </div>
  );
}
