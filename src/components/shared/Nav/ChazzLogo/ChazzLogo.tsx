import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo1 } from "../../../../assets/Chazz_logov2.svg";
import { ReactComponent as Logo2 } from "../../../../assets/NTT_Logo.svg";

import "../Nav.styles.scss";

type Props = { color: string; height: number };

export const ChazzLogo = ({ color, height }: Props) => {
  const h = height - 7 > 8 ? 8 : height - 7;
  const style = {
    height: h + "vh",
    transition: "1s"
  } as React.CSSProperties;

  return (
    <div className="chazz-logo">
      <Link to="/">
        <Logo1 fill={color} style={style} />
        {height <= 11 && <Logo2 fill={color} style={{ width: "5vh" }} />}
      </Link>
    </div>
  );
};
