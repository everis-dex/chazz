import React, { useEffect, useState } from "react";

import { Footer, Nav } from "../../shared/index";
import { Category } from "./Category/Category";
import { FeaturedProjects } from "./Projects/FeaturedProjects";

import { routesInfo } from "../../../constants";
import categories from "../../../content/categories.json";
import service from "../../../content/pages/services/services.json";
import { ICategory, IServicesHeader } from "../../../interfaces/cms";

import "./Services.styles.scss";

export const Services = () => {
  const headerData: IServicesHeader = service.header;

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
      <FeaturedProjects />
      <Footer />
    </>
  );
};
