import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "linearicons/dist/web-font/style.css";
import "../../index.css";
import SideNav from "./SideNav";
import SideSearch from "./SideSearch";

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showSideSearch, setShowSideSearch] = useState(false);
  const sideNavRef = useRef(null);
  const sideSearchRef = useRef(null);

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
  return (
    <>
      <nav
        id="header-navbar"
        className="navbar navbar-expand-lg py-4 navbar-transparent"
      >
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center text-white"
            to="/"
          >
            <h3 className="font-weight-bolder mb-0 border border-white p-2 m-2">
              The AI Lab
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbar-nav-header"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <span className="lnr lnr-menu"></span>
          </button>
          <div
            className="navbar-collapse collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
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
    </>
  );
};

export default Nav;
