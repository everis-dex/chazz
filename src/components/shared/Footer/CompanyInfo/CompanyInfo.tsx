import React from "react";
import { Container } from "react-bootstrap";

import home from "../../../../content/pages/home.json";
import { IHomeFooter } from "../../../../interfaces/interfaces";
import "./CompanyInfo.styles.scss";

import { Offices, Studios, GetInTouch } from "./index";

export const CompanyInfo = () => {
  const typedFooter: IHomeFooter = home.footer;

  return (
    <div className="we-are-section">
      <Container>
        <div className="we-are-grid">
          <h2>
            <strong>{typedFooter.title}</strong>
          </h2>
          <Offices title={typedFooter.offices} />
          <hr className="divisor-line" />
          <Studios title={typedFooter.studios} />
          <hr className="divisor-line" />
          <GetInTouch title={typedFooter.touch} />
        </div>
      </Container>
    </div>
  );
};
