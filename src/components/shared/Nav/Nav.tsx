import React, { useState } from "react";

import { DisplayModes } from "../../../constants";
import { BurgerMenu, ChazzLogo, DesktopMenu } from "./index";

import "./Nav.styles.scss";

type Props = { isPlaying?: boolean; darkMode?: boolean; AlertNavParent?: (a: boolean) => void };

export const Nav = ({ isPlaying = false, darkMode = false, AlertNavParent }: Props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [root] = useState(document.getElementById("root"));

  const displayMode = darkMode ? DisplayModes.dark : DisplayModes.light;
  const { color } = displayMode;
  const logoColor = isBurgerMenuOpen ? "white" : color;

  function toggleMenu(): void {
    if (isPlaying) return;
    if (AlertNavParent) AlertNavParent(!isBurgerMenuOpen);

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
      <ChazzLogo color={logoColor} />
      <DesktopMenu {...displayMode} />
      <BurgerMenu color={color} isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};
