import React, { useState } from "react";
import "./Banner.css";
import whiteCurveImg from "../../../public/assets/right-white-curve.png";
import curvedBgImg from "../../../public/assets/right-curved-bg.png";
import BlackButton from "../BlackButton/BlackButton.jsx";
import YellowButton from "../YellowButton/YellowButton.jsx";
import linkedin from "../../../public/assets/icons/linkedin.png";
import twitter from "../../../public/assets/icons/twitter.png";
import fb from "../../../public/assets/icons/fb.png";

// awards image
import img1 from "../../../public/assets/Awards/1.png";
import img2 from "../../../public/assets/Awards/2.png";
import img3 from "../../../public/assets/Awards/3.svg";
import img4 from "../../../public/assets/Awards/4.png";
import img5 from "../../../public/assets/Awards/5.png";

// images

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
      image: "/assets/image .jpg",
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
                {item.image ? (
                  <img src={item.image} className="video-bg" alt="..." />
                ) : (
                  <video
                    src={item.video}
                    className="video-bg"
                    autoPlay
                    muted
                    loop
                  />
                )}
                <div className="left-text">
                  <a
                    href="https://www.linkedin.com/company/uxdconsults/"
                    target="_blank"
                  >
                    <img
                      src={linkedin}
                      className="ms-0 ps-0"
                      style={{ transform: "rotate(90deg)" }}
                      width={40}
                      alt=""
                    />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://www.facebook.com/uxdconsult/"
                    target="_blank"
                  >
                    <img
                      src={fb}
                      className="ms-0 ps-0"
                      style={{ transform: "rotate(90deg)" }}
                      width={40}
                      alt=""
                    />
                  </a>
                  &nbsp;&nbsp;
                  <a href="www.x.com" target="_blank">
                    <img
                      src={twitter}
                      className="ms-0 ps-0"
                      style={{ transform: "rotate(90deg)" }}
                      width={40}
                      alt=""
                    />
                  </a>
                  &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  MON - FRI &nbsp;&nbsp;&nbsp; 9AM TO 7PM
                </div>
                <div>
                  <img
                    src={whiteCurveImg}
                    alt="White Curve"
                    className="white-curve-img"
                  />
                  &nbsp;&nbsp;
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
                <br />
                <div
                  className="awards d-flex justify-content-start align-items-end ms-5 ps-5 awards-imgs"
                  style={{
                    zIndex: "1",
                  }}
                >
                  <span className="awards-text  ">Awards</span>
                  {[
                    { img: img1, location: "https://www.trustpilot.com/" },
                    { img: img2, location: "https://www.designrush.com/" },
                    { img: img3, location: "https://clutch.co/" },
                    { img: img4, location: "https://www.sitejabber.com/" },
                    { img: img5, location: "https://www.bark.com/en/gb/" },
                  ].map((item, index) => (
                    <a
                      href={item.location}
                      className="d-flex align-items-center justify-content-center"
                      target="_blank"
                    >
                      <img
                        src={item.img}
                        alt="img1"
                        className="img1 ms-4  "
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transform: "rotate(0deg)",
                          marginBottom: "-20px",
                          width: "80px",
                        }}
                      />
                    </a>
                  ))}
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
