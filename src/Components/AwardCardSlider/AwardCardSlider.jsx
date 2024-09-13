import "./AwardCardSlider.css";
import bg from "../../../public/assets/aboutWeDo/bg.png";
import img1 from "../../../public/assets/Awards/1.png";
import img2 from "../../../public/assets/Awards/2.png";
import img3 from "../../../public/assets/Awards/3.svg";
import img4 from "../../../public/assets/Awards/4.png";
import img5 from "../../../public/assets/Awards/5.png";

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
          {[img1, img2, img3, img4, img5].map((item, index) => {
            return (
              <>
                <div className="cardContainer">
                  <div className="row mb-0">
                    <div className="col-12 d-flex justify-content-center">
                      <img src={item} alt="" width={200} />
                    </div>
                  </div>
                  <div className=" p-3 pt-1  text-center">
                    <h6 className="texth6">
                      <b className="textBold">Sitejabber </b>
                      Customer Choice Awards
                    </h6>

                    <span className="textSpan">
                      <span style={{ fontWeight: "900", color: "#FBAA19" }}>
                        UXD Consults
                      </span>{" "}
                      Ranked 7th by SiteJabber amoung the Top 200 Graphic Design
                      Companies.
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AwardCardSlider;
