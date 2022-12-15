import React from "react";

import partners from "../../../../content/partners.json";
import { Partner } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";

import "./HomeSection3.scss";

// La imagen no se carga porque partner.logo tiene comillas escapadas al principio y al final de la url.
// Se debe añadir el campo website al partner para que se pueda linkar el logo.
export const HomeSection3 = () => {
  return (
    <>
      <div className="partner-section">
        <Container id="HomeSection3">
          <h3>Partners in crime</h3>
          <div className="partner-container">
            {partners.map((partner: Partner, index) => (
              <div key={index}>
                <a href={partner.website}>
                  <img src={partner.logo} alt={partner.partner} height="40" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
