import React from "react";
// import { Link } from "react-router-dom";

import { IProject, IProjectDetails } from "../../../../interfaces/cms";
import { Accordion, LineBreakerSelector, Media } from "../../../shared";

import "./ProjectCard.styles.scss";

type Props = { project: IProject; format: string; columns?: string };

export const ProjectCard = ({ project, format, columns }: Props) => {
  const projectDetails: IProjectDetails = project.details;
  const image = projectDetails.media.project;
  // const caseURL = "case/" + project.id;

  return (
    <div className={`project-container ${columns}`} data-aos="fade-up" data-aos-once="false">
      <div className={`project-media ${format === "half" ? "half" : ""}`}>
        <Media src={image} alt={project.title} format={format} />
      </div>

      <div className="project-details" data-aos="fade-up" data-aos-once="false">
        <div className="project-title-container">
          {/* Replace span of title by Link, and change the hover of the title class in styles */}
          <span className="title">{project.title} —</span>
          <span className="description">{projectDetails.description}</span>
        </div>
        <span className="properties">{projectDetails.subtitle}</span>
      </div>
      {/* Accordion */}
      <Accordion title="" content={projectDetails.body} ourWork={true} />
      <div className="non-accordion" data-aos="fade-up" data-aos-once="false">
        <div className="linebreaker">
          <LineBreakerSelector typedLines={projectDetails.body} />
        </div>
      </div>
    </div>
  );
};
