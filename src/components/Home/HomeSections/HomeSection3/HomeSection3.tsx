import React from "react";

import partners from "../../../../content/partners.json";
import { Partner } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";

import "./HomeSection3.scss";

export const HomeSection3 = () => {
  return (
    <>
      <div className="bg-section">
        <Container id="HomeSection3">
          <h3>Partners in crime</h3>
          <div className="partner-container">
            {partners.map((partner: Partner, index) => (
              <p className="partner" key={index}>
                {partner.partner}
              </p>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
