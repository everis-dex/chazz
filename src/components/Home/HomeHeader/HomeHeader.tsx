import React from "react";

import { Nav } from "../../Nav/Nav";
import { AllowCookies } from '../../shared/AllowCookies/AllowCookies';

import "./HomeHeader.scss";

export const HomeHeader = () => {
  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" disabledMenuOption="" />
        </div>
      </div>

      <div className="chazz-title">
        <h1>Making the intangible, tangible</h1>
        <h4>Hybrid & Strategic Digital Agency</h4>
      </div>

      <AllowCookies />
    </>
  );
};
