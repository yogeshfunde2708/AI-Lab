import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from 'react-owl-carousel';

const ServicePartners = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  };

  const partners = [
    { src: "/img/microsoft.png", width: "80%", height: "80%" },
    { src: "/img/google_cloud.png" },
    { src: "/img/nvidia.png" },
    { src: "/img/intel.png" },
    { src: "/img/ibm.png" },
    { src: "/img/aws.png", width: "80%", height: "80%" },
  ];

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
        <div className="section-content" data-aos="fade-up">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap mb-5 text-white">
                <h2>Service Partners</h2>
              </div>
            </div>
            <div className="col-md-12 client-holder">
              <OwlCarousel className="client-slider" {...options}>
                {partners.map((partner, index) => (
                  <div key={index} className="client-item">
                    <img
                      className="img-responsive"
                      width={partner.width || "100%"}
                      height={partner.height || "100%"}
                      src={partner.src}
                      alt=""
                    />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePartners;

