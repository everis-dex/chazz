import React from "react";
import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { CaseInfo } from "./CaseInfo/CaseInfoServices";
import { CaseInfoTitle } from "./CaseInfo/CaseInfoTitle";
import { LineBreakerSelector } from "../../../../shared/LineBreaker/LineBreakerSelector";

import "./CaseStudy.styles.scss";

console.log("PROJECTS", projects);
type Props = { caseStudyId: number };

export const CaseStudy = ({ caseStudyId }: Props) => {
  console.log({ caseStudyId });
  console.log({ projects });
  const project: IProject = projects.filter(project => project.id === caseStudyId)[0] as IProject;
  console.log({ project });

  return (
    <>
      <div className="case-container">
        <div className="case-container-title">
          {project.caseInfo && <CaseInfoTitle text={project.caseInfo.title} />}
        </div>

        <div className="case-container-info">
          {project.title && <CaseInfo section="Client" text={project.title} />}
          {project.caseInfo && <CaseInfo section="Services" text={project.caseInfo.services} />}
        </div>
      </div>
      <div className="fw-image">
        <img src={project.sections.firstFWImagePath} alt="First"></img>
      </div>
      <div className="fw-claim">
        <LineBreakerSelector typedLines="Developing the* complete Mobility As A* Service’s project with* Renfe, the Spanish* leader in rail transport."></LineBreakerSelector>
      </div>
      <div className="work-container">
        <div className="fw-image"></div>
        <div className="section-flex-container">
          <div className="section-left-column">
            <LineBreakerSelector typedLines="Mobility is a saturated and complex sector, and society needs a friendly proposal to move easily under the paradigm of sustainable travelling."></LineBreakerSelector>
          </div>
          <div className="section-rigth-column">
            <h3>The Big Challenge</h3>
            <p>
              Our bet was to join together technology and creativity, analyzing what users desire and how mobility
              context are configurated nowadays. After the research phase, we developed a new product and brand that
              help people to move easily in a multimodal way across the spanish's territory. Knowing that both product
              and brand must embrace people with the need to move.
            </p>

            <p>
              Around searching, planning and booking easily short, medium and long-distance trips and just with a single
              ticket, we innovated to create a tangible, easy and relaxing travel experience. Because dōcō essence is an
              holistic approach to the movement time and, in fact, dōcō is by itself a life style with no worries and no
              rush.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
