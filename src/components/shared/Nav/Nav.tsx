import React, { useState } from "react";

import { ChazzLogo } from "./ChazzLogo/ChazzLogo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

import "./Nav.styles.scss";

type Props = {
  color: string;
  disabledMenuOption: string;
};

export const Nav = ({ color, disabledMenuOption }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-nav">
      <ChazzLogo color={color} isOpen={isOpen} />
      <DesktopMenu color={color} />
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} color={color} disabledMenuOption={disabledMenuOption} />
    </div>
  );
};