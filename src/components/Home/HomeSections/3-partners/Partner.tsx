import React from "react";

import { IPartner } from "../../../../interfaces/cms";

import "./Partners.styles.scss";

export const Partner = ({ website, logo, name, scale = "100" }: IPartner) => {
  const percentage: string = scale.concat("%");

  return (
    <a href={website}>
      <img className="partner-logo" src={logo} alt={name} width={percentage} />
    </a>
  );
};
