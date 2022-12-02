import React from 'react';
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
                                    <a href='#'>We are</a>
                                </li>
                                <li>
                                    <a href='#'>Services</a>
                                </li>
                                <li>
                                    <a href='#'>Work</a>
                                </li>
                                <li>
                                    <a href='#'>Thoughts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='chazz-title'>
                    <h1>Making the intangible, tangible</h1>
                    <h4>Hybrid & Strategic Digital Agency</h4>
                </div>

                <div className='chazz-cookies'>
                    <p>
                        <strong>We use cookies to improve your browsing experience. </strong>
                        If you want to know more, read more in our <a>Privacy Policy</a> and <a>Cookie Policy</a>.
                    </p>
                    <button>
                        Allow cookies
                    </button>
                </div>
            </>
        )
};

export default Header;