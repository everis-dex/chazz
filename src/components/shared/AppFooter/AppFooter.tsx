import React from "react";

import "./AppFooter.styles.scss";

export const AppFooter = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-item">an NTT Data Company</div>
        <div className="footer-item">
          <div className="item">© Chazz 2022</div>
          <a className="item" href="/#">
            Privacy Policy
          </a>
          <a className="item" href="/#">
            Cookie Policy
          </a>
          <a className="item" href="/#">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};
