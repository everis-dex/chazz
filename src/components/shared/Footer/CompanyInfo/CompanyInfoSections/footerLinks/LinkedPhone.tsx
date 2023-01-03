import React from "react";

import "./footerLinks.styles.scss";

type Props = { phone: string };

export const LinkedPhone = ({ phone }: Props) => {
  const phonecall: string = `tel:${phone}`;

  return (
    <p className="phone">
      <a className="footerLink" href={phonecall}>
        {phone}
      </a>
    </p>
  );
};
