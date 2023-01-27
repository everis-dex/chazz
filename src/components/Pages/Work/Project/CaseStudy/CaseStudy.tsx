import React from "react";
import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { CaseInfo } from "./CaseInfo/CaseInfoServices";
import { CaseInfoTitle } from "./CaseInfo/CaseInfoTitle";
import { FeaturedProjects } from "../../../../shared";
import { CaseClaim } from "./CaseInfo/CaseClaim";
import { CaseImg, CaseImgWithOverlappedText } from "./CaseInfo/CaseImg";
import { CaseSectionColumn } from "./CaseInfo/CaseSectionColumn";
import "./CaseStudy.styles.scss";

type Props = { caseStudyId: number; handleBack: () => void };

export const CaseStudy = ({ caseStudyId, handleBack }: Props) => {
  const project: IProject = projects.filter(project => project.id === caseStudyId)[0] as IProject;
  console.log(project.sections?.fourthFWImageWithOverlappedText?.imagePath);
  return (
    <>
      {/* <button onClick={handleBack}>BACK</button> */}
      <div className="case-container">
        <div className="case-container-title">
          {project.caseInfo && <CaseInfoTitle text={project.caseInfo.title} />}
        </div>
        <div className="case-container-info">
          <div className="subtitle-section">{project.title && <CaseInfo section="Client" text={project.title} />}</div>
          <div className="subtitle-section">
            {project.caseInfo && <CaseInfo section="Services" text={project.caseInfo.services} />}
          </div>
        </div>
      </div>
      {project.sections?.firstFWImagePath && <CaseImg src={project.sections?.firstFWImagePath} alt="Portatil" />}
      {project.sections?.firstFWClaim && <CaseClaim text={project.sections?.firstFWClaim} />}
      <div className="work-container">
        {project.sections?.secondFWImagePath && <CaseImg src={project.sections?.secondFWImagePath} alt="1º Roja" />}
        <div className="section-flex-container">
          <CaseSectionColumn position="left" text={project.sections?.firstTCSection?.leftColumnIntro} />
          <CaseSectionColumn
            position="right"
            title={project.sections?.firstTCSection?.rightColumn.paragraphTitle}
            text={project.sections?.firstTCSection?.rightColumn.paragraph}
          />
        </div>
        {project.sections?.thirthFWImagePath && <CaseImg src={project.sections?.thirthFWImagePath} alt="Portatil" />}
        <div className="section-flex-container">
          <CaseSectionColumn position="left" empty />
          <CaseSectionColumn
            position="right"
            title={project.sections?.rightColumnOnlyInfoSection?.paragraphTitle}
            text={project.sections?.rightColumnOnlyInfoSection?.paragraph}
          />
        </div>
      </div>
      {project.sections?.fourthFWImageWithOverlappedText?.imagePath && (
        <CaseImgWithOverlappedText
          src={project.sections?.fourthFWImageWithOverlappedText?.imagePath}
          alt="ImgWithOverlappedText"
          text={project.sections?.fourthFWImageWithOverlappedText?.overlappedText}
        />
      )}
      {project.sections?.secondFWClaim && <CaseClaim text={project.sections?.secondFWClaim} />}
      <div className="work-container">
        {project.sections?.fifthFWImageWithCaption?.imagePath && (
          <CaseImg
            src={project.sections?.fifthFWImageWithCaption?.imagePath}
            alt="Blanca"
            text={project.sections?.fifthFWImageWithCaption?.caption}
          />
        )}
      </div>
      {project.sections?.sixthFWImagePath && <CaseImg src={project.sections?.sixthFWImagePath} alt="Marquesina" />}
      <div className="work-container">
        <div className="section-flex-container">
          <CaseSectionColumn
            position="left"
            image={project.sections?.secondTCSection?.leftColumn.imagePath}
            text={project.sections?.secondTCSection?.leftColumn.overlappedText}
          />
          <CaseSectionColumn
            position="right"
            image={project.sections?.secondTCSection?.rightColumn.imagePath}
            text={project.sections?.secondTCSection?.rightColumn.overlappedText}
          />
        </div>
        {project.sections?.seventhFWImagePath && <CaseImg src={project.sections?.seventhFWImagePath} alt="Portatil" />}
        <div className="separation" />
        {project.sections?.eigthFWImageWithCaption?.imagePath && (
          <CaseImg
            src={project.sections?.eigthFWImageWithCaption?.imagePath}
            alt="GRIS"
            text={project.sections?.eigthFWImageWithCaption?.caption}
          />
        )}
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>
      <div className="separation2" />

      <FeaturedProjects />
    </>
  );
};
