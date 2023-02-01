import React, { useState, useEffect } from "react";
import { Nav } from "../../../shared/Nav/Nav";
import { AllowCookies } from "../../../shared/AllowCookies/AllowCookies";
import { Footer } from "../../../shared/Footer/Footer";

export const CookiePolicy = () => {
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
      <h2>CookiePolicy</h2>
      <Footer />
    </>
  );
};
