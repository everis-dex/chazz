import React from "react";

import Nav from "../../Nav/Nav";
import { ProjectCard } from "./Project/Project";
import projects from "../../../content/projects.json";
import { Project } from "../../../interfaces/interfaces";

import "./OurWork.styles.scss";

export const OurWork = () => {
  const slides: Project[] = [...projects];

  return (
    <div className="work-container">
      <div className="header-nav">
        <Nav />
      </div>
      <div className="work-container--content">
        <div className="work-detail">
          <h1 className="header">Our work</h1>
          <h3 className="detail">
            We are an specialized team ready to face diverse typology projects, loving to accompany brands to take a
            step forward and set the pace of times.
          </h3>
        </div>
        {slides.map((slide: Project, index: number) => (
          <div key={index}>
            <ProjectCard {...slide} />
          </div>
        ))}
      </div>
    </div>
  );
};
