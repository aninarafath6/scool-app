import React from "react";
import Hero from "./hero/Index";
import dynamic from "next/dynamic";
// import Map from "./trending_mentors/TrendingMembers";

function Landing() {
  const Map = dynamic(() => import("./trending_mentors/TrendingMembers"), {
    ssr: false,
  });

  return (
    <div className="bg-bg ">
      <Hero />
      <Map />
    </div>
  );
}

export default Landing;
