import React, { useEffect, useState } from "react";

import { work } from "../../../content/index";
import { Footer, Nav } from "../../shared/index";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";

import "./Work.styles.scss";

export const Work = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      <ProjectsGrid {...work} />
      <Footer />
    </>
  );
};
