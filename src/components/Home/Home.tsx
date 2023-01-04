import React from "react";

import home from "../../content/pages/home/home.json";
import { Categories, Footer, HomeHeader, Partners, Projects } from "./index";
import { useEffect } from "react";

export const Home = () => {
  const headerData = home.header;
  const categoriesData = home.categories;
  const projectsData = home.projects;
  const partnersData = home.partners;

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <HomeHeader {...headerData} />
      <Categories {...categoriesData} />
      <Projects {...projectsData} />
      <Partners {...partnersData} />
      <Footer />
    </>
  );
};
