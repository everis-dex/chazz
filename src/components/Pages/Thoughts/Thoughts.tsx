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
        color="black"
        disabledMenuOption={routesInfo[4].route}
        isNavVisible={true}
        isPlaying={false}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        activeStyle="active-pink"
      />
      <p>Thoughts</p>
      <Footer />
    </>
  );
};
