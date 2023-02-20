import React, { useEffect, useState } from "react";

import "./BurgerIcon.styles.scss";

type Props = {
  isBurgerMenuOpen: boolean;
  toggleMenu: () => void;
  color: string;
};

export const BurgerIcon = ({ isBurgerMenuOpen, toggleMenu, color }: Props) => {
  const [iconColor, setIconColor] = useState<string>("");

  useEffect(() => {
    setIconColor(isBurgerMenuOpen ? "white" : color);
  }, [isBurgerMenuOpen, color]);

  return (
    <>
      <input id="open-close" name="open-close" type="checkbox" value="" />
      <label
        htmlFor="open-close"
        className={`toggle-button ${iconColor === "white" ? "" : "pages"}`}
        onClick={toggleMenu}
      />
    </>
  );
};
