import React from "react";

import { Footer, Nav } from "../index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import work from "../../../content/pages/work.json";

import "./Work.styles.scss";

export const Work = () => {
  const workData = work;

  return (
    <>
      <Nav color="black" disabledMenuOption="/work" />
      <ProjectsGrid {...workData} />
      <Footer />
    </>
  );
};
