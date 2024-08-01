import "./contactForm.css";
import buildibgIcon from "../../../public/assets/contact/buildingIcon.png";
const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <div className="left">
        <div className="titleContainer">
          <h2 className="contactTitle">Our Location in UK:</h2>
          <span className="address">1351 Matheson Blvd E L4W 2A1,</span>
          <span className="address">11803 Canyon Mills Dr,</span>
          <span className="address"> TX 77905.</span>
          <a className="viewLocation">View Location</a>
        </div>

        <div className="buildingIconContainer">
          <img src={buildibgIcon} className="buildingIcon" alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="contactFormHeading">
          Let's start a project <span>together.</span>
        </h1>
        <p className="contactFormDescription">
          We make all your dreams come true in a successful project.
        </p>

        <form action="">
          <div className="inputContainer">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button className="sendBtn" type="submit">SEND NOW</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
