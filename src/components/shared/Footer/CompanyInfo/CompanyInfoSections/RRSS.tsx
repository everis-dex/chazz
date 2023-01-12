import React, { Fragment } from "react";

import { homeInfo as home } from "../../../../../content/index";
import { ISocial } from "../../../../../interfaces/cms";
import { LinkedRRSS } from "./footerLinks";

import "../CompanyInfo.styles.scss";

type Props = {
  showTitle: boolean;
};

export const RRSS = ({ showTitle }: Props) => {
  const socials: ISocial[] = home.footer.social;

  return (
    <div className="in-touch-info">
      {showTitle && <p className="in-touch-subtitle">Social</p>}

      {socials.map((social: ISocial, index: number) => (
        <Fragment key={index}>
          <LinkedRRSS url={social.link} rrss={social.name} />
        </Fragment>
      ))}
    </div>
  );
};
