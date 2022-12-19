import React, { useEffect } from "react";

import { Nav } from "../../Nav/Nav";
import { AppFooter } from "../../shared/AppFooter/AppFooter";

export const WeAre = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" />
      <p>We are</p>
      <AppFooter />
    </>
  );
};
