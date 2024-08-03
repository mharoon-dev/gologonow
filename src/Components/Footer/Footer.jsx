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
        <p className="footerDescription">
          we transform offline businesses into successful online operations with
          customized digital strategies.
        </p>

        <h4 className="footerTitle">
          <span>Administrative Office</span>
        </h4>

        <p className="footerDescription">
          <LocationOnIcon className="icons" />
          289 Hounslow Road, Hanworth, Feltham, TW13 5JQ, Greater London ,
          UK11803 Canyon Mills Dr, Houston, TX 77905
        </p>

        <b className="footerDescriptionEmail">
          <EmailIcon className="icons" />
          support@uxdconsults.com
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
              289 Hounslow Road, Hanworth, Feltham, TW13 5JQ, Greater London ,
              UK11803 Canyon Mills Dr, Houston, TX 77905
            </p>
          </div>
          <p className="phone">
            <LocalPhoneIcon className="icons" />
            +44 758 7864 204
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
