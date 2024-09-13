import "./contactForm.css";
import bulildingIcon from "../../../public/assets/contact/buildingIcon.png";
const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <div className="left">
        <div className="titleContainer">
          <div class="titleContainer">
            <h2 class="contactTitle">Our Location in UK:</h2>
            <span class="address">1351 Matheson Blvd E L4W 2A1,</span>
            <span class="address">11803 Canyon Mills Dr,</span>
            <span class="address"> TX 77905.</span>
            <a class="viewLocation">View Location</a>
          </div>
        </div>
        <div class="buildingIconContainer">
          <img src={bulildingIcon} class="buildingIcon" alt="" />
        </div>
      </div>
      <div class="right">
        <h1 class="contactFormHeading">
          Let's start a project <span>together.</span>
        </h1>
        <p class="contactFormDescription">
          We make all your dreams come true in a successful project.
        </p>

        <form action="">
          <div class="inputContainer">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button class="sendBtn" type="submit">
            SEND NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
