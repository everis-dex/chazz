import React from "react";

import "../Footer.styles.scss";

export const BottomBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {/* Company */}
      <div className="footer-item">
        <a className="item" href="https://es.nttdata.com/">
          an NTT Data Company
        </a>
      </div>

      {/* Policy links */}
      <div className="footer-item">
        <div className="item">© Chazz {currentYear}</div>
        <a className="item" href="/policies/0">
          Privacy Policy
        </a>
        <a className="item" href="/policies/1">
          Cookie Policy
        </a>
        {/* <a className="item" href="/#">
          Cookie Settings
        </a> */}
      </div>
    </div>
  );
};
