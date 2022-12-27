import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Media } from "../../../../components/shared/Media/Media";
import { IProject } from "../../../../interfaces/interfaces";

import "./Project.styles.scss";

type Props = { data: IProject; columns?: string; height?: string; full?: boolean };

export const ProjectCard = ({ data, columns, height = "auto", full = false }: Props) => {
  const style = { width: "100%", height: height, objectFit: "cover" };
  const bodyParagraphs: string[] = data.body.replace("\r", "").split("\n");

  // Dropdown
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const dropdownText: string = openDropdown ? "Less" : "More";

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="project-container">
      <div className="project-media">
        <Media src={data.image} style={style} alt={data.title} />
      </div>

      <div className="project-details">
        <span className="title">{data.title} —</span>
        <span className="description">{data.description}</span>
        <span className="properties">{data.subtitle}</span>
      </div>

      <div className="non-accordion">{bodyParagraphs}</div>

      <div className="project-dropdown">
        <Accordion onSelect={handleDropdown} flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{dropdownText} information</Accordion.Header>
            <Accordion.Body>{bodyParagraphs}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
