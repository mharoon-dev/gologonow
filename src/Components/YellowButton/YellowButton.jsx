import React from "react";
import "./yellowButton.css";

const YellowButton = ({ width, fontsize, text, fontweight }) => {
  return (
    <a
      href="#"
      className="yellowButton"
      style={{ width: width, fontSize: fontsize, fontWeight: fontweight }}
    >
      {text || "Contact Us"}
    </a>
  );
};

export default YellowButton;
