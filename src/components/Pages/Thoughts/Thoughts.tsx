import React, { useEffect, useRef, useState } from "react";

import { thoughts, thoughtsPage } from "../../../content/index";
import { IThought } from "../../../interfaces/cms";

import { AllowCookies } from "../../Home";
import { Footer, MoreLink, Nav } from "../../shared/index";
import { Thought } from "./Thought/Thought";

import { ReactComponent as RightArrow } from "../../../assets/icon-right_arrow.svg";

import "./Thoughts.styles.scss";

export const Thoughts = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isFiltered, setIsFiltered] = useState<boolean>(true);
  const [selected, setSelected] = useState<HTMLSpanElement>();
  const filters = useRef<HTMLDivElement>(null);

  const displayingThoughts: IThought[] = isFiltered ? thoughts.slice(0, 6) : thoughts;

  useEffect(() => {
    if (!filters || !filters.current) return;

    function deactivateSelectedFilter(): void {
      if (!filters || !filters.current) return;
      // Remove selected class from all filter span
      filters.current.childNodes.forEach((child: ChildNode) => {
        const span = child as HTMLSpanElement;
        span.classList.remove("selected");
      });
    }

    /* Adding an event listener to each span element in the filters div. */
    filters.current.childNodes.forEach((child: ChildNode): void => {
      const span = child as HTMLSpanElement;
      span.onclick = (e: Event) => {
        deactivateSelectedFilter();
        span.classList.add("selected"); // Mark span as selected
        setSelected(span);
      };
    });
  }, [filters]);

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="thoughts-container">
        <div className="thoughts-header">
          <h1 className="header-title">{thoughtsPage.title}</h1>
          <img loading="lazy" src={thoughtsPage.image} alt="Header" />
        </div>
        <div className="thoughts-filtering" ref={filters}>
          <span className="filter-category selected">All</span>
          {thoughtsPage.categories.map((category: string, index: number) => (
            <span className="filter-category" key={index}>
              {category}
            </span>
          ))}
        </div>
        {/* Thoughts section */}
        <div className="thoughts">
          {displayingThoughts
            .filter(
              (thought: IThought) =>
                selected && (selected.innerHTML === "All" || thought.category === selected.innerHTML)
            )
            .map((thought: IThought, index: number) => (
              <div className="thought" key={index}>
                <Thought {...thought} />
              </div>
            ))}

          <div className="more-thoughts--div">
            <a
              href="#/"
              className="more-thoughts"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => setIsFiltered(!isFiltered)}
            >
              {!isFiltered && (
                <RightArrow
                  stroke={!isHover ? "#191919" : "#fc82a3"}
                  className="icon-size"
                  style={{ transform: "rotate(180deg)" }}
                />
              )}
              &nbsp;
              {isFiltered ? "More thoughts" : " Less thoughts"}
              {isFiltered && <RightArrow stroke={!isHover ? "#191919" : "#fc82a3"} className="icon-size" />}
            </a>
          </div>
        </div>
        {/* More thoughts */}
        <div className="thoughts-arrow">
          <MoreLink text="More thoughts" link="/thoughts" />
        </div>
      </div>

      <Footer />
    </>
  );
};
