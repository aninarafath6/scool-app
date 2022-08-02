import { Images } from "constants/index";
import Image from "next/image";

export default function SearchInput() {
  return (
    <div className="md:pr-24 w-full">
      <div className="w-full h-12 -400  border-black border-2 rounded-full mt-10 flex ">
        <input
          type="text"
          className="h-full w-full bg-transparent pl-4   focus:outline-none placeholder:text-gray-900  "
          placeholder="Get Your Roadmap"
          autoFocus={true}
        />
        <div className="w-5/12 rounded-full bg-black h-full items-center justify-center flex">
          <Image
            src={Images.search_icon}
            alt="search"
            width={15}
            height={15}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}
