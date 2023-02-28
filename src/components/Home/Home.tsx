import React, { useEffect } from "react";

import { home } from "../../content/index";
import { Categories, HomeHeader, Partners, Projects } from "./index";

export const Home = () => {
  const { header, categories, projects, partners } = home;

  useEffect(() => {
    function appHeight(): void {
      document.documentElement?.style.setProperty("--app-height", `${window.innerHeight}px`);
    }
    appHeight();
    window.addEventListener("resize", appHeight);

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  return (
    <>
      <HomeHeader {...header} />
      <Categories {...categories} />
      <Projects {...projects} />
      <Partners {...partners} />
    </>
  );
};
