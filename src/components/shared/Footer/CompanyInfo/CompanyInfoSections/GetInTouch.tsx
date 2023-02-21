import React from "react";

import { getInTouch } from "../../../../../content/index";
import { LinkedEmail } from "./footerLinks";
import { RRSS } from "./RRSS";

import "../CompanyInfo.styles.scss";

type Props = { title: string };

export const GetInTouch = ({ title }: Props) => {
  return (
    <div className="in-touch-container">
      <p className="section-title" data-aos="fade-up" data-aos-once="true">
        {title}
      </p>
      <div className="in-touch-grid">
        {getInTouch.map((item, index: number) => (
          <div className="in-touch-info" key={index} data-aos="fade-up" data-aos-once="true">
            <p className="in-touch-subtitle">{item.title}</p>
            <LinkedEmail email={item.email} />
          </div>
        ))}
        <RRSS showTitle={true} data-aos="fade-up" data-aos-once="true" />
      </div>
    </div>
  );
};
