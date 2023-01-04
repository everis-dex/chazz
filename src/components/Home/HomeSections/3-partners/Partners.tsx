import React from "react";

import partners from "../../../../content/partners.json";
import { IHomeSection, IPartner } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";
import "./Partners.styles.scss";

export const Partners = (partnersData: IHomeSection) => {
  return (
    <>
      <div className="partner-section">
        <Container id="Partners">
          <div className="titles">
            <h3>{partnersData.title}</h3>
            {partnersData.subtitle && <p>{partnersData.subtitle}</p>}
          </div>
          <div className="partner-container">
            {partners.map((partner: IPartner, index: number) => (
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
