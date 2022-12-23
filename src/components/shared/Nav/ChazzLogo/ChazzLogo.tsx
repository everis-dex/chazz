import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../../assets/Chazz_Logo.svg";

import "../Nav.styles.scss";

type Props = {
  color: string;
  isOpen: boolean;
};
export const ChazzLogo = ({ color, isOpen }: Props) => {
  return (
    <div className="chazz-logo">
      <Link to="/">
        {!isOpen && <Logo fill={color} />}
        {isOpen && color === "black" && <Logo fill="white" />}
        {isOpen && color === "white" && <Logo fill="white" />}
      </Link>
    </div>
  );
};
