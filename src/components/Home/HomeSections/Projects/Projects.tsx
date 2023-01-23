import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RightArrow } from "../../../../assets/icon-right_arrow.svg";

import { IHomeProjects } from "../../../../interfaces/cms";
// import { Carrousel } from "./Carrousel/Carrousel";

import "./Projects.styles.scss";

export const Projects = (projectData: IHomeProjects) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="background">
      <div className="projects">
        {/* <Carrousel title={projectData.title} /> */}
        <Link
          to={"/work"}
          className="more-projects"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {projectData.more}
          <RightArrow stroke={!isHover ? "#191919" : "#fc82a3"} className="icon-size" />
        </Link>
      </div>
    </div>
  );
};
