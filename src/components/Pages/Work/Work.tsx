import React from "react";

import { work } from "../../../content/index";
import { Nav } from "../../shared/index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  return (
    <>
      <Nav />
      <ProjectsGrid {...work} />
    </>
  );
};
