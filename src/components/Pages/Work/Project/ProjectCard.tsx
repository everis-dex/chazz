import React from "react";
import { Link } from "react-router-dom";

import { IProject, IProjectDetails } from "../../../../interfaces/cms";
import { Accordion, LineBreakerSelector, Media } from "../../../shared";

import "./ProjectCard.styles.scss";

type Props = { data: IProject; format: string; columns?: string };

export const ProjectCard = ({ data, format, columns }: Props) => {
  const projectDetails: IProjectDetails = data.details;
  const image = projectDetails.media.project;
  const caseURL = "case/" + data.id;

  return (
    <div className={`project-container ${columns}`}>
      <div className={`project-media ${format === "half" ? "half" : ""}`}>
        <Media src={image} alt={data.title} format={format} />
      </div>

      <div className="project-details">
        <div className="project-title-container">
          {/* Replace span of title by Link, and change the hover of the title class in styles */}
          <Link to={caseURL} className="title" data-aos="fade-up" data-aos-once="true">
            {data.title} —
          </Link>
          <span className="description" data-aos="fade-up" data-aos-once="true">
            {projectDetails.description}
          </span>
        </div>
        <span className="properties" data-aos="fade-up" data-aos-once="true">
          {projectDetails.subtitle}
        </span>
      </div>
      {/* Accordion */}
      <Accordion title="" content={projectDetails.body} ourWork={true} />
      <div className="non-accordion" data-aos="fade-up" data-aos-once="true">
        <div className="linebreaker">
          <LineBreakerSelector typedLines={projectDetails.body} />
        </div>
      </div>
    </div>
  );
};
