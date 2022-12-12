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
        <div className="offices">
          <span>CHAZZ OFFICES</span>
          {offices.map((office, index) => (
            <div className="offices-info" key={index}>
              <p className="city">{office.city}</p>
              <p className="phone">{office.phone}</p>
              <p className="email">{office.email}</p>
              <p className="address">{office.address}</p>
            </div>
          ))}
        </div>
        <hr></hr>
        <div className="offices">
          <span>TANGITY STUDIOS</span>
          {offices.map((office, index) => (
            <div className="offices-info" key={index}>
              <p className="city">{office.city}</p>
              <p className="phone">{office.phone}</p>
              <p className="email">{office.email}</p>
              <p className="address">{office.address}</p>
            </div>
          ))}
        </div>
        <hr></hr>
        <div className="offices">
          <span>GET IN TOUCH</span>
          {offices.map((office, index) => (
            <div className="offices-info" key={index}>
              <p className="city">{office.city}</p>
              <p className="phone">{office.phone}</p>
              <p className="email">{office.email}</p>
              <p className="address">{office.address}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeSection4;
