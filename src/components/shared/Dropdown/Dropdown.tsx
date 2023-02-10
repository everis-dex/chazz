import React, { useState, useRef } from "react";

import "./Dropdown.styles.scss";

type Props = { content: string[] };

export const Dropdown = ({ content }: Props) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const contentDiv = useRef<HTMLDivElement>(null);

  // Display options when clicking on dropdown header
  function display(): void {
    if (contentDiv && contentDiv.current) {
      if (contentDiv.current.style.display === "block") {
        contentDiv.current.style.display = "none";
      } else {
        contentDiv.current.style.display = "block";
      }
    }
  }

  // Set selected option and hide options
  function select(index: number): void {
    setSelectedOption(index);
    if (contentDiv && contentDiv.current) contentDiv.current.style.display = "none";
  }
  return (
    <div className="dropdown">
      <button className="dropdown-header" onClick={display}>
        {content[selectedOption]}
      </button>
      <div className="dropdown-content" ref={contentDiv}>
        {content.map((item: string, index: number) => {
          return (
            <div key={index} onClick={() => select(index)}>
              <a href={`#article${index}`}>{item}</a>
              <span className={"okay" + (index === selectedOption ? " selected" : "")}>✓</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
