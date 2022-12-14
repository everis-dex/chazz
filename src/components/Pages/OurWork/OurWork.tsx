import React from "react";

import projects from "../../../content/projects.json";
import { Project } from "../../../interfaces/interfaces";

export const OurWork = () => {
  const slides: Project[] = [...projects];

  return (
    <>
      Our Work
      {slides.map((slide: Project, index: number) => {
        return (
          <div key={index}>
            <p>{slide.title}</p>
            <p>{slide.branding}</p>
            <p>{slide.service}</p>
            <p>{slide.value}</p>
          </div>
        );
      })}
    </>
  );
};
