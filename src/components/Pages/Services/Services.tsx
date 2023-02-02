import React, { useState, useEffect } from "react";

import { routesInfo } from "../../../constants";

import { categories, services } from "../../../content/index";
import { ICategory, IServicesHeader } from "../../../interfaces/cms";
import { AllowCookies } from "../../Home";
import { FeaturedProjects, Footer, Nav } from "../../shared/index";
import { Category } from "./Category/Category";

import "./Services.styles.scss";

export const Services = () => {
  const headerData: IServicesHeader = services.header;

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav
        color="black"
        disabledMenuOption={routesInfo[1].route}
        isNavVisible={true}
        isPlaying={false}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        activeStyle="active-pink"
      />
      <AllowCookies />
      <div className="services-container">
        <div className="services-header">
          <h1 className="header-title">{headerData.title}</h1>
          {headerData.subtitle && <h3 className="subtitle">{headerData.subtitle}</h3>}
          <img loading="lazy" src={headerData.image} alt="Header" />
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
