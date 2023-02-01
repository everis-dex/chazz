import React from "react";

import { LineBreakerSelector } from "../../../../../shared/index";

import "../CaseStudy.styles.scss";

type Props = { text: string };

export const CaseClaim = ({ text }: Props) => {
  return (
    <div className="fw-claim">
      <h1>
        <LineBreakerSelector typedLines={text} />
      </h1>
    </div>
  );
};
