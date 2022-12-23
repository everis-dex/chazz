import React from "react";

import { AllowCookies, Nav, HomeHeaderTitle } from "../index";

import home from "../../../content/home.json";
import { IHome } from "../../../interfaces/interfaces";

import "./HomeHeader.styles.scss";

export const HomeHeader = () => {
  const desktopLineBreakSymbol: string = "+";
  const mobileLineBreakSymbol: string = "*";
  const typedHomeHeader: IHome = home[0];
  const desktopTitleLines: string[] = typedHomeHeader.intro.split(desktopLineBreakSymbol);
  const mobileTitleLines: string[] = typedHomeHeader.intro.split(mobileLineBreakSymbol);

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

        <h4>{typedHomeHeader.subintro}</h4>
      </div>

      <AllowCookies />
    </>
  );
};
