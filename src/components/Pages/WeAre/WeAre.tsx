import React, { useEffect } from "react";

import { Nav, Footer } from "../index";

export const WeAre = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/weare" />
      <p>We are</p>
      <Footer />
    </>
  );
};
