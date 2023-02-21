import React from "react";

import { IHomeFooter } from "../../../../interfaces/cms";
import { DividingLine } from "../../DividingLine/DividingLine";
import { GetInTouch, Offices, Studios } from "./index";

import "./CompanyInfo.styles.scss";

export const CompanyInfo = (footerData: IHomeFooter) => {
  return (
    <div className="we-are-section">
      <div className="we-are-grid">
        <h2 data-aos="fade-up" data-aos-once="false">
          <strong>{footerData.title}</strong>
        </h2>
        <Offices title={footerData.offices} />
        <DividingLine data-aos="fade-up" data-aos-once="false" />
        <Studios title={footerData.studios} />
        <DividingLine data-aos="fade-up" data-aos-once="false" />
        <GetInTouch title={footerData.touch} />
      </div>
    </div>
  );
};
