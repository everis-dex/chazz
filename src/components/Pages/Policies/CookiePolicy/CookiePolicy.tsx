import React, { useEffect } from "react";

import { AllowCookies } from "../../../shared/AllowCookies/AllowCookies";
import { Footer } from "../../../shared/Footer/Footer";
import { Nav } from "../../../shared/Nav/Nav";

export const CookiePolicy = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav />
      <AllowCookies />
      <h2>CookiePolicy</h2>
      <Footer />
    </>
  );
};
