import React from "react";

import { footer } from "../../../content/index";
import { BottomBar, CompanyInfo } from "./index";

import "./Footer.styles.scss";

export const Footer = () => {
  return (
    <footer>
      <CompanyInfo {...footer} />
      <BottomBar />
    </footer>
  );
};
