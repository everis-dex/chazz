import React from "react";

import partners from "../../../../content/partners.json";
import { Partner } from "../../../../interfaces/interfaces";

import "./Section3.scss";

export const HomeSection3 = () => {
  return (
    <>
      <h3>Partners in crime</h3>
      <div className="partner-container">
        {partners.map((partner: Partner, index) => (
          <p className="partner" key={index}>
            {partner.partner}
          </p>
        ))}
      </div>
    </>
  );
};
