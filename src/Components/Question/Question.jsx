import React, { useState } from "react";
import "./question.css";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Question = ({ number, name, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="questionContainer" onClick={toggleDetails}>
      <div className="questionHeader">
        <div className="questionNumber">{number}.</div>
        <div className="questionName">{name}</div>
        <IconButton className="iconButton" >
          {isOpen ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </div>
      <div className={`questionDetails ${isOpen ? "open" : ""}`}>{details}</div>
    </div>
  );
};

export default Question;
