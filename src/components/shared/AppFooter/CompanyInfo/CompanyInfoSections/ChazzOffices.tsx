import React from "react";

import offices from "../../../../../content/offices.json";
import { Office } from "../../../../../interfaces/interfaces";
import { LinkedEmail, LinkedMap, LinkedPhone } from "../../../footerLinks/index";

import "../CompanyInfo.scss";

export const ChazzOffices = () => {
  return (
    <div className="offices-container">
      <span>CHAZZ OFFICES</span>
      {offices.map((office: Office, index: number) => (
        <div className="offices-info" key={index}>
          <p className="city">{office.city}</p>
          <LinkedPhone phone={office.phone} />
          <LinkedEmail email={office.email} />
          <LinkedMap address={office.address} city={office.address} />
        </div>
      ))}
    </div>
  );
};
