import React from "react";
import "./Section4.scss";

import offices from "./../../../../content/offices.json";

const HomeSection4 = () => {
  return (
    <>
      <div className="offices-section">
        <h2>
          <strong>
            We are part of NTT Data Company & Tangity Design Network
          </strong>
        </h2>
        <div>
          {offices.map((office, index) => (
            <div key={index}>
              <h3>{office.city}</h3>
              <p>{office.phone}</p>
              <p>{office.email}</p>
              <p>{office.address}</p>

              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeSection4;
