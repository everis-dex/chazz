import React from "react";
// import { Link } from "react-router-dom";
// import ChazzCarousel from "../../../shared/ChazzCarousel/ChazzCarousel";
import "./Section3.scss";
import partners from "../../../../content/partners.json";

const HomeSection3 = () => {
  return (
    <>
      <div className="partner-section">
        <h3>Partners in crime</h3>
        <div className="partners-container">
          {partners.map((partner, index) => (
            <p className="partner" key={index}>
              {partner.partner}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
