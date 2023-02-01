import React from "react";

import { LineBreakerSelector } from "../../../../../shared/index";

import "../CaseStudy.styles.scss";

type Props = { section: string; text: string };

export const CaseInfo = ({ section, text }: Props) => {
  return (
    <div className="case-info">
      <span>{section}</span>

      <LineBreakerSelector typedLines={text} />
    </div>
  );
};
