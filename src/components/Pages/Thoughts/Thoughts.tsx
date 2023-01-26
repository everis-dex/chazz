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
  const [filtering, setFiltering] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filters = useRef<HTMLDivElement>(null);

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

    // Add event listener to each span element in filters div
    filters.current.childNodes.forEach((child: ChildNode): void => {
      const span = child as HTMLSpanElement;
      span.onclick = () => {
        deactivateSelectedFilter();
        span.classList.add("selected"); // Mark span as selected
        setSelectedFilter(span.innerHTML);
      };
    });
  }, [filters]);

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="thoughts-container">
        {/* Header section */}
        <div className="thoughts-header">
          <h1 className="header-title">{thoughtsPage.title}</h1>
          <img src={thoughtsPage.image} alt="Header" />
        </div>
        {/* Filtering section */}
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
          {thoughts
            // Show only the thoughts with selected category
            .filter((thought: IThought) => selectedFilter === "All" || selectedFilter === thought.category)
            .filter((t, index: number) => filtering && index < 6) // If filtering, show only the first 6 thoughts
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
              onClick={() => setFiltering(!filtering)}
            >
              {!filtering && (
                <RightArrow
                  stroke={!isHover ? "#191919" : "#fc82a3"}
                  className="icon-size"
                  style={{ transform: "rotate(180deg)" }}
                />
              )}
              &nbsp;
              {filtering ? "More thoughts" : " Less thoughts"}
              {filtering && <RightArrow stroke={!isHover ? "#191919" : "#fc82a3"} className="icon-size" />}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
