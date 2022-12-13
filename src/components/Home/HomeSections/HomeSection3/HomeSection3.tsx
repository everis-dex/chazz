import React from "react";

import { Partner } from "../../../../interfaces/interfaces";
import partners from "../../../../content/partners.json";

import "./Section3.scss";



export const HomeSection3 = () => {
  return (
    <>
      <div className="partner-section">
        <h3>Partners in crime</h3>
        <div className="partners-container">
          {partners.map((partner, index) => (
            <p className="partner" key={index}>
              {partner.partner}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};