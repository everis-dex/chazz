import React from "react";
import { useEffect } from "react";

import { Footer, Nav } from "../index";

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
