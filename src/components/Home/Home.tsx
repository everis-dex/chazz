import React, { useEffect } from "react";

import { home } from "../../content/index";
import { Categories, HomeHeader, Partners, Projects } from "./index";
import { Footer } from "../shared/index";

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
