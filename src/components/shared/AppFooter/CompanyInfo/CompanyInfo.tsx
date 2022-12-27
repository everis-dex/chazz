import React from "react";

import { Container } from "react-bootstrap";

import "./CompanyInfo.styles.scss";

import { Offices, Studios, GetInTouch } from "./index";

export const CompanyInfo = () => {
  return (
    <div className="we-are-section">
      <Container>
        <div className="we-are-grid">
          <h2>
            <strong>We are part of NTT Data Company & its design network, NDDN.</strong>
          </h2>
          <Offices />
          <hr className="divisor-line" />
          <Studios />
          <hr className="divisor-line" />
          <GetInTouch />
        </div>
      </Container>
    </div>
  );
};
