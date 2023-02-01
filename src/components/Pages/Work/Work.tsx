import React, { useState, useEffect } from "react";

import { routesInfo } from "../../../constants";
import { work } from "../../../content/index";
import { AllowCookies } from "../../Home";
import { Footer, Nav } from "../../shared/index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
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
      <AllowCookies />
      <ProjectsGrid {...work} />
      <Footer />
    </>
  );
};
