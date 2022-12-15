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
        <Nav color="black" />
      </div>
      <h1 className="work-header">Our work</h1>
      <div className="work-container--content">
        <div className="work-detail">
          We are an specialized team ready to face diverse typology projects, loving to accompany brands to take a step
          forward and set the pace of times.
        </div>
        {projects &&
          projects.map((project: Project, index: number) => {
            index = index + 1;
            let esPar: number = index % 2;
            let height: string = "300px";
            // esPar === 0, la columna de la izquierda
            if (esPar === 0) {
              // take configuration
              let currentRow: number = index / 2;
              configuration = config[currentRow];
              if (configuration === 2) height = "600px"; // left
            }
            // esPar === 1, la columna de la derecha
            else if (esPar === 1) {
              // extender imagen
              if (configuration === 3) height = "600px";
            }
            return (
              <div key={index}>
                <ProjectCard data={project} columns="adsf" height={height} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

let formats = { big: 0, equal: 1, left: 2, right: 3 };

// la configuración se escoge por cada row, por cada par de columnas
let config = [formats.right, formats.left, formats.big, formats.right, formats.equal];
let configuration: number = config[0];
