import React, { useState } from "react";

import { Media } from "../../../../components/shared/Media/Media";
import { IProject } from "../../../../interfaces/cms";

import "./Project.styles.scss";

type Props = { data: IProject; columns?: string; height?: string; full?: boolean };

export const ProjectCard = ({ data, height = "auto", columns }: Props) => {
  const style = { width: "100%", height: height, objectFit: "cover" };
  const bodyParagraphs: string = data.body.substring(2);

  // Dropdown
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const dropdownText: string = openDropdown ? "Less" : "More";

  function handleDropdown(target: EventTarget) {
    const accordion = target as Element;
    // Rotate arrow
    const arrow = accordion.children[1] as HTMLElement;
    if (arrow) arrow.style.transform = openDropdown ? "rotate(90deg)" : "rotate(-90deg)";
    // Show pannel
    const panel = accordion.nextElementSibling as HTMLElement;
    if (panel) {
      const height = openDropdown ? 0 : panel.scrollHeight;
      panel.style.maxHeight = height + "px";
    }

    setOpenDropdown(!openDropdown);
  }

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

      <div className="non-accordion">{bodyParagraphs}</div>

      <div className="project-accordion">
        <button className="accordion" onClick={e => handleDropdown(e.target)}>
          <p>{dropdownText} information</p>
          <div className="accordion-arrow" />
        </button>
        <div className="panel">{bodyParagraphs}</div>
      </div>
    </div>
  );
};
