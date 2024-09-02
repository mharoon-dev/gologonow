import "./contactForm.css";
const ContactForm = () => {
  return (
    <div className="contactFormContainer">
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
          <button className="sendBtn" type="submit">
            SEND NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
