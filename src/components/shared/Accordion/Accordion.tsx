import React, { useEffect, useRef, useState } from "react";

import lessInfoIcon from "../../../assets/icn-less_info.svg";
import moreInfoIcon from "../../../assets/icn-more_info.svg";
import { LineBreakerSelector } from "../index";

import "./Accordion.styles.scss";

type Props = { title: string; content?: string; ourWork: boolean; html?: string };

export const Accordion = ({ title, content, ourWork, html }: Props) => {
  const defaultDropdownText: string[] = ["More information", "Less information"];

  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!contentRef || !contentRef.current) return;
    const container = contentRef.current as HTMLElement;
    if (html) container.innerHTML = html;
  }, [html]);

  return (
    <div className={!ourWork ? "separator" : ""}>
      <div className={ourWork ? "mobile-accordion" : "another-accordion"}>
        <div
          className={openAccordion && !ourWork ? "accordion-open" : "accordion-close"}
          onClick={e => handleDropdown(e.target)}
        >
          {title ? (
            <span className="no-fading-text" onClick={e => handleDropdown(e.target)}>
              {title}
            </span>
          ) : (
            <>
              <span className={openAccordion ? "text-fadeIn" : "text-fadeOut"} onClick={e => handleDropdown(e.target)}>
                {defaultDropdownText[0]}
              </span>
              <span className={!openAccordion ? "text-fadeIn" : "text-fadeOut"} onClick={e => handleDropdown(e.target)}>
                {defaultDropdownText[1]}
              </span>
            </>
          )}
          <div className={!ourWork ? "accordion-arrow" : "accordion-arrow-work"} style={{ zIndex: "-10" }}>
            <img className={openAccordion ? "icon-fadeIn" : "icon-fadeOut"} src={moreInfoIcon} alt="moreInformation" />
            <img className={!openAccordion ? "icon-fadeIn" : "icon-fadeOut"} src={lessInfoIcon} alt="lessInformation" />
          </div>
        </div>
        <div className={ourWork ? "panel-work" : "panel-services"} ref={contentRef}>
          {content && (
            <div className="linebreaker">
              <LineBreakerSelector typedLines={content} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
