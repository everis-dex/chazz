import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { FeaturedProjects, Nav } from "../../../../shared";
import {
  CaseClaim,
  CaseImg,
  CaseImgWithOverlappedText,
  CaseInfo,
  CaseInfoTitle,
  CaseSectionColumn
} from "./CaseInfo/index";

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
              {project.caseInfo && <CaseInfoTitle text={project.caseInfo.title} />}
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
              <CaseImg src={projectSections.firstFWImagePath} alt="Portatil" />
              <CaseClaim text={projectSections.firstFWClaim} />

              {/* First SECTION */}
              <div className="work-container">
                <CaseImg src={projectSections.secondFWImagePath} alt="1º Roja" />
                <div className="section-flex-container">
                  <CaseSectionColumn position="left" text={projectSections.firstTCSection?.leftColumnIntro} />
                  <CaseSectionColumn
                    position="right"
                    title={projectSections.firstTCSection?.rightColumn.paragraphTitle}
                    text={projectSections.firstTCSection?.rightColumn.paragraph}
                  />
                </div>
                <CaseImg src={projectSections.thirthFWImagePath} alt="Portatil" />
                <div className="section-flex-container">
                  <CaseSectionColumn position="left" empty />
                  <CaseSectionColumn
                    position="right"
                    title={projectSections.rightColumnOnlyInfoSection?.paragraphTitle}
                    text={projectSections.rightColumnOnlyInfoSection?.paragraph}
                  />
                </div>
              </div>
              {projectSections.fourthFWImageWithOverlappedText?.imagePath && (
                <CaseImgWithOverlappedText
                  src={projectSections.fourthFWImageWithOverlappedText?.imagePath}
                  alt="ImgWithOverlappedText"
                  text={projectSections.fourthFWImageWithOverlappedText?.overlappedText}
                />
              )}
              <CaseClaim text={projectSections.secondFWClaim} style={{ width: "85%", margin: "auto" }} />

              {/* Second SECTION */}
              <div className="work-container">
                <CaseImg
                  src={projectSections.fifthFWImageWithCaption?.imagePath}
                  alt="Blanca"
                  text={projectSections.fifthFWImageWithCaption?.caption}
                />
              </div>
              <CaseImg src={projectSections.sixthFWImagePath} alt="Marquesina" />

              {/* Third SECTION */}
              <div className="work-container">
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
                <CaseImg src={projectSections.seventhFWImagePath} alt="Portatil" />
                <div className="separation" />
                <CaseImg
                  src={projectSections.eigthFWImageWithCaption?.imagePath}
                  alt="GRIS"
                  text={projectSections.eigthFWImageWithCaption?.caption}
                />
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
