import React from "react";
import 'linearicons/dist/web-font/style.css';
import "../index.css";

const Contact = () => {
  return (
    <section className="bg-white section-content">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 offset-lg-1 mb-5 mb-lg-0 aos-init aos-animate"
            data-aos="fade-right"
          >
            <div className="bg-white p-5 shadow">
              <div className="heading-section text-center">
                <h2 className="mb-4">Contact Us</h2>
              </div>
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
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                  <div className="col-md-12 form-group">
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
          <div
            className="col-lg-4 offset-lg-1 aos-init aos-animate"
            data-aos="fade-left"
          >
            <h2 className="mb-4">The AI Lab</h2>
            <p className="mb-4">
              At The AI Lab, we value your input and are always eager to connect
              with you. Whether you have a question, need assistance, or simply
              want to share your thoughts on AI and its future, we're here to
              listen.
            </p>
            <p className="mb-4">
              Please fill out the contact form below to get in touch with us. Be
              sure to provide as much detail as possible so we can better assist
              you.
            </p>
            <ul className="list-inline py-2">
              <li className="list-inline-item text-center">
                <span className="lnr fs-40 lnr-magic-wand"></span>
                <p>Custom AI Solutions</p>
              </li>
              <li className="list-inline-item text-center">
                <span className="lnr fs-40 lnr-cog"></span>
                <p>Scalable AI Models</p>
              </li>
              <li className="list-inline-item text-center">
                <span className="lnr fs-40 lnr-rocket"></span>
                <p>Versatile and user-friendly AI</p>
              </li>
            </ul>
            <small>
                <i>
                Please note, your privacy is paramount to us. We assure you that your information will be kept confidential and used
                only to respond to your inquiry.
                </i>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
