import React from "react";
import "./SingleServiceBanner.css";

const ContactBanner = ({ text }) => {
  return (
    <div className="contactBannerContainer">
      <h1 className="contactBannerHeading">{text} </h1>
      <p className="contactBannerDescription">
        Home - <span>Services</span>
      </p>
    </div>
  );
};

export default ContactBanner;
