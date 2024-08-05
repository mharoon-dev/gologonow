import "./workSection.css";
import worldClassIcon from "../../../public/assets/workSection/worldClassIcon.png";
import timeIcon from "../../../public/assets/workSection/timeIcon.png";
import customerSatisfyIcon from "../../../public/assets/workSection/customerSatisfyIcon.png";
import moneyBankIcon from "../../../public/assets/workSection/moneyBankIcon.png";

const WorkSection = ({ text }) => {
  const cardsData = [
    {
      icon: worldClassIcon,
      title: "WORLD-CLASS ARTISTS",
      description:
        "designing your ideas into realities with flawless executions",
    },
    {
      icon: timeIcon,
      title: "DELIVER ON TIME",
      description:
        "our commitment to punctuality ensures customers to rely on us",
    },
    {
      icon: customerSatisfyIcon,
      title: "CUSTOMER SATISFY",
      description:
        "customer satisfaction is highly guaranteed though our attention to detail and perfectionism",
    },
    {
      icon: moneyBankIcon,
      title: "MONEY-BANKED",
      description:
        "we provide you the best ROI on your investment you could have",
    },
  ];
  return (
    <div className="workSectionContainer">
      {/* <p className="workSectionDescription">
        {text && <span>{text}</span>}
        {!text && (
          <>
            Our graphic artists research extensively before the presentation.{" "}
            <span> Why? </span> Because a well-designed logo carries a cognitive
            meaning behind it.{" "}
            <span>
              We accomplish this with the right combination of colors, geometry,
              or typography.
            </span>{" "}
            Using this method creates a subconscious association in the mind of
            the viewer. Helping your audience to relate to your vision.
          </>
        )}
      </p> */}

      {/* cards */}
      <div className="workSectionCards">
        {cardsData.map((card, index) => (
          <div className="workSectionCard">
            <div className="workSectionIconContainer">
              <img src={card.icon} alt="" />
            </div>
            <div className="workSectionTitleContainer">
              <b className="workSectionTitle">{card.title}</b>
            </div>

            <p className="workSectionDescription" id="workCardDesc">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="workSectionHeading">START YOUR PROJECT NOW!</h2>
    </div>
  );
};

export default WorkSection;
