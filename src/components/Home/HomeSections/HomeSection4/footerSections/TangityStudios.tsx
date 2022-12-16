import React from "react";

import studios from "../../../../../content/studios.json";
import { LinkedEmail } from "../../../../shared/footerLinks";

import "../Section4.scss";

export const TangityStudios = () => {
  return (
    <div className="studios-container">
      <span>TANGITY STUDIOS</span>
      <div className="studios-grid">
        {studios.map((studio, index) => (
          <div className="studios-info" key={index}>
            <p className="city">{studio.city}</p>
          </div>
        ))}
        <LinkedEmail email="tangity@nttdata.com" />
      </div>
      {/* <p className="email">tangity@nttdata.com</p> */}
    </div>
  );
};
