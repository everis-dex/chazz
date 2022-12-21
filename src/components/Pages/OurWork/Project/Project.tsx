import React, { useState } from "react";
import { Accordion } from 'react-bootstrap';

import { Media } from "../../../../components/shared/Media/Media";
import { Project } from "../../../../interfaces/interfaces";

import "./Project.styles.scss";

type Props = { data: Project; columns?: string; height?: string; full?: boolean };


export const ProjectCard = ({ data, columns, height = "auto", full = false }: Props) => {
  const style = { width: "100%", height: height, "object-fit": "cover" }; // Adriana lo tiene puesto como object-fit, pero React da error. Aconseja objectFit
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
        <p className="title">{data.title} —</p>
        <p className="description">{data.description}</p>
        <p className="properties">{data.subtitle}</p>
      </div>

      <div className="non-accordion">{bodyParagraphs}</div>

      <Accordion onSelect={handleDropdown} flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{dropdownText} information</Accordion.Header>
          <Accordion.Body>
            {bodyParagraphs}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

  );
};
