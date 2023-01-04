import React from "react";

import partners from "../../../../content/partners.json";
import { IHomeSection, IPartner } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";
import "./Partners.styles.scss";
import { Partner } from "./Partner";

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
                <Partner {...partner} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
