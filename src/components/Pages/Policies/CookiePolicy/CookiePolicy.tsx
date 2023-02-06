import React from "react";

import { cookiePolicy } from "../../../../content";
import { IPolicy } from "../../../../interfaces/cms";

import "./CookiePolicy.scss";

export const CookiePolicy = () => {
  const cookie: IPolicy = cookiePolicy;

  return <>{cookie.articles}</>;
};
