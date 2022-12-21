import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../constants";

import "../Nav.scss";

type Props = { color: string };

export const DesktopMenu = ({ color }: Props) => {
  console.log({ color });
  return (
    <div className="nav">
      <ul>
        {routesInfo.map(route => {
          return (
            <li key={route.id}>
              {route.name && (
                // <Link className="aaa" style={{ color: color }} to={route.route}>
                <Link className={color != "black" ? "" : "pagesDesktopNavItem"} to={route.route}>
                  {route.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
