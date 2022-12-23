import React, { Fragment } from "react";

import { BrokenLines } from "./BrokenLines";

import { desktopLineBreakSymbol, mobileLineBreakSymbol } from "../../../constants";

import "./LineBreaker.scss";

type Props = {
  typedLines: string;
};

export const LineBreakerSelector = ({ typedLines }: Props) => {
  const desktopBrokenLines: string[] = typedLines.split(desktopLineBreakSymbol);
  const mobileBrokenLines: string[] = typedLines.split(mobileLineBreakSymbol);

  return (
    <>
      <div className="mobile-brokenlines">
        <BrokenLines brokenLines={mobileBrokenLines} uselessLineBreakSymbol={desktopLineBreakSymbol} />
      </div>
      <div className="desktop-brokenlines">
        <BrokenLines brokenLines={desktopBrokenLines} uselessLineBreakSymbol={mobileLineBreakSymbol} />
      </div>
    </>
  );
};
