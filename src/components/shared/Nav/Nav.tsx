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
  activeStyle: string;
};

export const Nav = ({
  color,
  disabledMenuOption,
  isNavVisible,
  isPlaying,
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
  activeStyle
}: Props) => {
  const [root] = useState(document.getElementById("root"));

  function toggleMenu(): void {
    if (!isPlaying) {
      setIsBurgerMenuOpen(!isBurgerMenuOpen);
      handleRootBehavior();
    }
  }

  function handleRootBehavior(): void {
    if (!root) return;
    root.style.height = isBurgerMenuOpen ? "auto" : "100vh";
    root.style.overflow = isBurgerMenuOpen ? "auto" : "hidden";
  }

  if (isNavVisible) {
    return (
      <div className="header-nav">
        <ChazzLogo color={color} isBurgerMenuOpen={isBurgerMenuOpen} />
        <DesktopMenu color={color} activeStyle={activeStyle} />
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
