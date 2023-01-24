import React from "react";

import { desktopLineBreakSymbol, mobileLineBreakSymbol, LineParagraphSymbol } from "../../../constants";
import { BrokenLines } from "./BrokenLines";

import "./LineBreaker.scss";

type Props = { typedLines?: string };

export const LineBreakerSelector = ({ typedLines }: Props) => {
  var desktopBrokenLines: string[] = [];
  var mobileBrokenLines: string[] = [];
  var paragraphBrokenLines: string[] = [];

  if (typedLines) {
    desktopBrokenLines = typedLines.split(desktopLineBreakSymbol);
    mobileBrokenLines = typedLines.split(mobileLineBreakSymbol);
    paragraphBrokenLines = typedLines.split(LineParagraphSymbol);
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
