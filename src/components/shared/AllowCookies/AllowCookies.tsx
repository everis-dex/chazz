import React, { useState } from "react";

import "./AllowCookies.styles.scss";

export const AllowCookies = () => {
  const cookiesAllowed = localStorage.getItem("cookiesAllowed");
  const [displayCookies, setDisplayCookies] = useState<boolean>(cookiesAllowed ? false : true);

  // TODO: To clean up cookies
  // localStorage.removeItem("cookiesAllowed");

  function handleAllowCookies(): void {
    localStorage.setItem("cookiesAllowed", "true");
    setDisplayCookies(false);
  }

  return cookiesAllowed && !displayCookies ? (
    <></>
  ) : (
    <div className="chazz-cookies">
      <p>
        <strong>We use cookies to improve your browsing experience. </strong>
        If you want to know more, read more in our &nbsp;
        {/* <a href="/privacy_policy">Privacy Policy</a> and <a href="/cookie_policy">Cookie Policy</a>. */}
        <a href="#/">Privacy Policy</a> and <a href="#/">Cookie Policy</a>.
      </p>
      <button onClick={handleAllowCookies}>Allow cookies</button>
    </div>
  );
};
