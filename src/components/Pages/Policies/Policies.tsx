import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { policies } from "../../../content";
import { IPolicy } from "../../../interfaces/cms";

import { AllowCookies, LineBreakerSelector, Nav } from "../../shared";
import { Articles } from "./Articles/Articles";

import "./Policies.scss";

export const Policies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove("no-scroll");
  }, []);

  // Set initial policy and crete useState
  const { id } = useParams();
  const selectedPolicy = id ? Math.min(parseInt(id), policies.length - 1) : 0;
  const [policyIndex, setPolicyIndex] = useState<number>(selectedPolicy);

  const [resetAtricleTrigger, setResetAtricleTrigger] = useState<number>(0);
  const title = "Privacy Policy+ & Cookie Declaration";

  function changePolicy(index: number) {
    // Reset selected article in policy
    setResetAtricleTrigger(resetAtricleTrigger => resetAtricleTrigger + 1);
    // Change selected policy
    setPolicyIndex(index);
  }

  return (
    <>
      <Nav />
      <AllowCookies />
      <div className="page-container policies-container">
        <div className="page-header">
          <h1 className="header-title">
            <LineBreakerSelector typedLines={title} />
          </h1>
        </div>

        <div className="policies-selector">
          {policies.map((policy: IPolicy, index: number) => {
            const setSelected: string = policyIndex === index ? "selected" : "";
            return (
              <span className={`filter-category ${setSelected}`} key={index} onClick={() => changePolicy(index)}>
                {policy.title}
              </span>
            );
          })}
        </div>

        <Articles policy={policies[policyIndex]} resetArticle={resetAtricleTrigger} />
      </div>
    </>
  );
};
