import React from "react";
import { ReactComponent as Logo } from "../../../assets/Chazz_Logo.svg";
import "../Nav.scss";

type Props = { color: string };

export const ChazzLogo = ({ color }: Props) => {
  return (
    <div className="chazz-logo">
      <Logo fill={color} />
    </div>
  );
};
