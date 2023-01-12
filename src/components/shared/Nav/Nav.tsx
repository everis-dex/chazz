import React, { useState } from "react";

import { ChazzLogo } from "./ChazzLogo/ChazzLogo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

import "./Nav.styles.scss";

type Props = {
  color: string;
  disabledMenuOption: string;
  isNavVisible: boolean;
  isPlaying: boolean;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: (a: boolean) => void;
};

export const Nav = ({
  color,
  disabledMenuOption,
  isNavVisible,
  isPlaying,
  isBurgerMenuOpen,
  setIsBurgerMenuOpen
}: Props) => {
  const [root] = useState(document.getElementById("root"));

  const toggleMenu = () => {
    if (!isPlaying) {
      setIsBurgerMenuOpen(!isBurgerMenuOpen);
      handleRootBehavior();
    }
  };

  const handleRootBehavior = () => {
    if (!root) return;
    root.style.height = isBurgerMenuOpen ? "auto" : "100vh";
    root.style.overflow = isBurgerMenuOpen ? "auto" : "hidden";
  };

  if (isNavVisible) {
    return (
      <div className="header-nav">
        <ChazzLogo color={color} isBurgerMenuOpen={isBurgerMenuOpen} />
        <DesktopMenu color={color} />
        <BurgerMenu
          isBurgerMenuOpen={isBurgerMenuOpen}
          toggleMenu={toggleMenu}
          color={color}
          disabledMenuOption={disabledMenuOption}
        />
      </div>
    );
  }

  return <></>;
};
