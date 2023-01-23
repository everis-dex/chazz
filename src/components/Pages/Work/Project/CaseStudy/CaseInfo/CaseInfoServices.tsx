import React from "react";
import "../CaseStudy.styles.scss";

type Props = {
  section: string;
  text: string;
};

export const CaseInfo = ({ section, text }: Props) => {
  return (
    <div>
      <span className="caseinfo-section">{section}</span>
      <p>{text}</p>
    </div>
  );
};
