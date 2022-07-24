import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex px-6 justify-evenly py-9 flex-col md:flex-row items-center">
      <div className="md:items-start  items-center  flex flex-col justify-center text-center md:text-start ">
        <h1 className="font-semibold text-4xl md:5xl md:text-start  text-center	 ">
          A perfect roadmap
          <br />
          for everyone.{" "}
        </h1>
        <p className="text-lg my-5 ">
          Our expertly-designed roadmaps that <br /> will help you achieve your
          dream.
        </p>
      </div>
      <div className="s pt-9">
        <Image
          src="/images/peeps-1.png"
          alt="peeps"
          width={300}
          height={400}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
