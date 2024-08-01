import React from "react";
import "./timeline.css";

// image of timeline
import img1 from "../../../public/assets/process/1.png";
import img2 from "../../../public/assets/process/2.png";
import img3 from "../../../public/assets/process/3.png";
import img4 from "../../../public/assets/process/4.png";
import img5 from "../../../public/assets/process/5.png";
import img6 from "../../../public/assets/process/6.png";
import img7 from "../../../public/assets/process/7.png";
import img8 from "../../../public/assets/process/8.png";

const Timeline = () => {
  const data = [
    {
      leftHeading: "SAFEGUARD OF INFROMATION",
      img: img1,
      rightHeading: "We prioritize your privacy and begin with an NDA. ",
      rightText:
        "This guarantees: We safeguard sensitive information, protect intellectual property, and secure project-related information. ",
    },
    {
      leftHeading: "ANALYZING YOUR IDEA",
      img: img2,
      rightText:
        "Our Business and Technical Analysts will continue to evaluate your needs. Following that, we create a Scope of Work (SOW) and a Level of Effort (LoE) document. We use this to define the project flow and list the components that go into product development.. ",
    },
    {
      leftHeading: "COST ESTIMATION",
      img: img3,
      rightText:
        "Here, we estimate the overall cost after analyzing the key components that must be included in your product, preparing us to begin the project. This also gives you a better idea of how your budget will be used. ",
    },
    {
      leftHeading: "REFINING YOUR IDEA",
      img: img4,
      rightText:
        "After finalizing the budget, an account manager will be assigned to your project. In this phase, we'll envisage the limitless possibilities that will point us in the proper route. The most of the ideation and blueprinting occurs here. ",
    },
    {
      leftHeading: "PREPARING DESIGNS AND BLUEPRINTS",
      img: img5,
      rightText:
        "Before beginning product development, it is critical to conduct workshops and prepare UI/UX designs. Tech6 Solutions focuses on originality. From simple design components to advanced UI designs, everything is pure and unique. ",
    },
    {
      leftHeading: "DEVELOPMENT PHASE",
      img: img6,
      rightText:
        "As the principles of Agile Software Development advise, your satisfaction comes first. Our development teams are constantly available and ready to meet your needs, even in the final phases of development. We release functioning software concepts on a weekly basis, so you don't have to wait to see where your project is going. ",
    },
    {
      leftHeading: "TESTING PHASE",
      img: img7,
      rightText:
        "After completing the development phase, your product will undergo comprehensive testing. The Quality Assurance team uses many testing methods, including functional testing, integrational testing, and usability testing. Using these and other sophisticated testing procedures, a flawless product is ensured. ",
    },
    {
      leftHeading: "TECHNICAL SUPPORT AND MAINTANENCE ",
      img: img8,
      rightText:
        "Once your project is completed, we will focus on providing you with easy technical assistance and maintenance. Tech6 Solutions provides complimentary maintenance on your goods for up to one month. This includes routine testing of all your product's features, as well as development or updates based on your specifications. ",
    },
  ];
  return (
    <div className="timelineContainer">
      <h2 className="timelineHeading">
        Understand WHERE YOUR PROJECT IS DIRECTED.
      </h2>

      {data?.map((item, index) => (
        <>
          <div className="timelineContent " style={{ marginTop: "5rem" }}>
            <div className="timelineLeft">
              <span>01</span>
              <p className="w-50">{item?.leftHeading}</p>
            </div>
            <div className="timelineMiddle">
              {/* <div className="timelineLine topLine"></div> */}
              <img src={item.img} alt="Timeline" className="timelineImage" />
              <div className="timelineLine bottomLine"></div>
            </div>
            <div className="timelineRight">
              {item.rightHeading && <h5>{item.rightHeading}</h5>}
              <p
                className="w-100"
                style={{ fontSize: "14px", fontWeight: "500" }}
              >
                {item.rightText}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Timeline;
