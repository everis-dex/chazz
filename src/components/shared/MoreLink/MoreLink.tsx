import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RightArrow } from "../../../assets/icn-right_arrow.svg";

import "./MoreLink.styles.scss";

type Props = { text: string; link: string };

export const MoreLink = ({ text, link }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link to={link} className="more-link" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <span>{text}</span>
      <RightArrow stroke={isHover ? "#fc82a3" : "#191919"} className="icon-size" />
    </Link>
  );
};
