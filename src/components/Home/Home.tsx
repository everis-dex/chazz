import React, { useEffect } from "react";

import { home } from "../../content/index";
import { Categories, HomeHeader, Partners, Projects } from "./index";

export const Home = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const { header, categories, projects, partners } = home;

  return (
    <>
      <HomeHeader {...header} />
      <Categories {...categories} />
      <Projects {...projects} />
      <Partners {...partners} />
    </>
  );
};
