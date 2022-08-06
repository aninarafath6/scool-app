import Image from "next/image";
import * as React from "react";

export default function Explore() {
  return (
    <section className=" relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 mt-20 h-screen">
      <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden mt-32">
        <ul className="space-y-8">
          <li className="text-sm leading-6">
            <road className="relative flex flex-col-reverse p-6 bg-slate-50 rounded-lg  dark:bg-slate-800 dark:highlight-white/5">
              <left className="flex items-center justify-start space-x-4  ">
                <Image
                  src="/images/roadmaps/python.jpeg"
                  objectFit="cover"
                  width={220}
                  height={250}
                  alt=""
                />
                <div className="">
                  <h1 className=" text-start text-base text-slate-900 font-semibold dark:text-slate-300 line-clamp-2  ">
                    100 Days of Code: The Complete Python Pro Bootcamp for 2022
                  </h1>
                  <p className="text-start text-sm mt-2 text-slate-400 ">
                    Master Python by building 100 projects in 100 days.
                  </p>
                  <p className="text-start text-sm mt-2 text-slate-400 ">
                    - by angala
                  </p>
                </div>
              </left>
              <right className=""></right>
            </road>
          </li>
        </ul>
      </div>
    </section>
  );
}
