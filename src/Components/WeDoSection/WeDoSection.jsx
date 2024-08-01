import React, { useEffect, useRef } from "react";
import "./WeDoSection.css";
import video1 from "../../../public/assets/we-do-section/we-do-section-video1.mp4";
import video2 from "../../../public/assets/we-do-section/we-do-section-video2.mp4";
import img1 from "../../../public/assets/we-do-section/we-do-section-img1.png";
import img2 from "../../../public/assets/we-do-section/we-do-section-img2.png";
import BlackButton from "../BlackButton/BlackButton.jsx";

const WeDoSection = () => {
  const videoContainer1Ref = useRef(null);
  const imgContainer1Ref = useRef(null);
  const videoContainer2Ref = useRef(null);
  const imgContainer2Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (videoContainer1Ref.current)
      observer.observe(videoContainer1Ref.current);
    if (imgContainer1Ref.current) observer.observe(imgContainer1Ref.current);
    if (videoContainer2Ref.current)
      observer.observe(videoContainer2Ref.current);
    if (imgContainer2Ref.current) observer.observe(imgContainer2Ref.current);

    return () => {
      if (videoContainer1Ref.current)
        observer.unobserve(videoContainer1Ref.current);
      if (imgContainer1Ref.current)
        observer.unobserve(imgContainer1Ref.current);
      if (videoContainer2Ref.current)
        observer.unobserve(videoContainer2Ref.current);
      if (imgContainer2Ref.current)
        observer.unobserve(imgContainer2Ref.current);
    };
  }, []);

  return (
    <div className="we-do-section-container">
      <h3 className="we-do-section-heading">
        We love transforming product ideas to{" "}
        <span className="we-do-section-span">digital realities.</span>
      </h3>

      <div className="we-do-section-part">
        <div className="videoContainer" ref={videoContainer1Ref}>
          <video autoPlay loop className="video">
            <source src={video1} type="video/mp4" />
          </video>
        </div>

        <div className="imgContainer" ref={imgContainer1Ref}>
          <img src={img1} alt="" />
          <h2 className="imgHeading">
            <span>Titan Island</span> NFT GAME
          </h2>
          <p className="imgDescription">
            <span>TITAN ISLAND</span> keeps you engaged by offering you a broad
            space to be imaginative. Giving you the option to experience NFTs on
            an essential-level.
          </p>
          <div className="btnDiv">
            <BlackButton text={"VIEW CASE STUDY"} />
          </div>
        </div>
      </div>

      <div className="we-do-section-part">
        <div className="imgContainer" ref={imgContainer2Ref}>
          <img src={img2} alt="" style={{ border: "1px solid black" }} />
          <h2 className="imgHeading">
            <span>Titan Island</span> NFT GAME
          </h2>
          <p className="imgDescription">
            <span>TITAN ISLAND</span> keeps you engaged by offering you a broad
            space to be imaginative. Giving you the option to experience NFTs on
            an essential-level.
          </p>
          <div className="btnDiv">
            <BlackButton text={"VIEW CASE STUDY"} />
          </div>
        </div>

        <div className="videoContainer" ref={videoContainer2Ref}>
          <video autoPlay loop className="video">
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default WeDoSection;
