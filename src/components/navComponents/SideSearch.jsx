import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const SideSearch = (props) => {
  const { showSideSearch, onClose } = props;

  const handleClose = (e) => {
    e.preventDefault(); 
    onClose(); 
  };
  
  return (
    <div
      className={`sidenav ${showSideSearch ? "" : "hidden"}`}
      id="side-search"
      style={{ width: "300px" }}
    >
      <Link to=" " id="side-nav-close" onClick={handleClose} style={{ display:'block', transition:'0.3s', fontSize:'25px', textDecoration:'none'}}>
        x
      </Link>
      <div className="sidenav-content">
        <form action="">
          <div className="input-group md-form form-sm form-2 pl-0">
            <input
              type="text"
              className="form-control my-0 py-1 red-border"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button
                className="input-group-text red lighten-3"
                id="basic-text1"
              >
                <span className="lnr lnr-magnifier"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideSearch;
