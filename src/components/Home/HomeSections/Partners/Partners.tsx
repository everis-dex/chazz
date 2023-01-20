import React from "react";

import { Partner } from "./Partner";

import { partners } from "../../../../content/index";
import { IHomeSection, IPartner } from "../../../../interfaces/cms";

import "./Partners.styles.scss";

export const Partners = (partnersData: IHomeSection) => {
  return (
    <div className="partners-section">
      <div className="titles">
        {partnersData.subtitle && <h3>{partnersData.title}</h3>}
        {partnersData.subtitle && <p>{partnersData.subtitle}</p>}
      </div>
      <div className="partners-container">
        {partners.map((partner: IPartner, index: number) => (
          <div className="partner" key={index}>
            <Partner {...partner} />
          </div>
        ))}
      </div>
    </div>
  );
};
