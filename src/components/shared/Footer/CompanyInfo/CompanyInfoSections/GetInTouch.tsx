import React from "react";

import { ISocial, ITouch } from "../../../../../interfaces/cms";
import { LinkedEmail } from "./footerLinks";
import { RRSS } from "./RRSS";

import "../CompanyInfo.styles.scss";

type Props = { touches: ITouch[]; socials: ISocial[] };

export const GetInTouch = ({ touches, socials }: Props) => {
  return (
    <div className="in-touch-container">
      <p className="section-title" data-aos="fade-up" data-aos-once="true">
        GET IN TOUCH
      </p>
      <div className="in-touch-grid">
        {touches.map((item, index: number) => (
          <div className="in-touch-info" key={index} data-aos="fade-up" data-aos-once="true">
            <p className="in-touch-subtitle">{item.title}</p>
            <LinkedEmail email={item.email} />
          </div>
        ))}
        <RRSS showTitle socials={socials} data-aos="fade-up" data-aos-once="true" />
      </div>
    </div>
  );
};
