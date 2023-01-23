import React, { useState, useEffect } from "react";

import { work } from "../../../content/index";
import { Footer, Nav } from "../../shared/index";
import { CaseStudy } from "./Project/CaseStudy/CaseStudy";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {

  const [caseStudyId, setCaseStudyId] = useState<number>(0);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav />
      {caseStudyId === 0 ? <ProjectsGrid setCaseStudyId={setCaseStudyId} /> : <CaseStudy caseStudyId={caseStudyId} />}

      <Footer />
    </>
  );
};
