import React, { Fragment, useEffect, useState } from "react";

import { IProject, IProjectSectionOneColumn } from '../../../../../interfaces/cms';
import { Media } from "../../../../shared/index";

import { projects } from "../../../../../content/index";

// import "./CaseStudies.styles.scss";

console.log("PROJECTS", projects);
type Props = { caseStudyId: number };

export const CaseStudy = ({ caseStudyId }: Props) => {

    const project = projects.filter(project => project.id === caseStudyId)[0];
    console.log("PROJECT", project);
    return (
        <>

            {project.sections.map(section => {
                if (section.oneColumn) {
                    // UNA COLUMNA
                    if (section.oneColumn.image) {
                        // "IMAGEN";
                        return <img src={section.oneColumn?.image?.imageUrl} alt={section.oneColumn?.image?.overlappedText} />
                    } else if (section.oneColumn.claim) {
                        return <h2>{section.oneColumn.claim.text}</h2>
                        // "CLAIM";
                    } else if (section.oneColumn.paragraph) {
                        // "PARAGRAPH";
                        return <p>{section.oneColumn.paragraph.text}</p>
                    } else if (section.oneColumn.separator) {
                        // "SEPARATOR";
                        return <div style={{ height: `${section.oneColumn.separator.height}px` }} />
                    }

                } else if (section.twoColumns) {
                    // DOS COLUMNAS
                    if (section.twoColumns.leftColumn) {
                        // "COLUMNA IZQUIERDA"
                        if (section.twoColumns.leftColumn.image) {
                            // "IMAGEN";
                            return <img src={section.twoColumns.leftColumn.image?.imageUrl} alt={section.twoColumns.leftColumn.image.overlappedText} />
                        } else if (section.twoColumns.leftColumn.intro) {
                            // "INTRO"
                            return <h3>{section.twoColumns.leftColumn.intro.text}</h3>
                        } else if (section.twoColumns.leftColumn.paragraphTitle) {
                            // "PARAGRAPH TITLE"
                            return <h3>{section.twoColumns.leftColumn.paragraphTitle.text}</h3>
                        } else if (section.twoColumns.leftColumn.paragraph) {
                            // "PARAGRAPH"
                            return <p>{section.twoColumns.leftColumn.paragraph.text}</p>
                        }

                    } else if (section.twoColumns.rightColumn) {
                        // "COLUMNA DERECHA"
                        if (section.twoColumns.rightColumn.image) {
                            // "IMAGEN";
                            return <img src={section.twoColumns.rightColumn.image.imageUrl} alt={section.twoColumns.rightColumn.image.overlappedText} />
                        } else if (section.twoColumns.rightColumn.intro.text) {
                            // "INTRO"
                            return <h3>{section.twoColumns.rightColumn.intro.text}</h3>
                        } else if (section.twoColumns.rightColumn.paragraphTitle) {
                            // "PARAGRAPH TITLE"
                            return <h3>{section.twoColumns.rightColumn.paragraphTitle.text}</h3>
                        } else if (section.twoColumns.rightColumn.paragraph) {
                            // "PARAGRAPH"
                            return <p>{section.twoColumns.rightColumn.paragraph.text}</p>
                        }
                    }
                }
            })}
        </>
    )
};
