import React from "react";
import { useEffect } from "react";

import { Footer, Nav } from "../index";
import "./Services.styles.scss";

export const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/services" isNavVisible={true} isPlaying={false} />
      <div className="services-container">
        <h1 className="services-header">Services</h1>
        <img src="assets/Services-header.png" alt="Header" />
        <div className="services-container--content"></div>
      </div>
      <Footer />
    </>
  );
};
