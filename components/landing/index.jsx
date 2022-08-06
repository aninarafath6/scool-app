import React from "react";
import Hero from "./hero/Index";
import dynamic from "next/dynamic";
// import Map from "./trending_mentors/TrendingMembers";

function Landing() {
  const Map = dynamic(() => import("./explore/explore"), {
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
