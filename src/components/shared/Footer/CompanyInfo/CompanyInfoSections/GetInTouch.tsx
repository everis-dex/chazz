import React, { Fragment } from "react";

import { getInTouchInfo as getInTouch } from "../../../../../content/index";
import { ISocial } from "../../../../../interfaces/cms";
import { LinkedEmail, LinkedRRSS } from "./footerLinks";

import "../CompanyInfo.styles.scss";
import { RRSS } from "./RRSS";

type Props = { title: string; socials: ISocial[] };
export const GetInTouch = ({ title, socials }: Props) => {
  return (
    <>
      <div className="in-touch-container">
        <p className="section-title">{title}</p>
        <div className="in-touch-grid">
          {getInTouch.map((item, index: number) => (
            <div className="in-touch-info" key={index}>
              <p className="in-touch-subtitle">{item.title}</p>
              <LinkedEmail email={item.email} />
            </div>
          ))}
          <RRSS showTitle={true} />
        </div>
      </div>

    </>
  );
};
