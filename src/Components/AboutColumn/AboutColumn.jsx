import React, { useState, useEffect } from "react";
import "./aboutColumn.css";

const Column = () => {
  const data = [
    { id: 1, number: 8705, label: "Projects Completed" },
    { id: 2, number: 480, label: "Active clients" },
    { id: 3, number: 626, label: "Cups of coffee" },
    { id: 4, number: 9704, label: "Happy clients" },
  ];

  const [counts, setCounts] = useState(
    data.map((item) => ({ id: item.id, count: 0 }))
  );

  useEffect(() => {
    data.forEach((item, index) => {
      const step = Math.ceil(item.number / 100); // Define step size for smooth increment
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          const currentCount = newCounts[index].count;

          if (currentCount < item.number) {
            newCounts[index].count = Math.min(currentCount + step, item.number);
          } else {
            newCounts[index].count = item.number;
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 90);
    });
  }, [data]);

  return (
    <div className="aboutColumnContainer">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="aboutColumnContentBox"
          style={index === data.length - 1 ? { borderRight: "none" } : {}}
        >
          <h2 className="aboutColumnHeading">
            {counts.find((count) => count.id === item.id)?.count}
          </h2>
          <h6 className="aboutColumnSubHeading">{item.label}</h6>
        </div>
      ))}
    </div>
  );
};

export default Column;
