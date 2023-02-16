import React from "react";
import { Link } from "react-router-dom";

import { availableRoutes } from "../../../../constants";

import "../Nav.styles.scss";

type DisplayMode = { color: string; activeStyle: string };

export const DesktopMenu = (displayMode: DisplayMode) => {
  const { color, activeStyle } = displayMode;
  const currentPage = "/".concat(window.location.pathname.split("/")[1]);

  return (
    <div className="nav">
      <ul>
        {availableRoutes.map(route => (
          <li key={route.id}>
            {route.name && (
              <>
                {route.route !== currentPage ? (
                  <Link className={color !== "black" ? "" : "pagesDesktopNavItem"} to={route.route}>
                    {route.name}
                  </Link>
                ) : (
                  <span className={activeStyle}>{route.name}</span>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
