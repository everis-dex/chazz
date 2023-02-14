import React, { useEffect, useRef, useState } from "react";

import { thoughts, thoughtsPage } from "../../../content/index";
import { IThought } from "../../../interfaces/cms";
import { AllowCookies, Footer, Nav } from "../../shared/index";
import { Thought } from "./Thought/Thought";

import { ReactComponent as RightArrow } from "../../../assets/icon-right_arrow.svg";

import "./Thoughts.styles.scss";

export const Thoughts = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [filtering, setFiltering] = useState<boolean>(true);
  const [videoSource, setVideoSource] = useState<string>(getVideoSource());
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filters = useRef<HTMLDivElement>(null);

  function getVideoSource(): string {
    return window.innerWidth < 1200 ? "/uploads/thoughts_cabecera-768.mp4" : thoughtsPage.image;
  }

  window.onresize = () => setVideoSource(getVideoSource());

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

  // Filtering functions
  const filterByCategory = (category: string) => selectedFilter === "All" || selectedFilter === category;

  const filterByLength = (length: number) =>
    thoughts.filter((t: IThought) => filterByCategory(t.category)).length > length;

  // Components
  const LessThoughts = () => (
    <>
      <RightArrow
        stroke={!isHover ? "#191919" : "#fc82a3"}
        className="icon-size"
        style={{ transform: "rotate(180deg)", marginLeft: "-2px" }}
      />
      &nbsp;&nbsp; Less thoughts
    </>
  );

  const MoreThoughts = () => (
    <>
      More thoughts &nbsp;&nbsp;
      <RightArrow stroke={!isHover ? "#191919" : "#fc82a3"} className="icon-size" />
    </>
  );

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="thoughts-container">
        {/* Header section */}
        <div className="thoughts-header">
          <h1 className="header-title">{thoughtsPage.title}</h1>
          <video autoPlay className="video-height" muted={true} src={videoSource} loop playsInline />
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
            .filter((t: IThought) => filterByCategory(t.category))
            .filter((t, index: number) => !filtering || index < 6) // If filtering, show only the first 6 thoughts
            .map((thought: IThought, index: number) => (
              <div className="thought" key={index}>
                <Thought {...thought} />
              </div>
            ))}
          {/* More | Less thoughts extender */}
          <div className="more-thoughts--div">
            <span style={{ display: filterByLength(6) ? "block" : "none" }}>
              {filterByLength(0) && (
                <a
                  href="#/"
                  className="more-thoughts"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  onClick={() => setFiltering(!filtering)}
                >
                  {filtering ? <MoreThoughts /> : <LessThoughts />}
                </a>
              )}
            </span>
            {thoughts.filter((t: IThought) => filterByCategory(t.category)).length === 0 && (
              <h2>
                No
                <span className="selected-filter">
                  {selectedFilter !== "All" ? ` ${selectedFilter.toLocaleLowerCase()} ` : " "}
                </span>
                thoughts yet!
              </h2>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
