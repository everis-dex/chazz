import React from "react";
import { useState } from "react";

import { AllowCookies, Nav } from "../index";

import { IHomeHeader } from "../../../interfaces/cms";
import { LineBreakerSelector } from "../../shared/LineBreaker/LineBreakerSelector";

import "./HomeHeader.styles.scss";
import { VideoHeader } from "../VideoHeader/VideoHeader";

export const HomeHeader = (headerData: IHomeHeader) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isNavVisible, setisNavVisible] = useState<boolean>(true);

  return (
    <>
    {/* <div className={isPlaying ? "bg-color-out" : "bg-color"}> */}
      <div className="chazz-header">
        <div className={isPlaying ? "velo-out" : "velo-in"}>
          <span className={isPlaying ? "nav-out" : "nav-in"}>
            <Nav color="white" disabledMenuOption="" isNavVisible={isNavVisible} isPlaying={isPlaying} />
          </span>
          <div className={isPlaying ? "chazz-title-out" : "chazz-title"}>
          <LineBreakerSelector typedLines={headerData.title} />
          <h4>{headerData.subtitle}</h4>
        </div>
        </div>
        <VideoHeader
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isNavVisible={isNavVisible}
          setIsNavVisible={setisNavVisible}
        ></VideoHeader>
        
      </div>

      <AllowCookies />
      {/* </div> */}
    </>
  );
};
