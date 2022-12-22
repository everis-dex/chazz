import React from "react";

import { Nav } from "../../Nav/Nav";
import { AllowCookies } from "../../shared/AllowCookies/AllowCookies";

import { HomeHeaderInfo } from "../../../interfaces/interfaces";
import homeheader from "../../../content/homeheader.json";

import "./HomeHeader.scss";

export const HomeHeader = () => {
  const lineBreakSymbol: string = "+";
  const typedHomeHeader: HomeHeaderInfo = homeheader[0];
  const titleLines: string[] = typedHomeHeader.title.split(lineBreakSymbol);
  console.log(titleLines);

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <h1>
          {titleLines.map((titleLine: string, index) => (
            <>
              {titleLine}
              <br />
            </>
          ))}
        </h1>
        <h4>{typedHomeHeader.subtitle}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
