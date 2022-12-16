import React from "react";

import offices from "../../../../content/offices.json";
import studios from "../../../../content/studios.json";
import { Office, Studio } from "../../../../interfaces/interfaces";

import "./Section4.scss";
import { Container } from "react-bootstrap";

export const HomeSection4 = () => {
  return (
    <div className="we-are-section">
      <Container>
        <div className="we-are-grid">
          <h2>
            <strong>We are part of NTT Data Company & Tangity Design Network</strong>
          </h2>
          <div className="offices-container">
            <span>CHAZZ OFFICES</span>
            {offices.map((office: Office, index: number) => (
              <div className="offices-info" key={index}>
                {office.city && <p className="city">{office.city}</p>}
                {office.phone && <p className="phone">{office.phone}</p>}
                {office.email && <p className="email">{office.email}</p>}
                {office.address && <p className="address">{office.address}</p>}
              </div>
            ))}
          </div>
          <hr></hr>
          <div className="studios-container">
            <span>TANGITY STUDIOS</span>
            <div className="studios-grid">
              {studios.map((studio: Studio, index: number) => (
                <div className="studios-info" key={index}>
                  <p className="city">{studio.city}</p>
                </div>
              ))}
              <p className="email">tangity@nttdata.com</p>
            </div>
          </div>
          <hr></hr>
          <div className="in-touch-container">
            <span>GET IN TOUCH</span>
            <div className="in-touch-grid">
              <div className="in-touch-info">
                <p className="in-touch-subtitle">General inquiries</p>
                <p className="email">info@chazzdesign.com</p>
              </div>
              <div className="in-touch-info">
                <p className="in-touch-subtitle">Be part of the team</p>
                <p className="email">info@chazzdesign.com</p>
              </div>
              <div className="in-touch-info">
                <p className="in-touch-subtitle">Social</p>
                <p className="social-media">Linkedin</p>
                <p className="social-media">Instagram</p>
                <p className="social-media">Medium</p>
                <p className="social-media">Newsletter</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
