import React from "react";

function Spacer({ height = 0, width = 0, type = "px" }) {
  return <div style={{ width: width + type, height: height + type }}></div>;
}

export default Spacer;
