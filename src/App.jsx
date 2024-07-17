
import React, { useEffect } from "react";
import $ from "jquery";
import "stellar.js";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ServicePartners from "./components/ServicePartners";
import AlaaS from "./components/AlaaS";
import Testimonial from "./components/Testimonial";
import Features from "./components/Features";
import NavAbout from "./components/navComponents/NavAbout";
import NavContact from "./components/navComponents/NavContact";


function App() {
  useEffect(() => {
    $(window).stellar();
  }, []);

  const location = useLocation();
  const isNavPage =
    location.pathname === "/about" || location.pathname === "/contact";
  return (
    <>
      {!isNavPage && (
        <>
          <Navbar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<NavAbout />} />
        <Route path="/contact" element={<NavContact />} />
      </Routes>
      {!isNavPage && (
        <>
          <Features />
          <AlaaS />
          <Testimonial />
          <ServicePartners />
          <Contact />
        </>
      )}
      <About />
      <Footer />
    </>
  );
}

export default App;
