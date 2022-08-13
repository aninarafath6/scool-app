import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CustomButton from "@components/custom/CustomButton";
import RoadMap from "./roadmap/RoadMap";

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
  }, [roadmaps]);

  console.log(roadmaps);
  return (
    <section className=" relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 mt-20 ">
      <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden mt-32">
        {Object.keys(grid).map((key) => {
          return <RoadMap key={key} roadmaps={grid[key]} />;
        })}
      </div>
      <CustomButton label="Explore more..." />
    </section>
  );
}
