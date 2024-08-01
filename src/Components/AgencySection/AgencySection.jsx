import React, { useState } from "react";
import "./agencySection.css";
import CheckIcon from "@mui/icons-material/Check";

const tabs = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Our aim requires us to provide our clients with exceptional service and attention to detail. To accomplish what we do with such passion that our efforts are appreciated in the eyes of our clients. For us, providing quality to our clients is essential to our mission; anything that does not assist them in a significant way is not acceptable. We not only do the necessary tasks, but we also create the desired outcomes! ",
  },
  {
    id: "vision",
    title: "Our Vision",
    content:
      "We have planned the future we want not only for Tech6 Solutions , but for the world and its industries! We intend to establish a strong hold on e-existence, in which we will not only live but also have comprehensive and simple access. In this mission, we optimize our customers' experiences and deliver on their expectations so that they can see how their objectives are accomplished via accurate digitization. ",
  },
];

const AgencySection = () => {
  const [activeTab, setActiveTab] = useState("history");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="agencySectionContainer">
      <div className="left">
        <h1 className="agencySectionHeading">
          AGENCY THAT DIGITALIZES <span>YOUR DREAMS</span>
        </h1>
        <div className="navBar">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`navItem ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="tabContent">
          {tabs.map(
            (tab) => activeTab === tab.id && <p key={tab.id}>{tab.content}</p>
          )}
        </div>
      </div>
      <div className="right">
        <p className="agencySectionDescription">
          Providing friendly designs for graphics, logos, websites, apps, and
          marketing to help you achieve maximum engagement and internal ease of
          use. Our strategy encompasses your whole scope of needs, whether you
          want a comprehensive branding solution or just enhancements.
        </p>

        <div className="agencyImgContainer">
          <img
            src="https://gologonow.com/images/resource/about-2.jpg"
            className="img"
            alt="Agency"
          />
          <ul className="list">
            <li className="listItem">
              <CheckIcon className="checkIcon" /> Quick communication
            </li>
            <li className="listItem">
              <CheckIcon className="checkIcon" /> Detailed examination
            </li>
            <li className="listItem">
              <CheckIcon className="checkIcon" /> Quality Assurance
            </li>
            <li className="listItem">
              <CheckIcon className="checkIcon" /> Fast delivery.
            </li>
            <li className="listItem">
              <CheckIcon className="checkIcon" /> 100% Customer satisfaction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgencySection;
