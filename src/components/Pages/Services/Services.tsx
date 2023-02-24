import React, { useState } from "react";

import { categories, services } from "../../../content/index";
import { ICategory, IPageHeader } from "../../../interfaces/cms";
import { ScrollToTop } from "../../../../utils/utils";
import { AllowCookies, FeaturedProjects, LineBreakerSelector, Media, Nav } from "../../shared";
import { Category } from "./Category/Category";

import "./Services.styles.scss";

export const Services = () => {
  ScrollToTop();
  const headerData: IPageHeader = services.header;
  const [videoSource, setVideoSource] = useState<string>(getVideoSource());

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
          <Media src={videoSource} alt="Header" className="video-height" />
        </div>
        {/* Categories section */}
        <div className="services-categories">
          {categories.map((category: ICategory, index: number) => (
            <div className="category" key={index} data-aos="fade-up" data-aos-once="true">
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
