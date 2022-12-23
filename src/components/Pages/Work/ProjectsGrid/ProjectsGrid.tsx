import React, { Fragment } from "react";

import { ProjectCard } from "../Project/Project";
import projects from "../../../../content/projects.json";
import { IProject } from "../../../../interfaces/interfaces";

const formats = {
  big: 0, // When the Project occupies two columns
  equal: 1, // When both Projects have the same image height
  left: 2, // When Project in left column has bigger image
  right: 3 // When Project in right column has bigger image
};

// la configuración se escoge por cada row, por cada par de columnas
let config = [formats.right, formats.left, formats.big, formats.right, formats.equal];

type Props = {
  introLines: string[];
};

export const ProjectsGrid = ({ introLines }: Props) => {
  console.log(introLines);
  const columnCount: number = 2;
  let currentColumn: number = 0;
  let currentRow: number = 0;
  let configuration = config[0];

  function handleProjectFormat(index: number) {
    currentColumn++;
    let imgHeight: string = "300px";
    let columnPosition: number = currentColumn % columnCount;
    // left column
    if (columnPosition === 0) {
      // Reset configuration, head to next row
      currentRow = currentColumn / columnCount;
      configuration = config[currentRow];
      if (configuration === formats.left) imgHeight = "600px";
    }
    // right column
    else if (columnPosition === 1) {
      if (configuration === formats.right) imgHeight = "600px";
    }
    return imgHeight;
  }

  return (
    <>
      <h1 className="work-header">Our work</h1>
      <div className="work-container--content">
        <div className="work-detail">
          {introLines.map((introLine: string, index: number) => (
            <Fragment key={index}>
              {introLine}
              <br />
            </Fragment>
          ))}
        </div>
        {projects &&
          projects.map((project: IProject, index: number) => {
            let height = handleProjectFormat(index);
            return (
              <Fragment key={index}>
                <ProjectCard data={project} height={height} />
              </Fragment>
            );
          })}
      </div>
    </>
  );
};
