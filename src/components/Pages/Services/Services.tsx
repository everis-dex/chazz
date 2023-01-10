import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import categories from "../../../content/categories.json";
import projects from "../../../content/projects.json";
import { ICategory, IProject } from "../../../interfaces/cms";
import { Footer, Nav } from "../index";
import { Category } from "./Category/Category";
import service from "../../../content/pages/services/services.json";

import "./Services.styles.scss";

export const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/services" isNavVisible={true} isPlaying={false} />
      <div className="services-container">
        <div className="services-header">
          <h1 className="title">{service.header.title}</h1>
          {service.header.subtitle && <h3 className="subtitle">{service.header.subtitle}</h3>}
          <img src={service.header.image} alt="Header" />
        </div>
        <div className="services-content">
          {categories.map((category: ICategory, index: number) => (
            <div className="category" key={index}>
              <Category {...category} />
            </div>
          ))}
        </div>
      </div>
      <div className="services-projects">
        <h1 className="header">{service.projects.title}</h1>
        <div className="project-list">
          {projects.map(
            (project: IProject, index: number) =>
              index > 4 && (
                <div className="project" key={index}>
                  <img src={project.image} alt="Project" />
                  <p className="title">
                    {project.title} <span> —</span>
                  </p>
                </div>
              )
          )}
        </div>
        <Link to={"/work"} className="more-projects">
          More projects →
        </Link>
      </div>
      <Footer />
    </>
  );
};
