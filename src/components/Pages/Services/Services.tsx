import React, { useEffect, useState } from "react";

import { categories, services } from "../../../content/index";
import { ICategory, IServicesHeader } from "../../../interfaces/cms";
import { AllowCookies, FeaturedProjects, Footer, LineBreakerSelector, Nav } from "../../shared/index";
import { Category } from "./Category/Category";

import "./Services.styles.scss";

export const Services = () => {
  const headerData: IServicesHeader = services.header;
  const [videoSource, setVideoSource] = useState<string>(
    window.innerWidth < 1200 ? "uploads/services_cabecera-768.mp4" : headerData.image
  );
  useEffect(() => window.scrollTo(0, 0), []);

  window.onresize = () => {
    if (window.innerWidth < 1200) {
      console.log("🚀 ~ file: Services.tsx:18 ~ Services ~ window.innerWidth", window.innerWidth);
      setVideoSource("uploads/services_cabecera-768.mp4");
    } else {
      setVideoSource(headerData.image);
    }
  };

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="services-container">
        <div className="services-header">
          <h1 className="header-title">
            <LineBreakerSelector typedLines={headerData.title} />
          </h1>
          {headerData.subtitle && <h3 className="subtitle">{headerData.subtitle}</h3>}
          <video autoPlay className="video-height" muted={true} src={videoSource} loop playsInline />
        </div>
        {/* Categories section */}
        <div className="services-categories">
          {categories.map((category: ICategory, index: number) => (
            <div className="category" key={index}>
              <Category {...category} />
            </div>
          ))}
        </div>
      </div>
      {/* Projects section */}
      <FeaturedProjects />
      <Footer />
    </>
  );
};
