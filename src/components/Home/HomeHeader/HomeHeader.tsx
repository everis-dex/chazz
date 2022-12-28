import React from "react";

import { AllowCookies, Nav } from "../index";

import home from "../../../content/home.json";
import { IHome } from "../../../interfaces/interfaces";
import { LineBreakerSelector } from "../../shared/LineBreaker/LineBreakerSelector";

import "./HomeHeader.styles.scss";

export const HomeHeader = () => {
  const typedHomeHeader: IHome = home[0];

  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
          <video className="video-header">
            <source src=""/>
          </video>
          <div className="play-video">
            <img src="../../../assets/Chazz_Logo.svg" alt="play" />
            <span>Play reel</span>
          </div>
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
