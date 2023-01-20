import React, { useState } from "react";

import lessInfoIcon from "../../../../../assets/icn_lessinformation.svg";
import moreInfoIcon from "../../../../../assets/icn_moreinformation.svg";

type Props = { title: string; content: string };

export const Option = ({ title, content }: Props) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  function handleDropdown(target: EventTarget): void {
    const accordion = target as HTMLElement;

    // Add space after the accordion in parent
    const parent = accordion.parentElement;
    if (parent) parent.style.marginBottom = openAccordion ? "0px" : "20px";

    // Show pannel
    const panel = accordion.nextElementSibling as HTMLElement;
    if (panel) {
      const height = openAccordion ? 0 : panel.scrollHeight;
      panel.style.maxHeight = height + "px";
    }
    setOpenAccordion(!openAccordion);
  }

  return (
    <div className="option">
      <div className="accordion" onClick={e => handleDropdown(e.target)}>
        {title}
        <div className="accordion-arrow" style={{ zIndex: "-10" }}>
          <img className={openAccordion ? "fadeIn" : "fadeOut"} src={moreInfoIcon} alt="moreInformation" />
          <img className={!openAccordion ? "fadeIn" : "fadeOut"} src={lessInfoIcon} alt="lessInformation" />
        </div>
      </div>
      <div className="panel">{content}</div>
    </div>
  );
};
