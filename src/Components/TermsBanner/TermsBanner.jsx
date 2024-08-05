import React from "react";
import "./TermsBanner.css";
import whiteCurveImg from "../../../public/assets/right-white-curve.png";
import curvedBgImg from "../../../public/assets/right-curved-bg.png";

const TermsBanner = () => {
  return (
    <div className="termsBannerContainer">
      <div>
        <img
          src={whiteCurveImg}
          alt="White Curve"
          className="white-curve-img"
        />
        <img
          src={curvedBgImg}
          alt="Curved Background"
          className="curved-bg-img"
          style={{
            width: "230px",
            height: "230px",
          }}
        />
      </div>
      <h1 className="termsBannerHeading">TERMS & CONDITIONS</h1>
      <p className="termsBannerDescription">
        Home - <span>About</span>
      </p>
    </div>
  );
};

export default TermsBanner;
