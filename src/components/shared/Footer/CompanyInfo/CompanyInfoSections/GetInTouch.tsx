import React from "react";

import { ISocial, ITouch } from "../../../../../interfaces/cms";
import { LinkedEmail } from "./footerLinks";
import { RRSS } from "./RRSS";

import "../CompanyInfo.styles.scss";

type Props = { touches: ITouch[]; socials: ISocial[] };

export const GetInTouch = ({ touches, socials }: Props) => {
  return (
    <div className="in-touch-container">
      <p className="section-title">GET IN TOUCH</p>
      <div className="in-touch-grid">
        {touches.map((item, index: number) => (
          <div className="in-touch-info" key={index}>
            <p className="in-touch-subtitle">{item.title}</p>
            <LinkedEmail email={item.email} />
          </div>
        ))}
        <RRSS showTitle socials={socials} />
      </div>
    </div>
  );
};
