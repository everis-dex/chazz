import React from "react";

import "../HomeHeader/HomeHeader.styles.scss";

export const AllowCookies = () => {
  return (
    <div className="chazz-cookies">
      <p>
        <strong>We use cookies to improve your browsing experience. </strong>
        If you want to know more, read more in our
        <a href="/#">Privacy Policy</a> and <a href="/#">Cookie Policy</a>.
      </p>
      <button>Allow cookies</button>
    </div>
  );
};
