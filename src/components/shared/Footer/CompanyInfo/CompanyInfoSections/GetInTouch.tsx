import React from "react";

import { getInTouch } from "../../../../../content/index";
import { LinkedEmail } from "./footerLinks";
import { RRSS } from "./RRSS";

import "../CompanyInfo.styles.scss";

type Props = { title: string };

export const GetInTouch = ({ title }: Props) => {
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
        <RRSS showTitle={true} />
      </div>
    </div>
  );
};
