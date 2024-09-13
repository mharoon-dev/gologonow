import "./Portfolio.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import PortfolioBanner from "../../Components/PortfolioBanner/PortfolioBanner.jsx";
import { useEffect, useRef, useState } from "react";

// web design
import web1 from "../../../public/assets/portfolio/web design/1.png";
import web2 from "../../../public/assets/portfolio/web design/2.png";
import web3 from "../../../public/assets/portfolio/web design/3.mp4";
import web4 from "../../../public/assets/portfolio/web design/4.mp4";
import web5 from "../../../public/assets/portfolio/web design/5.mp4";
import web6 from "../../../public/assets/portfolio/web design/6.mp4";
import web7 from "../../../public/assets/portfolio/web design/7.jpeg";
import web8 from "../../../public/assets/portfolio/web design/8.jpeg";
import web9 from "../../../public/assets/portfolio/web design/9.mp4";
import web10 from "../../../public/assets/portfolio/web design/10.png";
import web11 from "../../../public/assets/portfolio/web design/11.png";
import web12 from "../../../public/assets/portfolio/web design/12.jpg";
import web13 from "../../../public/assets/portfolio/web design/13.jpg";
import web14 from "../../../public/assets/portfolio/web design/14.jpg";
import web15 from "../../../public/assets/portfolio/web design/15.jpg";
import web16 from "../../../public/assets/portfolio/web design/16.mp4";
import web17 from "../../../public/assets/portfolio/web design/17.jpeg";
import web18 from "../../../public/assets/portfolio/web design/18.jpeg";
import web19 from "../../../public/assets/portfolio/web design/19.jpeg";
import web20 from "../../../public/assets/portfolio/web design/20.jpeg";
import web21 from "../../../public/assets/portfolio/web design/21.jpeg";

//  logo design
import logo1 from "../../../public/assets/portfolio/logo/1.jpg";
import logo2 from "../../../public/assets/portfolio/logo/2.jpg";
import logo3 from "../../../public/assets/portfolio/logo/3.jpg";
import logo4 from "../../../public/assets/portfolio/logo/4.jpg";
import logo5 from "../../../public/assets/portfolio/logo/5.jpg";
import logo6 from "../../../public/assets/portfolio/logo/6.jpg";
import logo7 from "../../../public/assets/portfolio/logo/7.jpg";
import logo8 from "../../../public/assets/portfolio/logo/8.jpg";
import logo9 from "../../../public/assets/portfolio/logo/9.jpg";
import logo10 from "../../../public/assets/portfolio/logo/10.jpg";
import logo11 from "../../../public/assets/portfolio/logo/11.jpg";
import logo12 from "../../../public/assets/portfolio/logo/12.jpg";
import logo13 from "../../../public/assets/portfolio/logo/13.jpg";
import logo14 from "../../../public/assets/portfolio/logo/14.jpg";
import logo15 from "../../../public/assets/portfolio/logo/15.jpg";
import logo16 from "../../../public/assets/portfolio/logo/16.jpg";

// covers
import cover1 from "../../../public/assets/portfolio/covers/1.png";
import cover2 from "../../../public/assets/portfolio/covers/2.jpg";
import cover3 from "../../../public/assets/portfolio/covers/3.jpg";
import cover4 from "../../../public/assets/portfolio/covers/4.jpg";
import cover5 from "../../../public/assets/portfolio/covers/5.jpg";
import cover6 from "../../../public/assets/portfolio/covers/6.jpg";

// app
import app1 from "../../../public/assets/portfolio/app/1.mp4";
import app2 from "../../../public/assets/portfolio/app/2.jpeg";
import app3 from "../../../public/assets/portfolio/app/3.jpeg";
import app4 from "../../../public/assets/portfolio/app/4.jpeg";
import app5 from "../../../public/assets/portfolio/app/5.jpeg";
import app6 from "../../../public/assets/portfolio/app/6.jpeg";
import app7 from "../../../public/assets/portfolio/app/7.mp4";
import app8 from "../../../public/assets/portfolio/app/8.png";
import app9 from "../../../public/assets/portfolio/app/9.png";

// games
import game1 from "../../../public/assets/portfolio/game/1.mp4";
import game2 from "../../../public/assets/portfolio/game/2.mp4";
import game3 from "../../../public/assets/portfolio/game/3.mp4";
import game4 from "../../../public/assets/portfolio/game/4.mp4";
import game5 from "../../../public/assets/portfolio/game/5.mp4";
import game6 from "../../../public/assets/portfolio/game/6.mp4";
import game7 from "../../../public/assets/portfolio/game/7.mp4";
import game8 from "../../../public/assets/portfolio/game/8.mp4";
import game9 from "../../../public/assets/portfolio/game/9.mp4";
import game10 from "../../../public/assets/portfolio/game/10.mp4";
import game11 from "../../../public/assets/portfolio/game/11.mp4";
import game12 from "../../../public/assets/portfolio/game/12.mp4";
import game13 from "../../../public/assets/portfolio/game/13.mp4";
import game14 from "../../../public/assets/portfolio/game/14.mp4";
import game15 from "../../../public/assets/portfolio/game/15.mp4";

const Portfolio = () => {
  const categories = [
    "All",
    "Branding & Logo Design",
    "Book Covers",
    "Website Design",
    "Mobile Application",
    "Game Design & Development",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const galleryHeadingRef = useRef(null);

  const data = [
    { id: 1, img: logo1, cat: "Branding & Logo Design" },
    { id: 2, img: logo2, cat: "Branding & Logo Design" },
    { id: 3, img: logo3, cat: "Branding & Logo Design" },
    { id: 4, img: logo4, cat: "Branding & Logo Design" },
    { id: 5, img: logo5, cat: "Branding & Logo Design" },
    { id: 6, img: logo6, cat: "Branding & Logo Design" },
    { id: 7, img: logo7, cat: "Branding & Logo Design" },
    { id: 8, img: logo8, cat: "Branding & Logo Design" },
    { id: 9, img: logo9, cat: "Branding & Logo Design" },
    { id: 10, img: logo10, cat: "Branding & Logo Design" },
    { id: 11, img: logo11, cat: "Branding & Logo Design" },
    { id: 12, img: logo12, cat: "Branding & Logo Design" },
    { id: 13, img: logo13, cat: "Branding & Logo Design" },
    { id: 14, img: logo14, cat: "Branding & Logo Design" },
    { id: 15, img: logo15, cat: "Branding & Logo Design" },
    { id: 16, img: logo16, cat: "Branding & Logo Design" },

    { id: 17, img: cover1, cat: "Book Covers" },
    { id: 18, img: cover2, cat: "Book Covers" },
    { id: 19, img: cover3, cat: "Book Covers" },
    { id: 20, img: cover4, cat: "Book Covers" },
    { id: 21, img: cover5, cat: "Book Covers" },
    { id: 22, img: cover6, cat: "Book Covers" },

    { id: 23, vid: app1, cat: "Mobile Application" },
    { id: 24, img: app2, cat: "Mobile Application" },
    { id: 25, img: app3, cat: "Mobile Application" },
    { id: 26, img: app4, cat: "Mobile Application" },
    { id: 27, img: app5, cat: "Mobile Application" },
    { id: 28, img: app6, cat: "Mobile Application" },
    { id: 29, vid: app7, cat: "Mobile Application" },
    { id: 30, img: app8, cat: "Mobile Application" },
    { id: 31, img: app9, cat: "Mobile Application" },

    { id: 32, vid: game1, cat: "Game Design & Development" },
    { id: 33, vid: game2, cat: "Game Design & Development" },
    { id: 34, vid: game3, cat: "Game Design & Development" },
    { id: 35, vid: game4, cat: "Game Design & Development" },
    { id: 36, vid: game5, cat: "Game Design & Development" },
    { id: 37, vid: game6, cat: "Game Design & Development" },
    { id: 38, vid: game7, cat: "Game Design & Development" },
    { id: 39, vid: game8, cat: "Game Design & Development" },
    { id: 40, vid: game9, cat: "Game Design & Development" },
    { id: 41, vid: game10, cat: "Game Design & Development" },
    { id: 42, vid: game11, cat: "Game Design & Development" },
    { id: 43, vid: game12, cat: "Game Design & Development" },
    { id: 44, vid: game13, cat: "Game Design & Development" },
    { id: 45, vid: game14, cat: "Game Design & Development" },
    { id: 46, vid: game15, cat: "Game Design & Development" },

    { id: 47, img: web1, cat: "Website Design" },
    { id: 49, img: web2, cat: "Website Design" },
    { id: 50, vid: web3, cat: "Website Design" },
    { id: 51, vid: web4, cat: "Website Design" },
    { id: 52, vid: web5, cat: "Website Design" },
    { id: 53, vid: web6, cat: "Website Design" },
    { id: 54, img: web7, cat: "Website Design" },
    { id: 55, img: web8, cat: "Website Design" },
    { id: 56, vid: web9, cat: "Website Design" },
    { id: 57, img: web10, cat: "Website Design" },
    { id: 58, img: web11, cat: "Website Design" },
    { id: 59, img: web12, cat: "Website Design" },
    { id: 60, img: web13, cat: "Website Design" },
    { id: 61, img: web14, cat: "Website Design" },
    { id: 62, img: web15, cat: "Website Design" },
    { id: 63, vid: web16, cat: "Website Design" },
    { id: 64, img: web17, cat: "Website Design" },
    { id: 65, img: web18, cat: "Website Design" },
    { id: 66, img: web19, cat: "Website Design" },
    { id: 67, img: web20, cat: "Website Design" },
    { id: 68, img: web21, cat: "Website Design" },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = data.filter((item) => {
    return selectedCategory === "All" || item.cat === selectedCategory;
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (galleryHeadingRef.current) {
      observer.observe(galleryHeadingRef.current);
    }

    return () => {
      if (galleryHeadingRef.current) {
        observer.unobserve(galleryHeadingRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <PortfolioBanner />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="portfolioHeading">
              We're building <span>BRANDS</span> that <span>WIN</span>
            </h1>
            <br />

            <div className="categories">
              {categories.map((category) => (
                <h3
                  key={category}
                  className={`category ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </h3>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="gallery">
          {filteredData.map((item) => (
            <div key={item.id} className="gallery-item">
              {item.img && (
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={`item-${item.id}`}
                />
              )}
              {item.vid && (
                <video controls autoPlay loop muted>
                  <source src={item.vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
