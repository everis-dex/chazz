import React from "react";

import offices from "../../../../../content/offices.json";
import { IOffice } from "../../../../../interfaces/cms";
import { LinkedEmail, LinkedMap, LinkedPhone } from "./footerLinks";

import "../CompanyInfo.styles.scss";

type Props = { title: string };

export const Offices = ({ title }: Props) => {
  const emptyField = '""\r';

  return (
    <div className="offices-container">
      <p className="section-title">{title}</p>
      {offices.map((office: IOffice, index: number) => (
        <div className="offices-info" key={index}>
          <p className="city">{office.city}</p>
          {office.phone !== emptyField && <LinkedPhone phone={office.phone} />}
          {office.email !== emptyField && <LinkedEmail email={office.email} />}
          {office.address !== emptyField && <LinkedMap address={office.address} city={office.city} />}
        </div>
      ))}
    </div>
  );
};
