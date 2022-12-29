import React, { useEffect } from "react";

import { Nav, Footer } from "../index";

import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/work" />
      <ProjectsGrid />
      <Footer />
    </>
  );
};
