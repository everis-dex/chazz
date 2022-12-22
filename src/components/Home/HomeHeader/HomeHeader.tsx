import React from "react";

import { Nav } from "../../Nav/Nav";
import { AllowCookies } from "../../shared/AllowCookies/AllowCookies";

import { HomeHeaderInfo } from "../../../interfaces/interfaces";
import homeheader from "../../../content/homeheader.json";

import "./HomeHeader.scss";


export const HomeHeader = () => {

  const typedHomeHeader: HomeHeaderInfo = homeheader[0];

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <h1>{typedHomeHeader.title}</h1>
        <h4>{typedHomeHeader.subtitle}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
