import React from "react";
import { useEffect } from "react";

import { Footer, Nav } from "../index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import { workInfo as work } from "../../../content/index";

import "./Work.styles.scss";

export const Work = () => {
  const workData = work;

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/work" isNavVisible={true} isPlaying={false} />
      <ProjectsGrid {...workData} />
      <Footer />
    </>
  );
};
