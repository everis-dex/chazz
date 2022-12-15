import React, { useState } from "react";

import { ChazzLogo } from "./ChazzLogo/ChazzLogo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

import "./Nav.scss";

type Props = { color: string };
const Nav = ({ color }: Props) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsDesktop(!isDesktop);
  };

  return (
    <>
      <ChazzLogo color={color} />
      <DesktopMenu color={color} />
      <BurgerMenu isDesktop={isDesktop} toggleMenu={toggleMenu} />
    </>
  );
};

export default Nav;
