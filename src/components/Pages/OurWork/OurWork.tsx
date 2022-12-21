import React, { useEffect } from "react";

import { Nav } from "../../Nav/Nav";
import { AppFooter } from "../../shared/AppFooter/AppFooter";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./OurWork.styles.scss";

export const OurWork = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/work" />
      <ProjectsGrid />
      <AppFooter />
    </>
  );
};
