import * as React from "react";
import RMap, {  Marker } from "react-map-gl";
import * as data from "public/data/test.json";

export default function Map() {
  return (
    <div className=" relative  position: static; overflow-y:auto ">
      <div className="">
        <div className="h-2/4 w-full absolute top-0 bg-gradient-to-b from-bg to-transparent z-50">
          {" "}
        </div>
        <div className="h-full w-full absolute top-0 bg-gradient-to-l from-bg to-transparent z-50">
          {" "}
        </div>{" "}
        <div className="h-full w-full absolute top-0 bg-gradient-to-r from-bg to-transparent z-50">
          {" "}
        </div>
        <div className="flex items-center flex-col justify-center h-screen relative">
          <RMap
            initialViewState={{
              longitude: 20.5937,
              latitude: 78.9629,
              zoom: 14,
            }}
            style={{
              width: "90%",
              height: "90%",
              marginTop: 20,
              // position: "absolute",
              // top: 0,
              // left: 0,
            }}
            mapStyle="mapbox://styles/aninarafath/cl6falbst000614phbtapxp32"
            mapboxAccessToken="pk.eyJ1IjoiYW5pbmFyYWZhdGgiLCJhIjoiY2tqd3RidHl5MGx6MzJvbGMzZHk1eGk4dyJ9.aN6zr2tWPl28aw8bMdipmw"
            minZoom={1}
            maxZoom={1}
            scrollZoom={false}
            dragPan={false}
          >
            {data.features.map((item, index) => {
              <>
                <div>{item.geometry.longitude}</div>
                <Marker
                  key={index}
                  longitude={item.geometry.longitude}
                  latitude={item.geometry.latitude}
                >
                  <div className="w-28 h-28 rounded-full bg-red-400"> </div>
                </Marker>
                ;
              </>;
            })}
          </RMap>

          <div className=" absolute top-10 z-50">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white  text-4xl text-center font-extrabold">
                Our Best in Class Mentors and
                <br />
                get support
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
