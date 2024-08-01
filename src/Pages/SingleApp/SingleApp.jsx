import "./singleApp.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import AppBanner from "../../Components/AppBanner/AppBanner.jsx";
import WorkSection from "../../Components/WorkSection/WorkSection.jsx";
import Slider from "../../Components/Slider/Slider.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import BlackButton from "../../Components/BlackButton/BlackButton.jsx";
import YellowButton from "../../Components/YellowButton/YellowButton.jsx";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.jsx";

// web
import img1 from "../../../public/assets/singleService/app/1.png";
import img2 from "../../../public/assets/singleService/app/2.png";
import img3 from "../../../public/assets/singleService/app/3.png";
import img4 from "../../../public/assets/singleService/app/4.png";
import img5 from "../../../public/assets/singleService/app/5.png";

const SingleWeb = () => {
  const data = [
    {
      img: img1,
      h2: " APP DEVELOPMENT | SECURITY AND PERFECTION",
      h2Span: "IOS",
      p1: "Tech6 Solutions mobile app developers excel at creating iOS apps. Our  specialized Swift and Objective-C development team produces flawless  code. Popular niches include social media and music, as well as locationbased apps. We've finished well over a thousand applications. Our app  developers met the platform's stringent security requirements. As a result,  mobile applications become more secure, intelligent, and dynamic.",
      p2: "We want to focus your vision on delivering a better experience. That's why you can count on us 100%.",
    },
    {
      img: img2,
      h2: " DEVELOPMENT WITH UNLIMITED FUNCTIONALITY ",
      h2Span: "ANDROID APP ",
      p1: "Even though iOS apps are known for their superior quality. To begin,  developing an Android app expands your reach. The Android operating  system is extremely popular. Their platform allows for additional  customization options. Another major success of Android apps is their  ability to provide an infinite number of features. Because iOS has restricted  functionality, many users have switched to Android to take advantage of its  boundless capabilities. Furthermore, the platform simplifies marketing  efforts. As a result, the return on investment (ROI) increases.",
      p2: "Tech6 Solutions is equally skilled in developing Android apps. We have a  well-established reputation in the application development sector.",
      p3: "Our mobile app developers are committed to ensuring project receives  unique consideration.",
      h5: "High-end security, dynamic functionality, and rapid speeds.",
    },
    {
      img: img3,
      h2: " app development using React Native ",
      h2Span: "Cross-platform ",
      p1: "With a React Native app, you can maximize functionality. Its crossplatform foundation ensures uninterrupted performance. ",
      h5: "If you prefer WooCommerce, our WordPress experts can create unique E-Commerce web designs that include the best themes and plugins.",
    },
    {
      img: img4,
      h2: " VISUAL EXPERIENCE WITH VR APP DEVELOPMENT.",
      h2Span: "ENHANCED ",
      p1: "VR App creation can help your business stand out. These programs are  best suited for simulative learning and development. VR technology  advancements have streamlined and made the process more  understandable.",
      p2: "We have advanced VR testing and 3D animation technology in-house. As a  result, hundreds of projects have been completed successfully. Aside from  lab examinations, large-scale crowd testing is carried out to ensure the  most reliable results.",
      p3: "Tech6 Solutions is committed to providing you with an experience that  feels as authentic as possible. VR technology inspires us to care about  both the present and the future. Tech6 Solution frequent activities has  assured that our clients receive the best service possible.",
    },
    {
      img: img5,
      h2: "Advanced Security with ",
      h2Span: "Joomla",
      p1: "Joomla, like WordPress, is a dynamic platform that creates great website designs. This CMS can function well, thanks to SEO support and a limitless number of plugin alternatives. ",
      p2: "Cross-platform or hybrid apps might save you a lot of time. As a result, the  solutions are diversely compatible. You can have one React Native  application running on Android, iOS, and Windows at the same time!  ",
      p3: "We provide top React Native engineers with exceptional skill sets. They are not just React Native Framework experts, but also proficient in a variety of  programming languages.",
      p4: "Join forces withTech6 Solutions today. We will give your business a boost with our amazing mobile app development services.",
      h5: "LEARN MORE ABOUT OUR Windows APP DEVELOPMENT SOLUTIONS. ",
    },
  ];
  return (
    <>
      <Navbar />
      <AppBanner text="APP DEVELOPMENT" />

      <div className="textSection">
        <h1
          style={{
            marginbottom: "20px",
          }}
        >
          GO<span>LOGO</span>NOW
        </h1>
        <h2>
          Our mobile app development company operates in the
          <span> </span>
        </h2>
        <h1 style={{ fontWeight: "900", fontSize: "2.2rem" }}>
          UK, Pakistan and <span>Abroad</span>
        </h1>
        <p
          style={{
            fontSize: "17px",
            marginTop: "10px",
            width: "70%",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          We ensure success with our mobile app development services. Tech6
          Solutions is one of the most{" "}
          <span style={{ fontSize: "17px" }}>
            professional app development{" "}
          </span>
          businesses in the United Kingdom. Our capability is increasing every
          day and making us better able to serve you more efficiently.
        </p>
      </div>

      <WorkSection key="workSection" />

      <h3 className="h3">We are Creating</h3>
      <h1 className="h1">
        PROFESSIONAL CUSTOMIZED APPLICATIONS <span>for you.</span>
      </h1>

      <p className="p">
        We ensure success with our mobile app development services. Tech6
        Solutions is one of the most professional app development businesses in
        the United States. Our capability is increasing every day and making us
        better able to serve you more efficiently.
      </p>

      <h5 className="h5">
        Tech6 solutions Our technological team will collaborate with you to
        develop dynamic mobile applications.
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
            <h1 className="textImgUparH1">MAKE YOUR IDEA COME TO LIFE.</h1>
            <h1 className="textImgUparH1" id="textImgUparH1">
              Premium <span> Mobile App Development Services.</span>
            </h1>
            <h5 className="textImgUparH5">
              Tech6 solutions Our technological team will collaborate with you
              to develop dynamic mobile applications.
            </h5>
            <h6 className="textImgUparH6">
              MOBILE APP DESIGNS FOR A SEAMLESS USER EXPERIENCE.
            </h6>
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
                  <div className="col-lg-5 col-12 mt-5 text-center pe-0">
                    <h2 className="text-md-left mb-2 text-center pe-0">
                      <span style={{ color: "#ffaa17" }}>{item?.h2Span} </span>
                      {item?.h2}
                    </h2>
                    {item.p1 && (
                      <p className="w-100 text-md-left text-center pe-0">
                        {item?.p1}
                      </p>
                    )}
                    {item?.p2 && (
                      <p className="w-100 text-md-left text-center pe-0">
                        {item.p2}
                      </p>
                    )}
                    {item?.h5 && (
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
                        className="mb-2 text-md-left text-center "
                        style={{ fontSize: "30px" }}
                      >
                        {item?.h2}
                        <span style={{ color: "#ffaa17" }}>
                          {" "}
                          {item?.h2Span}{" "}
                        </span>
                      </h2>
                      {item.p1 && (
                        <p className="w-100 text-md-left text-center  px-0">
                          {item.p1}
                        </p>
                      )}{" "}
                      {item.p2 && (
                        <p className="w-100 text-md-left text-center pe-0">
                          {item.p2}
                        </p>
                      )}
                      {item.h5 && (
                        <h4
                          className="w-100 px-0"
                          style={{
                            fontSize: "18px",
                            fontWeight: 700,
                            lineHeight: 1.3,
                            marginTop: "20px",
                          }}
                        >
                          {item.h5}
                        </h4>
                      )}
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

        {/* 01 */}
        {/* <div className="row pe-0">
            <div className="offset-lg-1 mt-5 col-lg-5 col-12 d-flex justify-content-center align-items-center px-0">
              <img src={w} width="80%" />
            </div>

            <div className="col-lg-5 col-12 mt-5 text-center pe-0">
              <h2 className="text-md-left mb-2 text-center pe-0">
                <span style={{ color: "#ffaa17" }}>WORDPRESS WEB DESIGNS </span>
                | SIMPLE & EASY TO MANAGE
              </h2>
              <p className="w-100 text-md-left text-center pe-0">
                It is one of the most used CMS platforms, accounting for around
                64 million sites. When it comes to building web designs,
                WordPress is quite versatile. It began as a blogging tool and
                has since taken over the online world. WordPress also allows you
                to add a variety of plugins and themes. Almost anything is
                possible with over 50,000 free plugins and 10,000+ themes.
              </p>
              <p className="w-100 text-md-left text-center pe-0">
                Our WordPress developers specialize in WordPress plugin
                development and bespoke WordPress theme creation. Hundreds of
                complicated plugins, add-ons, and themes are available in our
                repository. This means we are always ready to assist you with a
                oneof-a-kind website design.
              </p>
              <h5 className="w-100 text-md-left text-center pe-0">
                Come onboard with
                <span style={{ color: "#ffaa17" }}> Tech6 </span> Solutions to
                get the best WordPress web designs at affordable prices.
              </h5>
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
          </div> */}

        {/* 02 */}
        {/* <div className="row px-0">
            <div className="order-lg-1 order-0 col-lg-5 col-12 d-flex justify-content-center align-items-center px-0 mt-5 px-0">
              <img src={research} width="80%" />
            </div>

            <div className="order-lg-0 order-1 offset-lg-1 mt-5 col-lg-5 col-12 d-flex flex-column justify-content-center align-items-center pe-0 text-center">
              <div className="text-center px-0">
                <h2 className="mb-2" style={{ fontSize: "30px" }}>
                  INTUITIVE DEVELOPMENT WITH
                  <span style={{ color: "#ffaa17" }}> HUBSPOT </span>
                </h2>
                <p className="w-100 px-0">
                  HubSpot CMS Hub has transformed the game for many businesses
                  and marketers. It can be used as a one-stop solution for
                  content management and marketing. The HubSpot CRM is ideal for
                  businesses seeking a unified solution to manage client
                  interactions while expanding. Furthermore, it incorporates
                  sales CRM and HubSpot's email marketing tool into its CMS,
                  resulting in a smooth workflow.
                </p>
                <h4
                  className="w-100 px-0"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginTop: "20px",
                  }}
                >
                  <span> Tech6 </span> Solutions HubSpot Developers are experts
                  in custom integrations using the HubSpot API, CRM, and CMS.
                  Contact us today to get started on your HubSpot project.
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
          </div> */}
      </div>

      <ServiceSection />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default SingleWeb;
