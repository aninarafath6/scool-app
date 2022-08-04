import React from "react";

import Header from "./Header/Header";
import Lottie from "react-lottie";
import animationData from "public/icons/Scroll down/lf30_editor_tc3rdote.json";

function Hero() {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg overflow-hidden">
      <div className="grd">
        <div className="px-8 mds">
          <Header />
          <div className="flex flex-col  h-screen justify-evenly">
            <Banner />
            <div className="">
              {" "}
              <Lottie
                options={animationOptions}
                height={50}
                width={50}
                speed={1.5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

function Banner() {
  return (
    <div className="text-center text-slate-400  ">
      <h1 className="text-white text-center text-5xl  block md:hidden md:text-6xl font-extrabold">
        A perfect map
        <br />
        for everyone.{" "}
      </h1>
      <h1 className="text-white text-center text-5xl hidden md:block  md:text-6xl font-extrabold">
        A perfectly designed
        <br />
        road map for everyone.{" "}
      </h1>
      <p className="text-lg md:text-lg mt-4 md:mt-6">
        Our <span className="text-sky-400">expertly-designed</span> road maps
        will help you achieve your dream.and <br />
        Learn and grow with help from{" "}
        <span className="text-sky-400">world-class</span> mentors.
      </p>
    </div>
  );
}
