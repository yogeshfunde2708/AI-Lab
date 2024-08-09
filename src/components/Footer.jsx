import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../index.css";
import { Link } from "react-router-dom";

const Footer = () => {

  const handleReload = () => {
    window.location.href = "/";
  };
  const handleReloadAbout = () => {
    window.location.href = "/about";
  };
  const handleReloadContact = () => {
    window.location.href = "/contact";
  };

  return (
    <footer className="mastfoot my-3 navbar navbar-expand-lg">
      <div className="inner container">
        <div className="row">
          <div className="col-lg-2 col-md-4 d-flex align-items-center justify-content-center">
            <Link
              className="navbar-brand d-flex align-items-center"
              to="/"
              onClick={handleReload}
            >
              <h3 className="font-weight-bolder mb-0 border border-black p-2 m-2">
                The AI Lab
              </h3>
            </Link>
          </div>

          <div className="col-lg-3 col-md-4 d-flex align-items-center justify-content-center">
            <p className="mx-auto text-center mb-0">© 2023 The AI Lab</p>
          </div>

          <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center">
            <nav className="nav nav-mastfoot">
              <Link to="#" className="nav-link">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="custom-icon"
                  onClick={handleReload}
                />
              </Link>
              <Link to="#" className="nav-link">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="custom-icon"
                  onClick={handleReload}
                />
              </Link>
              <Link to="#" className="nav-link">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="custom-icon"
                  onClick={handleReload}
                />
              </Link>
              <Link to="#" className="nav-link">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="custom-icon"
                  onClick={handleReload}
                />
              </Link>
              <Link to="#" className="nav-link">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="custom-icon"
                  onClick={handleReload}
                />
              </Link>
            </nav>
          </div>

          <div className="col-lg-3 col-md-12 d-flex align-items-center justify-content-center">
            <div>
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link text-dark"
                    to="/"
                    onClick={handleReload}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link text-dark" to="/about" onClick={handleReloadAbout}>
                    About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link text-dark" to="/contact" onClick={handleReloadContact}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
