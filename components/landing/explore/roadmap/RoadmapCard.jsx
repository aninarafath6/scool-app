import Image from "next/image";

function RoadMapCard({ mapData }) {
  return (
    <li className="text-sm leading-6">
      <road className="relative flex flex-col p-3   bg-slate-50 rounded-lg  dark:bg-slate-800 dark:highlight-white/5">
        <left className="flex items-center justify-start space-x-4 px-2  ">
          <Image
            loader={() => mapData.image}
            src={mapData.image}
            objectFit="cover"
            width={100}
            height={100}
            alt=""
            className="rounded-md "
          />
          <div className="">
            <h1 className=" text-start text-base text-slate-900 font-semibold dark:text-slate-300 line-clamp-2  ">
              {mapData.title}
            </h1>

            <p className="text-start text-sm mt-2 text-slate-400 ">
              {mapData.mentor}
            </p>
          </div>
        </left>
        <right className="mt-2 px-3">
          <p className="text-start text-sm mt-2 text-slate-300 line-clamp-6">
            {mapData.description}
          </p>
        </right>
      </road>
    </li>
  );
}

export default RoadMapCard;
