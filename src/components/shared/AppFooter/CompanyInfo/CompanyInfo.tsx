import React from "react";
import { Container } from "react-bootstrap";

import home from "../../../../content/pages/pages--home.json";
import { IHome } from "../../../../interfaces/interfaces";

import "./CompanyInfo.styles.scss";

import { Offices, Studios, GetInTouch } from "./index";

type Footer = {
  title: string;
  offices: string;
  touch: string;
  studios: string;
  social: object;
};
export const CompanyInfo = () => {
  const typedFooter: Footer = home.footer;

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
