import React from "react";

import { work } from "../../../content/index";
import { useScrollToTop } from "../../../utils/utils";
import { Nav } from "../../shared/index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  useScrollToTop();
  return (
    <>
      <Nav />
      <ProjectsGrid {...work} />
    </>
  );
};
