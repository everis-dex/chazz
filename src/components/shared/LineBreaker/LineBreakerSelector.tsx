import React from "react";

import { desktopLineBreakSymbol, mobileLineBreakSymbol, paragraphSymbol } from "../../../constants";
import { BrokenLines } from "./BrokenLines";

import "./LineBreaker.scss";

type Props = { typedLines?: string };

export const LineBreakerSelector = ({ typedLines }: Props) => {
  var desktopBrokenLines: string[] = [];
  var mobileBrokenLines: string[] = [];
  var paragraphBrokenLines: string[] = [];

  const jumpParagraphs = (brokenLines: string[]) => {
    brokenLines.map((line, index) => {
      if (line.includes(paragraphSymbol)) {
        const textBefore: string = line.split(paragraphSymbol)[0];
        const textAfter: string = line.split(paragraphSymbol)[1];
        brokenLines.splice(index, 2, textBefore, "", textAfter);
      }
    });
    return brokenLines;
  };

  if (typedLines) {
    desktopBrokenLines = jumpParagraphs(typedLines.split(desktopLineBreakSymbol));
    mobileBrokenLines = jumpParagraphs(typedLines.split(mobileLineBreakSymbol));
  }

  return (
    <>
      <div className="mobile-brokenlines">
        <BrokenLines
          brokenLines={mobileBrokenLines}
          lineBreakSymbol={desktopLineBreakSymbol}
          paragraphs={paragraphBrokenLines}
        />
      </div>
      <div className="desktop-brokenlines">
        <BrokenLines
          brokenLines={desktopBrokenLines}
          lineBreakSymbol={mobileLineBreakSymbol}
          paragraphs={paragraphBrokenLines}
        />
      </div>
    </>
  );
};
