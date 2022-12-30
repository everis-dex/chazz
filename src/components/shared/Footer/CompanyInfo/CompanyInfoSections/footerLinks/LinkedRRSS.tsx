import React from "react";

import "./footerLinks.styles.scss";

type Props = { url: string; rrss: string; key: number };

export const LinkedRRSS = ({ url, rrss, key }: Props) => {
  return (
    <p className="social-media" key={key}>
      <a className="footerLink" href={url}>
        {rrss}
      </a>
    </p>
  );
};
