import * as React from "react";
import RoadMapCard from "./roadmap/RoadmapCard";

export default function Explore() {
  return (
    <section className=" relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 mt-20 h-screen">
      <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden mt-32">
        <ul className="space-y-8">
          <RoadMapCard />
        </ul>
      </div>
    </section>
  );
}
