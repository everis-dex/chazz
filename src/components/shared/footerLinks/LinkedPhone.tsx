import React from "react";

import "./footerLinks.scss";

interface PhoneProps {
  phone: string;
}

export const LinkedPhone = ({ phone }: PhoneProps) => {
  const phonecall: string = `tel:${phone}`;

  return (
    <p className="phone">
      <a className="footerLink" href={phonecall}>
        {phone}
      </a>
    </p>
  );
};
