import React from "react";
import { Link } from "react-router-dom";

import { routesInfo, baseUrl } from '../../../../constants';

import "../Nav.styles.scss";

type Props = { color: string };

export const DesktopMenu = ({ color }: Props) => {

  const currentUrl: string = window.location.href;
  const currentPage: string = currentUrl.replace(baseUrl, '/');

  return (
    <div className="nav">
      <ul>
        {routesInfo.map(route => (
          <li key={route.id}>
            {route.name && (
              <>
                {(route.route != currentPage)
                  ? (
                    <Link className={color !== "black" ? "" : "pagesDesktopNavItem"} to={route.route}>
                      {route.name}
                    </Link>
                  )
                  :
                  (
                    <span className="active">
                      {route.name}
                    </span>
                  )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
