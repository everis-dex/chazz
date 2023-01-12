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
  console.log({ routesInfo });
  console.log({ disabledMenuOption });
  return (
    <nav className={`burger-nav ${isBurgerMenuOpen ? "active" : ""}`}>
      <ul className="burger-ul">
        {routesInfo.map(route => (
          <li className="burger-li" key={route.id}>
            {route.route !== disabledMenuOption && (
              <Link className="burger-a" to={route.route} onClick={toggleMenu}>
                {route.name}
              </Link>
            )}

            {route.route === disabledMenuOption && (
              <span className="burger-active" onClick={toggleMenu}>
                {route.name}
              </span>
            )}
          </li>
        ))}
      </ul>
      <DividingLine />
      <RRSS showTitle={false} />
    </nav>
  );
};
