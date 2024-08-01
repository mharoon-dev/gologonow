import React from "react";
import "./Banner.css";
import whiteCurveImg from "../../../public/assets/right-white-curve.png";
import curvedBgImg from "../../../public/assets/right-curved-bg.png";
import BlackButton from "../BlackButton/BlackButton.jsx";
import YellowButton from "../YellowButton/YellowButton.jsx";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExample"
        style={{ position: "relative" , paddingBottom: "0 !important" }}
        className="carousel slide w-100"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner" id="item2">
              <video autoPlay loop muted className="video-bg">
                <source src="/assets/homeBannerItem2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="left-text">
                MON - FRI &nbsp;&nbsp;&nbsp; 9AM TO 7PM
              </div>
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
                />
                <div className="text-content">
                  <h1 className="welcome">
                    WELCOME TO GO<span>LOGO</span>NOW
                  </h1>
                  <h2 className="leading">Leading Global</h2>
                  <h3 className="design-development">Design & Development</h3>
                  <h4 className="agency">Agency</h4>
                </div>
              </div>
              <div className="buttons">
                <BlackButton text={"Get a Free Quote"} />
                <YellowButton />
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="banner">
              <div className="left-text">
                MON - FRI &nbsp;&nbsp;&nbsp; 9AM TO 7PM
              </div>
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
                />
                <div className="text-content">
                  <h1 className="welcome">
                    WELCOME TO GO<span>LOGO</span>NOW
                  </h1>
                  <h2 className="leading">Leading Global</h2>
                  <h3 className="design-development">Design & Development</h3>
                  <h4 className="agency">Agency</h4>
                </div>
              </div>
              <div className="buttons">
                <BlackButton text={"Get a Free Quote"} />
                <YellowButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sliderBtn1" style={{ position: "absolute" }}>
        <button
          className="carousel-control-prev sliderBtn1"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
      </div>
      <div className="sliderBtn2" style={{ position: "absolute" }}>
        <button
          className="carousel-control-next sliderBtn2"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
