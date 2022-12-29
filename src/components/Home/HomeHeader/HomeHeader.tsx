import React from "react";

import { AllowCookies, Nav } from "../index";

import home from "../../../content/pages/home.json";
import { IHomeHeader } from "../../../interfaces/interfaces";
import { LineBreakerSelector } from "../../shared/LineBreaker/LineBreakerSelector";

import "./HomeHeader.styles.scss";

export const HomeHeader = () => {
  const typedHomeHEader: IHomeHeader = home.header;

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <LineBreakerSelector typedLines={typedHomeHEader.title} />
        <h4>{typedHomeHEader.subtitle}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
