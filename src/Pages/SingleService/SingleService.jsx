import "./singleService.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import SingleServiceBanner from "../../Components/SingleServiceBanner/SingleServiceBanner.jsx";
import WorkSection from "../../Components/WorkSection/WorkSection.jsx";
import Slider from "../../Components/Slider/Slider.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.jsx";

// uiux
import idea from "../../../public/assets/singleService/uiux/01.png";
import goal from "../../../public/assets/singleService/uiux/05.png";
import time from "../../../public/assets/singleService/uiux/04.png";
import process from "../../../public/assets/singleService/uiux/03.png";
import research from "../../../public/assets/singleService/uiux/02.png";
import UiuxBanner from "../../Components/UiuxBanner/UiuxBanner.jsx";

const SingleService = () => {
  const data = [
    {
      img: idea,
      heading: "LEARNING YOUR POINT OF VIEW",
      text: "We support design solutions that are accessible, moral, and provide everyone the same chances.Every project is approached by our UI/UX designers using flexible techniques to determine the optimal line of action۔Our tried-and-true strategies has established us as the industry standard for design. ",
    },
    {
      img: research,
      heading: "RESEARCH",
      text: "Our research tactics do not stop at studying your competitors. We take the inventive approach and create picturesque Logo Designs. This originality then triggers an amplification in your brand recognition.",
    },
    {
      img: process,
      heading: "DEFINING THE SCOPE",
      text: "Our research is sustained with a streamlined process that promotes creativity. We identify the elements necessary to support your vision. These components go on to define the core of your graphics. We focus on enhancing our graphic expertise with every step to create stellar designs.",
    },
    {
      img: time,
      heading: "COMMUNICATION",
      text: "We never leave you out during the process. After conceptualizing your ideas, our design specialists continue to seek your input. Every minute detail, from blueprints and sketches to final concepts, all is communicated to you.",
    },
    {
      img: goal,
      heading: "EXECUTION",
      text: "As we reach the final stage of the process, we will help you with: Identifying the possible uses of your custom Logo Design. Including uses on business cards, signs, banners, packaging, letterheads, social media profiles, websites, and blogs.Recommendations to keep a consistent visual identity.Implementing your Logo Design for various digital purposes.This will maximize the use of your Logo Design, helping you maintain a gooddigital reputation.",
    },
  ];

  return (
    <>
      <Navbar />
      <UiuxBanner />

      <div className="textSection">
        <h1
          style={{
            marginbottom: "20px",
          }}
        >
          <span>UXD</span> Consults
        </h1>
        <h2>
          <span>Partner up</span> with the
        </h2>
        <h1 style={{ fontWeight: "900", fontSize: "2.2rem" }}>
          Best Digital Agency in <span>UK</span>
        </h1>
      </div>

      <WorkSection />

      <h1 className="h1">
        UXD Consults TRANSFORMS YOUR IDEAS INTO
        <span> DESIGN SOLUTION.</span>
      </h1>

      <p className="p">
        Logo Designs that stand out will help your brand get ahead. But that
        does not mean forgoing your passion while competing. That is why our
        professional artists blend their skills with your aesthetic values.
        Delivering designs that define your brand identity, smoothly taking you
        to the top.
      </p>

      <h5 className="h5">
        Our design specialists are waiting for you to share your vision with us.
        Let's team up, and grow like never before.
      </h5>
      <br />
      <br />
      <Slider />

      <div className="textSection2">
        <div className="container p-5 text-left">
          <div
            className="row"
            style={{ fontSize: "18px", marginBottom: "10px" }}
          >
            <div className="col">
              <p className="">
                No matter the industry, we always begin with thorough research.
                Though this seems quite obvious, let us explain how it is
                different.
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "18px", marginBottom: "10px" }}
          >
            <div className="col">
              <p>
                The research that we conduct is rooted in the way you think.
                During our brainstorming session, we grasp the direction you
                want to move in. Next, we move towards identifying the artistic
                styles that are of your interest. In addition to that, we
                discourse on the psychological techniques that can prove to be
                fruitful to your concept.
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "18px", marginBottom: "10px" }}
          >
            <div className="col">
              <p>
                We pair these techniques with the perfect geometrical
                measurements and positioning. These combinations instill an
                impression on the subconscious of the viewer.
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "18px", marginBottom: "10px" }}
          >
            <div className="col">
              <p>
                Our process is shaped like this because we love to form every
                idea from scratch. This inventive approach allows us to be
                original every time. Our methods have resulted in graphics that
                are unique as a fingerprint.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h5 style={{ fontWeight: "700", fontSize: "18px" }}>
                We have summarized the process for you to understand better.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5 imgWithText">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="row mt-4 mb-4">
              {index % 2 === 0 ? (
                <>
                  <div className="offset-1  col-5 d-flex justify-content-center align-items-start">
                    <img src={item.img} width="50%" alt={item.heading} />
                  </div>
                  <div className="col-6">
                    <h2 className="text-left mb-2 h">{item.heading}</h2>
                    <p className="w-75">{item.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="offset-1 col-6 d-flex flex-column justify-content-center align-items-start ">
                    <h2 className="text-left mb-2 h">{item.heading}</h2>
                    <p className="w-75">{item.text}</p>
                  </div>
                  <div className="col-5  text-center">
                    <img src={item.img} width="50%" alt={item.heading} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <ServiceSection />
      <Footer />
    </>
  );
};

export default SingleService;
