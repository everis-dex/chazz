import React, { useEffect } from "react";
import { AllowCookies } from "../../Home";

import { Footer, Nav } from "../../shared/index";

export const Thoughts = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav />
      <AllowCookies />
      <Footer />
    </>
  );
};
