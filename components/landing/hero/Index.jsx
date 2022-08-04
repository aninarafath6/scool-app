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
    <div className="bg border-b border-border_color">
      <div className="grd">
        <div className="px-8 mds">
          <Header />
          <div className="flex flex-col  h-screen justify-evenly relative ">
            <Banner />
            <div className="absolute md:bottom-14 bottom-16 left-0">
              <svg
                width="162"
                height="119"
                viewBox="0 0 162 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832"
                  stroke="#cbd5e2db"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851"
                  stroke="#cbd5e2db"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
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
