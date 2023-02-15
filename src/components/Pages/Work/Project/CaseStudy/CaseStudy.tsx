import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../../../../content/index";
import { IProject, IProjectSection, IProjectSectionColumn } from "../../../../../interfaces/cms";
import { FeaturedProjects, LineBreakerSelector, Nav } from "../../../../shared";
import { CaseClaim, CaseImg, CaseImgWithOverlappedText, CaseInfo, CaseSectionColumn } from "./CaseInfo/index";

import "./CaseStudy.styles.scss";

export const CaseStudy = () => {
  useEffect(() => window.scrollTo(0, 0), []);

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
                {project.title && <CaseInfo section="Client" text={project.title} />}
              </div>
              <div className="subtitle-section">
                {project.caseInfo && <CaseInfo section="Services" text={project.caseInfo.services} />}
              </div>
            </div>
          </div>

          {projectSections && (
            <>
              {projectSections.map((section: IProjectSection, index: number) => {
                let content = <></>;
                switch (section.type) {
                  case "FWImage":
                    // image
                    // margin
                    // overlappedText
                    // caption
                    if (section.image !== undefined && section.margin !== undefined) {
                      if (section.overlappedText !== undefined) {
                        content = <CaseImgWithOverlappedText src={section.image} text={section.overlappedText} />;
                      } else {
                        content = (
                          <CaseImg
                            src={section.image}
                            text={section.caption ? section.caption : ""}
                            margin={section.margin}
                          />
                        );
                      }
                    }
                    break;

                  case "claim":
                    // text
                    // margin
                    if (section.text !== undefined && section.margin !== undefined) {
                      content = <CaseClaim text={section.text} margin={section.margin} />;
                    }
                    break;

                  case "columns": // Array
                    // image
                    // caption
                    // title
                    // body
                    if (section.column) {
                      content = (
                        <div className="work-container">
                          <div className="section-flex-container">
                            {section.column.map((column: IProjectSectionColumn, index: number) => {
                              const position = index % 2 === 0 ? "left" : "right";
                              const empty: boolean = column.title && column.body && column.image ? true : false;
                              return (
                                <React.Fragment key={index}>
                                  <CaseSectionColumn
                                    src={column.image}
                                    title={column.title}
                                    empty={empty}
                                    caption={column.caption}
                                    text={column.body}
                                    position={position}
                                  />
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    break;
                }

                return (
                  <div className="section" key={index}>
                    {content}
                    {/* <div className="separation" /> */}
                  </div>
                );
              })}
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
