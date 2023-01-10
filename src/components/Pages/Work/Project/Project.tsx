import React from "react";

import { Media } from "../../../../components/shared/Media/Media";
import { IProject } from "../../../../interfaces/cms";
import { Accordion } from "../Accordion/Accordion";

import "./Project.styles.scss";

type Props = { data: IProject; columns?: string; height?: string; full?: boolean };

export const ProjectCard = ({ data, height = "auto", columns }: Props) => {
  const style = { width: "100%", height, objectFit: "cover" };

  const bodyParagraphs = data.body.substring(1);

  const bodyParagraphs1: string = bodyParagraphs.charCodeAt(0) === 10 ? bodyParagraphs.substring(1) : bodyParagraphs;
  const bodyParagraphs2: string = bodyParagraphs1.charCodeAt(0) === 13 ? bodyParagraphs1.substring(1) : bodyParagraphs1;
  const bodyParagraphs3: string = bodyParagraphs2.charCodeAt(0) === 8 ? bodyParagraphs2.substring(1) : bodyParagraphs2;

  return (
    <div className={`project-container ${columns}`}>
      <div className="project-media">
        <Media src={data.image} style={style} alt={data.title} />
      </div>

      <div className="project-details">
        <div className="project-title-container">
          <span className="title">{data.title} —</span>
          <span className="description">{data.description}</span>
        </div>
        <span className="properties">{data.subtitle}</span>
      </div>
      {/* Accordion */}
      <Accordion content={bodyParagraphs} />
      <div className="non-accordion">{bodyParagraphs3}</div>
    </div>
  );
};
