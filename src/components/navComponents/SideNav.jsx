import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const SideNavbar = (props) => {
  const { showSideNav, onClose } = props;

  const handleClose = (e) => {
    e.preventDefault(); 
    onClose(); 
  };
  
  return (
    <div
      id="side-nav"
      className={`sidenav ${showSideNav ? "" : "hidden"}`}
      style={{ width: "300px" }}
    >
      <Link to=" " id="side-nav-close"  onClick={handleClose} style={{ display:'block', transition:'0.3s', fontSize:'25px', textDecoration:'none'}}>
        x
      </Link>
      <div className="sidenav-content" data-aos="fade-up">
        <p>| The AI Lab |</p>
        <p>100 Innovation Drive, Silicon Valley, CA 94025</p>
        <p>
          <span className="fs-16 primary-color">+1 (732) 491-3625 </span>
        </p>
        <p>research@theailab.org</p>
      </div>
    </div>

  );
};

export default SideNavbar;
