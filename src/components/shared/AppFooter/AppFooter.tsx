import React from "react";

import { CompanyInfo } from "./CompanyInfo/CompanyInfo";
import { BottomBar } from "./BottomBar/BottomBar";

import "./AppFooter.styles.scss";

export const AppFooter = () => {
  return (
    <footer>
      <CompanyInfo />
      <BottomBar />
    </footer>
  );
};
