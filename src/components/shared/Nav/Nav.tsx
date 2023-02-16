import React, { useState } from "react";

import { DisplayModes } from "../../../constants";
import { BurgerMenu, ChazzLogo, DesktopMenu } from "./index";

import "./Nav.styles.scss";

type Props = { isPlaying?: boolean; darkMode?: boolean; AlertNavParent?: (a: boolean) => void; height?: number };

export const Nav = ({ isPlaying = false, darkMode = false, AlertNavParent, height = 11 }: Props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const { color, activeStyle } = darkMode ? DisplayModes.dark : DisplayModes.light;
  const [root] = useState(document.getElementById("root"));

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
    <div className="header-nav" style={{ height: `${height}vh` }}>
      <ChazzLogo color={color} isBurgerMenuOpen={isBurgerMenuOpen} height={height} />
      <DesktopMenu color={color} activeStyle={activeStyle} />
      <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} color={color} />
    </div>
  );
};
