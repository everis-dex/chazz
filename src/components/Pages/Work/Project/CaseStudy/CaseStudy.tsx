import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { FeaturedProjects, LineBreakerSelector, Nav } from "../../../../shared";
import { CaseClaim, CaseImg, CaseImgWithOverlappedText, CaseInfo, CaseSectionColumn } from "./CaseInfo/index";

import "./CaseStudy.styles.scss";

export const CaseStudy = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const { id } = useParams();
  const filteredProjects = projects.filter(project => project.id === (id ? parseInt(id) : 0));
  const project: IProject = filteredProjects[0] as IProject;
  const projectSections = project.sections;

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
              {projectSections.firstFWImagePath && <CaseImg src={projectSections.firstFWImagePath} alt="Portatil" />}
              {projectSections.firstFWClaim && <CaseClaim text={projectSections.firstFWClaim} />}

              {/* First SECTION */}
              <div className="work-container">
                {projectSections.secondFWImagePath && <CaseImg src={projectSections.secondFWImagePath} alt="1º Roja" />}
                {projectSections.firstTCSection && (
                  <div className="section-flex-container">
                    <CaseSectionColumn position="left" text={projectSections.firstTCSection?.leftColumnIntro} />
                    <CaseSectionColumn
                      position="right"
                      title={projectSections.firstTCSection?.rightColumn.paragraphTitle}
                      text={projectSections.firstTCSection?.rightColumn.paragraph}
                    />
                  </div>
                )}
                {projectSections.thirthFWImagePath && (
                  <CaseImg src={projectSections.thirthFWImagePath} alt="Portatil" />
                )}
                {projectSections.rightColumnOnlyInfoSection && (
                  <div className="section-flex-container">
                    <CaseSectionColumn position="left" empty />
                    <CaseSectionColumn
                      position="right"
                      title={projectSections.rightColumnOnlyInfoSection?.paragraphTitle}
                      text={projectSections.rightColumnOnlyInfoSection?.paragraph}
                    />
                  </div>
                )}
              </div>
              {projectSections.fourthFWImageWithOverlappedText?.imagePath && (
                <CaseImgWithOverlappedText
                  src={projectSections.fourthFWImageWithOverlappedText?.imagePath}
                  alt="ImgWithOverlappedText"
                  text={projectSections.fourthFWImageWithOverlappedText?.overlappedText}
                />
              )}
              {projectSections.secondFWClaim && (
                <CaseClaim text={projectSections.secondFWClaim} style={{ width: "85%", margin: "auto" }} />
              )}

              {/* Second SECTION */}
              <div className="work-container">
                {projectSections.fifthFWImageWithCaption && (
                  <CaseImg
                    src={projectSections.fifthFWImageWithCaption?.imagePath}
                    alt="Blanca"
                    text={projectSections.fifthFWImageWithCaption?.caption}
                  />
                )}
              </div>
              {projectSections.sixthFWImagePath && <CaseImg src={projectSections.sixthFWImagePath} alt="Marquesina" />}

              {/* Third SECTION */}
              <div className="work-container">
                {projectSections.secondTCSection && (
                  <div className="section-flex-container2">
                    <CaseSectionColumn
                      position="left"
                      image={projectSections.secondTCSection?.leftColumn.imagePath}
                      text={projectSections.secondTCSection?.leftColumn.overlappedText}
                    />
                    <CaseSectionColumn
                      position="right"
                      image={projectSections.secondTCSection?.rightColumn.imagePath}
                      text={projectSections.secondTCSection?.rightColumn.overlappedText}
                    />
                  </div>
                )}
                {projectSections.seventhFWImagePath && (
                  <CaseImg src={projectSections.seventhFWImagePath} alt="Portatil" />
                )}
                <div className="separation" />
                {projectSections.eigthFWImageWithCaption && (
                  <CaseImg
                    src={projectSections.eigthFWImageWithCaption?.imagePath}
                    alt="GRIS"
                    text={projectSections.eigthFWImageWithCaption?.caption}
                  />
                )}
              </div>
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
