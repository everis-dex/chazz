import React from "react";

import studios from "../../../../../content/studios.json";
import { LinkedEmail } from "./footerLinks";

import "../CompanyInfo.styles.scss";

export const Studios = () => {
  return (
    <div className="studios-container">
      <p className="studios-title">NDDN NETWORK</p>
      <div className="studios-grid">
        {studios.map((studio, index) => (
          <div className="studios-info" key={index}>
            <p className="city">{studio.city}</p>
          </div>
        ))}
        <LinkedEmail email="tangity@nttdata.com" />
      </div>
    </div>
  );
};
