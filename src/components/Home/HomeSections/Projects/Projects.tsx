import React from "react";

import { IHomeProjects } from "../../../../interfaces/cms";
import { MoreLink } from "../../../shared";
import { Carousel } from "./Carousel/Carousel";

import "./Projects.styles.scss";

export const Projects = (projectData: IHomeProjects) => {
  return (
    <div className="background">
      <div className="projects">
        <Carousel title={projectData.title} />
        <MoreLink text={projectData.more} link="/work" />
      </div>
    </div>
  );
};
