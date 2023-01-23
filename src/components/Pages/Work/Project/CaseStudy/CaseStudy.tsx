import React from "react";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { CaseInfoServices } from "./CaseInfo/CaseInfoServices";
import { CaseInfoTitle } from "./CaseInfo/CaseInfoTitle";

// import "./CaseStudies.styles.scss";

console.log("PROJECTS", projects);
type Props = { caseStudyId: number };

export const CaseStudy = ({ caseStudyId }: Props) => {
  console.log({ caseStudyId });
  console.log({ projects });
  const project: IProject = projects.filter(project => project.id === caseStudyId)[0] as IProject;
  console.log({ project });

  return (
    <>
      {project.caseInfo && <CaseInfoTitle text={project.caseInfo.title} />}
      {project.caseInfo && <CaseInfoServices text={project.caseInfo.services} />}
    </>
  );
};
