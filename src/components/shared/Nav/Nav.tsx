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
  const [root] = useState(document.getElementById("root"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleRootBehavior();
  };

  const handleRootBehavior = () => {
    if (!root) return;
    root.style.height = isOpen ? "auto" : "100vh";
    root.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="header-nav">
      <ChazzLogo color={color} isOpen={isOpen} />
      <DesktopMenu color={color} />
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} color={color} disabledMenuOption={disabledMenuOption} />
    </div>
  );
};
