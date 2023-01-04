import React from "react";
import { useEffect } from 'react';

import { Footer, Nav } from "../index";

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
