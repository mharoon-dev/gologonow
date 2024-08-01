import React from "react";
import "./slider.css";
import BlackButton from "../BlackButton/BlackButton.jsx";
import YellowButton from "../YellowButton/YellowButton.jsx";

const Slider = () => {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1>
              TYPOGRAPHIC LOGO <span> | THE PERFECT BLEND TO START WITH</span>{" "}
            </h1>
            <p className="testimonial">
              If you are looking for a fresh start, then typographic logos are a
              great option. Their combination of colors and fonts will create a
              stunning first impression. Plus, using an attractive typeface with
              the right colors will set the mood. This will help you communicate
              the nature and the intention of your brand.
            </p>
            <div className="sliderBtnDiv">
              <BlackButton
                text="GET A FREE QUOTE"
                width="270px"
                fontsize="14px"
                fontweight="900"
              />
              &nbsp;
              <YellowButton
                text="CALL US NOW"
                width="220px"
                fontsize="14px"
                fontweight="900"
              />
            </div>
          </div>

          <div className="carousel-item">
            <h1>
              ICONIC LOGO DESIGN <span> | EXPRESSION WITH SIMPLICITY</span>
            </h1>
            <p className="testimonial">
              Minimalist illustrations are a key component in an Iconic Logo.
              Illustrations like these help your brand express itself naturally.
              This keeps graphics simple, as well as highly engaging. Our expert
              artists aim to instill dominance in your iconic Logo Design.
              Helping you promote your brand identity powerfully.
            </p>
            <div className="sliderBtnDiv">
              <BlackButton
                text="GET A FREE QUOTE"
                width="270px"
                fontsize="14px"
                fontweight="900"
              />
              &nbsp;
              <YellowButton
                text="CALL US NOW"
                width="220px"
                fontsize="14px"
                fontweight="900"
              />
            </div>
          </div>

          <div className="carousel-item">
            <h1>
              ILLUSTRATIVE LOGO DESIGN <span> | FREEDOM WITH COMPLEXITY</span>
            </h1>
            <p className="testimonial">
              With an illustrative logo comes the freedom to explore. It allows
              for complexity to blend with breathtaking graphics. Well-defined
              illustrations take up a great deal of time and effort. For this
              reason, our professionals are dedicated to producing outstanding
              designs for you.
            </p>
            <div className="sliderBtnDiv">
              <BlackButton
                text="GET A FREE QUOTE"
                width="270px"
                fontsize="14px"
                fontweight="900"
              />
              &nbsp;
              <YellowButton
                text="CALL US NOW"
                width="220px"
                fontsize="14px"
                fontweight="900"
              />
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </>
  );
};

export default Slider;
