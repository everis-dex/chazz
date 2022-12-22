import React, { useEffect, useState } from "react";

import "../../Nav.scss";

type Props = {
  isOpen: boolean;
  toggleMenu: (event: React.MouseEvent) => void;
  color: string;
};

export const BurgerIcon = ({ isOpen, toggleMenu, color }: Props) => {
  const [iconColor, setIconColor] = useState<string>("");
  useEffect(() => {
    // Homepage
    if (color === "white") {
      setIconColor("white");
    }
    // Other page
    if (color === "black") {
      !isOpen ? setIconColor("black") : setIconColor("white");
    }
  }, [isOpen, color]);

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
