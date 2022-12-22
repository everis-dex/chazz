import React from "react";

import "./footerLinks.scss";

type Props = {
  url: string;
  rrss: string;
};

export const LinkedRRSS = ({ url, rrss }: Props) => {
  return (
    <p className="social-media">
      <a className="footerLink" href={url}>
        {rrss}
      </a>
    </p>
  );
};
