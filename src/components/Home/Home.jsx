import React from "react";

import AppHeader from "./HomeHeader/HomeHeader";
import HomeSection1 from "./HomeSections/HomeSection1/HomeSection1";
import HomeSection2 from "./HomeSections/HomeSection2/HomeSection2";
import HomeSection3 from "./HomeSections/HomeSection3/HomeSection3";
import HomeSection4 from "./HomeSections/HomeSection4/HomeSection4";
import AppFooter from "../shared/AppFooter/AppFooter";

const Home = () => {
  return (
    <>
      <AppHeader />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <AppFooter />
    </>
  );
};

export default Home;
