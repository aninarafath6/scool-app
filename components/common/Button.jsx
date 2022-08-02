import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-black text-gray-300  py-2 px-10 rounded-md flex flex-row items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
}
