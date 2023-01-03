import React from "react";
import {useState} from 'react';

import { AllowCookies, Nav } from "../index";

import home from "../../../content/home.json";
import { IHome } from "../../../interfaces/interfaces";
import { LineBreakerSelector } from "../../shared/LineBreaker/LineBreakerSelector";

import "./HomeHeader.styles.scss";
import { VideoHeader } from '../VideoHeader/VideoHeader';

export const HomeHeader = () => {
  const typedHomeHeader: IHome = home[0];

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <>
      <div className="chazz-header">
        <div className={isPlaying ? "velo-out" : "velo-in"}>
          <span className={isPlaying ? "nav-out" : "nav-in"}><Nav color="white" disabledMenuOption="" /></span>
        </div>
          <VideoHeader isPlaying={isPlaying} setIsPlaying={setIsPlaying}></VideoHeader>
        <div className={isPlaying ? "chazz-title-out" : "chazz-title"}>
          <LineBreakerSelector typedLines={typedHomeHeader.intro} />
          <h4>{typedHomeHeader.subintro}</h4>
        </div>
      </div>

     

      <AllowCookies />
    </>
  );
};
