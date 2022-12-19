import React from "react";
import { LinkedEmail } from "../../../../shared/footerLinks";
import { LinkedRRSS } from "../../../../shared/footerLinks/LinkedRRSS";

import "../Section4.scss";

export const GetInTouch = () => {
  return (
    <div className="in-touch-container">
      <span>GET IN TOUCH</span>
      <div className="in-touch-grid">
        <div className="in-touch-info">
          <p className="in-touch-subtitle">General inquiries</p>
          <LinkedEmail email="info@chazzdesign.com" />
        </div>
        <div className="in-touch-info">
          <p className="in-touch-subtitle">Be part of the team</p>
          <LinkedEmail email="info@chazzdesign.com" />
        </div>
        <div className="in-touch-info">
          <p className="in-touch-subtitle">Social</p>
          <LinkedRRSS url="https://www.linkedin.com/company/chazz" rrss="Linkedin" />
          <LinkedRRSS url="https://instagram.com/chazzmadrid" rrss="Instagram" />
          <LinkedRRSS url="" rrss="Medium" />
          <LinkedRRSS url="" rrss="Newsletter" />
        </div>
      </div>
    </div>
  );
};
