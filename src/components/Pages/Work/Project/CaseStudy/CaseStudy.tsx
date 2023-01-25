import React from "react";
import { projects } from "../../../../../content/index";
import { IProject } from "../../../../../interfaces/cms";
import { CaseInfo } from "./CaseInfo/CaseInfoServices";
import { CaseInfoTitle } from "./CaseInfo/CaseInfoTitle";
import { LineBreakerSelector } from "../../../../shared/LineBreaker/LineBreakerSelector";

import "./CaseStudy.styles.scss";

type Props = { caseStudyId: number; handleBack: () => void };

export const CaseStudy = ({ caseStudyId, handleBack }: Props) => {
  const project: IProject = projects.filter(project => project.id === caseStudyId)[0] as IProject;
  console.log(project.sections?.fourthFWImageWithOverlappedText?.imagePath);
  return (
    <>
      <button onClick={handleBack}>BACK</button>
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
        <img src={project.sections?.firstFWImagePath} alt="Portatil"></img>
      </div>
      <div className="fw-claim">
        <LineBreakerSelector typedLines="Developing the* complete Mobility As A* Service’s project with* Renfe, the Spanish* leader in rail transport."></LineBreakerSelector>
      </div>
      <div className="work-container">
        <div className="fw-image">
          <img src={project.sections?.secondFWImagePath} alt="1º Roja Img" />
        </div>
        <div className="section-flex-container">
          <div className="section-left-column">
            <LineBreakerSelector typedLines={project.sections?.firstTCSection?.leftColumnIntro}></LineBreakerSelector>
          </div>
          <div className="section-rigth-column">
            <h3>{project.sections?.firstTCSection?.rightColumn.paragraphTitle}</h3>
            <LineBreakerSelector
              typedLines={project.sections?.firstTCSection?.rightColumn.paragraph}
            ></LineBreakerSelector>
          </div>
        </div>
        <div className="fw-image">
          <img src={project.sections?.thirthFWImagePath} alt="2º Roja Img"></img>
        </div>
        <div className="section-flex-container">
          <div className="section-left-column"></div>
          <div className="section-rigth-column">
            <h3>{project.sections?.rightColumnOnlyInfoSection?.paragraphTitle}</h3>
            <LineBreakerSelector
              typedLines={project.sections?.rightColumnOnlyInfoSection?.paragraph}
            ></LineBreakerSelector>
          </div>
        </div>
      </div>
      <div className="fw-image">
        <img src={project.sections?.fourthFWImageWithOverlappedText?.imagePath} alt="Calle"></img>
        {/* Aqui va el caption dentro de la imagen : project.sections?.fourthFWImageWithOverlappedText?.overlappedText */}
      </div>
      <div className="fw-claim">
        <h1>
          <LineBreakerSelector typedLines={project.sections?.secondFWClaim}></LineBreakerSelector>
        </h1>
      </div>
      <div className="work-container">
        <div className="fw-image">
          <img src={project.sections?.fifthFWImageWithCaption?.imagePath} alt="Blanca"></img>
        </div>
        <div className="section-flex-container">
          <div className="section-left-column"></div>
          <div className="section-rigth-column">
            <LineBreakerSelector typedLines={project.sections?.fifthFWImageWithCaption?.caption}></LineBreakerSelector>
          </div>
        </div>
      </div>
      <div className="fw-image">
        <img src={project.sections?.sixthFWImagePath} alt="Marquesina"></img>
        {/* Aqui va el caption dentro de la imagen : project.sections?.fourthFWImageWithOverlappedText?.overlappedText */}
      </div>
      <div className="work-container">
        <div className="section-flex-container">
          <div className="section-left-column">
            <div className="fw-image">
              <img src={project.sections?.secondTCSection?.leftColumn.imagePath} alt="Personaje"></img>
            </div>
            <LineBreakerSelector
              typedLines={project.sections?.secondTCSection?.leftColumn.overlappedText}
            ></LineBreakerSelector>
          </div>
          <div className="section-rigth-column">
            <div className="fw-image">
              <img src={project.sections?.secondTCSection?.rightColumn.imagePath} alt="Linea"></img>
            </div>
            <LineBreakerSelector
              typedLines={project.sections?.secondTCSection?.rightColumn.overlappedText}
            ></LineBreakerSelector>
          </div>
        </div>
        <div className="fw-image">
          <img src={project.sections?.seventhFWImagePath} alt="Portatil"></img>
        </div>
        <div className="fw-image">
          <img src={project.sections?.eigthFWImageWithCaption?.imagePath} alt="GRIS"></img>
        </div>
        <div className="fw-claim">
          <LineBreakerSelector typedLines={project.sections?.eigthFWImageWithCaption?.caption}></LineBreakerSelector>
        </div>
      </div>
      <button onClick={handleBack}>BACK</button>
    </>
  );
};
