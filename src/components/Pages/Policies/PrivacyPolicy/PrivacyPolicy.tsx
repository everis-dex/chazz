import React, { useEffect } from "react";

import { AllowCookies, Footer } from "../../../shared";
import { Nav } from "../../../shared/Nav/Nav";

export const PrivacyPolicy = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav />
      <AllowCookies />
      <h2>PrivacyPolicy</h2>
      <Footer />
    </>
  );
};
