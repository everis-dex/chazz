import React from "react";
// import { Link } from "react-router-dom";
// import ChazzCarousel from "../../../shared/ChazzCarousel/ChazzCarousel";
import "./Section3.scss";
import partners from "../../../../content/partners.json";

const HomeSection3 = () => {
  return (
    <>
      <h3>Partners in crime</h3>
      <div className="partner-container">
        {partners.map((partner, index) => (
          <p className="partner" key={index}>
            {partner.partner}
          </p>
        ))}
      </div>
    </>
  );
};

export default HomeSection3;
