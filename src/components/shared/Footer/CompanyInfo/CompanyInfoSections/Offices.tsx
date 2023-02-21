import React from "react";

import { offices } from "../../../../../content/index";
import { IOffice } from "../../../../../interfaces/cms";
import { LinkedEmail, LinkedMap, LinkedPhone } from "./footerLinks";

import "../CompanyInfo.styles.scss";

type Props = { title: string };

export const Offices = ({ title }: Props) => {
  return (
    <>
      <p className="section-title" id="section-title-offices" data-aos="fade-up" data-aos-once="true">
        {title}
      </p>
      <div className="offices-container">
        {offices.map((office: IOffice, index: number) => (
          <div className="offices-info" key={index} data-aos="fade-up" data-aos-once="true">
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
