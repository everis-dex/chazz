import React, { useEffect } from "react";

import { Nav, Footer } from "../index";

export const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/services" />
      <p>Our services</p>
      <Footer />
    </>
  );
};
