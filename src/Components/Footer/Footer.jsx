import "./footer.css";
import ukImg from "../../../public/assets/footer/UK.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="right">
        <h4 className="footerTitle" style={{ marginBottom: "0 !important" }}>
          About
        </h4>

        <p className="footerDescription">
          We are a digital agency providing and catering to wide spectrum of
          digital design, development and marketing services.
        </p>

        <h4 className="footerTitle">
          <span>Administrative Office</span>
        </h4>

        <p className="footerDescription">
          <LocationOnIcon className="icons" />
          11803 Canyon Mills Dr, Houston, TX 77905
        </p>

        <b className="footerDescriptionEmail">
          <EmailIcon className="icons" />
          support@gologonow.com
        </b>
      </div>

      <div className="footerMiddle">
        <h4 className="footerTitle" style={{ marginTop: "30px" }}>
          EXPLORE
        </h4>

        <ul className="footerList">
          <li>Our Sevices</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="left">
        <div className="imgDiv">
          <img src={ukImg} className="countryImg" alt="" />
          <h2 className="countryName" id="countryName">
            UK
          </h2>
        </div>
        <div className="addressDiv">
          <div className="d-flex ">
            <LocationOnIcon className="icons" />
            <p className="footeraddress">
              314 Midsummer Boulevard, Milton Keynes MK9 2UB, United Kingdom
            </p>
          </div>
          <p className="phone">
            <LocalPhoneIcon className="icons" />
            +44 (0190) 8086110
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
