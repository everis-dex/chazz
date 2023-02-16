import React, { Fragment } from "react";

import { IProjectSection, ISectionColumn, ISectionFWImage, ISectionClaim } from "../../../../../../interfaces/cms";
import { SectionClaim, SectionImage, SectionImageWithOverlappedText, SectionColumn } from "./index";

export const CaseSection = (section: IProjectSection) => {
  // Create content depending on section type
  switch (section.type) {
    case "FWImage":
      const fwImage = section.content as ISectionFWImage;
      if (fwImage.overlappedText) {
        return <SectionImageWithOverlappedText src={fwImage.image} text={fwImage.overlappedText} />;
      } else {
        return <SectionImage src={fwImage.image} text={fwImage.caption} margin={fwImage.margin} />;
      }

    case "claim":
      const claim = section.content as ISectionClaim;
      return <SectionClaim text={claim.text} margin={claim.margin} />;

    case "columns":
      const columns = section.content as ISectionColumn[];
      return (
        <div className="work-container">
          <div className="section-flex-container">
            {columns.map((column: ISectionColumn, index: number) => {
              const { image, title, caption, body } = column;
              const position = index % 2 === 0 ? "left" : "right";
              const empty: boolean = image === "" && caption === "" && body === "" && title === "";
              return (
                <Fragment key={index}>
                  <SectionColumn
                    src={image}
                    title={title}
                    empty={empty}
                    caption={caption}
                    text={body}
                    position={position}
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
      );
  }
  return <></>;
};
