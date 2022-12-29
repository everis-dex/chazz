import React from "react";

import { AllowCookies, Nav } from "../index";

import { IHomeHeader } from "../../../interfaces/interfaces";
import { LineBreakerSelector } from "../../shared/LineBreaker/LineBreakerSelector";

import "./HomeHeader.styles.scss";

export const HomeHeader = (headerData: IHomeHeader) => {
  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <LineBreakerSelector typedLines={headerData.title} />
        <h4>{headerData.subtitle}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
