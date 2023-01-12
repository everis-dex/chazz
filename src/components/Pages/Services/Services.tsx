import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Footer, Nav } from "../index";
import { Category } from "./Category/Category";

import categories from "../../../content/categories.json";
import service from "../../../content/pages/services/services.json";
import projects from "../../../content/projects.json";
import { ICategory, IProject, IServicesHeader, IServicesProjects } from "../../../interfaces/cms";
import { routesInfo } from "../../../constants";

import "./Services.styles.scss";

export const Services = () => {
  const projectsData: IServicesProjects = service.projects;
  const headerData: IServicesHeader = service.header;

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption={routesInfo[1].route} isNavVisible={true} isPlaying={false} isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
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
      <div className="services-projects">
        <h1 className="header">{projectsData.title}</h1>
        <div className="project-list">
          {projects.map(
            (project: IProject, index: number) =>
              index > 4 && (
                <div className="project" key={index}>
                  <img loading="lazy" src={project.image} alt="Project" />
                  <p className="title">
                    {project.title} <span> —</span>
                  </p>
                </div>
              )
          )}
        </div>
        <Link to={"/work"} className="more-projects">
          {projectsData.more} →
        </Link>
      </div>
      <Footer />
    </>
  );
};
