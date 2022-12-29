import React from "react";

import { Footer, Nav } from "../index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  return (
    <>
      <Nav color="black" disabledMenuOption="/work" />
      <ProjectsGrid />
      <Footer />
    </>
  );
};
