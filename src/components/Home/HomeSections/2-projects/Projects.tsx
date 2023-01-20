import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IHomeProjects } from "../../../../interfaces/cms";
import { Carrousel } from "./Carrousel/Carrousel";

import "./Projects.styles.scss";

import rightArrow from "../../../../assets/icn_arrow.svg";
import rightArrowHover from "../../../../assets/icn_arrow_hover.svg";

export const Projects = (projectData: IHomeProjects) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  function handleHover(): void {
    setIsHover(true);
  }

  function handleNoHover(): void {
    setIsHover(false);
  }

  return (
    <div className="background">
      <div id="Projects">
        <Carrousel title={projectData.title} />
        <Link to={"/work"} className="more-projects" onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
          {projectData.more}{" "}
          <img src={!isHover ? rightArrow : rightArrowHover} className="icon-size" alt="right-arrow" />
        </Link>
      </div>
    </div>
  );
};
