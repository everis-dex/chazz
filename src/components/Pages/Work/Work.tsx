import React, { useEffect, useState } from "react";

import { routesInfo } from "../../../constants";
import { Footer, Nav } from "../../shared/index";
import { CaseStudy } from "./Project/CaseStudy/CaseStudy";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  const [caseStudyId, setCaseStudyId] = useState<number>(0);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav
        color="black"
        disabledMenuOption={routesInfo[2].route}
        isNavVisible={true}
        isPlaying={false}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        activeStyle="active-pink"
      />

      {caseStudyId === 0 ? <ProjectsGrid setCaseStudyId={setCaseStudyId} /> : <CaseStudy caseStudyId={caseStudyId} />}

      <Footer />
    </>
  );
};
