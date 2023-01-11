import React from "react";

import { IHomeFooter } from "../../../../interfaces/cms";
import { GetInTouch, Offices, Studios } from "./index";

import "./CompanyInfo.styles.scss";
import { DividingLine } from '../../DividingLine/DividingLine';

export const CompanyInfo = (footerData: IHomeFooter) => {
  const socials = footerData.social;

  return (
    <div className="we-are-section">
      <div id="Footer">
        <div className="we-are-grid">
          <h2>
            <strong>{footerData.title}</strong>
          </h2>
          <Offices title={footerData.offices} />
          <DividingLine />
          <Studios title={footerData.studios} />
          <DividingLine />
          <GetInTouch title={footerData.touch} socials={socials} />
        </div>
      </div>
    </div>
  );
};
