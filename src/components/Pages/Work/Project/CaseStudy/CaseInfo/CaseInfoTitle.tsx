import React from "react";
import { LineBreakerSelector } from "../../../../../shared/LineBreaker/LineBreakerSelector";
import "../../CaseStudy/CaseStudy.styles.scss";
type Props = {
  text: string;
};

export const CaseInfoTitle = ({ text }: Props) => {
  return (
    <div>
      <LineBreakerSelector typedLines={text} />
    </div>
  );
};
