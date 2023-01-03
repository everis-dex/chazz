import React from "react";

import { BurgerIcon } from "./BurgerIcon/BurgerIcon";
import { BurgerMenuOptions } from "./BurgerMenuOptions/BurgerMenuOptions";

import "./BurgerMenu.styles.scss";

type Props = {
  isOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  color: string;
  disabledMenuOption: string;
};

export const BurgerMenu = ({ isOpen, toggleMenu, color, disabledMenuOption }: Props) => {
  return (
    <div className={`burger-menu ${isOpen ? "active" : ""}`}>
      <BurgerIcon isOpen={isOpen} toggleMenu={toggleMenu} color={color} />
      <BurgerMenuOptions isOpen={isOpen} toggleMenu={toggleMenu} disabledMenuOption={disabledMenuOption} />
    </div>
  );
};
