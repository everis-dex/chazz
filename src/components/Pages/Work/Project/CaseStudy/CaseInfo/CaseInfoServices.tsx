import React from "react";
import "../CaseStudy.styles.scss";
import { LineBreakerSelector } from "../../../../../shared/LineBreaker/LineBreakerSelector";
import "../../CaseStudy/CaseStudy.styles.scss";

type Props = {
  section: string;
  text: string;
};

export const CaseInfo = ({ section, text }: Props) => {
  return (
    <div className="case-info">
      <span>{section}</span>

      <LineBreakerSelector typedLines={text} />
    </div>
  );
};
