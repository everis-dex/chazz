import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../constants";

import "../Nav.scss";

interface Props {
  isDesktop: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
}

export const BurgerMenu = ({ isDesktop, toggleMenu }: Props) => {
  return (
    <div className={`burger-menu ${isDesktop ? "active" : ""}`}>
      <input id="open-close" name="open-close" type="checkbox" value="" />
      <label htmlFor="open-close" className="toggle-button" onClick={toggleMenu}></label>
      <nav className={`burger-nav ${isDesktop ? "active" : ""}`}>
        <ul className="burger-ul">
          {routesInfo.map(route => {
            return (
              <li className="burger-li" key={route.id}>
                <Link className="burger-a" to={route.route}>
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
