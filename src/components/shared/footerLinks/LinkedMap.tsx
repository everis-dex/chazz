import React from "react";

import "./footerLinks.scss";

interface MapProps {
  address: string;
  city: string;
}

export const LinkedMap = ({ address, city }: MapProps) => {
  const mapLink: string = `https://maps.google.com?q=+${address},${city}+`;

  return (
    <p className="map">
      <a className="footerLink" target="_blank" href={mapLink} rel="noreferrer">
        {address}
      </a>
    </p>
  );
};
