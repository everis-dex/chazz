import React from "react";

import { Nav } from "../../Nav/Nav";
import { AllowCookies } from "../../shared/AllowCookies/AllowCookies";

import { HomeHeaderInfo } from "../../../interfaces/interfaces";
import homeheader from "../../../content/homeheader.json";

import "./HomeHeader.scss";
import { Fragment } from "react";
import { HomeHeaderTitle } from "./HomeHeaderTitle/HomeHeaderTitle";

export const HomeHeader = () => {
  const desktopLineBreakSymbol: string = "+";
  const mobileLineBreakSymbol: string = "*";
  const typedHomeHeader: HomeHeaderInfo = homeheader[0];
  const desktopTitleLines: string[] = typedHomeHeader.title.split(desktopLineBreakSymbol);
  const mobileTitleLines: string[] = typedHomeHeader.title.split(mobileLineBreakSymbol);

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <div className="desktop-title">
          <HomeHeaderTitle titleLines={desktopTitleLines} uselessLineBreakSymbol={mobileLineBreakSymbol} />
        </div>

        <div className="mobile-title">
          <HomeHeaderTitle titleLines={mobileTitleLines} uselessLineBreakSymbol={desktopLineBreakSymbol} />
        </div>

        <h4>{typedHomeHeader.subtitle}</h4>
      </div>



      <AllowCookies />
    </>
  );
};
