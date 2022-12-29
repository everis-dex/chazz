import React from "react";

import { BottomBar, CompanyInfo } from "./index";

import "./Footer.styles.scss";

export const Footer = () => {
  return (
    <footer>
      <CompanyInfo />
      <BottomBar />
    </footer>
  );
};
