import React, { Fragment } from "react";

import getInTouch from "../../../../../content/get-in-touch.json";
import { ISocial } from "../../../../../interfaces/cms";
import { LinkedEmail, LinkedRRSS } from "./footerLinks";

import "../CompanyInfo.styles.scss";

type Props = { title: string; socials: ISocial[] };
export const GetInTouch = ({ title, socials }: Props) => {
  return (
    <div className="in-touch-container">
      <p className="section-title">{title}</p>
      <div className="in-touch-grid">
        {getInTouch.map((item, index: number) => (
          <div className="in-touch-info" key={index}>
            <p className="in-touch-subtitle">{item.title}</p>
            <LinkedEmail email={item.email} />
          </div>
        ))}
        <div className="in-touch-info">
          <p className="in-touch-subtitle">Social</p>
          {socials.map((social: ISocial, index: number) => (
            <Fragment key={index}>
              <LinkedRRSS url={social.link} rrss={social.name} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
