import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function Actions() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);
  const toggleMenu = () => {
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    setToggle(!toggle);
  };
  return (
    <>
      <div className="lg:visible invisible group">
        <button className="rounded-full bg-black px-7 text-white p-2   ">
          Sign in{" "}
        </button>
      </div>

      <div
        className="lg:hidden block  cursor-pointer z-50"
        onClick={toggleMenu}
      >
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
      <div
        className={`h-full opacity-0  z-30 w-screen bg-fuchsia py-20 fixed top-0 lg:hidden left-0 m-0 p-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border ease-in duration-300    ${
          toggle ? "visible opacity-100" : "invisible"
        } `}
      >
        <Navigation size="md" />
      </div>
    </>
  );
}
