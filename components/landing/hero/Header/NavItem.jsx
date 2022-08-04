import React from "react";

function NavItem({ children }) {
  return (
    <li className="hover:text-sky-400 text-gray-300 font-medium cursor-pointer">
      {children}
    </li>
  );
}

export default NavItem;
