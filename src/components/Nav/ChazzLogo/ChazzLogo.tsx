import React from "react";
import { ReactComponent as Logo } from "../../../assets/Chazz_Logo.svg";
import "../Nav.scss";
import { Link } from "react-router-dom";

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
