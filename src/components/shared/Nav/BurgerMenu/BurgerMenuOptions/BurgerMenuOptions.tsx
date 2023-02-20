import React from "react";
import { Link } from "react-router-dom";

import { availableRoutes } from "../../../../../constants";
import { DividingLine } from "../../../DividingLine/DividingLine";
import { RRSS } from "../../../Footer/CompanyInfo/CompanyInfoSections/RRSS";

import "./BurgerMenuOptions.styles.scss";

type Props = {
  isBurgerMenuOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenuOptions = ({ isBurgerMenuOpen, toggleMenu }: Props) => {
  const currentMenuOption = "/" + window.location.pathname.split("/")[1];

  return (
    <nav className={`burger-nav ${isBurgerMenuOpen ? "active" : ""}`}>
      <ul className="burger-ul">
        {availableRoutes.map(route => {
          return (
            <li className="burger-li" key={route.id}>
              {route.route !== currentMenuOption ? (
                <Link className="burger-a" to={route.route} onClick={toggleMenu}>
                  {route.name}
                </Link>
              ) : (
                <span className="burger-active" onClick={toggleMenu}>
                  {route.name}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <DividingLine />
      <RRSS showTitle={false} />
    </nav>
  );
};
