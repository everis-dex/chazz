import React from "react";

import { Nav } from "../../Nav/Nav";
import "./HomeHeader.scss";

export const HomeHeader = () => {
  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <Nav color="white" />
        </div>
      </div>
      <div className="chazz-title">
        <h1>Making the intangible, tangible</h1>
        <h4>Hybrid & Strategic Digital Agency</h4>
      </div>

      <div className="chazz-cookies">
        <p>
          <strong>We use cookies to improve your browsing experience. </strong>
          If you want to know more, read more in our
          <a href="/#">Privacy Policy</a> and <a href="/#">Cookie Policy</a>.
        </p>
        <button>Allow cookies</button>
      </div>
    </>
  );
};
