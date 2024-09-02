import "./AwardCardSlider.css";
import bg from "../../../public/assets/aboutWeDo/bg.png";

const AwardCardSlider = () => {
  return (
    <>
      <div
        className="container-fluid p-5"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row">
          <div className="container ms-md-5">
            <div className="row">
              <div className="col-12">
                <h1 className="awardCardSliderHeading">
                  {" "}
                  Awards & <span>Recognitions.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{
            overflow: "scroll !important",
            scrollSnapType: "x mandatory !important",
            flexWrap: "nowrap !important",
          }}
        >
          <div className="cardContainer">
            <div className="row mb-0">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src="https://www.gologonow.com/icons/badge/trust%20pilot.png"
                  alt=""
                  width={200}
                />
              </div>
            </div>
            <div className=" p-3 pt-1  text-center">
              <h6 className="texth6">
                <b className="textBold">Sitejabber </b>
                Customer Choice Awards
              </h6>

              <span className="textSpan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                ab.
              </span>
            </div>
          </div>

          <div className="cardContainer">
            <div className="row mb-0">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src="https://www.gologonow.com/icons/badge/trust%20pilot.png"
                  alt=""
                  width={200}
                />
              </div>
            </div>
            <div className=" p-3 pt-1 text-center">
              <h6 className="texth6">
                <b className="textBold">Sitejabber </b>
                Customer Choice Awards
              </h6>

              <span className="textSpan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                ab.
              </span>
            </div>
          </div>
          <div className="cardContainer">
            <div className="row mb-0">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src="https://www.gologonow.com/icons/badge/trust%20pilot.png"
                  alt=""
                  width={200}
                />
              </div>
            </div>
            <div className=" p-3 pt-1 text-center">
              <h6 className="texth6">
                <b className="textBold">Sitejabber </b>
                Customer Choice Awards
              </h6>

              <span className="textSpan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                ab.
              </span>
            </div>
          </div>
          <div className="cardContainer">
            <div className="row mb-0">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src="https://www.gologonow.com/icons/badge/trust%20pilot.png"
                  alt=""
                  width={200}
                />
              </div>
            </div>
            <div className=" p-3 pt-1 text-center">
              <h6 className="texth6">
                <b className="textBold">Sitejabber </b>
                Customer Choice Awards
              </h6>

              <span className="textSpan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                ab.
              </span>
            </div>
          </div>
          <div className="cardContainer">
            <div className="row mb-0">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src="https://www.gologonow.com/icons/badge/trust%20pilot.png"
                  alt=""
                  width={200}
                />
              </div>
            </div>
            <div className=" p-3 pt-1 text-center">
              <h6 className="texth6">
                <b className="textBold">Sitejabber </b>
                Customer Choice Awards
              </h6>

              <span className="textSpan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                ab.
              </span>
            </div>
          </div>

          {/* Repeat card structure as needed */}
          {/* Additional card elements */}
        </div>
      </div>
    </>
  );
};

export default AwardCardSlider;
