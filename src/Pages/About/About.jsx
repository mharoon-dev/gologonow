import AboutBanner from "../../Components/AboutBanner/AboutBanner.jsx";
import FeaturedSection from "../../Components/Featured-section/Featured-section.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import QuestionsSection from "../../Components/QuestionsSection/QuestionsSection.jsx";
import AboutColumn from "../../Components/AboutColumn/AboutColumn.jsx";
import Banner2 from "../../Components/Banner2/Banner2.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
// import CallTo from "../../Components/CallTo/CallTo.jsx";
import "./about.css";
import AgencySection from "../../Components/AgencySection/AgencySection.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <FeaturedSection />
      <QuestionsSection />
      <AboutColumn />
      <Banner2 />
      <AgencySection />
      {/* <CallTo /> */}
      <Footer />
    </>
  );
};

export default About;
