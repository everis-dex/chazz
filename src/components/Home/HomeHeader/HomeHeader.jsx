import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./HomeHeader.scss";
// import Nav from "../../Nav/Nav";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="chazz-header">
        <div className="velo">
          <div>
            <img src="./Logo_Chazz.png" alt="logo" className="chazz-logo" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="/#HomeSection1">We are</a>{" "}
              </li>
              <li>
                <Link to={"/services"}>Services</Link>{" "}
              </li>
              <li>
                <a href="/#HomeSection2">Work</a>{" "}
              </li>
              <li>
                <Link to={"thoughts"}>Thoughts</Link>{" "}
              </li>
            </ul>
          </div>
          <div className={`burger-menu ${menu ? "active" : ""}`}>
            <input id="open-close" name="open-close" type="checkbox" value="" />
            <label
              for="open-close"
              class="toggle-button"
              onClick={toggleMenu}
            ></label>
            <nav className={`burger-nav ${menu ? "active" : ""}`}>
              <ul className="burger-ul">
                <li className="burger-li">
                  <a className="burger-a" href="#">
                    We are
                  </a>
                </li>
                <li className="burger-li">
                  <a className="burger-a" href="#">
                    Services
                  </a>
                </li>
                <li className="burger-li">
                  <a className="burger-a" href="#">
                    Work
                  </a>
                </li>
                <li className="burger-li">
                  <a className="burger-a" href="#">
                    Thoughts
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <Nav></Nav> */}
        </div>
      </div>
      <div className="chazz-title">
        <h1>Making the intangible, tangible</h1>
        <h4>Hybrid & Strategic Digital Agency</h4>
      </div>

      <div className="chazz-cookies">
        <p>
          <strong>We use cookies to improve your browsing experience. </strong>
          If you want to know more, read more in our <a>
            Privacy Policy
          </a> and <a>Cookie Policy</a>.
        </p>
        <button>Allow cookies</button>
      </div>
    </>
  );
};

export default Header;
