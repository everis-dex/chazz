import React, { useEffect } from "react";

import "./OurWork.styles.scss";
import { AppFooter } from "../../shared/AppFooter/AppFooter";
import { HomeSection4 } from "../../Home";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

export const OurWork = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <ProjectsGrid />
      <HomeSection4 />
      <AppFooter />
    </>
  );
};
