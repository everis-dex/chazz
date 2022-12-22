import React from "react";

import partners from "../../../../content/partners.json";
import { Partner } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";
import "./Partners.styles.scss";

export const Partners = () => {
  return (
    <>
      <div className="partner-section">
        <Container id="Partners">
          <h3>Partners in crime</h3>
          <div className="partner-container">
            {partners.map((partner: Partner, index) => (
              <div className="partner" key={index}>
                <a href={partner.website}>
                  <img className="partner-logo" src={partner.logo} alt={partner.name} width="100%" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
