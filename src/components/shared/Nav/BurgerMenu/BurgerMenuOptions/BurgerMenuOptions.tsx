import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../../../constants";
import { RRSS } from "../../../Footer/CompanyInfo/CompanyInfoSections/RRSS";

import "./BurgerMenuOptions.styles.scss";
import { DividingLine } from "../../../DividingLine/DividingLine";

type Props = {
  isBurgerMenuOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  disabledMenuOption: string;
};

export const BurgerMenuOptions = ({ isBurgerMenuOpen, toggleMenu, disabledMenuOption }: Props) => {
  return (
    <nav className={`burger-nav ${isBurgerMenuOpen ? "active" : ""}`}>
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
      <DividingLine />
      <RRSS showTitle={false} />
    </nav>
  );
};
