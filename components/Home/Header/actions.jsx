import React, { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import animationData from "../../../public/icons/Menu V3/menuV3.json";

export default function Actions() {
  const [toggle, setToggle] = useState(false);
  const animationContainer = useRef(null);
  const anim = useRef(null);
  useEffect(() => {
    return () => {
      if (animationContainer.current) {
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData,
        });

        return () => anim.current?.destroy();
      }
    };
  }, [animationContainer]);

  const toggleMenu = () => {
    anim.current?.setDirection(toggle ? -1 : 1);
    anim.current?.play();
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
        className="lg:hidden block  cursor-pointer z-50  w-14"
        ref={animationContainer}
        onClick={toggleMenu}
      ></div>
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
