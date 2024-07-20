import React from "react";
import "linearicons/dist/web-font/style.css";
import SideNavbar from "./SideNavbar";
import { useState, useRef } from "react";
import {Link} from 'react-router-dom';
import "../index.css";

const Navbar = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const sideNavbarRef = useRef(null);

  const sideNavbar = () => {
    setShowSideNavbar(true);
  };
  const closeSideNavbar = () => {
    setShowSideNavbar(false);
  };
  return (
    <>
    <div className="static-layout not-on-top">
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
          <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-target= '#navbar-nav-header' aria-expanded='false' aria-label="Toggle navigation" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  >
            <span className="lnr lnr-menu"></span>
          </button>
          <div className=" navbar-collapse collapse text-white" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item only-desktop">
                <Link
                  to=" "
                  className="nav-link"
                  id="side-nav-open"
                  onClick={() => sideNavbar()}
                >
                  <span className="lnr lnr-menu"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {showSideNavbar ? (
        <div ref={sideNavbarRef}>
          <SideNavbar onClose={closeSideNavbar} />
        </div>
      ) : null}
      </nav>
      </div>
    </>
   
  );
};

export default Navbar;
