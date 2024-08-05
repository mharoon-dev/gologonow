import "./web.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import WebBanner from "../../Components/WebBanner/WebBanner.jsx";
import WorkSection from "../../Components/WorkSection/WorkSection.jsx";
import Slider from "../../Components/Slider/Slider.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.jsx";

// uiux
import w from "../../../public/assets/singleService/web/01.png";
import research from "../../../public/assets/singleService/web/02.png";
import woo from "../../../public/assets/singleService/web/3.png";
import joomla from "../../../public/assets/singleService/web/4.png";
import DRUPAL from "../../../public/assets/singleService/web/5.png";
import wix from "../../../public/assets/singleService/web/6.png";
import magneto from "../../../public/assets/singleService/web/7.png";
import shopify from "../../../public/assets/singleService/web/8.png";
import squarespace from "../../../public/assets/singleService/web/9.png";
import BlackButton from "../../Components/BlackButton/BlackButton.jsx";
import YellowButton from "../../Components/YellowButton/YellowButton.jsx";

const SingleWeb = () => {
  const data = [
    {
      img: w,
      h2: " | SIMPLE & EASY TO MANAGE",
      h2Span: "WORDPRESS WEB DESIGNS",
      p1: "It is one of the most used CMS platforms, accounting for around 64 million sites. When it comes to building web designs, WordPress is quite versatile. It began as a blogging tool and has since taken over the online world. WordPress also allows you to add a variety of plugins and themes. Almost anything is possible with over 50,000 free plugins and 10,000+ themes.",
      p2: "Our WordPress developers specialize in WordPress plugin development and bespoke WordPress theme creation. Hundreds of complicated plugins, add-ons, and themes are available in our repository. This means we are always ready to assist you with a oneof-a-kind webs design",
      h5: "Come onboard with uxd Consults to get the best WordPress web designs at prices.",
    },
    {
      img: research,
      h2: "INTUITIVE DEVELOPMENT WITH",
      h2Span: "HUBSPOT",
      p1: "HubSpot CMS Hub has transformed the game for many businesses and marketers. It can be used as a one-stop solution for content management and marketing. The HubSpot CRM is ideal for businesses seeking a unified solution to manage client interactions while expanding. Furthermore, it incorporates sales CRM and HubSpot's email marketing tool into its CMS, resulting in a smooth workflow. ",
      h5: "uxd Consults HubSpot Developers are experts in custom integrations using the HubSpot API, CRM, and CMS. Contact us today to get started on your HubSpot project",
    },
    {
      img: woo,
      h2: "FLEXIBILITY WITH ",
      h2Span: " WOOCOMMERCE ",
      p1: "WooCommerce, when combined with WordPress, provides the greatest E-Commerce web designs. It provides easy answers to complicated tasks while maintaining aesthetics. Furthermore, it includes a wide range of themes to complement WooCommerce add-ons. ",
      h5: "If you prefer WooCommerce, our WordPress experts can create unique E-Commerce web designs that include the best themes and plugins.",
    },
    {
      img: joomla,
      h2: "Advanced Security with ",
      h2Span: "Joomla",
      p1: "Joomla, like WordPress, is a dynamic platform that creates great website designs. This CMS can function well, thanks to SEO support and a limitless number of plugin alternatives. ",
      p2: "Our Joomla developers have extensive experience and are capable of creating fully integrated Joomla websites. In addition, with substantial PHP and JS understanding, we can provide Custom Joomla Plugins and Templates for your project. ",
    },
    {
      img: DRUPAL,
      h2: " - UPSCALE WEBSITE DESIGN AND DEVELOPMENT  ",
      h2Span: "DRUPAL ",
      p1: "Drupal, an open-source CMS with unlimited features, outperforms practically all other CMS platforms. Its cultivated feature provides flexibility during API development. ",
      p2: "Another advantage of Drupal is that it allows for highly technical development and unparalleled customization. ",
      p3: "If the client's requirements are complex, we recommend that they begin their projects with Drupal. Our developers integrate Drupal with your vision, resulting in a secure and technical website. ",
      h5: "uxd Consults Drupal Developers are prepared to create websites for any industry. Start crafting your ambitions with us. ",
    },
    {
      img: wix,
      h2: "Customizable Website Designs | ",
      h2Span: "Wix ",
      p1: "WIX website design offers simple and user-friendly alternatives. It features an in-built development system that provides solutions for simple websites. ",
      p2: "Even though WIX is popular, SEO can be time-consuming. Second, development is limited, and only basic site designs may be created. If you want a simple web design with no complexity, WIX is the suitable tool for you. ",
      p3: "Give your small business a jumpstart with our quick WIX website design services. ",
    },
    {
      img: magneto,
      h2: " WEB DEVELOPMENT: DYNAMIC AND POWERFUL ",
      h2Span: "MAGENTO ",
      p1: "Magento's open-source E-Commerce platform is the ideal answer for your business requirements. It is very customizable and includes wonderful features such as: ",
      p2: "Magento offers the most effective E-Commerce solutions for large marketplaces. The sophisticated and performance-oriented UI design allows you to add high-end features. You also have complete freedom with additional choices to open more stores and perform secure online transactions. ",
      p3: "The Magento Developers at Tecg6 Solutions are trying to improve your experience. We do custom Magento store customization and optimization. Furthermore, our web developers are qualified professionals in Magento Module Development and Performance Optimization. ",
      h5: "Our knowledge can help you get started with your online Magento store straight immediately.",
    },
    {
      img: shopify,
      h2: "RELIABILITY AND EASY USE OF  ",
      h2Span: "SHOPIFY ",
      p1: "Shopify's low-cost E-Commerce solution is good news for online businesses. Even if you run a physical firm, Shopify can assist you. It provides an organized store and inventory management, allowing you to start your own online business. ",
      p2: "Shopify also offers a large selection of themes to pick from. This provides a plethora of opportunities for experimenting with various site designs. Another advantage of Shopify is that you may incorporate different apps into your E-commerce site design. Shopify, an easy-to-use platform with considerable flexibility, can meet your commerce needs",
      p3: "uxd Consults specializes in creating strong online storefronts with Shopify. We will also incorporate dynamic E-Commerce plugins to help your store reach its full potential.",
    },
    {
      img: squarespace,
      h2: "Flexible Web Designs using ",
      h2Span: "Squarespace ",
      p1: "SquareSpace is suitable for both personal and small professional websites. With prebuilt templates, this platform provides numerous tools for giving your web design a professional appearance. ",
      p2: "SquareSpace is another reasonably priced website design choice for you. Get many features with much less effort! ",
      p3: "If you want to know if SquareSpace is right for you, contact us immediately. uxd Consults will gladly guide you.",
    },
  ];
  return (
    <>
      <Navbar />
      <WebBanner text="WEB DEVELOPMENT" />

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
          Best Web Development Agency in <span>UK</span>
        </h1>
        <p style={{ fontSize: "17px", marginTop: "10px" }}>
          Giving your idea a{" "}
          <span style={{ fontSize: "17px" }}>kick-start</span> with a custom
          Website.
        </p>
      </div>

      <WorkSection />

      <h3 className="h3">We are Offering</h3>
      <h1 className="h1">
        PROFESSIONAL CUSTOMIZED WEBISTE <span>for you.</span>
      </h1>

      <p className="p">
        In this day and age of modern technology, almost everyone requires
        website design. Websites are critical for the survival and success of
        any company, brand, or influencer. We want to deliver high-quality
        website design and development services. And it does not stop there
      </p>

      <h5 className="h5">
        When exciting images, a user-friendly experience, and a responsive
        website design come together, things will excel!
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
            <h1 className="textImgUparH1">CMS E-commerce</h1>
            <h1 className="textImgUparH1" id="textImgUparH1">
              Tech6 <span> Solutions OFFERS MODERN WEB DESIGN SOLUTIONS.</span>
            </h1>
            <h5 className="textImgUparH5">
              When exciting images, a user-friendly experience, and a responsive
              website design come together, things will excel!
            </h5>
            <h6 className="textImgUparH6">Website Design and Development</h6>
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
                    <div className="w-100 text-md-left text-center pe-0">
                      <h2
                        className="w-100 text-md-left text-center pe-0"
                        style={{ fontSize: "30px" }}
                      >
                        {item?.h2}
                        <span style={{ color: "#ffaa17" }}>
                          {" "}
                          {item?.h2Span}{" "}
                        </span>
                      </h2>
                      {item.p1 && (
                        <p className="w-100 text-md-left text-center pe-0 ">
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
      <Footer />
    </>
  );
};

export default SingleWeb;
