import "./content.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import WorkSection from "../../Components/WorkSection/WorkSection.jsx";
import Slider from "../../Components/Slider/Slider.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ContentBanner from "../../Components/ContentBanner/ContentBanner.jsx";
import BlackButton from "../../Components/BlackButton/BlackButton.jsx";
import YellowButton from "../../Components/YellowButton/YellowButton.jsx";

// uiux
import img1 from "../../../public/assets/singleService/content/1.png";
import img2 from "../../../public/assets/singleService/content/2.png";
import img3 from "../../../public/assets/singleService/content/3.png";
import img4 from "../../../public/assets/singleService/content/4.png";
import img5 from "../../../public/assets/singleService/content/5.png";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.jsx";

const Content = () => {
  const data = [
    {
      img: img1,
      h2: "WRITING ",
      h2Span: "BLOG  ",
      p1: "With the help of uxd Consults expert writers grow your blog and reach millions of readers around the globe. Quality blog content is crucial for content marketing because it draws readers in, establishes your company as a market leader, and sparks their interest. Although producing content that drives results requires experience and effort, our blog writing services can speed up the process. Enable our talented group of skilled writers to handle all of your blogging requirements or to assist your in-house staff. ",
    },
    {
      img: img2,
      h2: " COPY",
      h2Span: " WRITING",
      p1: "uxd Consults expert writers write quality copywriting that drives traffic and conversions. The act of creating text that informs readers about a company is known as copywriting. Copywriters provide written content that is intended to promote brands, increase sales, establish credibility, and show off their knowledge. For composing advertisements, landing pages, blog posts, white papers, email marketing campaigns, and social media postings, you can hire uxd Consults copywriting service.",
    },
    {
      img: img3,
      h2: " WRITING ",
      h2Span: " E-BOOK ",
      p1: "Writing an e-book is a big job. Let uxd Consults expert writers help you out in writing an engaging e-book. A high-quality eBook can help you market your business and increase website traffic. By offering visitors a free eBook download in exchange for entering their email addresses, you can collect leads. Get the most out of your eBook investment by following up with your leads with email marketing campaigns. You can sell your eBook on Amazon Kindle, eBay, Click bank, or through other marketing channels to earn money directly if you're not trying to generate leads with it.",
    },

    {
      img: img4,
      h2: " NEWS ",
      h2Span: "LATER",
      p1: "Sending out a newsletter to your clients on a daily, weekly, or monthly basis that is updated with fresh content will add value to their experience. Sending newsletters to your customers on a regular basis is simple and affordable with the wide range of low-cost email marketing tools available today. The challenging part is filling those newsletters with top-notch content that will captivate your readers. Our newsletter writers are capable of producing a consistent flow of interesting information that draws in readers. By doing this, you consistently remind consumers that choosing your brand is the best decision.",
    },
    {
      img: img5,
      h2: " Copywriting Services ",
      h2Span: "Websites ",
      p1: "Website copywriting gives users the clear, brief data they need to transact with you by telling the story of your business in your brand tone. The content that our website copywriters develop includes policy pages, product and service pages, blog articles, company histories, executive profiles, and home pages. Every page of your website should have a clear, engaging, and business-like copy because it is your company's online presence. ",
    },
  ];
  return (
    <>
      <Navbar />
      <ContentBanner text="WEB DEVELOPMENT" />

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
          Content Writering Agency in <span>UK</span>
        </h1>
        <p style={{ fontSize: "17px", marginTop: "10px" }}>
          Giving your idea a{" "}
          <span style={{ fontSize: "17px" }}>kick-start</span> with a custom
          content writing.
        </p>
      </div>

      <WorkSection />

      <h1 className="h1">
        <span>CONTENT WRITING </span>IS IMPORTANT FOR BUILDING TRUST AND DRIVING
      </h1>

      <p className="p">
        Producing top-notch content that converts leads into customers and
        brings organic reach is a service you can get from uxd Consults to excel
        in your field and stay ahead of your competitors.
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
                Research shows that major search engines like Google, Bing, and
                Yahoo account for more than 60% of web traffic. Our proven
                process can help improve ranking and organic traffic.
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "18px", marginBottom: "10px" }}
          >
            <div className="col">
              <p className="webPageTextP">
                SEO is a common and ongoing technique for enhancing your search
                engine ranking (SERPs). A higher search engine rating translates
                to more organic online traffic, which might drive your website
                to the first page of search results without spending a dime.
                After all, SOE must produce more leads and compete in the
                ever-changing digital economy.
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "18px", marginBottom: "10px" }}
          >
            <div className="col">
              <p className="webPageTextP">
                uxd Consults' skilled web developers work carefully on website
                structure to optimize your website, ensuring that it has an
                acceptable site structure that meets search engine standards.
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{ fontSize: "18px", marginBottom: "10px" }}
          >
            <div className="col">
              <p className="webPageTextP">
                On-page SEO is a simple method that the uxd Consults team uses
                to optimize individual pages of a website. It makes those pages
                more search engine-friendly and easier for users to understand.
                Regarding a website's exposure and engagement,
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h5
                className="webPageTextH5"
                style={{ fontWeight: "700", fontSize: "18px" }}
              >
                uxd Consults has a proven process for enhanced ranking and
                organic traffic.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5 imgWithText">
        <div className="row">
          <div className="col">
            <h1 className="textImgUparH1" id="textImgUparH1">
              Tech6 <span>OFFERS MODERN CONTENT SOLUTIONS.</span>
            </h1>
            <h5 className="textImgUparH5 ">
              Through skillful content writing and persistent content marketing,
              you can showcase your industry understanding and rise above this
              crowded digital marketplace
            </h5>
            <h6 className="textImgUparH6">CONTENT WRITING</h6>
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
                    <div className="text-md-left text-center px-0">
                      <h2
                        className="mb-2 text-md-left mb-2 text-center pe-0"
                        style={{ fontSize: "30px" }}
                      >
                        {item?.h2}
                        <span style={{ color: "#ffaa17" }}>
                          {" "}
                          {item?.h2Span}{" "}
                        </span>
                      </h2>
                      {item.p1 && <p className="w-100 px-0">{item.p1}</p>}{" "}
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
      <Footer />
    </>
  );
};

export default Content;
