import React from "react";
import "./Section4.scss";

import offices from "./../../../../content/offices.json";

const HomeSection4 = () => {
  return (
    <>
      <h2>
        <strong>
          We are part of NTT Data Company & Tangity Design Network
        </strong>
      </h2>

      {offices.map((office, index) => (
        <div key={index}>
          <h2>{office.city}</h2>
          <p>{office.phone}</p>
          <p>{office.email}</p>
          <p>{office.address}</p>

          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default HomeSection4;
