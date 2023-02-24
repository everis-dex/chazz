import React from "react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../../../../content/index";
import { IProject, IProjectSection } from "../../../../../interfaces/cms";
import { ScrollToTop } from "../../../../../utils/utils";

import { FeaturedProjects, LineBreakerSelector, Nav } from "../../../../shared";
import { CaseSection, SectionInfo } from "./CaseSection/index";

import "./CaseStudy.styles.scss";

export const CaseStudy = () => {
  ScrollToTop();

  const { id } = useParams();
  const filteredProjects = projects.filter(project => project.id === (id ? parseInt(id) : 0));
  const project: IProject = filteredProjects[0] as IProject;
  const projectSections = project.caseInfo.sections;

  return (
    <>
      <Nav />
      {project && (
        <>
          <div className="case-container">
            <div className="case-container-title">
              {project.caseInfo && (
                <h1>
                  <LineBreakerSelector typedLines={project.caseInfo.title} />
                </h1>
              )}
            </div>
            <div className="case-container-info">
              <div className="subtitle-section">
                {project.title && <SectionInfo section="Client" text={project.title} />}
              </div>
              <div className="subtitle-section">
                {project.caseInfo && <SectionInfo section="Services" text={project.caseInfo.services} />}
              </div>
            </div>
          </div>

          {projectSections && (
            <>
              {projectSections.map((section: IProjectSection, index: number) => (
                <div className="case-study--section" key={index}>
                  <CaseSection {...section} />
                </div>
              ))}
            </>
          )}
        </>
      )}
      <Link to="/work" className="back-button">
        ← Back
      </Link>
      <FeaturedProjects />
    </>
  );
};
