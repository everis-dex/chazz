import React from "react";

import { ISocial } from "../../../../../interfaces/cms";
import { LinkedRRSS } from "./footerLinks";

import "../CompanyInfo.styles.scss";

type Props = { showTitle?: boolean; socials: ISocial[] };

export const RRSS = ({ showTitle = false, socials }: Props) => {
  return (
    <div className="in-touch-info">
      {showTitle && <p className="in-touch-subtitle">Social</p>}
      {socials.map((social: ISocial, index: number) => (
        <div key={index}>
          <LinkedRRSS url={social.link} rrss={social.name} />
        </div>
      ))}
    </div>
  );
};
