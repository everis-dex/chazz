import React from "react";

import "../../Home/HomeSections/HomeSection4/HomeSection4";
import "./footerLinks.scss";

interface RRSSProps {
  url: string;
  rrss: string;
}

export const LinkedRRSS = ({ url, rrss }: RRSSProps) => {
  return (
    <p className="social-media">
      <a className="footerLink" href={url}>
        {rrss}
      </a>
    </p>
  );
};
