import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-indigo-500 text-gray-300 px-2.5 py-1 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
}
