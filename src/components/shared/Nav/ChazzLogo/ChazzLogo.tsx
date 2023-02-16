import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../../assets/Chazz_Logo.svg";

import "../Nav.styles.scss";

type Props = { color: string };

export const ChazzLogo = ({ color }: Props) => {
  return (
    <div className="chazz-logo">
      <Link to="/">
        <Logo fill={color} />
      </Link>
    </div>
  );
};
