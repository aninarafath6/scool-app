import Header from "@components/Header/Header";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mainLayout">
      <Header />
      {children}
    </div>
  );
}
