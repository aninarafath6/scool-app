import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RoadMap from "./roadmap/RoadMap";
// import { roadMapSlice } from "@redux/slice/explore_slice";

export default function Explore() {
  const roadmaps = useSelector((state) => state.roadmap.value);
  const [grid, setGrid] = useState({
    grid1: [],
    grid2: [],
    grid3: [],
  });
  useEffect(() => {
    setGrid({
      grid1: roadmaps.slice(0, 4),
      grid2: roadmaps.slice(4, 8),
      grid3: roadmaps.slice(8, 12),
    });
  }, []);

  console.log(roadmaps);
  return (
    <section className=" relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 mt-20 ">
      <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden mt-32">
        {Object.keys(grid).map((key) => {
          return <RoadMap key={key} roadmaps={grid[key]} />;
        })}
      </div>
      <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute">
        <button
          type="button"
          className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
        >
          Explore more...
        </button>
      </div>
    </section>
  );
}
