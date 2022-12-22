import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from "../../../../constants";

import "../Nav.styles.scss";

type Props = { color: string };

export const DesktopMenu = ({ color }: Props) => {
  return (
    <div className="nav">
      <ul>
        {routesInfo.map(route => (
          <li key={route.id}>
            {route.name && (
              <Link className={color !== "black" ? "" : "pagesDesktopNavItem"} to={route.route}>
                {route.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
