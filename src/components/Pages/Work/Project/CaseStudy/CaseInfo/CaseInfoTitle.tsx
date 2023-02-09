import React from "react";

import { LineBreakerSelector } from "../../../../../shared/index";

import "../CaseStudy.styles.scss";

type Props = { text: string };

export const CaseInfoTitle = ({ text }: Props) => {
  return (
    <h1>
      <LineBreakerSelector typedLines={text} />
    </h1>
  );
};
