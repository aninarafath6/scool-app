import React from "react";
import NavItem from "./NavItem";
import "remixicon/fonts/remixicon.css";
function Navigation() {
  return (
    <ul className="flex gap-8  items-center pt-2 md:pt-0 ">
      <NavItem>Login</NavItem>
      <NavItem>Sign up</NavItem>
      <div className="border-l border-slate-800 cursor-pointer">
        <i className="ri-sun-line fill-white text-sky-400 text-xl ml-5"></i>{" "}
      </div>
    </ul>
  );
}

export default Navigation;
