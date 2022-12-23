import React from "react";

import { Nav } from "../../Nav/Nav";
import { AllowCookies } from "../../shared/AllowCookies/AllowCookies";

import { HomeHeaderInfo } from "../../../interfaces/interfaces";
import homeheader from "../../../content/homeheader.json";

import "./HomeHeader.scss";
import { LineBreakerSelector } from "../../shared/LineBreaker/LineBreakerSelector";

export const HomeHeader = () => {
  const homeHeaderInfo: HomeHeaderInfo = homeheader[0];

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <LineBreakerSelector typedLines={homeHeaderInfo.title} />
        <h4>{homeHeaderInfo.subtitle}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
