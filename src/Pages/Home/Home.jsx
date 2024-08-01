import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.jsx";
import WeDoSection from "../../Components/WeDoSection/WeDoSection.jsx";
import Column from "../../Components/Column/Column.jsx";
import Banner2 from "../../Components/Banner2/Banner2.jsx";
import Gallery from "../../Components/Gallery/Gallery.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import CallTo from "../../Components/CallTo/CallTo.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ServiceSection />
      <WeDoSection />
      <Column />
      <Banner2 />
      <Gallery />
      {/* <CallTo /> */}
      <Footer />
    </>
  );
};

export default Home;
