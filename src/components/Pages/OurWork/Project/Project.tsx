import React, { useState } from "react";

import { Media } from "../../../../components/shared/Media/Media";
import { Project } from "../../../../interfaces/interfaces";

import "./Project.styles.scss";

type Props = { data: Project; columns?: string; height?: string; full?: boolean };

export const ProjectCard = ({ data, columns, height = "auto", full = false }: Props) => {
  const style = { width: "100%", height: height, "object-fit": "cover" };
  const bodyParagraphs: string[] = data.body.replace("\r", "").split("\n");

  // Dropdown
  const [openDropdown, setOpenDropdown] = useState<boolean>(true);
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
      <div className="project-dropdown">
        <div className="dropdown" onClick={handleDropdown}>
          {dropdownText} information
          <img id="arrow" className="arrow" src="/assets/dropdown_arrow.svg" alt="arrow" />
        </div>
        <div className="body" style={{ columnCount: full ? 2 : 1 }}>
          {bodyParagraphs.map((paragraph: string, index: number) => {
            return paragraph !== "" ? <p key={index}>{paragraph}</p> : paragraph;
          })}
        </div>
      </div>
    </div>
  );
};
