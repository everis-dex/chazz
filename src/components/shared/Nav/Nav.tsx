import React, { useState } from "react";

import { DisplayModes } from "../../../constants";
import { BurgerMenu, ChazzLogo, DesktopMenu } from "./index";

import "./Nav.styles.scss";

type Props = {
  isPlaying?: boolean;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: (a: boolean) => void;
  darkMode?: boolean;
};

export const Nav = ({ isPlaying = false, isBurgerMenuOpen, setIsBurgerMenuOpen, darkMode = false }: Props) => {
  const { color, activeStyle } = darkMode ? DisplayModes.dark : DisplayModes.light;
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
      <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} color={color} />
    </div>
  );
};
