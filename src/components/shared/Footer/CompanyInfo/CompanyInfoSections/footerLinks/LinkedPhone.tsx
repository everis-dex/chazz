import React from "react";

import "./footerLinks.styles.scss";

type Props = { phone: string };

export const LinkedPhone = ({ phone }: Props) => {
  const phoneCall: string = `tel:${phone}`;

  return (
    <p className="phone">
      <a className="footerLink" href={phoneCall}>
        {phone}
      </a>
    </p>
  );
};
