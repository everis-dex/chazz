import React, { useEffect } from "react";

import { Nav, Footer } from "../index";

export const Thoughts = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/thoughts" />
      <p>Thoughts</p>
      <Footer />
    </>
  );
};
