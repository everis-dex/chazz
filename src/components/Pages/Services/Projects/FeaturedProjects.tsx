import React from "react";
import { Link } from "react-router-dom";

import service from "../../../../content/pages/services/services.json";
import projects from "../../../../content/projects.json";
import { IProject, IServicesProjects } from "../../../../interfaces/cms";

import "./FeaturedProjects.styles.scss";

export const FeaturedProjects = () => {
  const projectsData: IServicesProjects = service.projects;

  return (
    <div className="featured-projects">
      <h1 className="header">{projectsData.title}</h1>
      <div className="project-list">
        {projects.map(
          (project: IProject, index: number) =>
            index > 4 && (
              <div className="project" key={index}>
                <img loading="lazy" src={project.media.project} alt="Project" />
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
  );
};
