import React from "react";
import { Link } from "react-router-dom";

import { projects, services } from "../../../content/index";
import { IProject, IServicesProjects } from "../../../interfaces/cms";

import "./FeaturedProjects.styles.scss";

export const FeaturedProjects = () => {
  const projectsData: IServicesProjects = services.projects;

  return (
    <div className="featured-projects" data-aos="fade-up">
      {projectsData.title && <h1 className="header">{projectsData.title}</h1>}
      <div className="project-list">
        {/* List first 4 projects */}
        {projects.map(
          (project: IProject, index: number) =>
            index >= 4 && (
              <div className="project" key={index}>
                <img src={project.details.media.carousel} alt="Project" />
                {project.title && (
                  <p className="title">
                    {project.title} <span> —</span>
                  </p>
                )}
              </div>
            )
        )}
      </div>
      <div className="more-projects-div">
        <Link to={"/work"} className="more-projects">
          {projectsData.more} →
        </Link>
      </div>
    </div>
  );
};
