import React, { useState, useRef } from "react";

import "./Dropdown.styles.scss";

type Props = { content: string[] };

export const Dropdown = ({ content }: Props) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const contentDiv = useRef<HTMLDivElement>(null);

  // Display options when clicking on dropdown header
  function display(): void {
    if (contentDiv && contentDiv.current) {
      const display = contentDiv.current.style.display;
      contentDiv.current.style.display = display === "block" ? "none" : display;
    }
  }

  // Hide options & set selected one
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
        {content.map((item: string, index: number) => (
          <div key={index} onClick={() => select(index)}>
            <a href={`#article${index}`}>{item}</a>
            <span className={"okay" + (index === selectedOption ? " selected" : "")}>✓</span>
          </div>
        ))}
      </div>
    </div>
  );
};
