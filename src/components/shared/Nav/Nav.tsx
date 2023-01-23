import React, { useState } from "react";

import { BurgerMenu, ChazzLogo, DesktopMenu } from "./index";

import "./Nav.styles.scss";

type Props = {
  color: string;
  disabledMenuOption: string;
  isPlaying: boolean;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: (a: boolean) => void;
  activeStyle: string;
};

export const Nav = ({
  color,
  disabledMenuOption,
  isPlaying,
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
  activeStyle
}: Props) => {
  const [root] = useState(document.getElementById("root"));

  function toggleMenu(): void {
    if (isPlaying) return;

    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    handleRootBehavior();
  }

  function handleRootBehavior(): void {
    if (!root) return;
    root.style.height = isBurgerMenuOpen ? "auto" : "100vh";
    root.style.overflow = isBurgerMenuOpen ? "auto" : "hidden";
  }

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
};
