import React, { useState } from "react";

import "./Dropdown.styles.scss";

type Props = { content: string[] };

export const Dropdown = ({ content }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>(content[0]);

  function select(target: EventTarget): void {
    const element = target as HTMLAnchorElement;
    setSelectedOption(element.innerHTML);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-header">{selectedOption}</button>
      <div className="dropdown-content">
        {content.map((item: string, index: number) => {
          return (
            <a href="#/" key={index} onClick={e => select(e.target)}>
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};
