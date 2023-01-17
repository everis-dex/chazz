import React, { Fragment } from "react";

import { IProject } from "../../../../interfaces/cms";
import { LineBreakerSelector } from "../../../shared/index";
import { ProjectCard } from "../Project/ProjectCard";

import { work } from "../../../../content/index";
import { projects } from "../../../../content/index";

const formats = {
  big: 0, // When the Project occupies two columns
  equal: 1, // When both Projects have the same image height
  left: 2, // When Project in left column has bigger image
  right: 3 // When Project in right column has bigger image
};

const imageConfig = { auto: "auto", half: "half" };

// la configuración se escoge por cada row, por cada par de columnas
let config = [formats.left, formats.big, formats.left, formats.right, formats.equal];

type Props = {
  setCaseStudyId: (a: number) => void
}

export const ProjectsGrid = ({ setCaseStudyId }: Props) => {
  const columnCount: number = 2;
  let currentColumn: number = 0;
  let currentRow: number = 0;
  let configuration = config[0];

  function handleProjectFormat(): string[] {
    let format: string = imageConfig.auto;

    currentColumn++;
    let columnFullWidth: string = ""; // full-width can be "" or "full-width"
    let columnPosition: number = currentColumn % columnCount;

    switch (columnPosition) {
      case 0: // left column
        // Reset configuration, head to next row
        currentRow = currentColumn / columnCount;
        configuration = config[currentRow];

        if (configuration === formats.right) format = imageConfig.half;
        if (configuration === formats.big) {
          columnFullWidth = "full-width";
          // Occupies entire row, so head to next row
          currentRow++;
          currentColumn++;
        }
        break;

      case 1: // right column
        if (configuration === formats.left) format = imageConfig.half;
        break;
    }
    return [format, columnFullWidth];
  }

  return (
    <>
      <h1 className="work-header">{work.title}</h1>
      <div className="work-container--content">
        <div className="work-detail">
          <LineBreakerSelector typedLines={work.subtitle} />
        </div>

        {projects &&
          projects.map((proj, index: number) => {
            const project = proj as IProject;
            console.log("🚀 ~ file: ProjectsGrid.tsx:74 ~ ProjectsGrid ~ project", project);
            const [format, columns] = handleProjectFormat();
            return (
              <Fragment key={index}>
                <ProjectCard data={project} format={format} columns={columns} setCaseStudyId={setCaseStudyId} />
              </Fragment>
            );
          })}
      </div>
    </>
  );
};
