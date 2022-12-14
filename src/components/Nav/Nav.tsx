import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <img src="assets/Chazz_Logo.svg" alt="logo" className="chazz-logo" />
      <div className="nav">
        <ul>
          <li>
            <Link to={"/weare"}>We are</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/work"}>Work</Link>
          </li>
          <li>
            <Link to={"thoughts"}>Thoughts</Link>
          </li>
        </ul>
      </div>
      <div className={`burger-menu ${menu ? "active" : ""}`}>
        <input id="open-close" name="open-close" type="checkbox" value="" />
        <label htmlFor="open-close" className="toggle-button" onClick={toggleMenu}></label>
        <nav className={`burger-nav ${menu ? "active" : ""}`}>
          <ul className="burger-ul">
            <li className="burger-li">
              <a className="burger-a" href="/#">
                We are
              </a>
            </li>
            <li className="burger-li">
              <a className="burger-a" href="/#">
                Services
              </a>
            </li>
            <li className="burger-li">
              <a className="burger-a" href="/#">
                Work
              </a>
            </li>
            <li className="burger-li">
              <a className="burger-a" href="/#">
                Thoughtss
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
