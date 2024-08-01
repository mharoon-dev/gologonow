import React from "react";
import "./aboutBanner.css";
import whiteCurveImg from "../../../public/assets/right-white-curve.png";
import curvedBgImg from "../../../public/assets/right-curved-bg.png";

const AboutBanner = () => {
  return (
    <div className="aboutBannerContainer">
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
      <h1 className="aboutBannerHeading">About us</h1>
      <p className="aboutBannerDescription">
        Home - <span>About us</span>
      </p>
    </div>
  );
};

export default AboutBanner;
