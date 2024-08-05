import React from "react";
import "./PrivacyBanner.css";
import whiteCurveImg from "../../../public/assets/right-white-curve.png";
import curvedBgImg from "../../../public/assets/right-curved-bg.png";

const PrivacyBanner = () => {
  return (
    <div className="privacyBannerContainer">
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
      <h1 className="privacyBannerHeading">Privacy Policy</h1>
      <p className="privacyBannerDescription">
        Home - <span>privacy us</span>
      </p>
    </div>
  );
};

export default PrivacyBanner;
