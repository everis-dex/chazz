import React from "react";

import { Container } from "react-bootstrap";

import "./CompanyInfo.scss";

import { ChazzOffices, TangityStudios, GetInTouch } from "./index";

export const CompanyInfo = () => {
  return (
    <div className="we-are-section">
      <Container>
        <div className="we-are-grid">
          <h2>
            <strong>We are part of NTT Data Company & Tangity Design Network</strong>
          </h2>
          <ChazzOffices />
          <hr className="divisor-line" />
          <TangityStudios />
          <hr className="divisor-line" />
          <GetInTouch />
        </div>
      </Container>
    </div>
  );
};
