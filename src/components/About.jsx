import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section
        className="bg-fixed overlay"
        style={{
          backgroundImage: `url(/img/The-AI-Lab-background.jpg)`,
          backgroundPosition: "0% -78.165px",
        }}
        data-stellar-background-ratio="0.8"
      >
        <div className="container">
          <div
            className="section-content aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="row text-white">
              <div className="col-md-12 text-center ">
                <h2 className="mb-2">The AI Lab</h2>
                <p>
                  Ready to unlock the future of AI? Click the 'Sign Up' button
                  now to join The AI Lab. By signing up, you'll gain access to a
                  world of AI knowledge, innovative services, and cutting-edge
                  technologies. Join our community, enhance your understanding
                  of AI, and become part of the technology revolution. Don't
                  wait, the future is just a click away!
                </p>
                <Link className="btn btn-outline-primary btn-lg" to=" ">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
