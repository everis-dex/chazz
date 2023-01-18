import React from "react";

import { projects } from "../../../../../content/index";
import { IProject, IProjectSection } from "../../../../../interfaces/cms";

// import "./CaseStudies.styles.scss";

console.log("PROJECTS", projects);
type Props = { caseStudyId: number };

export const CaseStudy = ({ caseStudyId }: Props) => {
  const project: IProject = projects.filter(project => project.id === caseStudyId)[0] as IProject;
  console.log("PROJECT", project);
  return (
    <>
      {project.sections.map((section: IProjectSection) => {
        let returnedContent = <></>;
        if (section.oneColumn) {
          const column = section.oneColumn;
          // UNA COLUMNA
          if (column && column.image) {
            // "IMAGEN";
            returnedContent = (
              <img
                src={column.image.imageUrl.text}
                alt={column.image.overlappedText ? column.image.overlappedText.text : ""}
              />
            );
          } else if (section.oneColumn.claim) {
            returnedContent = <h2>{section.oneColumn.claim.text}</h2>;
            // "CLAIM";
          } else if (section.oneColumn.paragraph) {
            // "PARAGRAPH";
            returnedContent = <p>{section.oneColumn.paragraph.text}</p>;
          } else if (section.oneColumn.separator) {
            // "SEPARATOR";
            returnedContent = <div style={{ height: `${section.oneColumn.separator.height}px` }} />;
          }
        } else if (section.twoColumns) {
          // DOS COLUMNAS
          if (section.twoColumns.leftColumn) {
            const column = section.twoColumns.leftColumn;
            // "COLUMNA IZQUIERDA"
            if (column && column.image) {
              // "IMAGEN";
              returnedContent = (
                <img
                  src={column.image.imageUrl.text}
                  alt={column.image.overlappedText ? column.image.overlappedText.text : ""}
                />
              );
            } else if (section.twoColumns.leftColumn.intro) {
              // "INTRO"
              returnedContent = <h3>{section.twoColumns.leftColumn.intro.text}</h3>;
            } else if (section.twoColumns.leftColumn["paragraphTitle"]) {
              // "PARAGRAPH TITLE"
              returnedContent = <h3>{section.twoColumns.leftColumn["paragraphTitle"]["text"]}</h3>;
            } else if (section.twoColumns.leftColumn["paragraph"]) {
              // "PARAGRAPH"
              returnedContent = <p>{section.twoColumns.leftColumn["paragraph"]["text"]}</p>;
            }
          } else if (section.twoColumns.rightColumn) {
            const column = section.twoColumns.rightColumn;
            // "COLUMNA DERECHA"
            if (column && column.image) {
              // "IMAGEN";
              returnedContent = (
                <img
                  src={column.image.imageUrl.text}
                  alt={column.image.overlappedText ? column.image.overlappedText.text : ""}
                />
              );
            } else if (column.intro) {
              // "INTRO"
              returnedContent = <h3>{column.intro.text}</h3>;
            } else if (column.paragraphTitle) {
              // "PARAGRAPH TITLE"
              returnedContent = <h3>{column.paragraphTitle.text}</h3>;
            } else if (column.paragraph) {
              // "PARAGRAPH"
              returnedContent = <p>{column.paragraph.text}</p>;
            }
          }
        }
        return returnedContent;
      })}
    </>
  );
};
