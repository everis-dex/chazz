import React, { Fragment } from "react";

import { Nav, AllowCookies } from "../index";

import { IHome } from "../../../interfaces/interfaces";
import home from "../../../content/home.json";

import "./HomeHeader.styles.scss";

export const HomeHeader = () => {
  const lineBreakSymbol: string = "+";
  const typedHomeHeader: IHome = home[0];
  const titleLines: string[] = typedHomeHeader.title.split(lineBreakSymbol);

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <h1>
          {titleLines.map((titleLine: string, index: number) => (
            <Fragment key={index}>
              {titleLine}
              <br />
            </Fragment>
          ))}
        </h1>
        <h4>{typedHomeHeader.subtitle}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
