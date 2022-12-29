import React from "react";

import { AllowCookies, Nav } from "../index";

import home from "../../../content/pages/pages--home.json";
import { IHome } from "../../../interfaces/interfaces";
import { LineBreakerSelector } from "../../shared/LineBreaker/LineBreakerSelector";

import "./HomeHeader.styles.scss";

export const HomeHeader = () => {
  const typedHomeHeader: IHome = home.header;

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <LineBreakerSelector typedLines={typedHomeHeader.intro} />
        <h4>{typedHomeHeader.subintro}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
