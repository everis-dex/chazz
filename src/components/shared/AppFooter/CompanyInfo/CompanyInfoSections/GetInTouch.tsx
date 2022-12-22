import React from "react";

import { LinkedEmail } from "./footerLinks/LinkedEmail";
import { LinkedRRSS } from "./footerLinks/LinkedRRSS";

import getInTouch from "../../../../../content/get-in-touch.json";

import "../CompanyInfo.styles.scss";

export const GetInTouch = () => {
  return (
    <div className="in-touch-container">
      <p className="studios-title">GET IN TOUCH</p>
      <div className="in-touch-grid">
        {getInTouch.map((item, index: number) => (
          <div className="in-touch-info" key={index}>
            <p className="in-touch-subtitle">{item.title}</p>
            <LinkedEmail email={item.email} />
          </div>
        ))}
        <div className="in-touch-info">
          <p className="in-touch-subtitle">Social</p>
          <LinkedRRSS url="https://www.linkedin.com/company/chazz" rrss="Linkedin" />
          <LinkedRRSS url="https://instagram.com/chazzmadrid" rrss="Instagram" />
          {/* <LinkedRRSS url="" rrss="Medium" /> */}
          {/* <LinkedRRSS url="" rrss="Newsletter" /> */}
        </div>
      </div>
    </div>
  );
};
