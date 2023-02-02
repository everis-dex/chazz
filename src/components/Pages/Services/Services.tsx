import React, { useEffect } from "react";

import { categories, services } from "../../../content/index";
import { ICategory, IServicesHeader } from "../../../interfaces/cms";
import { AllowCookies, FeaturedProjects, Footer, Nav, Media } from "../../shared/index";
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
          <h1 className="header-title">{headerData.title}</h1>
          {headerData.subtitle && <h3 className="subtitle">{headerData.subtitle}</h3>}
          <Media src={headerData.image} alt="Header" style={{ width: "100%", height: "auto" }} />
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
