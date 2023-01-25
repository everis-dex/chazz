import React from "react";

import { IHomeProjects } from "../../../../interfaces/cms";
import { MoreLink } from "../../../shared";
import { Carrousel } from "./Carrousel/Carrousel";

import "./Projects.styles.scss";

export const Projects = (projectData: IHomeProjects) => {
  return (
    <div className="background">
      <div className="projects">
        <Carrousel title={projectData.title} />
        <MoreLink text={projectData.more} link="/work" />
      </div>
    </div>
  );
};
