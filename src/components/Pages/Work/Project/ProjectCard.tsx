import React from "react";
import { Link } from "react-router-dom";

import { IProject, IProjectDetails } from "../../../../interfaces/cms";
import { Accordion, Media } from "../../../shared";

import "./ProjectCard.styles.scss";

type Props = { data: IProject; format: string; columns?: string };

export const ProjectCard = ({ data, format, columns }: Props) => {
  const projectDetails: IProjectDetails = data.details;
  const image = projectDetails.media.project;
  const caseURL = "case/" + data.id;

  const bodyParagraphs = projectDetails.body;
  const bodyParagraphs1: string = bodyParagraphs.charCodeAt(0) === 10 ? bodyParagraphs.substring(1) : bodyParagraphs;
  const bodyParagraphs2: string = bodyParagraphs1.charCodeAt(0) === 13 ? bodyParagraphs1.substring(1) : bodyParagraphs1;
  const bodyParagraphs3: string = bodyParagraphs2.charCodeAt(0) === 8 ? bodyParagraphs2.substring(1) : bodyParagraphs2;

  return (
    <div className={`project-container ${columns}`}>
      <div className={`project-media ${format === "half" ? "half" : ""}`}>
        <Media src={image} style={{ width: "100%" }} alt={data.title} format={format} />
      </div>

      <div className="project-details">
        <div className="project-title-container">
          {/* Sustituir span de title por Link, y cambiar en styles el hover de la clase title */}
          <Link to={caseURL} className="title">
            {data.title} —
          </Link>
          <span className="description">{projectDetails.description}</span>
        </div>
        <span className="properties">{projectDetails.subtitle}</span>
      </div>
      {/* Accordion */}
      <Accordion title="" content={bodyParagraphs} ourWork={true} />
      <div className="non-accordion">{bodyParagraphs3}</div>
    </div>
  );
};
