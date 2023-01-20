import React, { useState } from "react";

import lessInfoIcon from "../../../assets/icn_lessinformation.svg";
import moreInfoIcon from "../../../assets/icn_moreinformation.svg";

import "./Accordion.styles.scss";

type Props = { title: string; content: string, ourWork: boolean };

export const Accordion = ({ title, content, ourWork }: Props) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  const defaultDropdownText: string[] = ["More information", "Less information"];
  const accordionTitle: string[] = title === "" ? defaultDropdownText : [title, title];

  function handleDropdown(target: EventTarget): void {
    const accordion = target as HTMLElement;

    // Add space after the accordion in parent
    const parent = accordion.parentElement;
    if (parent) parent.style.marginBottom = openAccordion ? "0px" : "20px";

    // Show pannel
    const panel = accordion.nextElementSibling as HTMLElement;
    if (panel) {
      const height = openAccordion ? 0 : panel.scrollHeight + 5;
      panel.style.maxHeight = height + "px";
    }
    setOpenAccordion(!openAccordion);
  }

  return (
    <div className={!ourWork ? "separator" : ""}>
      <div className={ourWork ? "mobile-accordion" : ""}>
        <div className={openAccordion ? "accordion-open" : "accordion-close"} onClick={e => handleDropdown(e.target)}>
          <span className={openAccordion ? "text-fadeIn" : "text-fadeOut"} onClick={e => handleDropdown(e.target)}>{accordionTitle[0]}</span>
          <span className={!openAccordion ? "text-fadeIn" : "text-fadeOut"} onClick={e => handleDropdown(e.target)}>{accordionTitle[1]}</span>
          <div className="accordion-arrow" style={{ zIndex: "-10" }}>
            <img className={openAccordion ? "icon-fadeIn" : "icon-fadeOut"} src={moreInfoIcon} alt="moreInformation" />
            <img className={!openAccordion ? "icon-fadeIn" : "icon-fadeOut"} src={lessInfoIcon} alt="lessInformation" />
          </div>
        </div>
        <div className={ourWork ? "panel-work" : "panel-services"} style={{ paddingTop: openAccordion ? "20px" : "0px" }}><p>{content}</p></div>
      </div>
    </div >
  );
};
