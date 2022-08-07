import React from "react";
import RoadMapCard from "./RoadmapCard";

function RoadMap({ roadmaps }) {
  return (
    <ul className="space-y-8">
      {roadmaps.map((roadmap, index) => {
        return <RoadMapCard key={index} mapData={roadmap} />;
      })}
    </ul>
  );
}

export default RoadMap;
