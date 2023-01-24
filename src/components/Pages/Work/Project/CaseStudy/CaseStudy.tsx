import React from "react";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { CaseInfoServices } from "./CaseInfo/CaseInfoServices";
import { CaseInfoTitle } from "./CaseInfo/CaseInfoTitle";

// import "./CaseStudies.styles.scss";

type Props = { caseStudyId: number };

export const CaseStudy = ({ caseStudyId }: Props) => {
  const project: IProject = projects.filter(project => project.id === caseStudyId)[0] as IProject;

  return (
    <>
      {project.caseInfo && <CaseInfoTitle text={project.caseInfo.title} />}
      {project.caseInfo && <CaseInfoServices text={project.caseInfo.services} />}
    </>
  );
};
