import React from "react";
import { Link } from "react-router-dom";

import { IHomeProjects } from "../../../../interfaces/interfaces";
import { Carrousel } from "./Carrousel/Carrousel";

import "./Projects.styles.scss";

export const Projects = (projectData: IHomeProjects) => {
  return (
    <div id="Projects">
      <Carrousel title={projectData.title} />
      <Link to={"/work"} className="more-projects">
        {projectData.more} →
      </Link>
    </div>
  );
};
