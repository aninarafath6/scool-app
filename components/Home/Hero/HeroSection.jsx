import Image from "next/image";
import { Images, Contents } from "constants/index";
import SearchInput from "./SearchInput";

export default function HeroSection() {
  return (
    <div className="flex px-6 justify-evenly py-9 flex-col md:flex-row items-center hero-section">
      <div className="md:items-start  items-center  flex flex-col justify-center text-center md:text-start ">
        <h1 className="font-semibold md:text-6xl lg:text-7xl text-4xl smd:text-5xl md:text-start  text-center	 ">
          A perfect <span className="inline-block  md:hidden">road</span>map
          <br />
          for everyone.{" "}
        </h1>
        <p className="text-lg  mt-5  whitespace-pre-line">
          {Contents.hero.subtitle}
        </p>
        <SearchInput />
      </div>
      <div className="s pt-9">
        <Image
          src={Images.hero_peeps}
          alt="peeps"
          width={300}
          height={400}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
