import React, { useEffect } from "react";

import { work } from "../../../content/index";
import { AllowCookies } from "../../Home";
import { Footer, Nav } from "../../shared/index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav />
      <AllowCookies />
      <ProjectsGrid {...work} />
      <Footer />
    </>
  );
};
