import Image from "next/image";
import React from "react";

function RoadMapCard() {
  return (
    <li className="text-sm leading-6">
      <road className="relative flex flex-col p-3   bg-slate-50 rounded-lg  dark:bg-slate-800 dark:highlight-white/5">
        <left className="flex items-center justify-start space-x-4 px-2 rounded-md ">
          <Image
            src="/images/roadmaps/python.jpeg"
            objectFit="cover"
            width={150}
            height={150}
            alt=""
            className="rounded-sm"
          />
          <div className="">
            <h1 className=" text-start text-base text-slate-900 font-semibold dark:text-slate-300 line-clamp-2  ">
              100 Days of Code: The Complete Python Pro Bootcamp for 2022
            </h1>

            <p className="text-start text-sm mt-2 text-slate-400 ">
              - by angala
            </p>
          </div>
        </left>
        <right className="mt-2 px-3">
          <p className="text-start text-sm mt-2 text-slate-300 ">
            Master Python by building 100 projects in 100 days. Learn data
            science, automation, build websites, games and apps!
          </p>
        </right>
      </road>
    </li>
  );
}

export default RoadMapCard;
