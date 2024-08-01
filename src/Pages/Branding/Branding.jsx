import "./branding.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import WebBanner from "../../Components/WebBanner/WebBanner.jsx";
import WorkSection from "../../Components/WorkSection/WorkSection.jsx";
import Slider from "../../Components/Slider/Slider.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.jsx";

// uiux
import img1 from "../../../public/assets/singleService/branding/1.png";
import img2 from "../../../public/assets/singleService/branding/2.png";
import img3 from "../../../public/assets/singleService/branding/3.png";
import img4 from "../../../public/assets/singleService/branding/4.png";
import img5 from "../../../public/assets/singleService/branding/5.png";
import img6 from "../../../public/assets/singleService/branding/6.png";
import img7 from "../../../public/assets/singleService/branding/7.png";
import BlackButton from "../../Components/BlackButton/BlackButton.jsx";
import YellowButton from "../../Components/YellowButton/YellowButton.jsx";
import BrandingBanner from "../../Components/BrandingBanner/BrandingBanner.jsx";

const Content = () => {
  const data = [
    {
      img: img1,
      h2: "IDENTITY ",
      h2Span: " BRAND",
      p1: "Your company's brand identity is the foundation for any successful marketing plan. It's essential for defining your target audience, setting expectations, and instilling familiarity and trust in your customers. Logos, business cards, letterheads, envelopes, and seal stamps are essential for identifying your items from those of your competitors. ",
      p2: "Developing an appealing brand identity entails conducting a thorough  review of all aspects of your product. This involves smart design, highquality components, and a consistent marketing message. Every aspect  should convey your company's values, mission, and unique selling  qualities",
      p3: "A well-designed brand identity does more than just attract new customers;  it also promotes loyalty and favourable word-of-mouth. Customers who  resonate with your brand are more inclined to offer positive feedback. ",
    },
    {
      img: img2,
      h2: "BRANDING  ",
      h2Span: "PROCESS",
      p1: "Defining the brand mission. What is the brand's vision? What does it hope to achieve? How will it vary from the other brands in its category? What do they hope to inspire in their customers?",
      p2: "Creating a brand logo and tagline. The brand logo should be simple and recognizable, and the slogan should convey the firm's values and objectives. ",
      p3: " Developing an identity system. The identity system should be both unified and visually appealing. It should cover everything from logo and site design to colour palettes and packaging.Developing an identity system. The identity system should be both unified and visually appealing. It should cover everything from logo and site design to colour palettes and packaging. Targeting potential customers and creating advertising materials. Understanding the requirements and desires of potential clients is essential when targeting them. Creating appealing advertising materials. ",
    },
    {
      img: img3,
      h2: " a brand identity ",
      h2Span: " Designing",
      p1: "Defining your brand begins with an awareness of your company's history and how you want customers to perceive it. Do you want to be perceived as nice and approachable, or professional and reliable? Once you have a clear vision of your ideal image, you can begin developing messages and images to reflect it. ",
      p2: "Your brand should be consistent across all channels, including your website, social media accounts, and how you respond to client inquiries. It should be reflected in everything you do; from the language you employ to the colours on your logo.",
    },
    {
      img: img4,
      h2: "Pillars of ",
      h2Span: "Branding",
      p1: "A company's brand is its most important asset, and building a great brand needs careful strategy and execution. Identifying the company's basic values is a critical component of the brand-building process. These are the foundations on which the brand will be developed.",
      p2: "A company's core principles should represent both its culture and mission. They should be timeless and durable, rather than being vulnerable to fashion or trend changes. Most importantly, they should be genuine, reflecting what the organization stands for.",
    },
    {
      img: img5,
      h2: "elements",
      h2Span: "Visual ",
      p1: "After determining your target market and conducting research, you may  consider the other characteristics that will comprise your brand. This  includes elements like your logo, colour scheme, shapes, taglines, and  typography.",
      p2: "So, what message do your company's logo, colours, and other images convey? Let's look at some of the most crucial factors to consider: The logo includes colours, shapes, a tagline, and right typography. ",
    },
    {
      img: img6,
      h2: "Designing with ",
      h2Span: "intent",
      p1: "Once you have considered every component of brand design, it is time to begin generating layouts that will be most effective in connecting with that market. The design approach should be intentional, rather than simply arranging components on a page at random.",
      p2: "Every piece on the page should serve a purpose and add to the overall message being communicated. Colours, images, fonts, and white space all help to set the tone and convey the intended message.",
      p3: "The greatest method to ensure that your design is effective is to imagine  yourself in the shoes of your target audience. Consider what they want to  see and how they want it presented. This will aid you in making decisions  on all aspects of the design process. ",
    },
    {
      img: img7,
      h2: "feedback",
      h2Span: "Inquire for ",
      p1: "Asking for feedback throughout the brand design process is critical to ensuring you are on the correct road. By asking feedback from your target audience, you may learn what they think of your brand and what they want to see from it. This feedback can be quite important in determining the path of your brand.",
      p2: "When asking for comments, be specific about what you want feedback on.  Do you wish to provide feedback on the overall branding strategy? Or do  you want specific input on a logo or website design? Once you've  determined what kind of feedback you require, contact your target  audience and ask for their comments.",
    },
  ];
  return (
    <>
      <Navbar />
      <BrandingBanner text="WEB DEVELOPMENT" />

      <div className="textSection">
        <h1
          style={{
            marginbottom: "20px",
          }}
        >
          GO<span>LOGO</span>NOW
        </h1>
        <h2>
          <span>Partner up</span> with the
        </h2>
        <h1 style={{ fontWeight: "900", fontSize: "2.2rem" }}>
          Best Branding Agency in <span>UK</span>
        </h1>
      </div>

      <WorkSection />

      <h1 className="h1">
        <span>
          Brand identity design is essential for leaving an indelible impression
          on your{" "}
        </span>
        target audience.
      </h1>

      <p className="p">
        Tech6 Solutions EXPERT DESIGNER TEAM recognizes the importance of
        developing a cohesive and memorable brand image that distinguishes you
        from the competition.
      </p>

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
              <p className="webPageTextP">
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
              <p className="webPageTextP">
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
              <p className="webPageTextP">
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
              <p className="webPageTextP">
                Our process is shaped like this because we love to form every
                idea from scratch. This inventive approach allows us to be
                original every time. Our methods have resulted in graphics that
                are unique as a fingerprint.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h5
                className="webPageTextH5"
                style={{ fontWeight: "700", fontSize: "18px" }}
              >
                We have summarized the process for you to understand better.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5 imgWithText">
        <div className="row">
          <div className="col">
            <h1 className="textImgUparH1" id="textImgUparH1">
              <span style={{ fontSize: "40px" }}>
                We turn ideas into reality
              </span>
            </h1>
            <p className="textImgUparH1" id="textImgUparP">
              Tech6 Solutions offers skilled brand services to help you create
              the ideal brand.
            </p>
          </div>
        </div>
        <div className="row pe-0">
          {data?.map((item, index) => (
            <div className="row pe-0" key={index}>
              {index % 2 === 0 ? (
                // Odd rows: Image on the left, text on the right
                <>
                  <div className="offset-lg-1 mt-5 col-lg-5 col-12 d-flex justify-content-center align-items-center px-0">
                    <img src={item?.img} width="80%" alt={item.h2Span} />
                  </div>
                  <div className="col-lg-5 col-12 mt-5 text-md-left text-center pe-0">
                    <h2 className="text-md-left mb-2 text-center pe-0">
                      <span style={{ color: "#ffaa17" }}>{item?.h2Span} </span>
                      {item?.h2}
                    </h2>
                    {item.p1 && (
                      <p className="w-100 text-md-left text-center pe-0">
                        {item.p1}
                      </p>
                    )}
                    {item.p2 && (
                      <p className="w-100 text-md-left text-center pe-0">
                        {item.p2}
                      </p>
                    )}
                    {item.h5 && (
                      <h5 className="w-100 text-md-left text-center pe-0">
                        {item.h5}
                      </h5>
                    )}
                    <br />
                    <br />
                    <div className="row d-flex justify-content-start align-items-start pe-0">
                      <div className="col-lg-5 col-12 mb-lg-0 mb-3 pe-0">
                        <BlackButton text="GET A QUOTE" />
                      </div>
                      <div className="col-lg-5 col-12 pe-0">
                        <YellowButton text="CALL US NOW" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Even rows: Image on the right, text on the left
                <>
                  <div className="order-lg-1 order-0 col-lg-5 col-12 d-flex justify-content-center align-items-center px-0 mt-5 px-0">
                    <img src={item.img} width="80%" alt={item.h2Span} />
                  </div>
                  <div className="order-lg-0 order-1 offset-lg-1 mt-5 col-lg-5 col-12 d-flex flex-column justify-content-center align-items-center pe-0 text-center">
                    <div className="text-center px-0">
                      <h2
                        className="mb-2 w-100 text-md-left text-center pe-0"
                        style={{ fontSize: "30px" }}
                      >
                        {item?.h2}
                        <span style={{ color: "#ffaa17" }}>
                          {" "}
                          {item?.h2Span}{" "}
                        </span>
                      </h2>
                      {item.p1 && (
                        <p className="w-100 text-md-left text-center pe-0">
                          {item.p1}
                        </p>
                      )}{" "}
                      {item.p2 && (
                        <p className="w-100 text-md-left text-center pe-0">
                          {item.p2}
                        </p>
                      )}
                      <h4
                        className="w-100 px-0"
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          marginTop: "20px",
                        }}
                      >
                        {item?.h5}
                      </h4>
                      <div className="row d-flex justify-content-start align-items-start pe-0 mt-4">
                        <div className="col-lg-5 col-12 mb-lg-0 mb-3 pe-0">
                          <BlackButton text="GET A QUOTE" />
                        </div>
                        <div className="col-lg-5 col-12 pe-0">
                          <YellowButton text="CALL US NOW" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <ServiceSection />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Content;
