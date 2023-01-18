import React from "react";

import "./AllowCookies.styles.scss";

type Props = {
  setIsAllowedMessageVisible: (a: boolean) => void;
}

export const AllowCookies = ({setIsAllowedMessageVisible}: Props) => {
  return (
    <div className="chazz-cookies">
      <p>
        <strong>We use cookies to improve your browsing experience. </strong>
        If you want to know more, read more in our &nbsp;
        <a href="/#">Privacy Policy</a> and <a href="/#">Cookie Policy</a>.
      </p>
      <button onClick={() => setIsAllowedMessageVisible(false)}>Allow cookies</button>
    </div>
  );
};
