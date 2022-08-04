import Image from "next/image";
import { Icons } from "@constants/images";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="flex justify-between items-center ">
      <div className="logo flex items-center ">
        <div className="md hidden md:block cursor-pointer">
          <Image src={Icons.logo} width={100} height={100} alt="logo" />
        </div>
        <div className=" md:hidden block pt-4 cursor-pointer">
          <Image src={Icons.logo_sm} width={50} height={50} alt="logo" />
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
