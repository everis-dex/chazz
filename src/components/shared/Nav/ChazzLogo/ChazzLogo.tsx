import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../../assets/Chazz_Logo.svg";

import "../Nav.styles.scss";

type Props = { color: string; isBurgerMenuOpen: boolean };

export const ChazzLogo = ({ color, isBurgerMenuOpen }: Props) => {
  return (
    <div className="chazz-logo">
      <Link to="/">
        <Logo fill={isBurgerMenuOpen ? "white" : color} style={{ position: isBurgerMenuOpen ? "fixed" : "inherit" }} />
      </Link>
    </div>
  );
};
