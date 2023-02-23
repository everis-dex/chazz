import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Chazz } from "../../../../assets/Chazz_logov2.svg";
import { ReactComponent as NTTCompany } from "../../../../assets/NTT_Logo.svg";

import "../Nav.styles.scss";

type Props = { color: string; height: number };

export const ChazzLogo = ({ color, height }: Props) => {
  const h = Math.min(height - 7, 8);
  const style = {
    height: h + "vh",
    transition: "1s"
  } as React.CSSProperties;

  return (
    <div className="chazz-logo">
      <Link to="/">
        <Chazz fill={color} style={style} />
        {height <= 11 && <NTTCompany fill={color} style={{ width: "5vh" }} />}
      </Link>
    </div>
  );
};
