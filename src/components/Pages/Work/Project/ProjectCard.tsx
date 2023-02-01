import React, { useEffect, useState } from "react";

import { IProject } from "../../../../interfaces/cms";
import { Media } from "../../../shared/index";
import { Accordion } from "../../../shared/Accordion/Accordion";

import "./ProjectCard.styles.scss";

type Props = {
  data: IProject;
  format: string;
  columns?: string;
  full?: boolean;
  setCaseStudyId: (a: number) => void;
};

export const ProjectCard = ({ data, format, columns, setCaseStudyId }: Props) => {
  let [height] = useState<string>("auto");
  const image = data.media.project;

  const bodyParagraphs = data.body;

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
          <span className="title" onClick={() => setCaseStudyId(data.id)}>
            {data.title} —
          </span>
          <span className="description">{data.description}</span>
        </div>
        <span className="properties">{data.subtitle}</span>
      </div>
      {/* Accordion */}
      <Accordion title="" content={bodyParagraphs} ourWork={true} />
      <div className="non-accordion">{bodyParagraphs3}</div>
    </div>
  );
};
