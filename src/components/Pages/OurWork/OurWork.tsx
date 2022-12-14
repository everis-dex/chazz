import React from "react";

import Nav from "../../Nav/Nav";
import { ProjectCard } from "./Project/Project";
import projects from "../../../content/projects.json";
import { Project } from "../../../interfaces/interfaces";

import "./OurWork.styles.scss";

export const OurWork = () => {
  return (
    <div className="work-container">
      <div className="header-nav">
        <Nav />
      </div>
      <h1 className="work-header">Our work</h1>
      <div className="work-container--content">
        <div className="work-detail">
          We are an specialized team ready to face diverse typology projects, loving to accompany brands to take a step
          forward and set the pace of times.
        </div>
        {projects &&
          projects.map((project: Project, index: number) => (
            <div key={index}>
              <ProjectCard data={project} columns="adsf" />
            </div>
          ))}
      </div>
    </div>
  );
};
