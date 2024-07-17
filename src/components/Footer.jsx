
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "../index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mastfoot my-3">
      <div className="inner container">
        <div className="row">
          <div className="col-lg-4 col-md-12 d-flex align-items-center"></div>
          <div className="col-lg-4 col-md-12 d-flex align-items-center">
            <p className="mx-auto text-center mb-0">© 2023 The AI Lab</p>
          </div>
          <div className="col-lg-4 col-md-12">
            <nav className="nav nav-mastfoot justify-content-center">
             <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faFacebookF} className="custom-icon" />
              </Link>
             <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faTwitter} className="custom-icon" />
              </Link>
             <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faInstagram} className="custom-icon" />
              </Link>
             <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faLinkedin} className="custom-icon"/>
              </Link>
             <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faYoutube} className="custom-icon"/>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
