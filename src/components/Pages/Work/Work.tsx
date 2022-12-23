import React, { useEffect } from "react";

import { Nav, AppFooter } from "../index";

import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import { IWork } from "../../../interfaces/interfaces";
import work from "../../../content/work.json";

import "./Work.styles.scss";

export const Work = () => {
  const lineBreakSymbol: string = "+";
  const typedWork: IWork = work[0];
  const introLines: string[] = typedWork.intro.split(lineBreakSymbol);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/work" />
      <ProjectsGrid introLines={introLines} />
      <AppFooter />
    </>
  );
};
