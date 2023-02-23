import React from "react";

import { IPartner } from "../../../../interfaces/cms";

import "./Partners.styles.scss";

type Props = { partner: IPartner; index: number };

export const Partner = ({ partner, index }: Props) => {
  const { website, logo, name, scale = "100" } = partner;
  const percentage: string = (parseInt(scale) * 1.2).toString().concat("%");
  const duration: number = 100 * index + 700;

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      data-aos-once="true"
      data-aos-duration={duration.toString()}
    >
      <a href={website}>
        <img loading="lazy" className="partner-logo" src={logo} alt={name} width={percentage} />
      </a>
    </div>
  );
};
