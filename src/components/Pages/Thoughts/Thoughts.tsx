import React from "react";
import { useEffect, useState } from "react";

import { Footer, Nav } from "../index";

export const Thoughts = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Nav color="black" disabledMenuOption="/thoughts" isNavVisible={true} isPlaying={false} isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      <p>Thoughts</p>
      <Footer />
    </>
  );
};
