import "./callTo.css";
import BlackButton from "../BlackButton/BlackButton";

const CallTo = () => {
  return (
    <div className="callToContainer">
      <h1 className="callToHeading">
        Want to know more? We're just a call away.
      </h1>

      <p className="callToDescription">Receive the best brand consultancy</p>
      <p className="callToDescription">by simply giving us a call.</p>

      <div className="callToButtons">
        <BlackButton text="Get A FREE QUOTE" />
        <BlackButton text={"CONTACT US"} />
      </div>
    </div>
  );
};

export default CallTo;
