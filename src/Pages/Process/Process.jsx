import "./process.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import ProcessBanner from "../../Components/ProcessBanner/ProcessBanner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Timeline from "../../Components/Timeline/Timeline.jsx";

const Process = () => {
  return (
    <>
      <Navbar />
      <ProcessBanner />

      <div className="processSectionContainer">
        <h1 className="processSectionHeading">Let us walk you through our </h1>
        <h1 className="processSectionHeading">
          <span>process</span>
        </h1>

        <p className="processSectionDescription">
          <span>Tech6</span> Solutions strives to fulfill your tasks with total
          transparency and assurance. We prioritize mutual understanding while
          taking up the responsibility for your project. Our project managers
          and support staff are available 24 hours a day, seven days a week to
          assist you with any project-related issues.
        </p>
      </div>
      <Timeline />
      <Footer />
    </>
  );
};

export default Process;
