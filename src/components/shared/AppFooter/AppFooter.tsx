import React from "react";

import { BottomBar, CompanyInfo } from "./index";

import "./AppFooter.styles.scss";

export const AppFooter = () => {
  return (
    <footer>
      <CompanyInfo />
      <BottomBar />
    </footer>
  );
};
