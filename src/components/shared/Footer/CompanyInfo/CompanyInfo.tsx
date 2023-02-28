import React from "react";

import { IFooter } from "../../../../interfaces/cms";
import { DividingLine } from "../../DividingLine/DividingLine";
import { GetInTouch, Offices, Studios } from "./index";

import "./CompanyInfo.styles.scss";

export const CompanyInfo = (footerData: IFooter) => {
  const { title, offices, studios, touch, social } = footerData;

  return (
    <div className="we-are-section" data-aos="fade-up">
      <div className="we-are-grid">
        <h2 data-aos="fade-up">
          <strong>{title}</strong>
        </h2>
        <Offices offices={offices} />
        <DividingLine />
        <Studios studios={studios} />
        <DividingLine />
        <GetInTouch touches={touch} socials={social} />
      </div>
    </div>
  );
};
