import React from "react";
import { Nav } from "../../../shared/Nav/Nav";
import { AllowCookies } from "../../../shared/AllowCookies/AllowCookies";
import { Footer } from "../../../shared/Footer/Footer";

export const CookiePolicy = () => {
  return (
    <>
      <Nav></Nav>
      <AllowCookies />
      <h2>CookiePolicy</h2>
      <Footer />
    </>
  );
};
