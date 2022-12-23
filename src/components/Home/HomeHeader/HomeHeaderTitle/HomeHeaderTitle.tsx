import React from "react";

import { Fragment } from "react";

type Props = {
  titleLines: string[];
  uselessLineBreakSymbol: string;
};

export const HomeHeaderTitle = ({ titleLines, uselessLineBreakSymbol }: Props) => {
  return (
    <h1>
      {titleLines.map((titleLine: string, index) => (
        <Fragment key={index}>
          {titleLine.replace(uselessLineBreakSymbol, "")}
          <br />
        </Fragment>
      ))}
    </h1>
  );
};
