import React from "react";

import offices from "../../../../../content/offices.json";

import "../Section4.scss";
import { LinkedEmail, LinkedMap, LinkedPhone } from "../../../../shared/footerLinks/index";

export const ChazzOffices = () => {
  return (
    <div className="offices-container">
      <span>CHAZZ OFFICES</span>
      {offices.map((office, index) => {
        return (
          <div className="offices-info" key={index}>
            <p className="city">{office.city}</p>
            <LinkedPhone phone={office.phone} />
            <LinkedEmail email={office.email} />
            <LinkedMap address={office.address} city={office.address} />
          </div>
        );
      })}
    </div>
  );
};
