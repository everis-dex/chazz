import React, { useEffect } from "react";

// import { Services } from "../../../interfaces/interfaces";
import { Nav } from "../../Nav/Nav";
import { AppFooter } from "../../shared/AppFooter/AppFooter";

export const OurServices = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" />
      <p>Our services</p>
      <AppFooter />
    </>
  );
};
