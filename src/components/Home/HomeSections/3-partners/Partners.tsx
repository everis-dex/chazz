import React from "react";

import { partners } from "../../../../content/index";
import { IHomeSection, IPartner } from "../../../../interfaces/cms";

import { Partner } from "./Partner";
import "./Partners.styles.scss";

export const Partners = (partnersData: IHomeSection) => {
  return (
    <>
      <div className="partner-section">
        <div id="Partners">
          <div className="titles">
            <h3>{partnersData.title}</h3>
            {partnersData.subtitle && <p>{partnersData.subtitle}</p>}
          </div>
          <div className="partner-container">
            {partners.map((partner: IPartner, index: number) => (
              <div className="partner" key={index}>
                <Partner {...partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
