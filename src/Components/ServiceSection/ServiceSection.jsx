import "./ServiceSection.css";
import Card from "../Card/Card.jsx";
import uiuxIcon from "../../../public/assets/icons/uiux.png";
import webIcon from "../../../public/assets/icons/web.png";
import appIcon from "../../../public/assets/icons/app.png";
import branding from "../../../public/assets/icons/branding.png";
import contentWriting from "../../../public/assets/icons/content.png";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const crads = [
    {
      icon: uiuxIcon,
      number: "01",
      title: "UI/UX ",
      location: "uiux",
    },
    {
      icon: webIcon,
      number: "02",
      title: "WEB DEVELOPMENT",
      location: "web",
    },
    {
      icon: appIcon,
      number: "03",
      title: "APP DESIGN & DEVELOPMENT",
      location: "app",
    },
    {
      icon: branding,
      number: "04",
      title: "BRANDING",
      location: "branding",
    },

    {
      icon: contentWriting,
      number: "05",
      title: "CONTENT WRITING",
      location: "content",
    },
  ];
  return (
    <div className="service-section">
      <div style={{ width: "80%" }} className="containerTwo">
        {/* Heading */}
        <div className="headingContainer">
          <h1 className="heading">
            SHAPING YOUR FUTURE WITH <span>PRECISION.</span>
          </h1>
        </div>
        {/* paragraph */}
        <div className="description">
          <p>
            We are a digital agency providing and catering to wide spectrum of
            digital design, development and marketing services.
          </p>
        </div>

        {/* cards */}
        <div className="cards">
          {crads.map((card) => (
            <Link
              to={`/services/${card.location}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                key={card.number}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
