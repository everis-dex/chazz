import React from "react";

import offices from "../../../../../content/offices.json";
import { IOffice } from "../../../../../interfaces/interfaces";

import { LinkedEmail, LinkedMap, LinkedPhone } from "./footerLinks/index";

import "../CompanyInfo.styles.scss";

export const Offices = () => {
  const emptyField = '""\r';

  return (
    <div className="offices-container">
      <p className="studios-title">CHAZZ OFFICES</p>
      {offices.map((office: IOffice, index: number) => (
        <div className="offices-info" key={index}>
          <p className="city">{office.city}</p>
          {office.phone !== emptyField && <LinkedPhone phone={office.phone} />}
          {office.email !== emptyField && <LinkedEmail email={office.email} />}
          {office.address !== emptyField && (
            /* TODO: por qué le pasas el mismo dato(?)*/
            <LinkedMap address={office.address} city={office.city} />
          )}
        </div>
      ))}
    </div>
  );
};
