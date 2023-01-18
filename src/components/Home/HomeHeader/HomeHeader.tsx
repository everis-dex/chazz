import React from "react";
import { useState } from "react";

import { AllowCookies, Nav } from "../index";

import { IHomeHeader } from "../../../interfaces/cms";
import { LineBreakerSelector } from "../../shared/index";

import "./HomeHeader.styles.scss";
import { VideoHeader } from "../VideoHeader/VideoHeader";

import { routesInfo } from "../../../constants";

export const HomeHeader = (headerData: IHomeHeader) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isNavVisible, setisNavVisible] = useState<boolean>(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [isAllowedMessageVisible, setIsAllowedMessageVisible] = useState<boolean>(true);

  // TODO: plantear si se queda aquí
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();

  return (
    <>
      <div className="chazz-header">
        <div className={isPlaying ? "velo-out" : "velo-in"}>
          <span className={isPlaying ? "nav-out" : "nav-in"}>
            <Nav
              color="white"
              disabledMenuOption={routesInfo[0].route}
              isNavVisible={isNavVisible}
              isPlaying={isPlaying}
              isBurgerMenuOpen={isBurgerMenuOpen}
              setIsBurgerMenuOpen={setIsBurgerMenuOpen}
              activeStyle="active-black"
            />
          </span>
          <div className={isPlaying ? "chazz-title-out" : "chazz-title"}>
            <LineBreakerSelector typedLines={headerData.title} />
            <h4>{headerData.subtitle}</h4>
          </div>
        </div>
        {!isPlaying && <img src="uploads/first_frame.jpg" alt="" className="grayscale" />}
        <VideoHeader
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isNavVisible={isNavVisible}
          setIsNavVisible={setisNavVisible}
          isBurgerMenuOpen={isBurgerMenuOpen}
        ></VideoHeader>
      </div>

      {isAllowedMessageVisible && <AllowCookies setIsAllowedMessageVisible={setIsAllowedMessageVisible}/>}
    </>
  );
};
