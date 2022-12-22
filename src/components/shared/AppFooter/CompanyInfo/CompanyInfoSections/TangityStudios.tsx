import React from "react";

import studios from "../../../../../content/studios.json";
import { LinkedEmail } from "./footerLinks";

import "../CompanyInfo.scss";

export const TangityStudios = () => {
  return (
    <div className="studios-container">
      <span>NDDN NETWORK</span>
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
