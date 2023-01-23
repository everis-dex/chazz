import React from "react";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { CaseInfo } from "./CaseInfo/CaseInfoServices";
import { CaseInfoTitle } from "./CaseInfo/CaseInfoTitle";

import "./CaseStudy.styles.scss";

console.log("PROJECTS", projects);
type Props = { caseStudyId: number };

export const CaseStudy = ({ caseStudyId }: Props) => {
  console.log({ caseStudyId });
  console.log({ projects });
  const project: IProject = projects.filter(project => project.id === caseStudyId)[0] as IProject;
  console.log({ project });

  return (
    <div className="case-container">
      {project.caseInfo && <CaseInfoTitle text={project.caseInfo.title} />}
      {project.title && <CaseInfo section="Client" text={project.title} />}
      {project.caseInfo && <CaseInfo section="Services" text={project.caseInfo.services} />}
    </div>
  );
};
