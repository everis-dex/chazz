import React, { useState } from "react";

import "./AllowCookies.styles.scss";

export const AllowCookies = () => {
  const cookiesAllowed = localStorage.getItem("cookiesAllowed");
  const [displayCookies, setDisplayCookies] = useState<boolean>(cookiesAllowed ? false : true);

  function handleAllowCookies(): void {
    localStorage.setItem("cookiesAllowed", "true");
    setDisplayCookies(false);
  }

  return (
    <>
      {cookiesAllowed && !displayCookies && (
        <div className="chazz-cookies">
          <p>
            <strong>We use cookies to improve your browsing experience. </strong>
            If you want to know more, read more in our &nbsp;
            <a href="/policies/0">Privacy Policy</a> and <a href="/policies/1">Cookie Policy</a>.
          </p>
          <button onClick={handleAllowCookies}>Allow cookies</button>
        </div>
      )}
    </>
  );
};
