import React from "react";

import "./footerLinks.scss";

type Props = {
  email: string;
}

export const LinkedEmail = ({ email }: Props) => {
  const mailto: string = `mailto:${email}`;

  return (
    <p className="email">
      <a className="footerLink" href={mailto}>
        {email}
      </a>
    </p>
  );
};
