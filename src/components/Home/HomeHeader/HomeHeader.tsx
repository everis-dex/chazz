import React, { useState, useEffect, useRef } from "react";

import { AllowCookies, LineBreakerSelector, Nav } from "../../shared/index";
import { VideoHeader } from "./VideoHeader/VideoHeader";

import { IHomeHeader } from "../../../interfaces/cms";

import "./HomeHeader.styles.scss";

const controlTextOptions = { play: "Play", stop: "Stop" };

export const HomeHeader = (headerData: IHomeHeader) => {
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(true);

  function toggleNavVisible(bool?: boolean): void {
    const value: boolean = bool ? bool : !navVisible;
    setNavVisible(value);
  }

  const AlertNavParent = (value: boolean): void => setBurgerMenuOpen(value);
  const AlertVideoParent = (value: boolean): void => setVideoPlaying(value);

  return (
    <div className="chazz-header">
      <AllowCookies />
      <div className={videoPlaying ? "velo-out" : "velo-in"}>
        <span className={videoPlaying ? "nav-out" : "nav-in"}>
          {navVisible && <Nav isPlaying={videoPlaying} darkMode AlertNavParent={AlertNavParent} />}
        </span>
        <div className={videoPlaying ? "chazz-title-out" : "chazz-title"}>
          <LineBreakerSelector typedLines={headerData.title} />
          <h4>{headerData.subtitle}</h4>
        </div>
      </div>
      {!videoPlaying && <img src="uploads/first_frame.jpg" alt="" className="grayscale" />}
      <VideoHeader
        AlertVideoParent={AlertVideoParent}
        toggleNavVisible={toggleNavVisible}
        burgerMenuOpen={burgerMenuOpen}
      />
    </div>
  );
};
