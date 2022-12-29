import React from "react";
import { Container } from "react-bootstrap";

import { IHomeFooter } from "../../../../interfaces/interfaces";
import { GetInTouch, Offices, Studios } from "./index";

import "./CompanyInfo.styles.scss";

export const CompanyInfo = (footerData: IHomeFooter) => {
  return (
    <div className="we-are-section">
      <Container>
        <div className="we-are-grid">
          <h2>
            <strong>{footerData.title}</strong>
          </h2>
          <Offices title={footerData.offices} />
          <hr className="divisor-line" />
          <Studios title={footerData.studios} />
          <hr className="divisor-line" />
          <GetInTouch title={footerData.touch} />
        </div>
      </Container>
    </div>
  );
};
