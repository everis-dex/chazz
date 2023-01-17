import React, { useState } from "react";

import lessInfoIcon from "../../../../assets/icn_lessinformation.svg";
import moreInfoIcon from "../../../../assets/icn_moreinformation.svg";

import "./Accordion.styles.scss";

type Props = { content: string };
export const Accordion = ({ content }: Props) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const dropdownText: string = openDropdown ? "Less" : "More";

  function handleFromChild(target: EventTarget) {
    const child = target as Element;
    const parent = child.parentElement as HTMLElement;
    handleDropdown(parent);
  }

  function handleDropdown(target: EventTarget) {
    const accordion = target as Element;

    // Show pannel
    const panel = accordion.nextElementSibling as HTMLElement;
    if (panel) {
      const height = openDropdown ? 0 : panel.scrollHeight;
      panel.style.maxHeight = height + "px";
    }

    setOpenDropdown(!openDropdown);
  }

  return (
    <div className="project-accordion">
      <button className="accordion" onClick={e => handleDropdown(e.target)}>
        <p onClick={e => handleFromChild(e.target)}>{dropdownText} information</p>
        <div className="accordion-arrow" onClick={e => handleFromChild(e.target)}>
          <img className={openDropdown ? "fadeIn" : "fadeOut"} src={moreInfoIcon} alt="moreInformation" />
          <img className={!openDropdown ? "fadeIn" : "fadeOut"} src={lessInfoIcon} alt="lessInformation" />
        </div>
      </button>
      <div className="panel">{content}</div>
    </div>
  );
};
