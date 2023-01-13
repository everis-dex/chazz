import React, { Fragment } from "react";

import { IProject, IWork } from "../../../../interfaces/cms";
import { LineBreakerSelector } from "../../../shared/LineBreaker/LineBreakerSelector";
import { ProjectCard } from "../Project/Project";

import { projectsInfo as projects } from "../../../../content/index";

const formats = {
  big: 0, // When the Project occupies two columns
  equal: 1, // When both Projects have the same image height
  left: 2, // When Project in left column has bigger image
  right: 3 // When Project in right column has bigger image
};

const imageConfig = { auto: "auto", half: "half" };

// la configuración se escoge por cada row, por cada par de columnas
let config = [formats.right, formats.big, formats.left, formats.right, formats.equal, formats.big];

export const ProjectsGrid = (workData: IWork) => {
  const columnCount: number = 2;
  let currentColumn: number = 0;
  let currentRow: number = 0;
  let configuration = config[0];

  function handleProjectFormat(): string[] {
    let format: string = imageConfig.half;

    currentColumn++;
    let columnFullWidth: string = ""; // full-width can be "" or "full-width"
    let columnPosition: number = currentColumn % columnCount;

    switch (columnPosition) {
      case 0: // left column
        // Reset configuration, head to next row
        currentRow = currentColumn / columnCount;
        configuration = config[currentRow];

        if (configuration === formats.left) format = imageConfig.auto;
        if (configuration === formats.big) {
          format = imageConfig.auto;
          columnFullWidth = "full-width";
          // Occupies entire row, so head to next row
          currentRow++;
          currentColumn++;
        }
        break;

      case 1: // right column
        if (configuration === formats.right) format = imageConfig.auto;
        break;
    }
    return [format, columnFullWidth];
  }

  return (
    <>
      <h1 className="work-header">{workData.title}</h1>
      <div className="work-container--content">
        <div className="work-detail">
          <LineBreakerSelector typedLines={workData.subtitle} />
        </div>

        {projects &&
          projects.map((project: IProject, index: number) => {
            const [format, columns] = handleProjectFormat();
            return (
              <Fragment key={index}>
                <ProjectCard data={project} format={format} columns={columns} />
              </Fragment>
            );
          })}
      </div>
    </>
  );
};
