// library
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

// local imports
import animationData from "public/icons/Menu V3/menuV3.json";
import LoginButton from "./LoginButton";
import SideBar from "./SideBar";

export default function Actions() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);
  // lottie animation options
  const animationOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // toggle side bar
  const toggleMenu = () => {
    // remove body scroll when side bar is open.
    if (toggle) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    setToggle(!toggle);
  };
  return (
    <>
      <LoginButton size="lg" />
      <div
        className="lg:hidden block  cursor-pointer z-50 "
        onClick={toggleMenu}
      >
        <Lottie
          options={animationOptions}
          height={50}
          width={50}
          speed={1.5}
          direction={toggle ? 1 : -1}
        />
      </div>
      <SideBar toggle={toggle} />
    </>
  );
}
