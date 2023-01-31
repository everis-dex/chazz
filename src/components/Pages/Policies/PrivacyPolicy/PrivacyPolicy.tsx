import React, { useState, useEffect } from "react";
import { AllowCookies, Footer } from "../../../shared";
import { Nav } from "../../../shared/Nav/Nav";

export const PrivacyPolicy = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Nav
        color="black"
        disabledMenuOption=""
        isNavVisible={true}
        isPlaying={false}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        activeStyle="active-pink"
      />
      <AllowCookies />
      <h2>PrivacyPolicy</h2>
      <Footer />
    </>
  );
};
