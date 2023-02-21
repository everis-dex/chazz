import React from "react";

import { IOffice } from "../../../../../interfaces/cms";
import { LinkedEmail, LinkedMap, LinkedPhone } from "./footerLinks";

import "../CompanyInfo.styles.scss";

export const Offices = (offices: IOffice[]) => {
  return (
    <>
      <p className="section-title" id="section-title-offices">
        CHAZZ OFFICES
      </p>
      <div className="offices-container">
        {offices.map((office: IOffice, index: number) => (
          <div className="offices-info" key={index}>
            <p className="city">{office.city}</p>
            {!office.phone.includes('"') && <LinkedPhone phone={office.phone} />}
            {!office.email.includes('"') && <LinkedEmail email={office.email} />}
            {!office.address.includes('"') && <LinkedMap address={office.address} city={office.city} />}
          </div>
        ))}
      </div>
    </>
  );
};
