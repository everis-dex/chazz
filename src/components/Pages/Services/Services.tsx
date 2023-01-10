import React, { useEffect } from "react";
import categories from "../../../content/categories.json";
import projects from "../../../content/projects.json";
import { Footer, Nav } from "../index";
import { Category } from "./Category/Category";
import "./Services.styles.scss";
import { ICategory, IProject } from "../../../interfaces/cms";
import { Link } from "react-router-dom";

export const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/services" isNavVisible={true} isPlaying={false} />
      <div className="services-container">
        <div className="services-header">
          <h1 className="title">Services</h1>
          {false && <h3 className="subtitle">Subtitle</h3>}
          <img src="assets/Services-header.png" alt="Header" />
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
        <h1 className="header">Featured Projects</h1>
        {projects.map((project: IProject, index: number) => (
          <div className="project" key={index}>
            <img src={project.image} alt="Project" />
            <p className="title">{project.title}</p>
          </div>
        ))}
        <Link to={"/work"} className="more-projects">
          More projects →
        </Link>
      </div>
      <Footer />
    </>
  );
};
