import React, { Fragment } from "react";

import { Nav } from "../../Nav/Nav";
import { AllowCookies } from "../../shared/AllowCookies/AllowCookies";

import { HomeHeaderInfo } from "../../../interfaces/interfaces";
import homeheader from "../../../content/homeheader.json";

import "./HomeHeader.styles.scss";

export const HomeHeader = () => {
  const lineBreakSymbol: string = "+";
  const typedHomeHeader: HomeHeaderInfo = homeheader[0];
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
