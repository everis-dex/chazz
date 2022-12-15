import React from "react";
import { ReactComponent as Logo } from "../../../assets/Chazz_Logo.svg";
import "../Nav.scss";

export const ChazzLogo = () => {
  return (
    <div>
      <img src="assets/Chazz_Logo.svg" alt="logo" className="chazz-logo" />
    </div>
  );
};
