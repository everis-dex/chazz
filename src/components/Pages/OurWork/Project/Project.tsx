import React, { useState } from "react";

import "./Project.styles.scss";
import { Project } from "../../../../interfaces/interfaces";
import { Media } from "../../../../components/shared/Media/Media";

export const ProjectCard = (data: Project) => {
  const style = { width: "100%", height: "auto" };
  const [openDropdown, setOpenDropdown] = useState<boolean>(true);
  const dropdownText = openDropdown ? "Less" : "More";

  return (
    <div className="project-container">
      <div className="project-media">
        <Media src={data.image} style={style} alt={data.title} />
      </div>
      <div className="project-details">
        <p className="title">{data.title} —</p>
        <p className="subtitle">{data.subtitle}</p>
        <p className="properties">
          {data.branding}, {data.service}, {data.value}
        </p>
      </div>
      <div className="project-dropdown">
        <div className="dropdown">{dropdownText} information</div>
        <div className="body">{data.body}</div>
      </div>
    </div>
  );
};
