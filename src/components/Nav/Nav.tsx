import React, { useState } from "react";

import "./nav.scss";
import { ChazzLogo } from './ChazzLogo/ChazzLogo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';

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
