import "./featured-section.css";
import aboutSectionImg from "../../../public/assets/aboutSection/aboutSectionImg.jpeg";

const FeaturedSection = () => {
  return (
    <div className="featuredContainer">
      <img src={aboutSectionImg} className="featuredImg" />
      <div className="featuredContent">
        <h1 className="featuredHeading">
          WE HELP YOU ELEVATE <span>YOUR BRAND</span> AND DRIVE GROWTH.
        </h1>

        <p className="featuredDescription">
          <span>UXD Consults</span> has polished technological ideas and
          announcements throughout the years by sipping a cocktail of
          inspiration, creativity, materialization, and amalgamation, with the
          addition of comprehensive study, steady tread, and unwavering
          determination.
        </p>

        <p className="featuredDescription">
          <span>UXD Consults</span> serves you by putting a diverse range of
          Marketing, Design, and Development services under one roof for
          execution and consulting. Our considerably experienced crew has sieved
          all such aspects that are capable of restraining the expansion of our
          clients.
        </p>

        <div className="featuredlists">
          <ul className="featuredList">
            <li className="featuredListItem">
              <h3 className="featuredListHeading">Consultation</h3>
              <p className="featuredListDescription">
                Our experts provide precise and targeted consultation based on
                the scope, industry, and other relevant aspects, whether small
                or major.
              </p>
            </li>
          </ul>

          <ul className="featuredList">
            <li className="featuredListItem">
              <h3 className="featuredListHeading">Execution</h3>
              <p className="featuredListDescription">
                For each job, our staff strives for utmost perfection. We expand
                on the concept, paying close attention to every detail and
                wearing readiness colors on our sleeves.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
