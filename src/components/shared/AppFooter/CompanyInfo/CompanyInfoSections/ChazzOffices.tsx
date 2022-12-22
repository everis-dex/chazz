import React from "react";

import offices from "../../../../../content/offices.json";
import { Office } from "../../../../../interfaces/interfaces";

import { LinkedEmail, LinkedMap, LinkedPhone } from "./footerLinks/index";

import "../CompanyInfo.styles.scss";

export const ChazzOffices = () => {
  return (
    <div className="offices-container">
      <p className="studios-title">CHAZZ OFFICES</p>
      {offices.map((office: Office, index: number) => (
        <div className="offices-info" key={index}>
          <p className="city">{office.city}</p>
          {office.phone && <LinkedPhone phone={office.phone} />}
          {office.email && <LinkedEmail email={office.email} />}
          {office.address && (
            /* TODO: por qué le pasas el mismo dato(?)*/
            <LinkedMap address={office.address} city={office.city} />
          )}
        </div>
      ))}
    </div>
  );
};
