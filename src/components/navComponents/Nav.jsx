import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "linearicons/dist/web-font/style.css";
import "../../index.css";
import SideNav from "./SideNav";
import SideSearch from "./SideSearch";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showSideSearch, setShowSideSearch] = useState(false);
  const sideNavRef = useRef(null);
  const sideSearchRef = useRef(null);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 400,
      delay: 0,
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sideNav = () => {
    setShowSideNav(true);
  };

  const closeSideNav = () => {
    setShowSideNav(false);
  };

  const sideSearch = () => {
    setShowSideSearch(true);
  };

  const closeSideSearch = () => {
    setShowSideSearch(false);
  };

  const handleReload = (event) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/";
    }
  };
  const handleReloadAbout = () => {
    window.location.href = "/about";
  };
  const handleReloadContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <div data-spy="scroll" data-target="#navabr" className={`static-layout ${isTop ? "navbar-transparent" : "not-on-top"}`} data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
        <nav
          id="header-navbar"
          className="navbar navbar-expand-lg py-4"
        >
          <div className="container">
            <Link
              className="navbar-brand d-flex align-items-center text-white"
              to="/"
              onClick={handleReload}
            >
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
            <div
              className="navbar-collapse collapse text-white"
              id="navbar-nav-header"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleReload}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={handleReloadAbout}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={handleReloadContact}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    className="nav-link"
                    id="side-search-open"
                    onClick={sideSearch}
                  >
                    <span className="lnr lnr-magnifier"></span>
                  </Link>
                </li>
                <li className="nav-item only-desktop">
                  <Link
                    to="#"
                    className="nav-link"
                    id="side-nav-open"
                    onClick={sideNav}
                  >
                    <span className="lnr lnr-menu"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {showSideNav && (
            <div ref={sideNavRef}>
              <SideNav onClose={closeSideNav} />
            </div>
          )}

          {showSideSearch && (
            <div ref={sideSearchRef}>
              <SideSearch onClose={closeSideSearch} />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Nav;
