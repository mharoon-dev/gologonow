import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = window.location.pathname;
  console.log(location);

  return (
    <div>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/">
          <div className="logo">
            <img src="../../assets/logo.png" width="70px" alt="Company Logo" />
          </div>
        </Link>
        <div className="mobile-nav-toggler" onClick={toggleSidebar}>
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </div>
      </nav>
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      >
        <div
          className={`sidebar ${sidebarOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="close-btn" onClick={closeSidebar}>
            &times;
          </span>
          <ul className="sidebar-menu">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className={location === "/" ? "active" : ""}>Home</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li className={location === "/about" ? "active" : ""}>About</li>
            </Link>
            <div className="d-flex justify-content-start align-items-center">
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "lightGray" }}
              >
                <li
                  id="seriveceItem"
                  className={location === "/services" ? "active" : ""}
                >
                  Services{" "}
                </li>
              </Link>
              <span
                onClick={toggleServices}
                className={location === "/services" ? "active" : ""}
              >
                {servicesOpen ? <ExpandLess /> : <ExpandMore />}
              </span>
            </div>
            {servicesOpen && (
              <>
                <Link to="/services/uiux" style={{ textDecoration: "none" }}>
                  <li
                    className={location === "/services/uiux" ? "active" : ""}
                    id="list"
                  >
                    UI/UX{" "}
                  </li>
                </Link>
                <Link to="/services/web" style={{ textDecoration: "none" }}>
                  <li
                    className={location === "/services/web" ? "active" : ""}
                    id="list"
                  >
                    WEB{" "}
                  </li>
                </Link>
                <Link to="/services/app" style={{ textDecoration: "none" }}>
                  <li
                    className={location === "/services/app" ? "active" : ""}
                    id="list"
                  >
                    APP{" "}
                  </li>
                </Link>
                <Link
                  to="/services/branding"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    id="list"
                    className={
                      location === "/services/branding" ? "active" : ""
                    }
                  >
                    BRANDING{" "}
                  </li>
                </Link>
                <Link to="/services/content" style={{ textDecoration: "none" }}>
                  <li
                    className={location === "/services/content" ? "active" : ""}
                    id="list"
                  >
                    CONTENT WRITING{" "}
                  </li>
                </Link>
              </>
            )}

            <Link to="/process" style={{ textDecoration: "none" }}>
              <li className={location === "/process" ? "active" : ""}>
                Our Process
              </li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li className={location === "/contact" ? "active" : ""}>
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
