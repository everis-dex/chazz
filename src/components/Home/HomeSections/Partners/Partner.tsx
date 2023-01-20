import React from "react";

import { IPartner } from "../../../../interfaces/cms";
import "./Partners.styles.scss";

export const Partner = ({ website, logo, name, scale = "100" }: IPartner) => {
  const percentage: string = (parseInt(scale) * 1.2).toString().concat("%");

  return (
    <a href={website}>
      <img loading="lazy" className="partner-logo" src={logo} alt={name} width={percentage} />
    </a>
  );
};
