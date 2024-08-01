import React from "react";
import "./serviceCards.css";
import webGif from "../../../public/assets/services/webDesignImg.webp";
import appGif from "../../../public/assets/services/appImg.webp";
import uiuxGif from "../../../public/assets/services/uiuxImg.webp";
import brandingGif from "../../../public/assets/services/brandingImg.webp";
import contentGif from "../../../public/assets/services/contentImg.webp";

// icons
import webIcon from "../../../public/assets/icons/web.png";
import appIcon from "../../../public/assets/icons/app.png";
import uiuxIcon from "../../../public/assets/icons/uiux.png";
import branding from "../../../public/assets/icons/branding.png";
import contentWriting from "../../../public/assets/icons/content.png";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, icon, title, description, location }) => {
  return (
    <Link
      to={`/services/${location}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="serviceCard">
        <img src={image} alt="Service" className="serviceCardImage" />
        <div style={{ padding: "5px 30px" }}>
          <img
            src={icon}
            alt="Service"
            width="140px"
            className="serviceCardIcon"
          />
          <h3 className="serviceCardTitle">{title}</h3>
          <p className="serviceCardDescription">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const servicesData = [
  {
    image: webGif,
    icon: webIcon,
    title: "Web Development",
    description: "We promise success with our Web Design services.",
    location: "web",
  },
  {
    image: appGif,
    icon: appIcon,
    title: "App Development",
    description: "We promise success with our Mobile app development services.",
    location: "app",
  },
  {
    image: uiuxGif,
    icon: uiuxIcon,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences.",
    location: "uiux",
  },

  {
    image: brandingGif,
    icon: branding,
    title: "Branding",
    description:
      "Levitate your corporate identity with competitive strategies.",
    location: "branding",
  },

  {
    image: contentGif,
    icon: contentWriting,
    title: "Content Writing",
    description: "Stands as the best SEO Content Writing Company.",
    location: "content",
  },
];

const ServiceCards = () => {
  return (
    <div className="serviceCardsContainer">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          icon={service.icon}
          title={service.title}
          description={service.description}
          location={service.location}
        />
      ))}
    </div>
  );
};

export default ServiceCards;
