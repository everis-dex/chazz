import React, { useEffect } from "react";

import { Nav, AppFooter } from "../index";

import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import { OurWorkIntro } from "../../../interfaces/interfaces";
import ourWorkIntro from "../../../content/ourworkintro.json";

import "./OurWork.styles.scss";

export const OurWork = () => {
  const lineBreakSymbol: string = "+";
  const typedOurWorkIntro: OurWorkIntro = ourWorkIntro[0];
  const introLines: string[] = typedOurWorkIntro.intro.split(lineBreakSymbol);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/work" />
      <ProjectsGrid introLines={introLines} />
      <AppFooter />
    </>
  );
};
