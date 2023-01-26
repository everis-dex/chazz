import React from "react";
import "./LineBreaker.scss";

type Props = {
  brokenLines: string[];
  lineBreakSymbol: string;
};

export const BrokenLines = ({ brokenLines, lineBreakSymbol }: Props) => {
  return (
    <>
      {brokenLines.length > 0 && (
        <>
          {brokenLines.map((titleLine: string, index: number) => (
            <React.Fragment key={index}>
              {titleLine.replace(new RegExp(`\\${lineBreakSymbol}`, "g"), "")}
              <br />
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};
