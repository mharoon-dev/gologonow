import React from "react";
import "./BlackButton.css";

const BlackButton = ({ text, width, fontsize, fontweight }) => {
  return (
    <a
      className="button"
      style={{ width: width, fontSize: fontsize, fontWeight: fontweight }}
    >
      {text}
    </a>
  );
};

export default BlackButton;
