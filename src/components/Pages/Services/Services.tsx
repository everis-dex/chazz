import React, { useEffect } from "react";

import { categories, services } from "../../../content/index";
import { ICategory, IServicesHeader } from "../../../interfaces/cms";
import { AllowCookies, FeaturedProjects, Footer, LineBreakerSelector, Nav } from "../../shared/index";
import { Category } from "./Category/Category";

import "./Services.styles.scss";

export const Services = () => {
  const headerData: IServicesHeader = services.header;
  useEffect(() => window.scrollTo(0, 0), []);

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
          <video autoPlay width="100%" height="auto" muted={true} loop>
            <source media="(max-width: 768px)" type="video/mp4" src="uploads/services_cabecera-768.mp4" />
            <source media="(min-width: 768px)" type="video/mp4" src={headerData.image} />
          </video>
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
