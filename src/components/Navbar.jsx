import React, { useState, useRef, useEffect } from "react";
import "linearicons/dist/web-font/style.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Navbar = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const sideNavbarRef = useRef(null); 

  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 400,
      delay: 0,
    });

    const handleScroll = () => {
      setIsTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sideNavbar = () => {
    setShowSideNavbar(true);
  };

  const closeSideNavbar = () => {
    setShowSideNavbar(false);
  };

  const handleReload = () => {
    setShowSideNavbar(false);
    window.location.href = '/';
  };
  return (
    <>
      <div
        data-spy="scroll"
        data-target="#navbar"
        className={`static-layout ${isTop ? "navbar-transparent" : "not-on-top"}`}
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <nav id="header-navbar" className="navbar navbar-expand-lg py-4">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center text-white" to="/" onClick={handleReload}>
              <h3 className="font-weight-bolder mb-0 border border-white p-2 m-2">
                The AI Lab
              </h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-target="#navbar-nav-header"
              aria-controls="navbar-nav-header"
            >
              <span className="lnr lnr-menu"></span>
            </button>
            <div className="navbar-collapse collapse text-white" id="navbar-nav-header">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleReload}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item only-desktop">
                  <Link to="#" className="nav-link" id="side-nav-open" onClick={sideNavbar}>
                    <span className="lnr lnr-menu"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {showSideNavbar && (
            <div ref={sideNavbarRef}>
              <SideNavbar onClose={closeSideNavbar} />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
