import React, { useEffect } from "react";

// import { Thoughts } from "../../../interfaces/interfaces";
import { Nav } from "../../Nav/Nav";
import { AppFooter } from "../../shared/AppFooter/AppFooter";

export const Thoughts = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/thoughts" />
      <p>Thoughts</p>
      <AppFooter />
    </>
  );
};
