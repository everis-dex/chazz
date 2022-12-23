import React, { useEffect } from "react";

import { Nav, AppFooter } from "../index";

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
