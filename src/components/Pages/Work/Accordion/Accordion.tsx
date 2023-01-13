import React, { useState } from "react";

import "./Accordion.styles.scss";

import moreInfoIcon from "../../../../assets/icn_moreinformation.svg"
import lessInfoIcon from "../../../../assets/icn_lessinformation.svg"

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
    // Rotate arrow
    const arrow = accordion.children[1] as HTMLElement;
    // if (arrow) arrow.style.transform = openDropdown ? "rotate(90deg)" : "rotate(-90deg)";
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
        <div className="accordion-arrow" onClick={e => handleFromChild(e.target)} >
          < img className={!openDropdown ? "fadeIn" : "fadeOut"} src={moreInfoIcon} />
          < img className={openDropdown ? "fadeIn" : "fadeOut"} src={lessInfoIcon} />
        </div>
      </button>
      <div className="panel">{content}</div>
    </div>
  );
};
