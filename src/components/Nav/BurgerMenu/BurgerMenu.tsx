import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../constants";

import "../Nav.scss";
import { BurgerIcon } from "./BurgerIcon/BurgerIcon";
import { BurgerMenuOptions } from "./BurgerMenuOptions/BurgerMenuOptions";

type Props = {
  isOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  color: string;
  disabledMenuOption: string;
};

export const BurgerMenu = ({ isOpen, toggleMenu, color, disabledMenuOption }: Props) => {
  console.log({ disabledMenuOption }, { isOpen }, { color });
  return (
    <div className={`burger-menu ${isOpen ? "active" : ""}`}>
      <BurgerIcon isOpen={isOpen} toggleMenu={toggleMenu} color={color} />
      <BurgerMenuOptions
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        color={color}
        disabledMenuOption={disabledMenuOption}
      />
    </div>
  );
};
