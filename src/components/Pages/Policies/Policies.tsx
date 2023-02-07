import React, { useEffect, useState } from "react";

import { policies } from "../../../content";
import { IPolicy } from "../../../interfaces/cms";

import { AllowCookies, Footer, LineBreakerSelector, Nav } from "../../shared";
import { Articles } from "./Articles/Articles";

import "./Policies.scss";

export const Policies = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const title = "Privacy Policy+ & Cookie Declaration";
  const [policyIndex, setPolicyIndex] = useState<number>(0);

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="policies-container">
        <div className="policies-header">
          <h1 className="header-title">
            <LineBreakerSelector typedLines={title} />
          </h1>
        </div>

        <div className="policies-selector">
          {policies.map((policy: IPolicy, index: number) => {
            const setSelected: string = policyIndex === index ? "selected" : "";
            return (
              <span className={`filter-category ${setSelected}`} key={index} onClick={() => setPolicyIndex(index)}>
                {policy.title}
              </span>
            );
          })}
        </div>

        <div className="selected-content">
          <Articles {...policies[policyIndex]} />
        </div>
      </div>
      <Footer />
    </>
  );
};
