import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'



const Header = () => {
    
        return (
            <>
                <div className='chazz-header'>
                    <div className='velo'> 
                        <div>
                            <img src='./Logo_Chazz.png' alt='logo' className='chazz-logo'/>
                        </div>
                        <div className='nav'>
                            <ul>
                                <li>
                                    <a href='#weare'>We are</a> {/* Si desde el menú vamos al anchor #weare */}
                                </li>
                                <li>
                                    <a href='services'>Services</a> {/* Si desde el menú vamos al anchor #services */}
                                </li>
                                <li>
                                    <a href='#work'>Work</a> {/* Si desde el menú vamos al anchor #work */}
                                </li>
                                <li>
                                    <a href='#thougths'>Thoughts</a> {/* Si desde el menú vamos al anchor #thoughts */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='chazz-title'>
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