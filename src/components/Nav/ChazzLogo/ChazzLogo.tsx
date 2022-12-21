import React from "react";
import { ReactComponent as Logo } from "../../../assets/Chazz_Logo.svg";
import "../Nav.scss";
import { Link } from "react-router-dom";

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
