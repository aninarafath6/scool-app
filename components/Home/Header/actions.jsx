import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/icons/Menu V3/menuV3.json";
import SideBar from "./SideBar";
export default function Actions() {
  const [toggle, setToggle] = useState(false);
  const animationContainer = useRef(null);
  const menuRef = useRef();
  useEffect(() => {
    return () => {};
  }, []);
  /* Play an animation on each click */

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
        className="lg:hidden block  cursor-pointer z-50 "
        ref={animationContainer}
        onClick={toggleMenu}
      >
        <Lottie
          ref={menuRef}
          options={defaultOptions}
          height={50}
          width={50}
          speed={1.5}
          // isStopped={!toggle}
          direction={toggle ? 1 : -1}
        />
      </div>
      <SideBar toggle={toggle} />
    </>
  );
}
