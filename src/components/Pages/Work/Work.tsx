import React, { useEffect } from "react";

import { Nav, AppFooter } from "../index";

import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import { WorkIntro } from "../../../interfaces/interfaces";
import ourWorkIntro from "../../../content/ourworkintro.json";

import "./Work.styles.scss";

export const Work = () => {
  const lineBreakSymbol: string = "+";
  const typedWorkIntro: WorkIntro = ourWorkIntro[0];
  const introLines: string[] = typedWorkIntro.intro.split(lineBreakSymbol);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/work" />
      <ProjectsGrid introLines={introLines} />
      <AppFooter />
    </>
  );
};
