import React from "react";

import { LineBreakerSelector } from "../../../../../../shared/index";

type Props = { section: string; text: string };

export const SectionInfo = ({ section, text }: Props) => {
  return (
    <div className="case-info">
      <span>{section}</span>

      <LineBreakerSelector typedLines={text} />
    </div>
  );
};
