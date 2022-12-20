import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../constants";

import "../Nav.scss";

interface Props {
  isOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  color: string;
  disabledMenuOption: string;
}

export const BurgerMenu = ({ isOpen, toggleMenu, color, disabledMenuOption }: Props) => {
  console.log({ disabledMenuOption })
  return (
    <div className={`burger-menu ${isOpen ? "active" : ""}`}>
      <input id="open-close" name="open-close" type="checkbox" value="" />
      <label
        htmlFor="open-close"
        className={color === "white" ? "toggle-button" : "toggle-button-pages"}
        onClick={toggleMenu}
      ></label>
      <nav className={`burger-nav ${isOpen ? "active" : ""}`}>
        <ul className="burger-ul">
          {routesInfo.map(route => {

            if (route.route != disabledMenuOption) {
              console.log({ disabledMenuOption }, "route", route.route)
              return (
                <li className="burger-li" key={route.id}>
                  <Link className="burger-a" to={route.route}>
                    {route.name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </div>
  );
};
