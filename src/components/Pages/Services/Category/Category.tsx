import React from "react";
import { useEffect } from "react";

export const Category = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <div className="services-container">
        <h1 className="services-header">Services</h1>
        <div className="services-container--content"></div>
      </div>
    </>
  );
};
