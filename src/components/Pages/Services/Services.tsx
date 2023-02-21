import React, { useEffect, useState } from "react";

import { categories, services } from "../../../content/index";
import { ICategory, IServicesHeader } from "../../../interfaces/cms";
import { AllowCookies, FeaturedProjects, LineBreakerSelector, Nav } from "../../shared/index";
import { Category } from "./Category/Category";

import "./Services.styles.scss";

export const Services = () => {
  const headerData: IServicesHeader = services.header;
  const [videoSource, setVideoSource] = useState<string>(getVideoSource());
  useEffect(() => window.scrollTo(0, 0), []);

  function getVideoSource(): string {
    return window.innerWidth < 1200 ? "/uploads/services_cabecera-768.mp4" : headerData.image;
  }

  window.onresize = () => setVideoSource(getVideoSource());

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="page-container">
        <div className="page-header services-header">
          <h1 className="header-title" data-aos="fade-up" data-aos-once="true">
            <LineBreakerSelector typedLines={headerData.title} />
          </h1>
          {headerData.subtitle && <h3 className="subtitle">{headerData.subtitle}</h3>}
          <video
            autoPlay
            className="video-height"
            muted={true}
            src={videoSource}
            loop
            playsInline
            data-aos="fade-up"
            data-aos-once="true"
          />
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
    </>
  );
};
