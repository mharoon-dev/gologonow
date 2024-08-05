import "./Seo.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import WorkSection from "../../Components/WorkSection/WorkSection.jsx";
import Slider from "../../Components/Slider/Slider.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.jsx";

// uiux
import img1 from "../../../public/assets/singleService/seo/1.png";
import img2 from "../../../public/assets/singleService/seo/2.png";
import img3 from "../../../public/assets/singleService/seo/3.png";
import img4 from "../../../public/assets/singleService/seo/4.png";
import img5 from "../../../public/assets/singleService/seo/5.png";
import img6 from "../../../public/assets/singleService/seo/6.png";
import img7 from "../../../public/assets/singleService/seo/7.png";
import BlackButton from "../../Components/BlackButton/BlackButton.jsx";
import YellowButton from "../../Components/YellowButton/YellowButton.jsx";
import BrandingBanner from "../../Components/BrandingBanner/BrandingBanner.jsx";
import SeoBanner from "../../Components/SeoBanner/SeoBanner.jsx";

const Seo = () => {
  const data = [
    {
      img: img1,
      h2: " SEO",
      h2Span: "On-page",
      p1: "On-page SEO makes use of a variety of basic aspects, including page content, headlines and headers, metadata, title tags, descriptions, image alt text, and canonical URLs for each page. ",
      p2: "uxd Consults creates one-of-a-kind and impactful headlines that accurately convey the essence of the text. An eye-catching headline or page header is a great way to get users' attention while also allowing search engines to grasp the context of your content. ",
      p3: "We ensure that your title tags are brief, descriptive, and full of important keywords",
    },
    {
      img: img2,
      h2: "Page's",
      h2Span: "Value ",
      p1: "Meta Description is an HTML element in SERPs, containing your company's value propositions and indicating to search engines that your company and products are clearly defined.",
      p2: "The page's value proposition should be a brief and to-the-point statement that explains why your visitors should choose you over your competition. ",
      p3: " Captivating images is essential for captivating your website visitors",
      p4: " At uxd Consults, we use canonical URLs to avoid duplicate content concerns that harm your SEO ranking.<br/>Captivating images is essential for captivating your website visitors",
    },
    {
      img: img3,
      h2: " SEO",
      h2Span: "Off-page ",
      p1: "uxd Consults offers off-page SEO, a strategy that enhances a website's search engine rankings and visibility by focusing on external factors like backlinks, social media engagement, influencer collaborations, and brand mentions.",
      p2: "uxd Consults professional SEO team creates useful and relevantbacklinks from authoritative sources. Quality backlinks serve as votes for yourwebsite's credibility.",
      p2: "We integrate social media sharing into your website, enhancing visibility and SEO effectiveness by suggesting social media involvement in posts, thereby promoting social interaction.",
    },
    {
      img: img4,
      h2: "posting  ",
      h2Span: "Guest ",
      p1: "Guest posting, sometimes known as guest blogging, is extremely crucial, especially when attempting to present oneself or one's products to audiences beyond one's established network.",
      p2: "Influencer outreach is a critical component of influencer marketing that improves both on-page and off-page SEO methods. uxd Consults team of SEO professionals, works with industry influencers and opinion leaders to promote content and get permitted backlinks, increasing brand visibility and communication consistency. ",
    },
    {
      img: img5,
      h2: "SEO",
      h2Span: "Technical ",
      p1: "Technical SEO is the third pillar of the SEO process, focusing on improving a website's technical components to make it more search-engine friendly",
      p2: "Slow-loading websites, even well-optimized ones, can lead to users skipping to the next link in SERPs.",
      p3: "uxd Consults SEO experts focus on reducing site loading time through various techniques, including updating WordPress websites, optimizing background processes, using Content Delivery Networks, theme optimization, image optimization, and code bloating. ",
    },
    {
      img: img6,
      h2: " and Indexing  ",
      h2Span: "Crawlability",
      p1: "Your WordPress website should be easily accessible and understandable to search engines. This is achieved through well-structured URLs, XML sitemaps, and robots.txt files, which enable search engine crawlers to accurately index and deliver faster user responses. ",
      p2: "Search engines employ schema markup, also known as structured data, to interpret the content of a website. It aids search engines with comprehending content, such as information about indoor plants. ",
      p3: "The greatest method to ensure that your design is effective is to imagine  yourself in the shoes of your target audience. Consider what they want to  see and how they want it presented. This will aid you in making decisions  on all aspects of the design process. ",
    },
    {
      img: img7,
      h2: " SECURITY",
      h2Span: "SSL ",
      p1: "SSL Security is like a sentinel, ensuring that all information passed between your website and your customers is encrypted and protected from prying eyes.",
      p2: "A sitemap is required for search engines to index your WordPress website and make it available to your target audience. uxd Consults provides SEO services to produce an optimum sitemap that adheres to the highest criteria.",
    },
  ];
  return (
    <>
      <Navbar />
      <SeoBanner text="WEB DEVELOPMENT" />

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
        uxd Consults EXPERT DESIGNER TEAM recognizes the importance of
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
              uxd Consults offers skilled brand services to help you create the
              ideal brand.
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
                    {item.p3 && (
                      <p className="w-100 text-md-left text-center pe-0">
                        {item.p3}
                      </p>
                    )}
                    {item.p4 && (
                      <p className="w-100 text-md-left text-center pe-0">
                        {item.p4}
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
                        <BlackButton text="GET A QUOTE" width="247px" />
                      </div>
                      <div className="col-lg-5 col-12 pe-0 ms-2">
                        <YellowButton text="CALL US NOW" width="247px" />
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
                      {item.p3 && (
                        <p className="w-100 text-md-left text-center pe-0">
                          {item.p3}
                        </p>
                      )}
                      {item.p4 && (
                        <p className="w-100 text-md-left text-center pe-0">
                          {item.p4}
                        </p>
                      )}
                      {item.h5 && (
                        <h5 className="w-100 text-md-left text-center pe-0">
                          {item.h5}
                        </h5>
                      )}
                      <br />
                      <div className="row d-flex justify-content-start align-items-start pe-0 mt-4">
                        <div className="col-lg-5 col-12 mb-lg-0 mb-3 pe-0">
                          <BlackButton text="GET A QUOTE" width="247px" />
                        </div>
                        <div className="col-lg-5 col-12 pe-0 ms-2">
                          <YellowButton text="CALL US NOW" width="247px" />
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

export default Seo;
