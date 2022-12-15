import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../constants";

import "../Nav.scss";

type Props = { color: string };
export const DesktopMenu = ({ color }: Props) => {
  return (
    <div className="nav">
      <ul>
        {routesInfo.map(route => {
          return (
            <li key={route.id}>
              <Link style={{ color: color }} to={route.route}>
                {route.name}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
