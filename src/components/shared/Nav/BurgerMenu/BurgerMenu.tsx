import React from "react";

import { BurgerIcon } from "./BurgerIcon/BurgerIcon";
import { BurgerMenuOptions } from "./BurgerMenuOptions/BurgerMenuOptions";

import "./BurgerMenu.styles.scss";

type Props = {
  isBurgerMenuOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  color: string;
  disabledMenuOption: string;
};

export const BurgerMenu = ({ isBurgerMenuOpen, toggleMenu, color, disabledMenuOption }: Props) => {
  return (
    <div className={`burger-menu ${isBurgerMenuOpen ? "active" : ""}`}>
      <BurgerIcon isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} color={color} />
      <BurgerMenuOptions isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} disabledMenuOption={disabledMenuOption} />
    </div>
  );
};
