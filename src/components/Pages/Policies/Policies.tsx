import React, { useEffect } from "react";

import { AllowCookies, Footer, LineBreakerSelector, Nav } from "../../shared";
import { CookiePolicy } from "./CookiePolicy/CookiePolicy";
import { PrivacyPolicy } from "./PrivacyPolicy/PrivacyPolicy";

import "./Policies.scss";

export const Policies = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const title = "Privacy Policy+ & Cookie Declaration";
  const privacyChosen = true;

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="policies-container">
        <div className="policies-header">
          <h1 className="header-title">
            <LineBreakerSelector typedLines={title} />
          </h1>
        </div>

        <div className="policies-selector">
          <span className="filter-category selected">Privacy Policy</span>
          <span className="filter-category">Cookie Declaration</span>
        </div>

        <div className="selected-content">{privacyChosen ? <PrivacyPolicy /> : <CookiePolicy />}</div>
      </div>
      <Footer />
    </>
  );
};
