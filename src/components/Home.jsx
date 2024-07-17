import React from "react";
import "../index.css";

const Home = () => {
  return (
    <div className="jumbotron d-flex align-items-center">
      <div className="container text-center">
        <h3 className="display-3 mb-4">The</h3>
        <h1 className="display-1 mb-4">AI Lab</h1>
      </div>
      <div className="rectangle-1"></div>
      <div className="rectangle-2"></div>
      <div className="rectangle-transparent-1"></div>
      <div className="rectangle-transparent-2"></div>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <div className="triangle triangle-1">
      <img src="\img\obj_triangle.png" alt=" " />
      </div>
      <div className="triangle triangle-2">
        <img src="\img\obj_triangle.png" alt=" " />
      </div>
      <div className="triangle triangle-3">
        <img src="\img\obj_triangle.png" alt=" " />
      </div>
      <div className="triangle triangle-4">
        <img src="\img\obj_triangle.png" alt=" " />
      </div>
    </div>
  );
};

export default Home;
