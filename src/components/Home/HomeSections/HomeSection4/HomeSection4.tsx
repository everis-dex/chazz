import React from "react";

import { Container } from "react-bootstrap";

import "./Section4.scss";

import { ChazzOffices, TangityStudios, GetInTouch } from './footerSections/index';

export const HomeSection4 = () => {
  return (
    <>
      <div className="we-are-section">
        <Container>
          <div className="we-are-grid">
            <h2>
              <strong>We are part of NTT Data Company & Tangity Design Network</strong>
            </h2>
            <ChazzOffices />
            <hr />
            <TangityStudios />
            <hr />
            <GetInTouch />
          </div>
        </div>
      </Container>
    </div>
  );
};
