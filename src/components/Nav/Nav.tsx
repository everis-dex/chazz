import React, { useState } from "react";

import { ChazzLogo } from "./ChazzLogo/ChazzLogo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

import "./Nav.scss";

type Props = { color: string };

const Nav = ({ color }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChazzLogo color={color} />
      <DesktopMenu color={color} />
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} color={color} />
    </>
  );
};

export default Nav;
