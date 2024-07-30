import React from "react";
import Nav from "./Nav";
import "../../index.css";

const NavContact = () => {
  return (
    <>
      <Nav />
      <section>
        <div
          className="jumbotron jumbotron-single d-flex align-items-center"
          style={{
            backgroundImage: `url(/img/The-AI-Lab-Original.jpg)`,
          }}
        >
          <div className="container text-center">
            <h1 className="display-2 mb-4">Contact Us</h1>
          </div>
        </div>
      </section>
      <section id="contact-form" className="bg-white">
        <div className="container">
          <div className="section-content">
            <div
              className="
            title-wrap aos-init aos-animate"
              data-aos="fade-up"
            >
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-sub-title">
                At The AI Lab, we value your input and are always eager to
                connect with you.
                <br />
                Whether you have a question, need assistance, or simply want to
                share your thoughts on AI and its future, we're here to listen.
              </p>
              <p className="section-sub-title">
                Please fill out the contact form below to get in touch with us.
                <br />
                Be sure to provide as much detail as possible so we can better
                assist you.
              </p>
            </div>
            <div className="row">
              <div
                className="col-md-8 offset-md-2 contact-form-holder mt-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div id="form-msg" className="hide" tabIndex="-1"></div>
                <form method="post" action id="contact-form" name="contact-us">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        id="name"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        id="email"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="number"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Phone"
                        id="phoneNumber"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="websiteUrl"
                        placeholder="Website"
                        id="websiteUrl"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Your Message ..."
                        id="message"
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-shadow btn-lg"
                        name="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="section-content pt-0">
            <div className="title-wrap aos-init aos-animate" data-aos="fade-up">
              <h2 className="section-title">Where To Find Us?</h2>
            </div>
            <div className="row text-center mt-4">
              <div className="col-md-3 aos-init aos-animate" data-aos="fade-up">
                <span className="lnr lnr-location fs-40 py-4 d-block"></span>

                <h5>LOCATION</h5>
                <p>100 Innovation Drive, Silicon Valley, CA 94025</p>
              </div>
              <div className="col-md-3 aos-init aos-animate" data-aos="fade-up">
                <span className="lnr lnr-clock fs-40 py-4 d-block"></span>

                <h5>WORKING TIME</h5>
                <p>Monday - Friday | 8:30 AM - 5:00 PM</p>
              </div>
              <div className="col-md-3 aos-init aos-animate" data-aos="fade-up">
                <span className="lnr lnr-phone fs-40 py-4 d-block "></span>

                <h5>CALL US</h5>
                <p>+1 (732) 491-3625</p>
              </div>
              <div className="col-md-3 aos-init aos-animate" data-aos="fade-up">
                <span className="lnr lnr-phone fs-40 py-4 d-block"></span>

                <h5>Email</h5>
                <p>info@theailab.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavContact;
