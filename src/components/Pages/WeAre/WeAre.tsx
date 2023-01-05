import React from "react";
import { useEffect } from "react";

import { Footer, Nav } from "../index";

export const WeAre = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/weare" isNavVisible={true} isPlaying={false} />
      <p>We are</p>
      <Footer />
    </>
  );
};
