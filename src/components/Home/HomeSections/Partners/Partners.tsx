import React from "react";

import { Partner } from "./Partner";

import { partners } from "../../../../content/index";
import { IHomeSection, IPartner } from "../../../../interfaces/cms";

import "./Partners.styles.scss";

export const Partners = (partnersData: IHomeSection) => {
  return (
    <div className="partners-section">
      <div className="titles" data-aos="fade-up" data-aos-once="true">
        {partnersData.title && <h3>{partnersData.title}</h3>}
        {partnersData.subtitle && <p>{partnersData.subtitle}</p>}
      </div>
      <div className="partners-container">
        {partners.map((partner: IPartner, index: number) => (
          <div className="partner" key={index}>
            <Partner partner={partner} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
