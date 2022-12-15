import React, { useState } from "react";

import { ChazzLogo } from "./ChazzLogo/ChazzLogo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

import "./Nav.scss";

const Nav = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsDesktop(!isDesktop);
  };

  return (
    <>
      <ChazzLogo />
      <DesktopMenu />
      <BurgerMenu isDesktop={isDesktop} toggleMenu={toggleMenu} />
    </>
  );
};

export default Nav;
