import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RightArrow } from "../../../../assets/icon-right_arrow.svg";

import { IHomeProjects } from "../../../../interfaces/cms";
import { Carousel } from "./Carousel/Carousel";

import "./Projects.styles.scss";

export const Projects = (projectData: IHomeProjects) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="background">
      <div className="projects">
        <Carousel title={projectData.title} />
        <div className="more-projects--div"> 
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
    </div>
  );
};
