import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../../../constants";

import "./BurgerMenuOptions.styles.scss";

type Props = {
  isOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  disabledMenuOption: string;
};

export const BurgerMenuOptions = ({ isOpen, toggleMenu, disabledMenuOption }: Props) => {
  return (
    <nav className={`burger-nav ${isOpen ? "active" : ""}`}>
      <ul className="burger-ul">
        {routesInfo.map(route => (
          <li className="burger-li" key={route.id}>
            <Link
              className={route.route !== disabledMenuOption ? "burger-a" : "burger-active"}
              to={route.route}
              onClick={toggleMenu}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
