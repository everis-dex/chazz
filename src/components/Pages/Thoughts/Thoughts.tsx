import React, { useEffect, useState } from "react";

import { Footer, Nav } from "../../shared/index";

export const Thoughts = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Nav isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      <p>Thoughts</p>
      <Footer />
    </>
  );
};
