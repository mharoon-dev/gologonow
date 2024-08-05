import React, { useState } from "react";
import "./Banner.css";
import whiteCurveImg from "../../../public/assets/right-white-curve.png";
import curvedBgImg from "../../../public/assets/right-curved-bg.png";
import BlackButton from "../BlackButton/BlackButton.jsx";
import YellowButton from "../YellowButton/YellowButton.jsx";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const items = [
    {
      video: "/assets/homeBannerItem2.mp4",
      heading: "WELCOME TO <span>UXD </span>Consults",
      subHeading: "Leading Global",
      description: "Digital Agency",
      additional: "And Consultancy",
    },
    {
      video: "/assets/image .jpg",
      heading: "WELCOME TO <span>UXD </span>Consults",
      subHeading: "Leading Global",
      description: "Digital Agency",
      additional: "And Consultancy",
    },
  ];

  const handleNext = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setTransition(false);
    }, 300); // Match the duration of the CSS animation
  };

  const handlePrev = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
      setTransition(false);
    }, 300); // Match the duration of the CSS animation
  };

  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide w-100"
        style={{ position: "relative", paddingBottom: "0 !important" }}
      >
        <div className={`carousel-inner ${transition ? "transition" : ""}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="banner" id="item2">
                <video autoPlay loop muted className="video-bg">
                  <source src={item.video} type="video/mp4" />
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
                    <h1
                      className="welcome"
                      dangerouslySetInnerHTML={{ __html: item.heading }}
                    />
                    <h2 className="leading">{item.subHeading}</h2>
                    <h3 className="design-development">{item.description}</h3>
                    <h4 className="agency">{item.additional}</h4>
                  </div>
                </div>
                <div className="buttons">
                  <BlackButton text={"Get a Free Quote"} />
                  <YellowButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sliderBtn1" style={{ position: "absolute" }}>
        <button
          className="carousel-control-prev sliderBtn1"
          type="button"
          onClick={handlePrev}
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
          onClick={handleNext}
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
