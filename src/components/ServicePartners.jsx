import React,{useEffect, useState} from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from 'jquery';
import 'owl.carousel';

const ServicePartners = () => {
    const [translateX, setTranslateX] = useState(-940);
    const positions = [-940, -1096, -1253, -1410, -1566, -1723];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % positions.length;
            setTranslateX(positions[nextIndex]);
            return nextIndex;
          });
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);
    
  return (
    <section
      className="overlay bg-fixed"
      style={{
        backgroundImage: `url(/img/The-AI-Lab-background.jpg)`,
        backgroundPosition: "0% -64.32px",
      }}
      data-stellar-background-ratio="0.8"
    >
      <div className="container">
        <div
          className="section-content"
          data-aos="fade-up"
        >
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap mb-5 text-white">
                <h2>Service Partners</h2>
              </div>
            </div>
            <div className="col-md-12 client-holder">
              <div className="client-slider owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage" 
                     style={{
                        transform: `translate3d(${translateX}px, 0px, 0px)`,
                        transition: 'all 1s ease 0s',
                        width: '2821px',
                      }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          width="80%"
                          height="80%"
                          src="\img\microsoft.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\google_cloud.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\nvidia.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\intel.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\ibm.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          width="80%"
                          height="80%"
                          src="\img\aws.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\microsoft.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\google_cloud.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\nvidia.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\intel.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\ibm.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                           width='80%'
                          height='80%'
                          src="\img\aws.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\microsoft.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\google_cloud.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\nvidia.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\intel.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                          src="\img\ibm.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "146.667px", marginRight: "10px" }}
                    >
                      <div className="client-item">
                        <img
                          className="img-responsive"
                           width='80%'
                          height='80%'
                          src="\img\aws.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePartners;
