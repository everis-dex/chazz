import React, { Fragment } from "react";

import { ProjectCard } from "../Project/Project";
import { LineBreakerSelector } from "../../../shared/LineBreaker/LineBreakerSelector";
import { IProject, IWork } from "../../../../interfaces/interfaces";

import work from "../../../../content/pages/work.json";
import projects from "../../../../content/projects.json";

const formats = {
  big: 0, // When the Project occupies two columns
  equal: 1, // When both Projects have the same image height
  left: 2, // When Project in left column has bigger image
  right: 3 // When Project in right column has bigger image
};

// la configuración se escoge por cada row, por cada par de columnas
let config = [formats.right, formats.left, formats.big, formats.right, formats.equal, formats.left];

export const ProjectsGrid = () => {
  const columnCount: number = 2;
  let currentColumn: number = 0;
  let currentRow: number = 0;
  let configuration = config[0];

  function handleProjectFormat(/*index: number*/) {
    currentColumn++;
    let imgHeight: string = "300px";
    let columnFullWidth: string = ""; //full width values "" or "full-width"
    let columnPosition: number = currentColumn % columnCount;
    // left column
    if (columnPosition === 0) {
      // Reset configuration, head to next row
      currentRow = currentColumn / columnCount;
      configuration = config[currentRow];

      if (configuration === formats.left) imgHeight = "600px";
      // big column
      if (configuration === formats.big) {
        imgHeight = "600px";
        columnFullWidth = "full-width";
        //Reset configuration, head to next row
        currentRow++;
        currentColumn++;
      }
    }
    // right column
    else if (columnPosition === 1) {
      if (configuration === formats.right) imgHeight = "600px";
    }
    return [imgHeight, columnFullWidth];
  }

  const typedLines: IWork = work;

  return (
    <>
      <h1 className="work-header">{typedLines.title}</h1>
      <div className="work-container--content">
        <div className="work-detail">
          <LineBreakerSelector typedLines={typedLines.subtitle} />
        </div>

        {projects &&
          projects.map((project: IProject, index: number) => {
            let valuesProjectFormat = handleProjectFormat();
            return (
              <Fragment key={index}>
                <ProjectCard data={project} height={valuesProjectFormat[0]} columns={valuesProjectFormat[1]} />
              </Fragment>
            );
          })}
      </div>
    </>
  );
};
