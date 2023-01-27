import React from "react";
import "../CaseStudy.styles.scss";
import { LineBreakerSelector } from "../../../../../shared/LineBreaker/LineBreakerSelector";
import "../../CaseStudy/CaseStudy.styles.scss";

type Props = {
  text: string;
};

export const CaseClaim = ({ text }: Props) => {
  return (
    <div className="fw-claim">
      <h1>
        <LineBreakerSelector typedLines={text} />
      </h1>
    </div>
  );
};
