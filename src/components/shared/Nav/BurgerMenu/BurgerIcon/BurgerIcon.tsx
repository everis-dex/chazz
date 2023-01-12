import React, { useEffect, useState } from "react";

import "./BurgerIcon.styles.scss";

type Props = {
  isBurgerMenuOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  color: string;
};

export const BurgerIcon = ({ isBurgerMenuOpen, toggleMenu, color }: Props) => {
  const [iconColor, setIconColor] = useState<string>("");

  useEffect(() => {
    if (isBurgerMenuOpen) {
      setIconColor("white");
    } else {
      setIconColor(color);
    }
  }, [isBurgerMenuOpen, color]);

  return (
    <>
      <input id="open-close" name="open-close" type="checkbox" value="" />
      <label
        htmlFor="open-close"
        className={iconColor === "white" ? "toggle-button" : "toggle-button-pages"}
        onClick={toggleMenu}
      />
    </>
  );
};
