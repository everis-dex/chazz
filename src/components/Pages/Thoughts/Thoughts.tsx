import React from "react";
import { useEffect, useState } from "react";

import { Footer, Nav } from "../../shared/index";

import { routesInfo } from "../../../constants";

export const Thoughts = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Nav
        disabledMenuOption={routesInfo[4].route}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
      />
      <p>Thoughts</p>
      <Footer />
    </>
  );
};
