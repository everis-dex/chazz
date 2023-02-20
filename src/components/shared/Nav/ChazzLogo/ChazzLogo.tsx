import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../../assets/Chazz_Logo.svg";

import "../Nav.styles.scss";

type Props = { color: string; isBurgerMenuOpen: boolean; height: number };

export const ChazzLogo = ({ color, isBurgerMenuOpen, height }: Props) => {
  const h = height - 7 > 8 ? 8 : height - 7;
  const position = isBurgerMenuOpen ? "fixed" : "relative";
  const style = {
    position: position,
    height: h + "vh",
    transition: "1s"
  } as React.CSSProperties;

  return (
    <div className="chazz-logo">
      <Link to="/">
        <Logo fill={color} style={style} />
      </Link>
    </div>
  );
};
