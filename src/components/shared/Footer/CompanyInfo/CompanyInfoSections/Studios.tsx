import React from "react";

import { IStudio } from "../../../../../interfaces/cms";
import { LinkedEmail } from "./footerLinks";

import "../CompanyInfo.styles.scss";

type Props = { studios: IStudio[] };

export const Studios = ({ studios }: Props) => {
  const gridColumns = window.innerWidth > 480 ? 3 : 2;
  // Dynamically define the number of rows so that there's always the required amount of columns (gridColumns)
  const division = studios.length / gridColumns;
  const gridRows: number = division % 1 === 0 ? division : Math.floor(division) + 1;

  return (
    <div className="studios-container">
      <p className="section-title">NDDN NETWORK</p>
      <div
        className="studios-grid"
        style={{ gridTemplateRows: `repeat(${gridRows}, 1fr)` }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        {studios.map((studio, index: number) => (
          <div className="studios-info city" key={index}>
            {studio.city}
          </div>
        ))}
        <div className="desktop-email">
          <LinkedEmail email="tangity@nttdata.com" />
        </div>
      </div>
      <div className="mobile-email" data-aos="fade-up" data-aos-once="false">
        <LinkedEmail email="tangity@nttdata.com" />
      </div>
    </div>
  );
};
