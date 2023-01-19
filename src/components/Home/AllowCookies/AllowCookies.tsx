import React from "react";

import "./AllowCookies.styles.scss";

export const AllowCookies = () => {
  const cookiesAllowed = localStorage.getItem("cookiesAllowed");

  // TODO: To clean up cookies
  // localStorage.removeItem("cookiesAllowed");

  function handleAllowCookies(): void {
    localStorage.setItem("cookiesAllowed", "true");
  }

  return cookiesAllowed ? (
    <></>
  ) : (
    <div className="chazz-cookies">
      <p>
        <strong>We use cookies to improve your browsing experience. </strong>
        If you want to know more, read more in our &nbsp;
        <a href="/#">Privacy Policy</a> and <a href="/#">Cookie Policy</a>.
      </p>
      <button onClick={handleAllowCookies}>Allow cookies</button>
    </div>
  );
};
