import React from "react";

import "../Footer.styles.scss";

export const BottomBar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-item">
        <a className="item" href="https://es.nttdata.com/">
          an NTT Data Company
        </a>
      </div>
      <div className="footer-item">
        <div className="item">© Chazz {currentYear}</div>
        {/* For now, must be hidden*/}

        {/* <a className="item" href="/#">
          Privacy Policy
        </a>
        <a className="item" href="/#">
          Cookie Policy
        </a>
        <a className="item" href="/#">
          Cookie Settings
        </a> */}
      </div>
    </div>
  );
};
