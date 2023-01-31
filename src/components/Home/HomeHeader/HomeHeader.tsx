import React, { useState } from "react";

import { LineBreakerSelector, Nav, AllowCookies } from "../../shared/index";
import { VideoHeader } from "./VideoHeader/VideoHeader";

import { IHomeHeader } from "../../../interfaces/cms";

import { routesInfo } from "../../../constants";

import "./HomeHeader.styles.scss";

export const HomeHeader = (headerData: IHomeHeader) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isNavVisible, setisNavVisible] = useState<boolean>(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  // TODO: plantear si se queda aquí
  function appHeight(): void {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  }
  window.addEventListener("resize", appHeight);
  appHeight();

  return (
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

      <AllowCookies />
    </div>
  );
};
